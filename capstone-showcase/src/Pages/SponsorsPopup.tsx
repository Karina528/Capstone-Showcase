// src/Pages/SponsorsPopup.tsx
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link"; // OR use a <a href> tag if not using Next.js

const SponsorsPopup: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <Header />
      <section className="bg-gradient-to-r from-[#8C1D40] to-[#620E2B] text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Sponsors</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Support innovation and help shape the next generation of tech leaders by sponsoring a capstone project!
          </p>
        </div>
      </section>
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Replace the content here with simplified dummy content if desired */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#8C1D40]">
              Submit a Project Proposal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Interested in sponsoring a capstone project?</p>
            <Button>Submit a Project Proposal</Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorsPopup;
