const createElements=(array)=>{
// console.log(array);

const htmlElements = array.map(el =>`<span class="btn">${el} </span>`)

console.log(htmlElements.join(""));
};
const synonyms = ["Hello", "Hi", "Shihab"];

createElements(synonyms);

