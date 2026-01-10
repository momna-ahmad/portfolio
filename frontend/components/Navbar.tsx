'use client';

export default function Navbar({ name }: { name: string }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg sm:text-xl font-bold">
            {name}
          </div>
          
          {/* Navigation Buttons - Always Visible */}
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-sm sm:text-base hover:text-gray-600 transition font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-sm sm:text-base hover:text-gray-600 transition font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm sm:text-base hover:text-gray-600 transition font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}