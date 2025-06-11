import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] text-white py-20 px-6 min-h-screen flex justify-center items-center"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 text-justify">
        {/* Texto */}
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-xl font-semibold text-white/80 border-b border-white/10 pb-2 tracking-wider">
            / sobre mim
          </h2>

          <p className="text-white/70 leading-relaxed">
            Atualmente sou{" "}
            <strong className="text-white font-semibold">
              Estudante de Ciência da Computação
            </strong>{" "}
            na <strong className="text-white font-semibold">
              Pontifícia Universidade Católica de Goiás.
            </strong>{" "} Tenho grande interesse por{" "}
            <strong className="text-cyan-400 font-semibold">
              interfaces modernas, inteligência artificial
            </strong>{" "}
            e soluções práticas que geram impacto real.
          </p>

          <p className="text-white/70 leading-relaxed">
            Aqui estão algumas tecnologias com as quais tenho trabalhado:
          </p>

          {/* Lista de tecnologias */}
          <div className="grid grid-cols-2 gap-x-12 text-sm sm:text-base text-white/80">
            <ul className="space-y-1 list-disc list-inside marker:text-cyan-400">
              <li>Angular</li>
              <li>React.js</li>
              <li>JavaScript </li>
              <li>SQL</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside marker:text-cyan-400">
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>HTML + CSS</li>
            </ul>
          </div>

          <p className="text-white/70 leading-relaxed">
            Fora da área técnica, gosto de explorar ciência, jogar alguns games, criar projetos paralelos por diversão e pretendo criar conteúdo tech.
          </p>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/me.jpg"
            alt="Foto de Luiz"
            width={280}
            height={280}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;