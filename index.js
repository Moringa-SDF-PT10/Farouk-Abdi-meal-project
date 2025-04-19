document.addEventListener('DOMContentLoaded',()=>{
   firstData();
   secondData();
   thirdData();
})

let imageContainer=document.querySelector(".imagecontainer")
let foodImage = document.querySelector(".foodimage")
let foodImage2 = document.querySelector(".foodimage2")
let foodImage3 = document.querySelector(".foodimage3")

let thumbnailimg = document.querySelector(".thumbnailimg")
let thumbnailimg2 = document.querySelector(".thumbnailimg2")
let thumbnailimg3 = document.querySelector(".thumbnailimg3")

let scoreBoard = document.querySelector("#score")
let points = 0;

let introDiv = document.querySelector(".intro")
let startBtn =document.querySelector("#start")
let Body = document.querySelector('body')
let resultsBtn = document.querySelector('#viewresults')
let resultsDiv = document.querySelector('.results')
let restartBtn = document.querySelector('#restart')


let description1 = document.querySelector("#description1")
let description2 = document.querySelector("#description2")
let description3= document.querySelector("#description3")

startBtn.addEventListener("click", ()=>{
    introDiv.style.display = 'none'
    imageContainer.style.display = 'block'
})

resultsBtn.addEventListener("click", ()=>{
   introDiv.style.display = 'none'
   imageContainer.style.display = 'none'
   resultsDiv.style.display = "flex"
   let totalPoints = document.querySelector('#total')
   totalPoints.textContent = `Your total is ${points} out of 3`
   let remarks = document.querySelector('#remarks')
   if(points === 3){
      return remarks.textContent = "Wow, your foodie instincts are top level"
   }else if(points === 2){
      return remarks.textContent = "Your foodie instincts are almost there "
   }else if(points = 1){
      return remarks.textContent = "Nice try"
   }else{
      return remarks.textContent = "Better luck next time"
   }
   })

restartBtn.addEventListener("click", ()=>{
   introDiv.style.display = 'flex'
   imageContainer.style.display = 'none'
   resultsDiv.style.display = "none"
   window.location.reload();
})


function firstData(){
   fetch("https://www.themealdb.com/api/json/v1/1/random.php") // fetching the meals data from an API for the 1st meal
   .then(response=>response.json())
   .then((data)=>{
      meals = data.meals[0]
      let img = meals.strMealThumb
      foodImage.src = img
      thumbnailimg.src = img
      let ingrendientsList1 = document.querySelector('.ingredients1')

// creating our ingredients list
   for (let i = 1; i <= 20; i++) {
   const ingredient = meals[`strIngredient${i}`];
   const measure = meals[`strMeasure${i}`];
      //if the ingredient is not an empty string we add it to our list item
   if (ingredient && ingredient.trim() !== "") {
       const listItem = document.createElement('li');
       listItem.textContent = `${measure} ${ingredient}`.trim();
       ingrendientsList1.appendChild(listItem);
   }
   }

   let submitBtn1 = document.querySelector("#submmit1")
   let input1 = document.querySelector('#input1')
   let mealArear = meals.strArea
   let mealCategory = meals.strCategory

   //creating an event listener for our submit button
   submitBtn1.addEventListener('click', ()=>{
      const userGuess = input1.value.toLowerCase();
       //if the user is correct 1 point will be adde to his/her score
         if(userGuess === mealArear.toLowerCase() || userGuess === mealCategory.toLowerCase() ){
            points += 1
            scoreBoard.textContent = `YOUR SCORE: ${points}`
            submitBtn1.style.display = 'none'
            input1.classList.add('correct');
            input1.classList.remove('wrong');
            input1.value = ""
            return scoreBoard

         }     //if the user is incorrect no point is added and alert is shown containing the answers
         else if(userGuess !== mealArear.toLowerCase() || userGuess !== mealCategory.toLowerCase() ) {
            submitBtn1.style.display = 'none'
            input1.classList.add('wrong');
            input1.value = ""
            alert(`COUNTRY:${mealArear},
            CATEGORY:${mealCategory}`)
            scoreBoard.textContent = `YOUR SCORE: ${points}`
            return scoreBoard

         }
      })

      let mealName = meals.strMeal
      description1.textContent = `This meal is called ${mealName}, its ${mealArear} cusine and it's category is ${mealCategory}`
   })
}



