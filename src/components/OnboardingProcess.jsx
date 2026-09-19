import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import "./OnboardingProcess.css";

const steps = [
  {
    title: "Discovery",
    text:
      "We learn about your services, provider type, payers, current systems, billing workflow, and transition needs. Together, we identify the requirements that apply to your agency.",
  },
  {
    title: "Designation and aggregator training",
    text:
      "For services subject to EVV, we guide your agency through the applicable alternate-vendor designation process and Nevada aggregator training requirements.",
  },
  {
    title: "Integration and testing",
    text:
      "We configure your agency, prepare the required data, and validate applicable EVV and billing workflows. Nevada production claim submission depends on successful EDI compliance testing and authorization.",
  },
  {
    title: "Link your agency to our trading partner ID",
    text:
      "We guide your agency through the applicable FA-37 process to associate its billing relationship with Vichra Systems, LLC, Nevada Medicaid Trading Partner ID 51488619.",
  },
  {
    title: "Go live with support",
    text:
      "After the required state and technical steps are complete, we coordinate your launch, train your team, and provide hands-on support through the initial billing cycles.",
  },
];

function OnboardingProcess() {
  return (
    <section className="onboarding">
      <div className="onboarding__container">

        {/* SECTION HEADING */}

        <div className="onboarding__heading">
          <span>How Nevada onboarding works</span>

          <h2>
            A clear path from first call to go live.
          </h2>

          <p>
            Nevada onboarding involves more than setting up software.
            We work through the applicable state requirements,
            configuration, training, and testing with your agency
            before moving into production.
          </p>
        </div>

        {/* FIVE ONBOARDING STEPS */}

        <div className="onboarding__steps">
          {steps.map((step, index) => (
            <article key={step.title}>

              <div className="onboarding__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <CheckCircle2 size={23} />

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </article>
          ))}
        </div>

        {/* CONTACT CTA */}

        <Link
          to="/contact?section=form"
          className="onboarding__button"
        >
          Start the conversation
          <ArrowRight size={19} />
        </Link>

      </div>
    </section>
  );
}

export default OnboardingProcess;