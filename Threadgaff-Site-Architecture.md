# Threadgaff — Website Architecture & Content Blueprint
**Prepared for client approval — pre-build reference document**

---

## 1. Sitemap

```
Home
├── Design Library            (browse ready-made designs, filter by category)
├── Custom Designer           (the build-your-own tool)
├── How It Works              (process, step by step)
├── Solutions
│   ├── Brands & Retailers
│   ├── Corporates & Schools
│   ├── Events & Teams
│   └── Importers & Startups
├── About Threadgaff          (manufacturing story, capability, trust)
└── Get a Quote               (form — also receives hand-off from Designer)
```

Every page shares one header (logo + 6 nav links + "Get a Quote" button) and one footer (sitemap links, contact, segment shortcuts).

---

## 2. Core User Flow

```
Land on Home
     │
     ├──► Browse Design Library ──► Pick a design ──► lands in Designer, pre-loaded
     │
     └──► Start a Custom Design ──► lands in Designer, blank

Inside Designer:
  1. Garment type       (T-Shirt / Hoodie / Polo)
  2. Sleeve length       (Short / Long)
  3. Collar / neckline   (depends on garment type)
  4. Base colour         (swatch palette)
  5. Design source       (Library thumbnail  OR  Upload your own artwork)
  6. Placement           (Front Chest / Back Centre / Left Sleeve / Full Front)
  7. Sizes & quantities  (S–XXL breakdown, auto-totalled)
     │
     ▼
Live preview updates at every step
     │
     ▼
"Request This Quote" → Get a Quote page, form pre-filled with the spec summary
```

This two-entry-point structure (Library-first or Designer-first) is the main thing to approve — it's what lets a browsing visitor *and* a visitor who already knows what they want reach the same tool without friction.

---

## 3. Page-by-Page Breakdown

| Page | Purpose | Key sections | Primary CTA |
|---|---|---|---|
| **Home** | First impression + immediate proof of the customisation tool | Hero (headline + live-preview snapshot) · Trust strip (MOQ, hubs, turnaround) · Design Library preview grid · "Two ways to start" panel (Library vs Custom) · Segments strip · Manufacturing story band | Browse Library / Start a Custom Design |
| **Design Library** | Let a visitor shop finished designs before committing | Category filters · Design tile grid · "Can't find it? Upload your own" note | Customise This (per tile) |
| **Custom Designer** | The product — configure a garment end to end | Step panel (garment, sleeve, collar, colour) · Design source tabs (Library / Upload) · Placement selector · Live preview card · Size & quantity table · Sticky spec summary | Request This Quote |
| **How It Works** | Remove uncertainty about the production process for a first-time buyer | Numbered process (design → proof → sample → production → QC → shipping), each step with a turnaround note | Start Designing |
| **Solutions** | Show the four buyer types their own reflection | Four segment sections, each: who it's for, typical order, why Threadgaff fits | Talk to Us / Start Designing (per segment) |
| **About** | Build confidence in the manufacturing capability itself | Production hubs (Pakistan-led, partner capacity elsewhere) · Quality process · Team/company framing | Get a Quote |
| **Get a Quote** | Convert | Contact form · Spec summary block (auto-filled if arriving from Designer) · Direct contact details | Send Quote Request |

---

## 4. Design-Library vs Custom-Upload — how the choice is presented

Two things need to be true at once: a browsing visitor should never feel forced to have their own artwork ready, and a visitor who already has a logo should never have to dig through a catalogue to use it. So the choice is surfaced **three times**, at increasing levels of commitment:

1. **Home page** — a two-panel "Two ways to start" section, side by side, equal visual weight.
2. **Design Library page** — every tile has a direct "Customise This" action that drops the visitor straight into the Designer with that design pre-selected.
3. **Inside the Designer itself** — a tab switch (Library / Upload) at the design-source step, so a visitor can still change their mind mid-flow without starting over.

---

## 5. Customisation Engine — what's configurable

| Variable | Options (v1) | Notes |
|---|---|---|
| Garment type | T-Shirt, Hoodie, Polo Shirt | Determines which collar options are available |
| Sleeve length | Short, Long | Locked to Long for Hoodie |
| Collar / neckline | Crew or V-Neck (Tee) · Pullover or Zip (Hoodie) · Classic Collar (Polo) | |
| Base colour | 8-colour core palette | Expandable later without changing the flow |
| Design source | From Library, or Upload Your Own | Upload accepts image files, shown live on the preview |
| Placement | Front Chest, Back Centre, Left Sleeve, Full Front | Repositions the artwork on the live preview |
| Sizes & quantities | S / M / L / XL / XXL, quantity per size | Auto-totals for the quote request |

---

## 6. Positioning notes (from the benchmark review)

A few deliberate choices carried over from the sites reviewed:

- **Confident about Pakistan production**, not apologetic about it — the way White Label MFG lists Pakistan alongside Mexico, Indonesia and the US, and the way Zega Apparel frames its Pakistan base as a straightforward operational fact next to a hard trust number ("trusted by X brands in X countries").
- **Segment breadth stated plainly**, the way Times Clothing addresses corporates, schools, hotels and private-label startups by name rather than one generic "customers" bucket — this is why Solutions gets four named sections instead of one page of testimonials.
- **A first-time-brand-owner path**, the way BOMME Studio leads with educational "how this works" content — this is the job of the How It Works page, written for someone who has never ordered a production run before.
- **Hard numbers over adjectives** — MOQ, turnaround days, and hub locations stated as facts on the Home trust strip, the way CFB and Zega both lead with concrete specifics rather than "high quality" language.

**Before this goes live**, the following need real figures from you rather than placeholders: MOQ, standard turnaround time, actual production hub cities, and any certifications you hold (these should only appear if they're real — the draft below leaves them generic on purpose).

---

*Once this structure is approved, the HTML/CSS demo below follows this exact map — same seven pages, same flow.*
