import Portfolio from '@/components/portfolio';
import { getLocale, translate } from '@/lib/i18n';
import { notFound } from 'next/navigation';
export async function generateMetadata({params}: {params:Promise<{locale?:string[]}>}) {
 const {locale:segments}=await params;
 const locale=getLocale(segments);
 return {title:translate(locale,'AHU Design — Interiors & Spaces'),description:translate(locale,'15 years of design and renovation experience in Azerbaijan and Türkiye, now in Europe. Professional market, restaurant and office equipment sourcing, supply and installation.'),alternates:{canonical:'https://ahu-design.jet-a1.chatgpt.site/'+locale,languages:{sk:'https://ahu-design.jet-a1.chatgpt.site/sk',az:'https://ahu-design.jet-a1.chatgpt.site/az',en:'https://ahu-design.jet-a1.chatgpt.site/en'}}};
}
export default async function Page({params}: {params:Promise<{locale?:string[]}>}) {
 const {locale:segments}=await params;
 if(segments && (segments.length!==1 || !['sk','az','en'].includes(segments[0]))) notFound();
 return <Portfolio locale={getLocale(segments)}/>;
}
