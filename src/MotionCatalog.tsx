import { ArrowUpLeft, CheckCircle, Sparkle } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import './motion-catalog.css'

type MotionTag = 'حالة' | 'استمرارية' | 'هرمية' | 'شخصية' | 'زينة'

type MotionItem = {
  name: string
  description: string
  tags: MotionTag[]
}

type SiteStudy = {
  index: string
  name: string
  date: string
  awardUrl: string
  liveUrl: string
  motion: MotionItem[]
  surprise: string
}

const tagLabels: Record<MotionTag, string> = {
  حالة: 'STATUS',
  استمرارية: 'CONTINUITY',
  هرمية: 'HIERARCHY',
  شخصية: 'PERSONALITY',
  زينة: 'DECORATION',
}

const studies: SiteStudy[] = [
  {
    index: '01',
    name: 'Pensatori Irrazionali',
    date: '20 سبتمبر 2026',
    awardUrl: 'https://www.awwwards.com/sites/pensatori-irrazionali',
    liveUrl: 'https://pensatori-irrazionali.com/',
    motion: [
      { name: 'محمّل البداية', description: 'تظهر حالات النظام والنصوص على مراحل قبل كشف الصفحة.', tags: ['حالة', 'شخصية'] },
      { name: 'انتقال الصفحات', description: 'مسح بصري يغلق المشهد الحالي ثم يفتح المشهد التالي بلا قطع مفاجئ.', tags: ['استمرارية'] },
      { name: 'قائمة التنقل', description: 'تتدرّج الروابط والعناصر الثانوية لتوضيح ترتيب القراءة.', tags: ['هرمية'] },
      { name: 'مخططات النظام', description: 'طبقات WebGL وSVG تتحرك مع التمرير وكأن الواجهة نظام حي.', tags: ['شخصية', 'هرمية'] },
      { name: 'معرض Universe', description: 'السحب والتحريك يربطان الأعمال داخل مساحة واحدة ممتدة.', tags: ['استمرارية', 'شخصية'] },
      { name: 'حالات المرور', description: 'العناوين والأزرار تتبدّل بالتحريك والشفافية عند المرور والضغط.', tags: ['حالة'] },
      { name: 'المشروع التالي', description: 'ينمو المشهد التالي من نهاية المشروع الحالي بدل العودة للقائمة.', tags: ['استمرارية'] },
      { name: 'صفحة 404', description: 'الخطأ يتحول إلى لحظة متحركة من نفس لغة الاستوديو.', tags: ['شخصية', 'حالة'] },
    ],
    surprise: 'المفاجأة: الحركة تشبه إشارات نظام تشغيل؛ حتى الزينة تقول للزائر ماذا يحدث الآن.',
  },
  {
    index: '02',
    name: 'Boc.Studio',
    date: '19 سبتمبر 2026',
    awardUrl: 'https://www.awwwards.com/sites/boc-studio',
    liveUrl: 'https://boc.studio/',
    motion: [
      { name: 'دخول الصفحة', description: 'كشف سريع للشعار ثم انتقال إلى المشهد الرئيسي.', tags: ['حالة', 'استمرارية'] },
      { name: 'شرائط Hero اللانهائية', description: 'عبارات الاستوديو تتحرك بسرعات مختلفة لتكوين عمق وإيقاع.', tags: ['شخصية', 'زينة'] },
      { name: 'زر Showreel', description: 'يتفاعل بصريًا قبل فتح الفيديو ويجعله نقطة الانتباه الأولى.', tags: ['هرمية', 'حالة'] },
      { name: 'فلترة الأعمال', description: 'تعاد مواضع المشاريع بسلاسة عند تبديل التصنيف.', tags: ['استمرارية', 'حالة'] },
      { name: 'صور المشاريع', description: 'تظهر الصور والعناوين تدريجيًا ويتغيّر مقياسها عند المرور.', tags: ['هرمية'] },
      { name: 'حركة صفحة About', description: 'النص والصور يتبادلان الظهور مع التمرير لتكوين سرد.', tags: ['استمرارية', 'شخصية'] },
      { name: 'كشف الفوتر', description: 'يخرج الفوتر من خلف المحتوى بدل أن يبدأ كقسم منفصل.', tags: ['استمرارية'] },
      { name: 'صفحة 404', description: 'تعالج الرابط المفقود بحركة متوافقة مع لغة العلامة.', tags: ['حالة', 'شخصية'] },
    ],
    surprise: 'المفاجأة: شرائط النص ليست نسخة واحدة؛ مددها تمتد تقريبًا من 30 إلى 123 ثانية، لذلك لا تتكرر اللقطة سريعًا.',
  },
  {
    index: '03',
    name: 'Noho',
    date: '18 سبتمبر 2026',
    awardUrl: 'https://www.awwwards.com/sites/noho',
    liveUrl: 'https://noho.ink/',
    motion: [
      { name: 'المقدمة', description: 'تحميل قصير يقدّم المنتج قبل انتقاله إلى مكانه داخل الصفحة.', tags: ['حالة', 'استمرارية'] },
      { name: 'مؤشر استهلاك الطاقة', description: 'يتغيّر المؤشر فور تبديل الوضع الداكن أو تقليل الحركة.', tags: ['حالة', 'هرمية'] },
      { name: 'معرض التمرير', description: 'الصور والنسخ تتراكب وتتحرك بسرعات مختلفة أثناء الاستكشاف.', tags: ['استمرارية', 'هرمية'] },
      { name: 'كرسي ثلاثي الأبعاد', description: 'الدوران والسحب وتغيير اللون يجعل المنتج قابلًا للفحص.', tags: ['هرمية', 'شخصية'] },
      { name: 'الشريط الجانبي للمدونة', description: 'ينزلق من الحافة ويبقي سياق الصفحة واضحًا.', tags: ['هرمية', 'استمرارية'] },
      { name: 'Quiet layer', description: 'شاشة هادئة تظهر بعد الخمول لتقليل الاستهلاك البصري والطاقة.', tags: ['حالة', 'شخصية'] },
      { name: 'تفاعلات الأزرار', description: 'ردود صغيرة للمرور والضغط وتبديل اللون.', tags: ['حالة'] },
      { name: 'الفوتر المرح', description: 'كشف وحركة ختامية خفيفة تمنح النهاية شخصية.', tags: ['استمرارية', 'شخصية'] },
    ],
    surprise: 'المفاجأة: تقليل الحركة جزء من قصة الاستدامة والمنتج، وليس خيار إتاحة مخفيًا فقط.',
  },
  {
    index: '04',
    name: 'LxL Creative',
    date: '17 سبتمبر 2026',
    awardUrl: 'https://www.awwwards.com/sites/lxl-creative',
    liveUrl: 'https://www.lxlcreative.co.uk/',
    motion: [
      { name: 'افتتاحية Hero', description: 'فيديو ونص كبير يظهران على إيقاع واحد لتثبيت النبرة السينمائية.', tags: ['هرمية', 'شخصية'] },
      { name: 'مؤشر DRAG', description: 'المؤشر يشرح إمكانية السحب قبل أن يجرّبها الزائر.', tags: ['حالة'] },
      { name: 'شريط الخدمات', description: 'أسماء الخدمات تمر باستمرار مثل شريط عناوين إنتاج.', tags: ['شخصية', 'زينة'] },
      { name: 'الأعمال المميزة', description: 'السحب الأفقي وتبديل الصور يحوّلان المشاريع إلى شريط أفلام.', tags: ['هرمية', 'استمرارية'] },
      { name: 'تحريك النص أثناء التمرير', description: 'يتغيّر مقياس الكلمات وموضعها لتوجيه العين بين الفقرات.', tags: ['هرمية'] },
      { name: 'تبديل الصوت', description: 'زر الصوت يعطي حالة واضحة ويربط الحركة بالمشهد السمعي.', tags: ['حالة', 'شخصية'] },
      { name: 'رابط التواصل', description: 'استجابة مغناطيسية وتحوّل سهم يؤكدان إمكانية النقر.', tags: ['حالة'] },
      { name: 'كشف الفوتر والانتقالات', description: 'تتصل نهاية الصفحة وبداية الصفحة التالية بحركة واحدة.', tags: ['استمرارية'] },
    ],
    surprise: 'المفاجأة: الحركة والصوت يبدوان كجزء من حملة سينمائية واحدة، لا كواجهة وكالة تقليدية.',
  },
  {
    index: '05',
    name: 'L.I.S.A.',
    date: '16 سبتمبر 2026',
    awardUrl: 'https://www.awwwards.com/sites/l-i-s-a',
    liveUrl: 'https://lisa.locomotive.ca/en',
    motion: [
      { name: 'تشويش البداية', description: 'رموز متبدلة تكشف هوية المساعد قبل ظهور الحوار.', tags: ['حالة', 'شخصية'] },
      { name: 'مؤشر الكتابة', description: 'نبض وانتظار قصير يوضحان أن المساعد يجهّز الرد.', tags: ['حالة'] },
      { name: 'الانتقال الحواري', description: 'كل إجابة تنقل المشهد من خلال الحوار بدل قائمة تقليدية.', tags: ['استمرارية', 'هرمية'] },
      { name: 'النموذج ثلاثي الأبعاد', description: 'يتفاعل مع المؤشر والتمرير ليصبح شخصية داخل الواجهة.', tags: ['شخصية', 'زينة'] },
      { name: 'لقطات الفيديو', description: 'تظهر المقاطع في اللحظة التي يحتاجها السرد لتأكيد الفكرة.', tags: ['هرمية'] },
      { name: 'اقتراحات الرد', description: 'تتبدّل حالتها عند المرور والاختيار وتُبقي القرار واضحًا.', tags: ['حالة', 'هرمية'] },
      { name: 'تحولات النص', description: 'الحروف تتشوّش ثم تستقر لتربط التقنية بصوت العلامة.', tags: ['شخصية', 'زينة'] },
      { name: 'استجابة الجوال', description: 'يعاد ترتيب الحوار والنموذج بحركة أخف على الشاشات الصغيرة.', tags: ['استمرارية'] },
    ],
    surprise: 'المفاجأة: المساعد نفسه هو نظام التنقل؛ التفاعل ليس طبقة فوق الموقع بل هو الموقع.',
  },
]

