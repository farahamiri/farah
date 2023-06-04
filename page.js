var tab = document.getElementById("tab");
var btn = document.getElementById("btn");
const xhr = new XMLHttpRequest();
xhr.open("GET","eleve.json",true);
xhr.send();

btn.addEventListener("click",function(){
    let datas = JSON.parse(xhr.responseText);
    for(let data of datas){
        tab.innerHTML+=
        `
        <tr> 
            <td>${data.nom}</td> 
            <td>${data.prenom}</td> 
            <td>${data.age}</td>
            <td>${data.email}</td> 
        </tr>   `
    }
    console.log(datas.length)
})
xhr.onreadystatechange = function (){
    if(xhr.readyState==4 && xhr.status==200){
        console.log("request finished");
    }
    else {
        console.log("request is warrning");
    }
}
