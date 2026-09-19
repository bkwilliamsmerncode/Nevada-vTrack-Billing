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

        {/* LEFT COLUMN */}

        <div className="legacy-promo__content">

          <div className="legacy-promo__badge">
            <Sparkles size={17} />
            <span>NEVADA LEGACY AGENCIES</span>
          </div>

          <h2>
            Six months free{" "}
            <span>while we get you approved</span>
          </h2>

          <p className="legacy-promo__intro">
            Moving to an alternate EVV vendor in Nevada
            takes time. Your agency designates vTrack
            with the state's EVV aggregator, completes
            Aggregator training, and works through
            integration with us. We do not think you
            should pay during that process.
          </p>

          <div className="legacy-promo__offer">

            <span className="legacy-promo__offer-small">
              THE LEGACY AGENCY OFFER
            </span>

            <strong>Six months free</strong>

            <p>
              So for our first ten Nevada agencies,
              vTrack is free for six months. You get
              the full platform and a dedicated account
              manager handling your billing and payroll,
              at no software cost, while we work together
              to get you live.
            </p>

            <p>
              We are limiting this to ten agencies
              because each one gets hands on support
              through a state approval process, and
              because working closely with our first
              Nevada partners is how we learn this
              market properly.
            </p>

          </div>

          {/* THREE SUPPORTING POINTS */}

          <div className="legacy-promo__points">

            <div className="legacy-promo__point">
              <BadgeCheck size={21} />

              <div>
                <strong>Full platform access</strong>

                <span>
                  EVV, scheduling, billing, claims,
                  payroll, authorizations, and
                  recipient tracking.
                </span>
              </div>
            </div>

            <div className="legacy-promo__point">
              <ShieldCheck size={21} />

              <div>
                <strong>No obligation</strong>

                <span>
                  At the end of six months you decide
                  whether to continue. If vTrack is not
                  right for your agency, you owe nothing.
                </span>
              </div>
            </div>

            <div className="legacy-promo__point">
              <CheckCircle2 size={21} />

              <div>
                <strong>Hands on onboarding</strong>

                <span>
                  We walk you through EVV vendor
                  designation, Aggregator training,
                  and integration.
                </span>
              </div>
            </div>

          </div>

          {/* ACTION BUTTONS */}

          <div className="legacy-promo__actions">

            <Link
              to="/contact?section=form"
              className="legacy-promo__button legacy-promo__button--primary"
            >
              Claim a Legacy Agency spot
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/platform"
              className="legacy-promo__button legacy-promo__button--secondary"
            >
              See how vTrack works
            </Link>

          </div>

        </div>

        {/* RIGHT COLUMN OFFER CARD */}

        <div className="legacy-promo__card">

          <div className="legacy-promo__card-glow"></div>

          <span className="legacy-promo__card-label">
            NEVADA LEGACY AGENCIES
          </span>

          <div className="legacy-promo__number">
            10
          </div>

          <h3>
            Founding Nevada Agencies
          </h3>

          <div className="legacy-promo__divider"></div>

          <div className="legacy-promo__six">
            <span>FIRST</span>
            <strong>6 MONTHS</strong>
            <span>FREE</span>
          </div>

          <div className="legacy-promo__card-list">

            <div>
              <CheckCircle2 size={18} />
              Full platform access
            </div>

            <div>
              <CheckCircle2 size={18} />
              Dedicated account manager
            </div>

            <div>
              <CheckCircle2 size={18} />
              Hands on onboarding
            </div>

            <div>
              <CheckCircle2 size={18} />
              No obligation to continue
            </div>

          </div>

          <p className="legacy-promo__availability">
            Our first ten Nevada agencies receive
            hands on support throughout onboarding.
          </p>

        </div>

      </div>
    </section>
  );
}

export default LegacyPromo;