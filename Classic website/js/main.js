//1 - when the page is loaded , make the preloader disappears
$("#preloader").ready(function () {});
$(function () {
  $("#preloader").fadeOut(1000);
});

//2 - Form verification
$("form").on("submit", function (event) {
  event.preventDefault();

  // Name !!!!!!!!!!
  const name = $("#name").val();
  const nameValid = name.length > 0;
  if (nameValid) {
    $("#helpForm").text(" ");
  } else {
    $("#helpForm").html("Please enter your name" + "<br>");
  }

  //Email

  const email = $("#email").val();
  const emailValid = email.includes("@") && email.includes(".");
  if (emailValid) {
    $("#helpForm");
  } else {
    $("#helpForm").append("Put a valid email please");
  }

  //Subject
  const subject = $("#subject").val();
  const subjectValid = !subject == "";
  if (subjectValid) {
    $("#helpForm");
  } else {
    $("#helpForm").append("Chose one please");
  }

  //message
  const message = $("#message").val();
  const messageValid = message.length >= 40;
  if (messageValid) {
    $("#helpForm");
  } else {
    $("#helpForm").append(
      "Please right a message with at least 40 caractheres"
    );
  }

  if (nameValid && emailValid && subjectValid && messageValid) {
    $("#helpForm").html(
      name +
        "," +
        " your message " +
        message +
        " has been sent. You will be contacted soon on mail adress " +
        email +
        " about " +
        subject
    );
  } else {
    $("#helpForm");
  }
  /*IF ALL IS VALID REPLACE THE FORM WITH 
    {{name}}, your message {{message}} has been sent. 
    You will be contact soon on the mail address {{email}} 
    about {{subject}} */
});
