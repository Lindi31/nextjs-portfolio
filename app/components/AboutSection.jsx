"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { AnimatePresence, motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter/Dart</li>
        <li>Java</li>
        <li>Android</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Ausbildung",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Hochschule Mannheim - Medizinische Informatik B.Sc.</li>
      </ul>
    ),
  },
  {
    title: "Software",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Tableau</li>
        <li>Microsoft Office</li>
        <li>Slack</li>
        <li>Figma</li>
        <li>IntelliJ IDEA</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -30, transition: { duration: 0.2 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
  };

  return (
    <section className="bg-[#181818] place-content-center place-self-center rounded border-1 border-gray-200 text-white py-8" id="about">
      <div className="container mx-auto px-4 md:grid md:grid-cols-2 gap-8 items-center">
        <div className="mb-6 md:mb-0 place-self-center">
          <Image src="/images/about-image.png" layout="responsive" width={600} height={600} />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4 place-self-center">Über Mich</h2> 
          <p className="text-base lg:text-lg mb-8">
          Ich bin ein Softwareentwickler, der keine Grenzen kennt – von knackigen Frontends bis zu robusten Backends, von Desktop-Apps bis zu mobilen Anwendungen. Mein Tech-Stack umfasst Java, Dart/Flutter für mobile Apps, JavaScript mit Node.js für skalierbare Web-Apps und React für dynamische UIs. Mit Python erwecke ich Backend-Prozesse zum Leben, SQL für Datenmanipulation ist unerlässlich. HTML und CSS sorgen für das visuelle Feintuning, während Git die Teamarbeit und den Code-Fluss sichert. Schnelles Lernen und Skill-Verfeinerung sind mein tägliches Programm, um innovative Softwarelösungen zu liefern.
          
          </p>
          <div className="flex flex-wrap border-b border-gray-600 mt-3 mb-3 place-content-center place-self-center">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <AnimatePresence mode='wait'>
            <motion.div
              key={tab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabVariants}
              className="tab-content mt-4"
              style={{ minHeight: '10rem' }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;