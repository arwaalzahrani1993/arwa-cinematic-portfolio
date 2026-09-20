import { useEffect, useRef, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import {
  ArrowDownLeft,
  ArrowUpLeft,
  Moon,
  Sun,
} from '@phosphor-icons/react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import MotionCatalog from './MotionCatalog'
import PolishReport from './PolishReport'

type Project = {
  title: string
  category: string
  summary: string
  image: string
  href: string
  alt: string
}

const projects: Project[] = [
  {
    title: 'Repose',
    category: 'مفهوم رقمي لمقهى سيارات',
    summary: 'هوية رقمية سريعة وواضحة تحوّل لحظة الطلب إلى تجربة بصرية كاملة.',
    image: '/images/repose-cover.jpg',
    href: 'https://repose-drive-through-delight.lovable.app/',
    alt: 'تصور معماري سينمائي لمقهى سيارات حديث بواجهة حمراء',
  },
  {
    title: 'نَفَس',
    category: 'رحلة قهوة تفاعلية',
    summary: 'سرد بصري دافئ يربط طقوس القهوة بالحركة والإيقاع والمساحة.',
    image: '/images/nafas-cover.jpg',
    href: 'https://nafas-coffee-journey.vercel.app/',
    alt: 'مشهد سينمائي لصب القهوة العربية في كأس زجاجي',
  },
  {
    title: 'مدار',
    category: 'تجربة ثلاثية الأبعاد',
    summary: 'مختبر حركة وتجسيم يوازن بين الجرأة البصرية وسلاسة الأداء.',
    image: '/images/madar-cover.jpg',
    href: 'https://madar-3d-lab.vercel.app/',
    alt: 'كرة كروم داخل ممر معماري داكن مع أثر ضوئي أحمر',
  },
]

const capabilities = [
  ['صفحات الهبوط', 'هيكل واضح، رسالة قوية، ومسار يقود للطلب.'],
  ['التجارب التفاعلية', 'حركة محسوبة تجعل التصفح جزءًا من القصة.'],
  ['الهوية الرقمية', 'نظام بصري يترجم شخصية المشروع عبر كل شاشة.'],
]

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    })
    let frame = 0
    const animate = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [reduceMotion])

  return children
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('arwa-theme', next ? 'dark' : 'light')
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
    >
      {isDark ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
    </button>
  )
}

function SmartImage({ src, alt }: { src: string; alt: string }) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  return (
    <div className={`image-shell image-${status}`}>
      {status === 'loading' && <span className="image-loading" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus('ready')}
        onError={() => setStatus('error')}
      />
      {status === 'error' && <p>تعذّر تحميل الصورة</p>}
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="العودة إلى بداية الصفحة">ARWA</a>
      <nav aria-label="التنقل الرئيسي">
        <a href="#work">الأعمال</a>
        <a href="#services">ما أقدمه</a>
        <a href="#about">عني</a>
        <a href="/motion-catalog">مختبر الحركة</a>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <a className="header-cta" href="#contact">ابدئي مشروعك</a>
      </div>
    </header>
  )
}

function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.06])

  return (
    <section ref={heroRef} id="top" className="hero section-pad">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          تصميم مواقع عربية
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          أصمّم مواقع تتحرّك بفكرة، وتبيع بثقة.
        </motion.h1>
        <motion.div
          className="hero-bottom"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>صفحات هبوط عربية تجمع الوضوح، الإحساس، والأداء لمشاريع تريد أن تُرى.</p>
          <a className="text-link" href="#work">
            شوفي الأعمال <ArrowDownLeft size={19} weight="bold" />
          </a>
        </motion.div>
      </div>

      <motion.div className="hero-media" style={{ y: imageY, scale: imageScale }}>
        <img
          src="/images/madar-cover.jpg"
          alt="مشهد تجريدي لفضاء أسود وكتلة كروم مضاءة بالأحمر"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>
    </section>
  )
}

