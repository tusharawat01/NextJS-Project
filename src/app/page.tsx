import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection"
import TestimonialCards from "@/components/TestimonialCards";
import Webiners from "@/components/Webiners";
import WelcomePage from "@/components/WelcomePage";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <WelcomePage />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <Webiners />
      <Instructors />
      <Footer />
    </main>

  );
}
