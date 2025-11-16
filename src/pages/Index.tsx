import { useState } from "react";
import { RegistrationForm } from "@/components/RegistrationForm";
import { TravelBlog } from "@/components/TravelBlog";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Confirmation } from "@/components/Confirmation";

type Page = "registration" | "blog" | "calculator" | "confirmation";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>("registration");

  return (
    <div className="min-h-screen">
      {currentPage === "registration" && (
        <RegistrationForm onSuccess={() => setCurrentPage("blog")} />
      )}
      
      {currentPage === "blog" && (
        <TravelBlog onNext={() => setCurrentPage("calculator")} />
      )}
      
      {currentPage === "calculator" && (
        <PriceCalculator onNext={() => setCurrentPage("confirmation")} />
      )}
      
      {currentPage === "confirmation" && (
        <Confirmation onStartOver={() => setCurrentPage("registration")} />
      )}
    </div>
  );
};

export default Index;
