const inputSection = document.getElementById("result")

const calculatorButtons = document.querySelectorAll('button')

const clearInput = document.getElementById("clear")


calculatorButtons.forEach(buttons => {
  buttons.addEventListener("click", () => {
  const value = buttons.textContent;


  if (value === "=") {
    try {
      if(inputSection.value.trim()!== ''){
        inputSection.value = eval(inputSection.value);
      }
    } catch (error){
      inputSection.value = 'Error';
    }
  }else if (value !== 'C'){
    inputSection.value += value;
  }

  });
})  ;

clearInput.addEventListener("click", ()=> {
   inputSection.value = '';
});