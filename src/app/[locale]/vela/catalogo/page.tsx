'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';

export default function VelaCatalogoPage() {
  const catalogues = [
    {
      id: 'it',
      language: 'Italiano (IT)',
      title: 'Catalogo Generale VELA',
      subtitle: 'Edizione Ufficiale Completa — Italiano',
      filename: 'VELA_Catalogo_Completo_IT.pdf',
      href: '/docs/VELA_Catalogo_Completo_IT.pdf',
      cover: '/images/vela/catalogo/cover_catalogo_it.png',
      size: '24.8 MB',
      pages: '63 Pagine HD',
      rev: 'Rev. 00 · 2026',
      badge: 'ITALIANO (IT)',
      summary:
        'Documento tecnico completo comprensivo di tutta la gamma VELA: 10 porte per interni, 10 porte hospitality con lettori RFID, 6 maniglie architetturali, cartella finiture e schemi costruttivi.',
      features: [
        'Porte Interni (IN-01 — IN-10)',
        'Porte Hospitality & Camere Hotel (HT-01 — HT-10)',
        'Cartella Finiture Ufficiale (20 Finiture Materiche)',
        'Sistemi di Presa, Maniglie e Ferramenta RFID',
        'Schede Costruttive: Legno, Composito e Vetro'
      ]
    },
    {
      id: 'en',
      language: 'English (EN)',
      title: 'Official VELA Catalogue',
      subtitle: 'Complete International Edition — English',
      filename: 'VELA_Catalogue_Complete_EN.pdf',
      href: '/docs/VELA_Catalogue_Complete_EN.pdf',
      cover: '/images/vela/catalogo/cover_catalogo_en.png',
      size: '25.5 MB',
      pages: '63 HD Pages',
      rev: 'Rev. 00 · 2026',
      badge: 'ENGLISH (EN)',
      summary:
        'Complete architectural documentation covering the whole VELA portfolio: 10 interior doors, 10 hospitality doors with RFID access, 6 concept handles, 20 material finishes, and technical construction sections.',
      features: [
        'Interior Residential Doors (IN-01 — IN-10)',
        'Hospitality & Hotel Suite Doors (HT-01 — HT-10)',
        'Official 20 Material Finishes & Textures',
        'Architectural Handles, Flush Pulls & RFID Hardware',
        'Wall Integration & Construction Sections'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <VelaCategoryNav activeCategory="catalogo" />

        {/* Editorial Header */}
        <header className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
              DOCUMENTAZIONE TECNICA UFFICIALE · EDIZIONE 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-zinc-950 dark:text-zinc-50 mb-6">
              Scarica il Catalogo VELA
            </h1>
            <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Disponibile in versione italiana e in edizione internazionale in lingua inglese. Clicca sull'immagine della copertina o sul pulsante dedicato per avviare il download del PDF in alta risoluzione.
            </p>
          </div>
        </header>

        {/* 2 Cards Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch">
              {catalogues.map((cat) => (
                <div
                  key={cat.id}
                  className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-zinc-500 dark:hover:border-zinc-400 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Clickable Cover Canvas */}
                    <a
                      href={cat.href}
                      download={cat.filename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full h-[460px] sm:h-[540px] md:h-[480px] lg:h-[560px] bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b border-zinc-200 dark:border-zinc-800 cursor-pointer"
                      style={{ aspectRatio: '1 / 1.414' }}
                      title={`Clicca per scaricare ${cat.title}`}
                    >
                      <Image
                        src={cat.cover}
                        alt={`${cat.title} Cover`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                        priority
                      />

                      {/* Download Overlay Hover Prompt */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-white text-zinc-950 font-semibold uppercase tracking-widest text-xs shadow-lg">
                          Scarica PDF ({cat.size}) ↓
                        </span>
                      </div>

                      {/* Language Badge */}
                      <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1 border border-white/20">
                        {cat.badge}
                      </div>

                      {/* Tech Spec Pill */}
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/85 backdrop-blur-xs text-zinc-900 dark:text-zinc-200 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border border-zinc-300 dark:border-zinc-700">
                        {cat.pages}
                      </div>
                    </a>

                    {/* Editorial Content */}
                    <div className="p-8 space-y-5">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                          <span>{cat.rev}</span>
                          <span>PDF · {cat.size}</span>
                        </div>
                        <h2 className="text-2xl font-light text-zinc-950 dark:text-zinc-50 tracking-tight">
                          {cat.title}
                        </h2>
                        <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
                          {cat.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {cat.summary}
                      </p>

                      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block mb-2.5">
                          Contenuto Documentato:
                        </span>
                        <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-light">
                          {cat.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 inline-block shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Action Download Button */}
                  <div className="p-8 pt-0">
                    <a
                      href={cat.href}
                      download={cat.filename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold shadow-xs"
                    >
                      <span>Scarica Edizione {cat.language}</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Support & Direct Inquiries */}
      <footer className="py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 text-center">
        <div className="container mx-auto px-6 max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
            SERVIZIO CONTRACT & ARCHITETTURA
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light">
            Hai bisogno dei file CAD, DWG esecutivi o del cofanetto campioni per un capitolato?
          </p>
          <Link
            href="/contact?inquiry=contract"
            className="inline-block text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 underline hover:opacity-75 transition-opacity"
          >
            Contatta l'Ufficio Tecnico VELA →
          </Link>
        </div>
      </footer>
    </div>
  );
}
