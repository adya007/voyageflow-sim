import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import parisImg from "@/assets/paris.jpg";
import tokyoImg from "@/assets/tokyo.jpg";
import romeImg from "@/assets/rome.jpg";
import santoriniImg from "@/assets/santorini.jpg";
import baliImg from "@/assets/bali.jpg";

interface TravelBlogProps {
  onNext: () => void;
}

const destinations = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    image: parisImg,
    description: "The City of Light beckons with its iconic Eiffel Tower, world-class museums, and charming cafés. Experience the romance of strolling along the Seine, marvel at Notre-Dame's Gothic architecture, and indulge in exquisite French cuisine.",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    image: tokyoImg,
    description: "A mesmerizing blend of ultra-modern and traditional, Tokyo offers neon-lit streets, ancient temples, and culinary excellence. Witness the serenity of cherry blossoms in spring and immerse yourself in the unique culture.",
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    image: romeImg,
    description: "Walk through history in the Eternal City, where ancient ruins stand beside Renaissance masterpieces. The Colosseum, Vatican City, and Trevi Fountain await your discovery, alongside incredible Italian gelato.",
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    image: santoriniImg,
    description: "Perched on volcanic cliffs, Santorini's white-washed buildings and blue-domed churches create a postcard-perfect scene. Enjoy stunning sunsets, crystal-clear waters, and authentic Greek hospitality.",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    image: baliImg,
    description: "The Island of Gods offers lush rice terraces, ancient temples, and pristine beaches. Experience spiritual wellness, vibrant culture, and warm tropical paradise that will rejuvenate your soul.",
  },
];

export const TravelBlog = ({ onNext }: TravelBlogProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Destinations
            </h2>
            <div className="flex gap-4 overflow-x-auto">
              {destinations.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => scrollToSection(dest.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {dest.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Destination Sections */}
      <div className="container mx-auto px-6 py-12 space-y-24">
        {destinations.map((destination, index) => (
          <section
            key={destination.id}
            id={destination.id}
            className="scroll-mt-24"
          >
            <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm">{destination.country}</span>
                    </div>
                    <h3 className="text-3xl font-bold">{destination.name}</h3>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold">
                  Discover {destination.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Explore More
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Next Page Button */}
        <div className="text-center pt-12">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-hero hover:opacity-90 transition-opacity"
          >
            Plan Your Trip
          </Button>
        </div>
      </div>
    </div>
  );
};
