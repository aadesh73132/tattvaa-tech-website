import React, { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Blocks,
  Bot,
  Check,
  CircleCheck,
  Cloud,
  Code2,
  Compass,
  DraftingCompass,
  LayoutTemplate,
  Search,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Wrench,
} from 'lucide-react';
import './DevelopmentLifecycle.css';

const lifecycleSteps = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'Understanding business goals, target audience, requirements and project objectives.',
    Icon: Search,
    tone: 'blue',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Defining project scope, technology stack, architecture and development roadmap.',
    Icon: Compass,
    tone: 'cyan',
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description: 'Creating wireframes, prototypes and intuitive user experiences.',
    Icon: LayoutTemplate,
    tone: 'violet',
  },
  {
    number: '04',
    title: 'Architecture & Development',
    description: 'Building scalable, secure and high-performance web applications.',
    Icon: Code2,
    tone: 'blue',
  },
  {
    number: '05',
    title: 'AI & Integration',
    description: 'Integrating APIs, intelligent automation and third-party services where required.',
    Icon: Bot,
    tone: 'cyan',
  },
  {
    number: '06',
    title: 'Testing & Quality Assurance',
    description: 'Testing functionality, performance, responsiveness and security.',
    Icon: TestTube2,
    tone: 'violet',
  },
  {
    number: '07',
    title: 'Deployment & Launch',
    description: 'Deploying applications with proper configuration and production optimization.',
    Icon: Cloud,
    tone: 'blue',
  },
  {
    number: '08',
    title: 'Maintenance & Growth',
    description: 'Continuous monitoring, updates, improvements and technical support.',
    Icon: Wrench,
    tone: 'cyan',
  },
];

const phoneStages = [
  { title: 'Architecture & Blueprint', status: 'Plan ready', Icon: DraftingCompass, tone: 'blue' },
  { title: 'UI/UX Design', status: 'Design approved', Icon: LayoutTemplate, tone: 'violet' },
  { title: 'Development Progress', status: 'In progress', Icon: Blocks, tone: 'cyan' },
  { title: 'Testing & QA', status: 'Quality checks', Icon: ShieldCheck, tone: 'green' },
  { title: 'Deployment', status: 'Release ready', Icon: Cloud, tone: 'blue' },
  { title: 'Maintenance', status: 'Ongoing care', Icon: Activity, tone: 'violet' },
];

export default function DevelopmentLifecycle() {
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
      { threshold: 0.06, rootMargin: '0px 0px -24px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`development-lifecycle${visible ? ' lifecycle-visible' : ''}`}
      aria-labelledby="lifecycle-heading"
    >
      <div className="lifecycle-glow lifecycle-glow-one" aria-hidden="true" />
      <div className="lifecycle-glow lifecycle-glow-two" aria-hidden="true" />

      <div className="lifecycle-container">
        <header className="lifecycle-heading lifecycle-reveal">
          <span className="lifecycle-eyebrow">
            <span className="lifecycle-eyebrow-line" />
            Engineering Excellence
            <span className="lifecycle-eyebrow-line" />
          </span>
          <h2 id="lifecycle-heading">
            8-Step <span>Development</span> Lifecycle
          </h2>
          <p>
            Our structured development pipeline takes your ideas from discovery to
            deployment and beyond, delivering scalable digital solutions.
          </p>
        </header>

        <div className="lifecycle-layout">
          <div className="lifecycle-step-grid" aria-label="Eight development stages">
            {lifecycleSteps.map(({ number, title, description, Icon, tone }, index) => (
              <article
                className={`lifecycle-step-card lifecycle-reveal tone-${tone}`}
                style={{ '--lifecycle-index': index }}
                key={number}
              >
                <div className="lifecycle-step-top">
                  <span className="lifecycle-step-number">{number}</span>
                  <span className="lifecycle-step-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="lifecycle-step-connector" aria-hidden="true" />
              </article>
            ))}
          </div>

          <div className="lifecycle-phone-wrap lifecycle-reveal">
            <div className="lifecycle-phone-glow" aria-hidden="true" />
            <div className="lifecycle-phone" aria-label="Project development dashboard preview">
              <div className="lifecycle-phone-frame">
                <div className="lifecycle-phone-camera" aria-hidden="true" />
                <div className="lifecycle-phone-screen">
                  <div className="lifecycle-phone-status">
                    <span>9:41</span>
                    <span className="lifecycle-phone-status-icons" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>

                  <div className="lifecycle-dashboard-header">
                    <div>
                      <span className="lifecycle-dashboard-kicker">PROJECT DASHBOARD</span>
                      <h3>Build progress</h3>
                    </div>
                    <span className="lifecycle-live-dot" aria-label="Project active" />
                  </div>

                  <div className="lifecycle-progress-card">
                    <div className="lifecycle-progress-title">
                      <span>Product launch</span>
                      <span>72%</span>
                    </div>
                    <div
                      className="lifecycle-progress-track"
                      role="progressbar"
                      aria-label="Product launch progress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="72"
                    >
                      <span />
                    </div>
                    <div className="lifecycle-progress-caption">
                      <CircleCheck size={13} />
                      <span>Moving through the pipeline</span>
                    </div>
                  </div>

                  <div className="lifecycle-phone-stages">
                    {phoneStages.map(({ title, status, Icon, tone }, index) => (
                      <div className="lifecycle-phone-stage" key={title}>
                        <div className={`lifecycle-phone-stage-icon phone-tone-${tone}`}>
                          <Icon size={15} strokeWidth={1.8} />
                        </div>
                        <div className="lifecycle-phone-stage-copy">
                          <span>{title}</span>
                          <small>{status}</small>
                        </div>
                        <span className={`lifecycle-phone-stage-status${index < 2 ? ' is-complete' : ''}`}>
                          {index < 2 ? <Check size={12} /> : <span />}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="lifecycle-phone-footer">
                    <Sparkles size={14} />
                    <span>Built for your next big idea</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lifecycle-phone-caption">
              <span className="lifecycle-caption-indicator" />
              <span>A clear view at every stage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
