import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import "./OnboardingProcess.css";

const steps = [
  {
    title: "Discovery",
    text: "We learn your services, payers, current systems, billing workflow and transition concerns.",
  },
  {
    title: "Transition plan",
    text: "Together we map responsibilities, data, training and the state steps required for your agency.",
  },
  {
    title: "Designation and setup",
    text: "We guide your team through applicable aggregator designation and configure your agency in vTrack.",
  },
  {
    title: "Training and validation",
    text: "Your staff trains in the platform while we validate workflows, authorizations and billing data.",
  },
  {
    title: "Go live with support",
    text: "We move into production deliberately and monitor the early billing cycles with your team.",
  },
];

function OnboardingProcess() {
  return (
    <section className="onboarding">
      <div className="onboarding__container">
        <div className="onboarding__heading">
          <span>HOW ONBOARDING WORKS</span>
          <h2>A Supported Path From First Call to Go Live.</h2>
          <p>
            Switching systems should not put billing at risk. We work through
            the transition in stages so your staff understands what is
            changing, what comes next and who owns each step.
          </p>
        </div>

        <div className="onboarding__steps">
          {steps.map((step, index) => (
            <article key={step.title}>
              <div className="onboarding__number">{String(index + 1).padStart(2, "0")}</div>
              <CheckCircle2 size={23} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <Link to="/contact#contact-form" className="onboarding__button">
          Start the Conversation
          <ArrowRight size={19} />
        </Link>
      </div>
    </section>
  );
}

export default OnboardingProcess;
