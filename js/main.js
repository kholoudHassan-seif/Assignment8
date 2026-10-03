// 1. Elements Selection
var recipe_rating = document.getElementsByClassName('rating')[0];
var recipe_img = document.getElementsByClassName('recipe-img')[0];

var recipe_prepTime =document.getElementsByClassName('prepTime')[0];
var recipe_cookTime =document.getElementsByClassName('cookTime')[0];
var recipe_servings =document.getElementsByClassName('servings')[0];

var recipe_title = document.getElementsByClassName('title')[0];
var recipe_badge1 = document.getElementsByClassName('badge1')[0];
var recipe_badge2 = document.getElementsByClassName('badge2')[0];
var recipe_description = document.getElementsByClassName('description')[0];

var ingredients_container = document.querySelector('#ingredients ul');
var instructions_container = document.querySelector('#instructions ol');
var tips_container = document.querySelector('#tips');
var nutrition_tab = document.querySelector('#nutrition');

var btn_try_another = document.querySelector('.btn-try-another');

// 2. Array of Recips
const recipes = [
  {
    title: "Lasagna Bolognese",
    rating: "4.9 (478 reviews)",
    image: "./images/hero-img.png",
    badge1: "Intermediate",
    badge2: "Mediterranean",
    description: "Layered Italian pasta with rich meat sauce and béchamel.",
    prepTime: "30 min",
    cookTime: "90 min",
    servings: "4 people",
    ingredients: [
      "200g lasagna sheets",
      "500g minced beef",
      "2 cups béchamel sauce",
      "1 cup tomato puree",
      "100g parmesan cheese"
    ],
    instructions: [
      "Prepare the meat sauce by cooking minced beef with tomato puree and seasonings.",
      "Boil lasagna sheets according to package instructions until al dente.",
      "Layer meat sauce, béchamel, and lasagna sheets in a baking dish.",
      "Top with generous parmesan cheese and bake at 180°C for 45 minutes."
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "35g",
      carbs: "58g",
      fat: "32g",
      fiber: "4g",
      sodium: "950mg"
    },
    tips: [
      "Let the lasagna rest for 15 minutes before cutting to hold its shape.",
      "Use fresh mozzarella between layers for extra creaminess.",
      "Make the meat sauce a day ahead for richer flavor."
    ]
  },
  {
    title: "Pad Thai",
    rating: "4.8 (320 reviews)",
    image: "./images/hero-img.png",
    badge1: "Easy",
    badge2: "Asian",
    description: "Classic stir-fried Thai rice noodles with shrimp, tofu, and peanuts.",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tbsp tamarind paste",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar"
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes."
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "32g",
      carbs: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg"
    },
    tips: [
      "Don't oversoak noodles or they'll be mushy.",
      "Cook on high heat for authentic wok flavor.",
      "Balance sweet, sour, and salty flavors.",
      "Prepare all ingredients before starting to cook."
    ]
  },
  {
    title: "Chicken Tikka Masala",
    rating: "4.9 (512 reviews)",
    image: "./images/meal-5.jpg",
    badge1: "Intermediate",
    badge2: "Indian",
    description: "Roasted marinated chicken chunks in a spiced, creamy tomato sauce.",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    ingredients: [
      "500g chicken breast",
      "1 cup yogurt",
      "1 tbsp garam masala",
      "1 cup tomato puree",
      "1/2 cup heavy cream"
    ],
    instructions: [
      "Marinate chicken pieces in yogurt and spices for at least 30 minutes.",
      "Grill or sear chicken until charred and cooked through.",
      "Simmer tomato puree with cream and garam masala until thickened.",
      "Add chicken to the sauce and simmer for 10 minutes."
    ],
    nutrition: {
      calories: "610 kcal",
      protein: "42g",
      carbs: "24g",
      fat: "38g",
      fiber: "3g",
      sodium: "880mg"
    },
    tips: [
      "Marinate chicken overnight for maximum flavor.",
      "Use heavy cream for the authentic rich texture.",
      "Garnish with fresh cilantro before serving."
    ]
  },
  {
    title: "Classic Beef Burger",
    rating: "4.7 (210 reviews)",
    image: "./images/meal-3.jpg",
    badge1: "Easy",
    badge2: "American",
    description: "Juicy beef patty topped with fresh lettuce, cheddar, and house sauce.",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: "5 people",
    ingredients: [
      "2 beef patties",
      "2 burger buns",
      "2 slices cheddar cheese",
      "Lettuce & tomato",
      "2 tbsp burger sauce"
    ],
    instructions: [
      "Season beef patties generously with salt and pepper.",
      "Sear patties on a hot skillet for 3-4 minutes per side.",
      "Melt cheddar cheese over patties in the last minute of cooking.",
      "Toast burger buns and assemble with lettuce, tomato, and burger sauce."
    ],
    nutrition: {
      calories: "720 kcal",
      protein: "45g",
      carbs: "48g",
      fat: "40g",
      fiber: "3g",
      sodium: "1050mg"
    },
    tips: [
      "Don't press down on patties while cooking to keep juices inside.",
      "Use 80/20 ground beef for optimal juiciness.",
      "Toast buns with a little butter."
    ]
  },
  {
    title: "Greek Salad",
    rating: "4.5 (140 reviews)",
    image: "./images/photo-1546793665-c74683f339c1.jfif",
    badge1: "Easy",
    badge2: "Mediterranean",
    description: "Crisp cucumbers, tomatoes, olives, and feta cheese drizzled with olive oil.",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "4 people",
    ingredients: [
      "2 cucumbers, sliced",
      "3 tomatoes, diced",
      "100g feta cheese",
      "Black olives",
      "2 tbsp extra virgin olive oil"
    ],
    instructions: [
      "Chop cucumbers, tomatoes, and red onion into bite-sized pieces.",
      "Combine vegetables in a large salad bowl with black olives.",
      "Top with a slab of feta cheese and sprinkle dried oregano.",
      "Drizzle extra virgin olive oil and lemon juice just before serving."
    ],
    nutrition: {
      calories: "310 kcal",
      protein: "8g",
      carbs: "14g",
      fat: "25g",
      fiber: "4g",
      sodium: "620mg"
    },
    tips: [
      "Use high-quality extra virgin olive oil for the best taste.",
      "Keep feta cheese in large blocks rather than crumbling it.",
      "Do not add lettuce for traditional Greek style."
    ]
  }
];

