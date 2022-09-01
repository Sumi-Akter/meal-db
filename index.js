const loadMeals=(search)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals=meals =>{
const mealsContainer=document.getElementById('meal-container');
// search korar por j output ashe..bar bar search korle onk ouput add hbe ata empty korar jonno mealsContainer.innerHTML=``;
mealsContainer.innerHTML=``;
meals.forEach(meal=>{
const mealDiv=document.createElement('div');
mealDiv.classList.add('col')
mealDiv.innerHTML=`
<div  onclick="loadCardDetail(${meal.idMeal})"class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  ${meal.strInstructions.slice(0,200)}
                </p>
              </div>
            </div>


`;
mealsContainer.appendChild(mealDiv)
}
    )
}
// const searchFood = () =>{
//   const searchField=document.getElementById('search-field');
//   const searchText=searchField. value ;

//  loadMeals(searchText);
//  searchField.value='';
// }
const searchFood = () =>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value ;

    loadMeals(searchText);
    searchField.value='';
}

const loadCardDetail = (idMeal) =>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCardDetails(data.meals[0]))


}
const displayCardDetails= meal =>{
    const detailContainer=document.getElementById('detail-container');
    detailContainer.innerHTML=``;
    const detailDiv=document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"> ${meal.strMeal}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    
    `;
    detailContainer.appendChild(detailDiv);

}


loadMeals('');