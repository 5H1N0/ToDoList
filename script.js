
function loginfunc(callback){
    let card=document.querySelector(".mymar");
    let form=document.querySelector("#form-main");
    let errDiv=document.createElement("div");
	errDiv.className="alert alert-danger";
    let username=document.getElementById("username").value;
    if(username != "admin" || password.value != "12345"){
        errDiv.appendChild(document.createTextNode("Invalid Login"));
        card.insertBefore(errDiv,form);
        setTimeout(clearError,2000);
    }
    else{
        callback("todo.html");
    }

}

function clearError(){
    document.querySelector(".alert").remove();
}


function redirect(page){
    window.location.replace(page);
}

function logoutfn(callback){
    callback("index.html");
}


function displayLists(){
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange =function (){
    if(this.readyState==4 && this.status == 200){
        var response = JSON.parse(this.responseText);
        var output ="";
        for(var i=0;i<response.length;i++){
            let todo=document.querySelector(".todo");
            todo.innerText="ToDo List";
            if(response[i].completed==true){
                output += "<li class=\"item\"> <input id=\"disable\" type=\"checkbox\" name=\"check\" disabled checked>"+ response[i].title+ "</li>";
            }
            else{
                output += "<li class=\"item\"> <input type=\"checkbox\" name=\"check\">"+ response[i].title+ "</li>";
            } 
        }
        document.getElementById("contents").innerHTML = output;
        
        p.then(function(msg){
            swal("Congrats!", msg , "success");
        })
        
    }
    }
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

count=0
let p = new Promise(function(resolve,reject){
    document.getElementById("contents").addEventListener('click',function(e){
    let child=e.target;
    if(child.tagName == "INPUT"){
        if(child.checked == true){
            count=count+1;
            if(count==5){
                alert('Congrats. 5 Tasks have been Successfully Completed');
            }   
        }
        else{
            count--;
        }
    }
    });

})
