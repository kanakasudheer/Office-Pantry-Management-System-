import { useState } from "react";
import { ArrowLeft, Download, FileText, Calendar, Filter } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import usePantryData from "@/hooks/usePantryData";
import { useToast } from "@/hooks/use-toast";

const ReportsInvoices = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { consumptionEntries, getVendorStats, getDashboardStats } = usePantryData();
  const { toast } = useToast();
  
  const isAdmin = location.pathname.includes('admin');
  const [activeTab, setActiveTab] = useState<'daily' | 'monthly'>('daily');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: `${isAdmin ? 'Consumption report' : 'Invoice'} for ${activeTab} period has been prepared`,
    });
  };

  const handleDownloadPDF = (invoiceId: string) => {
    toast({
      title: "Download Started",
      description: `Invoice ${invoiceId} is being downloaded`,
    });
  };

  const adminStats = getDashboardStats();
  const vendorStats = getVendorStats();

  const sampleInvoices = [
    { id: 'INV-001', date: '2024-01-15', amount: 450, status: 'Paid' },
    { id: 'INV-002', date: '2024-01-14', amount: 320, status: 'Pending' },
    { id: 'INV-003', date: '2024-01-13', amount: 680, status: 'Paid' },
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
            <h1 className="text-2xl font-bold text-foreground">
              {isAdmin ? 'Generate Reports' : 'Invoices & Billing'}
            </h1>
            <p className="text-muted-foreground">
              {isAdmin ? 'Export consumption data and analytics' : 'Manage invoices and billing'}
            </p>
          </div>
        </div>

        {isAdmin ? (
          <>
            {/* Filter Tabs */}
            <div className="flex bg-muted rounded-lg p-1 slide-up">
              <button
                onClick={() => setActiveTab('daily')}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'daily'
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Daily Report
              </button>
              <button
                onClick={() => setActiveTab('monthly')}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'monthly'
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly Report
              </button>
            </div>

            {/* Date Picker */}
            <div className="form-card slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Calendar size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Select Date Range</h3>
              </div>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="input-field"
              />
            </div>

            {/* Report Summary */}
            <div className="space-y-4 scale-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold text-foreground">Report Summary</h3>
              <div className="grid gap-4">
                <div className="stat-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Tea Consumption</p>
                      <p className="text-2xl font-bold text-success">{adminStats.tea} cups</p>
                    </div>
                    <div className="text-4xl">🍵</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Coffee Consumption</p>
                      <p className="text-2xl font-bold text-warning">{adminStats.coffee} cups</p>
                    </div>
                    <div className="text-4xl">☕</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Biscuits Consumption</p>
                      <p className="text-2xl font-bold text-primary">{adminStats.biscuits} pieces</p>
                    </div>
                    <div className="text-4xl">🍪</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Report Button */}
            <button
              onClick={handleGenerateReport}
              className="w-full btn-primary flex items-center justify-center space-x-3 scale-in"
              style={{ animationDelay: '0.3s' }}
            >
              <FileText size={20} />
              <span>Generate {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Report</span>
            </button>
          </>
        ) : (
          <>
            {/* Generate Invoice Section */}
            <div className="form-card slide-up">
              <div className="flex items-center space-x-3 mb-4">
                <FileText size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Generate New Invoice</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-success">{vendorStats.tea.quantity}</p>
                    <p className="text-xs text-muted-foreground">Tea Sold</p>
                    <p className="text-sm font-medium text-foreground">₹{vendorStats.tea.revenue}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-warning">{vendorStats.coffee.quantity}</p>
                    <p className="text-xs text-muted-foreground">Coffee Sold</p>
                    <p className="text-sm font-medium text-foreground">₹{vendorStats.coffee.revenue}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-primary">{vendorStats.biscuits.quantity}</p>
                    <p className="text-xs text-muted-foreground">Biscuits Sold</p>
                    <p className="text-sm font-medium text-foreground">₹{vendorStats.biscuits.revenue}</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Total Amount:</span>
                    <span className="text-xl font-bold text-primary">
                      ₹{vendorStats.tea.revenue + vendorStats.coffee.revenue + vendorStats.biscuits.revenue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerateReport}
              className="w-full btn-success flex items-center justify-center space-x-3 scale-in"
              style={{ animationDelay: '0.2s' }}
            >
              <FileText size={20} />
              <span>Generate Invoice</span>
            </button>

            {/* Previous Invoices */}
            <div className="space-y-4 slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold text-foreground">Previous Invoices</h3>
              <div className="space-y-3">
                {sampleInvoices.map((invoice) => (
                  <div key={invoice.id} className="pantry-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{invoice.id}</p>
                        <p className="text-sm text-muted-foreground">{invoice.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">₹{invoice.amount}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          invoice.status === 'Paid' 
                            ? 'bg-success/10 text-success' 
                            : 'bg-warning/10 text-warning'
                        }`}>
                          {invoice.status}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDownloadPDF(invoice.id)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <BottomNavigation userRole={isAdmin ? "admin" : "vendor"} />
    </div>
  );
};

export default ReportsInvoices;