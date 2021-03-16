const type = ['website', 'game', 'app', 'web scrapper'];
const language = ['HTML/CSS', 'Javascript', 'Python', 'Java', 'C#'];
const theme = ['madlib creation', 'a small business', 'a pet store', 'a social media'];

const randomIndex = maxLength => Math.floor(Math.random() * maxLength);

const message = () => {
    let typeIndex = randomIndex(type.length);
    let languageIndex = randomIndex(language.length);
    let themeIndex = randomIndex(theme.length);

    return `Develop a ${type[typeIndex]} using ${language[languageIndex]}, if possible, for ${theme[themeIndex]}.`;
}

console.log(message());