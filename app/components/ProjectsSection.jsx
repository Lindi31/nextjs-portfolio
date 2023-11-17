"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Dies ist die aktuelle Website, auf der du dich befindest. Sie wurde mit React.JS/Next.JS sowie Firebase entwickelt. Diese Technologien ermöglichen es, eine hochmoderne und reaktionsschnelle Website zu erstellen. Darüber hinaus wurden verschiedene Animationsbibliotheken in die Website integriert, um visuelle Effekte und Benutzerinteraktionen zu verbessern. Dies trägt dazu bei, die Benutzererfahrung auf dieser Plattform zu optimieren und sie ansprechender zu gestalten.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/1.png",
  },
  {
    id: 2,
    title: "HRV-Analyse App",
    description: "Die App wurde im Rahmen meiner Bachelorarbeit entwickelt und nutzt einen Tech-Stack, der auf Dart und Flutter basiert, um plattformübergreifende mobile Anwendungen zu erstellen. Ihre Hauptfunktion besteht darin, die Herzfrequenzvariabilität (HRV) durch die Analyse von Kamerabildern zu messen. Kontinuierlich werden Fingerbewegungen vor der Kamera erfasst, die Rotfarbwerte der Bilder analysiert, Herzschläge erkannt und die HRV berechnet. Diese App stellt ein Ergebnis meiner Bachelorarbeit dar und ermöglicht Benutzern, ihre Herzgesundheit in Echtzeit zu überwachen.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/images/projects/2.png",
  },
  {
    id: 3,
    title: "Corona vs. Verkehr in Mannheim",
    description: "Das Projekt Corona vs. Verkehr in Mannheim habe ich zusammen mit einem Kommilitonen im Zuge des Moduls Grundlagen der Datenvisualisierung implementiert. Dabei nutzten wir eine Kombination aus JavaScript, HTML und CSS zur Erstellung einer interaktiven Webanwendung. Die Verkehrsdaten wurden vom MVV im CSV-Format auf GitHub bereitgestellt. Für die Datenvisualisierung kam die JavaScript-Bibliothek Chart.js zum Einsatz, um Diagramme zu generieren, und Leaflet.js für interaktive Kartendarstellungen. Die Webanwendung ermöglichte es, die Auswirkungen der COVID-19-Pandemie auf das Verkehrsaufkommen in Mannheim visuell zu analysieren und zu erforschen.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "VidaFun",
    description: "Im Zuge des Projektsemesters haben wir als Team von fünf Personen eine App entwickelt. Diese App basiert auf React Native, einem plattformübergreifenden Framework für mobile Anwendungen. Sie ermöglicht es Patienten im Rahmen eines Gamification-Konzepts, wichtige Gesundheitsdaten einzutragen, gezielte Übungen auszuführen und Benachrichtigungen zu erhalten. Zur Verwaltung der Daten haben wir MySQL als Datenbank verwendet und PHP für die serverseitige Logik integriert. Diese Technologiestack-Kombination ermöglichte uns, eine umfassende und benutzerfreundliche Gesundheitsanwendung zu erstellen.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/images/projects/4.png",
  },
  {
    id: 5,
    title: "My Finance Planner",
    description: "My Finance Planner ist eine effektive Finanzmanagement-App, die Ihre Finanzen verwaltet und Einsparungsmöglichkeiten bietet. Sie bietet eine benutzerfreundliche Oberfläche und hilfreiche Funktionen zur Erreichung Ihrer finanziellen Ziele. Anzeigen von Kontoständen, Einkommen und Ausgaben in einer klaren Übersicht, Budgets für verschiedene Kategorien festlegen und Spartipps erhalten. Die App ermöglicht das Setzen persönlicher finanzieller Ziele und die Verfolgung des Fortschritts. Entwickelt mit Flutter und Dart, nutzt sie das Provider-System zur Zustandsverwaltung.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/images/projects/5.png",
  },
  {
    id: 6,
    title: "GBS - mobile App",
    description: "In der von mir entwickelten Beauty-App, die mit Flutter und Dart erstellt wird und Firebase als Backend nutzt, wird die Kosmetikerin in der Lage sein, personalisierte Schönheitstipps zu veröffentlichen, Termine zu verwalten und einen eigenen Blog zu führen. Kunden werden bequem über die App Termine buchen können und Zugang zu einem Blog erhalten, der mit den neuesten Trends und Anleitungen im Beauty-Bereich aktualisiert wird. Diese App wird eine nahtlose und interaktive Benutzererfahrung bieten, unterstützt durch die leistungsstarken Echtzeit-Datenverarbeitungsfunktionen von Firebase.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/6.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meine Projekte
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;