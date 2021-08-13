function updateTextInput(val) {
    document.getElementById('textInput').value=val + "%"; 
  }

function compute()
{

    // storing the values as inputted by the user
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    // input validation
    if (p<=0) {
      alert("Please enter a positive number as principal value!");
      document.getElementById("principal").focus();
      //document.getElementById("amount_right_space").innerHTML = "Please provide the principal value!";
      return;
    } else {
      document.getElementById("amount_right_space").innerHTML = "";
    }

    // Simple interest formula:
    // A = p * r * t, where
    // A is the final amount, p is the principal value
    // r is the interest rate in %
    // and t is the number of years

    // calculating the interest from the data above
    a = p * r * t;

    // getting the current year and calculating the new year
    var d = new Date();
    var current_year = Number(d.getFullYear());
    var new_year = Number(current_year) + Number(t);
    
    // creating the 'compound message'
    message = "If you deposit <mark>" + p + "</mark>,<br> at an interest rate of <mark>" + r + "%</mark>.<br>" + "You will receive an amount of <mark>" + a.toFixed(2) + "</mark>,<br>in the year <mark>" + new_year + "</mark>";

    // writing the compound information message to the respective element
    document.body.style.height = "50vh";
    document.getElementById('message').style.paddingTop = "10px";
    document.getElementById('message').innerHTML = message;
}
        
