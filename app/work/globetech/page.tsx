import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import CaseStudyBlock from "@/components/CaseStudyBlock";

export const metadata: Metadata = {
  title: "GlobeTech — Case Study",
  description:
    "How Muhammed Abdulwahab built the GlobeTech application and grant platform — workflows, referrals, staff hierarchy, and dashboards.",
};

export default function GlobeTechPage() {
  return (
    <CaseStudyShell
      eyebrow="Case Study 02"
      title="GlobeTech"
      lede="A functioning operational platform for application workflows, referrals, and staff hierarchy — built to run a process, not to market one."
      meta={[
        { k: "Domain", v: "Application & grant platform" },
        { k: "Focus", v: "Workflows, dashboards, staff hierarchy" },
        { k: "Role", v: "Platform build" },
      ]}
      nextHref="/work/whatsapp-ai-automation"
      nextTitle="WhatsApp / AI Automation Platform"
    >
      <CaseStudyBlock num="01" title="The Problem">
        <p>
          Running applications and referrals at any real scale means more than a form and an inbox.
          GlobeTech needed a system where applications could move through defined stages, staff at
          different levels could see and act on the right cases, and referrals could be tracked back to
          their source — without an operations team stitching it together in spreadsheets.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="02" title="The Thinking" raised>
        <p>
          The design question wasn&rsquo;t &ldquo;what does the application form look like&rdquo; — it
          was &ldquo;what happens to an application after it&rsquo;s submitted, and who needs to see it,
          in what order.&rdquo; That meant modelling staff hierarchy and permissions as a first-class
          part of the system, not an afterthought bolted onto a CMS.
        </p>
        <p>
          Referral tracking and KPI visibility followed the same logic: build the underlying data model
          correctly first, and the dashboards become a straightforward view on top of it — not a
          separate reporting project.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="03" title="The System">
        <ul>
          <li>Application intake and multi-stage workflow management</li>
          <li>Referral tracking tied back to source and outcome</li>
          <li>Role-based staff hierarchy and permissions</li>
          <li>Dashboards for KPI tracking and operational visibility</li>
          <li>Centralised data management across the platform</li>
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock num="04" title="Architecture" raised>
        <p>A simplified view of how an application moves through the platform:</p>
        <div className="arch-diagram">
          <svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="310" y="10" width="140" height="42" rx="3" className="flow-node flow-node--accent" />
            <text x="325" y="35" className="flow-label">APPLICANT</text>
            <line x1="380" y1="52" x2="380" y2="92" className="flow-line flow-line--active" />
            <rect x="310" y="92" width="140" height="42" rx="3" className="flow-node" />
            <text x="330" y="117" className="flow-label">WORKFLOW</text>
            <line x1="380" y1="134" x2="180" y2="174" className="flow-line" />
            <line x1="380" y1="134" x2="580" y2="174" className="flow-line" />
            <rect x="110" y="174" width="140" height="42" rx="3" className="flow-node" />
            <text x="122" y="199" className="flow-label">STAFF REVIEW</text>
            <rect x="510" y="174" width="140" height="42" rx="3" className="flow-node" />
            <text x="520" y="199" className="flow-label">DASHBOARD / KPI</text>
          </svg>
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock num="05" title="Screens">
        <div className="placeholder-shot">
          Screenshot placeholder — add product screenshots of the application workflow and staff dashboard here.
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock num="06" title="The Result" raised>
        <p>
          Applications, referrals, and staff review now run through one operational platform instead of
          scattered documents and manual hand-offs. No invented figures here — add specific outcomes
          once confirmed.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="07" title="Technology">
        <div className="tech-tags">
          <span className="tag">Next.js</span>
          <span className="tag">React</span>
          <span className="tag">TypeScript</span>
          <span className="tag">Supabase</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">REST APIs</span>
        </div>
      </CaseStudyBlock>
    </CaseStudyShell>
  );
}
