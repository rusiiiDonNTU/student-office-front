export function formatDate(isoDate) {
    const date = new Date(isoDate);

    const formattedDate = new Intl.DateTimeFormat('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);

    return formattedDate
}

export function formatBirthDate(isoDate, words) {
    // Розрахунок дат
    const birthDate = new Date(isoDate);
    const today = new Date();

    // Рік
    let age = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate()))
        age -= 1;

    // Відмінювання слова "рік"
    const pluralRules = new Intl.PluralRules('uk-UA');
    const word = words[pluralRules.select(age)];

    const formattedDate = formatDate(isoDate);

    return `${age} ${word} (${formattedDate})`
}