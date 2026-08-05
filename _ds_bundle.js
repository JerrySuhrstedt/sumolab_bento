/* @ds-bundle: {"format":4,"namespace":"SumoLabDesignSystem_c48669","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StarRating","sourcePath":"components/content/StarRating.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"BenefitsSection","sourcePath":"ui_kits/website/BenefitsSection.jsx"},{"name":"FAQSection","sourcePath":"ui_kits/website/FAQCTA.jsx"},{"name":"FinalCTA","sourcePath":"ui_kits/website/FAQCTA.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"FounderSection","sourcePath":"ui_kits/website/FounderFeatures.jsx"},{"name":"FeaturesSection","sourcePath":"ui_kits/website/FounderFeatures.jsx"},{"name":"Header","sourcePath":"ui_kits/website/Header.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"GapSection","sourcePath":"ui_kits/website/ProblemSolution.jsx"},{"name":"SolutionSection","sourcePath":"ui_kits/website/ProblemSolution.jsx"},{"name":"TestimonialsSection","sourcePath":"ui_kits/website/TestimonialsSection.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"2f1da97c8f3a","components/content/Card.jsx":"2d7e77343d8b","components/content/SectionHeading.jsx":"da01a1672a74","components/content/StarRating.jsx":"b7789e29293c","components/content/Testimonial.jsx":"34d50de6a9af","components/core/Badge.jsx":"a30531091a50","components/core/Button.jsx":"8dabafa96697","components/core/Tag.jsx":"d94209b41a23","components/forms/Input.jsx":"6e9a2db08972","components/forms/Select.jsx":"afbc33e6bf7d","components/forms/Textarea.jsx":"b61d6bb50c3b","ui_kits/website/BenefitsSection.jsx":"fbe9d1fc2433","ui_kits/website/FAQCTA.jsx":"d4bce83dca87","ui_kits/website/Footer.jsx":"5e83d7e90bbe","ui_kits/website/FounderFeatures.jsx":"b820a712079f","ui_kits/website/Header.jsx":"00d32352982e","ui_kits/website/Hero.jsx":"fb638def958a","ui_kits/website/ProblemSolution.jsx":"c7d32ff84a88","ui_kits/website/TestimonialsSection.jsx":"d23fd2bccb8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SumoLabDesignSystem_c48669 = window.SumoLabDesignSystem_c48669 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function Accordion({
  items
}) {
  const [open, setOpen] = React.useState(0);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      borderBottom: '1px solid var(--color-border)'
    }
  }, React.createElement('button', {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body)',
      color: 'var(--color-ink)'
    }
  }, it.q, React.createElement('span', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 20,
      flexShrink: 0,
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  }, '+')), open === i ? React.createElement('p', {
    style: {
      margin: '0 0 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--color-ink-muted)'
    }
  }, it.a) : null)));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '28px',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 10
    }
  }, eyebrow) : null, title ? React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-heading-sm)',
      margin: '0 0 10px',
      color: 'var(--color-ink)',
      fontWeight: 'var(--fw-medium)'
    }
  }, title) : null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--color-ink-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  onDark = false
}) {
  return React.createElement('div', {
    style: {
      textAlign: align,
      maxWidth: 720,
      margin: align === 'center' ? '0 auto' : 0
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      color: onDark ? 'var(--color-ink-on-dark-muted)' : 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 14
    }
  }, eyebrow) : null, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-heading-lg)',
      lineHeight: 'var(--lh-heading)',
      color: onDark ? 'var(--color-ink-on-dark)' : 'var(--color-ink)',
      margin: 0
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StarRating.jsx
try { (() => {
function StarRating({
  count = 5
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 2,
      color: 'var(--color-star)',
      fontSize: 15,
      lineHeight: 1
    }
  }, Array.from({
    length: count
  }).map((_, i) => React.createElement('span', {
    key: i
  }, '★')));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function Testimonial({
  photo,
  name,
  role,
  quote
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement(__ds_scope.StarRating, {
    count: 5
  }), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, '“' + quote + '”'), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 4
    }
  }, photo ? React.createElement('img', {
    src: photo,
    alt: name,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }) : React.createElement('div', {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--color-surface-sunken)',
      border: '1px solid var(--color-border)'
    }
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--color-ink)'
    }
  }, name), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--color-ink-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'accent'
}) {
  const tones = {
    accent: {
      color: 'var(--color-accent)'
    },
    ink: {
      color: 'var(--color-ink-muted)'
    },
    onDark: {
      color: 'var(--color-ink-on-dark-muted)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)',
      ...(tones[tone] || tones.accent)
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--fs-caption)'
  },
  md: {
    padding: '12px 22px',
    fontSize: 'var(--fs-body-sm)'
  },
  lg: {
    padding: '15px 28px',
    fontSize: 'var(--fs-body)'
  }
};
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--fw-semibold)',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
  lineHeight: 1
};
const variants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-primary-ink)',
    borderColor: 'var(--color-primary)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--color-accent-ink)',
    borderColor: 'var(--color-accent)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-ink)',
    borderColor: 'var(--color-border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-link)',
    borderColor: 'transparent',
    padding: 0
  }
};
const hoverVariants = {
  primary: {
    background: 'var(--color-primary-hover)'
  },
  accent: {
    background: 'var(--color-accent-hover)'
  },
  secondary: {
    background: 'var(--color-surface-sunken)'
  },
  ghost: {
    color: 'var(--color-link-hover)',
    textDecoration: 'underline'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  disabled = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const hv = hoverVariants[variant] || {};
  const s = variant === 'ghost' ? {} : sizes[size] || sizes.md;
  return React.createElement('button', {
    onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...s,
      ...v,
      ...(hover && !disabled ? hv : {}),
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, children, arrow ? '→' : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface-sunken)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const fieldStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--color-ink)',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border-strong)',
  borderRadius: 'var(--radius-sm)',
  padding: '12px 14px',
  width: '100%',
  outline: 'none'
};
function Input({
  label,
  placeholder,
  type = 'text'
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-ink-muted)'
    }
  }, label) : null, React.createElement('input', {
    type,
    placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldStyle,
      borderColor: focus ? 'var(--color-focus-ring)' : 'var(--color-border-strong)',
      boxShadow: focus ? '0 0 0 3px var(--color-accent-surface)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = []
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-ink-muted)'
    }
  }, label) : null, React.createElement('select', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      width: '100%',
      outline: 'none'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  rows = 4
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-ink-muted)'
    }
  }, label) : null, React.createElement('textarea', {
    placeholder,
    rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface)',
      border: '1px solid ' + (focus ? 'var(--color-focus-ring)' : 'var(--color-border-strong)'),
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      width: '100%',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? '0 0 0 3px var(--color-accent-surface)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BenefitsSection.jsx
try { (() => {
const benefits = [{
  title: 'Clarity and focus',
  body: 'You know what matters, what does not, and where to invest next.'
}, {
  title: 'Accountable execution',
  body: 'Agencies and vendors perform better when someone senior is leading them. You stop babysitting.'
}, {
  title: 'Lower stress. Better decisions.',
  body: 'Marketing stops being noise. You regain time and confidence as an owner.'
}];
function BenefitsSection() {
  return React.createElement('section', {
    style: {
      padding: '90px 48px',
      background: 'var(--color-surface-sunken)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)'
    }
  }, 'Benefits'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-heading-lg)',
      margin: '16px 0 0'
    }
  }, 'So, what are the benefits?')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, benefits.map((b, i) => React.createElement(__ds_scope.Card, {
    key: i,
    title: b.title
  }, b.body))), React.createElement('div', {
    style: {
      marginTop: 48,
      background: 'var(--color-primary)',
      color: 'var(--color-ink-on-dark)',
      borderRadius: 'var(--radius-md)',
      padding: '32px 40px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, React.createElement('div', {
    style: {
      width: 96,
      height: 96,
      flexShrink: 0,
      background: 'var(--navy-600)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      color: 'var(--color-ink-on-dark-muted)'
    }
  }, 'Photo'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-heading-sm)',
      margin: 0
    }
  }, 'Senior leadership, not another vendor. One person who owns the outcome.'))));
}
Object.assign(__ds_scope, { BenefitsSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BenefitsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FAQCTA.jsx
try { (() => {
const faqs = [{
  q: 'How is this different from hiring a full-time Director of Marketing or CMO?',
  a: 'You get senior-level leadership without salary, benefits, onboarding time, or long-term risk. You gain experience and perspective immediately, with flexibility to scale up or down as your business needs change.'
}, {
  q: 'Who is this for?',
  a: 'Established businesses that want growth, clarity, and accountability. Typical clients we work with generate $5M+ in revenue.'
}, {
  q: 'Is this the same as hiring an agency?',
  a: 'No. Agencies execute tasks. I own the strategy and hold execution accountable.'
}, {
  q: 'Is this more like a CMO or a marketing manager?',
  a: 'It is senior leadership focused on results. Strategy plus execution ownership, without full-time overhead.'
}, {
  q: 'How long do clients typically work with you?',
  a: 'Most engagements start at six months and continue as long as growth and clarity are priorities.'
}, {
  q: 'Will you do the work or just advise?',
  a: 'I lead, guide, and step in where needed. The goal is progress, not busywork.'
}, {
  q: 'Is AI actually practical for my business?',
  a: 'Yes, when applied correctly. I focus on real automation that saves time and money, not hype.'
}];
function FAQSection() {
  return React.createElement('section', {
    style: {
      padding: '90px 48px',
      background: 'var(--color-surface-sunken)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      textAlign: 'center',
      marginBottom: 32
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)'
    }
  }, 'FAQs'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-heading-lg)',
      margin: '16px 0 0'
    }
  }, 'Questions answered.')), React.createElement(__ds_scope.Accordion, {
    items: faqs
  })));
}
function FinalCTA() {
  return React.createElement('section', {
    style: {
      padding: '90px 48px',
      background: 'var(--color-primary)',
      color: 'var(--color-ink-on-dark)',
      textAlign: 'center'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-heading-lg)',
      margin: '0 0 28px',
      maxWidth: 640,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, 'Ready to stop guessing and start owning your marketing?'), React.createElement('a', {
    href: '#',
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--color-primary)',
      background: 'var(--color-ink-on-dark)',
      padding: '15px 28px',
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none'
    }
  }, 'Book a Strategy Call→'));
}
Object.assign(__ds_scope, { FAQSection, FinalCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FAQCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  return React.createElement('footer', {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--color-ink-on-dark-muted)',
      padding: '64px 48px 32px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, React.createElement('div', null, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 20,
      color: 'var(--color-ink-on-dark)'
    }
  }, 'SumoLab'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 1.6,
      marginTop: 14,
      maxWidth: 260
    }
  }, 'Senior marketing leadership for established businesses ready to turn scattered activity into focused growth.')), [{
    h: 'Company',
    items: ['About', 'Approach', "Who It's For", 'Case Studies', 'Insights', 'Contact']
  }, {
    h: 'Services',
    items: ['Fractional CMO', 'Fractional Marketing Director']
  }, {
    h: 'Connect',
    items: ['Book a Strategy Call→', 'jerry@sumolab.co', '(480) 826-9400', 'Chandler, Arizona', 'LinkedIn']
  }].map((col, i) => React.createElement('div', {
    key: i
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--color-ink-on-dark)',
      marginBottom: 12
    }
  }, col.h), React.createElement('ul', {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, col.items.map((t, j) => React.createElement('li', {
    key: j,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, t)))))), React.createElement('div', {
    style: {
      maxWidth: 1080,
      margin: '48px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 12
    }
  }, React.createElement('span', null, '© 2026 SumoLab LLC. All rights reserved.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16
    }
  }, React.createElement('span', null, 'Privacy Policy'), React.createElement('span', null, 'Terms'))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FounderFeatures.jsx
try { (() => {
function FounderSection() {
  return React.createElement('section', {
    style: {
      padding: '90px 48px',
      background: 'var(--color-surface-sunken)',
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 640,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: 'var(--color-border-strong)',
      margin: '0 auto 24px'
    }
  }), React.createElement('div', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)'
    }
  }, 'About'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-heading-md)',
      margin: '16px 0'
    }
  }, "Hi, I'm Jerry Suhrstedt."), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--color-ink-muted)',
      margin: '0 0 24px'
    }
  }, '26 years of experience as an entrepreneur, marketing leader, and business consultant, helping established businesses develop and execute high-impact marketing strategies without the commitment of a full-time hire.'), React.createElement('a', {
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--color-link)'
    }
  }, 'About Jerry→')));
}
function FeaturesSection() {
  const left = ['Fractional CMO Leadership', 'Marketing Strategy And Roadmap', 'Brand And Messaging Alignment', 'Agency And Vendor Oversight', 'KPI Definition And Reporting'];
  const right = ['Funnel And Conversion Review', 'CRM And Marketing System Optimization', 'AI And Automation Opportunity Mapping', 'Weekly Or Biweekly Leadership Cadence'];
  const row = items => React.createElement('ul', {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, items.map((t, i) => React.createElement('li', {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--color-ink)',
      display: 'flex',
      gap: 10
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--color-accent)'
    }
  }, '✓'), t)));
  return React.createElement('section', {
    style: {
      padding: '90px 48px',
      background: 'var(--color-bg)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)',
      textAlign: 'center'
    }
  }, 'Features'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-heading-lg)',
      margin: '16px 0 8px',
      textAlign: 'center'
    }
  }, 'We feature.'), React.createElement('p', {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      color: 'var(--color-ink-muted)',
      margin: '0 0 40px'
    }
  }, 'Simple. Logical.'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40
    }
  }, row(left), row(right))));
}
Object.assign(__ds_scope, { FounderSection, FeaturesSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FounderFeatures.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function Header() {
  const links = ['Services', 'Approach', "Who It's For", 'Case Studies', 'About', 'Insights', 'Contact'];
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px',
      background: 'var(--color-primary)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 22,
      color: 'var(--color-ink-on-dark)'
    }
  }, 'SumoLab'), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 26
    }
  }, links.map((l, i) => React.createElement('a', {
    key: i,
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--color-ink-on-dark-muted)'
    }
  }, l))), React.createElement('a', {
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--color-primary)',
      background: 'var(--color-ink-on-dark)',
      padding: '10px 18px',
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none'
    }
  }, 'Book a Strategy Call→'));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  return React.createElement('section', {
    style: {
      position: 'relative',
      background: 'var(--color-primary)',
      color: 'var(--color-ink-on-dark)',
      padding: '90px 48px 110px',
      textAlign: 'center',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--navy-900)',
      opacity: 0.35
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-display-lg)',
      lineHeight: 'var(--lh-tight)',
      margin: 0
    }
  }, 'Turn Fragmented Marketing Into Predictable Growth.'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--color-ink-on-dark-muted)',
      margin: '24px 0 0'
    }
  }, 'Fractional CMO for established businesses ($5M+ revenue) that need clear strategy, accountable execution, and modern automation, without hiring full-time.'), React.createElement('ul', {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '28px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'center'
    }
  }, ['Replace Agency Chaos With Leadership', 'Align Marketing To Revenue Goals', 'Reduce Waste With Smarter Systems And AI'].map((t, i) => React.createElement('li', {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15
    }
  }, '— ' + t))), React.createElement('a', {
    href: '#',
    style: {
      display: 'inline-block',
      marginTop: 32,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--color-primary)',
      background: 'var(--color-ink-on-dark)',
      padding: '15px 28px',
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none'
    }
  }, 'Book a Strategy Call→')));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProblemSolution.jsx
try { (() => {
function GapSection() {
  return React.createElement('section', {
    style: {
      padding: '90px 48px',
      background: 'var(--color-bg)',
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)'
    }
  }, 'The gap'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-heading-lg)',
      lineHeight: 'var(--lh-heading)',
      margin: '16px 0 20px'
    }
  }, 'Most growing businesses do not have a marketing problem. They have a leadership gap.'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--color-ink-muted)',
      margin: 0
    }
  }, 'Marketing tasks are getting done. Ads are running. Vendors are busy. But no one owns the strategy. Messaging changes by channel. Budgets get spent without clear return. Decisions feel reactive. Growth feels harder than it should.'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--color-ink-muted)',
      margin: '16px 0 0'
    }
  }, 'Owners end up managing marketing instead of leading the business. That is expensive. In money. In time. In stress.')));
}
function SolutionSection() {
  return React.createElement('section', {
    style: {
      padding: '0 48px 90px',
      background: 'var(--color-bg)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      aspectRatio: '4/3',
      background: 'var(--color-surface-sunken)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--color-ink-faint)'
    }
  }, 'Photo: entrepreneur in office'), React.createElement('div', null, React.createElement('div', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)'
    }
  }, 'Solution'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-heading-md)',
      lineHeight: 'var(--lh-heading)',
      margin: '16px 0'
    }
  }, 'This is where a Fractional CMO steps in.'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--color-ink-muted)',
      margin: 0
    }
  }, "SumoLab's founder acts as the owner of your marketing function, bringing clarity, direction, and accountability across strategy, execution, systems, and performance, so marketing supports growth instead of draining it."))));
}
Object.assign(__ds_scope, { GapSection, SolutionSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProblemSolution.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TestimonialsSection.jsx
try { (() => {
const quotes = [{
  name: 'Alek Synkevych',
  role: 'CEO, RevBit',
  quote: "Jerry's mentorship, approachable nature, and positive attitude stand out. He is an excellent mentor and coach, always willing to share his expertise and help team members increase their skill sets."
}, {
  name: 'Khero Witey',
  role: 'Associate VP, Third Republic',
  quote: "Jerry is one of a kind, talks the talk and actually backs it up by walking the walk! If you need someone who understands marketing, there's not many out there that are better!"
}, {
  name: 'Jonathan Cisneros',
  role: 'Agency Owner',
  quote: 'It’s rare to find an individual as knowledgeable and driven as Jerry. It always struck me how much of an executor on any project Jerry is. I would line up to have Jerry on my team any day.'
}, {
  name: 'Doug Crew',
  role: 'Systems Consultant',
  quote: 'His skills, work ethic, and collaborative spirit contribute to the success of any organization. Don’t miss the opportunity to work with Jerry, a true pro who consistently delivers outstanding results.'
}];
function TestimonialsSection() {
  return React.createElement('section', {
    style: {
      padding: '90px 48px',
      background: 'var(--color-bg)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--color-accent)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)'
    }
  }, 'What clients say'), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-heading-lg)',
      margin: '16px 0 0'
    }
  }, "Don't take our word for it.")), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20
    }
  }, quotes.map((q, i) => React.createElement(__ds_scope.Testimonial, {
    key: i,
    ...q
  })))));
}
Object.assign(__ds_scope, { TestimonialsSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TestimonialsSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.BenefitsSection = __ds_scope.BenefitsSection;

__ds_ns.FAQSection = __ds_scope.FAQSection;

__ds_ns.FinalCTA = __ds_scope.FinalCTA;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.FounderSection = __ds_scope.FounderSection;

__ds_ns.FeaturesSection = __ds_scope.FeaturesSection;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.GapSection = __ds_scope.GapSection;

__ds_ns.SolutionSection = __ds_scope.SolutionSection;

__ds_ns.TestimonialsSection = __ds_scope.TestimonialsSection;

})();
