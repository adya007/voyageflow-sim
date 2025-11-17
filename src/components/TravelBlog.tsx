import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Button } from "./ui/button";
import { CustomModal } from "./CustomModal";
import { Input } from "./ui/input";
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
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    bestTime: "October to March",
    activities: ["Monument Tours", "Photography", "Heritage Walks", "Shopping"]
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    image: goaImg,
    description: "India's beach paradise offers golden sands, vibrant nightlife, and Portuguese heritage. Experience water sports, explore spice plantations, visit historic churches, and savor fresh seafood in this tropical haven.",
    highlights: ["Beaches", "Water Sports", "Spice Plantations", "Churches"],
    bestTime: "November to February",
    activities: ["Beach Hopping", "Water Sports", "Nightlife", "Food Tours"]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    country: "Rajasthan",
    image: jaipurImg,
    description: "The Pink City enchants with majestic palaces, historic forts, and royal heritage. Discover the Hawa Mahal, Amber Fort, and City Palace. Shop for traditional handicrafts and experience authentic Rajasthani culture.",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"],
    bestTime: "November to February",
    activities: ["Fort Tours", "Shopping", "Cultural Shows", "Food Walks"]
  },
  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    image: keralaImg,
    description: "God's Own Country welcomes you with serene backwaters, lush hill stations, and Ayurvedic wellness. Cruise on traditional houseboats, explore tea plantations, witness Kathakali dance, and rejuvenate your soul.",
    highlights: ["Backwaters", "Houseboats", "Tea Plantations", "Ayurveda"],
    bestTime: "September to March",
    activities: ["Houseboat Cruises", "Tea Tours", "Ayurvedic Spa", "Wildlife"]
  },
  {
    id: "ladakh",
    name: "Ladakh",
    country: "Jammu & Kashmir",
    image: ladakhImg,
    description: "A high-altitude desert of breathtaking beauty with snow-capped peaks and ancient monasteries. Experience adventure on mountain passes, witness crystal-clear lakes, and discover Buddhist culture in this mystical land.",
    highlights: ["Pangong Lake", "Nubra Valley", "Monasteries", "Mountain Passes"],
    bestTime: "May to September",
    activities: ["Trekking", "Motorbiking", "Monastery Tours", "Photography"]
  },
];

export const TravelBlog = ({ onNext }: TravelBlogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExploreMore = (destination: typeof destinations[0]) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  const handlePlanTrip = () => {
    setShowModal(false);
    onNext();
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h2 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Destinations
            </h2>
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>

            {/* Destination Links */}
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
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No destinations found matching "{searchQuery}"</p>
          </div>
        ) : (
          filteredDestinations.map((destination, index) => (
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
                <div className="pt-4 flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleExploreMore(destination)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Explore More
                  </Button>
                  <Button
                    onClick={onNext}
                    className="bg-gradient-hero hover:opacity-90"
                  >
                    Plan Trip
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))
        )}

        {/* Next Page Button */}
        {filteredDestinations.length > 0 && (
          <div className="text-center pt-12">
            <Button
              onClick={onNext}
              size="lg"
              className="bg-gradient-hero hover:opacity-90 transition-opacity"
            >
              Plan Your Trip
            </Button>
          </div>
        )}
      </div>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <CustomModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={`Explore ${selectedDestination.name}`}
        >
          <div className="space-y-6">
            <img
              src={selectedDestination.image}
              alt={selectedDestination.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div>
              <p className="text-muted-foreground mb-4">{selectedDestination.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Top Highlights</h4>
                  <ul className="space-y-1">
                    {selectedDestination.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Activities</h4>
                  <ul className="space-y-1">
                    {selectedDestination.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold text-primary">Best Time to Visit:</span>{" "}
                  <span className="text-muted-foreground">{selectedDestination.bestTime}</span>
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                onClick={handlePlanTrip}
                className="flex-1 bg-gradient-hero hover:opacity-90"
              >
                Plan Trip to {selectedDestination.name}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </CustomModal>
      )}
    </div>
  );
};
