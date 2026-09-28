
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import OnboardingProcess from "../components/OnboardingProcess";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

import "./About.css";
import SEO from "../components/SEO";

const values = [
  {
    icon: HeartHandshake,
    title: "Provider Focused",
    description:
      "We build around the real operational needs of provider agencies and the teams doing the work every day.",
  },
  {
    icon: Lightbulb,
    title: "Practical Technology",
    description:
      "Technology should make your job easier, not create another administrative burden for your staff.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Workflows",
    description:
      "vTrack helps connect important agency processes so information moves more consistently from service delivery to billing.",
  },
  {
    icon: Users,
    title: "Built for Teams",
    description:
      "From direct-care staff to billing and administration, vTrack is designed to support multiple roles across your agency.",
  },
];

function About() {
  const currentYear = new Date().getFullYear();

  const [displayYear, setDisplayYear] = useState(currentYear);

  const yearRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = yearRef.current;

    if (!element) return;

    let animationFrame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        observer.disconnect();

        // Respect accessibility preferences
        if (
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
        ) {
          setDisplayYear(2006);
          return;
        }

        const duration = 1800;
        const startYear = currentYear;
        const endYear = 2006;

        let startTime = null;

        const animate = (timestamp) => {
          if (startTime === null) {
            startTime = timestamp;
          }

          const progress = Math.min(
            (timestamp - startTime) / duration,
            1
          );

          // Smooth ease-out animation
          const eased = 1 - Math.pow(1 - progress, 3);

          const year = Math.round(
            startYear - (startYear - endYear) * eased
          );

          setDisplayYear(year);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            setDisplayYear(endYear);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [currentYear]);

  return (
    <div className="about-page">

      <SEO
        title="About Vichra | Supporting Provider Agencies Since 2006"
        description="Learn about Vichra and vTrack, a provider management platform built from 20 years of experience supporting provider agency operations."
        path="/about"
      />

      {/* =========================
          HERO
      ========================= */}

      <section className="about-hero">
        <div className="about-hero__glow"></div>

        <div className="about-hero__container">
          <div className="about-hero__content">

            <span className="about-hero__eyebrow">
              About Vichra
            </span>

            <h1>
              Supporting Providers
              <span> Since 2006.</span>
            </h1>

            <p>
              Since 2006, Vichra has worked alongside provider agencies,
              helping simplify the administrative and operational work behind
              quality services.
            </p>

            <div className="about-hero__actions">
              <Link
                to="/contact?section=form"
                className="about-hero__button about-hero__button--primary"
              >
                Talk With Our Team
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/platform"
                className="about-hero__button about-hero__button--secondary"
              >
                Explore vTrack
              </Link>
            </div>

          </div>

          {/* ANIMATED EXPERIENCE CARD */}

          <div className="about-hero__visual">
            <div className="about-hero__experience">

              <span>SINCE</span>

              <strong
                ref={yearRef}
                className="about-hero__animated-year"
                aria-label="Since 2006"
              >
                <span aria-hidden="true">
                  {displayYear}
                </span>
              </strong>

              <h2>Provider Experience</h2>

              <p>
                Working with provider agencies and developing tools designed
                around real operational workflows.
              </p>
            </div>

            <div className="about-hero__mini">
              <BadgeCheck size={22} />

              <div>
                <strong>Now Serving Nevada</strong>
                <span>
                  EVV, billing, and provider management
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          ONBOARDING PROCESS
      ========================= */}

      <OnboardingProcess />

      {/* =========================
          OUR STORY
      ========================= */}

      <section className="about-story">
        <div className="about-story__container">

          <div className="about-story__visual">
            <div className="about-story__card">

              <Building2 size={34} />

              <span>VICHRA</span>

              <h2>
                Technology Built Around Provider Operations
              </h2>

              <p>
                vTrack was created to bring critical provider workflows into
                one connected environment.
              </p>

              <div className="about-story__list">
                <div>
                  <CheckCircle2 size={17} />
                  EVV & Scheduling
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Billing & Claims
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Authorizations
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Payroll
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  Recipient Tracking
                </div>
              </div>

            </div>
          </div>

          <div className="about-story__content">

            <span className="about-story__eyebrow">
              Our approach
            </span>

            <h2>
              Software Should Support Your Agency,
              <span> Not Slow It Down.</span>
            </h2>

            <p>
              Provider agencies manage a tremendous amount of information.
              Staff schedules, appointments, service documentation,
              authorizations, claims, payroll, recipients, and payments all have
              to stay organized.
            </p>

            <p>
              vTrack helps bring those processes together so your team can
              spend less time moving information between disconnected systems
              and more time focusing on your organization and the people you
              serve.
            </p>

            <div className="about-story__highlight">
              <ShieldCheck size={24} />

              <div>
                <strong>Built with Provider Experience</strong>

                <span>
                  Our goal is simple: give provider agencies practical tools
                  that make everyday operations easier to manage.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          OUR VALUES
      ========================= */}

      <section className="about-values">
        <div className="about-values__container">

          <div className="about-values__heading">
            <span>What guides us</span>

            <h2>
              Built Around the Needs of
              <strong> Provider Agencies.</strong>
            </h2>

            <p>
              The best provider software should make complex work easier to
              understand, manage, and complete.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  className="about-value-card"
                  key={value.title}
                >
                  <div className="about-value-card__icon">
                    <Icon size={25} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================
          NEVADA
      ========================= */}

      <section className="about-nevada">
        <div className="about-nevada__container">

          <div>
            <span className="about-nevada__eyebrow">
              vTrack in Nevada
            </span>

            <h2>
              Bringing vTrack to
              <strong> Nevada Providers.</strong>
            </h2>

            <p>
              vTrack is now expanding into Nevada to give provider agencies a
              connected option for EVV, billing, payroll, authorizations,
              scheduling, recipient tracking, and agency operations.
            </p>

            <div className="about-nevada__points">
              <div>
                <CheckCircle2 size={19} />
                Nevada Medicaid trading partner 51488619
              </div>

              <div>
                <CheckCircle2 size={19} />
                Enrolled for third-party billing
              </div>

              <div>
                <CheckCircle2 size={19} />
                EDI certification testing in progress
              </div>
            </div>
          </div>

          <div className="about-nevada__offer">

            <span>Nevada enrollment</span>

            <strong>51488619</strong>

            <p>
              Our Nevada Medicaid trading partner ID for third-party billing.
              Production claim submission remains pending completion of EDI
              certification testing.
            </p>

            <Link to="/contact?section=form">
              Learn About the Offer
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
