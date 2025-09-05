import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mission from "./components/Mission.jsx";
import Initiatives from "./components/Initiatives.jsx";
import Programs from "./components/Programs.jsx";
import ContactForm from "./components/ContactForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="mission" className="section-y">
          <Mission />
        </section>
        <section id="initiatives" className="section-y bg-gray-50">
          <Initiatives />
        </section>
        <section id="programs" className="section-y">
          <Programs />
        </section>
        <section id="register" className="section-y bg-gray-50">
          <RegistrationForm />
        </section>
        <section id="contact" className="section-y">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}