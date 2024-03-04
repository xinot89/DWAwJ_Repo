//checkexc1 -functions refactored, so that first one takes form number as input and same functions are used in excercises 1&4
//Tested on Mozilla Firefox.

function checkexc1_s1(tempvariable) {
    which = parseInt(tempvariable);
    emailvalue = document.forms[which].email.value;
    //emailvalue = "abaa@bba.12345";
    //console.log("Emailvalue: "+emailvalue);
    commentvalue = document.forms[which].comment.value;
    comment = document.forms[which].comment;
    //Added after email and comment verification to convey information to abort exercise 4 submit if incorrect numbers:
    greenlight = 1;
    if (which == 2) {
        if (document.getElementById("sms_radio").checked) {
            //console.log("SMS radio laukesi");
            greenlight = checknumber("sms");
        } else if (document.getElementById("call_radio").checked) {
            greenlight = checknumber("call");
        } else {
            greenlight = 2;
            console.log("checkexc1, input 2, sms/call not checked or recognized.");
        }
    }
    //Element type span in following create / "span" is not id.
    checkexc1_email(greenlight);
}
function checkexc1_email(greenlight) {
    console.log("checkemail which:"+which);
    //let's clear potential error first, in case of previous error message:
    document.getElementById("emailerroroutput"+which).innerHTML = "";
    if (emailvalue.length < 15 && emailvalue.length >5 && emailvalue.includes("@")) {
        //console.log("emailvalue riitti");
        checkexc1_comment(greenlight);
    } else if (emailvalue.length > 14) {
    console.log("Email too long");
    document.forms[which].email.style.background ="rgba(255, 0, 0, 0.3)";
    document.getElementById("emailerroroutput"+which).innerHTML = "Email too long";
    //comment.parentNode.insertBefore(textSpan, comment.nextSibling);
    //comment.parentNode.insertBefore(textSpan, comment.previousSibling);
    event.preventDefault();
    checkexc1_comment(0);
    } else if (emailvalue.length < 6){
        console.log("Email too short");
        document.forms[which].email.style.background ="rgba(255, 0, 0, 0.3)";
        document.getElementById("emailerroroutput"+which).innerHTML = "Email too short";
        event.preventDefault();
        checkexc1_comment(0);
    } else if (emailvalue.includes("@") == 0) {
        console.log("@ symbol not found");
        document.forms[which].email.style.background ="rgba(255, 0, 0, 0.3)";
        document.getElementById("emailerroroutput"+which).innerHTML = "No required @ -symbol found";
        event.preventDefault();
        checkexc1_comment(0);
    } else {
        console.log("Input checking broken while checking email.");
        document.forms[which].email.style.background ="rgba(255, 0, 0, 0.3)";
        document.getElementById("emailerroroutput"+which).innerHTML = "Input checking broken while checking email.";
        event.preventDefault();
        checkexc1_comment(0);
    }
}
function checkexc1_comment(tempvrb) {
    greenlight = parseInt(tempvrb);
    document.getElementById("commenterroroutput"+which).innerHTML = "";
    //Check that comment field is not empty
    if (commentvalue.length > 0) {
        //Ei tyhjän kommenttikentän touhut
        if (commentvalue.length > 50) {
            //Works: console.log("Siivu commentvaluesta: " + commentvalue.slice(0,50))
            document.forms[which].comment.value = String(commentvalue.slice(0,50));
            commentvalue = document.forms[which].comment.value;
            if (greenlight == 1) {
                //Operations for succesful truncated comment with emailvalue verification also succeeded.
                alert("Given email: " + emailvalue);
                alert("Given comment: " + commentvalue);
            }
        } else {
            if (greenlight == 1) {
                ////Operations for succesful comment with emailvalue verification also succeeded.
                alert("Given email: " + emailvalue);
                alert("Given comment: " + commentvalue);
            }
        }
    } else {
        document.forms[which].comment.style.background ="rgba(255, 0, 0, 0.3)";
        document.getElementById("commenterroroutput"+which).innerHTML = "Comment required";
        event.preventDefault();
    }
}
function exc1_towhite(which) {
    /*"email"&"comment":Exercise 1, "email2"&"comment2":exercise4
    Won't probably scale well. In need of scaling i would seek for feature which adds form's numbers automatically to function calls. EDIT: Researched such feature, is on function htmlformindex.
    */
    if (which=="email") {
        document.forms[0].email.style.background ="rgb(255, 255, 255)";
    } else if (which=="comment") {
        //console.log("kommentinvalkaisu laukesi");
        document.forms[0].comment.style.background ="rgb(255, 255, 255)";
    } else if (which=="email2") {
        document.forms[2].email.style.background ="rgb(255, 255, 255)";
    } else if (which=="comment2") {
        //console.log("kommentinvalkaisu laukesi");
        document.forms[2].comment.style.background ="rgb(255, 255, 255)";
    } else if (which=="smsnumber") {
        document.forms[2].smsnumber.style.background ="rgb(255, 255, 255)";
        document.getElementById("smserroroutput2").innerHTML = "";
    } else if (which=="callnumber") {
        //console.log("kommentinvalkaisu laukesi");
        document.forms[2].callnumber.style.background ="rgb(255, 255, 255)";
        document.getElementById("callerroroutput2").innerHTML = "";
    } else {
        console.log("exc1_towhite didn't do anything.")
    }
}
function doform2() {
    document.forms[1].cost.value="";
    membership = parseInt(document.forms[1].type.value);
    pricearray = [10,15,20,25];
    years = parseInt(document.forms[1].years.value);
    //console.log("Rawyears: " + rawyears);
    if (isNaN(membership)) {
        alert("Please select your membership.");
    }
    if (isNaN(years)) {
        alert("Please select years.");
    }
    totalcost = parseFloat((years*pricearray[membership]));
    //console.log("Float totalcost: " + totalcost);

   if (years <=2) {
    console.log("1-2v");
    //console.log("Pricearray palauttaa tällä membershipillä:" + pricearray[membership]);
    
    document.forms[1].cost.value = totalcost;
   } else if (2 < years && years < 5) {
    console.log("3-5v");
    //console.log("Set as value for total cost: " + totalcost*0.8);
    document.forms[1].cost.value = (totalcost*0.8);
   } else if (5 <= years ) {
    console.log("5+");
    //console.log("Set as value for total cost: " + totalcost*0.8);
    document.forms[1].cost.value = ((totalcost*0.8)-5);

   } else {
    console.log("doform2 received unknown year amount:" + years);
   }
}
function checkEligibility() {
    document.forms[1].cost.value="";
    //console.log("Check elibility launched");
    years = parseInt(document.forms[1].years.value);
    //console.log("CheckElibility years: "+ years);
    if (years <=2) {
        document.getElementById('exc2Years').innerHTML="";
    } else if (2 < years && years < 5) {
        document.getElementById('exc2Years').innerHTML="Eligible for 20% discount";
    } else if (5 <= years) {
        document.getElementById('exc2Years').innerHTML="<br>Eligible for 20% discount + 5$ Bonus discount and special greetings!";
    } else {
        console.log("Nothing matched in checkElibility.")
    }
}
function calculate() {
    //console.log(document.getElementById('quantity').value);
    shippingpricearray = [30,45,55,85];
    qty = parseInt(document.getElementById('quantity').value);
    price = parseFloat(document.getElementById('price').value);
    tax = parseFloat(document.getElementById('tax').value);
    discount = parseFloat(document.getElementById('discount').value);
    shipping = parseInt(document.getElementById('shipping').value);
    sum = 0;
    if (100 < qty) {
        discount = discount*2;
    }
    //Check that everything can be found:
    if (isNaN(qty)) {
        alert("Please fill correct quantity");
    } else if (isNaN(price)) {
        alert("Please fill correct price");
    } else if (isNaN(tax)) {
        alert("Please fill correct VAT (%)");
    } else if (isNaN(discount)) {
        alert("Please fill correct Discount (%)");
    } else if (isNaN(shipping)) {
        alert("Please select shipping option");
    } else {
        //console.log("qty: " + qty);
        //console.log("price: " + price);
        //console.log("tax%: " + tax);
        //console.log("discount: "+ discount);
        //console.log("Shipping option: " + shipping);
        sum = qty*price*((tax/100)+1)*(1-(discount/100))+shippingpricearray[shipping];
        sum = sum.toFixed(2);
        document.getElementById('total').value=sum;
    }




    //Discount when quantity > 100
    //Add shipping
}
function htmlformid(input) {
    //Returns form's id which has been used to call function. Needs also specific function call on HTML: "htmlformid(this); return false;"
    console.log("Got following as input: " + input);
    var form = input.closest('form');
    console.log("Jalostettu. Got following as input: " + form.id);
}
function htmlformindex(input) {
    //Not used in exercises. Returns form's index which has been used to call function. Needs also specific function call on HTML: "htmlformindex(this); return false;"
    var form = input.closest('form');
    // Check if a form is found
      var formIndex = Array.from(document.forms).indexOf(form);
      console.log("Form index: " + formIndex);
}
function exc4showhide(input){
    radioform = input.closest('input');
    //console.log("Jalostettu. Got following as input: " + radioform.value);
    if (radioform.value == "sms") {
        document.getElementById("smsinput").style.display="block";
        document.getElementById("callinput").style.display="none";
    } else if (radioform.value == "call") {
        document.getElementById("callinput").style.display="block";
        document.getElementById("smsinput").style.display="none";
    } else if (radioform.value == "email") {
        document.getElementById("smsinput").style.display="none";
        document.getElementById("callinput").style.display="none";
    } else {
        alert("exc4nag's first if didn't trigger")
    }
}
function checknumber(callsms) {
    //Palauta 1 jos ok. 2 Jos ei.
    if (callsms=="sms"){
        number = document.getElementById("smsnumberinputfield").value
        if (number.length < 11 && 4 < number.length) {
            if (containsOnlyNumbers(number)) {
                return 1;
            } else {
                //Valitus aiheesta "vain numeroita SMS boksiin";
                document.getElementById("smserroroutput2").innerHTML = "Only numbers to SMS box.";
                document.forms[which].smsnumber.style.background ="rgba(255, 0, 0, 0.3)";
            }
        } else {
            console.log("Checknumber/sms length failed");
            //Valitus aiheesta "väärän pituinen SMS numero"
            document.getElementById("smserroroutput2").innerHTML = "SMS number wrong length.";
            document.forms[which].smsnumber.style.background ="rgba(255, 0, 0, 0.3)";
            return 2;
        }
    } else if (callsms =="call") {
        number = document.getElementById("callnumberinputfield").value
        if (number.length < 11 && 4 < number.length) {
            if (containsOnlyNumbers(number)) {
                return 1;
            } else {
                //Valitus aiheesta "vain numeroita call boksiin"
                document.getElementById("callerroroutput2").innerHTML = "Only numbers to Call number box.";
                document.forms[which].callnumber.style.background ="rgba(255, 0, 0, 0.3)";
            }
        } else {
            console.log("Checknumber/call length failed");
            //Valitus aiheesta "väärän pituinen soittonumero"
            document.getElementById("callerroroutput2").innerHTML = "Call number wrong length.";
            document.forms[which].callnumber.style.background ="rgba(255, 0, 0, 0.3)";
            return 2;
        }
        
    } else {
        console.log("Checknumber's if statements didnt trigger.")
        return 2;
    }
}
function containsOnlyNumbers(inputString) {
    //Helper function for checknumber
    var regex = /^\d+$/;
    return regex.test(inputString);
}