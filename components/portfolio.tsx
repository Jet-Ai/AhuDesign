'use client';

import { useState } from 'react';
import { translate, type Locale } from '@/lib/i18n';
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const projects = [
  { title: 'Living, considered', type: 'Residential interior', image: '/images/living.webp', images: ['/images/living.webp','/images/living-detail.webp'], text: 'Rich timber, layered light and a quiet palette bring the living and dining spaces together.' },
  { title: 'The retail experience', type: 'Retail design', image: '/images/retail.webp', images: ['/images/retail.webp','/images/retail-detail.webp'], text: 'A clear spatial rhythm connects fresh produce, considered displays and the everyday journey through a store.' },
  { title: 'A place to gather', type: 'Hospitality interior', image: '/images/hospitality.webp', images: ['/images/hospitality.webp'], text: 'Atmosphere takes shape through light, texture and places to sit together.' },
  { title: 'Everyday rituals', type: 'Retail design', image: '/images/bakery.webp', images: ['/images/bakery.webp'], text: 'Warm materials and focused lighting give the bakery counter a distinct presence.' },
];

export default function Portfolio({locale}: {locale: Locale}) {
  const t = (text: string) => translate(locale, text);
  const localizedProjects = projects.map(p => ({...p, title:t(p.title), type:t(p.type), text:t(p.text)}));
  const [selected, setSelected] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const project = selected === null ? null : localizedProjects[selected];
  function openProject(index: number) { setSelected(index); setSlide(0); }
  return <main id="top">
    <a className="skip-link" href="#projects">{t("Skip to projects")}</a>
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src="/images/living.webp" alt={t("AHU Design living room with rich wood cabinetry and layered lighting")} fetchPriority="high" />
      <div className="hero-shade" />
      <header className="header">
        <a className="wordmark" href="#top" aria-label={t("AHU Design home")}>AHU<span>DESIGN</span></a>
        <p className="header-note">{t("INTERIORS & SPACES")}<br/>{t("DESIGNED AROUND YOU")}</p>
        <nav aria-label={t("Main navigation")}><a href="#projects">{t("Projects")}</a><a href="#studio">{t("Studio")}</a><a href="#approach">{t("Services")}</a><a href="#contact">{t("Contact")}{' '}<ArrowUpRight size={15}/></a></nav><nav className="language-switch" aria-label={t('Language')}>{(['sk','az','en'] as const).map(code=><a key={code} href={'/'+code} hrefLang={code} lang={code} aria-current={locale===code?'page':undefined} aria-label={{sk:'Slovenčina',az:'Azərbaycanca',en:'English'}[code]}>{code.toUpperCase()}</a>)}</nav>
      </header>
      <div className="hero-copy"><p className="eyebrow">{t("DESIGN · RENOVATION · EQUIPMENT")}</p><h1 id="hero-title">{t("Spaces with")}<br/><span>{t("their own story.")}</span></h1></div>
      <div className="hero-bottom"><a href="#projects" className="underlink">{t("Explore our work")}{' '}<ArrowDown size={18}/></a><button onClick={()=>openProject(0)} className="hero-project"><span>{t("01 / RESIDENTIAL INTERIOR")}</span><span>{t("Living, considered")}{' '}<ArrowUpRight size={20}/></span></button></div>
      <span className="hero-index" aria-hidden="true">01 — 04</span>
    </section>

    <section id="studio" className="studio section-pad">
      <div className="studio-aside"><p className="eyebrow">{t("01 / THE STUDIO")}</p><div className="experience-mark"><span aria-hidden="true">15</span><p>{t("Years of experience")}</p></div></div>
      <div><h2>{t("A new chapter.")}<br/><span>{t("15 years of experience.")}</span></h2><div className="studio-body"><p>{t("For 15 years, our team has designed and renovated markets, homes, offices and restaurants across Azerbaijan and Türkiye. From the first concept to the final installation, we bring design, renovation and professional equipment together as one complete service.")}</p><p>{t("Today, AHU Design brings that experience to Europe. A new name and a fresh perspective, backed by a dedicated team. We combine our experience with modern ideas and an approach adapted to European standards.")}</p><p>{t("Every project begins with your vision. We consider the purpose of the space, how it works and how it feels — creating carefully planned environments that are functional, inspiring and made to last.")}</p><p>{t("For markets, restaurants and offices, we source and supply professional equipment from Türkiye and Azerbaijan, and arrange its delivery and installation as part of the complete project.")}</p></div><a className="underlink dark-link" href="#approach">{t("Our approach")}{' '}<ArrowDown size={18}/></a></div>
    </section>

    <section id="projects" className="projects section-pad">
      <div className="section-heading"><div><p className="eyebrow">{t("02 / SELECTED WORK")}</p><h2>{t("A sense of place.")}</h2></div><span className="project-count">{t("INTERIORS / RETAIL / HOSPITALITY")}</span></div>
      <div className="project-grid">{localizedProjects.map((p,i)=><button className={'project-card project-'+i} key={p.title} onClick={()=>openProject(i)} aria-label={t('View ')+p.title}><div className="project-picture"><img src={p.image} alt={p.title+' — '+p.type} loading="lazy"/><span className="project-open"><ArrowUpRight size={25}/></span></div><div className="project-caption"><div><h3>{p.title}</h3><p>{p.type}</p></div><span className="project-number">0{i+1}</span></div></button>)}</div>
    </section>

    <section className="approach section-pad" id="approach"><div><p className="eyebrow">{t("03 / COMPLETE PROJECT SERVICES")}</p><h2>{t("From the first idea")}<br/>{t("to installation.")}</h2><p className="approach-intro">{t("Design, renovation and equipment supply for retail stores, restaurants, offices and homes. One team, from concept to completion.")}</p></div><div className="approach-list">{[['01','Design & planning','We translate your ideas into layouts, materials and lighting that balance purpose, aesthetics and the needs of the people using the space.'],['02','Renovation & fit-out','We turn the agreed design into a finished environment, coordinating the renovation and paying attention to every detail.'],['03','Equipment supply & installation','We source and supply professional market, restaurant and office equipment from Türkiye and Azerbaijan, including delivery and installation. Equipment is selected around the needs and layout of your project.']].map(([n,t,d])=><div className="approach-row" key={n}><span>{n}</span><div><h3>{translate(locale,t)}</h3><p>{translate(locale,d)}</p></div></div>)}</div></section>

    <footer id="contact" className="footer section-pad"><p className="eyebrow">{t("04 / YOUR VISION. OUR EXPERIENCE.")}</p><h2>{locale==='az'?<>Gəlin <em>ideyalarınıza</em><br/>yer açaq.</>:<>{t("Let's make")}<br/>{t("room for")}{' '}<em>{t("your ideas.")}</em></>}</h2><div className="contact-line"><a href="mailto:hasan.alibeyli@outlook.com">hasan.alibeyli@outlook.com <ArrowUpRight size={20}/></a><a href="tel:+421944693002">+421 944 693 002 <ArrowUpRight size={20}/></a></div><div className="footer-bottom"><a href="#top" className="wordmark">AHU<span>DESIGN</span></a><p>© {new Date().getFullYear()} AHU Design</p><a className="back-top" href="#top">{t("Back to top")}{' '}<ArrowUpRight size={17}/></a></div></footer>

    <Dialog open={selected!==null} onOpenChange={open=>{if(!open)setSelected(null)}}><DialogContent className="project-dialog" showCloseButton={false} onKeyDown={event=>{if(!project || project.images.length<2)return;if(event.key==='ArrowRight'){event.preventDefault();setSlide(value=>(value+1)%project.images.length)}if(event.key==='ArrowLeft'){event.preventDefault();setSlide(value=>(value+project.images.length-1)%project.images.length)}}}><DialogClose className="localized-close" aria-label={t('Close')}>×</DialogClose>{project&&<><div className="dialog-info"><p className="eyebrow">{project.type}</p><DialogTitle className="dialog-title">{project.title}</DialogTitle><DialogDescription className="dialog-description">{project.text}</DialogDescription></div><img className="dialog-image" src={project.images[slide]} alt={project.title+t(' view ')+(slide+1)}/>{project.images.length>1&&<div className="gallery-controls"><button aria-label={t("Previous image")} onClick={()=>setSlide((slide+project.images.length-1)%project.images.length)}><ArrowLeft/></button><span aria-live="polite" aria-atomic="true">{slide+1} / {project.images.length}</span><button aria-label={t("Next image")} onClick={()=>setSlide((slide+1)%project.images.length)}><ArrowRight/></button></div>}</>}</DialogContent></Dialog>
  </main>;
}



