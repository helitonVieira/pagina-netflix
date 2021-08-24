$('.owl-carousel').owlCarousel({
    loop:true, /*loop infinito */
    margin:10, /*espaço entre uma e outra */
    nav:true, /*navegação abaixo img <> */
    responsive:{  /*reponsividade de acordo com tamanho da tela */
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})