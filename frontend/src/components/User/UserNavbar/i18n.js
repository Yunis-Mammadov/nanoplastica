import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
      fenler: "Fenlər",
      utuler: "Ütülər",
      sacboya: "Saç Boyaları",
      about: "Haqqımızda",
      contact: "Əlaqə",
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
      fenler: "Предметы",
      utuler: "Утюги",
      sacboya: "Краски для волос",
      about: "О нас",
      contact: "Контакт",
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
      fenler: "Appliances",
      utuler: "Irons",
      sacboya: "Hair Colors",
      about: "About Us",
      contact: "Contact",
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    lng: "az",
    resources
  })

export default i18n