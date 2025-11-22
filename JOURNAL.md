# 📋 JOURNAL DU PROJET MECAVAL

**Client:** Cyrielle & Sylvain - Mecaval
**Agence:** OSOM Agency
**Date début:** 23 octobre 2025
**Dernière mise à jour:** 22 novembre 2025

---

## 🎯 OBJECTIF

Site web professionnel pour atelier de réparation de machines (électriques, thermiques) et vélos à Savièse, Valais.

**Différenciateurs vs concurrence:**
- ⚡ Service RAPIDE: 48h vs 2-3 semaines (Pfefferlé)
- 👤 Contact direct avec le réparateur
- 🎯 Machine de certification normes électriques
- ✓ Qualité garantie (entreprise familiale)

---

## 📊 ÉTAT ACTUEL

### Stack Technique
- **Framework:** Next.js 16.0.3 (App Router)
- **UI:** React 19.2.0 + Tailwind CSS 4
- **i18n:** next-intl 4.5.5 (FR/DE) ✅ **100% BILINGUE FONCTIONNEL**
- **Icons:** Lucide React
- **Deploy:** Vercel (auto-deploy)
- **Repo:** `git@github.com:camilohimself/mecaval.git`

### Design System
- **Inspiration:** Next.js, Vercel, NerdWallet, Stripe
- **Palette:** Teal #257481 + Rouge #d63b4b (PANTONE officiel)
- **Style:** Corporate, minimal, carré (border-radius 4-8px max)
- **Typo:** Inter, tailles fixes (pas de clamp)
- **Grid:** 4px base, strict et modulaire

---

## 📄 PAGES (5/5) ✅

### 1. **Accueil** (`/`)
- Hero centré mobile, gauche desktop
- Badge localisation "Savièse, Valais"
- Trust indicators (48h garanti, Normes, Contact direct)
- Services grid 3 colonnes (Électrique, Thermique, Vélos)
- Section "Pourquoi nous" grid 2x2
- CTA final dark

### 2. **Services** (`/services`) - REFONTE NEXT.JS/VERCEL
- **Hero ultra minimal:** "Réparation en 48 heures."
- **Badges social proof:** Pills rounded-full (48h/Normes/Contact)
- **Services Essentiels:** Grid 3 cards avec badges (URGENT/SAISON/EXPRESS)
- **Callout Premium:** Section gradient - Différenciateur "Contrôle Normes Électriques"
- **Metrics:** 48h / 100% / 0 CHF (chiffres massifs Vercel-style)
- **Pricing:** Grid 3 catégories (Diagnostic/Réparation/Certification)
- **B2B Dark:** Section gray-900 (AI Cloud style)
- **Réduction contenu:** -40% texte, scan optimisé <20 sec

### 3. **Atelier** (`/atelier`)
- Méthodologie 5 étapes alternées
- Cards colorées (teal-light/rouge-light)
- Équipe avec badges compétences
- Valeurs grid 4 colonnes
- Stats engagement (48h/100%/0)

### 4. **Contact** (`/contact`)
- 3 cards cliquables (Téléphone/Email/WhatsApp)
- Formulaire + infos horaires/adresse
- FAQ Q:/R: format propre
- Google Maps placeholder

### 5. **Layout**
- Header sticky avec border-bottom
- Navigation active avec border
- Footer grid 3 colonnes
- Bilingue FR/DE

---

## 🎨 DESIGN PATTERNS APPLIQUÉS

### Next.js/Vercel Inspiration
✅ **Badges rounded-full** (social proof pills)
✅ **Grid 3 colonnes** responsive
✅ **Gradient subtils** (bg-gradient-to-br)
✅ **Callout sections** (différenciateurs)
✅ **Metrics massives** (chiffres > prose)
✅ **Dark sections** (B2B AI Cloud style)
✅ **Pricing transparent** (grid 3 tiers)
✅ **Hero minimal** (1 phrase impactante)

### Corporate Professional
- Border-radius 4-8px max (carré)
- Cards avec bordures visibles
- Ombres subtiles uniquement
- Zero effets flashy (glows/blurs)
- Typographie fixe et prévisible
- Spacing modulaire 4px base

---

## 🚀 DÉPLOIEMENT

**URL Production:** Vercel (auto-deploy depuis main)
**Process:**
```bash
git push origin main → Auto-deploy Vercel → Live
```

**Build status:** ✅ Passing
**Temps deploy:** ~2-3 min

