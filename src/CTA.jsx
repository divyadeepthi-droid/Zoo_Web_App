import {Link} from "react-router-dom";
function CTABanner() {
  return (
    <section className="cta-banner">
      <h2>Ready to step into the <em>wild?</em></h2>
      <p>Book your timed-entry tickets online and save 15% on gate prices.<br />Support our global conservation efforts today.</p>
      <div className="cta-buttons">
        <Link to="/TicketsPage" className="btn btn-green btn-lg">Book Tickets Now</Link>
        <a href="#" className="btn btn-outline btn-lg">View Membership</a>
      </div>
    </section>
  );
}

export default CTABanner;