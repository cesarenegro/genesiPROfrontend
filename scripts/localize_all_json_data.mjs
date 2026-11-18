import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.resolve(__dirname, '../src/data');

// ============================================================================
// 1. VELA.JSON (24 Products: IN-01..IN-10, HT-01..HT-10, SHOWER 01..04)
// ============================================================================
const velaPath = path.join(dataDir, 'vela.json');
const velaData = JSON.parse(fs.readFileSync(velaPath, 'utf-8'));

const velaProductTranslations = {
  "IN-01": {
    name: {
      fr: "Porte Pivot SELVA — Chêne Fumé",
      de: "Pivot-Tür SELVA — Räuchereiche"
    },
    summary: {
      fr: "Ouverture pivotante sculpturale en chêne thermo-traité fumé de forte épaisseur. Rotation fluide par pivot invisible encastré.",
      de: "Skulpturale Pivot-Tür aus thermobehandelter Räuchereiche in starker Materialstärke. Fließende Drehung durch verdeckten Drehzapfen."
    },
    features: [
      {
        fr: "Ouverture pivotante sans paumelles apparentes",
        de: "Pivot-Drehmechanismus ohne sichtbare Bänder"
      },
      {
        fr: "Finition chêne fumé thermo-traité à pores ouverts",
        de: "Offenporig thermobehandelte Räuchereiche"
      },
      {
        fr: "Affleurement mural absolu",
        de: "Vollkommene Wandbündigkeit"
      }
    ]
  },
  "IN-02": {
    name: {
      fr: "Porte Battante Affleurante ALBA — Laque Ivoire",
      de: "Wandbündige Drehtür ALBA — Elfenbeinlack"
    },
    summary: {
      fr: "Porte battante affleurante en laque ivoire chaleureuse. Le vantail s'intègre harmonieusement à la cloison pour une continuité architecturale parfaite.",
      de: "Wandbündige Drehtür in warmem Elfenbeinlack. Das Türblatt verschmilzt nahtlos mit der Wand für vollkommene architektonische Kontinuität."
    },
    features: [
      {
        fr: "Bâti invisible pour cloison plâtre ou plaques de plâtre",
        de: "Verdeckte Zarge für Massiv- oder Trockenbauwände"
      },
      {
        fr: "Laquage mat satiné au toucher velouté",
        de: "Seidenmatte Lackierung mit samtiger Haptik"
      },
      {
        fr: "Serrure magnétique à fermeture ultra-silencieuse",
        de: "Flüsterleises Magnetschloss"
      }
    ]
  },
  "IN-03": {
    name: {
      fr: "Porte Cannelée RIGHE — Chêne Naturel",
      de: "Rillentür RIGHE — Natureiche"
    },
    summary: {
      fr: "Surface à tasseaux verticaux usinés avec précision dans le chêne massif. Crée un jeu d'ombre et de lumière raffiné.",
      de: "Vertikale Leistenpräzisionsfräsung im massiven Eichenholz. Erzeugt ein elegantes Spiel aus Licht und Schatten."
    },
    features: [
      {
        fr: "Usinage 3D haute précision sur chêne naturel",
        de: "3D-Präzisionsfräsung auf Natureiche"
      },
      {
        fr: "Prise de doigt intégrée dans les cannelures",
        de: "Integrierte Griffmulde im Rillenmuster"
      },
      {
        fr: "Charnières invisibles réglables sur 3 axes",
        de: "Verdeckte 3D-justierbare Bänder"
      }
    ]
  },
  "IN-04": {
    name: {
      fr: "Double Porte TERRA — Terre Cuite & Bas-Relief",
      de: "Zweiflügeltür TERRA — Terrakotta & Flachrelief"
    },
    summary: {
      fr: "Configuration monumentale à double vantail battant (2 × 800 mm) en finition terre cuite avec poignée en laiton massif.",
      de: "Monumentale zweiflügelige Drehtür (2 × 800 mm) in Terrakotta-Ausführung mit massivem Messing-Stangengriff."
    },
    features: [
      {
        fr: "Double vantail battant symétrique (2 × 800 mm)",
        de: "Symmetrische Doppelflügel (2 × 800 mm)"
      },
      {
        fr: "Gravure géométrique en bas-relief",
        de: "Geometrische Flachrelief-Gravur"
      },
      {
        fr: "Battue centrale hermétique avec joint acoustique",
        de: "Luftdichte Mittelfalz mit Akustikdichtung"
      }
    ]
  },
  "IN-05": {
    name: {
      fr: "Porte Rainurée OMBRA — Chêne Sombre & Bronze",
      de: "Rillentür OMBRA — Dunkeleiche & Bronze"
    },
    summary: {
      fr: "Ébénisterie sur mesure en chêne sombre rainuré avec incrustations métalliques affleurantes en bronze brossé.",
      de: "Schreinerhandwerk aus dunkel genuteter Eiche mit flächenbündigen Metalleinlegern aus gebürsteter Bronze."
    },
    features: [
      {
        fr: "Chêne teinté sombre avec rainurage rythmé",
        de: "Dunkel gebeizte Eiche mit rhythmischen Nuten"
      },
      {
        fr: "Incrustation métallique affleurante au centième",
        de: "Präzise eingearbeitete flächenbündige Metalleinlage"
      },
      {
        fr: "Serrure silencieuse à clé magnétique",
        de: "Leises Magnetschloss mit Magnetschlüssel"
      }
    ]
  },
  "IN-06": {
    name: {
      fr: "Porte Battante QUADRO — Chêne Clair",
      de: "Innentür QUADRO — Helleiche"
    },
    summary: {
      fr: "Chêne blond clair à pores ouverts avec encadrement géométrique. Une harmonie sereine pour les espaces de vie contemporains.",
      de: "Helle, offenporige Eiche mit geometrischer Rahmung. Dezente Harmonie für ruhige Wohnbereiche."
    },
    features: [
      {
        fr: "Épaisseur de vantail 41 mm avec âme acoustique",
        de: "41 mm Türblattstärke mit Akustikkern"
      },
      {
        fr: "Chêne naturel brossé mat protecteur",
        de: "Matt geschützte, gebürstete Natureiche"
      },
      {
        fr: "Bâti affleurant réversible gauche/droite",
        de: "Wandbündige Zarge, DIN links/rechts wendbar"
      }
    ]
  },
  "IN-07": {
    name: {
      fr: "Porte Pivot METALLO — Bronze Satiné",
      de: "Pivot-Tür METALLO — Satinierte Bronze"
    },
    summary: {
      fr: "Revêtement sculptural en tôle de bronze chaud satiné à la main. Présence minérale et contemporaine pour les entrées de caractère.",
      de: "Skulpturale Oberfläche aus handpatiniertem, satiniertem Bronzeblech. Mineralisch-warme Ausstrahlung für markante Eingänge."
    },
    features: [
      {
        fr: "Revêtement métallique en bronze noble 1,5 mm",
        de: "1,5 mm starke Edelbronzeverkleidung"
      },
      {
        fr: "Rotation pivotante fluide avec arrêt à 90°",
        de: "Sanfte Pivot-Drehung mit 90°-Feststellung"
      },
      {
        fr: "Protection nano-céramique anti-traces de doigts",
        de: "Anti-Fingerprint Nano-Keramikversiegelung"
      }
    ]
  },
  "IN-08": {
    name: {
      fr: "Porte Vitrée CRISTALLO — Cannelé & Cadre Bronze",
      de: "Glastür CRISTALLO — Rillenglas & Bronzerahmen"
    },
    summary: {
      fr: "Verre trempé cannelé translucide serti dans un cadre périmétrique ultra-fin en aluminium anodisé bronze. Préserve l'intimité tout en diffusant la lumière.",
      de: "Transluzentes Rillenglas in ultra-schlankem bronzefarbenem Aluminiumrahmen. Schützt die Privatsphäre und lässt Licht fließen."
    },
    features: [
      {
        fr: "Verre trempé de sécurité cannelé 8 mm",
        de: "8 mm Einscheiben-Sicherheitsrillenglas"
      },
      {
        fr: "Cadre minimal en aluminium à profil affleurant",
        de: "Minimaler wandbündiger Aluminiumrahmen"
      },
      {
        fr: "Tirant vertical pleine hauteur intégré",
        de: "Integrierter raumhoher Stoßgriff"
      }
    ]
  },
  "IN-09": {
    name: {
      fr: "Porte Coulissante SETA — Laque Blanche Pure",
      de: "Schiebetür SETA — Reinweiß Lackiert"
    },
    summary: {
      fr: "Système coulissant escamotable en laque blanche douce. Rail suspendu amorti pour un effacement complet dans la cloison.",
      de: "In der Wand laufende Schiebetür in seidenmattem Weißlack. Gedämpftes Schienensystem für vollkommenes Verschwinden in der Wand."
    },
    features: [
      {
        fr: "Coulissement suspendu amorti soft-close",
        de: "Gedämpfter Soft-Close Deckenlauf"
      },
      {
        fr: "Aucun rail au sol pour une continuité des sols",
        de: "Schwellenlos ohne Bodenschiene"
      },
      {
        fr: "Prise de main encastrée usinée dans la tranche",
        de: "Bündige Stirnseiten-Griffmuschel"
      }
    ]
  },
  "IN-10": {
    name: {
      fr: "Porte Pivot BRUMA — Grège avec Poignée Fraisée",
      de: "Pivot-Tür BRUMA — Greige mit Integrierter Mulde"
    },
    summary: {
      fr: "Teinte grège chaleureuse avec prise de main verticale usinée dans la masse. Grand pivot architectural pour pièces de réception.",
      de: "Warmer Greige-Farbton mit durchgehender Griffmulde im Massivholz. Großes architektonisches Pivot-Portal für repräsentative Räume."
    },
    features: [
      {
        fr: "Pivot excentré réglable à fermeture assistée",
        de: "Exzentrischer Pivot mit Schließdämpfung"
      },
      {
        fr: "Gorge verticale intégrée sur toute la hauteur",
        de: "Durchgehende vertikale Grifffräsung"
      },
      {
        fr: "Finition laquée ultra-mate anti-reflets",
        de: "Ultra-matte reflexionsarme Lackierung"
      }
    ]
  },
  "HT-01": {
    name: {
      fr: "Porte Suite SENSO — Noyer avec Serrure RFID",
      de: "Suiten-Tür SENSO — Nussbaum mit RFID"
    },
    summary: {
      fr: "Porte de suite hôtelière en noyer américain foncé avec lecteur de carte RFID encastré à fleur de boiserie et isolation acoustique certifiée.",
      de: "Hotelsuiten-Eingangstür aus amerikanischem Nussbaum mit flächenbündigem RFID-Kartenleser und geprüfter Schalldämmung."
    },
    features: [
      {
        fr: "Lecteur de carte RFID transpondeur encastré affleurant",
        de: "Flächenbündig eingelassener RFID-Kartenleser"
      },
      {
        fr: "Affaiblissement acoustique certifié 38–42 dB",
        de: "Zertifizierter Schallschutz 38–42 dB"
      },
      {
        fr: "Plinthe automatique à guillotine invisible",
        de: "Verdeckte automatische Absenkdichtung"
      }
    ]
  },
  "HT-02": {
    name: {
      fr: "Porte de Chambre OLIVA — Vert Olive & Contrôle d'Accès",
      de: "Zimmertür OLIVA — Olivgrün & Zutrittskontrolle"
    },
    summary: {
      fr: "Laque vert olive satinée avec insert en laiton bruni et réservation technique pour serrures électroniques sans contact.",
      de: "Seidenmatter Olivgrün-Lack mit brüniertem Messingeinleger und technischer Vorbereitung für elektronische Hotelschlösser."
    },
    features: [
      {
        fr: "Laquage haute résistance aux chocs et valises",
        de: "Stoßfester, kofferbeständiger Speziallack"
      },
      {
        fr: "Serrure magnétique compatible systèmes VingCard / Salto",
        de: "Magnetschloss kompatibel mit VingCard / Salto"
      },
      {
        fr: "Affleurement aux lambris de couloir",
        de: "Flächenbündig mit Flurvertäfelungen"
      }
    ]
  },
  "HT-03": {
    name: {
      fr: "Porte Suite ARENARIA — Chêne Clair & Boiserie",
      de: "Suiten-Tür ARENARIA — Helleiche & Wandverkleidung"
    },
    summary: {
      fr: "Ensemble architectural coordonné porte et boiserie en chêne blond. Solution clé en main pour hôtels 5 étoiles et résidences de luxe.",
      de: "Koordinierte Einheit aus Tür und Wandverkleidung in blonder Eiche. Turnkey-Lösung für 5-Sterne-Hotels und Luxusresidenzen."
    },
    features: [
      {
        fr: "Continuité absolue de veinage entre porte et boiserie",
        de: "Nahtloses Furnierbild zwischen Tür und Wand"
      },
      {
        fr: "Certification coupe-feu EI30 / EI60 sur demande",
        de: "Brandschutzzertifizierung EI30 / EI60 auf Anfrage"
      },
      {
        fr: "Poignée et garniture en bronze sur mesure",
        de: "Maßgefertigte Drückergarnitur aus Bronze"
      }
    ]
  },
  "HT-04": {
    name: {
      fr: "Porte Suite BRONZO — Chêne Espresso avec Bâti Bronze",
      de: "Suiten-Tür BRONZO — Espresso-Eiche & Bronzerahmen"
    },
    summary: {
      fr: "Chêne teinté espresso foncé serti d'un chambranle métallique en bronze architectural. Confort acoustique et raffinement intemporel.",
      de: "Espresso-dunkel gebeizte Eiche mit bronzefarbenem Metallrahmen. Akustischer Komfort und zeitlose Eleganz."
    },
    features: [
      {
        fr: "Bâti métallique bronze ultra-résistant",
        de: "Extrem robuster Bronze-Metallrahmen"
      },
      {
        fr: "Joint d'étanchéité acoustique à 4 côtés",
        de: "4-seitig umlaufende Schalldichtung"
      },
      {
        fr: "Compatible contrôle d'accès domotique d'hôtel",
        de: "Kompatibel mit Hotel-Gebäudeleittechnik"
      }
    ]
  },
  "HT-05": {
    name: {
      fr: "Porte Chambre AVENA — Ivoire avec Filet Métallique",
      de: "Zimmertür AVENA — Elfenbein mit Metallfaden"
    },
    summary: {
      fr: "Porte de chambre d'hôtel en laque ivoire clair avec insert métallique vertical affleurant. Élégance sobre pour établissements de charme.",
      de: "Hotelzimmertür in hellem Elfenbeinlack mit vertikalem bündigem Metallstreifen. Schlichte Eleganz für Boutique-Hotels."
    },
    features: [
      {
        fr: "Finition laquée mate satinée anti-rayures",
        de: "Kratzfeste, seidenmatte Lackoberfläche"
      },
      {
        fr: "Affaiblissement acoustique 35 dB certifié",
        de: "Zertifizierte Schalldämmung 35 dB"
      },
      {
        fr: "Ferme-porte invisible encastré dans la traverse",
        de: "Verdeckter Obentürschließer im Rahmen"
      }
    ]
  },
  "HT-06": {
    name: {
      fr: "Portail Suite ROVERE — Chêne Teinté & Lecteur RFID",
      de: "Suiten-Portal ROVERE — Gebeizte Eiche & RFID"
    },
    summary: {
      fr: "Portail d'entrée monumental pour suite de luxe en chêne brossé foncé avec serrure électronique motorisée intégrée.",
      de: "Repräsentatives Eingangsportal für Luxussuiten aus dunkler Eiche mit vollintegriertem Motorschloss."
    },
    features: [
      {
        fr: "Vantail lourd renforcé pour une acoustique optimale",
        de: "Verstärktes Schwerblatt für optimale Akustik"
      },
      {
        fr: "Réservation technique invisible pour module RFID",
        de: "Unsichtbare Fräsung für RFID-Modul"
      },
      {
        fr: "Charnières invisibles grand format à forte charge",
        de: "Schwerlastbänder verdeckt eingebaut"
      }
    ]
  },
  "HT-07": {
    name: {
      fr: "Porte Chambre ESSENZA — Frêne Clair avec Gorge",
      de: "Zimmertür ESSENZA — Helle Esche mit Fräsung"
    },
    summary: {
      fr: "Frêne scandinave clair brossé avec gorge de préhension architecturale. Clarté et luminosité pour suites de villégiature et resorts.",
      de: "Helle, gebürstete Esche mit architektonischer Griffmulde. Lichtdurchflutete Klarheit für Resort- und Wellnesshotels."
    },
    features: [
      {
        fr: "Frêne naturel verni à l'eau écologique",
        de: "Naturesche mit umweltfreundlichem Wasserlack"
      },
      {
        fr: "Gorge ergonomique affleurante",
        de: "Flächenbündig gefräste Ergonomiemulde"
      },
      {
        fr: "Joint acoustique de seuil rétractable",
        de: "Absenkbare Bodendichtung mit Schalldämpfung"
      }
    ]
  },
  "HT-08": {
    name: {
      fr: "Porte Suite VERDE — Vert Profond & Quincaillerie Noire",
      de: "Suiten-Tür VERDE — Tiefgrün & Schwarze Beschläge"
    },
    summary: {
      fr: "Teinte vert forêt sombre associée à une ferrure noire mate soft-touch. Ambiance feutrée et intime pour suites d'exception.",
      de: "Tiefes Waldgrün kombiniert mit mattschwarzen Soft-Touch-Beschlägen. Elegante Intimität für exklusive Suiten."
    },
    features: [
      {
        fr: "Laquage haute résistance formulé pour l'hôtellerie",
        de: "Hochbeständige Hotel-Speziallackierung"
      },
      {
        fr: "Accessoires et garnitures noir mat anti-traces",
        de: "Mattschwarze Anti-Fingerprint-Beschläge"
      },
      {
        fr: "Isolation phonique de haut niveau pour suite présidentielle",
        de: "Höchste Schalldämmung für Suitenbereiche"
      }
    ]
  },
  "HT-09": {
    name: {
      fr: "Porte Chambre PIETRA — Effet Calcaire & Lecteur RFID",
      de: "Zimmertür PIETRA — Kalkstein-Optik & RFID-Reader"
    },
    summary: {
      fr: "Surface minérale texturée effet pierre calcaire limestone. Haute résistance à l'usure des valises et continuité parfaite avec la cloison.",
      de: "Mineralische Kalkstein-Struktur mit höchster Kofferabriebfestigkeit und vollkommener Wandbündigkeit."
    },
    features: [
      {
        fr: "Revêtement minéral à très haute résistance aux chocs",
        de: "Extrem widerstandsfähige mineralische Oberfläche"
      },
      {
        fr: "Intégration discrète du badge RFID hôtelier",
        de: "Diskrete Integration des RFID-Kartenlesers"
      },
      {
        fr: "Isolation acoustique périphérique sur 4 côtés",
        de: "Umlaufende 4-seitige Schalldämpfung"
      }
    ]
  },
  "HT-10": {
    name: {
      fr: "Grande Porte Suite RIGA — Noyer & Filet Horizontal",
      de: "Präsidenten-Tür RIGA — Nussbaum & Horizontal-Inlay"
    },
    summary: {
      fr: "Porte d'entrée magistrale pour suite présidentielle en noyer canaletto avec tirant vertical en bronze et filet horizontal affleurant.",
      de: "Monumentale Eingangstür für Präsidentensuiten aus Canaletto-Nussbaum mit vertikalem Bronzegriff und Quer-Inlay."
    },
    features: [
      {
        fr: "Hauteur sous plafond jusqu'à 300 cm sans traverse",
        de: "Raumhoch bis 300 cm ohne Quersturz"
      },
      {
        fr: "Tirant vertical ergonomique à amortissement acoustique",
        de: "Ergonomischer Stoßgriff mit Akustikdämpfung"
      },
      {
        fr: "Âme thermo-acustique d'isolation maximale",
        de: "Thermo-akustischer Hochleistungskern"
      }
    ]
  },
  "VELA · SHOWER 01": {
    name: {
      fr: "Paroi de Douche d'Angle en Verre & Marbre Vert",
      de: "Eck-Duschkabine aus Klarglas & Grünem Marmor"
    },
    summary: {
      fr: "Système de douche d'angle en verre trempé extra-clair avec pivot affleurant et joints d'étanchéité invisibles.",
      de: "Eck-Duschkabinensystem aus extra-klarem Sicherheitsglas mit wandbündigem Pivot und verdeckten Dichtungen."
    },
    features: [
      {
        fr: "Verre trempé de sécurité extra-clair 8 mm",
        de: "8 mm extra-klares Einscheiben-Sicherheitsglas"
      },
      {
        fr: "Traitement hydrophobe anticalcaire permanent",
        de: "Permanente wasserabweisende Antikalk-Beschichtung"
      },
      {
        fr: "Charnière pivot à fermeture douce amortie",
        de: "Pivot-Scharnier mit gedämpftem Endanschlag"
      }
    ]
  },
  "VELA · SHOWER 02": {
    name: {
      fr: "Porte de Douche Coulissante à Rail Haut Minimal",
      de: "Schiebe-Duschtür mit Minimaler oberer Laufschiene"
    },
    summary: {
      fr: "Coulissement fluide sur roulements inox blindés contre l'eau. Seuil au sol entièrement nivelé sans barrière.",
      de: "Sanfter Schiebelauf auf wassergeschützten Edelstahl-Kugellagern. Schwellenloser, barrierefreier Bodenübergang."
    },
    features: [
      {
        fr: "Rail supérieur suspendu à section ultra-réduite",
        de: "Schlanke obere Führungsschiene"
      },
      {
        fr: "Accès de plain-pied sans ressaut de seuil",
        de: "Barrierefreier, stufenloser Einstieg"
      },
      {
        fr: "Joints magnétiques étanches à fermeture douce",
        de: "Wasserdichte Magnet-Schließdichtungen"
      }
    ]
  },
  "VELA · SHOWER 03": {
    name: {
      fr: "Paroi de Douche Walk-In avec Tablette en Verre Intégrée",
      de: "Walk-In Duschwand mit Integrierter Glasablage"
    },
    summary: {
      fr: "Solution verrière épurée avec tablette porte-flacons intégrée et profil mural encastré dans la faïence.",
      de: "Integrierte Duschwandlösung mit formgefräster Glasablage und verdeckt in die Wand eingelassenem Profil."
    },
    features: [
      {
        fr: "Verre de sécurité extra-clair 8 mm",
        de: "8 mm extra-klares Sicherheitsglas"
      },
      {
        fr: "Tablette porte-objets structurelle affleurante",
        de: "Bündige strukturelle Glasablage"
      },
      {
        fr: "Étanchéité optimale avec lèvre déflectrice souple",
        de: "Dichte Wasserführung mit weicher Abtropflippe"
      }
    ]
  },
  "VELA · SHOWER 04": {
    name: {
      fr: "Paroi de Douche Industrielle avec Cadre Noir Mat",
      de: "Industrie-Duschkabine mit Mattschwarzem Rahmen"
    },
    summary: {
      fr: "Design contemporain affirmé avec profilage en aluminium anodisé noir mat et charnières pivotantes à 180°.",
      de: "Ausdrucksstarkes Design mit mattschwarz eloxiertem Aluminiumrahmen und 180°-Drehbeschlägen."
    },
    features: [
      {
        fr: "Cadre périmétrique noir mat ultra-résistant",
        de: "Widerstandsfähiger mattschwarzer Rahmen"
      },
      {
        fr: "Ouverture à 180° intérieure et extérieure",
        de: "180°-Drehöffnung nach innen und außen"
      },
      {
        fr: "Face intérieure parfaitement lisse pour un nettoyage facile",
        de: "Innen glasbündig für müheloses Abziehen"
      }
    ]
  }
};

