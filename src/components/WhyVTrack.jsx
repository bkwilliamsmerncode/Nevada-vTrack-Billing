import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Database,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./WhyVTrack.css";

const benefits = [
  "A Nevada Legacy Promotion offered through vTrack's implementation team",
  "A dedicated account manager to handle billing and payroll",
  "Issues addressed before they become billing problems",
  "More time for your staff to focus on services, not administration",
];

function WhyVTrack() {
  return (
    <section className="why-vtrack">
      <div className="why-vtrack__container">
        <div className="why-vtrack__visual">
          <div className="why-vtrack__experience">
            <span>SINCE</span>

            <strong>2006</strong>

            <h3>Provider Experience</h3>

            <p>
              Supporting provider agencies and the teams responsible for
              delivering quality services.
            </p>
          </div>

          <div className="why-vtrack__mini-grid">
            <div className="why-vtrack__mini-card">
              <Database size={24} />

              <strong>One Platform</strong>

              <span>
                Bring critical agency workflows together.
              </span>
            </div>

            <div className="why-vtrack__mini-card">
              <Clock3 size={24} />

              <strong>Save Time</strong>

              <span>
                Simplify repetitive administrative processes.
              </span>
            </div>

            <div className="why-vtrack__mini-card">
              <ShieldCheck size={24} />

              <strong>Better Oversight</strong>

              <span>
                Catch missing or incomplete information earlier.
              </span>
            </div>

            <div className="why-vtrack__mini-card">
              <Users size={24} />

              <strong>Built for Providers</strong>

              <span>
                Designed around real provider agency operations.
              </span>
            </div>
          </div>
        </div>

        <div className="why-vtrack__content">
          <span className="why-vtrack__eyebrow">
            WHY VTRACK?
          </span>

          <h2>
            You Shouldn't Have to Run Your Agency's
            <span> Back Office Alone.</span>
          </h2>

          <p className="why-vtrack__description">
            Provider agencies already carry complex schedules, documentation,
            authorizations, billing, payroll, staff, and recipient services.
            Through the Nevada Legacy Promotion, vTrack's Implementation
            Manager helps your agency get started. After onboarding, your
            dedicated account manager handles billing and payroll while the
            platform keeps every workflow connected.
          </p>

          <div className="why-vtrack__benefits">
            {benefits.map((benefit) => (
              <div
                className="why-vtrack__benefit"
                key={benefit}
              >
                <CheckCircle2 size={21} />

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="why-vtrack__quote">
            <div className="why-vtrack__quote-line"></div>

            <p>
              vTrack isn't just another piece of software. It's a dedicated
              partner and platform built to help run the operational work
              behind your agency.
            </p>
          </div>

          <Link
            to="/platform"
            className="why-vtrack__button"
          >
            See How vTrack Works
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyVTrack;
