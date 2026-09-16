import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  ReceiptText,
  ShieldCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import SEO from "../components/SEO";
import "./Platform.css";
import VTrackShowcase from "../components/VTrackShowcase";

const modules = [
  {
    icon: CalendarDays,
    title: "EVV & Scheduling",
    description:
      "Manage schedules, appointments, service delivery, and Electronic Visit Verification while keeping visit information connected to the rest of your agency workflow.",
    features: [
      "Staff scheduling",
      "Appointment management",
      "Electronic Visit Verification",
      "Visit status tracking",
    ],
  },
  {
    icon: ReceiptText,
    title: "Billing & Claims",
    description:
      "Move approved services toward billing while giving your team visibility into claims, submissions, and payment activity.",
    features: [
      "Claim preparation",
      "837 billing workflows",
      "Claim status tracking",
      "Payment reconciliation",
    ],
  },
  {
    icon: FileCheck2,
    title: "Authorizations",
    description:
      "Keep service authorizations organized so your team can track utilization, dates, available units, and service limits.",
    features: [
      "Authorization imports",
      "Service utilization",
      "Expiration tracking",
      "Remaining unit visibility",
    ],
  },
  {
    icon: WalletCards,
    title: "Payroll",
    description:
      "Use approved service data to help prepare payroll exports and reduce duplicate administrative work.",
    features: [
      "Payroll preparation",
      "Approved service data",
      "Payroll exports",
      "Staff service tracking",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Approval Reports",
    description:
      "Review service activity before billing and payroll so missing or incorrect information can be addressed earlier.",
    features: [
      "Service review",
      "Exception visibility",
      "Approval workflows",
      "Billing preparation",
    ],
  },
  {
    icon: UsersRound,
    title: "Member Tracking",
    description:
      "Keep member information, services, locations, appointments, and authorization details organized in one system.",
    features: [
      "Member records",
      "Service information",
      "Location tracking",
      "Appointment history",
    ],
  },
  {
    icon: CircleDollarSign,
    title: "Collections",
    description:
      "Give your billing team better visibility into outstanding claims, payments, and revenue-cycle activity.",
    features: [
      "Outstanding claims",
      "Payment tracking",
      "Collections workflow",
      "Revenue visibility",
    ],
  },
  {
    icon: HeartPulse,
    title: "Agency Operations",
    description:
      "Connect the operational work behind your services instead of managing important information across disconnected systems.",
    features: [
      "Multi-program support",
      "Operational visibility",
      "Centralized workflows",
      "Provider-focused tools",
    ],
  },
];

function Platform() {
  return (
    <div className="platform-page">
  <SEO
    title="vTrack Platform | Nevada Provider Management Software"
    description="Explore vTrack's connected tools for EVV, scheduling, billing, claims, payroll, authorizations, member tracking, approvals and provider operations."
    path="/platform"
  />
      
      <section className="platform-hero">
        <div className="platform-hero__glow"></div>

        <div className="platform-hero__container">
          <div className="platform-hero__content">
            <span className="platform-hero__eyebrow">
              THE VTRACK PLATFORM
            </span>

            <h1>
              The Work Behind Your Agency,
              <span> Handled.</span>
            </h1>

            <p>
              The Nevada Legacy Promotion is offered through vTrack's
              implementation team. Once you're onboarded, your dedicated
              account manager handles billing and payroll while vTrack keeps
              your agency's workflows connected.
            </p>

            <div className="platform-hero__actions">
              <Link
                to="/contact"
                className="platform-hero__button platform-hero__button--primary"
              >
                Claim Your Legacy Spot
                <ArrowRight size={19} />
              </Link>

              <a
                href="#modules"
                className="platform-hero__button platform-hero__button--secondary"
              >
                Explore the Platform
              </a>
            </div>
          </div>

          <div className="platform-hero__visual">
            <div className="platform-hero__card">
              <div className="platform-hero__card-header">
                <div>
                  <span>vTrack</span>
                  <h2>Provider Operations</h2>
                </div>

                <div className="platform-hero__live">
                  <span></span>
                  Connected
                </div>
              </div>

              <div className="platform-hero__workflow">
                <div className="platform-hero__workflow-item">
                  <CalendarDays size={22} />
                  <strong>Schedule</strong>
                  <span>Create & manage services</span>
                </div>

                <div className="platform-hero__workflow-arrow">
                  →
                </div>

                <div className="platform-hero__workflow-item">
                  <ShieldCheck size={22} />
                  <strong>Verify</strong>
                  <span>EVV & service data</span>
                </div>

                <div className="platform-hero__workflow-arrow">
                  →
                </div>

                <div className="platform-hero__workflow-item">
                  <ClipboardCheck size={22} />
                  <strong>Approve</strong>
                  <span>Review activity</span>
                </div>

                <div className="platform-hero__workflow-arrow">
                  →
                </div>

                <div className="platform-hero__workflow-item">
                  <ReceiptText size={22} />
                  <strong>Bill</strong>
                  <span>Prepare claims</span>
                </div>
              </div>

              <div className="platform-hero__summary">
                <div>
                  <span>EVV</span>
                  <strong>Connected</strong>
                </div>

                <div>
                  <span>Billing</span>
                  <strong>Connected</strong>
                </div>

                <div>
                  <span>Payroll</span>
                  <strong>Connected</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="platform-modules"
        id="modules"
      >
        <div className="platform-modules__container">
          <div className="platform-modules__heading">
            <span>BUILT AROUND PROVIDER OPERATIONS</span>

            <h2>
              Powerful Tools.
              <strong> An Account Manager Behind Them.</strong>
            </h2>

            <p>
              Instead of leaving your staff to manage separate processes for
              scheduling, service verification, billing, and payroll, vTrack
              pairs the platform with an account manager who handles billing
              and payroll for your agency.
            </p>
          </div>

          <div className="platform-modules__grid">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <article
                  className="platform-module"
                  key={module.title}
                >
                  <div className="platform-module__icon">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3>{module.title}</h3>

                  <p>{module.description}</p>

                  <div className="platform-module__features">
                    {module.features.map((feature) => (
                      <div key={feature}>
                        <CheckCircle2 size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
<VTrackShowcase />
      <section className="platform-flow">
        <div className="platform-flow__container">
          <div className="platform-flow__heading">
            <span>FROM SERVICE TO PAYMENT</span>

            <h2>
              Keep the Entire Process
              <strong> Moving Forward.</strong>
            </h2>

            <p>
              vTrack helps connect each stage of the provider workflow so
              information can move through your agency more efficiently.
            </p>
          </div>

          <div className="platform-flow__steps">
            <div className="platform-flow__step">
              <span className="platform-flow__number">01</span>
              <CalendarDays size={28} />
              <h3>Schedule</h3>
              <p>
                Organize staff, members, appointments, and service delivery.
              </p>
            </div>

            <div className="platform-flow__connector">
              <ArrowRight size={22} />
            </div>

            <div className="platform-flow__step">
              <span className="platform-flow__number">02</span>
              <ShieldCheck size={28} />
              <h3>Verify</h3>
              <p>
                Capture visit and service information through connected EVV
                workflows.
              </p>
            </div>

            <div className="platform-flow__connector">
              <ArrowRight size={22} />
            </div>

            <div className="platform-flow__step">
              <span className="platform-flow__number">03</span>
              <ClipboardCheck size={28} />
              <h3>Review</h3>
              <p>
                Check service activity and resolve issues before billing or
                payroll.
              </p>
            </div>

            <div className="platform-flow__connector">
              <ArrowRight size={22} />
            </div>

            <div className="platform-flow__step">
              <span className="platform-flow__number">04</span>
              <ReceiptText size={28} />
              <h3>Bill</h3>
              <p>
                Prepare approved services for claims and revenue-cycle
                workflows.
              </p>
            </div>

            <div className="platform-flow__connector">
              <ArrowRight size={22} />
            </div>

            <div className="platform-flow__step">
              <span className="platform-flow__number">05</span>
              <WalletCards size={28} />
              <h3>Payroll</h3>
              <p>
                Use approved information to support payroll preparation and
                exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="platform-cta">
        <div className="platform-cta__container">
          <div>
            <span>START WITH A CONVERSATION</span>

            <h2>
              Ready to Put the Work in Better Hands?
            </h2>

            <p>
              Tell us about your agency, and we'll explain how dedicated
              vTrack support can take operational work off your team's plate.
            </p>
          </div>

          <Link
            to="/contact"
            className="platform-cta__button"
          >
            Talk With Our Team
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Platform;
