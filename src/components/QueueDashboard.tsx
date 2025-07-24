
import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import QueueCard from './QueueCard';

const mockQueues = [
  {
    id: '1',
    name: 'Central Bank Branch',
    category: 'Banking',
    address: '123 Main Street, Downtown',
    currentQueue: 12,
    estimatedWait: 35,
    status: 'open' as const,
    distance: '0.5 km'
  },
  {
    id: '2',
    name: 'City Hospital Registration',
    category: 'Healthcare',
    address: '456 Health Avenue, Medical District',
    currentQueue: 28,
    estimatedWait: 85,
    status: 'busy' as const,
    distance: '1.2 km'
  },
  {
    id: '3',
    name: 'DMV License Center',
    category: 'Government',
    address: '789 Government Plaza, Civic Center',
    currentQueue: 45,
    estimatedWait: 120,
    status: 'busy' as const,
    distance: '2.1 km'
  },
  {
    id: '4',
    name: 'Post Office Central',
    category: 'Postal Service',
    address: '321 Postal Road, Downtown',
    currentQueue: 8,
    estimatedWait: 20,
    status: 'open' as const,
    distance: '0.8 km'
  },
  {
    id: '5',
    name: 'Tax Office Branch',
    category: 'Government',
    address: '654 Revenue Street, Business District',
    currentQueue: 0,
    estimatedWait: 0,
    status: 'closed' as const,
    distance: '1.5 km'
  },
  {
    id: '6',
    name: 'Medical Lab Services',
    category: 'Healthcare',
    address: '987 Lab Boulevard, Medical District',
    currentQueue: 15,
    estimatedWait: 45,
    status: 'open' as const,
    distance: '1.8 km'
  }
];

interface QueueDashboardProps {
  onBookSpot: (queueId: string) => void;
}

const QueueDashboard = ({ onBookSpot }: QueueDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Banking', 'Healthcare', 'Government', 'Postal Service'];

  const filteredQueues = mockQueues.filter(queue => {
    const matchesSearch = queue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         queue.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || queue.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="dashboard" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Queue Dashboard</h2>
          <p className="text-lg text-gray-600">Find and book your spot at nearby service locations</p>
        </div>

        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search locations, services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category === 'all' ? 'All Categories' : category}
              </Button>
            ))}
          </div>
          
          <Button variant="outline" className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Near Me
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQueues.map((queue) => (
            <QueueCard
              key={queue.id}
              queue={queue}
              onBookSpot={onBookSpot}
            />
          ))}
        </div>

        {filteredQueues.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">No locations found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default QueueDashboard;
