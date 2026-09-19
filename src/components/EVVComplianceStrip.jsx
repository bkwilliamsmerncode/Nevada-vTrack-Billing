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
    label: "Individual receiving the service",
  },
  {
    icon: CalendarDays,
    label: "Date of service",
  },
  {
    icon: MapPin,
    label: "Location of service delivery",
  },
  {
    icon: UsersRound,
    label: "Individual providing the service",
  },
  {
    icon: Clock3,
    label: "Time service begins and ends",
  },
];

function EVVComplianceStrip() {
  return (
    <section className="evv-strip">
      <div className="evv-strip__container">

        <div className="evv-strip__heading">
          <span>21ST CENTURY CURES ACT</span>

          <h2>Every visit, verified six ways</h2>

          <p>
            EVV is a federal requirement under the
            21st Century Cures Act. Nevada requires EVV
            for personal care services, home health,
            and certain waiver services, and permits
            agencies to use an alternate EVV vendor
            that meets the state's technical requirements.
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
          Captured electronically and submitted to
          Nevada's EVV aggregator.
        </p>

        <p className="evv-strip__footer">
          Not sure whether EVV applies to your services?
          Nevada requires it for Provider Types 29, 30,
          83, 48, and 58. Ask us and we will confirm
          where your agency stands.
        </p>

      </div>
    </section>
  );
}

export default EVVComplianceStrip;