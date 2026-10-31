import React, { useState } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';

const questions = [
  {
    question: 'What services does Tattvaa Tech provide?',
    answer:
      'We bring technology, creative, and business capabilities together. Services include custom software, web and mobile applications, AI and machine learning, AI agents, automation, IoT, robotics, UI/UX and graphic design, branding, digital marketing, SEO, AEO, GEO, and content creation.',
  },
  {
    question: 'Can you help take a project from an idea to launch?',
    answer:
      'Yes. We can support the full journey, from understanding requirements and planning through design, development, testing, deployment, marketing, and ongoing improvements. The scope is shaped around your goals and project needs.',
  },
  {
    question: 'Do you build custom robots and automation systems?',
    answer:
      'Yes. We design custom robotic systems and prototypes based on the use case, requirements, and budget. This can include robot architecture, sensors, embedded systems, computer vision, AI-powered or autonomous features, and automation.',
  },
  {
    question: 'Do you work with startups, schools, and small businesses?',
    answer:
      'Yes. We work with startups, businesses, educational institutions, research organizations, and other teams. We aim to make practical technology and robotics solutions accessible across different project sizes and needs.',
  },
  {
    question: 'Can you work with clients outside your local region?',
    answer:
      'Yes. We collaborate remotely with organizations in different locations, including international startups, businesses, agencies, and technology companies.',
  },
  {
    question: 'Do you offer white-label development or dedicated teams?',
    answer:
      'Yes. Depending on the project, we can work through project-based development, white-label development, dedicated development teams, outsourcing, or a longer-term technology partnership.',
  },
  {
    question: 'How much does a project cost, and how long will it take?',
    answer:
      'Cost and timing depend on the project scope, requirements, complexity, and delivery plan. After discussing your goals, we can clarify the work involved and provide a project-specific estimate.',
  },
  {
    question: 'How do I get started with Tattvaa Tech?',
    answer:
      'Share your idea, goals, and any requirements through our contact form. Our team can then discuss your needs, answer questions, and explore a suitable next step with you.',
  },
];

export default function FAQ({ setActivePage }) {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            Frequently Asked Questions
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Helpful answers, before we get started.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Learn more about our services, project approach, and how we work with teams.
          </p>
        </div>

        <div className="space-y-3">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;
            const answerId = `faq-answer-${index + 1}`;

            return (
              <article
                key={question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-blue-200 bg-white shadow-md shadow-blue-900/5'
                    : 'border-slate-200 bg-white/80'
                }`}
              >
                <h2>
                  <button
                    type="button"
                    id={`faq-question-${index + 1}`}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 sm:px-7 text-left"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 text-xs font-bold text-blue-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {question}
                      </span>
                    </span>
                    <span className={`shrink-0 rounded-full p-1.5 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h2>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={`faq-question-${index + 1}`}
                  hidden={!isOpen}
                  className="px-5 pb-5 pl-14 sm:px-7 sm:pb-6 sm:pl-16"
                >
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-600">{answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-7 text-center text-white sm:flex-row sm:p-9 sm:text-left">
          <div>
            <h2 className="text-xl font-extrabold">Have a question about your project?</h2>
            <p className="mt-1 text-sm text-blue-100">Tell us what you’re looking to build and we’ll be happy to discuss it.</p>
          </div>
          <button
            type="button"
            onClick={() => setActivePage('contact')}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
