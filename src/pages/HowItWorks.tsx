import React from 'react';
import { Smartphone, Clock, CheckCircle, Users, MapPin, Bell, ArrowRight, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = React.useState(false);

  const steps = [
    {
      step: 1,
      title: "Find Your Queue",
      description: "Browse nearby businesses and see real-time wait times, queue lengths, and estimated service times.",
      icon: MapPin,
      details: ["Search by location or business type", "View live queue status", "Check estimated wait times"]
    },
    {
      step: 2,
      title: "Join Virtually",
      description: "Reserve your spot in line from anywhere. No need to physically wait in crowded spaces.",
      icon: Smartphone,
      details: ["Instant queue reservation", "Secure your position", "Continue with your day"]
    },
    {
      step: 3,
      title: "Get Notified",
      description: "Receive real-time updates about your queue position and when it's time to arrive.",
      icon: Bell,
      details: ["Live position updates", "Smart arrival notifications", "No more guessing games"]
    },
    {
      step: 4,
      title: "Skip the Wait",
      description: "Arrive just in time for your turn. Walk straight to the front when your number is called.",
      icon: CheckCircle,
      details: ["Perfect timing arrival", "Skip physical waiting", "Seamless service experience"]
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Average users save 2-3 hours per week by eliminating wait times.",
      stat: "3 hours",
      icon: Clock
    },
    {
      title: "Reduce Stress",
      description: "No more standing in lines or wondering how long you'll wait.",
      stat: "95%",
      icon: CheckCircle
    },
    {
      title: "Stay Flexible",
      description: "Change your plans while keeping your spot in line.",
      stat: "100%",
      icon: Smartphone
    }
  ];

  const useCases = [
    {
      title: "Medical Appointments",
      description: "Join the queue for walk-in clinics, urgent care, or specialist visits.",
      example: "Reserve your spot at the clinic while running errands nearby."
    },
    {
      title: "Government Services",
      description: "DMV, passport offices, and municipal services with SmartQueue integration.",
      example: "Get your driver's license renewed without the dreaded DMV wait."
    },
    {
      title: "Retail & Dining",
      description: "Popular restaurants, phone repair shops, and service centers.",
      example: "Join the queue at your favorite brunch spot while finishing your morning workout."
    },
    {
      title: "Professional Services",
      description: "Barber shops, salons, auto repair, and other appointment-based services.",
      example: "Get a haircut without disrupting your work schedule."
    }
  ];

  const handleAuthClick = () => {
    setIsAuthDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How <span className="text-teal-300">SmartQueue</span> Works
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Revolutionary queue management that saves time and eliminates the stress of waiting in line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Try It Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400"
                alt="Person using smartphone"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Queue Joined!</div>
                    <div className="text-sm text-gray-600">Position #3 - 15 min wait</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple. Smart. Seamless.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join millions who have revolutionized their waiting experience with SmartQueue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <ul className="space-y-2 text-sm text-gray-500">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why People Love SmartQueue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Situation
            </h2>
            <p className="text-xl text-gray-600">
              SmartQueue works with hundreds of business types across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 italic">"{useCase.example}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Skip the Wait?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of smart users who have already transformed their waiting experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Find Locations Near You
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;