import React from 'react';
import { MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Locations = () => {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = React.useState(false);

  const locations = [
    {
      id: 1,
      city: "New York City",
      state: "NY",
      businesses: 245,
      avgWaitReduction: "85%",
      rating: 4.8,
      image: "photo-1496442226666-8d4d0e62e6e9",
      popularVenues: ["Central Park Medical", "Broadway Pharmacy", "Times Square DMV"]
    },
    {
      id: 2,
      city: "Los Angeles",
      state: "CA", 
      businesses: 189,
      avgWaitReduction: "78%",
      rating: 4.7,
      image: "photo-1444723121867-7a241cacace9",
      popularVenues: ["LAX Services", "Hollywood Health Center", "Beverly Hills Clinic"]
    },
    {
      id: 3,
      city: "Chicago",
      state: "IL",
      businesses: 156,
      avgWaitReduction: "82%",
      rating: 4.9,
      image: "photo-1477414348463-c0eb7f1359b6",
      popularVenues: ["Chicago Medical District", "O'Hare Services", "Millennium Park Visitor Center"]
    },
    {
      id: 4,
      city: "Miami",
      state: "FL",
      businesses: 112,
      avgWaitReduction: "76%",
      rating: 4.6,
      image: "photo-1506905925346-21bda4d32df4",
      popularVenues: ["South Beach Health", "Miami International Services", "Biscayne Medical"]
    },
    {
      id: 5,
      city: "Austin",
      state: "TX",
      businesses: 98,
      avgWaitReduction: "79%",
      rating: 4.8,
      image: "photo-1531218150217-54595bc2b934",
      popularVenues: ["Downtown Austin Clinic", "SXSW Services", "University Health Center"]
    },
    {
      id: 6,
      city: "Seattle",
      state: "WA",
      businesses: 87,
      avgWaitReduction: "84%",
      rating: 4.9,
      image: "photo-1445819985709-29ba5e30ff5a",
      popularVenues: ["Pike Place Medical", "Seattle Center Services", "Capitol Hill Clinic"]
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Available in <span className="text-teal-300">Major Cities</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            SmartQueue is revolutionizing wait times across the United States. 
            Find participating businesses in your city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-lg">
              <MapPin className="w-6 h-6 mr-2 text-teal-300" />
              <span className="font-medium">1,000+ Participating Businesses</span>
            </div>
            <div className="flex items-center text-lg">
              <Users className="w-6 h-6 mr-2 text-teal-300" />
              <span className="font-medium">500K+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're expanding rapidly! These cities currently have SmartQueue integration 
              with local businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={`https://images.unsplash.com/${location.image}?auto=format&fit=crop&w=400&h=300`}
                    alt={`${location.city}, ${location.state}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{location.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{location.city}, {location.state}</span>
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Businesses</span>
                      <div className="font-semibold text-lg">{location.businesses}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Wait Reduction</span>
                      <div className="font-semibold text-lg text-green-600">{location.avgWaitReduction}</div>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-gray-500 text-sm">Popular Venues:</span>
                    <ul className="mt-1 space-y-1">
                      {location.popularVenues.map((venue, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {venue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-teal-500">
                    View Queues
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Coming Soon to More Cities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {['Denver', 'Portland', 'Atlanta', 'Boston', 'Phoenix', 'San Diego', 'Nashville', 'Detroit', 'Orlando', 'Las Vegas', 'Philadelphia', 'San Francisco'].map((city) => (
              <div key={city} className="bg-gray-100 rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Don't see your city? We're expanding fast and would love to hear from you.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500">
            Request Your City
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;