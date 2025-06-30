import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cactus Hub",
    description: "Plataforma para gestão e visualização de conteúdo musical, usando filtros como humor, ano e álbum.",
    stack: ["React", "Spring Boot", "Spotify API", "PostgreSQL"],
    repo: "https://github.com/luizsabinosb/cactushub",
  },
  {
    title: "Elden Ring Front End",
    description: "Interface visual que exibe detalhes de chefes e locais do jogo Elden Ring com design interativo.",
    stack: ["React", "Tailwind", "Axios"],
    repo: "https://github.com/luizsabinosb/elden-ring-front",
  },
  {
    title: "Elden Ring Back End",
    description: "API REST para consultar dados do jogo Elden Ring, servindo conteúdo para o front-end.",
    stack: ["Spring Boot", "Java", "MySQL"],
    repo: "https://github.com/luizsabinosb/eldenring-bossz",
  },
  {
    title: "Bot Telegram Furia",
    description: "Bot para fãs de CS da FURIA com estatísticas, jogos e provocações de rivais.",
    stack: ["Python", "Telegram Bot API"],
    repo: "https://github.com/luizsabinosb/botFuriosoTelegram",
  },
  {
    title: "Body Vision",
    description: "Projeto de visão computacional para detecção de poses no fisiculturismo.",
    stack: ["Python", "MediaPipe", "OpenCV"],
    repo: "https://github.com/luizsabinosb/bodyVision",
  },
  {
    title: "Maze AI",
    description: "Simulador que usa IA para comparar caminhos em labirintos gerados automaticamente.",
    stack: ["Python", "Pygame", "BFS", "A*"],
    repo: "https://github.com/luizsabinosb/mazeai",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] text-white px-6 py-20 flex justify-center"
    >
      <div className="max-w-6xl w-full space-y-16">
        <h2 className="text-xl font-semibold text-white/80 border-b border-white/10 pb-2 tracking-wider">
          / projetos
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-4 space-y-3 shadow-md hover:shadow-lg transition border border-transparent hover:border-cyan-400"
            >
              <h4 className="text-lg font-semibold hover:underline underline-offset-4 decoration-cyan-400 transition">
                {proj.title}
              </h4>
              <p className="text-white/60 text-sm">{proj.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-cyan-400">
                {proj.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={proj.repo} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white hover:text-cyan-400 text-sm" />
                </a>
                {proj.repo && (
                  <a href={proj.repo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="text-white hover:text-cyan-400 text-sm" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
