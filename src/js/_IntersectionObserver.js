let scrollTimeoutfunction;

document.addEventListener("scroll",(e)=>{ 
  const scrollPosition = window.scrollY;
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  
  if(scrollTimeoutfunction){
    clearTimeout(scrollTimeoutfunction)
  }
 
   scrollTimeoutfunction = setTimeout(()=>{
    const scrollLink = document.querySelector('[href="#up"]');
    const scrollСonditions = scrollHeight / 3;

    if (scrollСonditions < scrollPosition){
     scrollLink.classList.remove("link-up_hiden")
    }else{
      scrollLink.classList.add("link-up_hiden")
    }
    },500)
 })

 
function animateObserver () {
  const animationElrments = document.getElementsByClassName('animation__paused');
  
  const options = {
    threshold: 0.2,
  };

  const callback = function (entries, observer) {
    if(entries[0].isIntersecting){

      if(animationElrments.length){
        for (const element of animationElrments){
          element.classList.add('animation__start');
        }
        
        for (const element of animationElrments){
          element.classList.remove('animation__paused');
        }
      }
    }
   };
 
   const observer = new IntersectionObserver(callback, options);
   const target = document.querySelector("#observerReviewsTarget");
 
   observer.observe(target);
}