---

## 🌍 SYSTÈME DE TRADUCTION BILINGUE - GAME CHANGER OSOM

### Architecture next-intl 4.5.5

**Stratégie:** Structure de clés PLATE et COHÉRENTE entre fr.json et de.json

#### Principe de Base
```
❌ ÉVITER (nested objects):
"metrics": {
  "metric1": {
    "value": "48h",
    "label": "Délai garanti"
  }
}

✅ ADOPTER (flat structure):
"metrics": {
  "metric1Value": "48h",
  "metric1Label": "Délai garanti",
  "metric1Sub": "vs. 2-3 semaines"
}
```

#### Convention de Nommage Stricte

**1. Features/Items Lists:**
```json
// Toujours: feature1, feature2, feature3 (jamais item1, benefit1, etc.)
"callout": {
  "feature1": "Certification conforme",
  "feature2": "Sécurité garantie",
  "feature3": "Tests complets"
}
```

**2. Metrics/Stats:**
```json
// Pattern: metricXValue, metricXLabel, metricXSub
"metrics": {
  "metric1Value": "48h",
  "metric1Label": "Délai maximum garanti",
  "metric1Sub": "vs. 2-3 semaines concurrence"
}
```

**3. Sections avec Titres:**
```json
// Pattern: sectionTitle, sectionFeature1-4
"thermal": {
  "serviceTitle": "Entretien complet",
  "serviceFeature1": "Diagnostic complet",
  "serviceFeature2": "Service filtres",
  "repairTitle": "Réparations courantes",
  "repairFeature1": "Problèmes démarrage"
}
```

**4. Pricing/Cards:**
```json
// Pattern: note (au lieu de refund/subtitle), feature1-3
"pricing": {
  "diagnostic": {
    "title": "Diagnostic professionnel",
    "price": "X CHF",
    "note": "(déduit si réparation)",
    "feature1": "Analyse panne précise",
    "feature2": "Devis détaillé écrit",
    "feature3": "Explication problème claire",
    "duration": "30-60 min"
  }
}
```

### Méthodologie de Vérification

**1. Read fr.json Structure FIRST**
```bash
# Toujours lire la structure FR de référence
Read messages/fr.json (lignes concernées)
```

**2. Match de.json EXACTEMENT**
```bash
# Aligner TOUTES les clés sur fr.json
Edit messages/de.json
# Même structure, même noms de clés, traduction DE uniquement
```

**3. Clean Turbopack Cache**
```bash
rm -rf .next && npm run dev
# OBLIGATOIRE pour recharger les traductions
```

**4. Test Systématique Bilingue**
```bash
# Tester TOUTES les pages FR ET DE
curl -s http://localhost:3001/fr | grep -i "MISSING_MESSAGE\|Error"
curl -s http://localhost:3001/de | grep -i "MISSING_MESSAGE\|Error"
curl -s http://localhost:3001/fr/services | grep -i "MISSING_MESSAGE\|Error"
curl -s http://localhost:3001/de/services | grep -i "MISSING_MESSAGE\|Error"
# Répéter pour /atelier, /contact
```

**Résultat attendu:** ZERO output (aucune erreur)

### Erreurs Typiques à Éviter

**Erreur 1: Structure Nested vs Flat**
```json
// ❌ Code attend flat, JSON a nested
Code: tServices('metrics.metric1Value')
JSON: "metric1": { "value": "48h" } // FAIL

// ✅ Alignement correct
Code: tServices('metrics.metric1Value')
JSON: "metric1Value": "48h" // SUCCESS
```

**Erreur 2: Noms de Clés Incohérents**
```json
// ❌ Mélange de noms
"callout": {
  "benefit1": "...",  // différent de
  "feature2": "..."   // FAIL
}

// ✅ Cohérence stricte
"callout": {
  "feature1": "...",
  "feature2": "...",
  "feature3": "..."   // SUCCESS
}
```

**Erreur 3: Clés Manquantes entre Locales**
```json
// fr.json a:
"thermal": {
  "serviceTitle": "...",
  "serviceFeature1": "..."
}

// ❌ de.json n'a pas ces clés → MISSING_MESSAGE

// ✅ de.json doit avoir EXACTEMENT les mêmes clés
"thermal": {
  "serviceTitle": "...",
  "serviceFeature1": "..."
}
```

### Debug Workflow

**Symptôme:** Page /de/services affiche français ou `MISSING_MESSAGE`

