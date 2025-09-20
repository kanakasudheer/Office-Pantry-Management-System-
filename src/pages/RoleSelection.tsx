import { Briefcase, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 fade-in">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-3xl font-bold text-gradient-rainbow">
            Welcome to Pantry Manager
          </h1>
          <p className="text-muted-foreground text-lg fade-in" style={{ animationDelay: '0.2s' }}>
            Streamline your office pantry management
          </p>
        </div>

        {/* Role Information */}
        <div className="space-y-4 slide-up">
          <div className="role-button group cursor-default">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Briefcase size={32} className="text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  Admin Access
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Track pantry consumption and generate reports
                </p>
              </div>
            </div>
          </div>

          <div className="role-button group cursor-default">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                <ShoppingCart size={32} className="text-success" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  Vendor Access
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Manage pricing and generate invoices
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <button
            onClick={() => handleRoleSelect()}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Get Started
          </button>
          <p className="text-center text-sm text-muted-foreground">
            Login or create an account to continue
          </p>
        </div>

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-sm text-muted-foreground">
            Powered by <span className="font-medium text-primary">Office Solutions Inc.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
