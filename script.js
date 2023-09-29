function main(){
    
    let x = Math.floor(Math.random() * 100 / 7.6);

    var img = document.createElement("img");

    
    // Get the current total, parse it to a number, or set it to 0 if it's NaN or empty
    let currentTot = parseInt(document.getElementById("result").innerHTML) || 0;
    
    // Update the total by adding x to it
    let total = currentTot + x;

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