import { Link } from "react-router-dom";

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import SEO from "../components/SEO";
import EVVComplianceStrip from "../components/EVVComplianceStrip";
import PlatformFeatures from "../components/PlatformFeatures";
import WhyVTrack from "../components/WhyVTrack";
import ProviderTypes from "../components/ProviderTypes";
import NevadaEVV from "../components/NevadaEVV";
import OnboardingProcess from "../components/OnboardingProcess";
import MultiPayer from "../components/MultiPayer";
import LegacyPromo from "../components/LegacyPromo";
import FinalCTA from "../components/FinalCTA";

import "./Home.css";

function Home() {
  return (
    
    <div className="home">
      <SEO
        title="vTrack Nevada | Medicaid Billing, EVV & Provider Operations"
        description="Vichra Systems is enrolled with Nevada Medicaid for third-party billing and is completing EDI certification testing. Explore vTrack for EVV, multi-payer billing and provider operations."
        path="/"
      />

      <section className="hero">
        <div className="hero__glow hero__glow--one"></div>
        <div className="hero__glow hero__glow--two"></div>

        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              <BadgeCheck size={18} />
              <span>Nevada Medicaid Trading Partner 51488619</span>
            </div>

            <h1 className="hero__title">
              Nevada Medicaid Billing and EVV,
              <span> Without the Disruption.</span>
            </h1>

            <p className="hero__description">
              Vichra Systems is an enrolled Nevada Medicaid trading partner
              for third-party billing. We are completing EDI certification
              testing while helping a limited group of founding Nevada
              agencies prepare for a careful, supported transition.
            </p>

            <div className="hero__official">
              <ShieldCheck size={22} />

              <p>
                <strong>Connectivity is established.</strong> Production claim
                submission will begin after Nevada Medicaid's fiscal agent
                accepts our compliance test file.
              </p>
            </div>

            <div className="hero__actions">
              <Link
                to="/contact#contact-form"
                className="hero__button hero__button--primary"
              >
                Talk With Our Nevada Team
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
                <span>Supporting Arizona providers since 2006</span>
              </div>

              <div className="hero__trust-item">
                <CheckCircle2 size={18} />
                <span>Third-party billing enrollment</span>
              </div>

              <div className="hero__trust-item">
                <CheckCircle2 size={18} />
                <span>EDI testing in progress</span>
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
                      Enrolled with Nevada Medicaid for third-party billing
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
                      Connected with Nevada Medicaid's fiscal agent
                    </span>
                  </div>
                </div>

                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>EDI Certification Testing</strong>
                    <span>
                      Compliance test-file submission is in progress
                    </span>
                  </div>
                </div>

                <div className="hero__feature-row">
                  <div className="hero__feature-check">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <strong>Production Status</strong>
                    <span>
                      Pending successful completion of testing
                    </span>
                  </div>
                </div>
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

      <MultiPayer />

      <OnboardingProcess />

      <LegacyPromo />

      <FinalCTA />
    </div>
  );
}

export default Home;
