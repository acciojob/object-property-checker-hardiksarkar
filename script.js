const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	if(key=="red" || key=="white"){
		return true;
	}
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
