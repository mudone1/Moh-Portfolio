import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import CaseStudyBlock from "@/components/CaseStudyBlock";

export const metadata: Metadata = {
  title: "WhatsApp / AI Automation — Case Study",
  description:
    "How Muhammed Abdulwahab built AI-assisted WhatsApp automation for business conversations and booking workflows, the foundation for Fudur Automation.",
};

export default function WhatsappAiAutomationPage() {
  return (
    <CaseStudyShell
      eyebrow="Case Study 03"
      title="WhatsApp / AI Automation"
      lede="AI-assisted conversation handling and backend logic for WhatsApp-based bookings and business workflows, the direction Muhammed's work is heading through Fudur Automation."
      meta={[
        { k: "Domain", v: "AI automation, backend systems" },
        { k: "Focus", v: "WhatsApp API, AI/LLM integration, booking workflows" },
        { k: "Role", v: "Backend & AI layer build" },
      ]}
      nextHref="/#work"
      nextTitle="Back to Selected Work"
    >
      <CaseStudyBlock num="01" title="The Problem">
        <p>
          Business conversations on WhatsApp, bookings, questions, follow-ups, mostly still need a
          person on the other end reading, deciding, and typing a reply. That doesn&rsquo;t scale
          past a certain volume, and it means the business is only ever as fast as whoever is
          available to answer.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="02" title="The Approach" raised>
        <p>
          Rather than a scripted chatbot with a fixed decision tree, the approach was to give the
          system an AI layer that can understand what&rsquo;s actually being asked, and connect that
          understanding to real backend actions: checking availability, starting a booking, or
          handing off to a person when a request falls outside defined rules.
        </p>
        <p>
          The AI layer sits between the conversation and the business logic. It applies clearly
          defined business rules and AI-assisted logic to route each request; it doesn&rsquo;t
          replace the backend, it decides what the backend should do next.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="03" title="The System">
        <ul>
          <li>WhatsApp API integration for business conversations</li>
          <li>An AI/LLM layer for understanding and routing incoming requests</li>
          <li>Backend workflows for booking and travel-related automation</li>
          <li>APIs connecting the conversation layer to business systems</li>
          <li>Session and workflow state management across a conversation</li>
        </ul>
        <p>
          This project is the foundation for <strong>Fudur Automation</strong>, a product Muhammed
          is currently building to turn repetitive business processes into reusable, AI-powered
          automation systems. It&rsquo;s an active direction, not a finished platform.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="04" title="Architecture" raised>
        <p>A simplified view of how a message becomes an action:</p>
        <div className="arch-diagram">
          <svg viewBox="0 0 900 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="10" y="59" width="100" height="42" rx="3" className="flow-node" />
            <text x="20" y="84" className="flow-label">USER</text>
            <line x1="110" y1="80" x2="150" y2="80" className="flow-line flow-line--active" />
            <rect x="150" y="59" width="120" height="42" rx="3" className="flow-node" />
            <text x="160" y="84" className="flow-label">WHATSAPP</text>
            <line x1="270" y1="80" x2="310" y2="80" className="flow-line" />
            <rect x="310" y="59" width="100" height="42" rx="3" className="flow-node" />
            <text x="320" y="84" className="flow-label">API</text>
            <line x1="410" y1="80" x2="450" y2="80" className="flow-line" />
            <rect x="450" y="59" width="120" height="42" rx="3" className="flow-node flow-node--accent" />
            <text x="460" y="84" className="flow-label">AI LAYER</text>
            <line x1="570" y1="80" x2="610" y2="80" className="flow-line" />
            <rect x="610" y="59" width="140" height="42" rx="3" className="flow-node" />
            <text x="620" y="84" className="flow-label">BUSINESS LOGIC</text>
            <line x1="750" y1="80" x2="790" y2="80" className="flow-line" />
            <rect x="790" y="59" width="100" height="42" rx="3" className="flow-node" />
            <text x="800" y="84" className="flow-label">DATABASE</text>
          </svg>
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock num="05" title="Technology">
        <div className="tech-tags">
          <span className="tag">Node.js</span>
          <span className="tag">TypeScript</span>
          <span className="tag">WhatsApp APIs</span>
          <span className="tag">AI / LLMs</span>
          <span className="tag">REST APIs</span>
          <span className="tag">Vercel</span>
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock num="06" title="Outcome" raised>
        <p>
          A working AI layer that understands incoming WhatsApp requests and routes them to real
          backend workflows instead of a person doing it manually. It&rsquo;s the base Fudur
          Automation is being built on, not a finished product yet, an active direction.
        </p>
      </CaseStudyBlock>
    </CaseStudyShell>
  );
}
