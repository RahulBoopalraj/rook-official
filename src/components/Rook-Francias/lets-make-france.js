import Footer3 from "@/components/Footer/Footer3";
import Breadcrumb from "@/components/common/Breadcrumb";
import Home3GallerySection from "@/components/gallery-section/home3-gallery-section";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Home3ServiceSection from "@/components/services-section/home3-service-section";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const LetsMakeTogetherPage = () => {
  return (
    <>
      <div className="contact-section mb-130 mt-130">
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="section-title text-animation">
                <h2>
                  Let's Make <strong>Something Great Together</strong>
                </h2>
                <div className="dash-and-paragraph">
                  <div className="dash" />
                  <div className="content-and-social">
                    <p>
                      Using the most innovative design approaches and latest
                      technologies, we'll create a website that truly represents
                      your brand and sets you apart from the competition. Let's
                      get started on your journey to success with Rook Français.
                    </p>
                    <Link
                      href="/contact"
                      className="primary-btn3 btn-hover mt-30"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <path d="M12.25 0.875C12.4821 0.875 12.7046 0.967187 12.8687 1.13128C13.0328 1.29538 13.125 1.51794 13.125 1.75V8.75C13.125 8.98206 13.0328 9.20462 12.8687 9.36872C12.7046 9.53281 12.4821 9.625 12.25 9.625H3.86225C3.39816 9.6251 2.95311 9.80954 2.625 10.1378L0.875 11.8878V1.75C0.875 1.51794 0.967187 1.29538 1.13128 1.13128C1.29538 0.967187 1.51794 0.875 1.75 0.875H12.25ZM1.75 0C1.28587 0 0.840752 0.184374 0.512563 0.512563C0.184374 0.840752 0 1.28587 0 1.75L0 12.9439C1.8388e-05 13.0304 0.0257185 13.1151 0.0738476 13.187C0.121977 13.259 0.190371 13.315 0.270374 13.3481C0.350378 13.3812 0.438393 13.3898 0.523282 13.3728C0.60817 13.3558 0.686114 13.314 0.74725 13.2528L3.24362 10.7564C3.40768 10.5923 3.6302 10.5 3.86225 10.5H12.25C12.7141 10.5 13.1592 10.3156 13.4874 9.98744C13.8156 9.65925 14 9.21413 14 8.75V1.75C14 1.28587 13.8156 0.840752 13.4874 0.512563C13.1592 0.184374 12.7141 0 12.25 0L1.75 0Z" />
                        <path d="M2.625 3.0625C2.625 2.94647 2.67109 2.83519 2.75314 2.75314C2.83519 2.67109 2.94647 2.625 3.0625 2.625H10.9375C11.0535 2.625 11.1648 2.67109 11.2469 2.75314C11.3289 2.83519 11.375 2.94647 11.375 3.0625C11.375 3.17853 11.3289 3.28981 11.2469 3.37186C11.1648 3.45391 11.0535 3.5 10.9375 3.5H3.0625C2.94647 3.5 2.83519 3.45391 2.75314 3.37186C2.67109 3.28981 2.625 3.17853 2.625 3.0625ZM2.625 5.25C2.625 5.13397 2.67109 5.02269 2.75314 4.94064C2.83519 4.85859 2.94647 4.8125 3.0625 4.8125H10.9375C11.0535 4.8125 11.1648 4.85859 11.2469 4.94064C11.3289 5.02269 11.375 5.13397 11.375 5.25C11.375 5.36603 11.3289 5.47731 11.2469 5.55936C11.1648 5.64141 11.0535 5.6875 10.9375 5.6875H3.0625C2.94647 5.6875 2.83519 5.64141 2.75314 5.55936C2.67109 5.47731 2.625 5.36603 2.625 5.25ZM2.625 7.4375C2.625 7.32147 2.67109 7.21019 2.75314 7.12814C2.83519 7.04609 2.94647 7 3.0625 7H7.4375C7.55353 7 7.66481 7.04609 7.74686 7.12814C7.82891 7.21019 7.875 7.32147 7.875 7.4375C7.875 7.55353 7.82891 7.66481 7.74686 7.74686C7.66481 7.82891 7.55353 7.875 7.4375 7.875H3.0625C2.94647 7.875 2.83519 7.82891 2.75314 7.74686C2.67109 7.66481 2.625 7.55353 2.625 7.4375Z" />
                      </svg>
                      Let’s Talk
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsMakeTogetherPage;
