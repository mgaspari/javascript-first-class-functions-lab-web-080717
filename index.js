function countdown(callback){
  window.setTimeout(callback, 2000);
};


function createMultiplier(number){
    return function(val){ return val * number;};
};

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(multiplierValue, value){
  return multiplierValue * value;
}

doublerWithBind = multiplier.bind(null, 2);
triplerWithBind = multiplier.bind(null, 3);
