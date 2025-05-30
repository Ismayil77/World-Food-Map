        // Enhanced Food Database with Recipes
const foodDatabase = {
'USA': { 
    name: 'United States', 
    foods: [
        { 
            name: 'Classic Cheeseburger', 
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            recipe: {
                ingredients: [
                    "1 lb ground beef (80/20 blend)",
                    "1 tsp kosher salt",
                    "1/2 tsp black pepper",
                    "1 tsp garlic powder",
                    "4 sesame seed buns",
                    "4 American cheese slices",
                    "Lettuce, tomato, red onion",
                    "Pickles and ketchup/mustard"
                ],
                steps: [
                    "Gently mix beef with seasonings (don't overwork)",
                    "Form into 4 equal patties, indent centers",
                    "Grill over high heat for 3-4 minutes per side",
                    "Add cheese last minute to melt",
                    "Toast buns lightly on grill",
                    "Build burger with toppings of choice"
                ]
            }
        },
        { 
            name: 'New York Style Pizza', 
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            recipe: {
                ingredients: [
                    "4 cups high-gluten flour",
                    "1 1/2 cups warm water (105°F)",
                    "2 tsp salt",
                    "1 tsp sugar",
                    "2 tbsp olive oil",
                    "1 packet instant yeast",
                    "28oz can San Marzano tomatoes",
                    "1 lb fresh mozzarella",
                    "Fresh basil leaves"
                ],
                steps: [
                    "Mix dough ingredients, knead 10 min until elastic",
                    "Let rise 1-2 hours until doubled",
                    "Hand-stretch dough (no rolling pin)",
                    "Crush tomatoes by hand for sauce",
                    "Top with torn mozzarella (not shredded)",
                    "Bake at 475°F on pizza stone for 12-15 min",
                    "Finish with fresh basil and olive oil"
                ]
            }
        },
        { 
            name: 'Southern Fried Chicken', 
            image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            recipe: {
                ingredients: [
                    "3 lbs chicken pieces (bone-in)",
                    "2 cups buttermilk",
                    "2 cups all-purpose flour",
                    "1 tbsp paprika",
                    "2 tsp garlic powder",
                    "1 tsp cayenne pepper",
                    "1 tbsp salt",
                    "Peanut oil for frying"
                ],
                steps: [
                    "Soak chicken in buttermilk 4+ hours",
                    "Mix flour with spices in paper bag",
                    "Dredge chicken in flour mixture",
                    "Let rest 15 mins before second dredge",
                    "Fry at 325°F for 12-15 mins (dark meat) or 8-10 mins (white)",
                    "Drain on wire rack (not paper towels)"
                ]
            }
        },
        { 
            name: 'Texas BBQ Brisket', 
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.epicurious.com%2Frecipes%2Ffood%2Fviews%2Ftexas-style-barbecued-brisket-242249&psig=AOvVaw1938AFvOA4Hw155m8P-l_i&ust=1748521232747000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiG7K6Txo0DFQAAAAAdAAAAABAE',
            recipe: {
                ingredients: [
                    "12 lb whole packer brisket",
                    "1/4 cup coarse salt",
                    "1/4 cup black pepper",
                    "1/4 cup garlic powder",
                    "Oak or hickory wood chunks",
                    "Butcher paper for wrapping"
                ],
                steps: [
                    "Trim brisket to 1/4 cap",
                    "Apply equal parts salt/pepper/garlic rub",
                    "Smoke at 225°F for 6 hours unwrapped",
                    "Wrap in butcher paper when bark is set",
                    "Continue cooking until 203°F internal temp",
                    "Rest 2+ hours in cooler before slicing"
                ]
            }
        },
        { 
            name: 'New England Clam Chowder', 
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F13078%2Fnew-england-clam-chowder-i%2F&psig=AOvVaw3OdxODjz3bzZ1SSMq9ihRA&ust=1748521286480000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjC_sSTxo0DFQAAAAAdAAAAABAE',
            recipe: {
                ingredients: [
                    "4 cups chopped clams with juice",
                    "1/2 lb salt pork or bacon",
                    "2 onions, diced",
                    "4 potatoes, cubed",
                    "4 cups fish stock",
                    "2 cups heavy cream",
                    "Oyster crackers",
                    "Fresh thyme"
                ],
                steps: [
                    "Render salt pork, sauté onions in fat",
                    "Add potatoes and stock, simmer 15 mins",
                    "Add clams and juice, cook 5 mins",
                    "Stir in cream (don't boil after adding)",
                    "Season with black pepper and thyme",
                    "Serve with oyster crackers"
                ]
            }
        },
        { 
            name: 'Chicago Deep Dish Pizza', 
            image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            recipe: {
                ingredients: [
                    "4 cups flour",
                    "1 1/2 cups warm water",
                    "1/2 cup corn oil",
                    "1 tsp sugar",
                    "1 packet yeast",
                    "28oz can crushed tomatoes",
                    "1 lb mozzarella, sliced",
                    "Italian sausage",
                    "Parmesan cheese"
                ],
                steps: [
                    "Press dough into well-oiled deep pan",
                    "Layer sliced mozzarella over dough",
                    "Add sausage and other toppings",
                    "Top with crushed tomatoes (no cooking)",
                    "Sprinkle with Parmesan and oregano",
                    "Bake at 425°F for 30-35 mins"
                ]
            }
        },
        { 
            name: 'Louisiana Gumbo', 
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com%2Flouisiana-creole-gumbo-5210060&psig=AOvVaw2IxcY_OFmhIBWsQII9gzZ0&ust=1748521360640000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjrl-eTxo0DFQAAAAAdAAAAABAE',
            recipe: {
                ingredients: [
                    "1/2 cup flour + 1/2 cup oil (for roux)",
                    "1 lb andouille sausage",
                    "1 lb chicken thighs",
                    "1 lb shrimp",
                    "Holy trinity (onion, celery, bell pepper)",
                    "4 cups chicken stock",
                    "File powder",
                    "Cooked white rice"
                ],
                steps: [
                    "Make dark roux (chocolate color)",
                    "Sauté holy trinity in roux",
                    "Add meats and brown slightly",
                    "Add stock and simmer 45 mins",
                    "Add shrimp last 5 mins",
                    "Serve over rice with file powder"
                ]
            }
        },
        { 
            name: 'California Sushi Burrito', 
            image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            recipe: {
                ingredients: [
                    "2 cups sushi rice",
                    "Nori sheets (full size)",
                    "1 avocado, sliced",
                    "1/2 lb spicy tuna or crab mix",
                    "Cucumber strips",
                    "Carrot matchsticks",
                    "Spicy mayo",
                    "Sesame seeds"
                ],
                steps: [
                    "Spread rice on nori, leaving 1 border",
                    "Layer fillings horizontally in center",
                    "Drizzle with spicy mayo",
                    "Roll tightly like burrito",
                    "Slice in half diagonally",
                    "Sprinkle with sesame seeds"
                ]
            }
        },
        { 
            name: 'Philly Cheesesteak', 
            image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            recipe: {
                ingredients: [
                    "1 lb ribeye steak, thinly sliced",
                    "1 large onion, sliced",
                    "4 hoagie rolls",
                    "8 slices Cheez Whiz or provolone",
                    "Banana peppers (optional)",
                    "Salt and pepper"
                ],
                steps: [
                    "Sauté onions until caramelized",
                    "Cook steak slices on flat top grill",
                    "Chop meat finely with spatulas",
                    "Mix with onions, season well",
                    "Melt cheese over meat mixture",
                    "Load into toasted rolls"
                ]
            }
        },
        { 
            name: 'Key Lime Pie', 
            image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            recipe: {
                ingredients: [
                    "1 1/2 cups graham cracker crumbs",
                    "1/3 cup sugar",
                    "6 tbsp melted butter",
                    "4 egg yolks",
                    "14oz can sweetened condensed milk",
                    "1/2 cup key lime juice",
                    "1 tbsp lime zest",
                    "Whipped cream"
                ],
                steps: [
                    "Mix crumbs with sugar and butter",
                    "Press into pie plate, bake 10 mins at 350°F",
                    "Whisk yolks with condensed milk",
                    "Add lime juice and zest",
                    "Pour into crust, bake 15 mins",
                    "Chill 4+ hours, top with whipped cream"
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
            },
                                {
                        name: 'Pav Bhaji (Mumbai)',
                        image: 'https://images.unsplash.com/photo-1630918237298-9a0f21363ae6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "4 potatoes, boiled and mashed",
                                "1 cup mixed vegetables (peas, carrots, cauliflower)",
                                "2 tbsp pav bhaji masala",
                                "1 onion, finely chopped",
                                "2 tomatoes, pureed",
                                "Butter",
                                "Pav (bread rolls)"
                            ],
                            steps: [
                                "Sauté onions in butter until golden",
                                "Add tomato puree and cook until oil separates",
                                "Add mashed vegetables and spices",
                                "Mash everything together",
                                "Serve hot with buttered pav"
                            ]
                        }
                    },
                    {
                        name: 'Puran Poli (Pune)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "1 cup chana dal",
                                "1 cup jaggery",
                                "1 cup flour",
                                "Cardamom powder",
                                "Ghee"
                            ],
                            steps: [
                                "Cook dal until soft and drain",
                                "Mix with jaggery and cardamom to make puran",
                                "Make dough with flour and water",
                                "Stuff puran in dough balls and roll out",
                                "Cook on griddle with ghee"
                            ]
                        }
                    },
                            {
                        name: 'Dosa (Chennai)',
                        image: 'https://images.unsplash.com/photo-1587794208952-c5c8dd2d7b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "2 cups rice",
                                "1 cup urad dal",
                                "1/2 tsp fenugreek seeds",
                                "Salt to taste",
                                "Oil for cooking"
                            ],
                            steps: [
                                "Soak rice and dal separately for 6 hours",
                                "Grind to smooth batter and ferment overnight",
                                "Spread thin on hot griddle",
                                "Drizzle oil and cook until crisp",
                                "Serve with sambar and chutney"
                            ]
                        }
                    },
                                        {
                        name: 'Chettinad Chicken (Karaikudi)',
                        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "1 kg chicken",
                                "2 onions, sliced",
                                "2 tomatoes, chopped",
                                "1 tbsp ginger-garlic paste",
                                "2 tbsp Chettinad masala",
                                "Coconut oil",
                                "Curry leaves"
                            ],
                            steps: [
                                "Marinate chicken with spices for 1 hour",
                                "Heat oil and temper with curry leaves",
                                "Sauté onions until golden",
                                "Add tomatoes and cook until soft",
                                "Add chicken and cook until done"
                            ]
                        }
                    },
                                        {
                        name: 'Sarson da Saag with Makki di Roti (Amritsar)',
                        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "2 bunches mustard greens",
                                "1 bunch spinach",
                                "2 tbsp maize flour",
                                "2 tbsp ghee",
                                "Garlic, ginger, green chilies",
                                "Makki flour for roti"
                            ],
                            steps: [
                                "Boil greens until tender",
                                "Blend coarsely with maize flour",
                                "Temper with ghee and spices",
                                "For roti, knead makki flour with water",
                                "Cook roti on griddle",
                                "Serve hot with white butter"
                            ]
                        }
                    },
                    {
                        name: 'Amritsari Kulcha (Amritsar)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "2 cups maida",
                                "1/2 cup curd",
                                "1 tsp baking powder",
                                "Potato filling with spices",
                                "Nigella seeds",
                                "Butter"
                            ],
                            steps: [
                                "Knead dough with curd and baking powder",
                                "Stuff with spiced potato mixture",
                                "Sprinkle nigella seeds and bake in tandoor",
                                "Brush with butter before serving"
                            ]
                        }
                    },
                                        {
                        name: 'Kosha Mangsho (Kolkata)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "1 kg mutton",
                                "2 onions, paste",
                                "2 tbsp ginger-garlic paste",
                                "1 cup yogurt",
                                "2 tbsp garam masala",
                                "Mustard oil"
                            ],
                            steps: [
                                "Marinate mutton with yogurt and spices",
                                "Heat mustard oil until smoking point",
                                "Brown onion paste with ginger-garlic",
                                "Add mutton and cook on low heat for hours",
                                "Finish with garam masala"
                            ]
                        }
                    },
                    {
                        name: 'Shorshe Ilish (Murshidabad)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "4 pieces Hilsa fish",
                                "4 tbsp mustard paste",
                                "2 green chilies",
                                "1/2 tsp turmeric",
                                "Mustard oil",
                                "Salt"
                            ],
                            steps: [
                                "Marinate fish with turmeric and salt",
                                "Make paste of mustard seeds with chilies",
                                "Heat mustard oil in pan",
                                "Add fish and mustard paste",
                                "Steam cook for 10 minutes"
                            ]
                        }
                    },
                                        {
                        name: 'Dhokla (Ahmedabad)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "1 cup gram flour",
                                "1/2 cup yogurt",
                                "1 tsp fruit salt",
                                "1 tsp ginger-chili paste",
                                "For tempering: mustard seeds, curry leaves",
                                "Sugar, lemon juice"
                            ],
                            steps: [
                                "Mix flour, yogurt, water to make batter",
                                "Add fruit salt just before steaming",
                                "Steam for 15-20 minutes",
                                "Temper with mustard seeds and curry leaves",
                                "Add sweet-sour water"
                            ]
                        }
                    },
                    {
                        name: 'Khandvi (Surat)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "1 cup gram flour",
                                "1/2 cup buttermilk",
                                "1/2 tsp turmeric",
                                "For tempering: sesame seeds, coconut",
                                "Ginger, green chilies"
                            ],
                            steps: [
                                "Mix flour with buttermilk to make batter",
                                "Cook on low heat until thick",
                                "Spread thin on greased surface",
                                "Roll tightly and cut",
                                "Add tempering and garnish"
                            ]
                        }
                    },
                                        {
                        name: 'Appam with Stew (Kottayam)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "2 cups rice",
                                "1/2 cup cooked rice",
                                "1/2 cup coconut milk",
                                "1 tsp yeast",
                                "Sugar, salt",
                                "For stew: vegetables, coconut milk, spices"
                            ],
                            steps: [
                                "Soak rice for 4-5 hours",
                                "Grind with cooked rice to make batter",
                                "Add coconut milk and yeast, ferment",
                                "Cook in appam pan with swirling motion",
                                "For stew, cook vegetables in coconut milk"
                            ]
                        }
                    },
                    {
                        name: 'Malabar Biryani (Kozhikode)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "2 cups basmati rice",
                                "1 kg chicken",
                                "2 onions, sliced",
                                "1 cup yogurt",
                                "2 tbsp Malabar biryani masala",
                                "Ghee, fried onions, mint, cilantro"
                            ],
                            steps: [
                                "Marinate chicken with yogurt and spices",
                                "Parboil rice with whole spices",
                                "Layer rice and chicken in handi",
                                "Seal and cook on dum for 30 minutes",
                                "Garnish with fried onions and herbs"
                            ]
                        }
                    },
                                        {
                        name: 'Dal Baati Churma (Jaipur)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "For baati: whole wheat flour, ghee",
                                "For dal: mixed lentils, ghee, spices",
                                "For churma: crushed baati, jaggery, ghee"
                            ],
                            steps: [
                                "Make hard dough with wheat flour and ghee",
                                "Shape into balls and bake until golden",
                                "Cook dal with Rajasthani spices",
                                "For churma, crush some baati with jaggery",
                                "Serve baati dipped in ghee with dal"
                            ]
                        }
                    },
                    {
                        name: 'Laal Maas (Jodhpur)',
                        image: 'https://images.unsplash.com/photo-1601050690117-64d028c8a0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                        recipe: {
                            ingredients: [
                                "1 kg mutton",
                                "10-12 Mathania chilies",
                                "1 cup yogurt",
                                "Garlic paste",
                                "Ghee",
                                "Coriander powder"
                            ],
                            steps: [
                                "Soak chilies in water to make paste",
                                "Marinate mutton with yogurt and spices",
                                "Cook in ghee with chili paste",
                                "Slow cook until tender",
                                "Finish with garlic and coriander"
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
    { code: 'ESP', name: 'Spain', coords: [-3, 40] },
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
