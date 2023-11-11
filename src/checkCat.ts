import { normalizeCategory } from './modules/common';
import { log } from './modules/logger';
import * as scrappers from './scrappers'

const cats = [
    "صفحه نخست/سیاست",
    "صفحه نخست/فرهنگ",
    "صفحه نخست/اقتصاد",
    "صفحه نخست/جامعه",
    "صفحه نخست/دانش و فناوری",
    "تاریخ/تاریخ",
    "صفحه نخست/سبک زندگی",
    "صفحه نخست/ورزش",
    "صفحه نخست/جهان",
    "سینما/فرهنگ",
    "بازیهای آسیایی اندونزی/کشتی",
    "سینما/تلویزیون",
    "سینما/سینما",
    "بازیهای آسیایی اندونزی/تیراندازی",
    "ورزش/فوتبال",
    "ورزش/والیبال",
    "چندرسانه‌ای/فن آوری",
    "چندرسانه‌ای/مذهبی",
    "بین‌الملل/سیاست خارجی",
    "اجتماعی‌سیاسی/سلامت",
    "چندرسانه‌ای/محیط زیست و حیات وحش",
    "ورزش/سایر ورزش ها",
    "چندرسانه‌ای/حوادث",
    "ورزش/کشتی",
    "چندرسانه‌ای/اجتماعی و سلامت",
    "چندرسانه‌ای/نظامی",
    "طنزیکاتور/طنز",
    "آشپزی/دسر و پیش غذا",
    "آشپزی/غذا",
    "سینما/تئاتر",
    "آشپزی/کیک",
    "سینما/هنر",
    "مذهب/اخبار مذهبی",
    "عکس/عکس",
    "ورزش/مدیریت ورزش",
    "مذهب/حدیث",
    "عکس/فیلم",
    "مذهب/روایت",
    "بازیهای آسیایی اندونزی/رقابتهای آبی",
    "بازیهای آسیایی اندونزی/ورزشهای رزمی",
    "آشپزی/شیرینی",
    "بین‌الملل/جهان",
    "حواشی‌مجلس/متفرقه",
    "حواشی‌مجلس/تزئینات عروسی",
    "حواشی‌مجلس/دکوراسیون داخلی",
    "طنزیکاتور/کاریکاتور",
    "حواشی‌مجلس/هنر",
    "حقوق/اسناد رسمی",
    "حقوق/عمومی",
    "گردشگری/گردشگری",
    "اقتصاد/اقتصاد کلان",
    "ورزش/جودو",
    "ارتباطات/گزارش",
    "ارتباطات/خبر",
    "ارتباطات/یادداشت",
    "ارتباطات/مصاحبه",
    "نظامی/نظامی",
    "خانواده/خانواده",
    "خانواده/فوت و فن",
    "اقتصاد/تولید",
    "چندرسانه‌ای/حمل و نقل",
    "چندرسانه‌ای/جهان",
    "چندرسانه‌ای/ورزشی",
    "چندرسانه‌ای/سیاسی",
    "چندرسانه‌ای/فرهنگ و هنر",
    "چندرسانه‌ای/پادکست",
    "چندرسانه‌ای/دفاع مقدس",
    "چندرسانه‌ای/نطق شو",
    "چندرسانه‌ای",
    "اقتصاد",
    "صفحه نخست",
    "ورزش",
    "بین‌الملل",
    "اجتماعی‌سیاسی/زنان و خانواده",
    "اجتماعی‌سیاسی/هنر و معماری",
    "اجتماعی‌سیاسی/حوادث",
    "اخبارشورای‌پنجم/شهرداری",
    "اخبارشورای‌پنجم/شورای شهر",
    "اخبارشورای‌پنجم/شهری",
    "اخبارشورای‌پنجم/مناطق",
    "اخبارشورای‌پنجم/معاونت",
    "اجتماعی‌سیاسی/جوانان",
    "اجتماعی‌سیاسی/حقوق",
    "صفحه نخست/آگهی تبلیغاتی",
    "بانک و بیمه",
    "اقتصادی",
    "اجتماعی‌سیاسی/دانشگاه",
    "اجتماعی‌سیاسی/قضایی",
    "اجتماعی‌سیاسی/شهری",
    "اجتماعی‌سیاسی",
    "اجتماعی‌سیاسی/عمومی",
    "اجتماعی‌سیاسی/آموزش و پرورش",
    "اجتماعی‌سیاسی/محیط زیست",
    "اجتماعی‌سیاسی/آسیب های اجتماعی",
    "اجتماعی‌سیاسی/پلیس",
    "اخبارشورای‌پنجم/تیتر یک",
    "اجتماعی‌سیاسی/حوزه",
    "تیتر یک",
    "اخبارشورای‌پنجم/شهرداری منطقه 13",
    "اقتصاد/آگهی تبلیغاتی",
    "اخبارشورای‌پنجم/آرش حسینی میلانی",
    "اخبارشورای‌پنجم/محمد علیخانی",
    "اخبارشورای‌پنجم/محمدجواد حق شناس",
    "اخبارشورای‌پنجم/الهام فخاری",
    "اخبارشورای‌پنجم/محسن هاشمی رفسنجانی",
    "اخبارشورای‌پنجم/شهرداری منطقه 2",
    "اخبارشورای‌پنجم/معاون حمل ونقل وترافیک شهرداری تهران",
    "بازیهای آسیایی اندونزی/فوتبال",
    "بازیهای آسیایی اندونزی/والیبال",
    "اخبارشورای‌پنجم/اخبار اعضای شورای شهر",
    "ورزش/بسکتبال",
    "اجتماعی‌سیاسی/کودک و نوجوان",
    "اجتماعی‌سیاسی/سیاست",
    "بازیهای آسیایی اندونزی/سایر رشته ها",
    "بازیهای آسیایی اندونزی/بسکتبال",
    "اخبارشورای‌پنجم/حسن رسولی",
    "خانواده/تبلیغات",
    "خانواده/مد و پوشاک",
    "خانواده/حقوق",
    "خانواده/آرایش و زیبایی",
    "خانواده/فن آوری و نجوم",
    "خانواده/ورزش",
    "خانواده/سلامت",
    "خانواده/روانشناسی",
    "خانواده/دکوراسیون",
    "خانواده/زناشویی",
    "خانواده/باغبانی و کشاورزی",
    "آشپزی/نوشیدنی ها",
    "خانواده/خانه داری",
    "خانواده/زن و زندگی",
    "خانواده/طب سنتی",
    "خانواده/هنر",
    "اجتماعی‌سیاسی/دفاعی-امنیتی",
    "آشپزی/فیلم و عکس",
    "خانواده/سفروگردشگری",
    "اقتصاد/اقتصادی ویژه",
    "اجتماعی‌سیاسی/اقتصادی ویژه",
    "حواشی‌مجلس/مجلس",
    "حواشی‌مجلس/نمایندگان مجلس",
    "اخبارشورای‌پنجم/بهاره آروین",
    "خانواده/علم و دانش",
    "حواشی‌مجلس/کمیسیونهای مجلس",
    "آشپزی/تبلیغات/رپرتاژ",
    "اجتماعی‌سیاسی/جامعه",
    "خانواده",
    "خانواده/بازی و سرگرمی",
    "آشپزی/صبحانه",
    "اجتماعی‌سیاسی/گردشگری",
    "اقتصاد/خودرو",
    "اقتصاد/نفت و انرژی",
    "اقتصاد/بورس",
    "اقتصاد/حمل و نقل",
    "اقتصاد/مسکن",
    "اقتصاد/تجارت",
    "حواشی‌مجلس/شورای نگهبان",
    "اقتصاد/ارز و طلا",
    "اقتصاد/کشاورزی",
    "اقتصاد/آب و برق",
    "اقتصاد/بانک",
    "اجتماعی‌سیاسی/تاریخ و اندیشه",
    "اقتصاد/بیمه",
    "حواشی‌مجلس/وزارت کشور",
    "آشپزی/خانه داری",
    "صفحه نخست/حاشیه",
    "آشپزی/آشپزی",
    "آشپزی/سرگرمی",
    "صفحه نخست/گوناگون",
    "آگهی دولتی/تبلیغات",
    "مذهب/مذهب",
    "اجتماعی‌سیاسی/حوادث و رویدادها" 
]
const scrapper = new scrappers.parsine

for (const index in cats) {
    const mapped = scrapper.mapCategory(normalizeCategory(cats[index]))
    log.info(cats[index], mapped)
}