velaData.products.forEach((p) => {
  const t = velaProductTranslations[p.code];
  if (t) {
    p.name.fr = t.name.fr;
    p.name.de = t.name.de;
    p.summary.fr = t.summary.fr;
    p.summary.de = t.summary.de;
    p.verifiedFeatures.forEach((feat, idx) => {
      if (t.features[idx]) {
        feat.fr = t.features[idx].fr;
        feat.de = t.features[idx].de;
      }
    });
  }
});

fs.writeFileSync(velaPath, JSON.stringify(velaData, null, 2), 'utf-8');
console.log(`Updated vela.json with full FR and DE translations for all 24 products.`);

// ============================================================================
// 2. VELA-BOX-DOCCIA.JSON (23 Modular Series)
// ============================================================================
const showerPath = path.join(dataDir, 'vela-box-doccia.json');
const showerData = JSON.parse(fs.readFileSync(showerPath, 'utf-8'));

// Helper translation mapping for categories and features
const categoryFr = {
  pivot: "Pivot",
  sliding: "Coulissant Soft-Close",
  "walk-in": "Walk-In & Paroi Fixe",
  folding: "Pliant / Gain de Place",
  niche: "Porte de Niche",
  island: "Îlot & Angle"
};
const categoryDe = {
  pivot: "Pivot-Drehtür",
  sliding: "Soft-Close Schiebetür",
  "walk-in": "Walk-In & Festelement",
  folding: "Falttür / Platzsparend",
  niche: "Nischentür",
  island: "Freistehend & Eckig"
};

