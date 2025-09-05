import { Users, Briefcase, BookOpen, Info } from "lucide-react";

const Mission = () => {
  const bullets = [
    {
      title: "Access to Mentorship",
      body: "Connect with experienced mentors for career and skill guidance.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Career Development",
      body: "Programs that prepare students for internships and employment.",
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Inclusive Learning",
      body: "Opportunities for all backgrounds to learn and grow.",
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Timeline */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Anshumat Foundation is dedicated to creating social impact through
              knowledge sharing and mentorship. We facilitate learning
              experiences, career pathways, and community initiatives that uplift
              individuals.
            </p>

            <div className="relative mt-12 border-l-2 border-gray-200 pl-8 space-y-10">
              {bullets.map((b, idx) => (
                <div
                  key={idx}
                  className="relative bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
                >
                  <div className="absolute -left-9 top-6 flex items-center justify-center w-10 h-10 bg-white border-2 border-blue-500 rounded-full shadow">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{b.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Floating Card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-blue-600">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                <Info className="w-6 h-6 text-blue-600" /> Key Facts
              </h3>
              <ul className="mt-6 space-y-3 text-gray-700 text-base list-disc pl-6">
                <li>Section 8 registered non-profit</li>
                <li>Volunteer-driven initiatives</li>
                <li>Programs for students, interns, and early professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;



