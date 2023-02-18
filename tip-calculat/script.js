const tip5=document.getElementById("tip-5");
const tip10=document.getElementById("tip-10");
const tip15=document.getElementById("tip-15");
const tip25=document.getElementById("tip-25");
const tip50=document.getElementById("tip-50");
const custom=document.getElementById("custom");
const reset=document.getElementById("reset");
const tip_amount=doucment.getElementById("tip-amount");
const total_amount=document.getElementById("total-amount");
const bill=document.getElementById("bill");
const people=doucment.getElementById("people");
const people_worning=document.getElementById("people-warning");
let tipValue = 0;
let billValue = 0;
let pepleSize = 0;
reset.addEventListener("click", resetInputs);
tip5.addEventListener("click", activeButton5);
tip10.addEventListener("click", activeButton10);
tip15.addEventListener("click", activeButton15);
tip25.addEventListener("click", activeButton25);
tip50.addEventListener("click", activeButton50);
tip_Custom.addEventListener("input", activeButtonCustom);
tip_Custom.addEventListener("click", activeButtonCustomSelected);
bill.addEventListener("input", updating);
bill.addEventListener("focusout", billDecimal);
people.addEventListener("input", updating);
function updating()
{
    bill=bill.value;
    people=people.value;
    activeResetButton();
    calculate();
}
function billDecimal(){
    bill.value=Number.parseFloat(bill.value).toFixed(2);

}


function resetButtons()
{
    const removing=document.querySelectorAll('.All');
    for(const remove of removing)
    {
        remove.classList.remove("animate__animated",
        "animate__swing",
        "bg-Strongcyan",
        "text-Very_dark_cyan");
        remove.classList.add("text-white");
    }
}
function activateResetButton() {
    reset.classList.remove("bg-Grayish_cyan");
    reset.classList.add(
      "bg-teal-400",
      "cursor-pointer",
      "hover:bg-rose-300"
    );
  }

  function resetInputs() {
    resetButtons();
    bill.value="";
    bill.value = "";
    people.value = "";
    tip_amount.innerHTML = 0;
    total_amount.innerHTML = 0;
    tipValue = 0;
    tip_Custom.value = "";
    people_worning.classList.add("hidden");
    people.classList.remove("border-2", "border-rose-500");
  }
  function activeButton5() {
    resetButtons();
    tip5.classList.remove("bg-Very_dark_cyan", "text-white");
    tip5.classList.add(
      "text-Very_dark_cyan",
      "bg-teal-400",
      "animate__animated",
      "animate__swing"
    );
    activateResetButton();
    tipValue = 0.05;
    updateValues();
  }
  function activeButton10() {
    resetButtons();
    tip10.classList.remove("bg-Very_dark_cyan", "text-white");
    tip10.classList.add(
      "text-Very_dark_cyan",
      "bg-teal-400",
      "animate__animated",
      "animate__swing"
    );
    activateResetButton();
    tipValue = 0.1;
    updateValues();
  }
  
  function activeButton15() {
    resetButtons();
    tip15.classList.remove("bg-Very_dark_cyan", "text-white");
    tip15.classList.add(
      "text-Very_dark_cyan",
      "bg-teal-400",
      "animate__animated",
      "animate__swing"
    );
    activateResetButton();
    tipValue = 0.15;
    updateValues();
  }
  
  function activeButton25() {
    resetButtons();
    tip25.classList.remove("bg-Very_dark_cyan", "text-white");
    tip25.classList.add(
      "text-Very_dark_cyan",
      "bg-teal-400",
      "animate__animated",
      "animate__swing"
    );
    activateResetButton();
    tipValue = 0.25;
    updateValues();
  }
  
  function activeButton50() {
    resetButtons();
    tip50.classList.remove("bg-Very_dark_cyan", "text-white");
    tip50.classList.add(
      "text-Very_dark_cyan",
      "bg-teal-400",
      "animate__animated",
      "animate__swing"
    );
    activateResetButton();
    tipValue = 0.5;
    updateValues();
  }
  
  function activeButtonCustom() {
    tipValue = tip_Custom.value * 0.01;
    updateValues();
  }
  function activeButtonCustomSelected() {
    resetButtons();
    tip_Custom.classList.add(
      "text-Very_dark_cyan",
      "bg-white",
      "border-2",
      "border-teal-400",
      "animate__animated",
      "animate__swing"
    );
    tip_Custom.classList.remove("bg-slate-100", "text-slate-500");
    activateResetButton();
    tipValue = tip_Custom.value * 0.01;
    updateValues();
  }
  
  // Tip Calculator Function
  function calculate() {
    if (billValue > 0 && pepleSize > 0) {
      tip_Amount.innerHTML = ((billValue * tipValue) / peopleSize).toFixed(2);
      total_Amount.innerHTML = ((billValue * (1 + tipValue)) / peopleSize).toFixed(
        2
      );
      people_worning.classList.add("hidden");
     people_worning.classList.remove("border-2", "border-rose-500");
    } else if (partySize < 1) {
      people_worning.classList.remove("hidden");
      people.classList.add("border-2", "border-rose-500");
    } else {
      people_worning.classList.add("hidden");
      people.classList.remove("border-2", "border-rose-500");
    }
  }