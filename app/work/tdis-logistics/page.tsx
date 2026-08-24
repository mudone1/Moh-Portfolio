import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import CaseStudyBlock from "@/components/CaseStudyBlock";

export const metadata: Metadata = {
  title: "TDIS Logistics — Case Study",
  description:
    "How Muhammed Abdulwahab built automation and reporting systems around airline ticketing, travel operations, and WhatsApp workflows for TDIS Logistics.",
};

export default function TdisLogisticsPage() {
  return (
    <CaseStudyShell
      eyebrow="Case Study 01"
      title="TDIS Logistics"
      lede="Systems and automation built around airline ticketing, travel operations, and the WhatsApp conversations that used to hold the whole process together manually."
      meta={[
        { k: "Domain", v: "Travel & logistics operations" },
        { k: "Focus", v: "Automation, workflow tooling, reporting" },
        { k: "Role", v: "Systems & automation build" },
      ]}
      nextHref="/work/globetech"
      nextTitle="GlobeTech — Grant Platform"
    >
      <CaseStudyBlock num="01" title="The Problem">
        <p>
          Ticketing and travel operations at TDIS ran through a mix of manual coordination — much of
          it over WhatsApp, message by message, between staff, customers, and airline processes. Every
          booking meant someone re-typing the same details, chasing confirmations, and manually
          pulling together reports on what had actually happened.
        </p>
        <p>
          The process worked, but it didn&rsquo;t scale, and it didn&rsquo;t leave behind the
          reporting an operations team needs to see what&rsquo;s actually going on across a day, a
          week, or a route.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="02" title="The Thinking" raised>
        <p>
          The starting point wasn&rsquo;t &ldquo;what software should we build&rdquo; — it was mapping
          how a booking actually moved from a customer&rsquo;s first message to a confirmed ticket, and
          where in that path a human was doing something a system could do instead.
        </p>
        <p>
          WhatsApp stayed the front door, because that&rsquo;s where the operation already lived —
          customers and staff weren&rsquo;t going to switch channels. The goal was to structure what
          happened behind that door: turn a loose conversation into a tracked workflow with a clear
          status, without making the experience feel like a form.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="03" title="The System">
        <p>
          The result is a set of connected tools rather than one monolithic app: automated handling of
          WhatsApp-based booking requests, structured workflows for airline-related processes, and
          reporting that gives operations visibility without manual data entry at the end of the day.
        </p>
        <ul>
          <li>WhatsApp-based workflow automation for booking and follow-up</li>
          <li>Structured handling of airline-related ticketing processes</li>
          <li>Operational reporting built from workflow data, not manual logs</li>
          <li>Tooling to reduce repetitive coordination between staff and customers</li>
        </ul>
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

      <CaseStudyBlock num="05" title="Screens">
        <div className="placeholder-shot">
          Screenshot placeholder — add product screenshots of the booking workflow and reporting views here.
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock num="06" title="The Result" raised>
        <p>
          Booking and ticketing coordination now runs through structured, repeatable workflows instead
          of ad-hoc messaging, with reporting generated from the workflow itself rather than assembled
          by hand afterward. No fabricated figures here — if you&rsquo;d like specific outcomes
          included, add them once confirmed.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="07" title="Technology">
        <div className="tech-tags">
          <span className="tag">Node.js</span>
          <span className="tag">TypeScript</span>
          <span className="tag">WhatsApp APIs</span>
          <span className="tag">REST APIs</span>
          <span className="tag">Automation</span>
          <span className="tag">PostgreSQL</span>
        </div>
      </CaseStudyBlock>
    </CaseStudyShell>
  );
}
