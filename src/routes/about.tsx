export default function About() {
  return (
    <section className="min-h-screen bg-black pt-24 text-white">
      {/* wrapper: SAMA seperti navbar */}
      <div className="mx-auto max-w-5xl px-5">
        {/* isi about */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* kiri: foto */}
          <div>
            <img
              src="https://17worsb7dw.ucarecd.net/cea206be-5cd8-4fcf-9853-abb4f99318ff/-/preview/971x1000"
              alt="Ammar Ismail Khocan"
              className="w-[320px] rounded-2xl bg-white"
            />
          </div>

          {/* kanan: teks */}
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Hi, I'm Ammar Ismail Khocan. I started my journey as a web
              developer with a strong passion for building modern web
              applications using React and JavaScript.
            </p>

            <p>
              Currently, I'm focused on improving my skills in both frontend and
              backend development. In the past, I've worked on various projects
              that have helped me grow as a full-stack developer.
            </p>

            <p>
              I enjoy clean user interfaces, solving real-world problems through
              code, and working on side projects.
            </p>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* ===== TECH STACK ===== */}
        <div className="mt-32 text-center">
          <h2 className="text-2xl font-bold mb-10">My Tech Stacks</h2>

          <div className="flex flex-wrap justify-center gap-10 items-center">
            <img src="/tech/html.svg" alt="HTML" className="h-14" />
            <img src="/tech/css.svg" alt="CSS" className="h-14" />
            <img src="/tech/js.svg" alt="JavaScript" className="h-14" />
            <img src="/tech/figma.svg" alt="Figma" className="h-14" />
            <img src="/tech/node.svg" alt="NodeJS" className="h-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
