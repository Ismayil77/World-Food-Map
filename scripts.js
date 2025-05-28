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
                        name: 'Hot Dog', 
                        image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "4 hot dog sausages",
                                "4 hot dog buns",
                                "Mustard, ketchup, relish",
                                "Chopped onions (optional)",
                                "Sauerkraut (optional)"
                            ],
                            steps: [
                                "Boil or grill the sausages until heated through",
                                "Lightly toast the buns",
                                "Place sausage in bun",
                                "Add your favorite condiments and toppings"
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
                        name: 'Spaghetti Carbonara', 
                        image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "1 lb spaghetti",
                                "4 oz pancetta or guanciale, diced",
                                "3 large eggs",
                                "1 cup grated Pecorino Romano",
                                "1/2 cup grated Parmesan",
                                "Black pepper",
                                "Salt"
                            ],
                            steps: [
                                "Cook pasta in boiling salted water",
                                "Fry pancetta until crispy",
                                "Whisk eggs with cheeses and pepper",
                                "Drain pasta, reserve some water",
                                "Mix hot pasta with egg mixture quickly",
                                "Add pancetta and mix well",
                                "Add pasta water if needed for creaminess"
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
                        name: 'Ramen', 
                        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "4 cups chicken or pork broth",
                                "2 packs ramen noodles",
                                "2 soft-boiled eggs",
                                "Sliced pork belly",
                                "Green onions",
                                "Nori seaweed",
                                "Soy sauce, mirin, sesame oil"
                            ],
                            steps: [
                                "Simmer broth with seasonings for 30 mins",
                                "Cook noodles separately",
                                "Slice pork and marinate",
                                "Assemble bowls with noodles, broth, toppings",
                                "Add soft-boiled egg halves"
                            ]
                        }
                    }
                ]
            },
            // Add more countries as needed
            'FRA': {
                name: 'France',
                foods: [
                    {
                        name: 'Croissant',
                        image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "4 cups flour",
                                "1 1/4 cups cold water",
                                "1/2 cup sugar",
                                "1 tbsp yeast",
                                "1 1/4 cups butter",
                                "1 tsp salt"
                            ],
                            steps: [
                                "Mix dough ingredients and knead",
                                "Chill for 1 hour",
                                "Roll out and fold with butter layers",
                                "Repeat folding process 3 times",
                                "Shape into crescents and proof",
                                "Bake at 400°F for 15-20 mins"
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
            { code: 'FRA', name: 'France', coords: [2, 47] }
            // Add more countries as needed
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
