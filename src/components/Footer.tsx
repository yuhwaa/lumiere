import React from 'react';

export function Footer() {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 Main St, City, State ZIP<br />
              <i className="fas fa-phone"></i> (123) 456-7890<br />
              <i className="fas fa-envelope"></i> info@example.com
            </p>
          </div>
          <div className="col-md-3">
            <h5>Hours</h5>
            <p>Mon-Fri: 9:00 AM - 6:00 PM<br />Sat-Sun: Closed</p>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#" className="text-light"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-light"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Subscribe to Our Newsletter</h5>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-center">&copy; 2023 Your Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

