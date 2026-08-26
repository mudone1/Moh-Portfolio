import type { Metadata } from "next";
import CaseStudyShell from "@/components/CaseStudyShell";
import CaseStudyBlock from "@/components/CaseStudyBlock";

export const metadata: Metadata = {
  title: "GlobeTech — Case Study",
  description:
    "How Muhammed Abdulwahab built GlobeTech, an operational platform for application workflows, referrals, staff hierarchy, and administrative dashboards.",
};

export default function GlobeTechPage() {
  return (
    <CaseStudyShell
      eyebrow="Case Study 02"
      title="GlobeTech"
      lede="An operational platform for application workflows, referrals, and staff hierarchy, designed around the process being run rather than a website presenting it."
      meta={[
        { k: "Domain", v: "Application platform" },
        { k: "Focus", v: "Workflows, referrals, staff hierarchy, dashboards" },
        { k: "Role", v: "Platform build" },
      ]}
      nextHref="/work/whatsapp-ai-automation"
      nextTitle="WhatsApp / AI Automation"
    >
      <CaseStudyBlock num="01" title="The Problem">
        <p>
          Running applications and referrals at any real scale takes more than a form and an inbox.
          GlobeTech needed a system where applications could move through defined stages, staff at
          different levels could see and act on the right cases, and referrals could be tracked back
          to their source, without an operations team stitching it together by hand.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="02" title="The Approach" raised>
        <p>
          The design question wasn&rsquo;t what the application form should look like. It was what
          happens to an application after submission, and who needs to see it, in what order. That
          meant treating staff hierarchy and referral tracking as first-class parts of the data
          model, not features bolted on afterward.
        </p>
        <p>
          Once that model was right, dashboards and reporting became a straightforward view on top
          of it, rather than a separate project of their own.
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock num="03" title="The System">
        <ul>
          <li>Public application intake with multi-stage workflow management</li>
          <li>Token-based staff referral links, tying each application back to the referring staff member</li>
          <li>A multi-tier staff hierarchy with role-based permissions</li>
          <li>An admin dashboard with a performance leaderboard and CSV export</li>
          <li>Automated onboarding-data sync to Google Sheets on a scheduled job</li>
          <li>Automated application-confirmation emails, and a bank-data verification and payout-tracking workflow for staff</li>
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

      <CaseStudyBlock num="05" title="Technology">
        <div className="tech-tags">
          <span className="tag">Next.js</span>
          <span className="tag">TypeScript</span>
          <span className="tag">Firebase</span>
          <span className="tag">Firestore</span>
          <span className="tag">Google Sheets API</span>
          <span className="tag">Resend</span>
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock num="06" title="Outcome" raised>
        <p>
          Applications, referrals, and staff review now run through one platform instead of
          scattered spreadsheets and manual hand-offs, built around the actual operational process
          rather than sitting on top of it as a marketing page.
        </p>
      </CaseStudyBlock>
    </CaseStudyShell>
  );
}
