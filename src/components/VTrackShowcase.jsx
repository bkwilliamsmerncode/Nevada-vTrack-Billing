import {
  CalendarDays,
  LayoutDashboard,
  UserRoundCog,
} from "lucide-react";

import homepage from "../assets/Homepage.png";
import calendar from "../assets/Calendar.png";
import hcbsServices from "../assets/hcbs-services.png";
import "./VTrackShowcase.css";


const vTrackFeatures = [
  {
    id: 1,
    title: "Everything in One Dashboard",
    description:
      "See the information your agency needs in one place. vTrack gives your team a centralized view of services, staff, recipients, billing, and day-to-day operations.",
    icon: LayoutDashboard,
    image: homepage,
  },

  {
    id: 2,
    title: "Scheduling Made Simple",
    description:
      "Manage appointments, staff schedules, recipient services, and EVV-related activity with tools designed to help provider agencies stay organized.",
    icon: CalendarDays,
    image: calendar,
  },

  {
    id: 4,
    title: "Built for Provider Agencies",
    description:
      "Keep recipient, provider, authorization, service, and agency information organized in one platform built around the needs of healthcare and HCBS providers.",
    icon: UserRoundCog,
    image: hcbsServices,
  },
];

function VTrackShowcase() {
  return (
    <section className="vtrack-showcase">
      <div className="vtrack-showcase__container">

        {/* SECTION HEADER */}
        <div className="vtrack-showcase__header">
          <span className="vtrack-showcase__eyebrow">
            The vTrack Difference
          </span>

          <h2 className="vtrack-showcase__title">
            One Platform.
            <br />
            Less Administrative Work.
          </h2>

          <p className="vtrack-showcase__subtitle">
            vTrack brings the tools provider agencies use every day into one
            powerful platform , helping your team spend less time managing
            paperwork and more time supporting the people you serve.
          </p>
        </div>

        {/* FEATURE SECTIONS */}
        <div className="vtrack-showcase__grid">
          {vTrackFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className={`vtrack-showcase__feature ${
                  index % 2 !== 0
                    ? "vtrack-showcase__feature--reverse"
                    : ""
                }`}
              >
                {/* TEXT */}
                <div className="vtrack-showcase__content">

                  <div className="vtrack-showcase__icon">
                    {Icon && (
                      <Icon
                        size={28}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="vtrack-showcase__feature-title">
                    {feature.title}
                  </h3>

                  <p className="vtrack-showcase__feature-description">
                    {feature.description}
                  </p>

                </div>

                {/* IMAGE */}
                <div className="vtrack-showcase__image-wrapper">
                  <img
                    className="vtrack-showcase__image"
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                  />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default VTrackShowcase;
