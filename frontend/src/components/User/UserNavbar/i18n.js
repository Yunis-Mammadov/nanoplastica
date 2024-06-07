import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const aboutTextAz = `Nanoplastica.az saytı saça qulluq vasitələrinin, boyalarının, düzləçdiricilərinin və saç üçün elektron alətlərin bu kontekstdə ən yaxşısını təqdim edir.
Məhsullarımız istehsalçı ölkələrin lisenziyası və beynalxalq setifikatsiyadan keçmiş Azərbaycan Respublikası tərəfindən Səhiyyə nazirliyinin gigiyenik sertifikatını almış 100% orjinallığını təmin etmişdir.
Saçlarınızın mükəmməl düzlüyünü əldə edib onları qorumaq üçün keyfiyyətli məhsul axtarışındasınız? Saç prosedurları üçün keyfiyyətli elektron alətiniz yoxdur? Bir sözlə saçınıza zərər verməyən məhsullara sahib olmaq istəyirsiniz? Saç boyalarından istədiyiniz tonları ala bilmirsiniz?
Nanoplastica.az saytı mekəmməl seçimdir və nüfuzlu brendlərin məhsullarını Azərbaycan bazarına çatdırılmasında inqilab edir. Bu online məkan peşəkarların seçimidir! Sizə xidmət etmək üçün hər zaman ixtiyarınızda bir komandaya sahibik.`;

