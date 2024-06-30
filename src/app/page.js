import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Features from "./components/features";
import Testimonial from "./components/testimonial";
import CTA from "./components/CTA";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}
