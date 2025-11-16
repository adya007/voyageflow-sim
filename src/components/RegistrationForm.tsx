import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CustomModal } from "./CustomModal";

interface RegistrationFormProps {
  onSuccess: () => void;
}

export const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pinCode: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    pinCode: "",
  });

  const [showModal, setShowModal] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Invalid email format";
        break;
      case "phone":
        if (!value) error = "Phone number is required";
        else if (!/^\d{10}$/.test(value)) error = "Phone number must be exactly 10 digits";
        break;
      case "pinCode":
        if (!value) error = "PIN code is required";
        else if (!/^\d{6}$/.test(value)) error = "PIN code must be exactly 6 digits";
        break;
    }

    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      pinCode: validateField("pinCode", formData.pinCode),
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    
    if (!hasErrors) {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setTimeout(() => onSuccess(), 300);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-hero bg-clip-text text-transparent">
              Discover Incredible India
            </h1>
            <p className="text-muted-foreground">Begin your Indian adventure with us</p>
          </div>

          <div className="bg-card rounded-2xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-destructive" : ""}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-destructive" : ""}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-destructive" : ""}
                  placeholder="1234567890"
                  maxLength={10}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="pinCode">PIN Code</Label>
                <Input
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className={errors.pinCode ? "border-destructive" : ""}
                  placeholder="123456"
                  maxLength={6}
                />
                {errors.pinCode && (
                  <p className="text-sm text-destructive">{errors.pinCode}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                size="lg"
              >
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </div>

      <CustomModal
        isOpen={showModal}
        onClose={handleModalClose}
        title="Registration Successful!"
        message="Your details have been submitted. Let's explore amazing destinations together!"
        type="success"
      />
    </>
  );
};
