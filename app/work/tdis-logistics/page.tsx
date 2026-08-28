import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import CaseStudyBlock from "@/components/CaseStudyBlock";

export const metadata: Metadata = {
  title: "TDIS Logistics — Case Study",
  description:
    "How Bidemi built operational software around a real travel and ticketing business: automation, reporting, and WhatsApp-based workflows for TDIS Logistics.",
};

export default function TdisLogisticsPage() {
  return (
    <CaseStudyShell
      eyebrow="Case Study 01"
      title="TDIS Logistics"
      lede="Operational software built around a real travel and ticketing business, turning manual booking, balance-checking, and reporting work into structured systems."
      meta={[
        { k: "Domain", v: "Travel & ticketing operations" },
        { k: "Focus", v: "Automation, workflow tooling, reporting" },
        { k: "Role", v: "Systems & automation build" },
      ]}
      nextHref="/work/globetech"
      nextTitle="GlobeTech — Application Platform"
    >
      <CaseStudyBlock num="01" title="The Problem">
        <p>
          Ticketing and travel operations at TDIS ran through a mix of manual coordination, much of
          it over WhatsApp, message by message, between staff, customers, and airline processes.
          Checking an airline wallet balance meant logging into a portal by hand. Every booking
          meant re-typing the same details, chasing confirmations, and pulling together reports
          after the fact rather than as the work happened.
        </p>
        <p>
          None of it was broken exactly. It just didn&rsquo;t scale, and it left the operations team
          without real visibility into balances, ticket availability, deposits, and outstanding
          debt across the business.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="02" title="The Approach" raised>
        <p>
          The starting point was mapping how a booking actually moved from a customer&rsquo;s first
          message to a confirmed ticket, and where in that path a person was doing something a
          system could do instead, or at least track properly.
        </p>
        <p>
          WhatsApp stayed the front door, because that&rsquo;s where the operation already lived.
          Behind it, the goal was to centralize what had been scattered across chats, spreadsheets,
          and separate airline portals into one operational dashboard, and to automate the checks
          that used to require someone logging into an airline account by hand.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="03" title="The System">
        <p>
          The result is a modular travel-operations dashboard alongside a separate automation
          service, rather than one monolithic app:
        </p>
        <ul>
          <li>An operational dashboard centralizing airline wallet balances, ticket availability, client records, deposits, and debt tracking</li>
          <li>A dedicated WhatsApp automation service for booking-related workflows</li>
          <li>A separate Node.js connector service that signs into airline B2B portals to synchronize wallet balances automatically, with encrypted credential storage, retry handling, and scheduled runs</li>
          <li>A componentized, typed frontend replacing what was originally a large single-file application</li>
        </ul>
        <p>
          The airline-connector piece is still evolving; not every airline integration is finished
          to the same degree, and it was built to be extended rather than closed.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="04" title="Architecture" raised>
        <p>A simplified view of how a request moves through the system:</p>
        <div className="arch-diagram">
          <svg viewBox="0 0 760 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="10" y="60" width="110" height="42" rx="3" className="flow-node" />
            <text x="20" y="85" className="flow-label">CUSTOMER</text>
            <line x1="120" y1="81" x2="160" y2="81" className="flow-line flow-line--active" />
            <rect x="160" y="60" width="110" height="42" rx="3" className="flow-node" />
            <text x="170" y="85" className="flow-label">WHATSAPP</text>
            <line x1="270" y1="81" x2="310" y2="81" className="flow-line" />
            <rect x="310" y="60" width="110" height="42" rx="3" className="flow-node flow-node--accent" />
            <text x="320" y="85" className="flow-label">AUTOMATION</text>
            <line x1="420" y1="81" x2="460" y2="81" className="flow-line" />
            <rect x="460" y="60" width="110" height="42" rx="3" className="flow-node" />
            <text x="470" y="85" className="flow-label">AIRLINE OPS</text>
            <line x1="570" y1="81" x2="610" y2="81" className="flow-line" />
            <rect x="610" y="60" width="140" height="42" rx="3" className="flow-node" />
            <text x="620" y="85" className="flow-label">TICKET + REPORT</text>
          </svg>
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock num="05" title="Technology">
        <div className="tech-tags">
          <span className="tag">Next.js</span>
          <span className="tag">TypeScript</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">Firestore</span>
          <span className="tag">Node.js</span>
          <span className="tag">Playwright</span>
          <span className="tag">WhatsApp APIs</span>
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock num="06" title="Outcome" raised>
        <p>
          Booking and balance-checking now run through structured, repeatable workflows instead of
          manual coordination across chats and portals, with reporting generated from the system
          itself rather than assembled by hand. This is software built around a real operating
          business, not a demo. That&rsquo;s the part worth taking from it.
        </p>
      </CaseStudyBlock>
    </CaseStudyShell>
  );
}
