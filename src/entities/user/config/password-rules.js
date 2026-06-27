export const PASSWORD_RULES= [
    {
        locale: "auth:passwordRequirements.min",
        test: (errors) => !errors.short
    },
    {
        locale: "auth:passwordRequirements.max",
        test: (errors, areEqual, isEmpty) => !errors.long && !isEmpty
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