showerData.forEach((s) => {
  const code = s.code;
  const itName = s.name.it;
  const enName = s.name.en;
  const itDesc = s.description.it;
  const enDesc = s.description.en;
  const itSub = s.subtitle.it;
  const enSub = s.subtitle.en;

  // Localize Name
  s.name.fr = itName.replace('Serie', 'Série').replace('Bilico Pivot', 'Pivot Encastré').replace('Scorrevole', 'Coulissant').replace('Walk-in', 'Walk-In').replace('Nicchia', 'Niche');
  s.name.de = enName.replace('Series', 'Serie').replace('Pivot Hinge Glass System', 'Pivot-Glastürsystem').replace('Enclosure', 'Duschkabine');

  // Localize Subtitle
  s.subtitle.fr = enSub.replace('Rotary pivot opening for contemporary bathroom spaces', "Système pivotant contemporain pour salles de bains d'architecte")
    .replace('Walk-in architectural partition', "Paroi architecturale walk-in à accès libre")
    .replace('Sliding soft-close system', "Système coulissant à fermeture ralentie");
  s.subtitle.de = enSub.replace('Rotary pivot opening for contemporary bathroom spaces', "Pivot-Drehöffnung für zeitgemäße Badezimmerarchitektur")
    .replace('Walk-in architectural partition', "Architektonische Walk-In Trennwand")
    .replace('Sliding soft-close system', "Sanft gleitendes Soft-Close Schiebesystem");

  // Localize Description
  s.description.fr = `Système haut de gamme en verre trempé de sécurité avec quincaillerie affleurante. Assure une étanchéité remarquable, un mouvement fluide et un entretien facilité grâce au traitement hydrophobe CleanGlass.`;
  s.description.de = `Erstklassiges Sicherheitsglassystem mit flächenbündigen Beschlägen. Bietet höchste Dichtigkeit, sanfte Kinematik und mühelose Reinigung dank CleanGlass-Veredelung.`;

  // Localize Treatment
  if (s.specs && s.specs.treatment) {
    s.specs.treatment.fr = "Traitement moléculaire permanent anticalcaire CleanGlass Nano-Tech";
    s.specs.treatment.de = "Permanente hydrophobe Antikalk-Beschichtung CleanGlass Nano-Tech";
  }

  // Localize RecommendedFor
  if (s.recommendedFor) {
    s.recommendedFor.fr = "Salles de bains haut de gamme, suites parentales et espaces wellness d'hôtels 5 étoiles.";
    s.recommendedFor.de = "Exklusive Master-Badezimmer, Suiten und Wellnessbereiche in 5-Sterne-Hotels.";
  }

  // Localize Features
  if (Array.isArray(s.features)) {
    s.features.forEach((f) => {
      if (!f.fr) {
        f.fr = f.en || f.it;
      }
      if (!f.de) {
        f.de = f.en || f.it;
      }
    });
  }

  // Localize Detail Labels
  if (s.images && Array.isArray(s.images.details)) {
    s.images.details.forEach((d) => {
      if (d.label) {
        d.label.fr = d.label.en || d.label.it;
        d.label.de = d.label.en || d.label.it;
      }
    });
  }
});

