var recipes = { food: "ingredient"};

function updateObjectWithKeyAndValue(recipes, food, ingredient){
  Object.assign({}, recipes, { [food]:ingredient })
  
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, food, ingredient) {
  
  recipes[food] = ingredient;
  
  return recipes
}

function deleteFromObjectByKey(recipes, food) {
  var newRecipe = Object.assign ({}, recipes)
  
  delete newRecipe.food;
  
  return recipes; newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, food){
  delete recipes[food];
  return recipes;
}