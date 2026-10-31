import React, { useState } from 'react';
import {
  Play,
  X,
  Target,
  MessageSquare,
  Users,
  Headphones,
  CheckCircle,
  ArrowRight,
  Shield,
  Lightbulb,
  Award,
  Sparkles,
  Palette,
  Bot,
  Globe,
  Rocket,
  Layers,
} from 'lucide-react';

export default function About({ setActivePage }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const stats = [
    { value: '50+', label: 'Projects' },
    { value: '30+', label: 'Clients' },
    { value: '5+', label: 'Products' },
    { value: '3+', label: 'Offices' },
  ];

  const pillars = [
    {
      title: 'Product-Focused Approach',
      desc: 'We treat every line of code as an investment in your product’s long-term business viability and user adoption.',
      icon: Target,
      color: 'blue',
    },
    {
      title: 'Transparent Communication',
      desc: 'Clear roadmaps, honest sprint retrospectives, direct Slack/Teams channels, and no hidden surprises.',
      icon: MessageSquare,
      color: 'cyan',
    },
    {
      title: 'Skilled & Dedicated Team',
      desc: 'Top 3% specialized full-stack engineers, AI researchers, and UX architects dedicated to your mission.',
      icon: Users,
      color: 'purple',
    },
    {
      title: 'Long-Term Support',
      desc: 'We don’t just deliver and vanish; we proactively maintain, optimize performance, and scale with you.',
      icon: Headphones,
      color: 'emerald',
    },
  ];

  const teamMembers = [
    {
      name: 'Sanskar Jain',
      role: 'Founder',
      initials: 'SJ',
      gradient: 'from-blue-600 via-indigo-600 to-blue-700',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      focus: 'Vision, Product Strategy & AI Architecture',
    },
    {
      name: 'Dev Agarwal',
      role: 'Co Founder',
      initials: 'DA',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      focus: 'Business Operations, Growth & Client Partnerships',
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER SECTION (Screen 5) ================= */}
        <div className="max-w-3xl space-y-4 text-left mb-10">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            About Tattvaa Tech
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Technology, AI, Robotics & Digital Solutions{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Built for Real-World Impact
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tattvaa Tech is a technology and innovation company providing software, AI, robotics, digital, creative, and business solutions for startups, businesses, educational institutions, and organizations. We help our clients turn ideas into practical, scalable, and cost-effective solutions that create real business value.
          </p>
        </div>

        {/* ================= STATS ROW ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-slate-200/80 mb-12">
          {stats.map((item, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-700 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">One ecosystem for technology, creativity, and growth</h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Our expertise covers custom software, web and mobile app development, AI and machine learning, AI agents, automation, IoT, robotics, UI/UX and graphic design, video editing, branding, digital marketing, SEO, AEO, GEO, content creation, and digital product development. We bring technology, creativity, and business understanding together to help organizations launch, grow, automate, and compete in the digital world.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5">
              <Bot className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">Robotics & Intelligent Automation</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We design custom robotic systems around each project’s requirements, use cases, and budget—from robot design and architecture to prototypes, AI-powered and autonomous systems, educational and service robots, sensor integration, embedded systems, computer vision, and automation.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Our goal is to make practical, reliable, cost-effective robotics accessible to startups, schools, colleges, research institutions, and small businesses—not only large organizations.
            </p>
          </article>

          <article className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-7 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center mb-5">
              <Palette className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">Digital & Creative Solutions</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Our digital and creative team builds strong online presences through UI/UX and website design, graphic design, video editing, social media content, branding, SEO, AEO, GEO, digital marketing, and content creation.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              From a distinct brand identity to a complete digital platform, clients can work with one connected technology and creative team.
            </p>
          </article>

          <article className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-5">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">From Idea to Deployment</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Whether you need a website, mobile app, AI solution, automation system, custom robot, SaaS product, brand identity, or digital marketing, our team can support the complete journey: strategy and design, development, testing, deployment, marketing, and ongoing improvements.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We collaborate with international startups, businesses, agencies, and technology companies through project-based and white-label development, dedicated teams, outsourcing, and long-term technology partnerships.
            </p>
          </article>
        </div>

        {/* ================= MAIN OFFICE / TEAM VISUAL (Screen 5) ================= */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 min-h-[380px] sm:min-h-[460px] flex items-center justify-center text-center p-6 sm:p-12">
          
          {/* Stylized background representing high-tech modern office space */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 opacity-95"></div>
          
          {/* Geometric perspective lines / glass office grid */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* Wall Branding Graphic */}
          <div className="relative z-10 max-w-xl space-y-6 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Gurugram • Gwalior • Saharanpur & Remote Worldwide</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/t-logo.png"
                alt="Tattvaa Tech Logo"
                className="w-12 h-12 object-contain drop-shadow-md"
              />
              <div className="text-left">
                <div className="text-2xl font-black text-white tracking-wider">TATTVAA TECH</div>
                <div className="text-[10px] tracking-[0.25em] text-blue-400 font-bold">IDEAS INTO IMPACT</div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
              "We believe true innovation happens where deep engineering rigour meets clean, human-centered design."
            </p>

            {/* Play Video Button (Matching Screen 5) */}
            <button
              onClick={() => setVideoModalOpen(true)}
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xs">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Play Video</span>
            </button>
          </div>
        </div>

        {/* ================= 4 CORE PILLARS (Screen 5) ================= */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= VISION ================= */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Our Vision</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Make innovation more accessible, practical, and affordable.</h2>
              <p className="text-sm sm:text-base leading-relaxed text-blue-100">
                We aspire to build a globally trusted technology company that makes software, AI, robotics, automation, and digital solutions accessible to more people and organizations. At Tattvaa Tech, we don’t just provide services—we build solutions that help businesses turn ideas into real-world impact.
              </p>
            </div>
            <div className="hidden lg:flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/10">
              <Globe className="h-10 w-10 text-cyan-300" />
            </div>
          </div>
        </div>

        {/* ================= MEET OUR LEADERSHIP SECTION ================= */}
        <div className="mt-24 pt-16 border-t border-slate-200/90 text-left">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Founders & Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              The Leadership Behind Tattvaa Tech
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2">
              Visionary leadership driving engineering excellence, enterprise scale, and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-blue-500/15 group-hover:scale-105 transition-transform flex-shrink-0`}
                >
                  {member.initials}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <span
                      className={`text-xs font-bold px-3 py-0.5 rounded-full border ${member.badgeColor}`}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= VIDEO MODAL ================= */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 rounded-3xl max-w-3xl w-full p-6 border border-slate-800 shadow-2xl text-white relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              Tattvaa Tech: Life, Culture & Craft
            </h3>
            <div className="aspect-video bg-slate-950 rounded-xl flex flex-col items-center justify-center p-8 border border-slate-800 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4 text-white shadow-lg animate-pulse">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Tattvaa Tech Overview & Culture Reel</h4>
              <p className="text-xs text-slate-400 max-w-md">
                Experience how our engineers, designers, and AI architects collaborate on high-stakes digital transformations.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
