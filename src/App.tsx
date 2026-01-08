import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function App() {
  return (
    <section className="h-screen bg-black flex items-center pt-16">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-8">
          <img
            src="https://17worsb7dw.ucarecd.net/cea206be-5cd8-4fcf-9853-abb4f99318ff/-/preview/971x1000"
            alt="Ammar Ismail Khocan"
            className="h-36 w-36 rounded-full object-cover border-4 border-white/10"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Ammar Ismail Khocan
        </h1>

        <p className="text-lg text-gray-300 mb-6">A passionate Web Developer</p>

        <p className="max-w-xl text-gray-400 leading-relaxed mb-8">
          I'm a curious learner who enjoys building meaningful things on the
          website combining creativity, logic, and continuous growth in every
          project I do.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
