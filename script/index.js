const loadLessons =() =>{
    fetch("https://openapi.programming-hero.com/api/levels/all") //returns a response of promise
    .then(res => res.json()) // she jkhn response ta dibe shetake json a convert krar jnno res.json function k call kre (promise of json data)
    .then(json => displayLessons(json.data));
};

const loadLevelWords= (id)=>{
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    // console.log(url);

    fetch(url)
    .then(res =>res.json())
    .then(data => displayLevelWords(data.data));

};

const displayLevelWords=(words)=>{
//  console.log(words);
const wordContainer= document.getElementById('word-container');
wordContainer.innerHTML= '';

if(words.length ==0){
    wordContainer.innerHTML= `
    <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
     <img class="mx-auto" src="./assets/alert-error.png" alt="">
    <p class="text-xl font-medium text-gray-400 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
    </p>
    <h2 class="font-bold text-3xl">নেক্সট Lesson এ যান</h2>
   </div>
    `;
    return;
}

// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }

words.forEach(word =>{
    console.log(word);

    const card= document.createElement('div');
    card.innerHTML=`
        <div class="bg-white rounded-xl shadow-md text-center py-20 px-5 space-y-4">
          <h2 class="font-bold text-2xl">${word.word ? word.word: "শব্দ পাওয়া যায়নি"}</h2>
          <p class="font-semibold">Meaning /Pronounciation</p>

          <div class="text-2xl font-medium font-bangla">${word.meaning ? word.meaning :"অর্থ পাওয়া যায়নি" } / ${word.pronunciation ? word.pronunciation : "pronounciation পাওয়া যায়নি "  }</div>
          <div class="flex justify-between items-center">

            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn  bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
          </div>
      </div>

    `;

    wordContainer.appendChild(card)

})
};

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
<button onClick="loadLevelWords(${lesson.level_no})" class="btn btn-soft btn-primary"> <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
`
//4. append into container

levelContainer.appendChild(btnDiv)
}


};



loadLessons();