

//  calculate SPeed function
const calculate = () => {

    // speed input.
    let spedo= document.querySelector("#SPEED").value;
   
    let speedRate= ""
    
//condition for providing the grade according to marks keyed in
let speed= spedo
if(speed<70){
speedRate='ok'
}
else if(((speed-70)/5) > 12){

    speedRate= 'license suspended'
    } 

else{
    speedRate= ((speed-70)/5)+"points"  ;
}


    
    // Condition  if the input is empty
    if (speed == "" 
                ) {
        document.querySelector("#data").innerHTML
            = "please enter your speed";
            //condition if details are keyed in 
    } else {}
    if(speed=spedo)
    {document.querySelector("#data").innerHTML =
           ` HI! ${speedRate}. `;
    
    
        
        } 
    }