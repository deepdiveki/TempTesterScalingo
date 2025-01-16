import CallToAction from "@/components/CallToAction";
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import { integrations } from "../../../integrations.config";

export const metadata: Metadata = {
  title: "AI Tool - Next.js Template for AI Tools",
  description: "This is Home for AI Tool",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesList />
      <CallToAction />
    </>
  );
}
