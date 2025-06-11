import { useState, useEffect } from "react";
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
      "Auxílio a clientes no processo de emissão, configuração e soluções relacionadas à certificação digital, com desenvolvimento de habilidades em comunicação, empatia, resolução de problemas e trabalho em equipe.",
      "Colaboração no aumento do rendimento geral da equipe, ficando entre os 10 melhores colaboradores todos os meses e entre os 4 melhores a partir do terceiro mês.",
      "Aplicação de habilidades técnicas combinadas com comunicação assertiva para solução eficaz de problemas no setor de tecnologia.",
      "Melhoria na capacidade de lidar com altas demandas e aumento da resiliência emocional, com atendimento simultâneo de até 8 clientes e média de 72 atendimentos diários.",
    ],
  },
  {
    company: "RadicalX",
    role: "Product Development Pro Team Member",
    period: "Jan 2023 - Fev 2023",
    details: [
      "Produção de novos formatos para a UI do produto da equipe, gerando experiencia e conhecimento no desenvolvimento e design da Interface de usuário.",
      "Colaboração com ideias e produtos para novas funcionalidades da empresa, gerando melhorias no produto da equipe.",
      "Desenvolver a User Interface e implementar conceitos de User Experience e obter novos aprendizados e estratégias sobre desenvolvimento Front-End à partir de visões internacionais",
    ],
  },
  {
    company: "PM RUN (Grupo ITSS)",
    role: "Software Testing Intern",
    period: "Out 2022 - Abr 2023",
    details: [
      "Desenvolvimento de diversos algoritmos de automação de testes usando Robot Framework + Selenium e conceitos de HTML + CSS para ajudar nos variados testes de qualidade de produto da equipe.",
      "Redução 90% das falhas nas páginas tanto na versão web como também na versão Mobile do produto.",
      "Aprendizado sobre como usar linguagens de automação e como combiná-las com conceitos de HTML e CSS colaboram para criar testes automatizados cada vez mais eficazes para ter um produto eficiente.",
      "Aplicação conceitos de gestão de tempo, o que me ajudou a obter melhores desempenhos e qualidades de entrega em diferentes prazos.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] text-white px-6 py-20 h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-xl font-semibold text-white/80 border-b border-white/10 pb-2 tracking-wider mb-10">
          / experiência
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Lista de empresas */}
          <ul className="flex md:flex-col gap-4 md:gap-2 text-sm font-medium w-full md:w-1/4">
            {experiences.map((exp, index) => (
              <li key={exp.company}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-4 py-2 border-l-2 ${
                    index === activeIndex
                      ? "border-cyan-400 text-white"
                      : "border-transparent text-white/50 hover:text-cyan-400"
                  } transition-all`}
                >
                  {exp.company}
                </button>
              </li>
            ))}
          </ul>

          {/* Conteúdo com fade-in */}
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
                  {active.role}{" "}
                  <span className="text-cyan-400">@ {active.company}</span>
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