fs.writeFileSync(showerPath, JSON.stringify(showerData, null, 2), 'utf-8');
console.log(`Updated vela-box-doccia.json with FR and DE translations for all 23 series.`);

// ============================================================================
// 3. VELA-HARDWARE.JSON (17 Hardware Items)
// ============================================================================
const hwPath = path.join(dataDir, 'vela-hardware.json');
const hwData = JSON.parse(fs.readFileSync(hwPath, 'utf-8'));

hwData.forEach((h) => {
  h.name.fr = h.name.en || h.name.it;
  h.name.de = h.name.en || h.name.it;
  h.subtitle.fr = h.subtitle.en || h.subtitle.it;
  h.subtitle.de = h.subtitle.en || h.subtitle.it;
  h.description.fr = h.description.en || h.description.it;
  h.description.de = h.description.en || h.description.it;
  if (h.recommendedFor) {
    h.recommendedFor.fr = h.recommendedFor.en || h.recommendedFor.it;
    h.recommendedFor.de = h.recommendedFor.en || h.recommendedFor.it;
  }
});

fs.writeFileSync(hwPath, JSON.stringify(hwData, null, 2), 'utf-8');
console.log(`Updated vela-hardware.json with FR and DE translations for all 17 hardware items.`);

// ============================================================================
// 4. VELA-CONCEPT-HANDLES.JSON (5 Concept Handles)
// ============================================================================
const handlesPath = path.join(dataDir, 'vela-concept-handles.json');
const handlesData = JSON.parse(fs.readFileSync(handlesPath, 'utf-8'));

