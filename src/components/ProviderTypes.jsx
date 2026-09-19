import {
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  Home,
  PersonStanding,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ProviderTypes.css";

const providerTypes = [
  {
    icon: PersonStanding,
    title: "Personal Care Services Agencies",
    description:
      "Connect personal care scheduling, required EVV visit information, service review, billing, and operational workflows.",
  },
  {
    icon: HeartHandshake,
    title: "Home Health Agencies",
    description:
      "Manage applicable home health EVV, scheduling, service documentation, authorizations and claims in a connected workflow.",
  },
  {
    icon: Home,
    title: "FE & PD Waiver Providers",
    description:
      "Support applicable Frail Elderly and Physical Disabilities waiver services with EVV, authorization and billing tools.",
  },
  {
    icon: Building2,
    title: "Personal Care Intermediary Organizations",
    description:
      "Coordinate applicable EVV, recipient services, billing and the operational work surrounding personal care.",
  },
  {
    icon: Users,
    title: "IDD, SLA & Residential Services",
    description:
      "Organize authorizations, staffing, service documentation, billing and payroll without positioning EVV as the primary need.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Multi-Service Agencies",
    description:
      "Manage multiple programs, service types, recipients, staff, and locations through one connected provider management platform.",
  },
];

function ProviderTypes() {
  return (
    <section className="provider-types">
      <div className="provider-types__container">
        <div className="provider-types__heading">
          <span className="provider-types__eyebrow">
            BUILT FOR NEVADA PROVIDERS
          </span>

          <h2>
            Nevada Services.
            <span> One Connected Platform.</span>
          </h2>

          <p>
            vTrack supports the operational work behind Nevada provider
            agencies. EVV tools are designed for provider types subject to
            Nevada's EVV requirements, while billing, authorization and
            payroll workflows support a wider range of services.
          </p>
        </div>

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

        <div className="provider-types__bottom">
          <div>
            <strong>Don't see your service type listed?</strong>

            <span>
              vTrack can support a variety of Nevada provider programs
              and service models.
            </span>
          </div>

          <Link
            to="/contact#contact-form"
            className="provider-types__link"
          >
            Talk With Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProviderTypes;
