import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { CustomModal } from "./CustomModal";
import { Plane, Utensils, Bike, Hotel } from "lucide-react";

interface PriceCalculatorProps {
  onNext: () => void;
}

const travelOptions = [
  { id: "economy-flight", name: "Economy Flight", price: 500, icon: Plane },
  { id: "business-flight", name: "Business Class Flight", price: 1500, icon: Plane },
  { id: "train", name: "High-Speed Train", price: 300, icon: Plane },
];

const accommodationOptions = [
  { id: "budget-hotel", name: "Budget Hotel", price: 100, icon: Hotel },
  { id: "mid-hotel", name: "Mid-Range Hotel", price: 250, icon: Hotel },
  { id: "luxury-hotel", name: "Luxury Resort", price: 600, icon: Hotel },
];

const foodOptions = [
  { id: "street-food", name: "Street Food Tour", price: 50, icon: Utensils },
  { id: "local-restaurants", name: "Local Restaurants", price: 150, icon: Utensils },
  { id: "fine-dining", name: "Fine Dining Experience", price: 300, icon: Utensils },
];

const activityOptions = [
  { id: "city-tour", name: "City Walking Tour", price: 40, icon: Bike },
  { id: "museum-pass", name: "Museum Pass", price: 80, icon: Bike },
  { id: "adventure", name: "Adventure Activities", price: 200, icon: Bike },
  { id: "spa", name: "Spa & Wellness", price: 150, icon: Bike },
];

export const PriceCalculator = ({ onNext }: PriceCalculatorProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const allOptions = [
    ...travelOptions,
    ...accommodationOptions,
    ...foodOptions,
    ...activityOptions,
  ];

  const toggleOption = (id: string) => {
    setSelectedOptions(prev =>
      prev.includes(id)
        ? prev.filter(optionId => optionId !== id)
        : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return allOptions
      .filter(option => selectedOptions.includes(option.id))
      .reduce((sum, option) => sum + option.price, 0);
  };

  const handleConfirm = () => {
    if (selectedOptions.length > 0) {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setTimeout(() => onNext(), 300);
  };

  const OptionCard = ({ option, category }: { option: any; category: string }) => {
    const Icon = option.icon;
    const isSelected = selectedOptions.includes(option.id);

    return (
      <div
        onClick={() => toggleOption(option.id)}
        className={`relative p-6 rounded-xl border-2 transition-all cursor-pointer ${
          isSelected
            ? "border-primary bg-primary/5 shadow-md"
            : "border-border hover:border-primary/50"
        }`}
      >
        <div className="flex items-start gap-4">
          <Checkbox
            checked={isSelected}
            onCheckedChange={() => toggleOption(option.id)}
            className="mt-1"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-5 w-5 text-primary" />
              <h4 className="font-semibold">{option.name}</h4>
            </div>
            <p className="text-2xl font-bold text-accent">
              ${option.price}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-hero bg-clip-text text-transparent">
              Customize Your Journey
            </h1>
            <p className="text-muted-foreground">
              Select your preferred options and watch the total price update in real-time
            </p>
          </div>

          <div className="space-y-12">
            {/* Travel Options */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Plane className="h-6 w-6 text-primary" />
                Travel Options
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {travelOptions.map(option => (
                  <OptionCard key={option.id} option={option} category="travel" />
                ))}
              </div>
            </section>

            {/* Accommodation */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Hotel className="h-6 w-6 text-primary" />
                Accommodation
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {accommodationOptions.map(option => (
                  <OptionCard key={option.id} option={option} category="accommodation" />
                ))}
              </div>
            </section>

            {/* Food Packages */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Utensils className="h-6 w-6 text-primary" />
                Food Packages
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {foodOptions.map(option => (
                  <OptionCard key={option.id} option={option} category="food" />
                ))}
              </div>
            </section>

            {/* Activities */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Bike className="h-6 w-6 text-primary" />
                Activities & Experiences
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {activityOptions.map(option => (
                  <OptionCard key={option.id} option={option} category="activities" />
                ))}
              </div>
            </section>
          </div>

          {/* Total Price Bar */}
          <div className="sticky bottom-0 mt-12 bg-card/95 backdrop-blur-md border-t rounded-t-2xl shadow-lg p-6">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Trip Cost</p>
                <p className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                  ${calculateTotal().toLocaleString()}
                </p>
              </div>
              <Button
                onClick={handleConfirm}
                disabled={selectedOptions.length === 0}
                size="lg"
                className="bg-gradient-hero hover:opacity-90 transition-opacity"
              >
                Confirm Selection
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CustomModal
        isOpen={showModal}
        onClose={handleModalClose}
        title="Trip Confirmed!"
        message={`Your amazing journey is ready! Total cost: $${calculateTotal().toLocaleString()}`}
        type="success"
      />
    </>
  );
};
