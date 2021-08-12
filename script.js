function updateTextInput(val) {
    document.getElementById("range").value=val; 
}

function compute()
{
    // storing the values as inputted by the user
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("year").value;

    // Simple interest formula:
    // A = p * r * t, where
    // A is the final amount, p is the principal value
    // r is the interest rate in %
    // and t is the number of years

    // calculating the interest from the data above
    a = p * r * t;


    alert("rig");
}
        