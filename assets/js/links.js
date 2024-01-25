$(document).ready(function() {
    showDiv('equipamentos-principais', $('a.active-link')); // Chama showDiv quando o documento estiver pronto
});

function showDiv(divId, clickedLink) {
    hideAllDivs(); // Oculta todas as divs
    $(".active-link").removeClass("active-link");
    $(clickedLink).addClass("active-link");
    $("#" + divId).fadeIn(); // Exibe a div correspondente com fadeIn
}

function hideAllDivs() {
    $(".hidden").hide(); // Oculta todas as divs com fadeOut
}