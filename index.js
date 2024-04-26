//Closure
OuterScopeFunction()
function OuterScopeFunction() {
    var OuterValue = 20;
    console.log(OuterValue)
    const innerScopeFunction = function(){
        var innerValue = 10
        console.log(OuterValue)
        console.log(`${innerValue} = 4`)
    }
    
    innerScopeFunction()
}

