function convertDate(s)
{
	// if !PM then add 12 hours 
	var newString = [...s]

	if (!newString.includes('A')){
		var numberArray = newString.splice(0,2)
		newString.splice(newString.length-2,2)
		numberArray = numberArray.map((x)=>parseInt(x))
		newString.unshift((numberArray[0]+1).toString(),(numberArray[1]+2).toString())
			return console.log(newString.join(""))
			}
			
	else{
		var numberArray = newString.splice(0,2)
		newString.splice(newString.length-2,2)
		if(!(numberArray[1]== 2 && numberArray[0]==1)){
		newString.splice(newString.length-2,2)
		return console.log(newString.join(""))
		}
		else{
			newString.unshift('0','0')
			return console.log(newString.join(""))
			}

	}
}
	// if AM then leave as is 

convertDate("12:00:00AM")
convertDate("01:00:00PM")
