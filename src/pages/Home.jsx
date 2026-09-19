import { Link } from "react-router-dom";

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

import SEO from "../components/SEO";
import EVVComplianceStrip from "../components/EVVComplianceStrip";
import PlatformFeatures from "../components/PlatformFeatures";
import WhyVTrack from "../components/WhyVTrack";
import ProviderTypes from "../components/ProviderTypes";
import OnboardingProcess from "../components/OnboardingProcess";
import MultiPayer from "../components/MultiPayer";
import LegacyPromo from "../components/LegacyPromo";

import "./Home.css";

const stats = [
  {
    icon: CalendarDays,
    value: "Since 2006",
    label: "Arizona EVV and Medicaid billing",
  },
  {
    icon: BadgeCheck,
    value: "Enrolled",
    label: "Nevada Medicaid trading partner",
  },
  {
    icon: ShieldCheck,
    value: "Open EVV",
    label: "Nevada permits alternate EVV vendors",
  },
  {
    icon: MonitorSmartphone,
    value: "Any device",
    label: "Web based, nothing to install",
  },
];

function Home() {
  return (
    
    <div className="home">
      <SEO
        title="vTrack Nevada | EVV, Medicaid Billing & Provider Operations"
        description="Vichra Systems has supported Arizona provider agencies since 2006 and is now an enrolled Nevada Medicaid EDI trading partner. Learn about vTrack and our Nevada onboarding process."
        path="/"
      />
{<LegacyPromo />}
      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <div className="hero__glow hero__glow--one"></div>
        <div className="hero__glow hero__glow--two"></div>

        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              <BadgeCheck size={18} />
              <span>Now enrolled with Nevada Medicaid</span>
            </div>

            <h1 className="hero__title">
              EVV and billing for
              <span> Nevada provider agencies.</span>
            </h1>

            <p className="hero__description">
              vTrack has handled EVV, claims, and billing operations
              for Arizona provider agencies since 2006. We are now
              enrolled with Nevada Medicaid as a trading partner
              and are onboarding our first Nevada agencies.
            </p>

            <div className="hero__official">
              <ShieldCheck size={22} />

              <p>
                <strong>
                  Vichra Systems, LLC
                </strong>
                <br />
                Nevada Medicaid Trading Partner ID 51488619.
                EDI compliance testing is in progress;
                production claim submission is not yet authorized.
              </p>
            </div>

            <div className="hero__actions">
              <Link
                to="/contact?section=form"
                className="hero__button hero__button--primary"
              >
                Become a Legacy Agency
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/platform"
                className="hero__button hero__button--secondary"
              >
                See how vTrack works
              </Link>
            </div>

            <div className="hero__trust">
              <div className="hero__trust-item">
                <CheckCircle2 size={18} />
                <span>Arizona experience since 2006</span>
              </div>

              <div className="hero__trust-item">
                <CheckCircle2 size={18} />
                <span>Nevada trading partner enrolled</span>
              </div>

              <div className="hero__trust-item">
                <CheckCircle2 size={18} />
                <span>Guided Nevada onboarding</span>
              </div>
            </div>
          </div>

          {/* ENROLLMENT STATUS CARD */}

          <div className="hero__visual">
            <div className="hero__dashboard">
              <div className="hero__dashboard-top">
                <div>
                  <span className="hero__dashboard-label">
                    vTrack Nevada
                  </span>

                  <h2>Nevada Enrollment Status</h2>
                </div>

                <div className="hero__status">
                  <span></span>
                  Enrolled
                </div>
              </div>

              <div className="hero__feature-list">
                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>Trading Partner ID 51488619</strong>
                    <span>
                      Enrolled with Nevada Medicaid for
                      third-party billing
                    </span>
                  </div>
                </div>

                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>Connectivity Established</strong>
                    <span>
                      Trading partner connectivity is established
                    </span>
                  </div>
                </div>

                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>EDI Compliance Testing</strong>
                    <span>
                      Testing must be completed before production
                      claim submission
                    </span>
                  </div>
                </div>

                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>EVV Vendor Status</strong>
                    <span>
                      Nevada alternate EVV vendor approval is
                      a separate, pending process
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOUR-ITEM STAT STRIP
      ========================= */}

      <section
        className="home-stats"
        aria-label="vTrack experience and Nevada overview"
      >
        <div className="home-stats__container">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="home-stats__item" key={stat.value}>
                <div className="home-stats__icon">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================
          APPROVED HOMEPAGE ORDER
      ========================= */}

      {/* Legacy Agency offer */}
    

      {/* Arizona experience and Nevada enrollment */}
      <WhyVTrack />

      {/* Six required EVV elements */}
      <EVVComplianceStrip />

      {/* Nevada provider categories */}
      <ProviderTypes />

      {/* Fee-for-service and managed care */}
      <MultiPayer />

      {/* Six connected platform capabilities */}
      <PlatformFeatures />

      {/* Five-step Nevada onboarding */}
      <OnboardingProcess />

      {/* Final contact invitation */}
      {/* <FinalCTA /> */}
    </div>
  );
}

export default Home;