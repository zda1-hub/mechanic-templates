"use client";

import { useState } from "react";

const directions = [
  { id: "precision", number: "01", name: "Precision", note: "Clean · Technical · Assured" },
  { id: "garage", number: "02", name: "Garage", note: "Bold · Fast · Unfiltered" },
  { id: "neighbor", number: "03", name: "Neighbor", note: "Warm · Local · Trustworthy" },
] as const;
type Direction = (typeof directions)[number]["id"];
const services = [
  ["Diagnostics", "We find the actual problem before replacing a single part.", "From $129"],
  ["Brake service", "Quiet, confident stopping with quality parts that fit your drive.", "From $189"],
  ["Scheduled care", "Oil, fluids, filters and inspections—handled on your car’s timeline.", "From $79"],
];

export default function Showcase() {
  const [direction, setDirection] = useState<Direction>("precision");
  const active = directions.find((item) => item.id === direction)!;
  return <main className={`site direction-${direction}`}>
    <div className="direction-bar">
      <div className="direction-label"><span>Northline / Design study</span><strong>Choose a direction</strong></div>
      <div className="direction-options" role="group" aria-label="Choose a website design direction">{directions.map((item) => <button key={item.id} className={direction === item.id ? "active" : ""} onClick={() => setDirection(item.id)} aria-pressed={direction === item.id}><span>{item.number}</span><strong>{item.name}</strong><small>{item.note}</small></button>)}</div>
      <div className="current-direction" aria-live="polite"><span>Viewing</span><strong>{active.number} / {active.name}</strong></div>
    </div>
    <div className="website-shell">
      <header className="site-header"><a className="brand" href="#top" aria-label="Northline Auto home"><span className="brand-mark">N</span><span>NORTHLINE<small>AUTO SERVICE</small></span></a><nav aria-label="Main navigation"><a href="#services">Services</a><a href="#promise">Our shop</a><a href="#reviews">Reviews</a></nav><div className="header-actions"><a className="phone" href="tel:+16025550148">(602) 555-0148</a><a className="button button-small" href="#book">Book service</a></div></header>
      <section className="hero" id="top"><div className="hero-copy"><p className="kicker"><span>Independent since 1998</span><span>Phoenix, Arizona</span></p><h1><span className="precision-headline">The right fix.<br/>No runaround.</span><span className="garage-headline">We fix cars.<br/>Not prices.</span><span className="neighbor-headline">Car care you can feel good about.</span></h1><p className="hero-intro">Straight answers, skilled technicians, and repairs we’re proud to put our name on. That’s the Northline way.</p><div className="hero-actions"><a className="button" href="#book">Schedule service <span>↗</span></a><a className="secondary-link" href="#services">Explore services <span>↓</span></a></div><div className="trust-row"><span><b>4.9</b> ★★★★★<small>428 local reviews</small></span><span><b>3 yr / 36k</b><small>mile nationwide warranty</small></span></div></div><div className="hero-image"><img src="./mechanic-hero.jpg" alt="Northline technician inspecting a vehicle engine"/><div className="image-badge"><strong>ASE</strong><span>Certified<br/>technicians</span></div><p>01 — Careful diagnosis<br/>before every repair.</p></div><div className="garage-stamp" aria-hidden="true">HONEST WORK • CLEAR ANSWERS • <b>N</b></div></section>
      <section className="proof-strip" aria-label="Shop benefits"><span>Same-day service available</span><span>Digital vehicle inspections</span><span>Free local shuttle</span><span>Nationwide warranty</span></section>
      <section className="services-section" id="services"><div className="section-intro"><p className="eyebrow">What we do / 01</p><h2>Everything your car needs.<br/>Nothing it doesn’t.</h2><p>From warning lights to routine maintenance, we make the whole process clear and comfortable.</p></div><div className="service-list">{services.map(([title, text, price], index) => <article key={title}><span className="service-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><strong>{price}</strong><a href="#book" aria-label={`Learn about ${title}`}>↗</a></article>)}</div></section>
      <section className="promise" id="promise"><div className="promise-photo"><img src="./mechanic-hero.jpg" alt="A technician working carefully under the hood"/></div><div className="promise-copy"><p className="eyebrow">The Northline promise / 02</p><blockquote>“If we wouldn’t recommend it to family, we won’t recommend it to you.”</blockquote><p>Every repair starts with a conversation. We’ll show you what we found, explain your options in plain English, and let you decide—without pressure.</p><span>Marcus Hill · Owner &amp; Master Technician</span></div></section>
      <section className="review" id="reviews"><div className="review-score"><strong>4.9</strong><span>★★★★★</span><small>Based on 428 reviews</small></div><blockquote>“The first shop that made me feel informed instead of intimidated. They sent photos, explained what could wait, and finished exactly when promised.”<cite>— Maya R. · Honda CR-V owner</cite></blockquote></section>
      <section className="booking" id="book"><div><p className="eyebrow">Ready when you are</p><h2>Let’s get you<br/>back on the road.</h2></div><div className="booking-details"><p>Tell us what’s going on. We’ll confirm your appointment within one business hour.</p><a className="button button-light" href="tel:+16025550148">Call (602) 555-0148 <span>↗</span></a><a className="booking-link" href="mailto:service@northlineauto.com">service@northlineauto.com</a></div></section>
      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">N</span><span>NORTHLINE<small>AUTO SERVICE</small></span></a><div><span>2125 N 24th St · Phoenix, AZ</span><span>Mon–Fri 7:30–5:30</span></div><span>© 2026 Northline Auto</span></footer>
    </div>
  </main>;
}
