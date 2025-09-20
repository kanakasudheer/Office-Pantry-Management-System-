import { Coffee, Cookie, Leaf, Plus, BarChart3, Users, Package, TrendingUp, Settings, Bell, Calendar, DollarSign, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import ChatBot from "@/components/ChatBot";
import usePantryData from "@/hooks/usePantryData";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { getDashboardStats } = usePantryData();
  const stats = getDashboardStats();

  const consumptionItems = [
    {
      name: 'Tea',
      icon: Leaf,
      count: stats.tea,
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      name: 'Coffee',
      icon: Coffee,
      count: stats.coffee,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      name: 'Biscuits',
      icon: Cookie,
      count: stats.biscuits,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      name: 'Snacks',
      icon: Package,
      count: 12,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const adminActions = [
    { icon: Plus, label: 'Log Consumption', path: '/admin/log-consumption', color: 'bg-gradient-primary' },
    { icon: BarChart3, label: 'Generate Report', path: '/admin/reports', color: 'bg-gradient-success' },
    { icon: Users, label: 'Manage Users', path: '/admin/users', color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { icon: Package, label: 'Inventory', path: '/admin/inventory', color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { icon: Settings, label: 'Settings', path: '/admin/settings', color: 'bg-gradient-to-r from-gray-500 to-gray-600' },
    { icon: Bell, label: 'Notifications', path: '/admin/notifications', color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="fade-in">
          <h1 className="text-2xl font-bold text-gradient-rainbow">
            Hello, Admin 👋
          </h1>
          <p className="text-muted-foreground mt-1 fade-in" style={{ animationDelay: '0.2s' }}>
            Here's today's pantry consumption summary
          </p>
        </div>

        {/* Consumption Summary Cards */}
        <div className="space-y-4 slide-up">
          <h2 className="text-lg font-semibold text-foreground">Daily Consumption</h2>
          <div className="grid gap-4">
            {consumptionItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.name} 
                  className="stat-card hover:rainbow-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center glow-pulse`}>
                        <Icon size={24} className={item.color} />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">Today's usage</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gradient-primary">{item.count}</span>
                      <p className="text-muted-foreground text-sm">units</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 scale-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-lg font-semibold text-foreground">Admin Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {adminActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  onClick={() => navigate(action.path)}
                  className={`${action.color} text-white p-4 rounded-lg flex flex-col items-center space-y-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={24} />
                  <span className="text-sm font-medium text-center">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="space-y-4 fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-lg font-semibold text-foreground">Analytics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="pantry-card text-center">
              <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-success">+15%</p>
              <p className="text-xs text-muted-foreground">This Week</p>
            </div>
            <div className="pantry-card text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">₹2,450</p>
              <p className="text-xs text-muted-foreground">Monthly Cost</p>
            </div>
            <div className="pantry-card text-center">
              <Users className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold text-warning">24</p>
              <p className="text-xs text-muted-foreground">Active Users</p>
            </div>
            <div className="pantry-card text-center">
              <Activity className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-500">89%</p>
              <p className="text-xs text-muted-foreground">Efficiency</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="pantry-card fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-semibold text-foreground mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Tea consumption logged</span>
              <span className="text-success font-medium">2 min ago</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">New vendor registered</span>
              <span className="text-primary font-medium">1 hour ago</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Monthly report generated</span>
              <span className="text-warning font-medium">3 hours ago</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation userRole="admin" />
      <ChatBot />
    </div>
  );
};

export default AdminDashboard;