import { Check, Home, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import heroImg from "@/assets/hero-travel.jpg";

interface ConfirmationProps {
  onStartOver: () => void;
}

export const Confirmation = ({ onStartOver }: ConfirmationProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-ocean/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          {/* Success Icon */}
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-500">
              <Check className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-in slide-in-from-bottom duration-700">
            Your Journey Awaits!
          </h1>
          
          <p className="text-xl text-white/90 mb-8 animate-in slide-in-from-bottom duration-700 delay-100">
            Thank you for choosing VoyageFlow. Your travel experience has been successfully simulated.
            We'll be in touch soon with your itinerary details.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 animate-in slide-in-from-bottom duration-700 delay-200">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Mail className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Check Your Email</h3>
              <p className="text-white/80 text-sm">
                Confirmation sent to your inbox
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Phone className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">We'll Call You</h3>
              <p className="text-white/80 text-sm">
                Our travel experts will reach out
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Home className="h-8 w-8 text-white mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Plan More Trips</h3>
              <p className="text-white/80 text-sm">
                Explore more destinations with us
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-700 delay-300">
            <Button
              onClick={onStartOver}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Start New Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Download Itinerary
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              © 2024 VoyageFlow. Crafting unforgettable travel experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
