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
  "Reduce repetitive administrative work",
  "Keep EVV, billing, payroll, and authorizations connected",
  "Catch issues before they become billing problems",
  "Give staff one central place to manage operations",
];

function WhyVTrack() {
  return (
    <section className="why-vtrack">
      <div className="why-vtrack__container">
        <div className="why-vtrack__visual">
          <div className="why-vtrack__experience">
            <span>NEARLY</span>

            <strong>30</strong>

            <h3>Years of Experience</h3>

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
            Your Team Has Better Things to Do Than
            <span> Fight With Software.</span>
          </h2>

          <p className="why-vtrack__description">
            Provider agencies already manage complex schedules,
            documentation, authorizations, billing, payroll, staff, and
            member services. vTrack is designed to make those workflows
            easier to manage from one connected system.
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
              vTrack isn't just another piece of software. It's a provider
              management platform built to help your agency operate more
              efficiently.
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