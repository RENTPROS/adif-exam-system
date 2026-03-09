import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "ADIF Exam System",
  description: "Vercel-ready interface for syllabus-verified exam generation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <h1>ADIF Exam System</h1>
          <p>Generate only from verified local/official syllabus data.</p>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
