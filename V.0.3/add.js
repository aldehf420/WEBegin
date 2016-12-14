function add_cal(){
	document.getElementById("plan").innerHTML = text;
}
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("plan").innerHTML = text;
function add_cal2() {
    fruits.pop();
    fLen = fruits.length;
    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("plan").innerHTML = text;
    //지율때
}
function add_cal3(){
	fruits.push("Kiwi");
    fLen = fruits.length;
    text = "<ul>";	
    for (i = 0; i < fLen; i++) {
	    text += "<li>" + fruits[i] + "</li>";
	}
	text += "</ul>";
	document.getElementById("plan").innerHTML = text;
}



var data = new array();
function diary(day,text) {
	this.day = day;
	this.text = text;
	return day + text; 
}
data[0] = new diary(11,22222222222222);
document.getElementById("plan").innerHTML = data[0];