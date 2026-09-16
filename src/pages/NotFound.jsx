import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import SEO from "../components/SEO";

import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <SEO
        title="Page Not Found | vTrack Nevada"
        description="The requested vTrack Nevada page could not be found."
        path="/404"
      />

      <div className="not-found__content">
        <span>404</span>

        <h1>Looks Like This Page Got Lost.</h1>

        <p>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;