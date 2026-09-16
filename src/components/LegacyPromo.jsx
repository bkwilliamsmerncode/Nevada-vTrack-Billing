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
  Only <span>10 Nevada Agencies</span> Will Qualify.
</h2>

<p className="legacy-promo__intro">
  Don’t miss your chance to be among the first 10 Nevada provider agencies
  to partner with vTrack.
</p>

<div className="legacy-promo__offer">
  <span className="legacy-promo__offer-small">
    LIMITED-TIME LEGACY PROMOTION
  </span>

  <strong>GET 6 MONTHS FREE</strong>

  <p>
    Get full access to everything vTrack has to offer—with no software cost
    for your first six months. Once all 10 spots are claimed, this offer ends.
  </p>
          </div>

          <div className="legacy-promo__points">
            <div className="legacy-promo__point">
              <CheckCircle2 size={21} />

              <div>
                <strong>Full vTrack Platform</strong>
                <span>
                  Access the tools your agency needs for operations, EVV,
                  billing, payroll, authorizations, and more.
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
              to="/contact"
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
              Full platform access
            </div>

            <div>
              <CheckCircle2 size={18} />
              Nevada EVV & billing support
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