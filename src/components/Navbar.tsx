import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur px-8 py-4 flex justify-between items-center text-white">
      {/* Links à esquerda */}
      <nav className="flex gap-6 text-sm font-medium">
        <a href="#home" className="hover:text-cyan-400 transition">Luiz Sabino</a>
        <a href="#about" className="hover:text-cyan-400 transition">Sobre</a>
        <a href="#experience" className="hover:text-cyan-400 transition">Experiência</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projetos</a>
      </nav>

      {/* Ícones sociais à direita */}
      <div className="flex gap-4 text-white text-lg">
        <a href="mailto:devluizsabino@gmail.com" className="hover:text-cyan-400 transition" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/luizsabinosb" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/luizsabinosb/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
