import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./NevadaEVV.css";

function NevadaEVV() {
  return (
    <section className="nevada-evv">
      <div className="nevada-evv__container">
        <div className="nevada-evv__content">
          <div className="nevada-evv__eyebrow">
            <BadgeCheck size={18} />
            <span>NEVADA MEDICAID ENROLLMENT</span>
          </div>

          <h2>
            Enrolled for Third-Party Billing.
            <span> Testing for Production.</span>
          </h2>

          <p className="nevada-evv__intro">
            Vichra Systems is enrolled with Nevada Medicaid as a trading
            partner for third-party billing, Trading Partner ID 51488619.
            Connectivity is established with Nevada Medicaid's fiscal agent,
            and EDI certification testing is in progress. Production claim
            submission is pending successful completion of that testing.
          </p>

          <div className="nevada-evv__benefits">
            <div className="nevada-evv__benefit">
              <div className="nevada-evv__benefit-icon">
                <Smartphone size={22} />
              </div>

              <div>
                <strong>Electronic Visit Verification</strong>
                <p>
                  Capture and manage visit information while keeping EVV
                  connected with the rest of your agency workflow.
                </p>
              </div>
            </div>

            <div className="nevada-evv__benefit">
              <div className="nevada-evv__benefit-icon">
                <FileCheck2 size={22} />
              </div>

              <div>
                <strong>Billing & Claims</strong>
                <p>
                  Move reviewed services toward billing without maintaining
                  separate disconnected processes.
                </p>
              </div>
            </div>

            <div className="nevada-evv__benefit">
              <div className="nevada-evv__benefit-icon">
                <ShieldCheck size={22} />
              </div>

              <div>
                <strong>Built Around Provider Operations</strong>
                <p>
                  EVV is only one piece of the work. vTrack also helps manage
                  authorizations, scheduling, payroll, recipients, and more.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/contact?section=form"
            className="nevada-evv__button"
          >
            Talk With Our Nevada Team
            <ArrowRight size={19} />
          </Link>
        </div>

        <div className="nevada-evv__visual">
          <div className="nevada-evv__card">
            <div className="nevada-evv__card-top">
              <div className="nevada-evv__shield">
                <ShieldCheck size={31} />
              </div>

              <div>
                <span>NEVADA</span>
                <h3>Enrollment Status</h3>
              </div>
            </div>

            <div className="nevada-evv__status">
              <span className="nevada-evv__status-dot"></span>

              <div>
                <strong>Third-Party Billing</strong>
                <small>Trading Partner ID 51488619</small>
              </div>

              <CheckCircle2 size={20} />
            </div>

            <div className="nevada-evv__status">
              <span className="nevada-evv__status-dot"></span>

              <div>
                <strong>EDI Testing in Progress</strong>
                <small>Production approval pending</small>
              </div>

              <CheckCircle2 size={20} />
            </div>

            <div className="nevada-evv__gainwell">
              <span>FISCAL AGENT CONNECTIVITY</span>

              <strong>Gainwell Technologies</strong>

              <p>
                Connectivity is established for compliance test-file
                submission.
              </p>
            </div>

            <div className="nevada-evv__workflow">
              <span className="nevada-evv__workflow-label">
                ONE CONNECTED WORKFLOW
              </span>

              <div className="nevada-evv__workflow-steps">
                <div>
                  <span>1</span>
                  Schedule
                </div>

                <div className="nevada-evv__line"></div>

                <div>
                  <span>2</span>
                  Review
                </div>

                <div className="nevada-evv__line"></div>

                <div>
                  <span>3</span>
                  Approve
                </div>

                <div className="nevada-evv__line"></div>

                <div>
                  <span>4</span>
                  Bill
                </div>
              </div>
            </div>
          </div>

          <div className="nevada-evv__floating">
            <CheckCircle2 size={20} />

            <div>
              <strong>One System</strong>
              <span>From appointment to claim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NevadaEVV;
