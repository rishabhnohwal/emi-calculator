
function giveRes(){
    var loan = document.getElementById('amount').value;
    var tenure = document.getElementById('tenure').value;
    var interest = document.getElementById('interest').value;

    document.getElementById('amtRange').value=loan;
    document.getElementById('tenureRange').value=tenure;
    document.getElementById('intRange').value=interest;

    var noOfMonths = tenure*12;
    var monthlyRate =interest/(12*100);
    var onePlusR=Math.pow(1+monthlyRate,noOfMonths);
    var denominator = onePlusR-1;
    var emi = (loan*monthlyRate*(onePlusR/denominator)).toPrecision(5);
    var totalAmt = noOfMonths*parseFloat(emi);
    var totalInterest = Math.floor(totalAmt-loan);
    var monthlyEmi = totalAmt/(noOfMonths); 

    var payableEmi = document.querySelector('.emi');
    var payableAmount = document.querySelector('.totalAmt');
    var payableInterest = document.querySelector('.totalInt');

    payableEmi.innerHTML = parseFloat(monthlyEmi);
    payableAmount.innerHTML=parseFloat(totalAmt);
    payableInterest.innerHTML=parseFloat(totalInterest);

}

function giveResSlider(){


    var loan = document.getElementById('amtRange').value;
    var tenure = document.getElementById('tenureRange').value;
    var interest = document.getElementById('intRange').value;

    document.getElementById('amount').value=loan;
    document.getElementById('tenure').value=tenure;
    document.getElementById('interest').value=interest;

    var noOfMonths = tenure*12;
    var monthlyRate =interest/(12*100);
    var onePlusR=Math.pow(1+monthlyRate,noOfMonths);
    var denominator = onePlusR-1;
    var emi = (loan*monthlyRate*(onePlusR/denominator)).toPrecision(5);
    var totalAmt = noOfMonths*parseFloat(emi);
    var totalInterest = Math.floor(totalAmt-loan);
    var monthlyEmi = totalAmt/(noOfMonths); 

    var payableEmi = document.querySelector('.emi');
    var payableAmount = document.querySelector('.totalAmt');
    var payableInterest = document.querySelector('.totalInt');

    payableEmi.innerHTML = parseFloat(monthlyEmi);
    payableAmount.innerHTML=parseFloat(totalAmt);
    payableInterest.innerHTML=parseFloat(totalInterest);

}

document.querySelector('#updating').addEventListener('change',function(e){
    e.preventDefault();

    var loan = document.getElementById('amount').value;
    var tenure = document.getElementById('tenure').value;
    var interest = document.getElementById('interest').value;

    var noOfMonths = tenure*12;
    var monthlyRate =interest/(12*100);
    var onePlusR=Math.pow(1+monthlyRate,noOfMonths);
    var denominator = onePlusR-1;
    var emi = (loan*monthlyRate*(onePlusR/denominator)).toPrecision(5);
    var totalAmt = noOfMonths*parseFloat(emi);
    var totalInterest = Math.floor(totalAmt-loan);
    var monthlyEmi = totalAmt/(noOfMonths); 

    var payableEmi = document.querySelector('.emi');
    var payableAmount = document.querySelector('.totalAmt');
    var payableInterest = document.querySelector('.totalInt');

    payableEmi.innerHTML = parseFloat(monthlyEmi);
    payableAmount.innerHTML=parseFloat(totalAmt);
    payableInterest.innerHTML=parseFloat(totalInterest);

        // for chart
    var pieTotal = parseFloat(totalAmt)+parseFloat(totalInterest);
    var piePayableLoan = (parseFloat(totalAmt)/pieTotal)*100;
    var piePayableInt = (parseFloat(totalInterest)/pieTotal)*100;

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        backgroundColor: "transparent",
        color: "black",
        title: {
            text: "Pie Chart",
            fontColor: "white"
        },
        data: [{
            indexLabelFontColor:"white",
            type: "pie",
            fontColor:"white",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: piePayableInt, label: "Interest to be paid"},
                {y: piePayableLoan, label: "Loan to be paid"},
            ]
        }]
    });
    chart.render();

    
});


