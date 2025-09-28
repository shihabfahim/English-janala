const loadLessons =() =>{
    fetch("https://openapi.programming-hero.com/api/levels/all") //returns a response of promise
    .then(res => res.json()) // she jkhn response ta dibe shetake json a convert krar jnno res.json function k call kre (promise of json data)
    .then(json => displayLessons(json.data));
}

const displayLessons =(lessons) =>{
//1. get the container & make it empty

    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML= '';

//2. get into every lessons
for(let lesson of lessons){
//3. create element
// console.log(lesson);

const btnDiv = document.createElement('div');
btnDiv.innerHTML= `
<button class="btn btn-soft btn-primary"> <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
`
//4. append into container

levelContainer.appendChild(btnDiv)
}


};
loadLessons();