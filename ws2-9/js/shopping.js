function checkexc1_s1() {
    emailvalue = document.forms[0].email.value;
    //emailvalue = "abaa@bba.12345";
    //console.log("Emailvalue: "+emailvalue);
    commentvalue = document.forms[0].comment.value;
    comment = document.forms[0].comment;
    //Element type span in following create / "span" is not id.
    //var textSpan = document.createElement('span');
    //textSpan.className = "ws5form_errormsgs";
    /*Inspiration: https://stackoverflow.com/questions/2435525/best-practice-access-form-elements-by-html-id-or-name-attribute*/
    checkexc1_email();
}
function checkexc1_email() {
    //let's clear potential error first, in case of previous error message:
    document.getElementById("emailerroroutput").innerHTML = "";
    if (emailvalue.length < 15 && emailvalue.length >5 && emailvalue.includes("@")) {
        //console.log("emailvalue riitti");
        checkexc1_comment();
    } else if (emailvalue.length > 14) {
    console.log("Email too long");
    document.forms[0].email.style.background ="rgba(255, 0, 0, 0.3)";
    document.getElementById("emailerroroutput").innerHTML = "Email too long";
    //comment.parentNode.insertBefore(textSpan, comment.nextSibling);
    //comment.parentNode.insertBefore(textSpan, comment.previousSibling);
    event.preventDefault();
    checkexc1_comment();
    } else if (emailvalue.length < 6){
        console.log("Email too short");
        document.forms[0].email.style.background ="rgba(255, 0, 0, 0.3)";
        document.getElementById("emailerroroutput").innerHTML = "Email too short";
        event.preventDefault();
        checkexc1_comment();
    } else if (emailvalue.includes("@") == 0) {
        console.log("@ symbol not found");
        document.forms[0].email.style.background ="rgba(255, 0, 0, 0.3)";
        document.getElementById("emailerroroutput").innerHTML = "No required @ -symbol found";
        event.preventDefault();
        checkexc1_comment();
    } else {
        console.log("Input checking broken while checking email.");
        document.forms[0].email.style.background ="rgba(255, 0, 0, 0.3)";
        document.getElementById("emailerroroutput").innerHTML = "Input checking broken while checking email.";
        event.preventDefault();
        checkexc1_comment();
    }
}
function checkexc1_comment() {
    document.getElementById("commenterroroutput").innerHTML = "";
    //Check that comment field is not empty
    if (commentvalue.length > 0) {
        //Ei tyhjän kommenttikentän touhut
        if (commentvalue.length > 50) {
            //Works: console.log("Siivu commentvaluesta: " + commentvalue.slice(0,50))
            document.forms[0].comment.value = String(commentvalue.slice(0,50));
            commentvalue = document.forms[0].comment.value;
            alert("Given email: " + emailvalue);
            alert("Given comment: " + commentvalue);
        } else {
            alert("Given email: " + emailvalue);
            alert("Given comment: " + commentvalue);
        }
    } else {
        document.forms[0].comment.style.background ="rgba(255, 0, 0, 0.3)";
        document.getElementById("commenterroroutput").innerHTML = "Comment required";
        event.preventDefault();
    }
}
function exc1_towhite(which) {
    
    if (which=="email") {
        document.forms[0].email.style.background ="rgb(255, 255, 255)";
    } else if (which=="comment") {
        //console.log("kommentinvalkaisu laukesi");
        document.forms[0].comment.style.background ="rgb(255, 255, 255)";
    } else {
        console.log("exc1_towhite didn't do anything.")
    }
}