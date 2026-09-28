
import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  Database,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./WhyVTrack.css";

const credentials = [
  {
    icon: ShieldCheck,
    title: "Enrolled in Nevada",
    description:
      "Nevada Medicaid trading partner, ID 51488619, connectivity established with the state's fiscal agent.",
  },
  {
    icon: Clock3,
    title: "Since 2006 in Arizona",
    description:
      "EVV, claims, denials, and reconciliation for provider agencies since 2006.",
  },
  {
    icon: Database,
    title: "Built for open EVV",
    description:
      "Nevada permits alternate EVV vendors, and our platform is built to that model.",
  },
];

function WhyVTrack() {
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

        // Respect reduced-motion accessibility settings
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

          // Smooth ease-out
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
    <section className="why-vtrack">
      <div className="why-vtrack__container">

        {/* LEFT COLUMN */}

        <div className="why-vtrack__visual">

          {/* ANIMATED EXPERIENCE CARD */}

          <div className="why-vtrack__experience">

            <span>SINCE</span>

            <strong
              ref={yearRef}
              className="why-vtrack__animated-year"
              aria-label="Since 2006"
            >
              <span aria-hidden="true">
                {displayYear}
              </span>
            </strong>

            <h3>Arizona Provider Experience</h3>

            <p>
              EVV and Medicaid billing operations
              for Arizona provider agencies.
            </p>

          </div>

          {/* THREE CREDENTIAL CARDS */}

          <div className="why-vtrack__mini-grid">

            {credentials.map((credential) => {
              const Icon = credential.icon;

              return (
                <div
                  className="why-vtrack__mini-card"
                  key={credential.title}
                >
                  <Icon size={24} />

                  <strong>
                    {credential.title}
                  </strong>

                  <span>
                    {credential.description}
                  </span>
                </div>
              );
            })}

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="why-vtrack__content">

          <span className="why-vtrack__eyebrow">
            Arizona proven, Nevada ready
          </span>

          <h2>
            We are not new to this work,
            <span> only new to Nevada</span>
          </h2>

          <p className="why-vtrack__description">
            Since 2006, vTrack has run EVV and Medicaid
            billing for Arizona provider agencies across
            HCBS, group homes, day services, and waiver
            programs. We submit visit data to the state
            aggregator, generate and submit claims,
            chase denials, and reconcile payments,
            with a named account manager on every account.
          </p>

          <p className="why-vtrack__description">
            We have completed Nevada Medicaid trading
            partner enrollment and established connectivity
            with the state's fiscal agent. We are
            preparing our Nevada alternate EVV integration.
            What we want now is a small group of Nevada
            agencies to bring live with us.
          </p>

          {/* CREDENTIAL SUMMARY */}

          <div className="why-vtrack__benefits">

            <div className="why-vtrack__benefit">
              <CheckCircle2 size={21} />

              <span>
                Enrolled with Nevada Medicaid for
                third-party billing.
              </span>
            </div>

            <div className="why-vtrack__benefit">
              <CheckCircle2 size={21} />

              <span>
                Established Arizona operations
                dating back to 2006.
              </span>
            </div>

            <div className="why-vtrack__benefit">
              <CheckCircle2 size={21} />

              <span>
                Preparing for Nevada EDI certification
                and alternate EVV onboarding.
              </span>
            </div>

          </div>

          <Link
            to="/platform"
            className="why-vtrack__button"
          >
            See how vTrack works
            <ArrowRight size={19} />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default WhyVTrack;
