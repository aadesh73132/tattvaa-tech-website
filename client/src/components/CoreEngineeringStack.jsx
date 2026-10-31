import React, { useEffect, useRef, useState } from 'react';
import {
  Atom,
  Box,
  Bot,
  Braces,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Flame,
  Globe,
  Layers,
  Network,
  Paintbrush,
  Server,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';
import TechnologyCard from './TechnologyCard';

const technologies = [
  {
    name: 'React.js',
    category: 'Frontend',
    use: 'UI ENGINE',
    description: 'Build interactive user interfaces from reusable components.',
    Icon: Atom,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    use: 'WEB FRAMEWORK',
    description: 'Create full-stack web experiences with the React ecosystem.',
    Icon: Layers,
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    use: 'WEB LANGUAGE',
    description: 'Power responsive, interactive experiences across the web.',
    Icon: Braces,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    use: 'TYPE SAFETY',
    description: 'Add dependable types to modern JavaScript applications.',
    Icon: Code2,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    use: 'UI STYLING',
    description: 'Style consistent, responsive interfaces with utility classes.',
    Icon: Paintbrush,
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    use: 'UI MOTION',
    description: 'Create expressive motion and interactions for React.',
    Icon: Zap,
  },
  {
    name: 'Node.js',
    category: 'Backend',
    use: 'RUNTIME',
    description: 'Run scalable JavaScript services beyond the browser.',
    Icon: Server,
  },
  {
    name: 'Express.js',
    category: 'Backend',
    use: 'API SERVER',
    description: 'Build lightweight web servers and application APIs.',
    Icon: Workflow,
  },
  {
    name: 'Python',
    category: 'Backend',
    use: 'BACKEND LANGUAGE',
    description: 'Develop versatile services, tools, and data applications.',
    Icon: Terminal,
  },
  {
    name: 'Django',
    category: 'Backend',
    use: 'WEB FRAMEWORK',
    description: 'Build feature-rich web applications with Python.',
    Icon: Layers,
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    use: 'API INTEGRATION',
    description: 'Connect applications through clear HTTP interfaces.',
    Icon: Globe,
  },
  {
    name: 'GraphQL',
    category: 'Backend',
    use: 'API QUERIES',
    description: 'Query connected data through a flexible API layer.',
    Icon: Network,
  },
  {
    name: 'MongoDB',
    category: 'Database & Cloud',
    use: 'DATABASE',
    description: 'Store application data in a flexible document model.',
    Icon: Database,
  },
  {
    name: 'MySQL',
    category: 'Database & Cloud',
    use: 'DATABASE',
    description: 'Manage relational data with a widely used SQL database.',
    Icon: Database,
  },
  {
    name: 'PostgreSQL',
    category: 'Database & Cloud',
    use: 'DATABASE',
    description: 'Build data-rich applications on a powerful SQL database.',
    Icon: Database,
  },
  {
    name: 'Firebase',
    category: 'Database & Cloud',
    use: 'BACKEND SERVICES',
    description: 'Use managed backend services for connected applications.',
    Icon: Flame,
  },
  {
    name: 'AWS',
    category: 'Database & Cloud',
    use: 'CLOUD INFRASTRUCTURE',
    description: 'Build and run cloud applications on flexible infrastructure.',
    Icon: Cloud,
  },
  {
    name: 'Docker',
    category: 'Database & Cloud',
    use: 'CONTAINERS',
    description: 'Package applications for consistent development and delivery.',
    Icon: Box,
  },
  {
    name: 'Artificial Intelligence',
    category: 'AI & Emerging Tech',
    use: 'INTELLIGENT SYSTEMS',
    description: 'Apply intelligent systems to practical product challenges.',
    Icon: Brain,
  },
  {
    name: 'Machine Learning',
    category: 'AI & Emerging Tech',
    use: 'PREDICTIVE MODELS',
    description: 'Build systems that learn patterns from data.',
    Icon: Cpu,
  },
  {
    name: 'Generative AI',
    category: 'AI & Emerging Tech',
    use: 'CONTENT GENERATION',
    description: 'Create new content and capabilities with generative models.',
    Icon: Sparkles,
  },
  {
    name: 'TensorFlow',
    category: 'AI & Emerging Tech',
    use: 'ML FRAMEWORK',
    description: 'Develop and deploy machine learning models.',
    Icon: Network,
  },
  {
    name: 'OpenAI API',
    category: 'AI & Emerging Tech',
    use: 'AI INTEGRATION',
    description: 'Integrate language and generative AI capabilities.',
    Icon: Bot,
  },
  {
    name: 'Automation',
    category: 'AI & Emerging Tech',
    use: 'WORKFLOWS',
    description: 'Connect tools and streamline repeatable workflows.',
    Icon: Workflow,
  },
];

const technologiesPerRow = 4;
const technologyRows = Array.from(
  { length: Math.ceil(technologies.length / technologiesPerRow) },
  (_, rowIndex) => technologies.slice(
    rowIndex * technologiesPerRow,
    (rowIndex + 1) * technologiesPerRow,
  ),
);

export default function CoreEngineeringStack() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -24px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`engineering-stack${visible ? ' stack-visible' : ''}`}
      aria-labelledby="engineering-stack-title"
    >
      <div className="stack-ambient stack-ambient-blue" aria-hidden="true" />
      <div className="stack-ambient stack-ambient-cyan" aria-hidden="true" />
      <div className="stack-grid-overlay" aria-hidden="true" />

      <div className="stack-content">
        <header className="stack-heading stack-reveal">
          <span className="stack-eyebrow">
            <span className="stack-eyebrow-dot" aria-hidden="true" />
            Software, AI & Cloud Engineering
          </span>
          <h2 id="engineering-stack-title">
            Our Core <span>Engineering Stack</span>
          </h2>
          <p>
            Engineering capabilities for web platforms, cloud infrastructure, and
            intelligent products built around real business needs.
          </p>
        </header>

        <div className="stack-marquee-list">
          {technologyRows.map((row, rowIndex) => (
            <div
              className="stack-marquee-window"
              key={`technology-row-${rowIndex + 1}`}
              role="group"
              aria-label={`Technology marquee row ${rowIndex + 1}`}
            >
              <div className={`stack-marquee-track ${rowIndex % 2 === 0 ? 'stack-marquee-forward' : 'stack-marquee-reverse'}`}>
                {[0, 1].map((copy) => (
                  <div
                    className="stack-marquee-group"
                    key={`technology-row-${rowIndex + 1}-copy-${copy}`}
                    aria-hidden={copy === 1 ? 'true' : undefined}
                  >
                    {row.map((technology, cardIndex) => (
                      <TechnologyCard
                        key={technology.name}
                        technology={technology}
                        index={rowIndex * technologiesPerRow + cardIndex}
                        visible={visible}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
