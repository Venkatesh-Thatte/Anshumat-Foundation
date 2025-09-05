import { Users, GraduationCap, Briefcase } from "lucide-react";

export default function Initiatives() {
  const items = [
    {
      title: "Community Workshops",
      body: "Hands-on sessions on web development, communication, and job readiness.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Mentor Circles",
      body: "Small group mentoring focused on projects and interview prep.",
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Career Clinics",
      body: "Resume reviews, mock interviews, and portfolio guidance.",
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 text-center bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900">Initiatives</h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        Our initiatives are designed to deliver practical skills and confidence
        through real-world learning.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.title}
            className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-gray-200 hover:scale-105 hover:shadow-xl transition"
          >
            <div className="flex justify-center">{i.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{i.title}</h3>
            <p className="mt-2 text-gray-700">{i.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}




