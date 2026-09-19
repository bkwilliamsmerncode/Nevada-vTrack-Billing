import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Mail,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import "./Contact.css";
import SEO from "../components/SEO";
const initialForm = {
  contactName: "",
  agencyName: "",
  email: "",
  phone: "",
  providerType: "",
  agencySize: "",
  message: "",
  legacyInterest: false,
};

import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
const [isSending, setIsSending] = useState(false);
const [submitError, setSubmitError] = useState("");
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#contact-form") {
      requestAnimationFrame(() => {
        document.getElementById("contact-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [hash]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  setIsSending(true);
  setSubmitted(false);
  setSubmitError("");

  const templateParams = {
    to_email: "brian@vichra.com, selena@vichra.com, greg@vichra.com",
    contact_name: formData.contactName,
    agency_name: formData.agencyName,
    email: formData.email,
    reply_to: formData.email,
    phone: formData.phone || "Not provided",
    provider_type: formData.providerType,
    agency_size: formData.agencySize || "Not provided",
    message: formData.message || "No additional message",
    legacy_interest: formData.legacyInterest ? "Yes" : "No",
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    setSubmitError(
      "This form is not connected yet. Please contact the vTrack team by phone or email."
    );
    setIsSending(false);
    return;
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      {
        publicKey,
      }
    );

    setSubmitted(true);
    setFormData(initialForm);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    console.error("EmailJS error:", error);

    setSubmitError(
      "We couldn't send your request. Please try again."
    );
  } finally {
    setIsSending(false);
  }
};
  return (
    <div className="contact-page">
  <SEO
    title="Contact vTrack | Nevada Provider Agencies"
    description="Talk with the vTrack team about Nevada Medicaid billing, EVV, multi-payer workflows and a supported transition for your provider agency."
    path="/contact"
  />
      <section className="contact-hero">
        <div className="contact-hero__glow"></div>

        <div className="contact-hero__container">
          <div className="contact-hero__content">
            <div className="contact-hero__eyebrow">
              <CalendarDays size={18} />
              START A NEVADA CONVERSATION
            </div>

            <h1>
              Plan Your Nevada Transition
              <span> With a Team That Knows Providers.</span>
            </h1>

            <p>
              Tell us about your services, payers and current workflow. Our
              team will explain enrollment status, onboarding steps and how
              vTrack can support billing, EVV and provider operations.
            </p>

            <div className="contact-hero__points">
              <div>
                <CheckCircle2 size={19} />
                A conversation about your agency's needs
              </div>

              <div>
                <CheckCircle2 size={19} />
                Billing and payroll handled by your account manager
              </div>

              <div>
                <CheckCircle2 size={19} />
                No-pressure conversation with our team
              </div>
            </div>
          </div>

          <div className="contact-hero__offer">
            <Sparkles size={25} />

            <span>NEVADA LEGACY PROMOTION</span>

            <strong>No Payment While We Get You Approved</strong>

            <p>
              We are accepting up to 10 founding Nevada agencies for guided
              designation, training, integration and launch support.
            </p>

            <div className="contact-hero__offer-line"></div>

            <small>
              The promotional period is limited to six months. Final scope
              and eligibility are confirmed before onboarding begins.
            </small>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main__container">
          <div className="contact-form-area">
      {submitted && (
  <div className="contact-success">
    <CheckCircle2 size={24} />

    <div>
      <strong>Thank you! Your Legacy Spot request was sent.</strong>

      <p>
        A member of the vTrack team will follow up with you about
        your Nevada agency.
      </p>
    </div>
  </div>
)}

{submitError && (
  <div className="contact-error">
    <strong>{submitError}</strong>
  </div>
)}
            <div className="contact-form-heading">
              <span>TELL US ABOUT YOUR AGENCY</span>

              <h2>Claim Your vTrack Legacy Spot</h2>

              <p>
                Complete the form below and we'll use this information to
                better understand your agency's needs.
              </p>
            </div>

            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__grid">
                <div className="contact-field">
                  <label htmlFor="contactName">
                    Your Name
                    <span>*</span>
                  </label>

                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="First and last name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="agencyName">
                    Agency Name
                    <span>*</span>
                  </label>

                  <input
                    id="agencyName"
                    name="agencyName"
                    type="text"
                    value={formData.agencyName}
                    onChange={handleChange}
                    placeholder="Your organization"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">
                    Email Address
                    <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@agency.com"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="providerType">
                    Provider Type
                    <span>*</span>
                  </label>

                  <select
                    id="providerType"
                    name="providerType"
                    value={formData.providerType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
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

                    <option value="Frail Elderly Waiver">
                      Frail Elderly Waiver Provider
                    </option>

                    <option value="Physical Disabilities Waiver">
                      Physical Disabilities Waiver Provider
                    </option>

                    <option value="Residential or SLA">
                      Residential / SLA Provider
                    </option>

                    <option value="IDD">
                      IDD Provider
                    </option>

                    <option value="Multi-Service">
                      Multi-Service Agency
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="agencySize">
                    Agency Size
                  </label>

                  <select
                    id="agencySize"
                    name="agencySize"
                    value={formData.agencySize}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select agency size
                    </option>

                    <option value="1-25">
                      1–25 Staff
                    </option>

                    <option value="26-50">
                      26–50 Staff
                    </option>

                    <option value="51-100">
                      51–100 Staff
                    </option>

                    <option value="101-250">
                      101–250 Staff
                    </option>

                    <option value="250+">
                      250+ Staff
                    </option>
                  </select>
                </div>
              </div>

              <div className="contact-field contact-field--full">
                <label htmlFor="message">
                  What would you like help with?
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current EVV, billing, scheduling, payroll, authorization, or provider management needs..."
                  rows="6"
                ></textarea>
              </div>

              <label className="contact-checkbox">
                <input
                  type="checkbox"
                  name="legacyInterest"
                  checked={formData.legacyInterest}
                  onChange={handleChange}
                />

                <span className="contact-checkbox__box"></span>

                <span className="contact-checkbox__text">
                  I'm interested in learning more about the Nevada Legacy
                  Promotion.
                </span>
              </label>

         <button
  type="submit"
  className="contact-submit"
  disabled={isSending}
>
  {isSending ? (
    "Sending..."
  ) : (
    <>
      Claim My Legacy Spot
      <Send size={18} />
    </>
  )}
</button>
<p className="contact-form__note">
  By submitting this form, you agree to our{" "}
  <Link to="/privacy-policy">
    Privacy Policy
  </Link>{" "}
  and{" "}
  <Link to="/terms-of-use">
    Terms of Use
  </Link>{" "}
  and agree that a vTrack representative may contact you by
  phone or email regarding your request. Please do not submit
  protected health information through this form.
</p>
            </form>
          </div>

          <aside className="contact-sidebar">
            <div className="contact-sidebar__card">
              <div className="contact-sidebar__icon">
                <BadgeCheck size={25} />
              </div>

              <h3>Nevada Ready</h3>

              <p>
                vTrack is positioned to support Nevada provider agencies with
                connected EVV, billing, and operational workflows.
              </p>
            </div>

            <div className="contact-sidebar__card">
              <div className="contact-sidebar__icon">
                <Building2 size={25} />
              </div>

              <h3>Built for Providers</h3>

              <p>
                Personal care, home health, waiver, residential, IDD and
                multi-service agencies can use the parts of vTrack that fit
                their billing and operational needs.
              </p>
            </div>

            <div className="contact-sidebar__card">
              <div className="contact-sidebar__icon">
                <Users size={25} />
              </div>

              <h3>A Real Conversation</h3>

              <p>
                We'll learn about how your agency operates and explain how a
                implementation or business development team can help you
                claim the Legacy Promotion and get your agency started.
              </p>
            </div>

            <div className="contact-sidebar__card contact-sidebar__card--dark">
              <ShieldCheck size={28} />

              <span>THE VTRACK DIFFERENCE</span>

              <h3>
                One Partner for the Work Behind Your Agency.
              </h3>

              <p>
                EVV. Billing. Payroll. Scheduling. Authorizations. Recipients.
                Billing and payroll handled by your account manager.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-next">
        <div className="contact-next__container">
          <div className="contact-next__heading">
            <span>WHAT HAPPENS NEXT?</span>

            <h2>
              A Simple Conversation About
              <strong> Your Agency.</strong>
            </h2>
          </div>

          <div className="contact-next__steps">
            <div className="contact-next__step">
              <div>01</div>

              <Mail size={25} />

              <h3>Send Your Request</h3>

              <p>
                Tell us a little about your organization and what you're
                looking to improve.
              </p>
            </div>

            <ArrowRight
              className="contact-next__arrow"
              size={24}
            />

            <div className="contact-next__step">
              <div>02</div>

              <Users size={25} />

              <h3>Talk With Our Team</h3>

              <p>
                We'll learn about your current workflow, services, and
                operational needs.
              </p>
            </div>

            <ArrowRight
              className="contact-next__arrow"
              size={24}
            />

            <div className="contact-next__step">
              <div>03</div>

              <CalendarDays size={25} />

              <h3>See vTrack in Action</h3>

              <p>
                We'll walk through the parts of vTrack that matter most to
                your agency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
