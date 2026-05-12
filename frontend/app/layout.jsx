import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL("https://techkidyy-sigma.vercel.app"),

  title: {
    default: "TechKidyy | Modern Website Development",
    template: "%s | TechKidyy",
  },

  description:
    "TechKidyy designs and develops high-quality websites, AI applications, dashboards, portfolios, ecommerce platforms, and responsive digital solutions for startups, businesses, and creators.",

  keywords: [
    "TechKidyy",
    "website development",
    "AI website",
    "web development",
    "portfolio website",
    "Next.js developer",
    "React developer",
    "modern websites",
    "responsive websites",
    "UI UX design",
    "dashboard development",
    "ecommerce website",
    "frontend developer",
    "digital solutions",
  ],
  
  verification: { google: "Gc8LlbP0tWas1dSephZmbTPSYnzLSGnG0vgpXNf6nd4", },

  authors: [{ name: "TechKidyy" }],

  creator: "TechKidyy",

  publisher: "TechKidyy",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "TechKidyy | Modern Website Development",

    description:
      "Modern websites, AI-powered applications, dashboards, ecommerce platforms, and professional digital solutions.",

    url: "https://techkidyy-sigma.vercel.app",

    siteName: "TechKidyy",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "TechKidyy",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TechKidyy | Modern Website Development",

    description:
      "Modern websites and AI-powered digital solutions for startups and businesses.",

    images: ["/logo.png"],

    creator: "@techkidyy",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(15, 23, 42, 0.95)',
              color: '#e2e8f0',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              backdropFilter: 'blur(12px)',
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '14px',
            },
            success: { iconTheme: { primary: '#10b981', secondary: '#022c22' } },
            error: { iconTheme: { primary: '#ef4444', secondary: '#450a0a' } },
          }}
        />
      </body>
    </html>
  );
}