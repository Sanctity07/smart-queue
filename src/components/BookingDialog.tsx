
import React, { useState } from 'react';
import { X, Clock, Users, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  queueId: string | null;
}

const BookingDialog = ({ isOpen, onClose, queueId }: BookingDialogProps) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });

  // Mock queue data - in real app, this would come from props or API
  const queueData = {
    name: 'Central Bank Branch',
    address: '123 Main Street, Downtown',
    currentQueue: 12,
    estimatedWait: 35,
    yourPosition: 13
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    setBookingData({ name: '', phone: '', email: '', service: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">Book Your Spot</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{queueData.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {queueData.address}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {queueData.currentQueue} people in queue
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Estimated wait: {queueData.estimatedWait} minutes
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={bookingData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Required</Label>
                  <Input
                    id="service"
                    type="text"
                    value={bookingData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    placeholder="e.g., Account opening, Loan inquiry"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500">
                    Book Spot
                  </Button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center">Booking Confirmed!</DialogTitle>
            </DialogHeader>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Your Queue Position</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">#{queueData.yourPosition}</div>
                  <p className="text-sm text-gray-600">You'll be notified when it's your turn</p>
                </div>
                
                <div className="text-left space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{queueData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated wait:</span>
                    <span className="font-medium">{queueData.estimatedWait + 5} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contact:</span>
                    <span className="font-medium">{bookingData.phone}</span>
                  </div>
                </div>
              </div>
              
              <Button onClick={handleClose} className="w-full bg-gradient-to-r from-blue-500 to-teal-500">
                Done
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
