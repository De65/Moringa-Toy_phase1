function getGrade(){
	let studentMarks = [ 0 && 100 ]
	
	if (studentMark > 79){
		return "A"
	}else if (studentMark >= 60 && studentMark <= 79){
		return "B"
	}else if (studentMark >= 59 && studentMark <= 49){
		return "C"
	}else if (studentMark >= 40 && studentMark <= 49){
		return "D"
	}else{
		return "E"
	}
}
let totalGrade = getGrade()
console.log("Your Grade is :" + totalGrade)
