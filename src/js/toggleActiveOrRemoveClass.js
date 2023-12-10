const elementsClassCatalogTab = document.body.getElementsByClassName('catalog__tab');


const toggleActive = (elements, className) => {
 
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];

    element.addEventListener("click", () => {
      for (let i = 0; i < elements.length; i++) {
        if (i !== index) {
          elements[i].classList.remove(className);
        }
      }

      const isActive = element.classList.contains(className);
      if (!isActive) {
        element.classList.add(className);
      }
    });
  }
}

const addClassActiveOrRemove = ( className ) => {

  const elements = document.body.getElementsByClassName("catalog-items__row")
  
  for (const element of elements ) {
    element.getElementsByClassName(className)[0].addEventListener("click", () => {
      element.classList.toggle("catalog-items__row_active")
    });
  }
  
}