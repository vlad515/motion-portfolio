/**
 * KINETIC EDITORIAL — Home page
 * Black studio canvas, oversized Space Grotesk display type, electric-blue splice marks,
 * asymmetric title-sequence composition and restrained motion. Does this reinforce the philosophy?
 */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, Plus, X } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "КЕЙС / 01",
    type: "Рил готовится к премьере",
    tag: "MOTION FILM",
    code: "00:01:12 / 25 FPS",
    className: "project-card--wide",
  },
  {
    number: "02",
    title: "КЕЙС / 02",
    type: "Система выходит из монтажной",
    tag: "IDENTITY SYSTEM",
    code: "00:02:08 / 25 FPS",
    className: "project-card--tall",
  },
];

const navItems = [
  ["Работы", "#work"],
  ["Обо мне", "#about"],
  ["Контакт", "#contact"],
];

function MagneticLink({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  return (
    <a className={`magnetic-link ${className}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand-mark" href="#top" aria-label="На главную">
          <img src="/manus-storage/vlad-motion-mark_8819c82c.png" alt="Фирменный знак VLAD MOTION" />
        </a>
        <p className="header-role">VLAD MOTION<br />motion design</p>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navItems.map(([label, href], index) => (
            <a key={href} href={href}><span>0{index + 1}</span>{label}</a>
          ))}
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}>
          {menuOpen ? <X size={21} /> : <Menu size={23} />}
        </button>
        <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}><span>0{index + 1}</span>{label}</a>
          ))}
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img src="/manus-storage/blue-motion-hero_fab970bc.jpg" alt="" />
          <div className="hero-image-shade" />
        </div>
        <motion.div className="hero-meta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }}>
          <span className="pulse-dot" />Открыт к новым проектам / Москва
        </motion.div>
        <div className="hero-title-wrap">
          <motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.25 }}>Portfolio / 2026</motion.p>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}>
            <span>VLAD</span>
            <em>MOTION</em>
          </motion.h1>
          <motion.div className="hero-bottom" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.55 }}>
            <p>Движение для идей, которым тесно в статике.</p>
            <a className="scroll-cue" href="#work" aria-label="Перейти к работам"><ArrowDownRight size={24} /></a>
          </motion.div>
        </div>
        <div className="hero-index" aria-hidden="true">01 / MOSCOW <span>·</span> 04</div>
      </section>

      <section className="ticker" aria-label="Направления работы">
        <div className="ticker-track">
          <span>Motion / Direction / Design <i>✳</i> VLAD MOTION / MOSCOW <i>✳</i> Motion / Direction / Design <i>✳</i> VLAD MOTION / MOSCOW <i>✳</i></span>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="splice-line" />Selected work</p>
            <h2 id="work-title">Новые работы<br /><em>в монтаже.</em></h2>
          </div>
          <p className="section-note">Кейсы появятся здесь по мере выхода. Пока — место для следующих сильных кадров.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a className={`project-card ${project.className}`} key={project.number} href="#contact" aria-label={`Обсудить ${project.title}`}>
              <div className="project-frame project-frame--pending">
                <div className="frame-corner frame-corner--top" />
                <div className="frame-corner frame-corner--bottom" />
                <div className="frame-data"><span>V.M / UNRELEASED</span><span>{project.code}</span></div>
                <div className="frame-crop frame-crop--horizontal" /><div className="frame-crop frame-crop--vertical" />
                <p className="pending-meta">{project.tag}</p>
                <strong>{project.number}</strong>
                <span className="view-project">Запросить слот <ArrowUpRight size={17} /></span>
              </div>
              <div className="project-caption">
                <span className="project-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.type}</p>
              </div>
            </a>
          ))}
          <a className="project-card project-card--type" href="#contact" aria-label="Обсудить следующий проект">
            <div className="type-slab">
              <p className="eyebrow">03 / На таймлайне</p>
              <div className="type-slab-word">TAKE</div>
              <span className="plus-mark"><Plus size={31} strokeWidth={1.5} /></span>
              <p className="type-slab-foot">Следующий кадр<br />ещё не снят.</p>
            </div>
            <div className="project-caption">
              <span className="project-number">03</span>
              <h3>NEXT TAKE</h3>
              <p>Открытый слот</p>
            </div>
          </a>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-mark" aria-hidden="true">/</div>
        <aside className="about-ledger" aria-hidden="true"><span>03 / PROCESS ACT</span><span>FRAME 272–318</span><span>MODE / KADR</span></aside>
        <span className="about-seq-number" aria-hidden="true">03</span>
        <div className="about-copy">
          <p className="eyebrow"><span className="splice-line" />О практике</p>
          <h2 id="about-title">Идея не должна<br />стоять на <em>месте.</em></h2>
          <p className="about-lead">Я работаю между стратегией и ощущением: нахожу визуальное напряжение, собираю систему и задаю ей ритм.</p>
          <p className="about-caption">Moscow / Direction / 2026<br />Каждый кадр должен менять интонацию.</p>
          <div className="services-list">
            <p><span>01</span> Motion identity</p>
            <p><span>02</span> Campaign systems</p>
            <p><span>03</span> 3D & title design</p>
          </div>
        </div>
        <div className="about-sidebar">
          <p>База<br /><strong>Москва / 55°45′N</strong></p>
          <p>Коллаборации<br /><strong>Без границ</strong></p>
          <MagneticLink href="#contact">Войти в кадр</MagneticLink>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-topline"><span>04 / Связь</span><span>Конец рила. Начало разговора.</span></div>
        <h2 id="contact-title">Поговорим<br />в <em>эфире.</em></h2>
        <div className="contact-footer">
          <a className="email-link" href="mailto:vlad.515@gmail.com">vlad.515@gmail.com <ArrowUpRight size={30} strokeWidth={1.35} /></a>
          <div className="social-links"><a href="#top">Instagram</a><a href="#top">LinkedIn</a><a href="#top">Behance</a></div>
          <p>© 2026 / VLAD MOTION<br />signal over noise</p>
        </div>
      </section>
    </main>
  );
}