export default function MotionCatalog() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="motion-catalog-page">
      <a className="skip-link" href="#catalog-main">تخطّي إلى المحتوى</a>
      <header className="catalog-nav">
        <a className="brand" href="/">ARWA</a>
        <p>مختبر الحركة · سبتمبر 2026</p>
        <a className="catalog-back" href="/">العودة للبورتفوليو</a>
      </header>

      <main id="catalog-main">
        <section className="catalog-hero">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="catalog-kicker"><Sparkle size={16} weight="fill" /> MOTION TASTE / BRONZE</p>
            <h1>خمس تجارب.<br /><span>أربعون لحظة حركة.</span></h1>
          </motion.div>
          <div className="catalog-intro">
            <p>تفكيك حركة خمسة مواقع فازت بـ Site of the Day خلال آخر 30 يومًا، وتصنيف وظيفة كل حركة بدل الحكم عليها بأنها «حلوة» فقط.</p>
            <dl>
              <div><dt>المواقع</dt><dd>05</dd></div>
              <div><dt>الحركات</dt><dd>40</dd></div>
              <div><dt>الفترة</dt><dd>16—20.09</dd></div>
            </dl>
          </div>
        </section>

        <section className="catalog-legend" aria-label="مفتاح التصنيفات">
          {(Object.keys(tagLabels) as MotionTag[]).map((tag) => (
            <span key={tag}><i aria-hidden="true" /> {tag} / {tagLabels[tag]}</span>
          ))}
        </section>

        <section className="study-list" aria-label="دراسات المواقع">
          {studies.map((site) => (
            <article className="study" key={site.name}>
              <header className="study-heading">
                <p>{site.index} / 05</p>
                <div>
                  <h2>{site.name}</h2>
                  <span>SOTD · {site.date}</span>
                </div>
                <div className="study-links">
                  <a href={site.liveUrl} target="_blank" rel="noreferrer">الموقع الحي <ArrowUpLeft size={18} /></a>
                  <a href={site.awardUrl} target="_blank" rel="noreferrer">صفحة الجائزة</a>
                </div>
              </header>

              <ol className="motion-list">
                {site.motion.map((item, index) => (
                  <li key={item.name}>
                    <span className="motion-number">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="motion-tags">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="surprise">
                <CheckCircle size={22} weight="fill" />
                <p>{site.surprise}</p>
              </aside>
            </article>
          ))}
        </section>

        <section className="catalog-conclusion">
          <p>الخلاصة</p>
          <h2>أفضل حركة لا تطلب الانتباه لنفسها؛ بل تجعل الخطوة التالية مفهومة.</h2>
          <ul>
            <li><span>01</span>ابدئي بالحالة: ماذا يحدث الآن؟</li>
            <li><span>02</span>ثم الاستمرارية: من أين أتينا وإلى أين نذهب؟</li>
            <li><span>03</span>أضيفي الشخصية بعد أن تصبح المهمة واضحة.</li>
          </ul>
        </section>
      </main>

      <footer className="catalog-footer">
        <span>بحث وتصنيف: أروى</span>
        <span>WebLove · Motion Taste</span>
      </footer>
    </div>
  )
}
