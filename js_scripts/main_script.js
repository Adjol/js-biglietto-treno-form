const inputDistance = document.querySelector(".distance");

const inputUserAge = document.querySelector(".user_age");

const sendButton = document.querySelector(".send");


// variabili utili al calcolo costo biglietto
// let distanceKm;
let priceCalc;
// let ageUser;

// tariffario


sendButton.addEventListener("click",

    function(){
        
        let distanceKm = parseInt(inputDistance.value);

        let  ageUser = parseInt(inputUserAge.value);


        if (ageUser > 18){
            const price = parseFloat(0.21);
            priceCalc = price * distanceKm;
        document.getElementById("final_price").innerHTML=priceCalc;

        } else if (ageUser < 18) {
            let minorenne = parseFloat( priceCalc);

            minorenne = priceCalc - (priceCalc * .20);
            document.getElementById("final_price").innerHTML=minorenne;

        } else (ageUser > 65) ;{
            let over = parseFloat (priceCalc);

            over = priceCalc - (priceCalc * .40);
            document.getElementById("final_price").innerHTML=over;
        }

    }


);


// if (ageUser>18) {
//     sendButton.addEventListener("click",

//         function(){
//             priceCalc = price * distanceKm;
//             console.log(priceCalc);
//         }
//     )
// }






