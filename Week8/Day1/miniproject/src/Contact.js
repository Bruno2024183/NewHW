import React from 'react';

const Contact = () => {
  return (
    <section className="contact bg-light py-5">
      <div className="container text-center">
        <h3>Contact us</h3>
        <p>Contact us and we will get back to you within 24 hours.</p>
        <p>
          <i className="fas fa-map-marker-alt"></i> Company Name
          <br />
          <i className="fas fa-phone"></i> +256 778 800 900
          <br />
          <i className="fas fa-envelope"></i> company.gmail.com
        </p>
        <form>
          <div className="form-group">
            <label>Contact</label>
            <input type="email" className="form-control" placeholder="email address" />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="comment" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-danger mt-3">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;