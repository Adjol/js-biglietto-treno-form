const inputDistance = document.querySelector(".distance");

const inputUserAge = document.querySelector(".user_age");

const sendButton = document.querySelector(".send");

// input distanza in km per calcolo biglietto


// console.log(distanceKm);

// input età passegero per calcolo biglietto


// console.log(ageUser);

// button click event

sendButton.addEventListener("click",

    function(){
        let distanceKm = inputDistance.value;
        console.log(distanceKm);
        let ageUser = inputUserAge.value;
        console.log(ageUser);
    }

)


// const price = parseFloat(0.21)


// // chiedi quanti chilometri dovra percorrere

// let distanceKm = inputDistance.Value;

// console.log(distanceKm);


// // chiedi l'eta al utente

// let discountAge = inputUserAge.Value;





