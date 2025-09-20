import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          dark: "hsl(var(--secondary-dark))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
          foreground: "hsl(var(--success-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        warning: "hsl(var(--warning))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fadeIn": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(30px) scale(0.95)", 
            filter: "blur(5px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0) scale(1)", 
            filter: "blur(0)" 
          }
        },
        "slideUp": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(50px) rotateX(10deg)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0) rotateX(0deg)" 
          }
        },
        "scaleIn": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.8) rotate(-5deg)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1) rotate(0deg)" 
          }
        },
        "bounceIn": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.3) rotate(-10deg)"
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1.05) rotate(2deg)"
          },
          "70%": { 
            transform: "scale(0.98) rotate(-1deg)"
          },
          "100%": { 
            transform: "scale(1) rotate(0deg)"
          }
        },
        "glowPulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(var(--primary) / 0.6)"
          }
        },
        "rainbowBorder": {
          "0%": { borderColor: "hsl(280 100% 60%)" },
          "25%": { borderColor: "hsl(320 100% 60%)" },
          "50%": { borderColor: "hsl(180 100% 50%)" },
          "75%": { borderColor: "hsl(120 100% 50%)" },
          "100%": { borderColor: "hsl(280 100% 60%)" }
        },
        "gradientAnimation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-up": "slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "rainbow-border": "rainbowBorder 3s linear infinite",
        "gradient-animation": "gradientAnimation 8s ease infinite",
        "float": "float 6s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
