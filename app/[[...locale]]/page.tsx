import Portfolio from '@/components/portfolio';
import { getLocale } from '@/lib/i18n';
import { siteMetadata } from '@/lib/site-metadata';
import { notFound } from 'next/navigation';
export async function generateMetadata({params}: {params:Promise<{locale?:string[]}>}) {
 const {locale:segments}=await params;
 const locale=getLocale(segments);
 return siteMetadata('https://ahudesign.eu', locale);
}
export default async function Page({params}: {params:Promise<{locale?:string[]}>}) {
 const {locale:segments}=await params;
 if(segments && (segments.length!==1 || !['sk','az','en'].includes(segments[0]))) notFound();
 return <Portfolio locale={getLocale(segments)}/>;
}
