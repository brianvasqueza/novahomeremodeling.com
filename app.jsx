/* HALDEN — app shell + Tweaks panel */

const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroImage": "kitchen",
  "accent": ["#8C6F4B", "#B08A38", "#C8A55A"],
  "showScrollProgress": true,
  "darkPhilosophy": true,
  "italicAccents": true
}/*EDITMODE-END*/;

const ACCENT_PALETTES = [
  ["#8C6F4B", "#B08A38", "#C8A55A"], // bronze (default)
  ["#3F5A3F", "#5F7C5C", "#8AA08A"], // forest
  ["#A65A2E", "#C97A3F", "#D89870"], // copper
  ["#2A2926", "#57544E", "#8A857B"], // ink
];

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent palette live: [accent, gold-600, gold-500]; derive gold-700 darker.
  useEffect(() => {
    const p = Array.isArray(t.accent) ? t.accent : ACCENT_PALETTES[0];
    const r = document.documentElement;
    r.style.setProperty("--accent", p[0]);
    r.style.setProperty("--accent-hover", p[0]);
    r.style.setProperty("--gold-600", p[1]);
    r.style.setProperty("--gold-500", p[2]);
    // Darken first to make a -700 variant
    const dark = (hex) => {
      const h = hex.replace("#", "");
      const n = parseInt(h, 16);
      const r2 = Math.max(0, ((n >> 16) & 255) - 30);
      const g2 = Math.max(0, ((n >> 8) & 255) - 24);
      const b2 = Math.max(0, (n & 255) - 18);
      return "#" + [r2, g2, b2].map(x => x.toString(16).padStart(2, "0")).join("");
    };
    r.style.setProperty("--gold-700", dark(p[1]));
  }, [t.accent]);

  // Toggle italics globally
  useEffect(() => {
    if (t.italicAccents) {
      document.documentElement.style.removeProperty("--italic-disabled");
      document.body.classList.remove("no-italic-accents");
    } else {
      document.body.classList.add("no-italic-accents");
    }
  }, [t.italicAccents]);

  return (
    <>
      <Nav light showProgress={t.showScrollProgress} />
      <main>
        <Hero image={t.heroImage} />
        <Marquee />
        <Approach />
        <Stats />
        <Services />
        <ProjectGrid />
        <BeforeAfter />
        <Process />
        <Craft />
        {t.darkPhilosophy ? <Philosophy /> : null}
        <Testimonials />
        <ServiceAreas />
        <CTASection />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero" />
        <TweakSelect
          label="Image"
          value={t.heroImage}
          onChange={(v) => setTweak("heroImage", v)}
          options={[
            { value: "kitchen", label: "Kitchen" },
            { value: "framing", label: "Framing" },
            { value: "bath",    label: "Bath" },
            { value: "facade",  label: "Facade" },
          ]}
        />

        <TweakSection label="Palette" />
        <TweakColor
          label="Accent"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={ACCENT_PALETTES}
        />

        <TweakSection label="Editorial" />
        <TweakToggle
          label="Italic serif accents"
          value={t.italicAccents}
          onChange={(v) => setTweak("italicAccents", v)}
        />
        <TweakToggle
          label="Philosophy section"
          value={t.darkPhilosophy}
          onChange={(v) => setTweak("darkPhilosophy", v)}
        />
        <TweakToggle
          label="Scroll progress"
          value={t.showScrollProgress}
          onChange={(v) => setTweak("showScrollProgress", v)}
        />
      </TweaksPanel>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
