import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  accentColor = 'blue',
  tag,
  onLearnMore,
}) {
  const accentColors = {
    blue: '#2563EB',
    cyan: '#0891B2',
    purple: '#9333EA',
    violet: '#4F46E5',
    emerald: '#059669',
    amber: '#EA580C',
  };
  const accent = accentColors[accentColor] || accentColors.blue;

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${title}`}
      onClick={onLearnMore}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onLearnMore();
        }
      }}
      className="service-card"
      style={{ '--service-accent': accent }}
    >
      <div className="service-card-content">
        <div className="service-card-header">
          <div className="service-card-icon" aria-hidden="true">
            {Icon && <Icon className="h-8 w-8" strokeWidth={1.8} />}
          </div>
          {tag && (
            <span className="service-card-badge">
              {tag}
            </span>
          )}
        </div>

        <h2 className="service-card-title">{title}</h2>
        <p className="service-card-description">{description}</p>
      </div>

      <div className="service-card-action">
        <span className="service-card-link">
          <span>Learn More</span>
          <ArrowRight className="service-card-arrow h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
