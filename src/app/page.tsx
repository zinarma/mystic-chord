import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}
