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
            <span>Nevada Legacy Agencies</span>
          </div>

          <h2>
            Cut the cost of running your agency.
            <span> Get paid accurately and on time.</span>
          </h2>

          <p className="legacy-promo__intro">
            Bring EVV, scheduling, billing, claims,
            payroll, authorizations, and recipient
            tracking together in one connected system,
            backed by a dedicated account manager.
          </p>

          <div className="legacy-promo__offer">

            <span className="legacy-promo__offer-small">
              The Legacy Agency offer
            </span>

            <strong>No cost while you Onboard</strong>

            <p>
              A few Legacy Agency spaces remain. Eligible
              founding Nevada agencies receive the full
              vTrack platform and hands-on support free
              for their first 3 - 6 months while we work
              together through onboarding and launch.
            </p>

            <p>
              The offer ends when the remaining spaces
              are filled. Availability is limited so
              each agency receives the focused support
              needed for state requirements, training,
              integration, testing, and go-live.
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
            Nevada Legacy Agencies
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
            <strong>3 - 6 MONTHS</strong>
            <span>No Cost</span>
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
            A few founding-agency spaces remain. The
            offer ends when all available spaces are filled.
          </p>

        </div>

      </div>
    </section>
  );
}

export default LegacyPromo;