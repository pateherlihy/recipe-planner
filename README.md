# Recipe Planner

A simple offline recipe planner. No internet required after first load (fonts are loaded from Google Fonts on first open).

---

## How to use

1. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).
2. Click recipe cards to add them to your meal plan.
3. The shopping list builds automatically, combining duplicate ingredients.

---

## How to add a new recipe

1. **Add your photo** to the `images/` folder.
   - Any JPEG or PNG works. Try to use a roughly square or landscape crop.
   - Example filename: `chicken_tikka.jpg`

2. **Open `recipes.js`** in any text editor (Notepad, TextEdit, VS Code, etc.).

3. **Scroll to the bottom** of the file where it says:
   ```
   // ── ADD NEW RECIPES BELOW THIS LINE ────
   ```

4. **Paste and fill in** a new recipe block:
   ```js
   {
     name: "Chicken Tikka Masala",
     type: "White Meat",
     image: "images/chicken_tikka.jpg",
     cookTime: "30 min",
     prepTime: "15 min",
     serves: 4,
     author: "Me",
     description: "A short description.",
     ingredients: [
       { name: "Chicken Breast", value: 600,  unit: "g"     },
       { name: "Tikka Paste",    value: 4,    unit: "tbsp"  },
       { name: "Coconut Milk",   value: 400,  unit: "ml"    },
       { name: "Onion",          value: 1,    unit: "whole" },
     ],
   },
   ```
   > ⚠️ Don't forget the **comma** after the closing `}`.

5. **Save `recipes.js`** and reload `index.html` in your browser — your recipe appears straight away.

---

## Recipe types

The filter bar is generated automatically from whatever `type` values exist in `recipes.js`. You can use any type you like:

| Value         | Notes                     |
|---------------|---------------------------|
| `Vegetarian`  | Built-in green style      |
| `Fish`        | Built-in blue style       |
| `Red Meat`    | Built-in red style        |
| `White Meat`  | Built-in amber style      |
| Anything else | Gets an auto-assigned colour |

---

## Ingredient units

Recognised units (grouped on the shopping list):

| Unit            | Group shown         |
|-----------------|---------------------|
| `g`, `kg`       | Weight              |
| `ml`, `l`       | Liquids             |
| `whole`         | Whole items (no unit shown) |
| `tbsp`          | Tablespoons         |
| `tsp`           | Teaspoons           |
| `cup`           | Cups                |
| `bunch`, `slice`, `sprig` | Fresh produce |
| anything else   | Other               |

---

## File structure

```
recipe_planner/
├── index.html      ← the app (don't edit)
├── recipes.js      ← your recipe data (edit this)
├── README.md       ← this file
└── images/
    ├── Cacio_e_Pepe.jpg
    ├── One_pot_pasta.jpg
    ├── Bean_Halloumi_Stew.jpg
    └── Beef_Guinness_Hotpot.jpg
```

Keep all files in the same folder. If you move the folder, keep the structure intact.
