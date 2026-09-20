import { ArrowUpLeft, Check, Clock } from '@phosphor-icons/react'
import './polish-report.css'

const checklist = [
  ['Tabular numbers', 'الأرقام في الإحصاءات تستخدم tnum ولا تهتز بين القيم.', true],
  ['Smart quotes', 'النصوص تستخدم علامات اقتباس طباعية بدل العلامات المستقيمة.', true],
  ['Optical alignment', 'الأسهم والأيقونات معدّلة بصريًا داخل الأزرار والروابط.', true],
  ['Real contrast', 'النص الأساسي والثانوي واضحان، وتقييم الإتاحة 100/100.', true],
  ['Spacing rhythm', 'المسافات مبنية على إيقاع ثابت بدل قيم عشوائية.', true],
  ['Focus + hover + active', 'كل رابط وزر له حالة مرور وتركيز وضغط واضحة.', true],
  ['Soft corners', 'الصور والأزرار تستخدم زوايا 8 أو 12 بكسل.', true],
  ['Favicon + OG + 404 + loading', 'أيقونة مخصصة، صورة مشاركة، 404 مصممة، وحالة تحميل للصور بلا وميض أبيض.', true],
  ['Accessibility', 'تقليل الحركة، نص بديل للصور، ورابط تخطّي إلى المحتوى.', true],
  ['Cold-eyes pass', 'اختبار الجوال والمتصفح البارد مكتملان؛ مراجعة ثلاثة أشخاص تنتظر رابط المعاينة المنشور.', false],
] as const

export default function PolishReport() {
  return (
    <div className="polish-report-page">
      <a className="skip-link" href="#polish-main">تخطّي إلى المحتوى</a>
      <header className="polish-nav">
        <a className="brand" href="/">ARWA</a>
        <span>POLISH / BRONZE</span>
        <a href="/">العودة للبورتفوليو</a>
      </header>

      <main id="polish-main">
        <section className="polish-hero">
          <div>
            <p>التقرير قبل النشر</p>
            <h1>آخر خمسة بالمئة.</h1>
          </div>
          <p>فحص البورتفوليو بندًا بندًا، وإصلاح التفاصيل التي تجعل الموقع يبدو «مكتملًا» لا مجرد «شغال».</p>
        </section>

        <section className="scoreboard" aria-label="نتائج Lighthouse">
          <div><span>Desktop performance</span><strong>100</strong></div>
          <div><span>Mobile performance</span><strong>90</strong></div>
          <div><span>Accessibility</span><strong>100</strong></div>
          <div><span>SEO</span><strong>100</strong></div>
        </section>

        <section className="polish-checklist" aria-labelledby="checklist-title">
          <div className="polish-section-title">
            <p>09 / 10 مكتمل محليًا</p>
            <h2 id="checklist-title">قائمة الصقل</h2>
          </div>
          <ol>
            {checklist.map(([title, detail, complete], index) => (
              <li className={complete ? 'is-complete' : 'is-pending'} key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
                <span className="check-state">
                  {complete ? <><Check size={18} weight="bold" /> تم</> : <><Clock size={18} weight="bold" /> بعد النشر</>}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="polish-note">
          <p>الخطوة الأخيرة</p>
          <h2>انشري رابط المعاينة، ثم اسألي ثلاثة أشخاص: «وش الشيء اللي شكله غريب؟»</h2>
          <p>بعد جمع الملاحظات وإصلاحها يصبح التحدي 100% وجاهزًا للـSkool.</p>
          <a href="/motion-catalog">شاهدي تمرين الحركة <ArrowUpLeft size={20} /></a>
        </section>
      </main>
    </div>
  )
}
