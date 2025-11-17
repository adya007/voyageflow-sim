import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message?: string;
  type?: "success" | "info" | "warning";
  children?: React.ReactNode;
}

export const CustomModal = ({ isOpen, onClose, title, message, type = "success", children }: CustomModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className={cn(
        "relative z-10 bg-card rounded-2xl shadow-lg p-8 max-w-md w-full mx-4",
        "animate-in zoom-in-95 duration-300"
      )}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        {children ? (
          <div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            {children}
          </div>
        ) : (
          <div className="text-center">
            {type === "success" && (
              <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground mb-6">{message}</p>
            
            <button
              onClick={onClose}
              className="w-full bg-gradient-hero text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
