import { Button } from '@/components/ui/Button';

export function ParallaxSection() {
  return (
    <section className="parallax-section">
      <div className="parallax-bg" />
      <div className="parallax-overlay" />
      <div className="parallax-content">
        <div className="parallax-eyebrow">Sixteen years in Houston</div>
        <h2 className="parallax-h">
          The home you&apos;ve been
          <br />
          <em>picturing.</em>
        </h2>
        <Button variant="primary" onDark as="a" href="#contact">
          Start a conversation
        </Button>
      </div>
    </section>
  );
}
