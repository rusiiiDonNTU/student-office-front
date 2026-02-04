export const PASSWORD_RULES= [
    {
        locale: "auth:passwordRequirements.min",
        test: (errors) => !errors.short
    },
    {
        local: "auth:passwordRequirements.max",
        test: (erros) => !errors.long
    },
    {
        locale: "auth:passwordRequirements.lower",
        test: (errors) => !errors.noLower
    },
    {
        locale: "auth:passwordRequirements.upper",
        test: (errors) => !errors.noUpper
    },
    {
        locale: "auth:passwordRequirements.digit",
        test: (errors) => !errors.noDigit
    },
    {
        locale: "auth:passwordRequirements.symbol",
        test: (errors) => !errors.noSymbol
    },
    {
        locale: "auth:passwordRequirements.equal",
        test: (errors, areEqual) => areEqual
    }
]