**1. Vérifier Console Dev**
```
Error: MISSING_MESSAGE: Could not resolve `services.metrics.metric1Value`
```

**2. Comparer fr.json vs de.json**
```bash
# Lire section exacte dans fr.json
Read messages/fr.json (lignes services)

# Vérifier si de.json a TOUTES les clés
Read messages/de.json (lignes services)
```

**3. Fixer Structure de.json**
```bash
# Ajouter/renommer clés pour matcher fr.json
Edit messages/de.json
```

**4. Clean + Test**
```bash
rm -rf .next && npm run dev
curl -s http://localhost:3001/de/services | grep "MISSING_MESSAGE"
# Doit retourner vide
```

### Bénéfices Approche OSOM

✅ **Scalabilité:** Ajout facile de nouvelles langues (IT, EN, etc.)
✅ **Maintenance:** Structure cohérente = modifications rapides
✅ **Debug:** Erreurs MISSING_MESSAGE pointent clé exacte manquante
✅ **Performance:** Flat structure = accès direct sans traversée
✅ **DX:** Convention stricte = moins d'erreurs humaines

### Application Mecaval

**Pages Bilingues Complètes:**
- ✅ Homepage (/) - FR/DE
- ✅ Services (/services) - FR/DE
- ✅ Atelier (/atelier) - FR/DE
- ✅ Contact (/contact) - FR/DE

**Clés Totales Traduites:**
- `messages/fr.json`: ~450 clés
- `messages/de.json`: ~450 clés (100% match)

**Tests Finaux:**
- 8 pages testées (4 FR + 4 DE)
- ZERO erreurs MISSING_MESSAGE
- 100% fonctionnel bilingue

---

## 📝 COMMITS RÉCENTS

```
6efbe22 - fix: Complete German translation - Zero errors achieved
d1b107f - feat: Complete FR/DE bilingual implementation for all pages
e971333 - fix: Complete FR/DE translations for Atelier page
d26866f - feat: Gallery + Testimonials components - Page Atelier
cc3a838 - feat: Animations corporate-safe - Phase 1
7779b9b - docs: Journal de projet - État complet et compact
```

---

## ❌ MANQUANTS / TODO

### Contenu Client
- [ ] Photos atelier (Sylvain, équipements)
- [ ] Photo machine de contrôle électrique
- [ ] Horaires précis d'ouverture
- [ ] Adresse complète pour Google Maps
- [ ] Tarifs réels (remplacer "X CHF")
- [ ] Témoignages clients

### Technique
- [ ] Backend formulaire contact
- [ ] Google Maps integration
- [ ] Google My Business setup
- [ ] Analytics (Vercel ou GA)
- [ ] SEO metadata complets (Open Graph, Twitter)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Performance optimization (images, lazy loading)

### Clarifications Client
- [ ] Service à domicile: inclure ou non?
- [ ] Speedped: section dédiée ou mention discrète?
- [ ] 3ème mot de valeur: Proximité/Expertise/Transparence?

---

## 📈 MÉTRIQUES QUALITÉ

**Design:**
- ✅ Mobile-first responsive
- ✅ Design system cohérent
- ✅ Accessibilité (focus states)
- ✅ Performance (Lighthouse ready)

**Code:**
- ✅ TypeScript strict
- ✅ Components réutilisables
- ✅ CSS centralisé (globals.css)
- ✅ Build Next.js passing
- ✅ Zero console errors

**UX:**
- ✅ Scan rapide (<20 sec page Services)
- ✅ CTAs clairs et visibles
- ✅ Différenciateurs en évidence
- ✅ Navigation intuitive
- ✅ Bilingue FR/DE

---

## 🎯 PROCHAINES ÉTAPES

1. **Validation cliente** du design actuel
2. **Collecte contenu** (photos, tarifs, horaires)
3. **Backend** formulaire contact
4. **Google Maps** + My Business
5. **SEO** metadata + sitemap
6. **Analytics** setup
7. **Tests** cross-browser
8. **Formation** cliente

---

## 📞 CONTACTS

**Client:**
- Téléphone: 076 708 03 08
- Email: info@mecaval.ch
- Localisation: Savièse, Valais

**Repo GitHub:** `camilohimself/mecaval`
**Vercel:** Auto-deploy activé

---

**Dernière session:** 22 novembre 2025 - Système traduction bilingue FR/DE 100% fonctionnel + documentation méthodologie OSOM
