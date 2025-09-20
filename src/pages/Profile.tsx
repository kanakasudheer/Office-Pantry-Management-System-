import { ArrowLeft, User, Settings, LogOut, Bell, Shield, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.includes('admin');

  const handleLogout = () => {
    navigate('/');
  };

  const profileOptions = [
    { icon: User, label: 'Personal Information', action: () => {} },
    { icon: Bell, label: 'Notifications', action: () => {} },
    { icon: Settings, label: 'App Settings', action: () => {} },
    { icon: Shield, label: 'Privacy & Security', action: () => {} },
    { icon: HelpCircle, label: 'Help & Support', action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4 fade-in">
          <button
            onClick={() => navigate(isAdmin ? '/admin' : '/vendor')}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Profile</h1>
            <p className="text-muted-foreground">Manage your account settings</p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="pantry-card text-center slide-up">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={40} className="text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">
            {isAdmin ? 'Admin User' : 'Vendor Partner'}
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {isAdmin ? 'admin@company.com' : 'vendor@supplier.com'}
          </p>
          <div className="mt-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              isAdmin 
                ? 'bg-primary/10 text-primary' 
                : 'bg-success/10 text-success'
            }`}>
              {isAdmin ? 'Administrator' : 'Verified Vendor'}
            </span>
          </div>
        </div>

        {/* Profile Options */}
        <div className="space-y-3 scale-in" style={{ animationDelay: '0.2s' }}>
          {profileOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <button
                key={option.label}
                onClick={option.action}
                className="w-full pantry-card hover:bg-muted/50 transition-colors duration-200 text-left"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <Icon size={20} className="text-muted-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{option.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stats Card */}
        <div className="pantry-card fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-semibold text-foreground mb-4">
            {isAdmin ? 'Admin Statistics' : 'Vendor Performance'}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">
                {isAdmin ? '156' : '1,240'}
              </p>
              <p className="text-xs text-muted-foreground">
                {isAdmin ? 'Entries Logged' : 'Items Sold'}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-success">
                {isAdmin ? '30' : '₹12,450'}
              </p>
              <p className="text-xs text-muted-foreground">
                {isAdmin ? 'Days Active' : 'Total Revenue'}
              </p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      <BottomNavigation userRole={isAdmin ? "admin" : "vendor"} />
    </div>
  );
};

export default Profile;