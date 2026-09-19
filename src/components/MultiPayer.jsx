import { CheckCircle2, Layers3 } from "lucide-react";

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
      <div className="multi-payer__container">

        {/* LEFT COLUMN: CONTENT */}

        <div className="multi-payer__content">

          <span className="multi-payer__eyebrow">
            <Layers3 size={18} />
            NEVADA'S MULTI-PAYER REALITY
          </span>

          <h2>
            One workflow for
            <strong> multiple health plans.</strong>
          </h2>

          <p>
            Nevada Medicaid managed care expanded statewide
            on January 1, 2026. For provider agencies,
            that can mean working with fee-for-service
            Medicaid and multiple managed care plans,
            each with its own billing and payment processes.
          </p>

          <p>
            vTrack is designed to bring authorizations,
            service records, claims, responses, denials,
            and payment reconciliation into a connected
            workflow. Our Nevada payer setup and submission
            capabilities will be established and verified
            during onboarding.
          </p>

        </div>

        {/* RIGHT COLUMN: PAYER LIST */}

        <div
          className="multi-payer__plans"
          aria-label="Nevada Medicaid fee-for-service and managed care payers"
        >
          {payers.map((payer) => (
            <div key={payer}>
              <CheckCircle2 size={19} />
              <span>{payer}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MultiPayer;