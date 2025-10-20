import { createContext } from "react";

export const LocalizationContext = createContext({
    lang: 'ua',
    changeLang: () => {}
})