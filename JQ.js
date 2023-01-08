$(document).ready(function(){
    var pizza = [45, 60,35];
        cafe = [10,15,14,12,16,11,13,12,12,15],
        boisson = [8,7,9,6,7,9,9,8],
        glasse = [12,13,15,14,16],
        restaurant = [20,15,16,13,18,19]
    ;
    var prixT=0;
    //##############################  Pizza ##################
    $("#p1").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+pizza[0]);
        prixT=prixT+pizza[0];
        $("#avectva").text("son tva");
    })
    $("#p2").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+pizza[1]);
        prixT=prixT+pizza[1];
        $("#avectva").text("son tva");
    })
    $("#p3").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+pizza[2]);
        prixT=prixT+pizza[2];
        $("#avectva").text("son tva");
    })
    //##############################  Cafe ##################
    $("#c1").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[0]);
        prixT=prixT+cafe[0];
        $("#avectva").text("son tva");
    })
    $("#c2").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[1]);
        prixT=prixT+cafe[1];
        $("#avectva").text("son tva");
    })
    $("#c3").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[2]);
        prixT=prixT+cafe[2];
        $("#avectva").text("son tva");
    })
    $("#c4").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[3]);
        prixT=prixT+cafe[3];
        $("#avectva").text("son tva");
    })
    $("#c5").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[4]);
        prixT=prixT+cafe[4];
        $("#avectva").text("son tva");
    })
    $("#c6").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[5]);
        prixT=prixT+cafe[5];
        $("#avectva").text("son tva");
    })
    $("#c7").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[6]);
        prixT=prixT+cafe[6];
        $("#avectva").text("son tva");
    })
    $("#c8").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[7]);
        prixT=prixT+cafe[7];
        $("#avectva").text("son tva");
    })
    $("#c9").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[8]);
        prixT=prixT+cafe[8];
        $("#avectva").text("son tva");
    })
    $("#c10").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+cafe[9]);
        prixT=prixT+cafe[9];
        $("#avectva").text("son tva");
    })
    //##############################  Boisson ##################
    $("#b1").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+boisson[0]);
        prixT=prixT+boisson[0];
        $("#avectva").text("son tva");
    })
    $("#b2").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+boisson[1]);
        prixT=prixT+boisson[1];
        $("#avectva").text("son tva");
    })
    $("#b3").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+boisson[2]);
        prixT=prixT+boisson[2];
        $("#avectva").text("son tva");
    })
    $("#b4").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+boisson[3]);
        prixT=prixT+boisson[3];
        $("#avectva").text("son tva");
    })
    $("#b5").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+boisson[4]);
        prixT=prixT+boisson[4];
        $("#avectva").text("son tva");
    })
    $("#b6").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+boisson[5]);
        prixT=prixT+boisson[5];
        $("#avectva").text("son tva");
    })
    $("#b7").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+boisson[6]);
        prixT=prixT+boisson[6];
        $("#avectva").text("son tva");
    })
    $("#b8").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+boisson[7]);
        prixT=prixT+boisson[7];
        $("#avectva").text("son tva");
    })
    //##############################  glasses ##################
    $("#g1").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+glasse[0]);
        prixT=prixT+glasse[0];
        $("#avectva").text("son tva");
    })
    $("#g2").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+glasse[1]);
        prixT=prixT+glasse[1];
        $("#avectva").text("son tva");
    })
    $("#g3").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+glasse[2]);
        prixT=prixT+glasse[2];
        $("#avectva").text("son tva");
    })
    $("#g4").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+glasse[3]);
        prixT=prixT+glasse[3];
        $("#avectva").text("son tva");
    })
    $("#g5").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+glasse[4]);
        prixT=prixT+glasse[4];
        $("#avectva").text("son tva");
    })
    //##############################  Restaurant ##################
    $("#r1").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+restaurant[0]);
        prixT=prixT+restaurant[0];
        $("#avectva").text("son tva");
    })
    $("#r2").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+restaurant[1]);
        prixT=prixT+restaurant[1];
        $("#avectva").text("son tva");
    })
    $("#r3").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+restaurant[2]);
        prixT=prixT+restaurant[2];
        $("#avectva").text("son tva");
    })
    $("#r4").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+restaurant[3]);
        prixT=prixT+restaurant[3];
        $("#avectva").text("son tva");
    })
    $("#r5").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+restaurant[4]);
        prixT=prixT+restaurant[4];
        $("#avectva").text("son tva");
    })
    $("#r6").click(function(){
        $(this).css("color", "#00FF00");
        $("#calc").text(prixT+restaurant[5]);
        prixT=prixT+restaurant[5];
        $("#avectva").text("son tva");
    })
    //##############################  Button ##################
    $("#resetbutton").click(function(){
        $("dd").css("color", "white");
        $("#calc").text(0);
        prixT=0;
        if(prixT!=0){
            $("#avectva").text("son tva");
        }else{
            $("#avectva").text("Cliquer sur des éléments pour ajouter a la caisse");
        } 
    })
    $("#tvabutton").click(function(){
        var TVA=(prixT/100)*7;
        $("#calc").text(prixT+TVA);
        if(prixT!=0){
            $("#avectva").text("Inclut tva");
        }else{
            $("#avectva").text("aucun élément ajoute");
        }
    }) 




    //##############################  animation de facture ##################
    
    $(".humberger").click(function(){
        $(".humberger").toggle(0.5,function(){
            $("nav").css({"transform" : "translate(0,0)","transition" : "all 0.2s ease-in-out"});
            $(".humbergerX").css({"display" : "block"});
        })
    })
    $(".humbergerX").click(function(){
        $(".humberger").toggle(0,function(){
            $("nav").css({"transform" : "translate(-1000px,0)","transition" : "transition: all 0.2s ease-in-out"});
            $(".humberger").css({"display" : "block"});
            $(".humbergerX").css({"display" : "none"});
        })
    })
    



    $("#piz > dd").hide();
    $("#ca > dd").hide();
    $("#bo > dd").hide();
    $("#re > dd").hide();
    $("#gl > dd").hide();
    $("#piz").click(function(){
        $("#piz > dd").show(200);
    })
    $("#ca").click(function(){
        $("#ca > dd").show(200);
    })
    $("#bo").click(function(){
        $("#bo > dd").show(200);
    })
    $("#re").click(function(){
        $("#re > dd").show(200);
    })
    $("#gl").click(function(){
        $("#gl > dd").show(200);
    })

    
})


    //##############################  fin ##################
