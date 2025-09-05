
export default function Programs() {
  const programs = [
    {
      title: "Career Mentorship",
      description:
        "Guidance from industry professionals to help individuals navigate their career path.",
    },
    {
      title: "Workshops & Training",
      description:
        "Interactive sessions to upskill learners in technology, leadership, and communication.",
    },
    {
      title: "Scholarship Support",
      description:
        "Financial aid initiatives to support education and career development for underprivileged students.",
    },
  ];

  return (
    <section id="programs" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl transition bg-white dark:bg-gray-800 p-6"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                {program.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


