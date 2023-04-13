import AboutUs from "@/components/aboutus";
import ConctactUs from "@/components/contactus";
import Footer from "@/components/footer";
import Masthead from "@/components/masthead";
import Skills from "@/components/skills";
import TrustedBy from "@/components/trustedby";
import Works from "@/components/works";

export default function Home() {
  return (
    <main>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
      <ConctactUs />
      <Footer />
    </main>
  )
}
