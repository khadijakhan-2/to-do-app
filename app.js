var list = document.getElementById("list");
var i=0



function add() {

var inp = document.getElementById("todo")
if(inp.value == "")
{
alert("Enter something");
}
else
{
// create li tag with text node
var li = document.createElement("li");
var litext = document.createTextNode(inp.value);
li.appendChild(litext);


// create dlt btn
var delbtn = document.createElement("button")
var deltext = document.createTextNode("DELETE")
delbtn.setAttribute("class", "btn")
delbtn.setAttribute("onclick", "deleteitem(this)")
delbtn.appendChild(deltext)
// create edit btn
var editbtn = document.createElement("button");
var editText = document.createTextNode("EDIT");
editbtn.appendChild(editText)
editbtn.setAttribute("class", "btn1")
editbtn.setAttribute("onclick","editItem(this)");
editbtn


li.appendChild(delbtn)
li.appendChild(editbtn)
list.appendChild(li)
todo.value = ""
// console.log(li)
}
}


function deleteitem(e) {
e.parentNode.remove()
}
function deleteAll() {
list.innerHTML = ""
}
function editItem(e){
// e.parentNode.firstChild.nodeValue ="khadija"
var val =e.parentNode.firstChild.nodeValue;
var editValue = prompt("Enter edit value", val)
// console.log(e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue= editValue
// console.log(editValue)

}