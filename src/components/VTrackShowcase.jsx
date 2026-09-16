import {
  CalendarDays,
  FileText,
  LayoutDashboard,
  UserRoundCog,
} from "lucide-react";

import "./VTrackShowcase.css";

const vTrackFeatures = [
  {
    id: 1,
    title: "Everything in One Dashboard",
    description:
      "See the information your agency needs in one place. vTrack gives your team a centralized view of services, staff, members, billing, and day-to-day operations.",
    icon: LayoutDashboard,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 2,
    title: "Scheduling Made Simple",
    description:
      "Manage appointments, staff schedules, member services, and EVV-related activity with tools designed to help provider agencies stay organized.",
    icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 3,
    title: "Billing & Claims Management",
    description:
      "Simplify billing workflows, claims processing, approvals, and payment tracking while reducing the amount of manual administrative work your team has to manage.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 4,
    title: "Built for Provider Agencies",
    description:
      "Keep member, provider, authorization, service, and agency information organized in one platform built around the needs of healthcare and HCBS providers.",
    icon: UserRoundCog,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
  },
];

function VTrackShowcase() {
  return (
    <section className="vtrack-showcase">
      <div className="vtrack-showcase__container">

        {/* SECTION HEADER */}
        <div className="vtrack-showcase__header">
          <span className="vtrack-showcase__eyebrow">
            THE VTRACK DIFFERENCE
          </span>

          <h2 className="vtrack-showcase__title">
            One Platform.
            <br />
            Less Administrative Work.
          </h2>

          <p className="vtrack-showcase__subtitle">
            vTrack brings the tools provider agencies use every day into one
            powerful platform — helping your team spend less time managing
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