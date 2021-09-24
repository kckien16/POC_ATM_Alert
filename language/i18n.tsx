import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./en.json";
import vietnamese from "./vn.json";

i18next.use(initReactI18next).init({
    lng: 'vn',
    resources: {
        en: english,
        vn: vietnamese
    },
    react:{
        useSuspense:false,
    }
});

export default i18next;

