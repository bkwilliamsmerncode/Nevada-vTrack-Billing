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
    icon: Home,
    title: "Supported Living Arrangement (SLA)",
    description:
      "Support residential service operations, staffing, service delivery, authorizations, billing, and recipient information in one connected system.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Jobs & Day Training (JDT)",
    description:
      "Manage Jobs and Day Training services, including Day Habilitation workflows, attendance, staffing, authorizations, payroll, and billing.",
  },
  {
    icon: HeartHandshake,
    title: "HCBS Providers",
    description:
      "Manage applicable Home and Community-Based Services with tools for scheduling, EVV, authorizations, service tracking, billing, and payroll.",
  },
  {
    icon: PersonStanding,
    title: "Personal Care Agencies",
    description:
      "Connect personal care scheduling, EVV visit information, service review, billing, and operational workflows.",
  },
  {
    icon: Users,
    title: "IDD & Developmental Services",
    description:
      "Give teams supporting individuals with intellectual and developmental disabilities one place to organize critical provider operations.",
  },
  {
    icon: Building2,
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
            agencies, from residential and day services to personal care,
            HCBS, developmental services, and multi-program organizations.
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
            to="/contact"
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