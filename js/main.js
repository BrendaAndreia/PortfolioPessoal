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