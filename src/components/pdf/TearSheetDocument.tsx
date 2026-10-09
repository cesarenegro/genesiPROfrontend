import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { Product, Locale } from '@/lib/catalogue';
import path from 'path';
import fs from 'fs';

const pdfLabels: Record<string, { sku: string; dimensions: string; materialsFinishes: string; specifications: string; description: string }> = {
  en: { sku: 'SKU', dimensions: 'Dimensions', materialsFinishes: 'Materials & Finishes', specifications: 'Specifications', description: 'Description' },
  it: { sku: 'SKU', dimensions: 'Dimensioni', materialsFinishes: 'Materiali e Finiture', specifications: 'Specifiche Tecniche', description: 'Descrizione' },
  fr: { sku: 'RÉF', dimensions: 'Dimensions', materialsFinishes: 'Matériaux et Finitions', specifications: 'Spécifications Techniques', description: 'Description' },
  de: { sku: 'ARTIKEL-NR.', dimensions: 'Abmessungen', materialsFinishes: 'Materialien & Oberflächen', specifications: 'Technische Daten', description: 'Beschreibung' },
  ru: { sku: 'АРТИКУЛ', dimensions: 'Размеры', materialsFinishes: 'Материалы и Отделка', specifications: 'Характеристики', description: 'Описание' },
  zh: { sku: '型号', dimensions: '产品规格', materialsFinishes: '材质与饰面', specifications: '技术规格', description: '产品描述' },
  id: { sku: 'SKU', dimensions: 'Dimensi', materialsFinishes: 'Bahan & Hasil Akhir', specifications: 'Spesifikasi', description: 'Deskripsi' }
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
    borderBottom: '1 solid #E5E5E5',
    paddingBottom: 20,
  },
  logoText: {
    fontSize: 14,
    color: '#111111',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'Helvetica-Bold',
  },
  sku: {
    fontSize: 10,
    color: '#666666',
    letterSpacing: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    color: '#111111',
    marginTop: 5,
    fontFamily: 'Helvetica-Bold',
  },
  imageContainer: {
    marginVertical: 20,
    height: 350,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    objectFit: 'contain',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  detailsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTop: '1 solid #E5E5E5',
    paddingTop: 20,
  },
  detailBox: {
    width: '50%',
    marginBottom: 20,
    paddingRight: 20,
  },
  detailLabel: {
    fontSize: 9,
    color: '#111111',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  detailValue: {
    fontSize: 11,
    color: '#666666',
    lineHeight: 1.5,
  }
});

interface Props {
  product: Product;
  locale: string;
}

export function TearSheetDocument({ product, locale }: Props) {
  const l = (locale || 'en') as Locale;
  const labels = pdfLabels[l] || pdfLabels.en;

  const title = product.title?.[l] || product.title?.en;
  const description = product.description?.[l] || product.description?.en || '';
  const materials = product.materials?.[l] || product.materials?.en || '';
  const dimensions = product.dimensions?.[l] || product.dimensions?.en || '';
  const specifications = product.specifications?.[l] || product.specifications?.en || '';

  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];
  
  let imageSrc = '';
  if (primaryImage) {
    const fullPath = path.join(process.cwd(), 'public', primaryImage.url);
    if (fs.existsSync(fullPath)) {
      try {
        const base64 = fs.readFileSync(fullPath).toString('base64');
        const ext = path.extname(fullPath).slice(1).toLowerCase();
        const mime = ext === 'jpg' || ext === 'jpeg' ? 'jpeg' : 'png';
        imageSrc = `data:image/${mime};base64,${base64}`;
      } catch (e) {
        console.error('Failed to read image for PDF', e);
      }
    }
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logoText}>GENESI ITALIA</Text>
          <Text style={styles.sku}>{labels.sku}: {product.sku}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>

        {imageSrc ? (
          <View style={styles.imageContainer}>
            <Image src={imageSrc} style={styles.image} />
          </View>
        ) : null}

        <View style={styles.detailsContainer}>
          {dimensions ? (
            <View style={styles.detailBox}>
              <Text style={styles.detailLabel}>{labels.dimensions}</Text>
              <Text style={styles.detailValue}>{dimensions}</Text>
            </View>
          ) : null}
          
          {materials ? (
            <View style={styles.detailBox}>
              <Text style={styles.detailLabel}>{labels.materialsFinishes}</Text>
              <Text style={styles.detailValue}>{materials}</Text>
            </View>
          ) : null}
          
          {specifications ? (
            <View style={styles.detailBox}>
              <Text style={styles.detailLabel}>{labels.specifications}</Text>
              <Text style={styles.detailValue}>{specifications}</Text>
            </View>
          ) : null}
        </View>
        
        {description ? (
          <View style={{ marginTop: 20 }}>
            <Text style={styles.detailLabel}>{labels.description}</Text>
            <Text style={styles.detailValue}>{description}</Text>
          </View>
        ) : null}
        
      </Page>
    </Document>
  );
}
