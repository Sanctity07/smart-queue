
import React from 'react';
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QueueData {
  id: string;
  name: string;
  category: string;
  address: string;
  currentQueue: number;
  estimatedWait: number;
  status: 'open' | 'busy' | 'closed';
  distance: string;
}

interface QueueCardProps {
  queue: QueueData;
  onBookSpot: (queueId: string) => void;
}

const QueueCard = ({ queue, onBookSpot }: QueueCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'busy': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Available';
      case 'busy': return 'Busy';
      case 'closed': return 'Closed';
      default: return 'Unknown';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">{queue.name}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">{queue.category}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(queue.status)}`}>
            {getStatusText(queue.status)}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="truncate">{queue.address}</span>
          <span className="ml-auto text-blue-600 font-medium">{queue.distance}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-gray-400 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Queue Length</p>
              <p className="font-semibold text-gray-900">{queue.currentQueue} people</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-gray-400 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Est. Wait</p>
              <p className="font-semibold text-gray-900">{queue.estimatedWait} min</p>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={() => onBookSpot(queue.id)}
          disabled={queue.status === 'closed'}
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 disabled:opacity-50"
        >
          Book Your Spot
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default QueueCard;
