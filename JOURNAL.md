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
- **i18n:** next-intl 4.5.5 (FR/DE)
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

## 📝 COMMITS RÉCENTS

```
d381c58 - Titres sections centrés + "Nos services de réparation"
951ba0f - Hero centré mobile, aligné gauche desktop
2e5ffcf - Montants € → CHF
565b910 - Hero Services ultra minimal
7433e48 - Page Services refonte Next.js/Vercel
d7049d1 - Refonte OSOM level pages Atelier/Contact
aab0fa0 - Design system corporate initial
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

**Dernière session:** 22 novembre 2025 - Refonte complète design Next.js/Vercel style + optimisations UX
