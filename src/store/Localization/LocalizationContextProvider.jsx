import { useState } from "react";
import { LocalizationContext } from "./LocalizationContext";

function LocalizationContextProvider({children}) {
    const [lang, setLang] = useState('ua');

    function handleChangeLang(lang) {
        setLang(lang)
    }

    const ctxValue = {
        lang: lang,
        changeLang: handleChangeLang
    }

    return <LocalizationContext value={ctxValue}>
        {children}
    </LocalizationContext>
}

export default LocalizationContextProvider;