console.log(jQuery)

$(document).ready(() => {
    $("#btn").slideUp();
    $("#upbtn").click(() => {   
        $("#btn").slideUp();
    });

    $("#downbtn").click(() => {
        $("#btn").slideDown();
    });

});


