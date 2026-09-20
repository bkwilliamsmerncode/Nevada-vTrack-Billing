import { CheckCircle2, Layers3, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import "./MultiPayer.css";

const payers = [
  "Nevada Medicaid Fee-for-Service",
  "Anthem Blue Cross and Blue Shield Healthcare Solutions",
  "Health Plan of Nevada",
  "Molina Healthcare of Nevada",
  "SilverSummit Healthplan",
  "CareSource",
];

function MultiPayer() {
  return (
    <section className="multi-payer">
      <div className="multi-payer__glow multi-payer__glow--one" />
      <div className="multi-payer__glow multi-payer__glow--two" />

      <div className="multi-payer__container">

        {/* LEFT COLUMN: CONTENT */}

        <div className="multi-payer__content">

          <span className="multi-payer__eyebrow">
            <Layers3 size={18} />
            NEVADA'S MULTI-PAYER REALITY
          </span>

          <h2>
            One workflow for
            <span> multiple health plans.</span>
          </h2>

          <p className="multi-payer__lead">
            Nevada Medicaid managed care expanded statewide
            on January 1, 2026.
          </p>

          <p>
            For provider agencies, that can mean working with
            fee-for-service Medicaid and multiple managed care
            plans, each with its own billing and payment processes.
          </p>

          <p>
            vTrack is designed to bring authorizations, service
            records, claims, responses, denials, and payment
            reconciliation into one connected workflow.
          </p>

          <div className="multi-payer__notice">
            <ShieldCheck size={22} />

            <p>
              Nevada payer setup and submission capabilities
              will be established and verified during onboarding.
            </p>
          </div>

          <div className="multi-payer__actions">
            <Link
              to="/contact?section=form"
              className="multi-payer__button"
            >
              Discuss Your Agency's Needs
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

        {/* RIGHT COLUMN: PAYER PANEL */}

        <div className="multi-payer__panel">

          <div className="multi-payer__panel-header">

            <span className="multi-payer__panel-label">
              NEVADA MEDICAID
            </span>

            <h3>
              Multiple payers.
              <span> One connected workflow.</span>
            </h3>

            <p>
              Nevada Medicaid fee-for-service and managed care
              plans your agency may work with.
            </p>

          </div>

          <div
            className="multi-payer__plans"
            aria-label="Nevada Medicaid fee-for-service and managed care payers"
          >

            {payers.map((payer) => (
              <div
                className="multi-payer__plan"
                key={payer}
              >
                <span className="multi-payer__plan-icon">
                  <CheckCircle2 size={20} />
                </span>

                <span className="multi-payer__plan-name">
                  {payer}
                </span>
              </div>
            ))}

          </div>

          <div className="multi-payer__panel-footer">
            <Layers3 size={19} />

            <span>
              Designed to connect your agency's
              billing and operational workflows.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MultiPayer;