$(document).ready(function () {
    $("h2").click(function () {

        const image = $(this).next("img");

        if (image.is(":visible")) {
            image.slideUp(400);
        } else {
            image.slideDown(400);
        }
    });
});
