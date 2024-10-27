import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
// import MusicPage from "@/components/music/music-main";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import AboutMe from "@/components/about-me";
import SoundcloudEmbed from "@/components/music/soundcloud-embed";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SoundcloudEmbed />
      {/* <MusicPage /> */}
      <AboutMe />
      {/* <Reviews /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}
