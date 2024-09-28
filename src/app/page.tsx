import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MusicPage from "@/components/music/music-main";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MusicPage />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}
