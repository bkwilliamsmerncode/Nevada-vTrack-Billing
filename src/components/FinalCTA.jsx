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
            Start with an honest review of your services, payers and current
            workflow. We will show you what a Nevada transition requires and
            build a practical path to go live.
          </p>

          <div className="final-cta__benefits">
            <div>
              <CheckCircle2 size={18} />
              Guided onboarding and training
            </div>

            <div>
              <CheckCircle2 size={18} />
              Supporting provider agencies since 2006
            </div>

            <div>
              <CheckCircle2 size={18} />
              Legacy promotion available to qualifying agencies
            </div>
          </div>

          <div className="final-cta__actions">
            <Link
              to="/contact#contact-form"
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
            For up to the first six months while we work through onboarding.
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
