/* =================================
   DEVELOPER QUIZ
================================= */

const quizOptions =
document.querySelectorAll(
".quiz-option"
);

const quizResult =
document.getElementById(
"quiz-result"
);

quizOptions.forEach(option => {

    option.addEventListener(
    "click",

    () => {

        const type =
        option.dataset.type;

        let result = "";

        switch(type){

            case "frontend":

                result =
                "🎨 You are a Frontend Developer! You love crafting beautiful user experiences and modern interfaces.";

                break;

            case "backend":

                result =
                "⚙️ You are a Backend Developer! You enjoy building scalable systems and APIs.";

                break;

            case "fullstack":

                result =
                "🚀 You are a Full Stack Developer! You enjoy creating complete solutions from frontend to backend.";

                break;

            case "ai":

                result =
                "🤖 You are an AI Builder! You enjoy combining development with AI-powered innovation.";

                break;

        }

        quizResult.innerHTML =
        result;

    });

});