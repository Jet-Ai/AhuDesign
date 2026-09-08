import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'AHU Design — Interiors & Spaces',icons:{icon:'/favicon.png'},description:'15 years of design and renovation experience in Azerbaijan and Türkiye, now in Europe. Professional market, restaurant and office equipment sourcing, supply and installation.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}

