const submit = (formId) => {
    const form = document.getElementById(formId);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const inputElements = form.elements;
      const data = {};
  
      for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].type !== 'submit') {
          data[inputElements[i].name] = inputElements[i].value
        }
      }
  
    const countFormvalue = Object.values(data).filter(value => value).length;
    
    if(countFormvalue === 3){
      form.reset();
      document.getElementById("consultation").style.display = "none";
      document.getElementById("order").style.display = "none"
  
      document.getElementById("thank").style.display = "block"
  
      if(formId === "consultation-form"){
        document.getElementsByClassName('overlay')[0].style.display = "block";
      }
    }
    });
  };