// 3. Function to get a random recipe
function generateNewItem() {
  var randomNumber = Math.floor(Math.random()* recipes.length);
  return recipes[randomNumber];
}

// 4. Function to Display Recipe
function DisplayRecipe() {
  var recipetodisplay = generateNewItem();

   recipe_title.innerHTML = recipetodisplay.title;
   recipe_badge1.innerHTML = recipetodisplay.badge1;
   recipe_badge2.innerHTML = recipetodisplay.badge2;
   recipe_description.innerHTML = recipetodisplay.description;
   recipe_img.src = recipetodisplay.image;
   recipe_rating.innerHTML = recipetodisplay.rating;
   recipe_prepTime.innerHTML = recipetodisplay.prepTime;
   recipe_cookTime.innerHTML = recipetodisplay.cookTime;
  recipe_servings.innerHTML = recipetodisplay.servings;



  // (Ingredients)
  if (ingredients_container) {
    var ingredientsHTML = '';
    for (var i = 0; i < recipetodisplay.ingredients.length; i++) {
      ingredientsHTML += `
        <li class="d-flex align-items-center gap-2">
          <span class="badge rounded-circle step-number">${i + 1}</span> 
          ${recipetodisplay.ingredients[i]}
        </li>
      `;
    }
    ingredients_container.innerHTML = ingredientsHTML;
  }

  // (Instructions)
  if (instructions_container && recipetodisplay.instructions) {
    var instructionsHTML = '';
    for (var j = 0; j < recipetodisplay.instructions.length; j++) {
      instructionsHTML += `
        <li class="d-flex align-items-center gap-3">
          <span class="badge p-4 rounded-2 step-number flex-shrink-0">${j + 1}</span>
          <span class="text-black small mt-1">${recipetodisplay.instructions[j]}</span>
        </li>
      `;
    }
    instructions_container.innerHTML = instructionsHTML;
  }

  // (Nutrition)
  if (nutrition_tab && recipetodisplay.nutrition) {
    var nutritionValues = [                      //object
      recipetodisplay.nutrition.calories,
      recipetodisplay.nutrition.protein,
      recipetodisplay.nutrition.carbs,
      recipetodisplay.nutrition.fat,
      recipetodisplay.nutrition.fiber,
      recipetodisplay.nutrition.sodium
    ];

    var valueSpans = nutrition_tab.querySelectorAll('.fw-bold.text-dark.small');
    for (var k = 0; k < valueSpans.length; k++) {
      if (nutritionValues[k]) {
        valueSpans[k].textContent = nutritionValues[k];
      }
    }
  }

  // (Chef's Tips)
  if (tips_container && recipetodisplay.tips) {
    var tipsHTML = '';
    for (var m = 0; m < recipetodisplay.tips.length; m++) {
      tipsHTML += `
        <div class="d-flex align-items-center p-2 mb-3 rounded-2 fs-3">
          <i class="fa-solid fa-circle-check text-success me-2"></i>
          <span class="text-black small mt-1">${recipetodisplay.tips[m]}</span>
        </div>
      `;
    }
    tips_container.innerHTML = tipsHTML;
  }
}

// 5. Add event listener

  btn_try_another.addEventListener('click', DisplayRecipe);