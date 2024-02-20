document.getElementById('submitBtn').addEventListener("click", function(e){
    e.preventDefault();

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let res = document.getElementById("result");
    let alertMessage = document.getElementById('alertMessage');
    // console.log(height);

     let validationStatus = validateNumber([height, weight])

    // validate input number

    function validateNumber([value1, value2]){
        if(value1 == `` && value2 == ``) {
            alertMessage.innerHTML = `<div class="alert alert-warning" role="alert">
                Enter height & weight!
                </div>`;
                return 0;
        }
        if(isNaN(value1)){
            alertMessage.innerHTML = `<div class="alert alert-warning" role="alert">
                Please enter Numeric value properly!
        </div>`;
        return 0;
        }
    }

    function fitnessStatus(bmiValue){
        // console.log(bmiValue);
        if(bmiValue < 18.5 && bmiValue > 0) return "Underweight";
        else if (bmiValue > 18.5 && bmiValue < 25) return "Normal";
        else if(bmiValue > 25 && bmiValue < 30) return "OverWeight";
        else if(bmiValue > 30) return "Obesity";
    }
// if(validationStatus){
    // height convert CM to meter
    height = height/100

    // PI Height
    PIHeight = (height*height*height)

    // BMI Height;
    let bmi = weight/(height*height);

    const finalBMI = bmi.toFixed(1);

    let = status = fitnessStatus(finalBMI)

    // BMI Prime 
    BMIPrime = (finalBMI/25).toFixed(2);

    PI = (weight/PIHeight).toFixed(1)+`kg/m<sup>3</sup>`;

    res.innerHTML = `<h3>BMI = ${finalBMI}kg/m<sup>2</sup> (<span>${status}</span>)</h3> <br/>
        <h3> BMI Prime = ${BMIPrime}</h3> <br> <h3> PI = ${PI} </h3>`;
// }
    
})