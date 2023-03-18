const carSpeed = prompt("Enter the speed of the car:")
let demeritPoints = 0

if (carSpeed < 70) {
	console.log("OK")
}else {
	demeritPoints = math.floor((speed - 70) / 5)
	console.log("pointsEarned:", demeritpoints)
	if (demeritPoints > 12){
		console.log("License Suspended")
	}
}
