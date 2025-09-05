
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Anshumat Foundation. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#mission" className="hover:underline">Mission</a>
          <a href="#initiatives" className="hover:underline">Initiatives</a>
          <a href="#programs" className="hover:underline">Programs</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
