import { CheckCircle2, Layers3 } from "lucide-react";

import "./MultiPayer.css";

const plans = [
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
        <div className="multi-payer__content">
          <span className="multi-payer__eyebrow">
            <Layers3 size={18} />
            NEVADA'S MULTI-PAYER REALITY
          </span>

          <h2>
            One Workflow for
            <strong> Multiple Health Plans.</strong>
          </h2>

          <p>
            Nevada Medicaid managed care expanded statewide on January 1,
            2026. Agencies that once worked primarily with fee-for-service
            billing may now need to manage claims, responses and payments
            across several health plans. vTrack is built to keep that work
            organized without creating a separate process for every payer.
          </p>
        </div>

        <div className="multi-payer__plans" aria-label="Nevada Medicaid managed care plans">
          {plans.map((plan) => (
            <div key={plan}>
              <CheckCircle2 size={19} />
              <span>{plan}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MultiPayer;
