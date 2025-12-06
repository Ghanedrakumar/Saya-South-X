
import React from "react";
import Soya_front_page from "../assets/Soya_front_page.webp";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import ProjectCardSection from "./ProjectCardSection.jsx";
import BrandsOpen from "./BrandsOpen.jsx";
import Footer from "./Footer.jsx";
import ProjectShowCase from "./ProjectShowCase";
// import Map from "./Map.jsx";
import { useNavigate } from "react-router-dom";
import south_X_video from '../assets/south_X_video.mp4'
import WhyInvest from "./WhyInvest.jsx";
import FacilitiesAmenities from "./FacilitiesAmenities.jsx";
import FloorPlansSection from "./FloorPlansSections.jsx";
import ProjectGalleryCarousel from "./ProjectGalleryCarousel.jsx";
import FloatingCTA from "./FloatingCTA.jsx";
import LatestNews from "./LatestNews.jsx";
import LocationAdvantage from "./LocationAdvantage.jsx";
import Testimonials from "./Testimonials.jsx";
import PricingList from "./PricingList.jsx";
function Home({
  title = "Enter the Greater Noida West’s new favourite destination for shopping, dining and lifestyle.",
  subtitle = "Beautiful living spaces designed for your comfort and style.",
}
) {

  const navigate = useNavigate();

  const handleBook = (e) => {
    e.preventDefault();
    navigate('/booksite');
  }




  return (
    <>
      <Navbar />
      <section
        className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden"
        aria-label="Hero section with Saya background"
      >
        {/* Background video */}
        <video
          src={south_X_video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* content wrapper */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] md:min-h-screen px-6 sm:px-8">
          <div className="w-full max-w-3xl text-center">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtB1X4gCAQJGgk7W0Keb9vuy6ZcD2iVHV7OA&s"
              alt="OC applied badge"
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4 shadow-lg"
              loading="lazy"
            />

            <h1
              className="text-white font-semibold leading-tight drop-shadow-lg"
              style={{ fontSize: "clamp(1.25rem, 4.2vw, 2.25rem)" }}
            >
              {title}
            </h1>

            <p className="mt-3 text-white/90 max-w-xl mx-auto text-sm sm:text-base md:text-lg drop-shadow-sm">
              {subtitle}
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <nav>
                <button
                  onClick={handleBook}
                  className="bg-amber-700 h-10 w-fit pl-2 pr-2 pt-1 pb-1 rounded-2xl shadow-amber-500 flex justify-center items-center hover:bg-amber-900"
                  aria-label="Book a Site Visit"
                >
                  <span className="inline-block px-4 py-2 bg-secondary text-white rounded-md shadow hover:opacity-95">
                    Book a Site Visit
                  </span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <HeroSection titleClass="text-3xl md:text-5xl font-bold text-indigo-700"
        paragraphClass="text-base md:text-xl text-gray-600 tracking-wide"
        imageClass="w-72 h-auto" />
      <WhyInvest />
      <FacilitiesAmenities />
      <FloorPlansSection />
      <ProjectGalleryCarousel />
      <PricingList />

      <FloatingCTA phone="+911234567890" brochure="https://doc.squareyards.com/ProjectKnowledge/Brochure_d7555bdbe5214e188a63b3f81e54add5.pdf" />
      <LatestNews limit={6} />
      <LocationAdvantage />
      <BrandsOpen />
      <ProjectShowCase />
      <ProjectCardSection />
      <Footer />
    </>
  );
}

export default Home;

