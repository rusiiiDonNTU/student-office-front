import { LocalizationContext } from "./LocalizationContext";

function LocalizationContextProvider({children}) {
    const ctxValue = {
        lang: 'ua'
    }

    return <LocalizationContext value={ctxValue}>
        {children}
    </LocalizationContext>
}

export default LocalizationContextProvider;