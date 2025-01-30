import Image from "next/image";
import SingleFeature from "./SingleFeature";
import featuresDatachatbot from "./chatbotData";
import SectionTitle from "@/components/Common/SectionTitle";



const Chatbot = () => {
  return (
    <section
      id="features"
      className="scroll-mt-17 overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5"
    >
      <div className="mx-auto max-w-[1222px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Chabot Funktionen"
          title="Die Funktionen des Chatbots im Überblick"
          paragraph="Spezifische Informationen zu den Funktionen unseres Chatbots finden Sie hier."
        />

        <div className="relative">
          <div className="features-row-border absolute left-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:left-1/4 lg:block lg:-translate-x-1/3"></div>
          <div className="features-row-border absolute right-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:right-[8.3%] lg:block"></div>

          {/* <!--=== Features Row ===--> */}
          <div className="flex flex-wrap justify-center">
            {featuresDatachatbot.slice(0, 3).map((feature) => (
              <SingleFeature key={feature.id} featuresDatachatbot={feature} />
            ))}
          </div>

          <div className="features-row-border h-[1px] w-full"></div>

          {/* <!--=== Features Row ===--> */}
          <div className="flex flex-wrap justify-center">
            {featuresDatachatbot.slice(3).map((feature) => (
              <SingleFeature key={feature.id} featuresDatachatbot={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
