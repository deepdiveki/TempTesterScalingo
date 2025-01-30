import AboutSection from "@/components/About/AboutSection";
import Team from "@/components/About/Team";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Home/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | DeepDive KI ToolBox und KI Fortbildungen",
  description: "Impressum der DeepDive KI ToolBox und KI Fortbildungen",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Impressum" />
      <section className="p-6 md:p-12">
        <div className="max-w-4xl mx-auto text-lg space-y-6">
          <h1 className="text-2xl font-bold">Impressum</h1>

          <h2 className="text-xl font-semibold">Hauptsitz</h2>
          <p>
            DeepDiveKi UG (haftungsbeschränkt) <br />
            Eppendorfer Landstraße 55 <br />
            20249 Hamburg <br />
            <a href="https://www.deepdive-ki.de" className="text-blue-500 underline">www.deepdive-ki.de</a>
          </p>

          <h2 className="text-xl font-semibold">Vertreten durch</h2>
          <p>
            Björn Isenbiel (Geschäftsführender Gesellschafter) <br />
            Tim Philipp (Geschäftsführender Gesellschafter)
          </p>

          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:info@deepdive-ki.de" className="text-blue-500 underline">info@deepdive-ki.de</a>
          </p>

          <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt</h2>
          <p>
            Björn Isenbiel, Tim Philipp <br />
            Eppendorfer Landstraße 55 <br />
            20249 Hamburg
          </p>

          <h2 className="text-xl font-semibold">Registereintrag</h2>
          <p>
            Registergericht: Hamburg <br />
            Registernummer: HRB 189193
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;