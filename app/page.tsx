'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const projects = [
  { title: 'Living, considered', type: 'Residential interior', image: '/images/living.webp', images: ['/images/living.webp','/images/living-detail.webp'], text: 'Rich timber, layered light and a quiet palette bring the living and dining spaces together.' },
  { title: 'The retail experience', type: 'Retail design', image: '/images/retail.webp', images: ['/images/retail.webp','/images/retail-detail.webp'], text: 'A clear spatial rhythm connects fresh produce, considered displays and the everyday journey through a store.' },
  { title: 'A place to gather', type: 'Hospitality interior', image: '/images/hospitality.webp', images: ['/images/hospitality.webp'], text: 'Atmosphere takes shape through light, texture and places to sit together.' },
  { title: 'Everyday rituals', type: 'Retail design', image: '/images/bakery.webp', images: ['/images/bakery.webp'], text: 'Warm materials and focused lighting give the bakery counter a distinct presence.' },
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const project = selected === null ? null : projects[selected];
  function openProject(index: number) { setSelected(index); setSlide(0); }
  return <main id="top">
    <a className="skip-link" href="#projects">Skip to projects</a>
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src="/images/living.webp" alt="AHU Design living room with rich wood cabinetry and layered lighting" fetchPriority="high" />
      <div className="hero-shade" />
      <header className="header">
        <a className="wordmark" href="#top" aria-label="AHU Design home">AHU<span>DESIGN</span></a>
        <p className="header-note">INTERIORS & SPACES<br/>DESIGNED AROUND YOU</p>
        <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#studio">Studio</a><a href="#contact">Contact <ArrowUpRight size={15}/></a></nav>
      </header>
      <div className="hero-copy"><p className="eyebrow">AHU DESIGN — INTERIOR & RETAIL DESIGN</p><h1 id="hero-title">Spaces with<br/><span>their own story.</span></h1></div>
      <div className="hero-bottom"><a href="#projects" className="underlink">Explore our work <ArrowDown size={18}/></a><button onClick={()=>openProject(0)} className="hero-project"><span>01 / RESIDENTIAL INTERIOR</span><span>Living, considered <ArrowUpRight size={20}/></span></button></div>
      <span className="hero-index" aria-hidden="true">01 — 04</span>
    </section>

    <section id="studio" className="studio section-pad">
      <p className="eyebrow">01 / THE STUDIO</p>
      <div><h2>Thoughtful spaces.<br/><span>Lasting impressions.</span></h2><div className="studio-body"><p>We see every interior as a conversation between people and place. Materials, proportions and light come together to create spaces that feel as good as they look.</p><p>From private interiors to retail environments, our approach starts with how a space is lived in — and ends with attention to every detail.</p></div><a className="underlink dark-link" href="#approach">Our approach <ArrowDown size={18}/></a></div>
    </section>

    <section id="projects" className="projects section-pad">
      <div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>A sense of place.</h2></div><span className="project-count">INTERIORS / RETAIL / HOSPITALITY</span></div>
      <div className="project-grid">{projects.map((p,i)=><button className={'project-card project-'+i} key={p.title} onClick={()=>openProject(i)} aria-label={'View '+p.title}><div className="project-picture"><img src={p.image} alt={p.title+' — '+p.type} loading="lazy"/><span className="project-open"><ArrowUpRight size={25}/></span></div><div className="project-caption"><div><h3>{p.title}</h3><p>{p.type}</p></div><span className="project-number">0{i+1}</span></div></button>)}</div>
    </section>

    <section className="approach section-pad" id="approach"><div><p className="eyebrow">03 / OUR APPROACH</p><h2>Good design is<br/>in the details.</h2><p className="approach-intro">An idea becomes a place through a series of considered decisions.</p></div><div className="approach-list">{[['01','Understand','Listen to the brief, explore the possibilities and define what the space needs to do.'],['02','Imagine','Bring the direction to life through layouts, materials, lighting and visualisation.'],['03','Refine','Consider each element in relation to the whole, from the first impression to the smallest detail.']].map(([n,t,d])=><div className="approach-row" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></section>

    <footer id="contact" className="footer section-pad"><p className="eyebrow">04 / A NEW CONVERSATION</p><h2>Let's make<br/>room for <em>your ideas.</em></h2><div className="contact-line"><a href="mailto:hasan.alibeyli@outlook.com">hasan.alibeyli@outlook.com <ArrowUpRight size={20}/></a><a href="tel:+421944693002">+421 944 693 002 <ArrowUpRight size={20}/></a></div><div className="footer-bottom"><a href="#top" className="wordmark">AHU<span>DESIGN</span></a><p>© {new Date().getFullYear()} AHU Design</p><a className="back-top" href="#top">Back to top <ArrowUpRight size={17}/></a></div></footer>

    <Dialog open={selected!==null} onOpenChange={open=>{if(!open)setSelected(null)}}><DialogContent className="project-dialog">{project&&<><div className="dialog-info"><p className="eyebrow">{project.type}</p><DialogTitle className="dialog-title">{project.title}</DialogTitle><DialogDescription className="dialog-description">{project.text}</DialogDescription></div><img className="dialog-image" src={project.images[slide]} alt={project.title+' view '+(slide+1)}/>{project.images.length>1&&<div className="gallery-controls"><button aria-label="Previous image" onClick={()=>setSlide((slide+project.images.length-1)%project.images.length)}><ArrowLeft/></button><span>{slide+1} / {project.images.length}</span><button aria-label="Next image" onClick={()=>setSlide((slide+1)%project.images.length)}><ArrowRight/></button></div>}</>}</DialogContent></Dialog>
  </main>;
}


