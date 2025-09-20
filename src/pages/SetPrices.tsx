import { useState } from "react";
import { ArrowLeft, Save, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import usePantryData from "@/hooks/usePantryData";
import { useToast } from "@/hooks/use-toast";

const SetPrices = () => {
  const navigate = useNavigate();
  const { itemPrices, updateItemPrice } = usePantryData();
  const { toast } = useToast();
  
  const [prices, setPrices] = useState(() => {
    const priceMap: Record<string, number> = {};
    itemPrices.forEach(item => {
      priceMap[item.item] = item.price;
    });
    return priceMap;
  });

  const handlePriceChange = (item: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setPrices(prev => ({ ...prev, [item]: numValue }));
  };

  const handleSave = () => {
    Object.entries(prices).forEach(([item, price]) => {
      updateItemPrice(item as 'Tea' | 'Coffee' | 'Biscuits', price);
    });

    toast({
      title: "Prices Updated Successfully",
      description: "All item prices have been saved",
    });

    navigate('/vendor');
  };

  const items = [
    { name: 'Tea', icon: '🍵', description: 'Per cup serving' },
    { name: 'Coffee', icon: '☕', description: 'Per cup serving' },
    { name: 'Biscuits', icon: '🍪', description: 'Per piece' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4 fade-in">
          <button
            onClick={() => navigate('/vendor')}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Update Item Prices</h1>
            <p className="text-muted-foreground">Set competitive pricing for your items</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-4 slide-up">
          {items.map((item, index) => (
            <div 
              key={item.name}
              className="form-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <DollarSign size={20} className="text-muted-foreground" />
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={prices[item.name] || ''}
                  onChange={(e) => handlePriceChange(item.name, e.target.value)}
                  className="input-field pl-10 text-lg font-medium"
                  placeholder="0.00"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-muted-foreground text-sm">INR</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guidelines */}
        <div className="pantry-card bg-primary/5 border-primary/20 scale-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-medium text-primary mb-3 flex items-center">
            <DollarSign size={18} className="mr-2" />
            Pricing Guidelines
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Consider market rates and competitor pricing</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Include cost of goods and reasonable profit margin</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Review and update prices regularly</span>
            </li>
          </ul>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full btn-success flex items-center justify-center space-x-3 scale-in"
          style={{ animationDelay: '0.6s' }}
        >
          <Save size={20} />
          <span>Save Prices</span>
        </button>
      </div>

      <BottomNavigation userRole="vendor" />
    </div>
  );
};

export default SetPrices;