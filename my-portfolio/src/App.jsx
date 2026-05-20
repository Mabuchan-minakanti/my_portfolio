export default function ResumeWebsite() {
  const skills = [
    "Python",
    "C++",
    "SQL",
    "Machine Learning",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "MongoDB",
    "Git & GitHub",
  ];

  const experience = [
    {
      role: "Data Engineering Virtual Intern",
      company: "EduSkills",
      period: "July 2024 – Sept 2024",
      description:
        "Worked on data engineering concepts, analytics workflows, and practical industry-based learning tasks.",
    },
    {
      role: "Competitive Programmer",
      company: "LeetCode & HackerRank",
      period: "2023 – Present",
      description:
        "Solved 150+ DSA problems on LeetCode and achieved 3-Star ratings in C, C++, and Python on HackerRank.",
    },
  ];

  const projects = [
    {
      title: "Machine Learning Projects",
      description:
        "Built beginner-friendly machine learning models using Scikit-learn, Pandas, and NumPy for data analysis tasks.",
    },
    {
      title: "Data Visualization",
      description:
        "Created insightful charts and visualizations using Matplotlib and Tableau concepts.",
    },
    {
      title: "Web Development",
      description:
        "Developed responsive web pages and explored frontend technologies for user-friendly interfaces.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sky-400 uppercase tracking-[0.3em] text-sm mb-4">
            Resume Website
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-sky-400">Mabuchan Minakanti</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            A Computer Science and Data Science student passionate about machine learning, data analytics, and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
           <a
           href="/cv.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-2xl font-medium shadow-lg inline-block"
>
  View Resume
</a>
            <button className="border border-slate-700 hover:border-sky-400 transition px-6 py-3 rounded-2xl font-medium">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-[2rem] bg-gradient-to-br from-sky-500 to-indigo-600 shadow-2xl flex items-center justify-center text-7xl font-bold">
            MM
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            I am currently pursuing B.Tech in Computer Science and Engineering (Data Science) at Rajeev Gandhi Memorial College of Engineering and Technology with a CGPA of 8.17. I enjoy solving data-driven problems, building projects, and continuously improving my programming and analytical skills.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-sky-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-sky-400 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-semibold">{job.role}</h3>
                  <p className="text-sky-400">{job.company}</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0">
                  {job.period}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-slate-100 mb-6">
            Interested in internships, collaborations, or opportunities in Data Science and Software Development?
          </p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2026 Mabuchan Minakanti. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="https://www.linkedin.com/in/mabuchan-minakanti/" target="_blank"
  rel="noopener noreferrer" className="hover:text-sky-400 transition">
              LinkedIn
            </a>
            <a href="https://github.com/Mabuchan-minakanti" target="_blank"
  rel="noopener noreferrer" className="hover:text-sky-400 transition">
              GitHub
            </a>
            <a href="mailto:lallithaminakanti@gmail.com" className="hover:text-sky-400 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
