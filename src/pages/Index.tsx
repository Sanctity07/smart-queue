
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QueueDashboard from '@/components/QueueDashboard';
import BookingDialog from '@/components/BookingDialog';
import AuthDialog from '@/components/AuthDialog';
import Footer from '@/components/Footer';

const Index = () => {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [selectedQueueId, setSelectedQueueId] = useState<string | null>(null);

  const handleAuthClick = () => {
    setIsAuthDialogOpen(true);
  };

  const handleGetStarted = () => {
    setIsAuthDialogOpen(true);
  };

  const handleBookSpot = (queueId: string) => {
    setSelectedQueueId(queueId);
    setIsBookingDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onAuthClick={handleAuthClick} />
      <HeroSection onGetStarted={handleGetStarted} />
      <QueueDashboard onBookSpot={handleBookSpot} />
      <Footer />
      
      <AuthDialog 
        isOpen={isAuthDialogOpen} 
        onClose={() => setIsAuthDialogOpen(false)} 
      />
      
      <BookingDialog 
        isOpen={isBookingDialogOpen} 
        onClose={() => setIsBookingDialogOpen(false)}
        queueId={selectedQueueId}
      />
    </div>
  );
};

export default Index;
