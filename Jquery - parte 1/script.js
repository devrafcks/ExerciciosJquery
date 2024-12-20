$(document).ready(function() {
    $('#btn-left').click(function() {
        $('.direction').css('text-align', 'left');
    });

    $('#btn-center').click(function() {
        $('.direction').css('text-align', 'center');
    });

    $('#btn-right').click(function() {
        $('.direction').css('text-align', 'right');
    });

    $('#btn-justify').click(function() {
        $('.direction').css('text-align', 'justify');
    });
});



//jquery Imagem

$(document).ready(function() {
    const $movable = $("#movable");
    const step = 10;

    $("#up").click(function() {
        let currentTop = parseInt($movable.css("top"));
        $movable.css("top", currentTop - step);
    });

    $("#down").click(function() {
        let currentTop = parseInt($movable.css("top"));
        $movable.css("top", currentTop + step);
    });

    $("#left").click(function() {
        let currentLeft = parseInt($movable.css("left"));
        $movable.css("left", currentLeft - step);
    });

    $("#right").click(function() {
        let currentLeft = parseInt($movable.css("left"));
        $movable.css("left", currentLeft + step);
    });

    $("#up-left").click(function() {
        let currentTop = parseInt($movable.css("top"));
        let currentLeft = parseInt($movable.css("left"));
        $movable.css({"top": currentTop - step, "left": currentLeft - step});
    });

    $("#up-right").click(function() {
        let currentTop = parseInt($movable.css("top"));
        let currentLeft = parseInt($movable.css("left"));
        $movable.css({"top": currentTop - step, "left": currentLeft + step});
    });

    $("#down-left").click(function() {
        let currentTop = parseInt($movable.css("top"));
        let currentLeft = parseInt($movable.css("left"));
        $movable.css({"top": currentTop + step, "left": currentLeft - step});
    });

    $("#down-right").click(function() {
        let currentTop = parseInt($movable.css("top"));
        let currentLeft = parseInt($movable.css("left"));
        $movable.css({"top": currentTop + step, "left": currentLeft + step});
    });

    $("#center").click(function() {
        $movable.css({"top": "50%", "left": "50%", "transform": "translate(-50%, -50%)"});
    });
});