/**
 * KINETIC EDITORIAL — METCH 2.0 case page
 * A dark, spacious case-study sequence built from verified Telegram facts: visual production,
 * a transforming 3D object, multi-format delivery and sound as an active visual layer.
 */
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const assetOrigin = import.meta.env.VITE_PUBLIC_ASSET_ORIGIN ?? "";
const asset = (path: string) => `${assetOrigin}${path}`;
const homeUrl = import.meta.env.BASE_URL;

const formats = [
  ["01", "9:16", "Промо для соцсетей и мобильных экранов"],
  ["02", "16:9", "Классическая горизонтальная версия"],
  ["03", "VENUE", "Главные экраны на площадке мероприятия"],
  ["04", "6 × 3", "Городские digital-билборды"],
  ["05", "9.5 × 6.5", "Наружные экраны в городе"],
];

const principles = [
  ["01", "Арт-объект", "Медитативная 3D-абстракция плавно меняет геометрию и становится визуальным образом проникновения искусства в дизайн."],
  ["02", "Пространство", "Глубокие тёмные поля, мягкий свет и контрастная типографика масштабируются от телефона до монументальных LED-экранов."],
  ["03", "Звук", "Обволакивающий эмбиент с первых секунд задаёт зрителю состояние и удерживает фокус на образе."],
];

export default function MatchCase() {
  return (
    <main className="case-page">
      <header className="case-header">
        <a className="case-brand" href={homeUrl} aria-label="Вернуться на главную VLAD MOTION">
          <img src={asset("/manus-storage/vlad-cat-mark_98340d24.png")} alt="Кошачий знак VLAD MOTION" />
          <span>VLAD KOCHENKOV<br />MOTION DESIGN</span>
        </a>
        <div className="case-header-meta"><span>CASE / 01</span><span>KRASNOYARSK / 2025</span></div>
        <a className="case-back" href={homeUrl}><span>На главную</span><ArrowUpRight size={17} /></a>
      </header>

      <section className="case-hero" aria-labelledby="case-title">
        <div className="case-hero-grid" aria-hidden="true" />
        <div className="case-hero-copy">
          <p className="eyebrow">Digital experience / conference visual system</p>
          <h1 id="case-title">СОВПАДЕНИЕ<br /><em>/ МЭТЧ 2.0</em></h1>
          <p className="case-hero-lead">Как звучит и выглядит современное искусство.</p>
        </div>
        <div className="match-art" aria-hidden="true"><div className="match-orbit match-orbit--a" /><div className="match-orbit match-orbit--b" /><div className="match-orbit match-orbit--c" /><div className="match-knot" /><div className="match-light" /></div>
        <div className="case-scroll-note"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={19} /></div>
        <div className="case-hero-index" aria-hidden="true">01 <span>/</span> 05</div>
      </section>

      <section className="case-intro">
        <div className="case-side-label">01 / BRIEF</div>
        <p className="case-intro-kicker">Конференция «Совпадение / МЭТЧ 2.0»<br />Красноярск</p>
        <h2>Нужно было уйти от банальных корпоративных заставок и сделать визуал одновременно <em>минималистичным, стильным и гипнотизирующим.</em></h2>
        <div className="case-facts">
          <p><span>Роль</span><strong>Видео-продакшен</strong></p>
          <p><span>Тема</span><strong>Дизайн сквозь призму современного искусства</strong></p>
          <p><span>Результат</span><strong>Адаптивная motion-система для офлайн-ивента</strong></p>
        </div>
      </section>

      <section className="case-principles" aria-labelledby="principles-title">
        <div className="case-principles-heading"><p className="eyebrow"><span className="splice-line" />Visual language</p><h2 id="principles-title">Три слоя<br />одной <em>сцены.</em></h2></div>
        <div className="principles-list">
          {principles.map(([number, title, copy]) => (
            <article className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="format-section" aria-labelledby="formats-title">
        <div className="format-orb" aria-hidden="true"><span>01</span><span>05</span></div>
        <div className="format-heading"><p className="eyebrow"><span className="splice-line" />Output system</p><h2 id="formats-title">Одна идея.<br /><em>Пять носителей.</em></h2><p>Контент адаптировался под разные масштабы — от личного экрана до городской поверхности.</p></div>
        <div className="format-list">{formats.map(([number, name, copy]) => <div className="format-row" key={number}><span>{number}</span><strong>{name}</strong><p>{copy}</p><ArrowUpRight size={17} /></div>)}</div>
      </section>

      <section className="source-section">
        <div className="source-copy"><p className="eyebrow">Original post / Motion This</p><h2>Смотреть<br />исходный <em>ролик.</em></h2><p>Полная 40-секундная версия и авторский рассказ о проекте опубликованы в канале «Моушенируй это».</p></div>
        <a className="source-link" href="https://t.me/motion_this/348" target="_blank" rel="noreferrer"><img src={asset("/manus-storage/vlad-cat-mark_98340d24.png")} alt="" /><span>Открыть пост<br />в Telegram</span><ArrowUpRight size={29} /></a>
      </section>

      <footer className="case-footer"><a href={homeUrl}>← VLAD MOTION</a><span>© 2026 / CASE 01</span><a href="mailto:vlad.515@gmail.com">vlad.515@gmail.com <ArrowUpRight size={15} /></a></footer>
    </main>
  );
}
