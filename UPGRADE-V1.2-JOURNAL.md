# MECAVAL WEBSITE - UPGRADE V1.2
## Journal de Developpement - Precision & Innovation

**Date debut:** 26 Novembre 2025
**Developpeur:** Claude + Camilo
**Objectif:** Transformer le site en experience premium niveau OSOM/Vercel/Stripe
**Philosophie:** Chaque pixel compte. La precision dans le code = la precision dans la reparation.

---

## VISION STRATEGIQUE

### Concept
Traduire l'ADN "Precision Mecanique Suisse" en experience web premium.
- **Precision:** Animations fluides, alignements parfaits, details soignes
- **Innovation:** Patterns modernes (Vercel, Stripe, Linear)
- **Confiance:** Professionnalisme, solidite, fiabilite

### Sources d'Inspiration
- [Vercel Design Guidelines](https://vercel.com/design/guidelines) - Interactions, shadows, accessibility
- [Stripe](https://stripe.com) - Gradient mesh, micro-animations
- [Linear](https://linear.app) - Bento box, timeline animations
- [SpaceX](https://spacex.com) - Hero immersif, impact visuel

### Palette Officielle (Inchangee)
- **Teal:** #257481 (PANTONE 7474 C)
- **Rouge:** #d63b4b (PANTONE 1787 C)
- **Neutrals:** Gray scale 50-900

---

## PLAN D'UPGRADE - 6 PHASES

### Phase 1: Hero Sections - Precision Engineering Vibe
**Status:** COMPLETE
**Priorite:** HAUTE

**Realise:**
- [x] Hero Accueil: Motif engrenages SVG anime (GearPattern.tsx)
- [x] Particules metalliques flottantes (FloatingParticles.tsx)
- [x] Gradient mesh evolue avec mouvements lents
- [x] Counter anime "48h", "10+", "100%"
- [x] Scroll indicator anime
- [x] Hero full-height (90vh) immersif

**Fichiers crees/modifies:**
- `components/home/GearPattern.tsx` (NOUVEAU)
- `components/home/FloatingParticles.tsx` (NOUVEAU)
- `app/[locale]/page.tsx` (MODIFIE)

---

### Phase 2: Micro-interactions Premium
**Status:** COMPLETE
**Priorite:** HAUTE

**Realise:**
- [x] Boutons: `.btn-premium-primary` avec glow + ripple + scale
- [x] Boutons: `.btn-premium-secondary` glassmorphism
- [x] Cards: Layered shadows Vercel (4 couches)
- [x] Cards: Gradient overlay au hover
- [x] Service icons avec scale + rotate au hover
- [x] Link arrows animation

**Classes CSS ajoutees:**
```css
.btn-premium-primary
.btn-premium-secondary
.card-premium
.card-premium-compact
.service-icon / .service-icon-teal / .service-icon-rouge
.hero-text-shadow
.gradient-mesh-animated
.trust-metric
```

**Fichiers modifies:**
- `app/globals.css` (+250 lignes)

---

### Phase 3: Timeline Atelier - Animation Draw
**Status:** COMPLETE
**Priorite:** HAUTE

**Realise:**
- [x] Timeline progress bar animee au scroll
- [x] Steps qui apparaissent progressivement
- [x] Active step highlighting avec ring
- [x] Cards avec elevation au scroll
- [x] Indicateur "Processus complet" a la fin
- [x] Alternance gauche/droite desktop

**Fichiers crees:**
- `components/atelier/TimelineAnimated.tsx` (NOUVEAU - 280 lignes)

**Fichiers modifies:**
- `app/[locale]/atelier/page.tsx` (refactored)

---

### Phase 4: Cards System Premium
**Status:** COMPLETE
**Priorite:** MOYENNE

**Realise:**
- [x] Service Cards: Layered shadows + hover elevation
- [x] Team Cards: Icon scale + rotate au hover
- [x] Values Cards: Icon color transition
- [x] Contact Cards: Premium styling
- [x] Hours Card: Row hover effect

**Pattern implemente:**
```css
box-shadow:
  0 1px 2px rgba(0,0,0,0.04),
  0 2px 4px rgba(0,0,0,0.04),
  0 4px 8px rgba(0,0,0,0.04);

:hover {
  transform: translateY(-8px);
  box-shadow: /* 4 couches + elevation */
}
```

---

### Phase 5: Stats & Counters Animes
**Status:** COMPLETE
**Priorite:** MOYENNE

**Realise:**
- [x] Composant AnimatedCounter avec easing easeOutExpo
- [x] Intersection Observer pour trigger au scroll
- [x] Support prefix/suffix ("48h", "100%", "10+")
- [x] Respect prefers-reduced-motion
- [x] Tabular nums pour alignement

**Fichiers crees:**
- `components/ui/AnimatedCounter.tsx` (NOUVEAU)

**Usage:**
```tsx
<AnimatedCounter end={48} suffix="h" delay={200} />
```

---

### Phase 6: Polish Final
**Status:** COMPLETE
**Priorite:** HAUTE

**Realise:**
- [x] FAQ Accordion interactif avec animation smooth
- [x] Contact page premium avec particles
- [x] Respect prefers-reduced-motion partout
- [x] Focus-visible sur tous les interactifs
- [x] Map placeholder avec pattern subtil
- [x] Hero sections coherentes sur toutes les pages

**Fichiers crees:**
- `components/ui/Accordion.tsx` (NOUVEAU)

**Fichiers modifies:**
- `app/[locale]/contact/page.tsx` (refactored)
- `app/[locale]/atelier/page.tsx` (refactored)

---

## SESSION 1 - 26 Novembre 2025

**Duree:** ~2h
**Status:** TOUTES LES PHASES COMPLETEES

### Composants Crees (6 nouveaux)

| Composant | Lignes | Description |
|-----------|--------|-------------|
| `GearPattern.tsx` | ~180 | SVG engrenages animes |
| `FloatingParticles.tsx` | ~80 | Particules flottantes |
| `AnimatedCounter.tsx` | ~80 | Counter avec easing |
| `TimelineAnimated.tsx` | ~280 | Timeline scroll-driven |
| `Accordion.tsx` | ~130 | FAQ interactif |
| **TOTAL** | ~750 | Nouveaux composants |

### CSS Ajoute

| Section | Lignes | Description |
|---------|--------|-------------|
| Premium Buttons | ~50 | btn-premium-primary/secondary |
| Premium Cards | ~60 | card-premium, layered shadows |
| Service Icons | ~40 | Hover effects |
| Animations | ~40 | Keyframes, scroll indicator |
| Accessibility | ~15 | Reduced motion |
| **TOTAL** | ~200+ | Nouvelles regles CSS |

### Build Status
```
✓ Compiled successfully
✓ TypeScript: No errors
✓ All 4 pages generated
```

---

## NOTES TECHNIQUES

### Patterns Vercel Implementes

**Animations:**
- [x] `prefers-reduced-motion` respecte dans tous les composants
- [x] GPU-only: `transform`, `opacity`
- [x] Transitions explicites (pas de `transition: all`)
- [x] Cubic-bezier customs pour naturel

**Shadows Layered:**
```css
box-shadow:
  0 1px 2px rgba(0,0,0,0.04),
  0 2px 4px rgba(0,0,0,0.04),
  0 4px 8px rgba(0,0,0,0.04),
  0 8px 16px rgba(0,0,0,0.06);
```

**Interactions:**
- [x] Hover = plus de contraste
- [x] Focus visible avec `:focus-visible`
- [x] Touch targets adequats

### Checklist Pre-Commit

- [x] `prefers-reduced-motion` respecte
- [x] Pas de `transition: all`
- [x] Focus visible sur interactifs
- [x] Build sans erreurs
- [x] TypeScript sans erreurs

---

## HISTORIQUE DES VERSIONS

### v1.0 - Initial (21 Nov 2025)
- Setup Next.js 16 + TypeScript + Tailwind v4
- 4 pages fonctionnelles FR/DE
- Design system base

### v1.1 - Audit UX/UI (21 Nov 2025)
- 10 fixes UX/UI
- Score 72 -> ~90/100
- Couleurs PANTONE officielles
- Logo integre

### v1.2 - Precision & Innovation (26 Nov 2025)
- **COMPLETE**
- Hero sections premium avec engrenages SVG
- Particules flottantes animees
- Micro-interactions Vercel/Stripe (boutons, cards)
- Timeline scroll-animated
- Stats counters animes
- FAQ Accordion interactif
- Cards system premium avec layered shadows
- Support complet prefers-reduced-motion

---

## SESSION 2 - 26 Novembre 2025 (Soir)

### Deux Directions Creatives - Presentation Cliente

**Objectif:** Presenter deux versions a la cliente pour validation de direction

**Version LIGHT** (`/fr`)
- Header blanc
- Hero teal (actuel)
- Section Services fond blanc, cards blanches avec bordures
- CTA bar gris clair

**Version DARK** (`/fr/preview-dark`)
- Header dark (fond #030712, logo inverse, liens gris clair)
- Hero full dark (gradient noir avec accents teal/rouge)
- Section Services fond #030712, dark cards avec glow
- CTA bar dark

**Fichiers crees:**
- `app/[locale]/preview-dark/page.tsx` - Page preview version dark

**Fichiers modifies:**
- `app/[locale]/page.tsx` - Version light (services blancs)
- `components/layout/Header.tsx` - Support prop `variant="dark"`
- `app/globals.css` - Styles light-* et dark-* cards/sections

**A presenter demain:** Les deux URLs pour que la cliente choisisse la direction

---

## PROCHAINES ETAPES

### En cours - Page Services
- Suppression hero inutile
- Menu digital OSOM 2.0 - carte des services style restaurant premium
- Focus mobile-first

### Suggestions pour v1.3
1. **Google Maps embed reel** (remplacer placeholder)
2. **Photos atelier reelles** (remplacer GearPattern si photos dispo)
3. **Grille tarifaire definitive** (valeurs reelles)
4. **Header sticky** avec blur au scroll

---

**Derniere mise a jour:** 26 Novembre 2025
**Status:** SESSION 2 - COMPLETE

---

## BUG RESOLU - Session 3

**Symptome initial:** `SyntaxError: Unexpected non-whitespace character after JSON at position 512`

**Solution:** Le bug etait cause par un cache Next.js corrompu. Resolu en:
1. Killing tous les processus `next dev` existants
2. Suppression complete du dossier `.next`
3. Redemarrage du serveur de dev

**Resultat:** Toutes les pages fonctionnent:
- `/fr` - Homepage Light (hero teal + sections blanches)
- `/fr/services` - Menu Digital 2.0 (sticky tabs + cards)
- `/fr/preview-dark` - Homepage Dark (full dark theme)

---

## RESUME SESSION 2 + 3

### Pages prates pour presentation cliente:

**Version LIGHT** (`/fr`)
- Header blanc avec logo normal
- Hero teal avec engrenages SVG animes
- Section services fond blanc, cards blanches avec bordures
- CTA bar gris clair

**Version DARK** (`/fr/preview-dark`)
- Header dark (#030712) avec logo inverse (blanc)
- Hero full dark avec gradient noir + accents teal/rouge
- Section services dark avec cards glow effect
- CTA bar dark

**Page Services** (`/fr/services`)
- Navigation sticky tabs (Electriques, Thermiques, Velos, Pro)
- Menu Digital 2.0 style restaurant premium
- 4 sections avec cards et pricing
- Section Pro dark pour B2B

---

## SESSION 4 - 27 Novembre 2025

**Duree:** ~45 min
**Objectif:** Corrections contenus et validation version LIGHT

### Decision Cliente
**Version LIGHT validee** - La version dark est archivee dans `/fr/preview-dark`

### Commits de la session (6 commits)

| Commit | Description |
|--------|-------------|
| `e90fa56` | Services pricing - Diagnostic Offert, 95CHF/h, Garantie 6 mois |
| `3913544` | Services improvements - bike services, B2B teal background |
| `cd83572` | CTAs - "Passez a l'atelier" → "Appelez-nous/ecrivez-nous" |
| `4d4a668` | Atelier timeline - remove cost info, update repair description |
| `0d958db` | Atelier timeline - "Solution en 48h", machines pluriel |
| `e4f736f` | Timeline component - fix missing translation keys bug |

### Modifications Page Services

**Tarification Machines Electriques:**
- Diagnostic: `50 CHF` → `Offert`
- Reparation note: `Selon panne` → `Selon panne (95 CHF/heure)`
- Reparation feature: `Garantie` → `Garantie 6 mois`
- Certification note: Supprime `Gratuit` (redondant avec "Inclus")
- Delai: `Delai 48h` → `Delai reponse 48h maximum`

**Titres (majuscules):**
- `Machines Electriques` → `Machines electriques`
- `Machines Thermiques` → `Machines thermiques`
- `Services Velos` → `Services velos`
- `Velos Electriques` → `Velos electriques`

**Machines Thermiques:**
- Description: `Entretien et reparation moteurs essence` → `Entretien et reparation appareils moteur a essence`

**Velos & E-bikes:**
- Prix: `60 CHF` → `Sur devis`
- 3 nouveaux services ajoutes:
  - Service fourches a velos
  - Devoilage roues
  - Fabrication roues a velo

**Section B2B:**
- Fond: `noir (#030712)` → `teal (#257481)` (moins agressif)
- Badge: blanc sur teal-dark
- Cards: effet glassmorphism sur fond teal

### Modifications CTAs (tout le site)

| Avant | Apres |
|-------|-------|
| "Passer a l'atelier" | "Appelez-nous !" |
| "Passez nous voir a l'atelier a Saviese" | "Appelez-nous ou ecrivez-nous a Saviese !" |
| "passez directement a l'atelier" | "ecrivez-nous par email/WhatsApp" |
| "Passez nous voir a l'atelier !" | "Contactez-nous !" |

### Modifications Page Atelier (Timeline)

**Step 2 - Diagnostic:**
- Supprime `X CHF (deduit si reparation)` a cote de l'horloge

**Step 3 - Reparation:**
- Supprime duree `48h maximum`
- Description: `pieces de qualite` → `pieces d'origine ou qualite certifiee`
- Benefit: `Delai garanti 48h` → `Solution en 48h`

**Step 4 - Controle Qualite:**
- `notre machine specialisee` → `nos machines specialisees`

**Bug fix:**
- Corrige affichage des cles de traduction manquantes (step2.cost, step3.duration)
- Ajout rendu conditionnel pour duration/cost

### Fichiers modifies

| Fichier | Modifications |
|---------|---------------|
| `messages/fr.json` | Tous les textes FR |
| `messages/de.json` | Tous les textes DE |
| `app/[locale]/services/page.tsx` | +3 features velos |
| `app/globals.css` | Section B2B noir → teal |
| `components/atelier/TimelineAnimated.tsx` | Fix translation keys |

### Traductions DE alignees
Toutes les modifications FR ont ete repliquees en allemand:
- Kostenlos, Variabel, 95 CHF/Stunde, Garantie 6 Monate
- Antwortfrist 48h max.
- Losung in 48h
- Gabel-Service, Rad-Zentrieren, Laufradbau
- Rufen Sie uns an / schreiben Sie uns

---

## STATUS FINAL

**Version:** 1.2.4
**Date:** 27 Novembre 2025
**Status:** PRET POUR REVIEW CLIENTE

### Pages fonctionnelles
- `/fr` - Homepage Light (VALIDEE)
- `/fr/services` - Menu Digital 2.0
- `/fr/atelier` - Timeline animee
- `/fr/contact` - Page contact premium
- `/de/*` - Versions allemandes

### Prochaines etapes suggerees
1. Review cliente des contenus
2. Photos reelles de l'atelier
3. Google Maps embed
4. Formulaire de contact fonctionnel
5. Deploiement Vercel

---

**Derniere mise a jour:** 27 Novembre 2025
**Status:** SESSION 4 - COMPLETE