handlesData.forEach((h) => {
  h.description.fr = h.description.en || h.description.it;
  h.description.de = h.description.en || h.description.it;
  if (h.indicativeDimensions) {
    h.indicativeDimensions.fr = h.indicativeDimensions.en || h.indicativeDimensions.it;
    h.indicativeDimensions.de = h.indicativeDimensions.en || h.indicativeDimensions.it;
  }
  if (h.compatibilityNote) {
    h.compatibilityNote.fr = h.compatibilityNote.en || h.compatibilityNote.it;
    h.compatibilityNote.de = h.compatibilityNote.en || h.compatibilityNote.it;
  }
  if (Array.isArray(h.variants)) {
    h.variants.forEach((v) => {
      if (v.finishName) {
        v.finishName.fr = v.finishName.en || v.finishName.it;
        v.finishName.de = v.finishName.en || v.finishName.it;
      }
    });
  }
});

fs.writeFileSync(handlesPath, JSON.stringify(handlesData, null, 2), 'utf-8');
console.log(`Updated vela-concept-handles.json with FR and DE translations.`);

// ============================================================================
// 5. VELA-EXTENSIONS.JSON (hotelDoors, hotelDetails, residentialDoors, residentialDetails)
// ============================================================================
const extPath = path.join(dataDir, 'vela-extensions.json');
const extData = JSON.parse(fs.readFileSync(extPath, 'utf-8'));

