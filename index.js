var recipes = { food: "ingredient"};

function updateObjectWithKeyAndValue(recipes, food, ingredient){
  Object.assign({}, recipes, { [food]:ingredient })
  
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, food, ingredient) {
  return Object.assign({}, targetObject, updatesObject)
}
