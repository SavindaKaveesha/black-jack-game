function main(){
    
    let x = Math.floor(Math.random() * 100 / 7.6);

    var img = document.createElement("img");

    let total=0;
    
    
    // Get the current total, parse it to a number, or set it to 0 if it's NaN or empty
    let currentTot = parseInt(document.getElementById("result").innerHTML) || 0;

    if(currentTot < 21){

    // Update the total by adding x to it
    total = currentTot + x;

    // Update the content of the result element
    document.getElementById("result").innerHTML = total;

    if(x == 0){
        //Handle the case when x is 0
    }
    else{
        img.src = x+".png";
        img.height = 310;

        document.body.appendChild(img);
    }
}


    if(total < 21){
        Document.getElementById('mainResult').innerHTML = "Generate Another Card";
    }
    else if(total == 21){
        document.getElementById('mainResult').innerHTML= "You are won";
        alert("Congradulations...!");
        document.getElementById("reset-btn").style.display = "block";
    }
    else if(total > 21){
        document.getElementById('mainResult').innerHTML= "Play again!";
        alert("Play again...!");
        document.getElementById("reset-btn").style.display = "block";
    }
    
}

function restart(){
    location.reload();
}