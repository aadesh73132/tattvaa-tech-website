import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  ClipboardList,
  Code2,
  Globe2,
  Layers3,
  Search,
  X,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './WhatsAppChatWidget.css';

const topics = [
  { title: 'SEO & Digital Marketing', icon: Search },
  { title: 'SaaS Development', icon: Layers3 },
  { title: 'Custom Software & GenAI Solutions', icon: Code2 },
  { title: 'AI & Automation Solutions', icon: Bot },
  { title: 'Website & E-commerce Development', icon: Globe2 },
  { title: 'Technology Consultation & Project Estimation', icon: ClipboardList },
];

function WhatsAppIcon({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16.02 2.67A13.24 13.24 0 0 0 4.65 22.7L2.9 29.1l6.55-1.72a13.25 13.25 0 1 0 6.57-24.71Zm0 24.15a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-3.89 1.02 1.04-3.79-.26-.4a10.9 10.9 0 1 1 9.07 4.93Zm5.98-8.16c-.33-.17-1.94-.96-2.24-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.01-2.45-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.35 3.39c.17.22 2.32 3.54 5.63 4.96.79.34 1.4.54 1.88.69.79.25 1.51.21 2.08.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.39Z" />
    </svg>
  );
}

export default function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const launcherRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closePopup();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const openPopup = () => {
    window.clearTimeout(closeTimerRef.current);
    setIsClosing(false);
    setIsOpen(true);
  };

  const closePopup = () => {
    if (!isOpen || isClosing) return;
    setIsClosing(true);
    launcherRef.current?.focus();
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 180);
  };

  const getWhatsAppUrl = (topic) => {
    const message = `Hello Tattvaa Tech Team! I am interested in ${topic}. I would like to discuss my project requirements, pricing, and timeline. Please assist me.`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="whatsapp-widget">
      {isOpen && (
        <section
          aria-label="Chat with Tattvaa Tech on WhatsApp"
          aria-hidden={isClosing}
          className={`whatsapp-panel${isClosing ? ' is-closing' : ''}`}
          id="whatsapp-chat-panel"
          role="dialog"
        >
          <header className="whatsapp-panel-header">
            <div className="whatsapp-avatar">
              <WhatsAppIcon className="h-6 w-6" />
              <span className="whatsapp-avatar-status" aria-label="Online" />
            </div>
            <div className="whatsapp-header-copy">
              <h2>Tattvaa Tech</h2>
              <p><span className="whatsapp-status-dot" />Online <span aria-hidden="true">•</span> Instant Response</p>
            </div>
            <button
              aria-label="Close WhatsApp chat"
              className="whatsapp-close-button"
              onClick={closePopup}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div className="whatsapp-panel-body">
            <p className="whatsapp-welcome-message">
              <span aria-hidden="true">👋</span> Welcome to Tattvaa Tech! Connect directly with our team for SEO, software development, AI solutions, and digital transformation services.
            </p>
            <h3 className="whatsapp-topic-heading">Select a topic to chat</h3>
            <div className="whatsapp-topic-list">
              {topics.map(({ title, icon: TopicIcon }) => (
                <a
                  className="whatsapp-topic-link"
                  href={getWhatsAppUrl(title)}
                  key={title}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="whatsapp-topic-icon"><TopicIcon className="h-4 w-4" /></span>
                  <span className="whatsapp-topic-title">{title}</span>
                  <ArrowUpRight aria-hidden="true" className="whatsapp-topic-arrow h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="whatsapp-secure-note">
              Opens a direct conversation in WhatsApp
            </p>
          </div>
        </section>
      )}

      <button
        aria-controls="whatsapp-chat-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        className={`whatsapp-launcher${isOpen ? ' is-open' : ''}`}
        onClick={isOpen ? closePopup : openPopup}
        ref={launcherRef}
        type="button"
      >
        {isOpen ? <X className="h-7 w-7" /> : <WhatsAppIcon className="h-8 w-8" />}
      </button>
    </div>
  );
}
