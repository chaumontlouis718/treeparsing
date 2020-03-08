var str = "$$ ou [$$ et champ5='Jee suis un []pro ou un noob' et [$$ ou $$] et [$$ ou $$]] ou $$"
var str1 = "[$$ et $$] ou [$$ et [$$ ou $$] et $$ et $$ et [$$ ou $$]]"
var str2 = "[$$ et [$$ ou $$]] ou [$$ et $$]"
var str3 = "[$$ et [$$ ou $$ ou [$$ et [$$ ou $$] et $$ et [$$ ou $$]] ou $$]] ou $$ ou [$$ et $$]"
var str4 = "$$"
/*
var splitted = str3.split(/\sou\s/)
splitted.forEach(function (element, index) {
    if (element.includes('[')) {
        var i = 1
        var openbracket = (element.match(/\[/g) || []).length
        var closebracket = (element.match(/\]/g) || []).length
        while ((openbracket != closebracket) && i < 8) {
            console.log(splitted)
            splitted[index] = splitted[index] + " ou " + splitted[index + 1]
            splitted.splice(index + 1, 1)
            i++
            openbracket = (splitted[index].match(/\[/g) || []).length
            closebracket = (splitted[index].match(/\]/g) || []).length
        }
    }
})
*/
function splitBrancheBySymbol(branche, symbol, fullynested) {
    var regex;
    symbol ? regex = /\sou\s/ : regex = /\set\s/
    symbol ? symbol="ou" : symbol="et"
    if (fullynested) branche = branche.substring(1, branche.length - 1)
    var splitted = branche.split(regex)
    if (splitted.length > 1) {
        splitted.forEach(function (element, index) {
            if (element.includes('[')) {
                var i = 1
                var openbracket = (element.match(/\[/g) || []).length
                var closebracket = (element.match(/\]/g) || []).length
                while ((openbracket != closebracket) && i < 8) {
                    splitted[index] = splitted[index] + " " + symbol + " " + splitted[index + 1]
                    splitted.splice(index + 1, 1)
                    i++
                    openbracket = (splitted[index].match(/\[/g) || []).length
                    closebracket = (splitted[index].match(/\]/g) || []).length
                }
            }
        })
    }
    return splitted
}

var splieeeee = splitBrancheBySymbol(str, true, false)
console.log(splieeeee)