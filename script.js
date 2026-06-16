const form = document.getElementById("healthForm");
const resultCard = document.getElementById("resultCard");
const result = document.getElementById("result");

// Load saved recommendation
window.onload = () => {

    const savedPlan = localStorage.getItem("healthPlan");

    if(savedPlan){

        result.innerHTML = savedPlan;
        resultCard.classList.remove("d-none");

    }

};

form.addEventListener("submit", function(e){

    e.preventDefault();

    let sleepScore = 0;
    let exerciseScore = 0;
    let dietScore = 0;

    const sleep = document.getElementById("sleep").value;
    const exercise = document.getElementById("exercise").value;
    const diet = document.getElementById("diet").value;
    const goal = document.getElementById("goal").value;

    // Sleep scoring
    if(sleep === "low"){
        sleepScore += 3;
    }

    // Exercise scoring
    if(exercise === "never"){
        exerciseScore += 3;
    }

    // Diet scoring
    if(diet === "poor"){
        dietScore += 3;
    }

    // Goal scoring
    if(goal === "focus"){
        sleepScore += 2;
    }

    if(goal === "weight"){
        exerciseScore += 2;
    }

    if(goal === "nutrition"){
        dietScore += 2;
    }

    let output = "";

    // Sleep Plan
    if(
        sleepScore >= exerciseScore &&
        sleepScore >= dietScore
    ){

        output = `
        <div class="alert alert-info">
            <h3>Sleep Improvement Plan</h3>

            <p>
            You reported poor sleeping habits and difficulty staying focused.
            </p>

            <ul>
                <li>Sleep 7-9 hours per night</li>
                <li>Go to bed before 11 PM</li>
                <li>Avoid screens 1 hour before bed</li>
                <li>Reduce caffeine after 2 PM</li>
                <li>Create a consistent sleep schedule</li>
            </ul>
        </div>
        `;
    }

    // Exercise Plan
    else if(
        exerciseScore >= sleepScore &&
        exerciseScore >= dietScore
    ){

        output = `
        <div class="alert alert-success">
            <h3>Exercise & Weight Loss Plan</h3>

            <p>
            Your responses suggest increasing physical activity should be your priority.
            </p>

            <ul>
                <li>Walk 30 minutes daily</li>
                <li>8,000-10,000 steps per day</li>
                <li>Cardio 3 times weekly</li>
                <li>Strength training twice weekly</li>
                <li>Track progress each week</li>
            </ul>
        </div>
        `;
    }

    // Diet Plan
    else{

        output = `
        <div class="alert alert-warning">
            <h3>Healthy Diet Plan</h3>

            <p>
            Your eating habits suggest improving nutrition should be your focus.
            </p>

            <ul>
                <li>Eat breakfast daily</li>
                <li>Drink 8 glasses of water</li>
                <li>Reduce fast food consumption</li>
                <li>Include vegetables in every meal</li>
                <li>Follow a balanced meal schedule</li>
            </ul>
        </div>
        `;
    }

    result.innerHTML = output;
    resultCard.classList.remove("d-none");

    localStorage.setItem("healthPlan", output);

});

function clearPlan(){

    localStorage.removeItem("healthPlan");

    result.innerHTML = "";

    resultCard.classList.add("d-none");

}