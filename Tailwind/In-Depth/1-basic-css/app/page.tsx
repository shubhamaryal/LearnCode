import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="layout">
      <div className="layout-lines-container">
        <div className="left-line"></div>
        <div className="right-line"></div>
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="hero-img-container">
        <div className="horizontal-line"></div>
        <img src="/hero-ui-v6.webp" alt="image" className="hero-image" />
      </div>
    </div>
  );
}
