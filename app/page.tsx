import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DemoBasket from "@/components/DemoBasket";
import Testimonials from "@/components/Testimonials";
import StockistForm from "@/components/StockistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUs />
        <DemoBasket />
        <Testimonials />
        <StockistForm />
      </main>
      <Footer />
    </>
  );
}