function secondData(){
   fetch("https://www.themealdb.com/api/json/v1/1/random.php")   //fetching data for the second meal from an API
   .then(response=>response.json())
   .then((data)=>{
      meals = data.meals[0]
      let img = meals.strMealThumb
      foodImage2.src = img
      thumbnailimg2.src = img
      let ingrendientsList2 = document.querySelector('.ingredients2')

      // creating our ingridents list
      for (let i = 1; i <= 20; i++) {
         const ingredient = meals[`strIngredient${i}`];
         const measure = meals[`strMeasure${i}`];
         //if the ingredient is not an empty string we add it to our list item
         if (ingredient && ingredient.trim() !== "") {
             const listItem = document.createElement('li');
             listItem.textContent = `${measure} ${ingredient}`.trim();
             ingrendientsList2.appendChild(listItem);
         }
      }

      let submitBtn2 = document.querySelector("#submmit2")
      let input2 = document.querySelector('#input2')
      let mealArear = meals.strArea
      let mealCategory = meals.strCategory

      // creating an eventlistener for the submitbtn
      submitBtn2.addEventListener('click', ()=>{
         const userGuess = input2.value.toLowerCase();
         //if the user is correct 1 point will be adde to his/her score
         if(userGuess === mealArear.toLowerCase() || userGuess === mealCategory.toLowerCase() ){
            points += 1
            scoreBoard.textContent = `YOUR SCORE: ${points}`
            input2.value = ""
            submitBtn2.style.display = 'none'
            input2.classList.add('correct');
            input2.classList.remove('wrong');
            return scoreBoard

         }  //if the user is incorrect no point is added and alert is shown containing the answers
         else if(userGuess !== mealArear.toLowerCase() || userGuess !== mealCategory.toLowerCase() ) {
            submitBtn2.style.display = 'none'
            input2.classList.add('wrong');
            input2.value = ""
            alert(`COUNTRY:${mealArear},
                     CATEGORY:${mealCategory}`)
            scoreBoard.textContent = `YOUR SCORE: ${points}`
            return scoreBoard

         }
      })

       let mealName = meals.strMeal
      description2.textContent = `This meal is called ${mealName}, its ${mealArear} cusine and it's category is ${mealCategory}`
   })
}


function thirdData(){
   fetch("https://www.themealdb.com/api/json/v1/1/random.php")
   .then(response=>response.json())
   .then((data)=>{
      meals = data.meals[0]
      let img = meals.strMealThumb
      foodImage3.src = img
      thumbnailimg3.src = img
      let ingrendientsList3 = document.querySelector('.ingredients3')

      for (let i = 1; i <= 20; i++) {
         const ingredient = meals[`strIngredient${i}`];
         const measure = meals[`strMeasure${i}`];

         if (ingredient && ingredient.trim() !== "") {
             const listItem = document.createElement('li');
             listItem.textContent = `${measure} ${ingredient}`.trim();
             ingrendientsList3.appendChild(listItem);
         }
      }

      let submitBtn3 = document.querySelector("#submmit3")
      let input3 = document.querySelector('#input3')
      let mealArear = meals.strArea
      let mealCategory = meals.strCategory

      submitBtn3.addEventListener('click', ()=>{
         const userGuess = input3.value.toLowerCase();
         if(userGuess === mealArear.toLowerCase() || userGuess === mealCategory.toLowerCase() ){
            points += 1
            scoreBoard.textContent = `YOUR SCORE: ${points}`
            input3.value = ""
            submitBtn3.style.display = 'none'
            input3.classList.add('correct');
            input3.classList.remove('wrong');
            return scoreBoard

         }
         else if(userGuess !== mealArear.toLowerCase() || userGuess !== mealCategory.toLowerCase() ) {
            submitBtn3.style.display = 'none'
            input3.classList.add('wrong');
            input3.value = ""
             alert(`COUNTRY:${mealArear},
            CATEGORY:${mealCategory}`)
             scoreBoard.textContent = `YOUR SCORE: ${points}`
            return scoreBoard

         }
      })

       let mealName = meals.strMeal
      description3.textContent = `This meal is called ${mealName}, its ${mealArear} cusine and it's category is ${mealCategory}`
   })
}


let nextButton = document.querySelector('#next')
let prevButton =document.querySelector('#prev')
let listDiv = document.querySelector('.imagecontainer .list')
let thumbnailDiv = document.querySelector('.thumbnail')

nextButton.addEventListener("click", ()=>{
   showSlider("next")
})
prevButton.addEventListener("click", ()=>{
   showSlider("prev")
})

let runTimeOut;
//creating a function where the images move like a slider when the user clicks the next or prev Btn
function showSlider(type){
   let itemSlider =  document.querySelectorAll(".imagecontainer .list .item")
   let itemThumbnail = document.querySelectorAll(".imagecontainer .thumbnail .item")


   if(type === 'next'){ //if the user clicks the nextBtn we will append the first item in the listdiv and thumbnaildiv
      listDiv.appendChild(itemSlider[0]);
      thumbnailDiv.appendChild(itemThumbnail[0])
      imageContainer.classList.add('next')
   }
   else{                                                     //if the user clicks the prevBtn we prepend the last item in the list and thumbnail div
      let lastItemPosition = itemSlider.length -1 ;
         listDiv.prepend(itemSlider[lastItemPosition])
         thumbnailDiv.prepend(itemThumbnail[lastItemPosition])
         imageContainer.classList.add("prev")
   }

   clearTimeout(runTimeOut);
   runTimeOut= setTimeout(()=>{
   imageContainer.classList.remove('next');  // when the user presses the prevBtn the next class will be removed from the imagecontainer after 1s
   imageContainer.classList.remove('prev')   // when the user presses the nextvBtn the prev class will be removed from the imagecontainer after 1s
   }, 1000)

}


