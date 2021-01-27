function qTest(){
    console.log("Hi Reality");
}

function inspect(num){
    console.log("hi");
    tag = document.getElementById("inspect"+num);
    if(tag.style.opacity == 1.0){
        tag.style.opacity = 0.0;
    }
    else{
    tag.style.opacity = 1.0;
    }
}