import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa"

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#0a0a0a] text-white min-h-screen flex justify-center items-center px-4"
    >
      <div className="text-center w-full max-w-xl space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typewriter
            options={{
              autoStart: true,
              delay: 60,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Oi, <span style="color:#22d3ee">Luiz</span> aqui!')
                .start();
            }}
          />
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl text-white/80 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Eu desenvolvo coisas, às vezes.
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-white/70 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Sou um desenvolvedor de software com foco em criar soluções eficientes
          e centradas no usuário. Tenho interesse por produtos de alto impacto,
          interfaces modernas e aplicações com inteligência artificial. Busco
          sempre unir criatividade, lógica e tecnologia para gerar valor real.
        </motion.p>

        <motion.a
          href="mailto:devluizsabino@gmail.com"
          className="inline-flex items-center justify-center gap-2 mt-2 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-md hover:bg-cyan-400 hover:text-black transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <FaEnvelope className="text-sm" /> Diga oi!
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
