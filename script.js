function greatuser(){
    let name=document.getElementById("nameInput").ariaValueMax;
    console.log("user entered:",name);

    if(name){
        document.getElementById("message").innerText = "Hello, "+name+"|";

    }

    else{
        document.getElementById("message").innerText = "Enter your name.";
        
    }
}