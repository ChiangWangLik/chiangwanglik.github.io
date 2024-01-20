import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        {/* <div className="footer-link-wrapper"> */}
          <div className="footer-link-items">
            <div className="footer-logo">
              <Link className="social-logo" to='/'>
                Edward <i className="fa-solid fa-seedling" />
              </Link>
            </div>
          </div>
          <div className="footer-link-items">
            <div className="footer-logo">
              <Link className="social-logo" to='mailto:21lysec@gmail.com' target='_blank'>
                Email <i className="fa-regular fa-envelope" />
              </Link>
            </div>
          </div>
          <div className="footer-link-items">
            <div className="footer-logo">
              <Link className='social-logo' to='https://www.linkedin.com/in/edward-chiang-488449290/' target='_blank' aria-label='LinkedIn'>
                LinkedIn <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        {/* </div> */}
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          {/* <div className="footer-logo">
            <Link className="social-logo">
              Edward <i className="fa-solid fa-seedling" />
            </Link>
          </div> */}
          <small className="website-rights">Edward © 2024</small>
          {/* <div className="social-icons">
            <Link className='social-icon-link twitter' to='https://www.linkedin.com/in/edward-chiang-488449290/' target='_blank' aria-label='LinkedIn'>
              <i className='fab fa-linkedin' /> LinkedIn
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Footer
