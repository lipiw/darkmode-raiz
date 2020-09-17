const html = document.querySelector('html');
const check = document.querySelector('input[name=theme]');

//Montando função getStyle
const getStyle = (elemento, style) =>
    window.getComputedStyle(elemento).getPropertyValue(style);


//Objeto com as cores iniciais  
const itialColors = {
    bg: getStyle(html, '--bg'),
    bgPanel: getStyle(html, '--bg-panel'),
    colorHeadings: getStyle(html, '--color-headings'),
    colorText: getStyle(html, '--color-text')
}

//Cores no modo DARK
const darkMode = {
    bg: '#333333',
    bgPanel: '#434343',
    colorHeadings: '#3664FF',
    colorText: '#FFFFFF'
}

//Transformando as variaveis nas cores
const transformKey = key =>
"--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

//Função para mudar as cores
function changeColor(color){
    Object.keys(color).map(key =>
        html.style.setProperty(transformKey(key), color[key]));
}

check.addEventListener('change',({target}) =>{
    target.checked ?changeColor(darkMode) : changeColor(itialColors);
})