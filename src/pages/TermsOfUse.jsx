import { Link } from "react-router-dom";
import SEO from "../components/SEO";

import "./Legal.css";

function TermsOfUse() {
  return (
    <div className="legal-page">
      <SEO
        title="Terms of Use | vTrack Billing by Vichra"
        description="Terms of Use for vTrack public websites operated by Vichra Systems, LLC."
        path="/terms-of-use"
      />

      <section className="legal-hero">
        <div className="legal-hero__container">
          <span>vTrack Billing by Vichra</span>

          <h1>Terms of Use</h1>

          <p>
            Effective Date: September 23, 2026
            <br />
            Last Updated: September 23, 2026
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-content__container">
          <h2>Agreement</h2>

          <p>
            These Terms of Use govern your use of{" "}
            <a
              href="https://vtrackbilling.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vtrackbilling.com
            </a>{" "}
            and our other vTrack websites, including our state-specific sites
            (together, the "Sites"), operated by Vichra Systems, LLC
            ("vTrack," "we," "us," or "our").
          </p>

          <p>
            By using the Sites, you agree to these Terms. If you do not agree,
            please do not use the Sites.
          </p>

          <h2>These Terms Cover Our Websites, Not the vTrack Platform</h2>

          <p>
            Use of the vTrack software platform is governed by a separate
            written agreement with each customer agency, which may include a
            Master Services Agreement, order forms, and a Business Associate
            Agreement. If these Terms conflict with a signed customer
            agreement, the customer agreement controls.
          </p>

          <h2>
            Website Information Is Not Legal, Compliance, or Billing Advice
          </h2>

          <p>
            Our Sites include general information about Electronic Visit
            Verification, Medicaid billing, and related requirements in the
            states we serve, including Arizona and Nevada. This information is
            for general educational purposes only.
          </p>

          <p>
            It is not legal, compliance, billing, or professional advice, and
            it does not create a professional relationship between you and
            vTrack. Requirements change often and may apply differently to
            your agency.
          </p>

          <div className="legal-warning">
            <strong>
              Do not rely on our Sites as your source of truth for a compliance
              decision.
            </strong>

            <p>
              You are responsible for confirming current requirements with the
              agencies and health plans that govern your services, such as
              AHCCCS and the Division of Developmental Disabilities in Arizona,
              or Nevada Medicaid, the Aging and Disability Services Division,
              and your managed care organizations in Nevada, along with your
              own legal and compliance advisors.
            </p>
          </div>

          <p>
            We make reasonable efforts to keep our Sites accurate and current,
            but we do not guarantee that information is complete, current, or
            error free.
          </p>

          <h2>No Government Endorsement</h2>

          <p>
            In Arizona, vTrack is listed by AHCCCS as an alternate Electronic
            Visit Verification vendor. In Nevada, Vichra Systems, LLC is an
            enrolled Nevada Medicaid trading partner.
          </p>

          <p>
            No state agency or health plan endorses, certifies, or recommends
            any vendor, and nothing on our Sites should be read as a claim of
            government endorsement, certification, or approval. Each provider
            agency remains responsible for confirming that its vendors support
            its own compliance.
          </p>

          <h2>Our Content</h2>

          <p>
            Our Sites and their contents, including text, graphics, logos, the
            vTrack name and logo, videos, and documentation, are owned by
            vTrack or its licensors and protected by copyright, trademark, and
            other laws.
          </p>

          <p>
            You may view our Sites and print or download individual pages for
            your own internal business use. You may not copy, republish,
            distribute, sell, or modify our content, or use it commercially,
            without our written permission.
          </p>

          <p>
            Customer help materials on our Sites are provided to current vTrack
            customers for internal training and reference only and may not be
            shared outside your organization.
          </p>

          <h2>Acceptable Use</h2>

          <p>You agree not to:</p>

          <ul>
            <li>Use our Sites for any unlawful purpose</li>

            <li>
              Submit false or misleading information, or impersonate anyone,
              through our forms
            </li>

            <li>
              Submit protected health information or other sensitive
              information through our website forms or by unsecured email
            </li>

            <li>
              Attempt to access any part of our Sites or systems without
              authorization
            </li>

            <li>
              Introduce viruses or anything designed to disrupt or damage our
              Sites
            </li>

            <li>
              Use automated tools to copy our Sites or collect contact
              information from them
            </li>

            <li>
              Use our Sites or content to build or support a competing product
            </li>
          </ul>

          <p>
            We may restrict access to our Sites at any time for conduct we
            reasonably believe violates these Terms.
          </p>

          <h2>Forms and Communications</h2>

          <p>
            When you submit a form, you confirm the information is accurate
            and that you are authorized to provide it.
          </p>

          <p>
            You agree that we may contact you by phone or email to respond to
            your inquiry and follow up about vTrack products and services. You
            can ask us to stop at any time by emailing{" "}
            <a href="mailto:support@vtrackbilling.com">
              support@vtrackbilling.com
            </a>{" "}
            or calling <a href="tel:18338872251">833-887-2251</a>.
          </p>

          <h2>Promotions</h2>

          <p>
            Any promotional offer described on our Sites, including founding
            or introductory programs, is subject to availability, eligibility,
            and a signed customer agreement. Submitting a form does not reserve
            a spot or create an agreement.
          </p>

          <h2>Links to Other Websites</h2>

          <p>
            Our Sites may link to state agency, health plan, and other websites
            for convenience. We do not control or take responsibility for
            those websites.
          </p>

          <h2>Privacy</h2>

          <p>
            Our{" "}
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>{" "}
            explains how we handle information collected through our Sites and
            is part of these Terms.
          </p>

          <h2>Disclaimer of Warranties</h2>

          <p className="legal-uppercase">
            Our Sites and their content are provided "as is" and "as
            available," without warranties of any kind, express or implied, to
            the fullest extent permitted by law.
          </p>

          <p className="legal-uppercase">
            We do not guarantee that our Sites will be uninterrupted, secure,
            or error free.
          </p>

          <p>
            Nothing in this section limits any warranty in a signed customer
            agreement.
          </p>

          <h2>Limitation of Liability</h2>

          <p>
            To the fullest extent permitted by law, vTrack and its owners,
            officers, employees, and agents are not liable for any indirect,
            incidental, special, consequential, or punitive damages, or for
            lost profits, revenue, or data, arising from your use of our Sites
            or reliance on their content.
          </p>

          <p>
            Our total liability relating to our Sites will not exceed one
            hundred dollars ($100).
          </p>

          <h2>Indemnification</h2>

          <p>
            You agree to indemnify and hold harmless vTrack and its owners,
            officers, employees, and agents from claims, losses, and expenses,
            including reasonable attorneys' fees, arising from your use of our
            Sites or your violation of these Terms.
          </p>

          <h2>Governing Law</h2>

          <p>
            These Terms are governed by the laws of the State of Arizona. Any
            dispute relating to these Terms or our Sites will be brought in the
            state or federal courts located in Maricopa County, Arizona.
          </p>

          <h2>Changes to These Terms</h2>

          <p>
            We may update these Terms at any time. Changes take effect when
            posted, and we will change the "Last Updated" date above.
            Continued use of our Sites means you accept the updated Terms.
          </p>

          <h2>General</h2>

          <p>
            If any part of these Terms is found unenforceable, the rest remains
            in effect. Our failure to enforce any provision is not a waiver.
            These Terms and our Privacy Policy are the entire agreement between
            you and vTrack regarding our Sites.
          </p>

          <h2>Contact Us</h2>

          <address>
            <strong>Vichra Systems, LLC</strong>
            <br />
            [insert mailing address]
            <br />
            Email:{" "}
            <a href="mailto:support@vtrackbilling.com">
              support@vtrackbilling.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:18338872251">
              833-887-2251
            </a>
          </address>
        </div>
      </section>
    </div>
  );
}

export default TermsOfUse;