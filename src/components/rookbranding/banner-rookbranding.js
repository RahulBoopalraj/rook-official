import Link from 'next/link'
import React from 'react'

const Home4BannerSection = () => {
  return (
    <div 
      className="home4-banner-area" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("assets/img/rook branding/banner.jpg")',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container-lg container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-12">
            <div className="banner-content">
              <ul>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Shape</a></li>
                <li><a href="#">Become the Brand</a></li>
              </ul>
              <h1 className="text-animation">Build your <br /> <span>Brand.</span></h1>
              <div className="row justify-content-end">
                <div className="col-lg-6">
                  <div className="banner-bottom-content">
                    <p>We're here to create a brand identity that reflects your vision, guiding your journey with expertise and creativity every step of the way.</p>
                    <Link className="primary-btn4 btn-hover" href="/contact">
                      Let’s Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                      <span style={{ top: '50.5px', left: '83.75px' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home4BannerSection
