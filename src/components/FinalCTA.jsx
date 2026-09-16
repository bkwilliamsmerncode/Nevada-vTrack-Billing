import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__container">
        <div className="final-cta__content">
          <span className="final-cta__eyebrow">
            READY TO GET THE WORK OFF YOUR PLATE?
          </span>

          <h2>
            Put Your Back Office
            <span> in Experienced Hands.</span>
          </h2>

          <p>
            vTrack's implementation team offers the Nevada Legacy Promotion
            and helps get your agency started. After onboarding,
            your dedicated account manager handles billing and payroll.
          </p>

          <div className="final-cta__benefits">
            <div>
              <CheckCircle2 size={18} />
              Billing and payroll handled by your account manager
            </div>

            <div>
              <CheckCircle2 size={18} />
              Nearly 30 years of provider experience
            </div>

            <div>
              <CheckCircle2 size={18} />
              Legacy promotion available to qualifying agencies
            </div>
          </div>

          <div className="final-cta__actions">
            <Link
              to="/contact"
              className="final-cta__button final-cta__button--primary"
            >
              Claim Your Legacy Spot
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/platform"
              className="final-cta__button final-cta__button--secondary"
            >
              Explore the Platform
            </Link>
          </div>
        </div>

        <div className="final-cta__offer">
          <span className="final-cta__offer-label">
            NEVADA LEGACY PROMOTION
          </span>

          <div className="final-cta__offer-number">
            6
          </div>

          <h3>Months Free</h3>

          <p>
            For the first 10 Nevada provider agencies that join vTrack.
          </p>

          <div className="final-cta__offer-line"></div>

          <strong>
            No obligation to stay after the promotional period.
          </strong>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
