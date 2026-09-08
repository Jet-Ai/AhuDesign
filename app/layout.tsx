import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'AHU Design — Interiors & Spaces',icons:{icon:'/favicon.png'},description:'Thoughtful interiors and retail environments. Explore the design work of AHU Design.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}

