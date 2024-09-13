import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Fix It',
  description: 'Find Hero With Tools, Not Caps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main> 
       < Footer />
        </body>
    </html>
  )
}

{/*NOTES*/}
{/*{children rep the main page.tsx file*/}