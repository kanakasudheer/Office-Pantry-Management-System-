import { useState } from 'react';

export interface ConsumptionEntry {
  id: string;
  item: 'Tea' | 'Coffee' | 'Biscuits';
  quantity: number;
  userType: 'Employee' | 'Visitor';
  date: string;
  timestamp: Date;
}

export interface ItemPrice {
  item: 'Tea' | 'Coffee' | 'Biscuits';
  price: number;
}

export interface DashboardStats {
  tea: number;
  coffee: number;
  biscuits: number;
}

const usePantryData = () => {
  const [consumptionEntries, setConsumptionEntries] = useState<ConsumptionEntry[]>([
    {
      id: '1',
      item: 'Tea',
      quantity: 45,
      userType: 'Employee',
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date(),
    },
    {
      id: '2',
      item: 'Coffee',
      quantity: 32,
      userType: 'Employee',
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date(),
    },
    {
      id: '3',
      item: 'Biscuits',
      quantity: 28,
      userType: 'Visitor',
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date(),
    },
  ]);

  const [itemPrices, setItemPrices] = useState<ItemPrice[]>([
    { item: 'Tea', price: 5 },
    { item: 'Coffee', price: 8 },
    { item: 'Biscuits', price: 15 },
  ]);

  const addConsumptionEntry = (entry: Omit<ConsumptionEntry, 'id' | 'timestamp'>) => {
    const newEntry: ConsumptionEntry = {
      ...entry,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setConsumptionEntries(prev => [newEntry, ...prev]);
  };

  const updateItemPrice = (item: 'Tea' | 'Coffee' | 'Biscuits', price: number) => {
    setItemPrices(prev => 
      prev.map(p => p.item === item ? { ...p, price } : p)
    );
  };

  const getDashboardStats = (): DashboardStats => {
    const today = new Date().toISOString().split('T')[0];
    const todayEntries = consumptionEntries.filter(entry => entry.date === today);
    
    return {
      tea: todayEntries.filter(e => e.item === 'Tea').reduce((sum, e) => sum + e.quantity, 0),
      coffee: todayEntries.filter(e => e.item === 'Coffee').reduce((sum, e) => sum + e.quantity, 0),
      biscuits: todayEntries.filter(e => e.item === 'Biscuits').reduce((sum, e) => sum + e.quantity, 0),
    };
  };

  const getVendorStats = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayEntries = consumptionEntries.filter(entry => entry.date === today);
    
    return {
      tea: {
        quantity: todayEntries.filter(e => e.item === 'Tea').reduce((sum, e) => sum + e.quantity, 0),
        revenue: todayEntries.filter(e => e.item === 'Tea').reduce((sum, e) => sum + e.quantity, 0) * (itemPrices.find(p => p.item === 'Tea')?.price || 0),
      },
      coffee: {
        quantity: todayEntries.filter(e => e.item === 'Coffee').reduce((sum, e) => sum + e.quantity, 0),
        revenue: todayEntries.filter(e => e.item === 'Coffee').reduce((sum, e) => sum + e.quantity, 0) * (itemPrices.find(p => p.item === 'Coffee')?.price || 0),
      },
      biscuits: {
        quantity: todayEntries.filter(e => e.item === 'Biscuits').reduce((sum, e) => sum + e.quantity, 0),
        revenue: todayEntries.filter(e => e.item === 'Biscuits').reduce((sum, e) => sum + e.quantity, 0) * (itemPrices.find(p => p.item === 'Biscuits')?.price || 0),
      },
    };
  };

  return {
    consumptionEntries,
    itemPrices,
    addConsumptionEntry,
    updateItemPrice,
    getDashboardStats,
    getVendorStats,
  };
};

export default usePantryData;