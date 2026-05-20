import { Button } from '@/components/ui/Button';

export function ParallaxSection() {
  return (
    <section className="parallax-section">
      <div className="parallax-bg" />
      <div className="parallax-overlay" />
      <div className="parallax-content">
        <div className="parallax-eyebrow">Houston remodeling since 2009</div>
        <h2 className="parallax-h">
          Ready to remodel
          <br />
          <em>your Houston home?</em>
        </h2>
        <Button variant="primary" onDark as="a" href="#contact">
          Request a Houston Estimate
        </Button>
      </div>
    </section>
  );
}