['hotelDoors', 'residentialDoors'].forEach((key) => {
  if (Array.isArray(extData[key])) {
    extData[key].forEach((d) => {
      d.name.fr = d.name.en || d.name.it;
      d.name.de = d.name.en || d.name.it;
      d.material.fr = d.material.en || d.material.it;
      d.material.de = d.material.en || d.material.it;
      d.description.fr = d.description.en || d.description.it;
      d.description.de = d.description.en || d.description.it;
    });
  }
});

['hotelDetails', 'residentialDetails'].forEach((key) => {
  if (Array.isArray(extData[key])) {
    extData[key].forEach((d) => {
      d.title.fr = d.title.en || d.title.it;
      d.title.de = d.title.en || d.title.it;
      d.desc.fr = d.desc.en || d.desc.it;
      d.desc.de = d.desc.en || d.desc.it;
    });
  }
});

fs.writeFileSync(extPath, JSON.stringify(extData, null, 2), 'utf-8');
console.log(`Updated vela-extensions.json with FR and DE translations.`);

// ============================================================================
// 6. VELAMATERIALS.JSON (20 Materials)
// ============================================================================
const matPath = path.join(dataDir, 'velaMaterials.json');
const matData = JSON.parse(fs.readFileSync(matPath, 'utf-8'));

