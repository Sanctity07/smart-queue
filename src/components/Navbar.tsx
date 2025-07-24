
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onAuthClick: () => void;
}

const Navbar = ({ onAuthClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">SmartQueue</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Dashboard
              </Link>
              <Link to="/locations" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Locations
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How it Works
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button onClick={onAuthClick} className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
                Dashboard
              </Link>
              <Link to="/locations" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
                Locations
              </Link>
              <Link to="/how-it-works" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
                How it Works
              </Link>
              <Button onClick={onAuthClick} className="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
