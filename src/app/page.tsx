"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Coins, Leaf, MapPin, Recycle, Users } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import AnimatedGlobe from "@/components/LandingPage/AnimatedGlobe";
import ImpactCard from "@/components/LandingPage/ImpactCard";
import FeatureCard from "@/components/LandingPage/FeatureCard";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

type Props = {};

const page = ({}: Props) => {
  // TODO fetch impact data
  return (
    <div
      className={`container mx-5 px-4 py-16 ${poppins.className} flex flex-col space-y-12 items-center`}
    >
      <section className="text-center mb-20">
        <AnimatedGlobe />
        <h1 className="text-6xl font-bold mb-6 text-gray-800 tracking-tight">
          Waste <span className="text-green-600">Easy</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Join our community in making waste management more efficient and
          rewarding!
        </p>
        <div className="w-full flex flex-row justify-center gap-6">
          <Button
            onClick={() => console.log("clicked")}
            className="bg-white hover:bg-green-300 text-green border border-green-500 text-lg py-6 px-10 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Login
            <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          <Link href="/report">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-10 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
              Report Waste
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-12 bg-green-50 p-10 rounded-3xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800">
          Why Waste Easy?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Leaf}
            title="Eco-Friendly"
            description="Contribute to a cleaner environment by reporting and collecting waste."
          />
          <FeatureCard
            icon={Coins}
            title="Earn Rewards"
            description="Get tokens for your contributions to waste management efforts."
          />
          <FeatureCard
            icon={Users}
            title="Community-Driven"
            description="Be part of a growing community committed to sustainable practices."
          />
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-green-50 p-10 rounded-3xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-800">
          Our Impact
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <ImpactCard
            title="Waste Collected"
            value={"Waste collected"} // `${impactData.wasteCollected} kg`
            icon={Recycle}
          />
          <ImpactCard
            title="Reports Submitted"
            value={"Reports Submitted"} // impactData.reportsSubmitted.toString()
            icon={MapPin}
          />
          <ImpactCard
            title="Tokens Earned"
            value={"Coupons Earned"} // impactData.tokensEarned.toString()
            icon={Coins}
          />
          <ImpactCard
            title="CO2 Offset"
            value={"CO2 Offset"} // `${impactData.co2Offset} kg`
            icon={Leaf}
          />
        </div>
      </section>
    </div>
  );
};

export default page;
