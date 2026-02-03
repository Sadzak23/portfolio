import "@/styles/App.scss";
import { poppins } from "@/utils/fonts";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Sadzak Aleksandar | Portfolio",
  keywords: [
    "Sadzak Aleksandar",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Web Design",
    "Web Development",
    "Software Engineer",
    "UI/UX Designer",
    "Responsive Design",
    "Web Applications",
    "Frontend Engineer",
    "Web Portfolio",
    "Personal Website",
    "Web Projects",
    "Web Development Portfolio",
  ],
  description:
    "Sadzak Aleksandar's portfolio showcasing web development skills and projects.",
  authors: [
    {
      name: "Sadzak Aleksandar",
      url: "www.alex.sadzak.net",
    },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body className={poppins.variable}>
      <ThemeProvider attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
