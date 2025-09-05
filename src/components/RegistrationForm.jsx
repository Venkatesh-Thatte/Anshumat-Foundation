
export default function RegistrationForm() {
  return (
    <section
  id="register"
  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16"
>
  <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
      Register with Us
    </h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg 
                   hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>

  );
}

