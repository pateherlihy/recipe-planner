// ============================================================
//  RECIPE PLANNER — Recipe Data File
//  Edit this file to add, remove, or change recipes.
//
//  HOW TO ADD A NEW RECIPE:
//  1. Copy one of the recipe blocks below (from { to the
//     closing },  including that comma)
//  2. Paste it after the last recipe entry
//  3. Fill in the details
//  4. Add your image to the /images/ folder
//  5. Save and reload index.html in your browser
//
//  TYPES (used for the filter buttons):
//    "Vegetarian", "Fish", "Red Meat", "White Meat"
//    (adding a new type will create a new filter button automatically)
//
//  UNITS for ingredients:
//    "g", "kg", "ml", "l", "tsp", "tbsp", "cup", "whole",
//    "bunch", "slice", "sprig"  — or any text you like
// ============================================================

const RECIPES = [
  {
    name: "Cacio e Pepe Spaghetti",
    type: "Vegetarian",
    image: "images/Cacio_e_Pepe.jpg",
    cookTime: "15 min",
    prepTime: "5 min",
    serves: 2,
    author: "Patrick Herlihy",
    description: "Easy spaghetti recipe, 15 mins to table.",
    ingredients: [
      { name: "Spaghetti",        value: 320, unit: "g"   },
      { name: "Pecorino Romano",  value: 170, unit: "g"   },
      { name: "Black Pepper",     value: 1,   unit: "tsp" },
    ],
  },

  {
    name: "One Pot Pasta",
    type: "Fish",
    image: "images/One_pot_pasta.jpg",
    cookTime: "30 min",
    prepTime: "10 min",
    serves: 4,
    author: "Patrick Herlihy",
    description: "One pot pasta, chorizo and prawn linguine.",
    ingredients: [
      { name: "Linguine",      value: 500, unit: "g"     },
      { name: "Onion",         value: 1,   unit: "whole" },
      { name: "Passata",       value: 500, unit: "g"     },
      { name: "Prawns",        value: 300, unit: "g"     },
      { name: "Red Pepper",    value: 2,   unit: "whole" },
      { name: "Garlic",  	   value: 2,   unit: "clove" },
      { name: "Chorizo",       value: 150, unit: "g"     },
      { name: "Chilli Flakes", value: 1,   unit: "tsp"   },
      { name: "Fresh Parsley", value: 4,   unit: "tsp"   },
    ],
  },

  {
    name: "Bean & Halloumi Stew",
    type: "Vegetarian",
    image: "images/Bean_Halloumi_Stew.jpg",
    cookTime: "25 min",
    prepTime: "5 min",
    serves: 2,
    author: "BBC Good Food",
    description: "Tomato based veggie stew with halloumi.",
    ingredients: [
      { name: "Olive Oil",          value: 3,   unit: "tbsp" },
      { name: "Onion",              value: 1,   unit: "whole" },
      { name: "Chopped Tomatoes",   value: 400, unit: "g"    },
      { name: "Mixed Beans",        value: 400, unit: "g"    },
      { name: "Red Pepper",         value: 1,   unit: "whole" },
      { name: "Garlic",       		value: 2,   unit: "clove" },
      { name: "Red Pesto",          value: 3,   unit: "tbsp" },
      { name: "Ground Coriander",   value: 1,   unit: "tsp"  },
      { name: "Halloumi",           value: 125, unit: "g"    },
      { name: "Fresh Coriander",    value: 0.5, unit: "bunch" },
      { name: "Garlic Bread",       value: 2,   unit: "whole" },
    ],
  },

  {
    name: "Beef & Guinness Hotpot",
    type: "Red Meat",
    image: "images/Beef_Guinness_Hotpot.jpg",
    cookTime: "2hr",
    prepTime: "30 min",
    serves: 2,
    author: "Jamie Oliver",
    description: "Hearty hotpot — use 0% alcohol Guinness if needed.",
    ingredients: [
      { name: "Carrot",            value: 4,    unit: "whole" },
      { name: "Blackcurrant Jam",  value: 1,    unit: "tbsp" },
      { name: "Pickled Onions",    value: 165,  unit: "g"    },
      { name: "Potato",            value: 800,  unit: "g"    },
      { name: "Beef Mince",        value: 500,  unit: "g"    },
      { name: "Guinness",          value: 220,  unit: "ml"   },
      { name: "Sage",              value: 1,    unit: "bunch" },
      { name: "Chicken Stock",     value: 1000, unit: "ml"   },
      { name: "Olive Oil",         value: 1,    unit: "tbsp" },
    ],
  },
  
  {
    name: "Tarragon Chicken",
    type: "White Meat",
    image: "images/Tarragon_Chicken.jpg",
    cookTime: "20 min",
    prepTime: "20 min",
    serves: 4,
    author: "Tolkien Cookbook",
    description: "Delicate, liqourice flavouring paired with chicken.",
    ingredients: [
      { name: "Penne Pasta",       value: 250,  unit: "g" },
      { name: "Salt",  			   value: 1,    unit: "tsp" },
      { name: "Chicken Breast",    value: 500,  unit: "g"    },
      { name: "Courgette",         value: 500,  unit: "g"    },
      { name: "Onion",       	   value: 1,    unit: "bulb"},
      { name: "Garlic",            value: 2,    unit: "clove"   },
      { name: "Pine Nuts",         value: 4,    unit: "tbsp" },
      { name: "Tarragon",          value: 8,    unit: "tbsp"   },
      { name: "Olive Oil",         value: 4,    unit: "tbsp" },
	  { name: "Creme Fraiche",     value: 200,  unit: "ml" },
    ],
  },
  
    {
    name: "Red Lentil Moussaka",
    type: "Vegetarian",
    image: "images/Red_Lentil_Moussaka.jpg",
    cookTime: "35 min",
    prepTime: "35 min",
    serves: 2,
    author: "Patrick Herlihy",
    description: "Red Lentil Moussaka",
    ingredients: [
      { name: "Aubergine",         value: 2,  	unit: "whole" },
      { name: "Red Lentil",  	   value: 100,  unit: "g" },
      { name: "Carrot",    		   value: 4,  	unit: "whole" },
      { name: "Garlic",            value: 2,  	unit: "clove"    },
      { name: "Cinnamon",          value: 0.5,  unit: "tsp"},
      { name: "Chopped Tomato",    value: 800,  unit: "g"   },
      { name: "Tomato Puree",      value: 2,    unit: "tbsp" },
      { name: "Parsley",           value: 14,   unit: "g"   },
      { name: "Olive Oil",         value: 2,    unit: "tbsp" },
	  { name: "Cheese Sauce",      value: 350,  unit: "g" },
    ],
  },

  // ── ADD NEW RECIPES BELOW THIS LINE ──────────────────────
  // Copy and paste a block from above, then edit it.
  // Don't forget the comma after the closing } of each recipe.
  // Example:
  //
  // {
  //   name: "My New Recipe",
  //   type: "White Meat",
  //   image: "images/my_recipe_photo.jpg",
  //   cookTime: "30 min",
  //   prepTime: "10 min",
  //   serves: 4,
  //   author: "Me",
  //   description: "A short description.",
  //   ingredients: [
  //     { name: "Chicken Breast", value: 600, unit: "g" },
  //     { name: "Garlic Clove",   value: 3,   unit: "whole" },
  //   ],
  // },

];
