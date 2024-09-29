
function add(){
    var input=document.getElementById("input");
    var ul=document.getElementById("list-container");

    var list=document.createElement("li");
    list.innerHTML=input.value+"<button onclick='del(event)'>Delete</button>"
    ul.append(list)
}
function del(event){
    event.target.parentElement.remove()
}
