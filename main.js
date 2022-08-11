const  originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const disorders = [] = originalDisorderFormat.split("|$|")
//console.log(disorders)
const divDisorders = disorders.join("</div>\n<div>")
console.log(`<div>${divDisorders}</div>`)
