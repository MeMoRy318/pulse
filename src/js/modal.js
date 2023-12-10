function addModalEventListeners(triggerAttribute, modalClassName, contentElementId) {
    const elements = document.body.querySelectorAll(`[data-modal="${triggerAttribute}"]`);
    const modal = document.getElementsByClassName(modalClassName)[0];
    const contentElement = document.getElementById(contentElementId);
    const closeButtons = document.getElementsByClassName('modal__close');
  
    function openModal(e) {
      modal.style.display = "block";
      contentElement.style.display = "block";
  
      if (e.target.innerText === "КУПИТЬ") {
        const parentBlock = e.target.parentElement.parentElement;
        const catalogTitle = parentBlock.getElementsByClassName('catalog-items__subTitle')[0].innerText;
        const title = contentElement.getElementsByClassName('modal__subtitle')[0];
        title.innerText = catalogTitle;
      }
    }
  
    function closeModal(e) {
      modal.style.display = "none";
      contentElement.style.display = "none";
      document.getElementById("thank").style.display = "none"
    }
  
    for (const element of elements) {
      element.addEventListener('click', openModal);
    }
  
    for (const button of closeButtons) {
      button.addEventListener('click', closeModal);
    }
  
    contentElement.addEventListener( "click", (e) => {
      e.stopPropagation()
    })
    
    modal.addEventListener('click', closeModal)
  }