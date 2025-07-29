"use client";

import React, { useEffect, useState } from "react";
import { MenuIcon, X as CloseIcon, Calendar, MapPin } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
    });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen w-full">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white/70 backdrop-blur-sm shadow-sm" : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-green-800">SØMA</h1>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <CloseIcon size={24} className={isScrolled ? "text-white" : ""} />
            ) : (
              <MenuIcon size={24} className={isScrolled ? "text-white" : ""} />
            )}
          </button>
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className={`transition-colors ${isScrolled ? "text-green-800 hover:text-green-600" : "hover:text-green-600"}`}>
              À propos
            </a>
            <a href="#values" className={`transition-colors ${isScrolled ? "text-green-800 hover:text-green-600" : "hover:text-green-600"}`}>
              Nos valeurs
            </a>
            <a href="#register" className={`transition-colors ${isScrolled ? "text-green-800 hover:text-green-600" : "hover:text-green-600"}`}>
              S&apos;inscrire
            </a>
            <a href="#contact" className={`transition-colors ${isScrolled ? "text-green-800 hover:text-green-600" : "hover:text-green-600"}`}>
              Contact
            </a>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 px-4 shadow-md ${isScrolled ? "bg-black/70 backdrop-blur-sm" : "bg-white"}`}>
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className={`transition-colors ${isScrolled ? "text-white hover:text-green-200" : "hover:text-green-600"}`}
                onClick={toggleMenu}
              >
                À propos
              </a>
              <a
                href="#values"
                className={`transition-colors ${isScrolled ? "text-white hover:text-green-200" : "hover:text-green-600"}`}
                onClick={toggleMenu}
              >
                Nos valeurs
              </a>
              <a
                href="#register"
                className={`transition-colors ${isScrolled ? "text-white hover:text-green-200" : "hover:text-green-600"}`}
                onClick={toggleMenu}
              >
                S&apos;inscrire
              </a>
              <a
                href="#contact"
                className={`transition-colors ${isScrolled ? "text-white hover:text-green-200" : "hover:text-green-600"}`}
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center h-screen flex items-center pt-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/70 backdrop-blur-xs p-8 md:p-12 rounded-lg max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Notre pop-up store ouvre demain à Paris</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">Découvrez notre collection de vêtements éco-responsables</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-lg">
                <Calendar className="text-green-800 w-6 h-6 mb-1" />
                <span>Demain, 12h00</span>
              </div>
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-lg">
                <MapPin className="text-green-800 w-6 h-6 mb-1" />
                <span>15 Rue de Rivoli, Paris</span>
              </div>
            </div>
            <a
              href="#register"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
            >
              S&apos;inscrire à l&apos;événement
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-beige-50 bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-green-800">Bienvenue chez SØMA</h2>
            <p className="text-lg mb-8">
              Notre marque de vêtements éco-responsables ouvre son premier pop-up store à Paris. Venez découvrir notre collection printemps-été
              fabriquée à partir de matériaux durables et éthiques. Rejoignez-nous pour célébrer la mode consciente et élégante.
            </p>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Collection de vêtements éco-responsables"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-green-800">Nos valeurs éco-responsables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Matériaux durables</h3>
              <p className="text-gray-700">Nous utilisons uniquement des matériaux biologiques, recyclés ou à faible impact environnemental.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Production éthique</h3>
              <p className="text-gray-700">
                Nous garantissons des conditions de travail équitables et une rémunération juste pour tous nos artisans.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Production locale</h3>
              <p className="text-gray-700">
                Nous privilégions les ateliers locaux pour réduire notre empreinte carbone et soutenir l&apos;économie locale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center text-green-800">Inscrivez-vous à notre événement</h2>
            {isFormSubmitted ? (
              <div className="text-center py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-green-600 mx-auto mb-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-medium text-gray-800 mb-2">Merci pour votre inscription!</p>
                <p className="text-gray-600">Nous avons hâte de vous accueillir demain à notre pop-up store.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Confirmer ma présence
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-4">SØMA</h3>
              <p className="max-w-xs">Mode éco-responsable et élégante pour un avenir plus durable.</p>
            </div>
            <div className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="mb-2">15 Rue de Rivoli, Paris</p>
              <p className="mb-2">contact@soma.com</p>
              <p>+33 1 23 45 67 89</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-200" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-green-200" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-green-200" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-700 text-center text-sm">
            <p>© 2023 SØMA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
