        // Enhanced Food Database with Recipes
const foodDatabase = {
    'USA': { 
        name: 'United States', 
        foods: [
            { 
                name: 'Hamburger', 
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "1 lb ground beef",
                        "1 tsp salt",
                        "1/2 tsp black pepper",
                        "4 hamburger buns",
                        "Lettuce, tomato, onion for topping",
                        "Cheese slices (optional)"
                    ],
                    steps: [
                        "Mix ground beef with salt and pepper",
                        "Form into 4 patties",
                        "Grill or fry for 4-5 minutes per side",
                        "Toast buns lightly",
                        "Assemble with your favorite toppings"
                    ]
                }
            },
            { 
                name: 'New York Pizza', 
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "4 cups bread flour",
                        "1 1/2 cups warm water",
                        "2 tsp salt",
                        "1 tsp sugar",
                        "2 tbsp olive oil",
                        "1 packet yeast",
                        "Tomato sauce",
                        "Mozzarella cheese",
                        "Toppings of choice"
                    ],
                    steps: [
                        "Mix dough ingredients and knead for 10 minutes",
                        "Let rise for 1-2 hours",
                        "Stretch dough into large circle",
                        "Add sauce, cheese and toppings",
                        "Bake at 475°F for 12-15 minutes"
                    ]
                }
            }
        ]
    },
    'ITA': { 
        name: 'Italy', 
        foods: [
            { 
                name: 'Pizza Margherita', 
                image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "1 pizza dough (store-bought or homemade)",
                        "1/2 cup tomato sauce",
                        "8 oz fresh mozzarella",
                        "Fresh basil leaves",
                        "2 tbsp olive oil",
                        "Salt to taste"
                    ],
                    steps: [
                        "Preheat oven to 475°F (245°C)",
                        "Roll out dough on floured surface",
                        "Spread tomato sauce over dough",
                        "Add sliced mozzarella",
                        "Bake for 10-12 minutes until crust is golden",
                        "Add fresh basil leaves and drizzle with olive oil"
                    ]
                }
            },
            { 
                name: 'Risotto alla Milanese', 
                image: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "1 1/2 cups Arborio rice",
                        "4 cups chicken stock",
                        "1/2 cup dry white wine",
                        "1 small onion, finely chopped",
                        "1/2 tsp saffron threads",
                        "1/2 cup grated Parmesan",
                        "4 tbsp butter",
                        "Salt to taste"
                    ],
                    steps: [
                        "Heat stock and keep warm",
                        "Sauté onion in butter until soft",
                        "Add rice and toast for 2 minutes",
                        "Add wine and cook until absorbed",
                        "Add stock 1/2 cup at a time, stirring frequently",
                        "Dissolve saffron in some stock and add",
                        "Cook until creamy, stir in Parmesan"
                    ]
                }
            }
        ]
    },
    'JPN': { 
        name: 'Japan', 
        foods: [
            { 
                name: 'Sushi Rolls', 
                image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "2 cups sushi rice",
                        "2 1/4 cups water",
                        "1/4 cup rice vinegar",
                        "2 tbsp sugar",
                        "1 tsp salt",
                        "Nori seaweed sheets",
                        "Fresh fish or vegetables for filling"
                    ],
                    steps: [
                        "Rinse rice until water runs clear",
                        "Cook rice with water",
                        "Mix vinegar, sugar and salt, then fold into rice",
                        "Spread rice on nori sheet",
                        "Add fillings and roll tightly",
                        "Slice with sharp knife"
                    ]
                }
            },
            { 
                name: 'Okonomiyaki', 
                image: 'https://images.unsplash.com/photo-1630409366060-810a1d0a1e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "2 cups flour",
                        "1 1/4 cups dashi stock",
                        "4 eggs",
                        "1/4 head cabbage, shredded",
                        "4 slices bacon",
                        "Okonomiyaki sauce",
                        "Japanese mayo",
                        "Bonito flakes"
                    ],
                    steps: [
                        "Mix flour, dashi and eggs to make batter",
                        "Fold in shredded cabbage",
                        "Cook on griddle like pancakes",
                        "Add bacon slices on top",
                        "Flip and cook until done",
                        "Top with sauce, mayo and bonito flakes"
                    ]
                }
            }
        ]
    },
    'FRA': {
        name: 'France',
        foods: [
            {
                name: 'Coq au Vin',
                image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "1 whole chicken, cut up",
                        "1 bottle red wine",
                        "8 oz bacon, diced",
                        "20 pearl onions",
                        "8 oz mushrooms",
                        "2 carrots, sliced",
                        "3 cloves garlic",
                        "2 tbsp flour",
                        "Bouquet garni (thyme, parsley, bay leaf)"
                    ],
                    steps: [
                        "Marinate chicken in wine overnight",
                        "Brown bacon, then chicken in same pot",
                        "Add vegetables and cook briefly",
                        "Add flour and stir",
                        "Add marinade liquid and bouquet garni",
                        "Simmer for 1.5 hours until tender"
                    ]
                }
            },
            {
                name: 'Ratatouille',
                image: 'https://images.unsplash.com/photo-1630910392840-01b1c7a6e0c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "1 eggplant",
                        "2 zucchini",
                        "2 bell peppers",
                        "4 tomatoes",
                        "1 onion",
                        "4 cloves garlic",
                        "Herbes de Provence",
                        "Olive oil"
                    ],
                    steps: [
                        "Dice all vegetables",
                        "Sauté onions and garlic",
                        "Add eggplant and cook until soft",
                        "Add remaining vegetables",
                        "Season with herbs",
                        "Simmer for 30-40 minutes"
                    ]
                }
            }
        ]
    },
    'MEX': {
        name: 'Mexico',
        foods: [
            {
                name: 'Tacos al Pastor',
                image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "2 lb pork shoulder",
                        "5 guajillo chiles",
                        "3 achiote paste",
                        "1 pineapple",
                        "1 onion",
                        "Corn tortillas",
                        "Cilantro",
                        "Lime wedges"
                    ],
                    steps: [
                        "Blend chiles with spices for marinade",
                        "Marinate pork for 4+ hours",
                        "Grill pork on vertical spit if possible",
                        "Slice thin and grill with pineapple",
                        "Serve on tortillas with cilantro and onion"
                    ]
                }
            },
            {
                name: 'Mole Poblano',
                image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335b77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "5 mulato chiles",
                        "5 ancho chiles",
                        "5 pasilla chiles",
                        "1/2 cup almonds",
                        "1/4 cup raisins",
                        "1 plantain",
                        "3 oz Mexican chocolate",
                        "1 tsp cinnamon",
                        "1 tsp cumin",
                        "Chicken broth"
                    ],
                    steps: [
                        "Toast and rehydrate chiles",
                        "Blend with other ingredients except chocolate",
                        "Cook sauce for 1 hour",
                        "Add chocolate and simmer",
                        "Serve over chicken"
                    ]
                }
            }
        ]
    },
    'IND': {
        name: 'India',
        foods: [
            {
                name: 'Butter Chicken',
                image: 'https://images.unsplash.com/photo-1632818924360-68d4994cfdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "2 lb chicken thighs",
                        "1 cup yogurt",
                        "2 tbsp tandoori masala",
                        "1 can tomato puree",
                        "1 cup heavy cream",
                        "2 tbsp butter",
                        "1 onion",
                        "Garlic, ginger",
                        "Garam masala"
                    ],
                    steps: [
                        "Marinate chicken in yogurt and spices",
                        "Grill or bake chicken",
                        "Sauté onions, garlic and ginger",
                        "Add tomato puree and cook",
                        "Add cream and butter",
                        "Add chicken and simmer"
                    ]
                }
            },
            {
                name: 'Biryani',
                image: 'https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "2 cups basmati rice",
                        "1 lb chicken or lamb",
                        "1 cup yogurt",
                        "2 onions",
                        "Biryani spices (cardamom, cinnamon, cloves)",
                        "Saffron",
                        "Mint leaves",
                        "Ghee"
                    ],
                    steps: [
                        "Marinate meat in yogurt and spices",
                        "Parboil rice",
                        "Layer rice and meat in pot",
                        "Add saffron milk and fried onions",
                        "Seal and cook on low heat for 30 mins"
                    ]
                }
            }
        ]
    },
    'THA': {
        name: 'Thailand',
        foods: [
            {
                name: 'Pad Thai',
                image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "8 oz rice noodles",
                        "2 eggs",
                        "1 cup bean sprouts",
                        "1/4 cup crushed peanuts",
                        "3 cloves garlic",
                        "2 tbsp fish sauce",
                        "2 tbsp tamarind paste",
                        "1 tbsp palm sugar",
                        "Lime wedges",
                        "Shrimp or tofu (optional)"
                    ],
                    steps: [
                        "Soak noodles until flexible",
                        "Make sauce with fish sauce, tamarind and sugar",
                        "Stir-fry garlic, then eggs",
                        "Add noodles and sauce",
                        "Toss with bean sprouts",
                        "Top with peanuts and lime"
                    ]
                }
            },
            {
                name: 'Tom Yum Goong',
                image: 'https://images.unsplash.com/photo-1604977048617-8eb95ef5fa1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "4 cups chicken stock",
                        "1 stalk lemongrass",
                        "4 kaffir lime leaves",
                        "3 Thai chilies",
                        "1 inch galangal",
                        "10 shrimp",
                        "1 cup mushrooms",
                        "2 tbsp fish sauce",
                        "2 tbsp lime juice",
                        "Cilantro"
                    ],
                    steps: [
                        "Bruise lemongrass and slice",
                        "Simmer stock with aromatics",
                        "Add mushrooms and shrimp",
                        "Season with fish sauce and lime",
                        "Garnish with cilantro"
                    ]
                }
            }
        ]
    },
    'CHN': {
        name: 'China',
        foods: [
            {
                name: 'Peking Duck',
                image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "1 whole duck",
                        "1/4 cup honey",
                        "2 tbsp soy sauce",
                        "1 tbsp five-spice powder",
                        "Mandarin pancakes",
                        "Hoisin sauce",
                        "Cucumber and scallions"
                    ],
                    steps: [
                        "Blanch duck and dry thoroughly",
                        "Glaze with honey mixture",
                        "Hang to dry for 24 hours",
                        "Roast at 350°F for 2 hours",
                        "Serve with pancakes and condiments"
                    ]
                }
            },
            {
                name: 'Mapo Tofu',
                image: 'https://images.unsplash.com/photo-1585032221-4a7d4a0e9c1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "1 block soft tofu",
                        "1/2 lb ground pork",
                        "2 tbsp doubanjiang",
                        "1 tbsp Sichuan peppercorns",
                        "2 cloves garlic",
                        "1 inch ginger",
                        "1 cup chicken stock",
                        "Cornstarch slurry"
                    ],
                    steps: [
                        "Sauté pork until browned",
                        "Add aromatics and chili paste",
                        "Add stock and simmer",
                        "Add tofu cubes gently",
                        "Thicken with cornstarch",
                        "Finish with Sichuan pepper"
                    ]
                }
            }
        ]
    },
    'GBR': {
        name: 'United Kingdom',
        foods: [
            {
                name: 'Fish and Chips',
                image: 'https://images.unsplash.com/photo-1556388155-1d0fac6c1d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "4 fillets cod or haddock",
                        "2 cups flour",
                        "1 bottle beer",
                        "4 large potatoes",
                        "Oil for frying",
                        "Salt and vinegar"
                    ],
                    steps: [
                        "Cut potatoes into chips and soak",
                        "Make batter with flour and beer",
                        "Fry chips at 300°F until soft",
                        "Dip fish in batter and fry at 375°F",
                        "Return chips to oil to crisp",
                        "Season with salt and vinegar"
                    ]
                }
            },
            {
                name: 'Beef Wellington',
                image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "2 lb beef tenderloin",
                        "1 lb mushrooms",
                        "8 slices prosciutto",
                        "1 sheet puff pastry",
                        "2 tbsp mustard",
                        "1 egg for egg wash"
                    ],
                    steps: [
                        "Sear beef on all sides",
                        "Blend mushrooms into duxelles",
                        "Layer prosciutto, duxelles, then beef",
                        "Wrap in puff pastry",
                        "Brush with egg wash",
                        "Bake at 400°F for 35-40 mins"
                    ]
                }
            }
        ]
    },
    'TUR': {
        name: 'Turkey',
        foods: [
            {
                name: 'Kebab',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "2 lb ground lamb",
                        "1 onion, grated",
                        "2 cloves garlic",
                        "1 tbsp cumin",
                        "1 tbsp paprika",
                        "Pita bread",
                        "Tzatziki sauce",
                        "Tomato and onion salad"
                    ],
                    steps: [
                        "Mix lamb with spices and onion",
                        "Form onto skewers",
                        "Grill over high heat",
                        "Serve in pita with vegetables and sauce"
                    ]
                }
            },
            {
                name: 'Baklava',
                image: 'https://images.unsplash.com/photo-1608190003443-86ab6a0a1c9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "1 lb phyllo dough",
                        "2 cups walnuts or pistachios",
                        "1 cup butter, melted",
                        "1 cup sugar",
                        "1 cup water",
                        "1/2 cup honey",
                        "1 tsp cinnamon"
                    ],
                    steps: [
                        "Layer phyllo with butter between sheets",
                        "Add nut mixture halfway",
                        "Cut before baking",
                        "Bake at 350°F for 30 mins",
                        "Pour cooled syrup over hot baklava"
                    ]
                }
            }
        ]
    },
    'ESP': {
        name: 'Spain',
        foods: [
            {
                name: 'Paella',
                image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "2 cups short-grain rice",
                        "4 cups chicken stock",
                        "1/2 lb chicken",
                        "1/2 lb seafood",
                        "1 onion",
                        "1 red bell pepper",
                        "1 tomato",
                        "1 tsp saffron",
                        "1 tsp smoked paprika"
                    ],
                    steps: [
                        "Sauté chicken and vegetables",
                        "Add rice and toast slightly",
                        "Add stock and saffron",
                        "Arrange seafood on top",
                        "Cook without stirring until rice is done"
                    ]
                }
            },
            {
                name: 'Tortilla Española',
                image: 'https://images.unsplash.com/photo-1572454591674-b8c47bc1ee5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                recipe: {
                    ingredients: [
                        "6 eggs",
                        "3 potatoes",
                        "1 onion",
                        "Olive oil",
                        "Salt"
                    ],
                    steps: [
                        "Slice potatoes and onion thin",
                        "Fry in olive oil until soft",
                        "Beat eggs and mix with potatoes",
                        "Cook in pan until set",
                        "Flip and cook other side"
                    ]
                }
            }
        ]
    }
};

        // Country coordinates for click detection
   const countryFeatures = [
    { code: 'USA', name: 'United States', coords: [-100, 40] },
    { code: 'ITA', name: 'Italy', coords: [12, 42] },
    { code: 'JPN', name: 'Japan', coords: [138, 36] },
    { code: 'FRA', name: 'France', coords: [2, 47] },
    { code: 'MEX', name: 'Mexico', coords: [-102, 23] },
    { code: 'IND', name: 'India', coords: [79, 22] },
    { code: 'THA', name: 'Thailand', coords: [101, 15] },
    { code: 'CHN', name: 'China', coords: [104, 35] },
    { code: 'GBR', name: 'United Kingdom', coords: [-2, 54] },
    { code: 'TUR', name: 'Turkey', coords: [35, 39] },
    { code: 'ESP', name: 'Spain', coords: [-3, 40] }
];

        // Initialize the map
        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([0, 0]),
                zoom: 2
            })
        });

        // DOM Elements
        const foodPanel = document.getElementById('food-panel');
        const countryName = document.getElementById('country-name');
        const foodList = document.getElementById('food-list');
        const recipeModal = document.getElementById('recipe-modal');
        const recipeTitle = document.getElementById('recipe-title');
        const recipeImage = document.getElementById('recipe-image');
        const recipeContent = document.getElementById('recipe-content');

        // Close buttons
        document.getElementById('close-food-panel').addEventListener('click', () => {
            foodPanel.style.display = 'none';
        });

        document.getElementById('close-recipe-modal').addEventListener('click', () => {
            recipeModal.style.display = 'none';
        });

        // Close when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === recipeModal) {
                recipeModal.style.display = 'none';
            }
        });

        // Map click handler
        map.on('click', (e) => {
            const view = map.getView();
            const coords = ol.proj.toLonLat(e.coordinate);
            
            // Find closest country
            let closest = null;
            let minDist = Infinity;
            
            countryFeatures.forEach(country => {
                const dist = Math.sqrt(
                    Math.pow(coords[0] - country.coords[0], 2) + 
                    Math.pow(coords[1] - country.coords[1], 2)
                );
                if (dist < minDist && dist < 30) { // 30 degree threshold
                    minDist = dist;
                    closest = country;
                }
            });

            if (closest) {
                showCountryFoods(closest.code);
            }
        });

        // Show foods for a country
        function showCountryFoods(countryCode) {
            const countryData = foodDatabase[countryCode];
            if (!countryData) {
                countryName.textContent = "Country Not Found";
                foodList.innerHTML = "<li>No food data available</li>";
                foodPanel.style.display = 'block';
                return;
            }

            countryName.textContent = countryData.name;
            foodList.innerHTML = '';
            
            countryData.foods.forEach(food => {
                const li = document.createElement('li');
                li.textContent = food.name;
                li.addEventListener('click', () => showRecipe(food));
                foodList.appendChild(li);
            });
            
            foodPanel.style.display = 'block';
        }

        // Show recipe for a food
        function showRecipe(food) {
            recipeTitle.textContent = food.name;
            recipeImage.src = food.image;
            recipeImage.alt = food.name;
            
            // Format recipe content
            let html = '<h4>Ingredients:</h4><ul>';
            food.recipe.ingredients.forEach(ing => {
                html += `<li>${ing}</li>`;
            });
            html += '</ul><h4>Steps:</h4><ol>';
            food.recipe.steps.forEach(step => {
                html += `<li>${step}</li>`;
            });
            html += '</ol>';
            
            recipeContent.innerHTML = html;
            recipeModal.style.display = 'block';
        }
