function checkexc1() {
    //TUOTANTOON:emailvalue = document.forms[0].email.value;
    emailvalue = "de@bug.webdev";
    //console.log("Emailvalue: "+emailvalue);
    commentvalue = document.forms[0].comment.value;
    /*Inspiration: https://stackoverflow.com/questions/2435525/best-practice-access-form-elements-by-html-id-or-name-attribute*/
    //TUOTANTOON: alert("Given email: " + emailvalue + "\nGiven comment: " + commentvalue);
    if (emailvalue.length < 15 && emailvalue.length >5 && emailvalue.includes("@")) {
        console.log("emailvalue riitti");
        //Check that comment field is not empty
        if (commentvalue.length > 0) {
            //Ei tyhjän kommenttikentän touhut
            console.log("Commentvalue yli 0, commentvalue.length: " + commentvalue.length);
            if (commentvalue.length > 50) {
                //Works: console.log("Siivu commentvaluesta: " + commentvalue.slice(0,50))
                document.forms[0].comment.value = String(commentvalue.slice(0,50));
                commentvalue = document.forms[0].comment.value;
                console.log("Commentvalue kuohittu, commentvalue.length: " + commentvalue.length);
                console.log("Comment value: " + commentvalue);
            }
        }
    } else {
        console.log("Emailvalue ei trikannu");
        //insert elsen tapahtumat tähän.
    }
    
   //console.log(emailvalue.length);

}