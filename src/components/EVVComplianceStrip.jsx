import {
  CalendarDays,
  Clock3,
  MapPin,
  Stethoscope,
  UserRound,
  UsersRound,
} from "lucide-react";

import "./EVVComplianceStrip.css";

const requirements = [
  {
    icon: Stethoscope,
    label: "Type of service",
  },
  {
    icon: UserRound,
    label: "Individual receiving service",
  },
  {
    icon: CalendarDays,
    label: "Date of service",
  },
  {
    icon: MapPin,
    label: "Location of service",
  },
  {
    icon: UsersRound,
    label: "Individual providing service",
  },
  {
    icon: Clock3,
    label: "Start & end time",
  },
];

function EVVComplianceStrip() {
  return (
    <section className="evv-strip">
      <div className="evv-strip__container">
        <div className="evv-strip__heading">
          <span>21ST CENTURY CURES ACT</span>

          <h2>Every Visit, Verified Six Ways</h2>

          <p>
            Nevada Medicaid requires EVV systems to electronically
            capture these six elements for applicable services.
          </p>
        </div>

        <div className="evv-strip__grid">
          {requirements.map((requirement) => {
            const Icon = requirement.icon;

            return (
              <div
                className="evv-strip__item"
                key={requirement.label}
              >
                <div className="evv-strip__icon">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <span>{requirement.label}</span>
              </div>
            );
          })}
        </div>

        <p className="evv-strip__footer">
          Captured electronically as part of the EVV workflow.
        </p>
      </div>
    </section>
  );
}

export default EVVComplianceStrip;