import React from 'react';

export default function TechnologyCard({ technology, index, visible }) {
  const { name, category, description, use, Icon } = technology;

  return (
    <article
      className={`stack-card${visible ? ' is-visible' : ''}`}
      style={{ '--stack-index': index }}
    >
      <div className="stack-card-top">
        <div className="stack-card-icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <span className="stack-category">{category}</span>
      </div>
      <h3 className="stack-card-title">{name}</h3>
      <p className="stack-card-description">{description}</p>
      <div className="stack-card-footer">
        <span className="stack-status-dot" aria-hidden="true" />
        <span className="stack-use-label">{use}</span>
      </div>
    </article>
  );
}
