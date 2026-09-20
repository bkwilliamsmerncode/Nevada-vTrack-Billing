import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Settings2,
  Link2,
  Headset,
  Rocket,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./OnboardingProcess.css";

const steps = [
  {
    icon: ClipboardList,
    title: "Discovery",
    text:
      "We learn about your services, provider type, payers, current systems, billing workflow, and transition needs. Together, we identify the requirements that apply to your agency.",
  },
  {
    icon: ShieldCheck,
    title: "Designation and aggregator training",
    text:
      "For services subject to EVV, we guide your agency through the applicable alternate-vendor designation process and Nevada aggregator training requirements.",
  },
  {
    icon: Settings2,
    title: "Integration and testing",
    text:
      "We configure your agency, prepare the required data, and validate applicable EVV and billing workflows. Nevada production claim submission depends on successful EDI compliance testing and authorization.",
  },
  {
    icon: Link2,
    title: "Link your agency to our trading partner ID",
    text:
      "We guide your agency through the applicable FA-37 process to associate its billing relationship with Vichra Systems, LLC, Nevada Medicaid Trading Partner ID 51488619.",
  },
  {
    icon: Headset,
    title: "Go live with support",
    text:
      "After the required state and technical steps are complete, we coordinate your launch, train your team, and provide hands-on support through the initial billing cycles.",
  },
];

function OnboardingProcess() {
  return (
    <section className="onboarding" id="onboarding">

      {/* BACKGROUND GLOW */}

      <div className="onboarding__glow onboarding__glow--one" />
      <div className="onboarding__glow onboarding__glow--two" />

      <div className="onboarding__container">

        {/* SECTION HEADING */}

        <div className="onboarding__heading">

          <span className="onboarding__eyebrow">
            <Rocket size={17} />
            HOW NEVADA ONBOARDING WORKS
          </span>

          <h2>
            A clear path from
            <span> first call to go live.</span>
          </h2>

          <p>
            Nevada onboarding involves more than setting up
            software. We work through the applicable state
            requirements, configuration, training, and testing
            with your agency before moving into production.
          </p>

        </div>

        {/* FIVE ONBOARDING STEPS */}

        <div className="onboarding__steps">

          {steps.map((step, index) => {
            const StepIcon = step.icon;

            return (
              <article
                className="onboarding__card"
                key={step.title}
              >

                <div className="onboarding__card-top">

                  <span className="onboarding__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="onboarding__step-label">
                    STEP {index + 1} OF {steps.length}
                  </span>

                </div>

                <div className="onboarding__icon">
                  <StepIcon size={26} strokeWidth={1.8} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

                <div className="onboarding__card-footer">
                  <CheckCircle2 size={17} />
                  <span>
                    {index === steps.length - 1
                      ? "Launch and ongoing support"
                      : "Guided onboarding"}
                  </span>
                </div>

              </article>
            );
          })}

        </div>

        {/* CONTACT CTA */}

        <div className="onboarding__cta">

          <div className="onboarding__cta-content">

            <span className="onboarding__cta-label">
              READY TO GET STARTED?
            </span>

            <h3>
              Let's build your path to Nevada.
            </h3>

            <p>
              Tell us about your agency and our team will
              help you understand the onboarding process,
              applicable requirements, and next steps.
            </p>

          </div>

          <Link
            to="/contact?section=form"
            className="onboarding__button"
          >
            Start the conversation
            <ArrowRight size={19} />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default OnboardingProcess;