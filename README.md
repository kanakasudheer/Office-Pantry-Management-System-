# 🏢 Office Pantry Management System

A comprehensive React/TypeScript web application for managing office pantry operations with role-based authentication, AI chatbot integration, and real-time consumption tracking.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

## ✨ Features

### 🔐 Authentication System
- **Role-based Login**: Admin and Vendor access levels
- **User Registration**: Create accounts with role selection
- **Protected Routes**: Secure dashboard access
- **Session Management**: Persistent user sessions

### 👨‍💼 Admin Dashboard
- **Consumption Tracking**: Monitor pantry usage in real-time
- **Analytics**: Revenue, user metrics, and efficiency tracking
- **Management Tools**: User management, inventory, settings
- **Activity Feed**: Live updates of pantry operations

### 🛒 Vendor Dashboard
- **Sales Overview**: Daily revenue and item performance
- **Price Management**: Dynamic pricing controls
- **Invoice Generation**: Automated billing system
- **Performance Metrics**: Success rates and analytics

### 🤖 AI Chatbot
- **Google Gemini Integration**: AI-powered assistance
- **Context-Aware**: Pantry management specific responses
- **50+ Food Items**: Comprehensive knowledge base
- **Real-time Chat**: Instant help and guidance

### 📊 Consumption Logging
- **50 Food Items**: Complete pantry inventory
- **User Classification**: Employee vs Visitor tracking
- **Quantity Management**: Precise consumption recording
- **Form Validation**: Data integrity and error handling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kanakasudheer/Office-Pantry-Management-System-
cd office-pantry-management
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:8080
```

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Query + Custom Hooks
- **AI Integration**: Google Gemini API
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── ChatBot.tsx        # AI chatbot
│   ├── Logo.tsx           # Custom logo
│   └── ProtectedRoute.tsx # Auth guard
├── pages/
│   ├── AdminDashboard.tsx
│   ├── VendorDashboard.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   └── LogConsumption.tsx
├── hooks/
│   └── usePantryData.ts   # Data management
└── lib/
    └── utils.ts           # Utilities
```

## 🎯 Usage

### For Admins
1. **Login** with admin credentials
2. **Monitor** pantry consumption in real-time
3. **Log** food item usage with quantities
4. **Generate** reports and analytics
5. **Manage** users and inventory

### For Vendors
1. **Login** with vendor credentials
2. **Track** sales and revenue
3. **Set** dynamic pricing for items
4. **Generate** invoices automatically
5. **Monitor** performance metrics

### AI Assistant
- Click the **chat button** (bottom-right)
- Ask questions about pantry management
- Get help with system features
- Receive food item information

## 🔧 Configuration

### Environment Variables
Create a `.env` file:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### API Integration
The system uses Google Gemini API for AI chatbot functionality. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

## 📱 Responsive Design

- **Mobile-first**: Optimized for all screen sizes
- **Touch-friendly**: Mobile navigation and interactions
- **Progressive**: Works on desktop, tablet, and mobile

## 🔒 Security Features

- **Input Validation**: Form validation and sanitization
- **Route Protection**: Authentication guards
- **Error Handling**: Graceful error management
- **Data Persistence**: Secure local storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- **shadcn/ui** for beautiful UI components
- **Google Gemini** for AI integration
- **Lucide** for icons
- **Tailwind CSS** for styling


