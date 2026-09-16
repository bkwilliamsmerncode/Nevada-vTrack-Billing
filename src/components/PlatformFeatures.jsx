import {
  CalendarDays,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
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
      "Manage appointments, staff schedules, electronic visit verification, and service delivery from one place.",
  },
  {
    icon: ReceiptText,
    title: "Billing & Claims",
    description:
      "Turn approved services into clean claims and simplify your agency's billing workflow.",
  },
  {
    icon: WalletCards,
    title: "Payroll",
    description:
      "Use approved service information to streamline payroll preparation and exports.",
  },
  {
    icon: FileCheck2,
    title: "Authorizations",
    description:
      "Track service authorizations, utilization, remaining units, and expiration dates.",
  },
  {
    icon: UsersRound,
    title: "Member Tracking",
    description:
      "Keep member information, services, locations, appointments, and important details organized.",
  },
  {
    icon: ClipboardCheck,
    title: "Approval Workflow",
    description:
      "Review services before billing and payroll so your agency can catch issues earlier.",
  },
  {
    icon: CircleDollarSign,
    title: "Collections",
    description:
      "Track outstanding claims and payments while keeping your revenue cycle organized.",
  },
  {
    icon: HeartPulse,
    title: "Provider Operations",
    description:
      "Give your team one central system for managing the daily work behind quality services.",
  },
];

function PlatformFeatures() {
  return (
    <section className="platform-features">
      <div className="platform-features__container">
        <div className="platform-features__heading">
          <span className="platform-features__eyebrow">
            MORE THAN SOFTWARE
          </span>

          <h2>
            Everything Gets Handled.
            <span> Not Just Organized.</span>
          </h2>

          <p>
            The Nevada Legacy Promotion is offered through vTrack's
            implementation team. After onboarding, your dedicated account
            manager handles billing and payroll while your team spends more
            time supporting the people you serve.
          </p>
        </div>

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
