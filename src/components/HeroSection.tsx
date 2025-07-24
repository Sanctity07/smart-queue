
import React from 'react';
import { Clock, MapPin, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Skip the Line,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
              {" "}Save Your Time
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Book your spot in any queue remotely. Get real-time updates, estimated wait times, 
            and notifications when it's your turn. Never waste time standing in line again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onGetStarted}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-lg px-8 py-3"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-gray-300 hover:border-blue-500"
            >
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Get live queue status and accurate wait time estimates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location Discovery</h3>
              <p className="text-gray-600">Find nearby service points and compare queue lengths</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Notifications</h3>
              <p className="text-gray-600">Receive alerts when your turn approaches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
