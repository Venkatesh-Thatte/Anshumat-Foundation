
export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6 text-brand-700">
        Empowering Through Knowledge & Mentorship
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Join Anshumat Foundation in shaping brighter futures with impactful initiatives.
      </p>

      {/* ✅ Use base + variant */}
      <div className="flex justify-center gap-4">
        <a href="#register" className="btn btn-primary">
          Become a Member
        </a>
        <a href="#mission" className="btn btn-outline">
          Our Mission
        </a>
      </div>
    </section>
  );
}
