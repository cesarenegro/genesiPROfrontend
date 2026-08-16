import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { Product, Locale } from '@/lib/catalogue';
import path from 'path';
import fs from 'fs';

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
  const l = locale as Locale;
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
          <Text style={styles.sku}>SKU: {product.sku}</Text>
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
              <Text style={styles.detailLabel}>Dimensions</Text>
              <Text style={styles.detailValue}>{dimensions}</Text>
            </View>
          ) : null}
          
          {materials ? (
            <View style={styles.detailBox}>
              <Text style={styles.detailLabel}>Materials & Finishes</Text>
              <Text style={styles.detailValue}>{materials}</Text>
            </View>
          ) : null}
          
          {specifications ? (
            <View style={styles.detailBox}>
              <Text style={styles.detailLabel}>Specifications</Text>
              <Text style={styles.detailValue}>{specifications}</Text>
            </View>
          ) : null}
        </View>
        
        {description ? (
          <View style={{ marginTop: 20 }}>
            <Text style={styles.detailLabel}>Description</Text>
            <Text style={styles.detailValue}>{description}</Text>
          </View>
        ) : null}
        
      </Page>
    </Document>
  );
}
