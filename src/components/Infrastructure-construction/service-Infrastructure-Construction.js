"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HomeworkSection = () => {
  useEffect(() => {
    // Ensure ScrollTrigger is activated
    gsap.registerPlugin(ScrollTrigger);

    // Animation timeline
    const scScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-sec-title",
        start: "top center",
        endTrigger: ".scroll-sec-title-end",
        end: "bottom top",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
      },
    });

    // Scroll animation
    scScrollTl.to(".scroll-sec-title", {
      y: 1500,
      duration: 10,
      opacity: 0,
    });
  }, []);
  return (
    <>
      <div className="work-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-2 scroll-sec-title text-center mb-60">
                <h2>
                  Our Services
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <g>
                      <path d="M50 20.7692H35.2015L45.6777 10.293L39.6703 4.32234L29.2308 14.7985V0H20.7692V14.7985L10.293 4.32234L4.32234 10.293L14.7985 20.7692H0V29.2308H14.7985L4.32234 39.6703L10.293 45.6777L20.7692 35.2015V50H29.2308V35.2015L39.6703 45.6777L45.6777 39.6703L35.2015 29.2308H50V20.7692Z" />
                    </g>
                  </svg>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb-80">
            <div className="col-lg-12">
              <div className="row mb-80 g-lg-0 gy-5 justify-content-between ">
                <div className="col-lg-5">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img
                        src="assets/img/Industries_Infrastructure_Construction/service-1.jpeg"
                        alt=""
                        style={{ height: "490px" }}
                      />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-details">
                            Design and Engineering
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-manonery"> Innovation</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">Precision</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">
                              Sustainability
                            </Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-details" className="active">
                            <span>View Details</span>{" "}
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img
                        src="assets/img/Industries_Infrastructure_Construction/service-2.jpeg"
                        alt=""
                        style={{ height: "490px" }}
                      />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-details">
                            Project Management
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-manonery">Planning</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">Execution</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">Oversight</Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-details" className="active">
                            <span>View Details</span>{" "}
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-80 g-lg-0 gy-5 justify-content-between">
                <div className="col-lg-12">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img
                        src="assets/img/Industries_Infrastructure_Construction/service-3.jpg"
                        alt=""
                        style={{ height: "300px", width: "100%" }}
                      />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-details">
                            Urban Planning and Development
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-manonery">Strategy</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">Growth</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">
                              Sustainability
                            </Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-details" className="active">
                            <span>View Details</span>
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row  g-lg-0 gy-5 justify-content-between">
                <div className="col-lg-6">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img
                        src="assets/img/Industries_Infrastructure_Construction/service-4.jpeg"
                        alt=""
                        style={{ height: "490px" }}
                      />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-details">
                            Consulting and Advisory Services
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-manonery">Expertise</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">Guidance</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">Solutions</Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-details" className="active">
                            <span>View Details</span>{" "}
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img
                        src="assets/img/Industries_Infrastructure_Construction/service-5.jpeg"
                        alt=""
                        style={{ height: "490px" }}
                      />
                    </div>
                    <div className="work-content">
                      <div className="content-wrap">
                        <h5>
                          <Link href="/portfolio-details">
                            Asset Management
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href="/portfolio-manonery">Optimization</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">Maintenance</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">Value</Link>
                          </li>
                        </ul>
                        <div className="view-details-wrap">
                          <Link href="/portfolio-details" className="active">
                            <span>View Details</span>{" "}
                            <span>
                              <i className="bi bi-plus" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap text-animation">
              <div className="section-title scroll-sec-title-end">
                <h2>
                  Our Services
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <g>
                      <path d="M50 20.7692H35.2015L45.6777 10.293L39.6703 4.32234L29.2308 14.7985V0H20.7692V14.7985L10.293 4.32234L4.32234 10.293L14.7985 20.7692H0V29.2308H14.7985L4.32234 39.6703L10.293 45.6777L20.7692 35.2015V50H29.2308V35.2015L39.6703 45.6777L45.6777 39.6703L35.2015 29.2308H50V20.7692Z" />
                    </g>
                  </svg>
                </h2>
                <p>
                  Rook’s gaming and media services deliver immersive experiences
                  with interactive gaming, advanced video tech, and AR/VR
                  innovation.
                </p>
              </div>
              <div className="btn_wrapper">
                <Link
                  className="circle-btn btn-hover"
                  href="portfolio-manonery"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Explore <strong>Now</strong>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slider-section">
        <div className="marquee">
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              DIGITAL PRODUCT
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              DIGITAL STUDIO
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              EMAIL MARKETING
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              EMAIL MARKETING
            </span>
          </div>
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              DIGITAL PRODUCT
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              DIGITAL STUDIO
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              EMAIL MARKETING
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              EMAIL MARKETING
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeworkSection;