function Statement() {
  return (
    <section id="about" className="statement section-pad">
      <Reveal>
        <p className="statement-small">أصمّم من الفكرة إلى الرابط النهائي.</p>
        <h2>
          الجمال يجذب النظر.
          <span> الوضوح يحوّل الاهتمام إلى قرار.</span>
        </h2>
      </Reveal>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="work section-pad">
      <Reveal className="section-heading">
        <p className="eyebrow">أعمال مختارة</p>
        <h2>كل مشروع له إيقاعه.</h2>
      </Reveal>

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.title} className={`project project-${index + 1}`}>
            <a href={project.href} target="_blank" rel="noreferrer" aria-label={`فتح مشروع ${project.title}`}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                <SmartImage src={project.image} alt={project.alt} />
              </motion.div>
              <div className="project-copy">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <p className="project-summary">{project.summary}</p>
                <ArrowUpLeft className="project-arrow" size={28} weight="light" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="services section-pad">
      <Reveal className="services-title">
        <h2>أبني تجربة تُفهم بسرعة، وتُذكر طويلًا.</h2>
      </Reveal>
      <div className="service-grid">
        {capabilities.map(([title, body], index) => (
          <Reveal key={title} className={`service service-${index + 1}`}>
            <h3>{title}</h3>
            <p>{body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Method() {
  return (
    <section className="method section-pad">
      <Reveal className="method-intro">
        <p>من السؤال الصحيح إلى تجربة جاهزة للناس.</p>
        <h2>فكرة واضحة. نظام بصري. بناء دقيق.</h2>
      </Reveal>
      <div className="method-track" role="list" aria-label="طريقة العمل">
        {[
          ['نفهم', 'نحدّد الهدف، الجمهور، والقرار الذي نريد من الزائر اتخاذه.'],
          ['نصمّم', 'نحوّل الاستراتيجية إلى تكوين بصري وحركة لها معنى.'],
          ['نبني', 'نطوّر التجربة، نختبرها على الجوال، ونصقل الأداء.'],
        ].map(([title, body]) => (
          <Reveal key={title} className="method-item">
            <div role="listitem">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Proof() {
  return (
    <section className="proof section-pad">
      <Reveal className="proof-copy">
        <h2>الحركة ليست زينة.</h2>
        <p>هي طريقة لترتيب الانتباه، توضيح الفكرة، وجعل كل انتقال يبدو طبيعيًا.</p>
      </Reveal>
      <Reveal className="proof-metrics">
        <div>
          <strong>3</strong>
          <span>مشاريع منشورة</span>
        </div>
        <div>
          <strong>RTL</strong>
          <span>تجارب عربية أولًا</span>
        </div>
        <div>
          <strong>AA</strong>
          <span>تباين واضح</span>
        </div>
      </Reveal>
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className="contact section-pad">
      <Reveal>
        <p>عندك فكرة تستحق حضورًا أقوى؟</p>
        <a href="mailto:hello@arwa.design">
          خلّينا نبنيها
          <ArrowUpLeft size={48} weight="light" />
        </a>
      </Reveal>
      <div className="footer-line">
        <span>ARWA</span>
        <a href="/motion-catalog">دراسة الحركة</a>
        <a href="/polish-report">تقرير الصقل</a>
        <span>تصميم وتطوير تجارب الويب</span>
      </div>
    </footer>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/motion-catalog') {
    return <MotionCatalog />
  }

  if (path === '/polish-report') {
    return <PolishReport />
  }

  if (path !== '/') {
    return (
      <main className="not-found" id="main-content">
        <p>404 / الرابط غير موجود</p>
        <h1>يبدو أن هذه الصفحة خرجت من المشهد.</h1>
        <a href="/">العودة إلى البداية <ArrowUpLeft size={22} weight="bold" /></a>
      </main>
    )
  }

  return (
    <SmoothScroll>
      <a className="skip-link" href="#main-content">تخطّي إلى المحتوى</a>
      <motion.div aria-hidden="true" className="page-progress" style={{ scaleX: scrollYProgress }} />
      <Header />
      <main id="main-content">
        <Hero />
        <Statement />
        <Work />
        <Services />
        <Method />
        <Proof />
      </main>
      <Contact />
    </SmoothScroll>
  )
}

export default App
