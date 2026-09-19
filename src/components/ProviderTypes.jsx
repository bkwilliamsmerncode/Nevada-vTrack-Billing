import {
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  Home,
  PersonStanding,
  Users,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ProviderTypes.css";

const providerTypes = [
  {
    icon: PersonStanding,
    title: "Personal Care Agencies",
    description:
      "Provider Type 30. Connect scheduling, applicable EVV visit capture, authorizations, billing, and payroll in one workflow.",
  },
  {
    icon: HeartHandshake,
    title: "Home Health Agencies",
    description:
      "Provider Type 29. Manage applicable EVV requirements alongside visit documentation, scheduling, authorizations, and claims.",
  },
  {
    icon: Building2,
    title: "Intermediary Service Organizations",
    description:
      "Provider Type 83. Coordinate applicable EVV, recipient services, provider records, billing, and operational workflows.",
  },
  {
    icon: Home,
    title: "Supported Living Arrangements",
    description:
      "Bring staffing, service documentation, authorizations, billing, and payroll together for supported living operations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Jobs and Day Training",
    description:
      "Manage program schedules, recipient services, attendance, authorizations, billing, and payroll.",
  },
  {
    icon: Users,
    title: "IDD and Waiver Providers",
    description:
      "Support recipient tracking, service documentation, staffing, authorizations, and billing across applicable programs. EVV requirements depend on the specific service.",
  },
  {
    icon: Layers3,
    title: "Multi-Service Agencies",
    description:
      "Coordinate multiple programs, service types, recipients, employees, and locations through one connected platform.",
  },
];

function ProviderTypes() {
  return (
    <section className="provider-types">
      <div className="provider-types__container">

        {/* SECTION HEADING */}

        <div className="provider-types__heading">
          <span className="provider-types__eyebrow">
            Built for Nevada providers
          </span>

          <h2>
            Your services.
            <span> One connected platform.</span>
          </h2>

          <p>
            Whether your agency provides personal care, home health,
            supported living, day services, or multiple programs,
            vTrack brings the operational work together. EVV applies
            to specific provider types and services, not every
            Nevada provider program.
          </p>
        </div>

        {/* PROVIDER CATEGORY CARDS */}

        <div className="provider-types__grid">
          {providerTypes.map((provider) => {
            const Icon = provider.icon;

            return (
              <article
                className="provider-type-card"
                key={provider.title}
              >
                <div className="provider-type-card__icon">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <div className="provider-type-card__content">
                  <h3>{provider.title}</h3>

                  <p>{provider.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}

        <div className="provider-types__bottom">
          <div>
            <strong>
              Not sure whether vTrack fits your agency?
            </strong>

            <span>
              Tell us which services you provide. We can discuss
              your operational needs and the EVV requirements
              that may apply to your programs.
            </span>
          </div>

          <Link
            to="/contact?section=form"
            className="provider-types__link"
          >
            Talk with our team
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ProviderTypes;