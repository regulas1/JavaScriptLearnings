function convertDate(s)
{
	// if !PM then add 12 hours 
	var newString = [...s]

	if (!newString.includes('P')){
		var numberArray = newString.splice(0,2)
		newString.splice(newString.length-2,2)
		numberArray = numberArray.map((x)=>parseInt(x))
	newString.unshift((numberArray[0]+1).toString(),(numberArray[1]+2).toString())
		return console.log(newString.join(""))
		
	}
	else{
		newString.splice(newString.length-2,2)
		return console.log(newString.join(""))
	}
	// if AM then leave as is 
}

convertDate("11:00:00AM")
convertDate("01:00:00PM")


