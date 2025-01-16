
const questionsRaw = [
    {
        question: "pesho gey li e?",
        answers: [
            "da",
            "ne"
        ]
    },
    {
        question: "Misho0oka na kolko godini e?",
        answers: [
            "20",
            "150",
            "3",
            "18"
        ]
    },
    {
        question: "Nasra li go?",
        answers: [
            "Nikoi nqma da ti povqrwa",
            "da",
            "Kvo"
        ]
    }
];

function gosho() {
    const main = document.getElementById("container");

    const title = document.createElement("h1");
    title.textContent = "Test your skills";
    
    main.appendChild(title)
    
    questionsRaw.forEach(question => {
        const questions = document.createElement("div");
        questions.className = "quest";

        let qt = document.createElement("h3");
        qt.textContent = question.question;

        questions.appendChild(qt);

        question.answers.forEach(ass => {
            const an = document.createElement("input");
            const label = document.createElement("label");
            an.type = "radio";
            an.id = `hui${question.question}${ass}`
            an.name = `anus${question.question}`
            label.textContent = ass;
            questions.appendChild(an)
            questions.appendChild(label)
        })
        main.appendChild(questions)
    });    

    const button = document.createElement("button");
    button.className = "doom";
    button.type = "buttom";
    button.id = "bull";
    button.textContent = "Check Results!"
    main.appendChild(button);
}

document.addEventListener("DOMContentLoaded", () => {
    gosho();
    document.getElementById("bull").addEventListener("click", () => {
        const score = document.createElement("h5");
        let points = 0;
        if(document.getElementById("huipesho gey li e?da").checked) points++;
        if(document.getElementById("huiMisho0oka na kolko godini e?18").checked) points++;
        score.textContent = "Results are: " + points + " aka you're gay!";
        document.getElementById("container").appendChild(score)
    })
})

