
export default function ContactForm() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                       bg-white text-gray-900 
                       focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                       bg-white text-gray-900 
                       focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                       bg-white text-gray-900 
                       focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg 
                       hover:bg-indigo-700 transition font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}




