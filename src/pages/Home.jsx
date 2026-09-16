import { Link } from "react-router-dom";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import SEO from "../components/SEO";
import EVVComplianceStrip from "../components/EVVComplianceStrip";
import PlatformFeatures from "../components/PlatformFeatures";
import WhyVTrack from "../components/WhyVTrack";
import ProviderTypes from "../components/ProviderTypes";
import NevadaEVV from "../components/NevadaEVV";
import LegacyPromo from "../components/LegacyPromo";
import FinalCTA from "../components/FinalCTA";

import "./Home.css";

function Home() {
  return (
    
    <div className="home">
      <LegacyPromo />
      <SEO
        title="vTrack Nevada | EVV, Billing & Provider Management"
        description="vTrack by Vichra helps Nevada provider agencies manage EVV, billing, claims, payroll, authorizations, scheduling, recipient tracking and agency operations."
        path="/"
      />

      <section className="hero">
        <div className="hero__glow hero__glow--one"></div>
        <div className="hero__glow hero__glow--two"></div>

        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              <BadgeCheck size={18} />
              <span>Built for Nevada Provider Agencies</span>
            </div>

            <h1 className="hero__title">
              Your Agency's Back Office,
              <span> Handled.</span>
            </h1>

            <p className="hero__description">
              Through the Nevada Legacy Promotion, vTrack's implementation
              team helps your agency get started. Once you're onboarded,
              your dedicated account manager handles billing and payroll—so
              your team can focus on the people you serve.
            </p>

            <div className="hero__official">
              <ShieldCheck size={22} />

              <p>
                Nevada Medicaid uses an open EVV model that allows provider
                agencies to use an <strong>alternate EVV system</strong> when
                it meets 21st Century Cures Act documentation requirements.
              </p>
            </div>

            <div className="hero__actions">
              <Link
                to="/contact#contact-form"
                className="hero__button hero__button--primary"
              >
                Claim Your Free 6 Months
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/platform"
                className="hero__button hero__button--secondary"
              >
                Explore vTrack
              </Link>
            </div>

            <div className="hero__trust">
              <div className="hero__trust-item">
                <CheckCircle2 size={18} />
                <span>Nearly 30 Years of Experience</span>
              </div>

              <div className="hero__trust-item">
                <CheckCircle2 size={18} />
                <span>Built for Provider Agencies</span>
              </div>

              <div className="hero__trust-item">
                <CheckCircle2 size={18} />
                <span>Nevada Focused</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__dashboard">
              <div className="hero__dashboard-top">
                <div>
                  <span className="hero__dashboard-label">
                    vTrack Nevada
                  </span>

                  <h2>Provider Operations</h2>
                </div>

                <div className="hero__status">
                  <span></span>
                  Connected
                </div>
              </div>

              <div className="hero__stats">
                <div className="hero__stat-card">
                  <div className="hero__stat-icon">
                    <Building2 size={22} />
                  </div>

                  <div>
                    <span>Provider Tools</span>
                    <strong>All-in-One</strong>
                  </div>
                </div>

                <div className="hero__stat-card">
                  <div className="hero__stat-number">
                    EVV
                  </div>

                  <div>
                    <span>Electronic</span>
                    <strong>Visit Verification</strong>
                  </div>
                </div>
              </div>

              <div className="hero__feature-list">
                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>Billing & Claims</strong>
                    <span>
                      Turn verified services into cleaner billing workflows
                    </span>
                  </div>
                </div>

                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>EVV & Scheduling</strong>
                    <span>
                      Manage appointments, visits, and service delivery
                    </span>
                  </div>
                </div>

                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>Payroll</strong>
                    <span>
                      Use approved service data to support payroll preparation
                    </span>
                  </div>
                </div>

                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>Authorizations</strong>
                    <span>
                      Track utilization and keep services organized
                    </span>
                  </div>
                </div>
              </div>

              <div className="hero__promo">
                <div className="hero__promo-tag">
                  LEGACY OFFER
                </div>

                <strong>6 Months Free</strong>

                <p>
                  Available to the first 10 Nevada provider agencies that
                  sign up for vTrack.
                </p>
              </div>
            </div>

            <div className="hero__floating-card hero__floating-card--top">
              <CheckCircle2 size={20} />

              <div>
                <strong>Nevada Ready</strong>
                <span>EVV + Billing Workflows</span>
              </div>
            </div>

            <div className="hero__floating-card hero__floating-card--bottom">
              <ShieldCheck size={20} />

              <div>
                <strong>No Obligation</strong>
                <span>After the 6-month offer</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <EVVComplianceStrip />

      <PlatformFeatures />

      <WhyVTrack />

      <ProviderTypes />

      <NevadaEVV />

      

      <FinalCTA />
    </div>
  );
}

export default Home;
