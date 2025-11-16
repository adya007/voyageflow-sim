import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import agraImg from "@/assets/agra.jpg";
import goaImg from "@/assets/goa.jpg";
import jaipurImg from "@/assets/jaipur.jpg";
import keralaImg from "@/assets/kerala.jpg";
import ladakhImg from "@/assets/ladakh.jpg";

interface TravelBlogProps {
  onNext: () => void;
}

const destinations = [
  {
    id: "agra",
    name: "Agra",
    country: "Uttar Pradesh",
    image: agraImg,
    description: "Home to the magnificent Taj Mahal, a UNESCO World Heritage Site and symbol of eternal love. Marvel at the white marble monument, explore the grand Agra Fort, and immerse yourself in Mughal history and architecture.",
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    image: goaImg,
    description: "India's beach paradise offers golden sands, vibrant nightlife, and Portuguese heritage. Experience water sports, explore spice plantations, visit historic churches, and savor fresh seafood in this tropical haven.",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    country: "Rajasthan",
    image: jaipurImg,
    description: "The Pink City enchants with majestic palaces, historic forts, and royal heritage. Discover the Hawa Mahal, Amber Fort, and City Palace. Shop for traditional handicrafts and experience authentic Rajasthani culture.",
  },
  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    image: keralaImg,
    description: "God's Own Country welcomes you with serene backwaters, lush hill stations, and Ayurvedic wellness. Cruise on traditional houseboats, explore tea plantations, witness Kathakali dance, and rejuvenate your soul.",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    country: "Jammu & Kashmir",
    image: ladakhImg,
    description: "A high-altitude desert of breathtaking beauty with snow-capped peaks and ancient monasteries. Experience adventure on mountain passes, witness crystal-clear lakes, and discover Buddhist culture in this mystical land.",
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
