/*--------------- about section tabs--------------------*/
//expressão de função chamada imediatamente usando arrow function
(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        /*Se event target contem a classe 'tab-item e não contem a classe 'active'*/
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // desativando 'tab-item' ativo 
            tabsContainer.querySelector(".active").classList.remove("sombra-externa", "active");
            //ativando novo 'tab=tem'
            event.target.classList.add("active", "sombra-externa");

            // desativando 'tab-content' ativo existente
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // ativando novo 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

/*------------- slide depoimento ------------ */

(() =>{

    const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next"),
    activeSlide = sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    
    //setar largura pros slides 
    slides.forEach((slide) =>{
        slide.style.width = slideWidth + "px";
    })
    
    //setar largura do sliderContainer
    sliderContainer.style.width = slideWidth * slides.length + "px";

    nextBtn.addEventListener("click", () =>{
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        slider();
    })

    prevBtn.addEventListener("click", () =>{
        if(slideIndex === 0){
            slideIndex = slides.length-1;
        }
        else{
            slideIndex--;
        }
        slider();
    })

    function slider(){
        //desativa o stlide ativo existente
        sliderContainer.querySelector(".testi-item.active").classList.remove("active");
        //novo slide ativo
        slides[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft = - (slideWidth *slideIndex) + "px";
    }
    slider();

})();

