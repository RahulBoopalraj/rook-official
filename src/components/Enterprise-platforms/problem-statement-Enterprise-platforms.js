"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const ServiceProblemStatement = () => {
  useEffect(() => {
    const serviceAreas = document.querySelectorAll(
      ".home4-services-area .services-hover"
    );

    // Function to toggle active class and slideToggle on mouse enter
    const handleMouseEnter = function () {
      this.classList.toggle("active");
      const serviceBottomWrap = this.querySelector(".service-bottom-wrap");
      if (serviceBottomWrap) {
        // Set display to block to reveal the element
        serviceBottomWrap.style.display = "block";
        // Smoothly adjust the height
        serviceBottomWrap.style.transition = "height 0.4s";
        serviceBottomWrap.style.height = serviceBottomWrap.scrollHeight + "px";
      }
    };

    // Function to slideUp and remove active class on mouse leave
    const handleMouseLeave = function () {
      const serviceBottomWrap = this.querySelector(".service-bottom-wrap");
      if (serviceBottomWrap) {
        // Smoothly transition the height back to zero
        serviceBottomWrap.style.height = "0";
        // Set display to none after the transition completes
        setTimeout(() => {
          serviceBottomWrap.style.display = "none";
        }, 100); // Adjust the timeout to match the transition duration
      }
      this.classList.remove("active");
    };

    // Attach mouseenter and mouseleave event listeners to each service area
    serviceAreas.forEach((serviceArea) => {
      serviceArea.addEventListener("mouseenter", handleMouseEnter);
      serviceArea.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      serviceAreas.forEach((serviceArea) => {
        serviceArea.removeEventListener("mouseenter", handleMouseEnter);
        serviceArea.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="home4-services-area">
      <div className="container-lg container-fluid">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex gap-2 flex-wrap align-items-end justify-content-between">
            <div className="section-title white text-animation">
              <div className="sub-title two mb-20">
                <h6>
                  Cases Studies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={6}
                    viewBox="0 0 50 6"
                  >
                    <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                  </svg>
                </h6>
              </div>
              <h2>
                Problem <br />
                <span>Statements</span>
              </h2>
            </div>
            <div className="paragraph text-animation">
              <p>
                At Rook, we provide insightful enterprise platform case studies
                and problem statements, showcasing real-world challenges and
                delivering effective, scalable solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-10 services-hover">
            <div className="services-card4">
              <div className="services-top">
                <div className="sl-number">
                  <h3>01.</h3>
                </div>
                <div className="services-wrapper">
                  <div className="title-tag">
                    <h3>
                      <Link href="/service-details">Client : Retail Chain</Link>
                    </h3>
                  </div>
                </div>
                <div className="details-btn-wrap">
                  <div className="details-btn">
                    <Link
                      className="primary-btn4 btn-hover"
                      href="/service-details"
                    >
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-bottom-wrap">
                <div className="services-btm">
                  <div className="span" />
                  <div className="paragraph-img">
                    <p>
                      <h3>
                        <strong>Problem :</strong>
                      </h3>{" "}
                      Inefficient SCM processes resulted in high inventory costs
                      and delayed product delivery.
                    </p>
                    <p>
                      <h3>
                        <strong>Solution :</strong>
                      </h3>{" "}
                      Rook implemented a tailored SCM solution that improved
                      visibility and coordination across the supply chain.
                    </p>
                    <p>
                      <h3>
                        <strong>Impact :</strong>
                      </h3>{" "}
                      The client achieved a 35% reduction in inventory costs and
                      a 25% improvement in delivery times.
                    </p>
                  </div>
                  <div className="span" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-10 services-hover">
            <div className="services-card4">
              <div className="services-top">
                <div className="sl-number">
                  <h3>02.</h3>
                </div>
                <div className="services-wrapper">
                  <div className="title-tag">
                    <h3>
                      <Link href="/service-details">
                        Client : Telecom Company
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="details-btn-wrap">
                  <div className="details-btn">
                    <Link
                      className="primary-btn4 btn-hover"
                      href="/service-details"
                    >
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-bottom-wrap">
                <div className="services-btm">
                  <div className="span" />
                  <div className="paragraph-img">
                    <p>
                      <h3>
                        <strong>Problem :</strong>
                      </h3>{" "}
                      Outdated CRM systems were causing delays in customer
                      service and impacting client satisfaction.
                    </p>
                    <p>
                      <h3>
                        <strong>Solution :</strong>
                      </h3>{" "}
                      Rook implemented a modern CRM solution with advanced
                      features for tracking interactions and managing
                      relationships.
                    </p>
                    <p>
                      <h3>
                        <strong>Impact :</strong>
                      </h3>{" "}
                      The client saw a 40% increase in customer service response
                      speed and a 30% improvement in customer satisfaction
                    </p>
                  </div>
                  <div className="span" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProblemStatement;