const resources = {
    az: {
        translation: {
            register: "Qeydiyyat",
            login: "Giriş",
            search: "Axtarış...",
            esas: "Əsas Səhifə",
            keratin: "Keratin",
            ozonio: "Ozonio",
            revive: "Revive",
            sacqulluq: "Saç Qulluq Vasitələri",
            şampun: "Şampun",
            balzam: "Balzam",
            maska: "Maska",
            kondisioner: "Kondisioner",
            botox: "Botox",
            meiset: "Məişət",
            fenler: "Hava Fenləri",
            utuler: "Saç Ütüləri",
            sacboya: "Saç Boyaları",
            about: "Haqqımızda",
            contact: "Əlaqə",
            topseller: "Satış Lideri",
            basket: "Səbətə Əlavə Et",
            weekly: "Ayın Təklifi",
            day: "gün",
            hour: "saat",
            minute: "dəqiqə",
            second: "saniyə",
            wpHeader: "Siz hələdə bizim məhsulları istifadə etməmisiniz?",
            wpText: "İstifadə qaydalarını bilmirsiniz? Bizim peşəkar saç ustaları qurupuna qoşulun və daha mükəmməl biliklərə sahib olun",
            wpBtn: "Whatsapp Qrupuna Qoşul",
            sendMail: "Mail göndərərək qeydiyyatdan keç",
            send: "Göndər",
            all: "Hamısı",
            aboutText: `Nanoplastica.az saytı saça qulluq vasitələrinin, boyalarının, düzləçdiricilərinin və saç üçün elektron alətlərin bu kontekstdə ən yaxşısını təqdim edir.
            Məhsullarımız istehsalçı ölkələrin lisenziyası və beynalxalq setifikatsiyadan keçmiş Azərbaycan Respublikası tərəfindən Səhiyyə nazirliyinin gigiyenik sertifikatını almış 100% orjinallığını təmin etmişdir.
            Saçlarınızın mükəmməl düzlüyünü əldə edib onları qorumaq üçün keyfiyyətli məhsul axtarışındasınız? Saç prosedurları üçün keyfiyyətli elektron alətiniz yoxdur? Bir sözlə saçınıza zərər verməyən məhsullara sahib olmaq istəyirsiniz? Saç boyalarından istədiyiniz tonları ala bilmirsiniz?
            Nanoplastica.az saytı mekəmməl seçimdir və nüfuzlu brendlərin məhsullarını Azərbaycan bazarına çatdırılmasında inqilab edir. Bu online məkan peşəkarların seçimidir! Sizə xidmət etmək üçün hər zaman ixtiyarınızda bir komandaya sahibik.`,
            aboutFooter: "Hörmətlə Nanoplastica.az komandası",
            name: "Ad",
            surname: "Soyad",
            subject: "Mövzu",
            mail: "Email",
            message: "Mesajınız",
            notfound: "Məhsul Tapılmadı...",
            product: "Məhsul",
            brand: "Brend",
            count: "Sayı",
            order: "Sifarişi tamamla",
            wpSend: "WhatsAppa göndər",
            adress: "Adress"
        }
    },
    ru: {
        translation: {
            register: "Регистр",
            login: "Авторизоваться",
            search: "Вызов...",
            esas: "Главная страница",
            keratin: "Кератин",
            ozonio: "Озонио",
            revive: "Ревайв",
            sacqulluq: "Уход за волосами",
            şampun: "Шампунь",
            balzam: "Бальзам",
            maska: "Маска",
            kondisioner: "Кондиционер",
            botox: "Ботокс",
            meiset: "Семья",
            fenler: "Науки о погоде",
            utuler: "Выпрямители волос",
            sacboya: "Краски для волос",
            about: "О нас",
            contact: "Контакт",
            topseller: "Лидеры продаж",
            basket: "Добавить в корзину",
            weekly: "Предложение месяца",
            day: "день",
            hour: "час",
            minute: "минута",
            second: "второй",
            wpHeader: "Вы еще не пользовались нашей продукцией?",
            wpText: "Не знаете, как его использовать? Присоединяйтесь к нашей группе профессиональных парикмахеров и получайте более глубокие знания.",
            wpBtn: "Присоединяйтесь к группе WhatsApp",
            sendMail: "Зарегистрируйтесь, отправив письмо",
            send: "Отправлять",
            all: "Все",
            aboutText: "none",
            aboutFooter: "none",
            name: "Имя",
            surname: "Фамилия",
            subject: "Предмет",
            mail: "Электронная почта",
            message: "Сообщение",
            notfound: "Товар не найден...",
            product: "Продукт",
            brand: "Бренд",
            count: "Число",
            order: "Выполнить заказ",
            wpSend: "Отправить в WhatsApp",
            adress: "Адрес"
        }
    },
    en: {
        translation: {
            register: "Register",
            login: "Login",
            search: "Search...",
            esas: "Home",
            keratin: "Keratin",
            ozonio: "Ozonio",
            revive: "Revive",
            sacqulluq: "Hair Care Products",
            şampun: "Shampoo",
            balzam: "Conditioner",
            maska: "Mask",
            kondisioner: "Conditioner",
            botox: "Botox",
            meiset: "Device",
            fenler: "Hairdryers",
            utuler: "Hair Iron",
            sacboya: "Hair Colors",
            about: "About Us",
            contact: "Contact",
            topseller: "Sales Leaders",
            basket: "Add to Basket",
            weekly: "Offer of the Moon",
            day: "day",
            hour: "hour",
            minute: "minute",
            second: "second",
            wpHeader: "Have you not used our products yet?",
            wpText: "Don't know how to use it? Join our group of professional hairdressers and get more advanced knowledge",
            wpBtn: "Join Whatsapp Group ",
            sendMail: "Register by Sending Mail",
            send: "Send",
            all: "All",
            aboutText: "The website Nanoplastica.az offers the best hair care tools, dyes, straighteners, and electronic tools for hair in this context.Our products have obtained the hygiene certificate from the Ministry of Health of the Republic of Azerbaijan, passed licensing and international certification in manufacturing countries, ensuring 100% authenticity.Are you looking for quality products to achieve perfect hair straightening and protect them? Do you lack quality electronic tools for hair procedures? Do you want products that do not harm your hair? Can't get the desired shades from hair dyes?Nanoplastica.az is the perfect choice, revolutionizing the delivery of influential brands' products to the Azerbaijani market. This online space is the choice of professionals!We always have a team ready to serve you.",
            aboutFooter: "Dear Nanoplastica.az Team",
            name: "Name",
            surname: "Surname",
            subject: "Subject",
            mail: "Email",
            message: "Message",
            notfound: "Product not found...",
            product: "Product",
            brand: "Brand",
            count: "Count",
            order: "Complete the Order",
            wpSend: "Send to Whatsapp",
            adress: "Adress"
        }
    }
}

const languageKey = 'selectedLanguage';

const storedLanguage = localStorage.getItem(languageKey);

i18n
    .use(initReactI18next)
    .init({
        lng: storedLanguage || "az",
        resources,
        fallbackLng: "az",
        interpolation: {
            escapeValue: false,
        },
    });

i18n.on('languageChanged', (lng) => {
    localStorage.setItem(languageKey, lng);
});

export default i18n;