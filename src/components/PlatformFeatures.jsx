import {
  CalendarDays,
  ClipboardCheck,
  FileCheck2,
  ReceiptText,
  UsersRound,
  WalletCards,
} from "lucide-react";

import "./PlatformFeatures.css";

const features = [
  {
    icon: CalendarDays,
    title: "EVV & Scheduling",
    description:
      "Schedule staff, manage appointments, and capture the six required EVV elements for applicable services. Nevada aggregator integration is being prepared.",
  },
  {
    icon: ReceiptText,
    title: "Billing & Claims",
    description:
      "Move approved services into claims, track submissions and responses, manage denials, and reconcile payments. Nevada production submission remains pending EDI testing.",
  },
  {
    icon: WalletCards,
    title: "Payroll",
    description:
      "Connect approved service information to payroll preparation and exports, reducing the need to reenter the same information.",
  },
  {
    icon: FileCheck2,
    title: "Authorizations",
    description:
      "Track recipient authorizations, service utilization, remaining units, and expiration dates before they become billing issues.",
  },
  {
    icon: UsersRound,
    title: "Recipient Tracking",
    description:
      "Keep recipient records, assigned services, locations, appointments, and related operational information organized.",
  },
  {
    icon: ClipboardCheck,
    title: "Approval Workflow",
    description:
      "Review completed services and resolve missing information before moving approved work into billing and payroll.",
  },
];

function PlatformFeatures() {
  return (
    <section className="platform-features">
      <div className="platform-features__container">

        {/* SECTION HEADING */}

        <div className="platform-features__heading">
          <span className="platform-features__eyebrow">
            One connected platform
          </span>

          <h2>
            From the first visit
            <span> to the final payment.</span>
          </h2>

          <p>
            vTrack connects the operational work behind your agency,
            from scheduling and EVV through authorizations, service
            approvals, claims, and payroll. Your team can follow
            information through one connected workflow instead of
            managing disconnected systems.
          </p>
        </div>

        {/* SIX PLATFORM FEATURES */}

        <div className="platform-features__grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="platform-feature-card"
                key={feature.title}
              >
                <div className="platform-feature-card__icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="platform-feature-card__line"></div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default PlatformFeatures;