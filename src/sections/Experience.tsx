import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  details: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Milky Moo Franchising",
    role: "Estagiário de Tecnologia e Inovação",
    period: "Fev 2025 - Abr 2025",
    details: [
      "Desenvolvi e Gerenciei o Banco de dados da empresa, trazendo organização tecnológica para a corporação.",
      "Gestão de ativos da empresa. Sendo os ativos: Computadores, notebooks, periféricos e afins.",
      "Realizei uma organização estratégica das tecnologias da empresa para garantir conformidade com as Leis Gerais de Proteção de Dados (LGPD).",
    ],
  },
  {
    company: "Soluti Digital",
    role: "Estagiário de Suporte B2C",
    period: "Jul 2024 - Jan 2025",
    details: [
      "Auxílio a clientes no processo de emissão, configuração e soluções relacionadas à certificação digital.",
      "Colaboração no aumento do rendimento geral da equipe.",
      "Aplicação de habilidades técnicas com comunicação assertiva para solução eficaz de problemas.",
      "Atendimento simultâneo de até 8 clientes e média de 72 atendimentos diários.",
    ],
  },
  {
    company: "RadicalX",
    role: "Product Development Pro Team Member",
    period: "Jan 2023 - Fev 2023",
    details: [
      "Produção de novos formatos para a UI do produto.",
      "Colaboração com ideias para novas funcionalidades.",
      "Implementação de conceitos de UX e aprendizado em front-end internacional.",
    ],
  },
  {
    company: "PM RUN (Grupo ITSS)",
    role: "Software Testing Intern",
    period: "Out 2022 - Abr 2023",
    details: [
      "Automação de testes com Robot Framework e Selenium.",
      "Redução de 90% das falhas em versões Web e Mobile.",
      "Desenvolvimento de testes eficazes com HTML/CSS.",
      "Melhoria na gestão de tempo e entregas em prazos distintos.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] text-white px-6 py-20 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-xl font-semibold text-white/80 border-b border-white/10 pb-2 tracking-wider mb-10">
          / experiência
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Lista de empresas como 00. 01. 02. no mobile */}
          <ul className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 text-sm font-medium w-full md:w-1/4 whitespace-nowrap md:whitespace-normal">
            {experiences.map((_, index) => (
              <li key={index} className="flex-shrink-0 md:flex-shrink">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-4 py-2 border-l-2 ${
                    index === activeIndex
                      ? "border-cyan-400 text-white"
                      : "border-transparent text-white/50 hover:text-cyan-400"
                  } transition-all`}
                >
                  {index.toString().padStart(2, "0")}.
                </button>
              </li>
            ))}
          </ul>

          {/* Conteúdo */}
          <div className="w-full md:w-3/4 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">
                  {active.role} <span className="text-cyan-400">@ {active.company}</span>
                </h3>
                <p className="text-white/60 text-sm">{active.period}</p>
                <ul className="list-disc pl-6 space-y-2 text-white/80 text-sm">
                  {active.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
