import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__container">

        {/* LEFT COLUMN: FINAL MESSAGE */}

        <div className="final-cta__content">
          <span className="final-cta__eyebrow">
            YOUR NEVADA LAUNCH STARTS HERE
          </span>

          <h2>
            You take care of your recipients.
            <span> We'll help handle the back office.</span>
          </h2>

          <p>
            Tell us about your agency, services, and current
            billing workflow. We'll walk you through what
            vTrack offers, the steps required for Nevada
            onboarding, and whether the Legacy Agency
            promotion is a fit for your team.
          </p>

          <div className="final-cta__benefits">
            <div>
              <CheckCircle2 size={18} />
              <span>
                Hands-on onboarding and training
              </span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>
                Supporting Arizona provider agencies since 2006
              </span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>
                Legacy promotion for the first 10 Nevada agencies
              </span>
            </div>
          </div>

          <div className="final-cta__actions">
            <Link
              to="/contact?section=form"
              className="final-cta__button final-cta__button--primary"
            >
              Become a Legacy Agency
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/platform"
              className="final-cta__button final-cta__button--secondary"
            >
              See how vTrack works
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: LEGACY OFFER */}

        <div className="final-cta__offer">
          <span className="final-cta__offer-label">
            NEVADA LEGACY AGENCY OFFER
          </span>

          <div className="final-cta__offer-number">
            6
          </div>

          <h3>Months Free</h3>

          <p>
            Full vTrack platform access and dedicated
            account management for the first 10 Nevada
            agencies that sign up.
          </p>

          <div className="final-cta__offer-line"></div>

          <strong>
            No obligation to continue after the
            six-month promotional period.
          </strong>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;