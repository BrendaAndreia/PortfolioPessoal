/*--------------------navegação menu-----------------------*/

(()=>{
    const menuBtn = document.querySelector(".btn-menu"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".fechar-menu");
    
    menuBtn.addEventListener("click", showMenu);
    closeNavBtn.addEventListener("click", hideMenu);
    function showMenu(){
         navMenu.classList.toggle("open");
    }
    function hideMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
   }
   function fadeOutEffect(){
       document.querySelector(".fade-out-effect").classList.add("active");
       setTimeout(() => {
        document.querySelector(".fade-out-effect").classList.remove("active"); 
       }, 300);
   }
   //manipulador de evento ao doc
   document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')){
            //console.log("event.target contains 'link-item' class");
            /*certifique-se de que o event.tagert.hash 
            tenha um valor antes de substituir*/ 
            if(event.target.hash !=""){
               //evitar o comportamento do click
                event.preventDefault();
                const hash = event.target.hash;
                // desativando o active da secao
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // ativando nova secao
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                /* desativando o active existente na navegação menu 'link-item' */ 
                navMenu.querySelector(".active").classList.add("sombra-externa", "hover-sombra");
                navMenu.querySelector(".active").classList.remove("active","sombra-interna");
                /* se o link-item clicado estiver dentro da navegação do menu */
                if(navMenu.classList.contains("open")){
                //ativando nova nav do menu 'link-item'
                event.target.classList.add("active","sombra-interna");
                event.target.classList.remove("sombra-externa", "hover-sombra");
                //esconder menu
                hideMenu();
        
                }
                else{
                   let navItems = navMenu.querySelectorAll(".link-item");
                   console.log(navItems);
                   navItems.forEach((item) =>{
                       if(hash === item.hash){
                           //ativando o novo 'link-item' da navegaçao do menu
                            item.classList.add("active","sombra-interna");
                            item.classList.remove("sombra-externa", "hover-sombra");
                       }
                   })
                   fadeOutEffect();
                }
                window.location.hash = hash;
            }
        }
        
   })
 })();


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


/*-----Escondendo todas as seçoes exceto a ativa-------*/
(()=> {
    const sections = document.querySelectorAll(".section");
    console.log(sections);
    sections.forEach((section)=>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();
