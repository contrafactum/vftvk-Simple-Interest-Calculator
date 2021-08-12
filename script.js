function updateTextInput(val) {
    document.getElementById('textInput').value=val + "%"; 
  }

function compute()
{
    // storing the values as inputted by the user
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    // Simple interest formula:
    // A = p * r * t, where
    // A is the final amount, p is the principal value
    // r is the interest rate in %
    // and t is the number of years

    // calculating the interest from the data above
    a = p * r * t;

    // getting the current year
    var d = new Date();
    var current_year = d.getFullYear();
    
    // creating the 'compound message'
    message = "If you deposit " + p + ", at an interest rate of " + r + "%." + "You will receive an amount of " + a + "in the year " + (current_year+t);

    // writing the compound information message to the respective element

 /*    node = document.getElementById("result");
    newnode = document.createElement('p');
    newnode.appendChild(document.createTextNode(message));
    node.appendChild(newnode); */

    document.getElementById('result').innerHTML = message;
}
        