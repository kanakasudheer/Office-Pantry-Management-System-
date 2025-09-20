import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import usePantryData from "@/hooks/usePantryData";
import { useToast } from "@/hooks/use-toast";

const LogConsumption = () => {
  const navigate = useNavigate();
  const { addConsumptionEntry } = usePantryData();
  const { toast } = useToast();
  
  const foodItems = [
    'Tea', 'Coffee', 'Biscuits', 'Cookies', 'Chips', 'Milk', 'Sugar', 'Bread', 'Butter', 'Jam',
    'Juice', 'Water', 'Soda', 'Energy Drink', 'Chocolate', 'Candy', 'Nuts', 'Fruits', 'Sandwiches', 'Cake',
    'Pastry', 'Donuts', 'Muffins', 'Crackers', 'Cheese', 'Yogurt', 'Ice Cream', 'Popcorn', 'Pretzels', 'Granola Bar',
    'Protein Bar', 'Trail Mix', 'Dried Fruits', 'Fresh Fruits', 'Vegetables', 'Salad', 'Soup', 'Noodles', 'Rice', 'Pasta',
    'Pizza', 'Burger', 'Hot Dog', 'Tacos', 'Wraps', 'Cereal', 'Oatmeal', 'Pancakes', 'Waffles', 'Toast'
  ];

  const [formData, setFormData] = useState({
    item: '',
    quantity: '',
    userType: '' as 'Employee' | 'Visitor' | '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.item || !formData.quantity || !formData.userType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    addConsumptionEntry({
      item: formData.item as 'Tea' | 'Coffee' | 'Biscuits',
      quantity: parseInt(formData.quantity),
      userType: formData.userType as 'Employee' | 'Visitor',
      date: new Date().toISOString().split('T')[0],
    });

    toast({
      title: "Entry Logged Successfully",
      description: `${formData.quantity} ${formData.item} logged for ${formData.userType}`,
    });

    // Reset form
    setFormData({
      item: '',
      quantity: '',
      userType: '',
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4 fade-in">
          <button
            onClick={() => navigate('/admin')}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Log Pantry Usage</h1>
            <p className="text-muted-foreground">Record consumption details</p>
          </div>
        </div>

        {/* Form */}
        <div className="form-card slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Item Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Select Item *
              </label>
              <select
                value={formData.item}
                onChange={(e) => setFormData({ ...formData, item: e.target.value as any })}
                className="input-field"
                required
              >
                <option value="">Choose an item...</option>
                {foodItems.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Quantity Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Quantity *
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="input-field"
                placeholder="Enter quantity..."
                required
              />
            </div>

            {/* User Type Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                User Type *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: 'Employee' })}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    formData.userType === 'Employee'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-medium">Employee</div>
                    <div className="text-xs opacity-70 mt-1">Internal staff</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: 'Visitor' })}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    formData.userType === 'Visitor'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-medium">Visitor</div>
                    <div className="text-xs opacity-70 mt-1">External guest</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-success flex items-center justify-center space-x-3 mt-8"
            >
              <Save size={20} />
              <span>Save Entry</span>
            </button>
          </form>
        </div>

        {/* Info Card */}
        <div className="pantry-card bg-primary/5 border-primary/20 scale-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-medium text-primary mb-2">📝 Logging Tips</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Log consumption as soon as items are used</li>
            <li>• Specify correct user type for accurate reporting</li>
            <li>• Double-check quantity before saving</li>
          </ul>
        </div>
      </div>

      <BottomNavigation userRole="admin" />
    </div>
  );
};

export default LogConsumption;