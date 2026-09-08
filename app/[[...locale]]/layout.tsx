import type { Metadata } from 'next';
import { getLocale } from '@/lib/i18n';
import '../globals.css';
export const metadata:Metadata={icons:{icon:'/favicon.png'}};
export default async function RootLayout({children,params}:{children:React.ReactNode;params:Promise<{locale?:string[]}>}) {const {locale}=await params;return <html lang={getLocale(locale)}><body>{children}</body></html>}

