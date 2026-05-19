/* Scroll-reveal, word-split, and parallax animation setup.
   Called once after hydration in AnimationsProvider. */

function splitWords(el: HTMLElement) {
  el.classList.add('word-reveal');
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        (child.textContent ?? '').split(/(\s+)/).forEach((tok) => {
          if (/^\s+$/.test(tok)) {
            frag.appendChild(document.createTextNode(tok));
          } else if (tok) {
            const sp = document.createElement('span');
            sp.className = 'w';
            sp.textContent = tok;
            frag.appendChild(sp);
          }
        });
        (child as ChildNode).replaceWith(frag);
      } else if (child.nodeType === 1 && (child as Element).tagName !== 'BR') {
        walk(child);
      }
    });
  };
  walk(el);
  /* Cap stagger at 10 words so long headlines don't run too long */
  el.querySelectorAll<HTMLElement>('.w').forEach((w, i) => {
    w.style.transitionDelay = `${Math.min(i, 10) * 44}ms`;
  });
}

function setupReveal(reduced: boolean) {
  /* Base reveal on sections and key atomic elements */
  document
    .querySelectorAll<HTMLElement>('.hero__copy, .project, .craft-item')
    .forEach((el) => {
      if (!el.classList.contains('reveal-blur') && !el.classList.contains('media-reveal')) {
        el.classList.add('reveal');
      }
    });

  /* Blur-to-sharp on section headings */
  document
    .querySelectorAll<HTMLElement>(
      '.approach__h, .services__h, .projects__h, .ba__h, .craft__h, .areas__h, .philo__h, .cta__h, .contact__h, .process__h, .parallax-h, .feat-project__h',
    )
    .forEach((el) => el.classList.add('reveal-blur'));

  /* Word-split hero headline */
  if (!reduced) {
    document.querySelectorAll<HTMLElement>('.hero__h1').forEach(splitWords);
  }

  /* Blur-to-sharp eyebrows, lede text, parallax content */
  document
    .querySelectorAll<HTMLElement>(
      '.eyebrow, .approach__body, .services__lede, .ba__lede, .process__lede, .craft__lede, .feat-project__body, .parallax-eyebrow',
    )
    .forEach((el, i) => {
      el.classList.add('reveal-blur');
      el.classList.add(`reveal-d${Math.min((i % 2) + 1, 4)}`);
    });

  /* Parallax CTA button */
  document.querySelectorAll<HTMLElement>('.parallax-content .btn').forEach((el) => {
    el.classList.add('reveal-blur');
    el.classList.add('reveal-d4');
  });

  /* Service cards — stagger entrance */
  document.querySelectorAll<HTMLElement>('.svc-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 60}ms`;
  });

  /* Project cards — stagger (capped so late cards don't wait too long) */
  document.querySelectorAll<HTMLElement>('.project').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 4) * 72}ms`;
  });

  /* Craft items — stagger */
  document.querySelectorAll<HTMLElement>('.craft-item').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 4) * 64}ms`;
  });

  /* Service area list items — stagger */
  document.querySelectorAll<HTMLElement>('.areas__list li').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i, 6) * 48}ms`;
  });

  if (!('IntersectionObserver' in window)) {
    document
      .querySelectorAll<HTMLElement>('.reveal,.reveal-blur,.media-reveal,.svc-card,.word-reveal')
      .forEach((el) => el.classList.add('is-in'));
    return;
  }

  /* Slightly more conservative threshold — fires as element enters view intentionally */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.10, rootMargin: '0px 0px -5% 0px' },
  );

  document
    .querySelectorAll<HTMLElement>('.reveal,.reveal-blur,.media-reveal,.svc-card,.word-reveal')
    .forEach((el) => io.observe(el));

  /* Hero text and index fire immediately */
  document
    .querySelectorAll<HTMLElement>('.hero__copy, .hero__h1')
    .forEach((el) => el.classList.add('is-in'));
}

function setupParallax(reduced: boolean) {
  const bg = document.querySelector<HTMLElement>('.parallax-bg');
  if (!bg || reduced) return;

  let raf = 0;
  let lastY = -1;

  const tick = () => {
    const y = window.scrollY;
    if (y === lastY) return;
    lastY = y;
    const section = bg.closest<HTMLElement>('.parallax-section');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const progress =
      (window.innerHeight / 2 - rect.top) / (rect.height + window.innerHeight);
    bg.style.transform = `translateY(${progress * 72 - 18}px)`;
  };

  const onScroll = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  tick();
}

export function initAnimations() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setupReveal(reduced);
  setupParallax(reduced);
}
