import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./LegacyPromo.css";

function LegacyPromo() {
  return (
    <section className="legacy-promo">
      <div className="legacy-promo__container">
        <div className="legacy-promo__content">
          <div className="legacy-promo__badge">
            <Sparkles size={17} />
            <span>NEVADA LEGACY PROMOTION</span>
          </div>
<h2>
  You Do Not Pay <span>While We Get You Approved.</span>
</h2>

<p className="legacy-promo__intro">
  Nevada onboarding takes real work. We guide each founding agency through
  designation, training, integration and readiness before go live.
</p>

<div className="legacy-promo__offer">
  <span className="legacy-promo__offer-small">
    LIMITED-TIME LEGACY PROMOTION
  </span>

  <strong>GET 6 MONTHS FREE</strong>

  <p>
    Your promotional period covers up to the first six months while we work
    through the approval and onboarding process with your team. Because that
    support is hands-on, this offer is limited to 10 founding Nevada agencies.
  </p>
          </div>

          <div className="legacy-promo__points">
            <div className="legacy-promo__point">
              <CheckCircle2 size={21} />

              <div>
                <strong>Structured Transition Plan</strong>
                <span>
                  Work through designation, system setup, training and launch
                  readiness with clear responsibilities at each stage.
                </span>
              </div>
            </div>

            <div className="legacy-promo__point">
              <ShieldCheck size={21} />

              <div>
                <strong>No Long-Term Obligation</strong>
                <span>
                  At the end of the six months, you decide whether vTrack is
                  right for your agency.
                </span>
              </div>
            </div>

            <div className="legacy-promo__point">
              <BadgeCheck size={21} />

              <div>
                <strong>If You're Not Satisfied, You Owe Nothing</strong>
                <span>
                  There is no obligation to remain with vTrack after the
                  promotional period.
                </span>
              </div>
            </div>
          </div>

          <div className="legacy-promo__actions">
            <Link
              to="/contact#contact-form"
              className="legacy-promo__button legacy-promo__button--primary"
            >
              Claim a Legacy Spot
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/platform"
              className="legacy-promo__button legacy-promo__button--secondary"
            >
              See What's Included
            </Link>
          </div>
        </div>

        <div className="legacy-promo__card">
          <div className="legacy-promo__card-glow"></div>

          <span className="legacy-promo__card-label">
            LIMITED NEVADA OFFER
          </span>

          <div className="legacy-promo__number">10</div>

          <h3>Founding Nevada Agencies</h3>

          <div className="legacy-promo__divider"></div>

          <div className="legacy-promo__six">
            <span>FIRST</span>
            <strong>6 MONTHS</strong>
            <span>FREE</span>
          </div>

          <div className="legacy-promo__card-list">
            <div>
              <CheckCircle2 size={18} />
              Structured transition plan
            </div>

            <div>
              <CheckCircle2 size={18} />
              Guided Nevada onboarding
            </div>

            <div>
              <CheckCircle2 size={18} />
              No obligation to stay
            </div>

            <div>
              <CheckCircle2 size={18} />
              Owe nothing if unsatisfied
            </div>
          </div>

          <p className="legacy-promo__availability">
            Available only while Legacy spots remain.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LegacyPromo;
