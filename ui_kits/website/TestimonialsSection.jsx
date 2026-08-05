import React from 'react';
import { Testimonial } from '../../components/content/Testimonial.jsx';
const quotes = [
  { name: 'Alek Synkevych', role: 'CEO, RevBit', quote: "Jerry's mentorship, approachable nature, and positive attitude stand out. He is an excellent mentor and coach, always willing to share his expertise and help team members increase their skill sets." },
  { name: 'Khero Witey', role: 'Associate VP, Third Republic', quote: "Jerry is one of a kind, talks the talk and actually backs it up by walking the walk! If you need someone who understands marketing, there's not many out there that are better!" },
  { name: 'Jonathan Cisneros', role: 'Agency Owner', quote: 'It’s rare to find an individual as knowledgeable and driven as Jerry. It always struck me how much of an executor on any project Jerry is. I would line up to have Jerry on my team any day.' },
  { name: 'Doug Crew', role: 'Systems Consultant', quote: 'His skills, work ethic, and collaborative spirit contribute to the success of any organization. Don’t miss the opportunity to work with Jerry, a true pro who consistently delivers outstanding results.' },
];
export function TestimonialsSection() {
  return React.createElement('section', { style: { padding: '90px 48px', background: 'var(--color-bg)' } },
    React.createElement('div', { style: { maxWidth: 1080, margin: '0 auto' } },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 48 } },
        React.createElement('div', { style: { color: 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)' } }, 'What clients say'),
        React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-heading-lg)', margin: '16px 0 0' } }, "Don't take our word for it.")
      ),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 } },
        quotes.map((q, i) => React.createElement(Testimonial, { key: i, ...q }))
      )
    )
  );
}
