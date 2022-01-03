const FirstInteraction = document.getElementById("first-interaction");
const CheckBoxes = document.getElementById("checking-boxes");

(()=>setTimeout(()=>FirstInteraction.style.display = "block",3000))();
(()=>setTimeout(()=>CheckBoxes.style.display = "block",5000))();

//------------------ANSWERs ------------//

const positiveAnswer = document.getElementById("positive-answer");

function answer1(){if(document.getElementById("case").checked ==true){
    const SecondInteraction = document.getElementById("second-interation");
    SecondInteraction.innerHTML = "Great, now listen ...";
    setTimeout(()=>CheckBoxes.style.display = "none",2500);

    const thirdInteraction = document.getElementById("third-interaction");

    (()=>setTimeout(()=>thirdInteraction.innerHTML = "I met a girl",3500))();

    const FourthInteraction = document.getElementById("fourth-interaction");

    (()=>setTimeout(()=>FourthInteraction.style.display = "block",5000))();

    const FifthInteraction = document.getElementById("fifth-interaction");
    const InputInteractionOne = document.getElementById("input-interaction-one");

    (()=>setTimeout(()=>FifthInteraction.style.display = "block",9000))();

  
       
    const sixthInteraction = document.getElementById("sixth-interaction");
    const Mybutton = document.querySelector("span");
    // myForm.addEventListener("submit", onSubmit);
    // function onSubmit(e){
    //     e.preventDefault();
    //     if(!InputInteractionOne == ''){
    //         sixthInteraction.innerHTML = "Her Name is Alliance, She is mine !"
    //     }
    // }
    Mybutton.addEventListener("click", ()=>{
        if(!InputInteractionOne.value==''){
            sixthInteraction.innerHTML = "Her Name is Alliance, She is mine !";
        }

        const seventhInteraction = document.getElementById("seventh-interaction");

        (()=>setTimeout(()=>seventhInteraction.innerHTML = "The first time I met her I didn't <br> know that she would <br> make me feel this way !",3500))();

        const eighthInteraction = document.getElementById("eighth-interaction");

        (()=>setTimeout(()=> eighthInteraction.innerHTML = "Do you Know her ?? <br> She is the one who knows <br> how to weaken me !",9000))();

        const mySecondButton = document.getElementById("button2");
        const ninthInteraction = document.getElementById("ninth-interaction");
        (()=>setTimeout(()=>ninthInteraction.style.display = 'block',11000))();
        const InputInteractionTwo = document.getElementById("input-interaction-two");
        mySecondButton.addEventListener("click", ()=>{
            if(!InputInteractionTwo ==""){
                const ThenthInteraction = document.getElementById("tenth-interaction");
                setTimeout(()=>ThenthInteraction.innerHTML = "I love her,",1000);

                const eleventhInteraction = document.getElementById("eleventh-interaction");
                setTimeout(()=>eleventhInteraction.innerHTML = "But if you need the end of the story <br> come to pick it up Mupenzi",2500);

                const twelvthInteraction = document.getElementById("twelvth-interaction");
                setTimeout(()=>twelvthInteraction.innerHTML = "it's Yannick Babe... with all my weakened heart",7500);

            }
        })


    })


}
};

//================third-interaction===============//

