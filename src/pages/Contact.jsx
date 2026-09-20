import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Gift,
  Mail,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

import "./Contact.css";

export const ContactUs = () => {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [legacyInterest, setLegacyInterest] = useState(false);

  // WORKING EMAILJS CONFIGURATION
  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_ays9k2h",
        "template_grp7nxt",
        form.current,
        {
          publicKey: "hQim4ICvqwKb9uuvj",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");

          setStatus("success");

          form.current.reset();

          setLegacyInterest(false);
        },
        (error) => {
          console.log("FAILED...", error.text);

          setStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <main className="contact-page">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="contact-hero">

        <div className="contact-hero__glow" />

        <div className="contact-hero__container">

          <div className="contact-hero__content">

            <div className="contact-hero__eyebrow">
              <CalendarDays size={16} />
              Connect with vTrack
            </div>

            <h1>
              Let's simplify your{" "}
              <span>agency operations.</span>
            </h1>

            <p>
              Discover how vTrack by Vichra can help your
              Nevada provider agency manage scheduling,
              EVV, billing, payroll, authorizations,
              and daily operations.
            </p>

            <div className="contact-hero__points">

              <div>
                <CheckCircle2 size={19} />
                Connect with our team to discuss your agency.
              </div>

              <div>
                <CheckCircle2 size={19} />
                Explore how vTrack supports your operations.
              </div>

              <div>
                <CheckCircle2 size={19} />
                Learn about the Nevada Legacy Agency offer.
              </div>

            </div>

          </div>


          {/* LEGACY PROMOTION CARD */}

          <div className="contact-hero__offer">

            <Gift size={34} />

            <span>NEVADA LEGACY AGENCY OFFER</span>

            <strong>
              6 Months Free
            </strong>

            <p>
              The first 10 Nevada provider agencies
              that sign up for vTrack receive six
              months of access at no cost.
            </p>

            <div className="contact-hero__offer-line" />

            <small>
              At the end of six months, if you're
              not satisfied, you owe nothing and
              have no obligation to continue.
              Submitting a request does not reserve
              a promotional spot.
            </small>

          </div>

        </div>

      </section>


      {/* =========================
          MAIN CONTACT SECTION
      ========================= */}

      <section className="contact-main">

        <div className="contact-main__container">

          <div className="contact-form-area">


            {/* FORM HEADING */}

            <div className="contact-form-heading">

              <span>
                Tell us about your agency
              </span>

              <h2>
                Become a Legacy Agency
              </h2>

              <p>
                Complete the form and our team will
                follow up to discuss your agency's
                needs and the Legacy offer.
                Submitting this form does not reserve
                a promotional spot.
              </p>

            </div>


            {/* SUCCESS MESSAGE */}

            {status === "success" && (

              <div
                className="contact-success"
                role="status"
              >

                <CheckCircle2 size={23} />

                <div>

                  <strong>
                    Your request has been sent!
                  </strong>

                  <p>
                    Thank you for contacting vTrack.
                    Our team will follow up regarding
                    your agency's request.
                  </p>

                </div>

              </div>

            )}


            {/* ERROR MESSAGE */}

            {status === "error" && (

              <div
                className="contact-error"
                role="alert"
              >

                <strong>
                  Your request could not be sent.
                </strong>

                <p>
                  Please try again or contact us
                  directly at support@vtrackbilling.com.
                </p>

              </div>

            )}


            {/* =========================
                WORKING EMAILJS FORM
            ========================= */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
              id="contact-form"
            >


              {/* EMAILJS TEMPLATE VARIABLES */}

              <input
                type="hidden"
                name="name"
                value="Nevada Legacy Agency Request"
              />

              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />


              <div className="contact-form__grid">


                {/* YOUR NAME */}

                <div className="contact-field">

                  <label htmlFor="contact_name">
                    Your Name <span>*</span>
                  </label>

                  <input
                    id="contact_name"
                    type="text"
                    name="contact_name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    disabled={isSubmitting}
                  />

                </div>


                {/* AGENCY NAME */}

                <div className="contact-field">

                  <label htmlFor="agency_name">
                    Agency Name <span>*</span>
                  </label>

                  <input
                    id="agency_name"
                    type="text"
                    name="agency_name"
                    placeholder="Your agency name"
                    autoComplete="organization"
                    required
                    disabled={isSubmitting}
                  />

                </div>


                {/* EMAIL ADDRESS */}

                <div className="contact-field">

                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@agency.com"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                  />

                </div>


                {/* PHONE NUMBER */}

                <div className="contact-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(702) 555-0123"
                    autoComplete="tel"
                    disabled={isSubmitting}
                  />

                </div>


                {/* PROVIDER TYPE */}

                <div className="contact-field">

                  <label htmlFor="provider_type">
                    Provider Type <span>*</span>
                  </label>

                  <select
                    id="provider_type"
                    name="provider_type"
                    defaultValue=""
                    required
                    disabled={isSubmitting}
                  >

                    <option value="" disabled>
                      Select provider type
                    </option>

                    <option value="Personal Care Services Agency">
                      Personal Care Services Agency
                    </option>

                    <option value="Home Health Agency">
                      Home Health Agency
                    </option>

                    <option value="Personal Care Intermediary Service Organization">
                      Personal Care Intermediary Service Organization
                    </option>

                    <option value="Frail Elderly Waiver Provider">
                      Frail Elderly Waiver Provider
                    </option>

                    <option value="Physical Disabilities Waiver Provider">
                      Physical Disabilities Waiver Provider
                    </option>

                    <option value="Residential / SLA Provider">
                      Residential / SLA Provider
                    </option>

                    <option value="Jobs and Day Training Provider">
                      Jobs and Day Training Provider
                    </option>

                    <option value="IDD Provider">
                      IDD Provider
                    </option>

                    <option value="Multi-Service Agency">
                      Multi-Service Agency
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* AGENCY SIZE */}

                <div className="contact-field">

                  <label htmlFor="agency_size">
                    Agency Size
                  </label>

                  <select
                    id="agency_size"
                    name="agency_size"
                    defaultValue=""
                    disabled={isSubmitting}
                  >

                    <option value="" disabled>
                      Select agency size
                    </option>

                    <option value="1–25 Staff">
                      1–25 Staff
                    </option>

                    <option value="26–50 Staff">
                      26–50 Staff
                    </option>

                    <option value="51–100 Staff">
                      51–100 Staff
                    </option>

                    <option value="101–250 Staff">
                      101–250 Staff
                    </option>

                    <option value="250+ Staff">
                      250+ Staff
                    </option>

                  </select>

                </div>

              </div>


              {/* =========================
                  MESSAGE
              ========================= */}

              <div className="contact-field contact-field--full">

                <label htmlFor="message">
                  What would you like help with?
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your agency's needs..."
                  rows={6}
                  disabled={isSubmitting}
                />

              </div>


              {/* =========================
                  LEGACY INTEREST
              ========================= */}

              <input
                type="hidden"
                name="legacy_interest"
                value={legacyInterest ? "Yes" : "No"}
              />

              <label className="contact-checkbox">

                <input
                  type="checkbox"
                  checked={legacyInterest}
                  onChange={(e) =>
                    setLegacyInterest(e.target.checked)
                  }
                  disabled={isSubmitting}
                />

                <span className="contact-checkbox__box" />

                <span className="contact-checkbox__text">

                  I'm interested in learning more
                  about the Nevada Legacy Agency offer.

                </span>

              </label>


              {/* =========================
                  SUBMIT BUTTON
              ========================= */}

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >

                {isSubmitting
                  ? "Sending Request..."
                  : "Send My Request"}

                {!isSubmitting && (
                  <ArrowRight size={18} />
                )}

              </button>


              {/* =========================
                  PRIVACY DISCLAIMER
              ========================= */}

              <p className="contact-form__note">

                By submitting, you acknowledge our{" "}

                <a href="#/privacy-policy">
                  Privacy Policy
                </a>

                {" "}and{" "}

                <a href="#/terms-of-use">
                  Terms of Use
                </a>

                {" "}and agree that a vTrack
                representative may contact you
                by phone or email regarding
                your request. Please do not
                submit protected health information.

              </p>

            </form>

          </div>


          {/* =========================
              CONTACT SIDEBAR
          ========================= */}

          <aside className="contact-sidebar">


            {/* PHONE CARD */}

            <div className="contact-sidebar__card">

              <div className="contact-sidebar__icon">
                <Phone size={23} />
              </div>

              <h3>
                Call Our Team
              </h3>

              <p>
                Have questions? Speak directly
                with our team.
              </p>

              <p>
                <a href="tel:480-878-1050">
                  480-878-1050
                </a>
              </p>

            </div>


            {/* EMAIL CARD */}

            <div className="contact-sidebar__card">

              <div className="contact-sidebar__icon">
                <Mail size={23} />
              </div>

              <h3>
                Email Us
              </h3>

              <p>
                Reach out to our support team.
              </p>

              <p>
                <a href="mailto:Go-vTrack@vichra.com
Sales: 480-878-1050">
                  Go-vTrack@vichra.com
                </a>
              </p>

            </div>


            {/* PLATFORM CARD */}

            <div className="contact-sidebar__card contact-sidebar__card--dark">

              <ShieldCheck size={32} />

              <span>
                BUILT FOR PROVIDER AGENCIES
              </span>

              <h3>
                One connected platform.
              </h3>

              <p>
                Bring scheduling, EVV,
                authorizations, billing,
                payroll, and operational
                workflows together with vTrack.
              </p>

            </div>

          </aside>

        </div>

      </section>


      {/* =========================
          WHAT HAPPENS NEXT
      ========================= */}

      <section className="contact-next">

        <div className="contact-next__container">

          <div className="contact-next__heading">

            <span>
              OUR PROCESS
            </span>

            <h2>
              What happens{" "}
              <strong>next?</strong>
            </h2>

          </div>


          <div className="contact-next__steps">


            {/* STEP ONE */}

            <div className="contact-next__step">

              <div>
                STEP 01
              </div>

              <Mail size={30} />

              <h3>
                Submit Your Request
              </h3>

              <p>
                Complete the form and tell
                us about your agency.
              </p>

            </div>


            <ArrowRight
              className="contact-next__arrow"
              size={25}
            />


            {/* STEP TWO */}

            <div className="contact-next__step">

              <div>
                STEP 02
              </div>

              <Users size={30} />

              <h3>
                Connect With Our Team
              </h3>

              <p>
                We'll discuss your agency's
                needs and answer your questions.
              </p>

            </div>


            <ArrowRight
              className="contact-next__arrow"
              size={25}
            />


            {/* STEP THREE */}

            <div className="contact-next__step">

              <div>
                STEP 03
              </div>

              <CalendarDays size={30} />

              <h3>
                Explore vTrack
              </h3>

              <p>
                Schedule a demonstration and
                see how vTrack fits your workflow.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ContactUs;