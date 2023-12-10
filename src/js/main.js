$('input[name=phone]').mask("+3 (999) 999-99-99");

initializeFormValidation("#consultation-form");
initializeFormValidation("#form-consultation");
initializeFormValidation("#order-form");

addModalEventListeners('consultation', 'overlay', 'consultation');
addModalEventListeners('order', 'overlay', 'order');

toggleActive(elementsClassCatalogTab, 'catalog__tab_active');
addClassActiveOrRemove("catalog-items__link");
addClassActiveOrRemove("catalog-items__back")

submit("consultation-form");
submit("form-consultation");
submit("order-form");

slider()

animateObserver()