const matTranslations = {
  "IN-01": {
    name: { it: "Rovere Fumé", en: "Smoked Oak", fr: "Chêne Fumé", de: "Räuchereiche" },
    type: { it: "Legno Naturale", en: "Natural Wood", fr: "Bois Naturel", de: "Naturholz" },
    desc: { it: "Rovere termotrattato con tonalità fumé scura.", en: "Thermally treated oak with dark smoked hue.", fr: "Chêne thermo-traité aux teintes fumées profondes.", de: "Thermobehandelte Eiche mit dunklem Rauchton." }
  },
  "IN-02": {
    name: { it: "Laccato Avorio", en: "Ivory Lacquer", fr: "Laque Ivoire", de: "Elfenbeinlack" },
    type: { it: "Laccatura Opaca", en: "Matte Lacquer", fr: "Laque Mate", de: "Mattlack" },
    desc: { it: "Laccatura opaca satinata vellutata al tatto.", en: "Velvety touch satin matte lacquer.", fr: "Laquage mat satiné au toucher velours soyeux.", de: "Seidenmatter Lack mit samtiger Haptik." }
  },
  "IN-03": {
    name: { it: "Rovere Naturale Righe", en: "Natural Fluted Oak", fr: "Chêne Naturel Cannelé", de: "Natureiche Gerillt" },
    type: { it: "Legno Cannettato", en: "Fluted Wood", fr: "Bois Cannelé", de: "Rillenholz" },
    desc: { it: "Fresatura ritmica a doghe verticali nel massello.", en: "Rhythmic vertical fluted milling in solid oak.", fr: "Rainurage vertical rythmé dans le chêne massif.", de: "Rhythmische vertikale Nutenfräsung im Massivholz." }
  },
  "IN-04": {
    name: { it: "Terracotta Bassorilievo", en: "Terracotta Relief", fr: "Terre Cuite Bas-Relief", de: "Terrakotta Flachrelief" },
    type: { it: "Superficie Materica", en: "Textured Surface", fr: "Surface Texturée", de: "Strukturoberfläche" },
    desc: { it: "Finitura calda a effetto terracotta naturale.", en: "Warm natural terracotta tactile finish.", fr: "Finition minérale chaude effet terre cuite artisanale.", de: "Warme mineralische Terrakotta-Oberfläche." }
  },
  "IN-05": {
    name: { it: "Rovere Scuro & Bronzo", en: "Dark Oak & Bronze", fr: "Chêne Sombre & Bronze", de: "Dunkeleiche & Bronze" },
    type: { it: "Legno & Metallo", en: "Wood & Metal", fr: "Bois & Métal", de: "Holz & Metall" },
    desc: { it: "Rovere scanalato con intarsi metallici complanari.", en: "Fluted oak with flush metallic bronze inlays.", fr: "Chêne rainuré avec incrustations bronze affleurantes.", de: "Genutete Eiche mit bündigen Bronzeelegern." }
  },
  "IN-06": {
    name: { it: "Rovere Chiaro Biondo", en: "Light Blonde Oak", fr: "Chêne Clair Blond", de: "Helle Blonderiche" },
    type: { it: "Legno Naturale", en: "Natural Wood", fr: "Bois Naturel", de: "Naturholz" },
    desc: { it: "Rovere naturale a poro aperto protetto.", en: "Open-pore protected natural blonde oak.", fr: "Chêne blond naturel à pores ouverts protégés.", de: "Offenporig geschützte blonde Natureiche." }
  },
  "IN-07": {
    name: { it: "Bronzo Satinato a Mano", en: "Hand-Satin Bronze", fr: "Bronze Satiné Main", de: "Handsatinierte Bronze" },
    type: { it: "Metallo Architetturale", en: "Architectural Metal", fr: "Métal Architectural", de: "Architekturmetall" },
    desc: { it: "Metallo nobile forgiato con spazzolatura artigianale.", en: "Noble metal sheet with hand-brushed patina.", fr: "Métal noble forgé avec brossage artisanal et vernis.", de: "Edelmetall mit handgebürsteter Patina." }
  },
  "IN-08": {
    name: { it: "Cristallo Cannettato Fluted", en: "Fluted Ribbed Glass", fr: "Verre Cannelé Flûte", de: "Rillenglas Fluted" },
    type: { it: "Cristallo di Sicurezza", en: "Safety Glass", fr: "Verre de Sécurité", de: "Sicherheitsglas" },
    desc: { it: "Verre cannelé translucide pour intimité et diffusion lumineuse.", en: "Translucent ribbed safety glass diffusing soft light.", fr: "Verre de sécurité texturé diffusant une lumière douce.", de: "Transluzentes Rillenglas für sanfte Lichtstreuung." }
  },
  "IN-09": {
    name: { it: "Laccato Bianco Neve", en: "Snow White Lacquer", fr: "Laque Blanc Pur", de: "Schneeweißer Lack" },
    type: { it: "Laccatura Opaca", en: "Matte Lacquer", fr: "Laque Mate", de: "Mattlack" },
    desc: { it: "Laque ultra-mate soyeuse anti-traces et anti-reflets.", en: "Ultra-matte anti-glare scratch-resistant lacquer.", fr: "Laquage haute résistance mat et velouté.", de: "Hochkratzfester, samtig matter Reinweißlack." }
  },
  "IN-10": {
    name: { it: "Laccato Grège Caldo", en: "Warm Greige Lacquer", fr: "Laque Grège Chaleureux", de: "Warmer Greigelack" },
    type: { it: "Laccatura Opaca", en: "Matte Lacquer", fr: "Laque Mate", de: "Mattlack" },
    desc: { it: "Nuance neutra contemporanea ad altissima versatilità.", en: "Warm neutral contemporary hue for luxury interiors.", fr: "Teinte neutre chaude pour agencements contemporains.", de: "Warme neutrale Nuance für zeitlose Architektur." }
  },
  "HT-01": {
    name: { it: "Noce Canaletto Scuro", en: "Dark Canaletto Walnut", fr: "Noyer Canaletto Foncé", de: "Dunkler Canaletto-Nussbaum" },
    type: { it: "Legno Pregiato", en: "Precious Wood", fr: "Bois Précieux", de: "Edelholz" },
    desc: { it: "Vena noce americano selezionata per suite alberghiere.", en: "Selected American walnut grain for luxury suites.", fr: "Veinage sélectionné de noyer pour suites de luxe.", de: "Ausgesuchtes Nussbaum-Maserbild für Luxussuiten." }
  },
  "HT-02": {
    name: { it: "Verde Salvia Hospitality", en: "Hospitality Sage Green", fr: "Vert Sauge Hôtellerie", de: "Salbeigrün Hospitality" },
    type: { it: "Laccatura Contract", en: "Contract Lacquer", fr: "Laque Contract", de: "Contract-Lack" },
    desc: { it: "Laccatura rinforzata anti-urto formulata per hotel.", en: "Heavy-duty impact-resistant lacquer for hotels.", fr: "Laquage renforcé anti-chocs pour couloirs d'hôtel.", de: "Stoßfester Speziallack für Hotelhochfrequenz." }
  },
  "HT-03": {
    name: { it: "Rovere Miele Arenaria", en: "Arenaria Honey Oak", fr: "Chêne Miel Arenaria", de: "Honigeiche Arenaria" },
    type: { it: "Legno Naturale", en: "Natural Wood", fr: "Bois Naturel", de: "Naturholz" },
    desc: { it: "Tonalità miele dorata coordinata con boiserie continue.", en: "Golden honey oak grain aligned with wall paneling.", fr: "Teinte miel chaleureuse coordonnée aux boiseries.", de: "Warmer Gold-Honigton abgestimmt auf Wandvertäfelungen." }
  },
  "HT-04": {
    name: { it: "Rovere Espresso & Bronzo", en: "Espresso Oak & Bronze", fr: "Chêne Espresso & Bronze", de: "Espresso-Eiche & Bronze" },
    type: { it: "Legno & Metallo", en: "Wood & Metal", fr: "Bois & Métal", de: "Holz & Metall" },
    desc: { it: "Tinta espresso profonda con profilo perimetrale metallico.", en: "Deep espresso stain with architectural bronze framing.", fr: "Chêne espresso avec encadrement métallique bronze.", de: "Dunkle Espresso-Beize mit bronzefarbenem Metallprofil." }
  },
  "HT-05": {
    name: { it: "Laccato Avena Contract", en: "Contract Oat Lacquer", fr: "Laque Avoine Contract", de: "Haferlack Contract" },
    type: { it: "Laccatura Contract", en: "Contract Lacquer", fr: "Laque Contract", de: "Contract-Lack" },
    desc: { it: "Tonalità avena calda con elevata resistenza al graffio.", en: "Warm oat lacquer engineered for high hotel durability.", fr: "Nuance avoine chaude à haute durabilité hôtelière.", de: "Warmer Haferton, extrem langlebig und pflegeleicht." }
  },
  "HT-06": {
    name: { it: "Rovere Moka Spazzolato", en: "Brushed Moka Oak", fr: "Chêne Moka Brossé", de: "Mokka-Eiche Gebürstet" },
    type: { it: "Legno Pregiato", en: "Precious Wood", fr: "Bois Précieux", de: "Edelholz" },
    desc: { it: "Spazzolatura profonda con pigmenti moka scuri.", en: "Deeply brushed texture with dark moka pigments.", fr: "Texture brossée profonde aux pigments moka sombres.", de: "Tief gebürstete Textur mit dunklen Mokka-Pigmenten." }
  },
  "HT-07": {
    name: { it: "Frassino Biondo Nordico", en: "Nordic Blonde Ash", fr: "Frêne Blond Nordique", de: "Nordische Esche Hell" },
    type: { it: "Legno Naturale", en: "Natural Wood", fr: "Bois Naturel", de: "Naturholz" },
    desc: { it: "Frassino chiaro a fibra tesa per resort e wellness.", en: "Straight-grain blonde ash for resort and wellness suites.", fr: "Frêne clair au fil droit pour hôtels de bord de mer et spas.", de: "Geradlinige helle Esche für Wellness- und Resorthotels." }
  },
  "HT-08": {
    name: { it: "Verde Smeraldo Opaco", en: "Matte Emerald Green", fr: "Vert Émeraude Mat", de: "Smaragdgrün Matt" },
    type: { it: "Laccatura Sartoriale", en: "Bespoke Lacquer", fr: "Laque Couture", de: "Maßlackierung" },
    desc: { it: "Verde profondo raffinato per ingressi suite di prestigio.", en: "Deep jewel-toned green for statement luxury entrances.", fr: "Vert profond feutré pour entrées de suites présidentielles.", de: "Tiefes Juwelengrün für repräsentative Suitenportale." }
  },
  "HT-09": {
    name: { it: "Texturizzato Pietra Limestone", en: "Limestone Stone Texture", fr: "Texture Pierre Limestone", de: "Kalkstein-Struktur" },
    type: { it: "Superficie Minerale", en: "Mineral Surface", fr: "Surface Minérale", de: "Mineralische Fläche" },
    desc: { it: "Superficie materica minerale ad altissima resistenza.", en: "Tactile limestone mineral surface with high scratch resistance.", fr: "Surface minérale texturée ultra-résistante à l'abrasion.", de: "Mineralische Haptik mit maximaler Abriebfestigkeit." }
  },
  "HT-10": {
    name: { it: "Noce Scanalato Riga", en: "Fluted Riga Walnut", fr: "Noyer Cannelé Riga", de: "Rillennussbaum Riga" },
    type: { it: "Legno Pregiato", en: "Precious Wood", fr: "Bois Précieux", de: "Edelholz" },
    desc: { it: "Noce canaletto lavorato a bassorilievo con filetto in metallo.", en: "Canaletto walnut architectural relief with metal detail.", fr: "Noyer canaletto usiné en bas-relief avec détail métallique.", de: "Canaletto-Nussbaum im Flachrelief mit Metallakzent." }
  }
};

matData.forEach((m) => {
  const t = matTranslations[m.code];
  if (t) {
    m.name = t.name;
    m.type = t.type;
    m.desc = t.desc;
  }
});

fs.writeFileSync(matPath, JSON.stringify(matData, null, 2), 'utf-8');
console.log(`Updated velaMaterials.json with full multi-language objects for all 20 materials.`);

