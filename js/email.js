emailjs.init("ftwvvE5f_sEnRq1Sg");

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener(
"submit",

function(e){

    e.preventDefault();

    emailjs.send(

        "service_u5lg4vv",

        "template_o2b7rek",

        {

            from_name:
            document.getElementById("name").value,

            from_email:
            document.getElementById("email").value,

            subject:
            document.getElementById("subject").value,

            message:
            document.getElementById("message").value

        }

    )

    .then(function(){

        alert(
        "Message Sent Successfully!"
        );

        contactForm.reset();

    })

    .catch(function(error){

        console.error(error);

        alert(
        "Failed to send message"
        );

    });

});