$(document).ready(function(){

    $(".next").click(nextImage);
    $(".prev").click(prevImage);

    $(".image img").each(function(index){

        var nav = $(".pallini");
        var active = "";

        if(index === 0){
            active = "dot-attivato"
        }

        var tag = '<span class="dot ' + active + '"></span>';
        nav.append(tag);

    })

    $(".pallini span").on("click",function(){
        var index = $(this).index();
        
        $("span.dot-attivato").removeClass("dot-attivato");
        $("img.active").removeClass("active");
        $("img").eq(index).addClass("active");
        $(this).addClass("dot-attivato");
    })
    
    function nextImage(){

        var activeImg = $("img.active");
        var activeDot = $("span.dot-attivato");

        activeImg.removeClass("active");
        activeDot.removeClass("dot-attivato");

        if(activeImg.hasClass("last")){
            $("img.first").addClass("active");
            $("span.first").addClass("dot-attivato");
        }else{
            activeImg.next("img").addClass("active");
            activeDot.next("span").addClass("dot-attivato");
        }

    }

    function prevImage(){

        var activeImg = $("img.active");
        var activeDot = $("span.dot-attivato");

        activeImg.removeClass("active");
        activeDot.removeClass("dot-attivato");
        
        if(activeImg.hasClass("first")){
            $("img.last").addClass("active");
            $("span.last").addClass("dot-attivato");
        }else{
            activeImg.prev("img").addClass("active");
            activeDot.prev("span").addClass("dot-attivato");
        }

    }

   

})