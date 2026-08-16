import { getProducts } from '@/lib/catalogue';
import { renderToBuffer } from '@react-pdf/renderer';
import { TearSheetDocument } from '@/components/pdf/TearSheetDocument';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;

  const url = new URL(request.url);
  const locale = url.searchParams.get('locale') || 'en';

  const allProducts = await getProducts();
  const product = allProducts.find(p => p.slug === productSlug);

  if (!product) {
    return new NextResponse('Product not found', { status: 404 });
  }

  try {
    const buffer = await renderToBuffer(<TearSheetDocument product={product} locale={locale} />);

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${product.sku}.pdf"`,
        'Content-Length': buffer.length.toString(),
      },
    });
  } catch (error: any) {
    console.error('Error generating PDF:', error);
    return new NextResponse('Error generating PDF', { status: 500 });
  }
}
