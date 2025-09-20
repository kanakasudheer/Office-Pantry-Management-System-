import { Home, FileText, User, BarChart3, Receipt } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface BottomNavigationProps {
  userRole: 'admin' | 'vendor';
}

const BottomNavigation = ({ userRole }: BottomNavigationProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const adminNavItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/admin' },
    { id: 'reports', label: 'Reports', icon: BarChart3, path: '/admin/reports' },
    { id: 'profile', label: 'Profile', icon: User, path: '/admin/profile' },
  ];

  const vendorNavItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/vendor' },
    { id: 'invoices', label: 'Invoices', icon: Receipt, path: '/vendor/invoices' },
    { id: 'profile', label: 'Profile', icon: User, path: '/vendor/profile' },
  ];

  const navItems = userRole === 'admin' ? adminNavItems : vendorNavItems;

  return (
    <div className="nav-bottom">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;