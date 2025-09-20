import { DollarSign, Settings, Receipt, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import ChatBot from "@/components/ChatBot";
import usePantryData from "@/hooks/usePantryData";

const VendorDashboard = () => {
  const navigate = useNavigate();
  const { getVendorStats } = usePantryData();
  const stats = getVendorStats();

  const salesItems = [
    {
      name: 'Tea',
      data: stats.tea,
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      name: 'Coffee',
      data: stats.coffee,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      name: 'Biscuits',
      data: stats.biscuits,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  const totalRevenue = stats.tea.revenue + stats.coffee.revenue + stats.biscuits.revenue;
  const totalQuantity = stats.tea.quantity + stats.coffee.quantity + stats.biscuits.quantity;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="fade-in">
          <h1 className="text-2xl font-bold text-foreground">
            Welcome, Vendor 🛒
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your sales and manage pricing
          </p>
        </div>

        {/* Revenue Overview */}
        <div className="pantry-card slide-up bg-gradient-success text-success-foreground">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-success-foreground/80 text-sm font-medium">Today's Revenue</h3>
              <p className="text-3xl font-bold text-success-foreground">₹{totalRevenue}</p>
              <p className="text-success-foreground/80 text-sm mt-1">from {totalQuantity} items sold</p>
            </div>
            <div className="w-16 h-16 bg-success-foreground/20 rounded-full flex items-center justify-center">
              <TrendingUp size={32} className="text-success-foreground" />
            </div>
          </div>
        </div>

        {/* Sales Summary Cards */}
        <div className="space-y-4 slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg font-semibold text-foreground">Items Sold Today</h2>
          <div className="grid gap-4">
            {salesItems.map((item, index) => (
              <div 
                key={item.name} 
                className="stat-card"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center`}>
                      <span className={`text-2xl ${item.color}`}>
                        {item.name === 'Tea' ? '🍵' : item.name === 'Coffee' ? '☕' : '🍪'}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">Revenue: ₹{item.data.revenue}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-foreground">{item.data.quantity}</span>
                    <p className="text-muted-foreground text-sm">sold</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 scale-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => navigate('/vendor/set-prices')}
            className="w-full btn-primary flex items-center justify-center space-x-3"
          >
            <Settings size={20} />
            <span>Set Prices</span>
          </button>

          <button
            onClick={() => navigate('/vendor/invoices')}
            className="w-full btn-secondary flex items-center justify-center space-x-3"
          >
            <Receipt size={20} />
            <span>Generate Invoice</span>
          </button>
        </div>

        {/* Performance Stats */}
        <div className="pantry-card fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-semibold text-foreground mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">₹{Math.round(totalRevenue / Math.max(totalQuantity, 1))}</p>
              <p className="text-xs text-muted-foreground">Avg. Price</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-success">{totalQuantity}</p>
              <p className="text-xs text-muted-foreground">Items Sold</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-warning">95%</p>
              <p className="text-xs text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation userRole="vendor" />
      <ChatBot />
    </div>
  );
};

export default VendorDashboard;