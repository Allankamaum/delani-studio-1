//For toggling on WHAT WE DO
$(document).ready(function() {
    $(".onCrack1").click(function() {
        $("#click1").toggle();
        $("#magic1").toggle();
    });
    $(".onCrack2").click(function() {
        $("#magic2").toggle();
        $("#click2").toggle();
    });
    $(".onCrack3").click(function() {
        $("#magic3").toggle();
        $("#click3").toggle();
    });
});

// For hover effect on PORTFOLIO
$(document).ready(function() {
    $("div.image-frame").hover(function() {
        $(".classAdd1").addClass("mask flex-center rgba-red-strong");
    });
    $("div.image-frame").hover(function() {
        $(".classAdd2").addClass("mask flex-center rgba-blue-light");
    });
    $("div.image-frame").hover(function() {
        $(".classAdd3").addClass("mask flex-center rgba-green-slight");
    });
    $("div.image-frame").hover(function() {
        $(".classAdd4").addClass("mask flex-center");
    });
});