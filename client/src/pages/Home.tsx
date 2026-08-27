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
  ["Процесс", "#process"],
  ["Канал", "#channel"],
  ["Обо мне", "#about"],
  ["Контакт", "#contact"],
];

const studyModes = [
  { id: "form", index: "01", title: "ФОРМА", titleEn: "FORM", description: "Объект, который хочется ощутить. 3D-форма и материал становятся главным языком истории.", tools: "CINEMA 4D / BLENDER", tone: "blue" },
  { id: "rhythm", index: "02", title: "РИТМ", titleEn: "RHYTHM", description: "Монтаж, типографика и звук собираются в темп, который ведёт внимание без лишних объяснений.", tools: "AFTER EFFECTS / EDITING", tone: "cream" },
  { id: "signal", index: "03", title: "СИГНАЛ", titleEn: "SIGNAL", description: "AI и VFX включаются только там, где они делают идею точнее, а не громче.", tools: "UNREAL / AI VIDEO / VFX", tone: "signal" },
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
  const [activeStudy, setActiveStudy] = useState("form");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const currentStudy = studyModes.find((study) => study.id === activeStudy) ?? studyModes[0];

  return (
    <main>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand-mark" href="#top" aria-label="На главную">
          <img src="/manus-storage/vlad-cat-mark_98340d24.png" alt="Кошачий знак VLAD MOTION" />
        </a>
        <p className="header-role">VLAD KOCHENKOV<br />motion design</p>
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
            <p>2D & 3D brand motion<br />Moscow / available worldwide</p>
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

      <section className="showreel-section" aria-labelledby="showreel-title">
        <div className="showreel-heading">
          <div>
            <p className="eyebrow"><span className="splice-line" />00 / Showreel <img className="section-cat-mark" src="/manus-storage/vlad-cat-mark_98340d24.png" alt="" /></p>
            <h2 id="showreel-title">Смотреть<br /><em>шоурил.</em></h2>
          </div>
          <p>57 секунд движения: 2D и 3D моушн, предметная визуализация, симуляции и кинетическая типографика.</p>
        </div>
        <div className="showreel-player">
          <div className="showreel-corner showreel-corner--tl" /><div className="showreel-corner showreel-corner--br" />
          <iframe src="https://www.youtube-nocookie.com/embed/inF690u-h1s?rel=0&modestbranding=1" title="Vlad Kochenkov — Motion Designer Showreel 2025" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <div className="showreel-caption"><span>VLAD KOCHENKOV / SHOWREEL 2025</span><span>00:57 / PLAY IN PLACE</span></div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="splice-line" />Selected work <img className="section-cat-mark" src="/manus-storage/vlad-cat-mark_98340d24.png" alt="" /></p>
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
              <h3>TAKE / 03</h3>
              <p>Открытый слот</p>
            </div>
          </a>
        </div>
      </section>

      <section className="motion-lab" id="process" aria-labelledby="process-title">
        <div className="lab-rail" aria-hidden="true"><span>03 / MOTION SYSTEM</span><span>VLAD KOCHENKOV</span><span>LIVE STUDY</span></div>
        <div className="lab-heading">
          <p className="eyebrow"><span className="splice-line" />Внутри процесса <img className="section-cat-mark" src="/manus-storage/vlad-cat-mark_98340d24.png" alt="" /></p>
          <h2 id="process-title">Движение<br />имеет <em>вес.</em></h2>
          <p>Выберите параметр, чтобы посмотреть, из каких слоёв собирается мой подход к движению.</p>
        </div>
        <div className="lab-interface">
          <div className={`lab-stage lab-stage--${currentStudy.tone}`}>
            <div className="lab-orbit lab-orbit--one" /><div className="lab-orbit lab-orbit--two" /><div className="lab-orbit lab-orbit--three" />
            <div className="lab-core"><span>{currentStudy.index}</span><strong>{currentStudy.titleEn}</strong></div>
            <div className="lab-status"><span>PARAMETER / {currentStudy.index}</span><span>ACTIVE</span></div>
          </div>
          <div className="lab-controls" role="tablist" aria-label="Параметры моушн-процесса">
            {studyModes.map((study) => (
              <button className={`lab-control ${activeStudy === study.id ? "lab-control--active" : ""}`} type="button" role="tab" aria-selected={activeStudy === study.id} key={study.id} onClick={() => setActiveStudy(study.id)}>
                <span>{study.index}</span><strong>{study.title}</strong><i>{study.titleEn}</i><ArrowUpRight size={17} aria-hidden="true" />
              </button>
            ))}
            <div className="lab-note"><p>{currentStudy.description}</p><span>{currentStudy.tools}</span></div>
          </div>
        </div>
      </section>

      <section className="channel-section" id="channel" aria-labelledby="channel-title">
        <div className="channel-number" aria-hidden="true">04</div>
        <div className="channel-heading">
          <p className="eyebrow"><span className="splice-line" />Side channel / Telegram</p>
          <h2 id="channel-title">Моушенируй<br /><em>это.</em></h2>
        </div>
        <div className="channel-panel">
          <div className="channel-panel-top"><span>TELEGRAM / @MOTION_THIS</span><span>ACTIVE CHANNEL</span></div>
          <div className="channel-core">
            <img src="/manus-storage/vlad-cat-mark_98340d24.png" alt="Кошачий знак канала Моушенируй это" />
            <div className="channel-core-copy">
              <p>Кейсы, моушн-приёмы и AI в реальной работе.</p>
              <p>WIP, инструменты, промпты и разборы — без шума.</p>
            </div>
          </div>
          <div className="channel-topics" aria-label="Темы канала"><span>WIP</span><span>TOOLS</span><span>PROMPTS</span><span>BREAKDOWNS</span></div>
          <a className="channel-link" href="https://t.me/motion_this" target="_blank" rel="noreferrer"><span>Открыть канал</span><ArrowUpRight size={24} /></a>
        </div>
        <p className="channel-side-note">Здесь я показываю не только результат, но и решения, которые приводят к движению.</p>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-mark" aria-hidden="true">/</div>
        <aside className="about-ledger" aria-hidden="true"><span>05 / PROCESS ACT</span><span>FRAME 272–318</span><span>SIGNAL / VLAD</span></aside>
        <span className="about-seq-number" aria-hidden="true">05</span>
        <div className="about-copy">
          <p className="eyebrow"><span className="splice-line" />О практике <img className="section-cat-mark" src="/manus-storage/vlad-cat-mark_98340d24.png" alt="" /></p>
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
        <div className="contact-topline"><span>06 / Link up</span><span>Москва · работа по всему миру</span></div>
        <div className="contact-stage">
          <div className="contact-copy">
            <p className="eyebrow">Сигнал связи / 04</p>
            <h2 id="contact-title">Точка<br /><em>связи.</em></h2>
            <p className="contact-description">Напишите пару строк о задаче. Я отвечу с направлением и следующим шагом.</p>
          </div>
          <div className="contact-signal" aria-hidden="true">
            <span className="signal-label signal-label--top">CHANNEL / VLAD.MOTION</span>
            <span className="signal-label signal-label--bottom">CHANNEL OPEN / 24–7</span>
            <div className="signal-ring signal-ring--outer" />
            <div className="signal-ring signal-ring--inner" />
            <img src="/manus-storage/vlad-cat-mark_98340d24.png" alt="" />
          </div>
        </div>
        <div className="contact-footer contact-footer--terminal">
          <a className="email-link" href="mailto:vlad.515@gmail.com"><span>Direct channel / e-mail</span><strong>vlad.515@gmail.com</strong><ArrowUpRight size={25} strokeWidth={1.45} /></a>
          <div className="social-links"><a href="https://www.instagram.com/vlad515/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/vlad515/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="https://www.behance.net/vlad515" target="_blank" rel="noreferrer">Behance <ArrowUpRight size={14} /></a></div>
          <p>© 2026 / VLAD KOCHENKOV<br />MOTION DESIGN · MOSCOW</p>
        </div>
      </section>
    </main>
  );
}
