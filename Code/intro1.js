$('.page-scroll').on('click', function(){
 
    console.log('ok')

});

// landing element jumbotron
$(window).on("load", function(){
    $('.jumbotron img').css({
        "opacity" : 1
    })

    $('.jumbotron h1').css({
        "transform": "translate(21px, 0)",
        "opacity" : 1
    })

    setTimeout(function(){
        $('.jumbotron p').css({
            "transform" : "translate(21px,0)",
            "opacity"    : 1
        })

        $('.tombol1').css({
            "transform" : "translate(21px,0)",
            "opacity"    : 1
        })

      
    })

});

//parallax
  //scroll
$(window).scroll(function (){
var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+wScroll/2+'px)' 
    })
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+wScroll/2+'px)' 
    })
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+wScroll/2+'px)' 
    })
    $('.jumbotron .tombol1').css({
        'transform' : 'translate(0px, '+wScroll/2+'px)' 
    })


//progamkelas

if( wScroll > $('.progamkelas').offset().top -210) {
   $('.kartu1').css({
       "transform" : "translate(0,0)",
        "opacity"  : 1
   })
}

//benefits

if(wScroll> $('.benefits').offset().top - 100 ){
    $('.kartu2').css({
        "transform" : "translate(0,0)",
        "opacity" : 1
    })
}


//about
if(wScroll> $('.about').offset().top -400){
    $('.about img').css({
        "opacity" : 1    
    })

    $('.about h2').css({
        "transform" : "translate(0,0)",
        "opacity" :1
    })

    $('.about p').css({
        "transform" : "translate(0,0)",
         "opacity" : 1
    })
}


//testimoni
if(wScroll> $('.testimoni').offset().top -560){
    $('.testimoni .figure').css({
        "transform" : "translate(0,0)",
        "opacity"   : 1
    })
}



});




