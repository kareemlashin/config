$(document).ready(function() {
    $(".nav-item .nav-link , .links li a").click(function() {
        let LinkHref = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(LinkHref).offset().top }, 1000)
    })
    $("#up").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000)
    })
    $("*")
    $("p.demo")
    $("p:first")
    $("p span")
    $("p > span")
    $("p + span")
    $("p ~ span")
    $("ul li:first")
    $("ul li:first-child")
    $("ul li:nth-child(3)")
    $("[href]")
    $("a[target='_blank']")
    $("a[target!='_blank']")
    $(":input")
    $(":button")
    $("tr:even")
    $("tr:odd")
    $("span:parent")
    $("span:contains('demo')")
    $('selector').click(function(e) {
        $(this).hide()
        $("div").hide()
        $(".demo").hide()
        $("#demo").hide()
    });

    $('selector').dblclick(function(e) {

    });

    $('selector').focus(function(e) {

    });
    $('selector').blur(function(e) {

    });
    $('selector').mouseleave(function(e) {

    });
    $('selector').mouseover(function(e) {

    });
    $('selector').mouseout(function(e) {

    });

    $('selector').change(function(e) {

    });

    $('selector').submit(function(e) {

    });

    $('selector').resize(function(e) {

    });

    $('selector').scroll(function(e) {

        var offset = $(window).offset();
        var top = offset.top;


        var offsetSection = $('Section').offset();
        var topSection = offset.top;

    });


    $("#demo").parent();
    $("span").parent().hide();
    $("#demo").parents();
    $("#demo").parents();
    $("#demo").children();
    $("#demo").children(".first");
    $("#demo").find("span");
    $("#demo").siblings("span");
    $("#demo").next();
    $("#demo").nextAll();
    $("#demo").prev();
    $("#demo").prevAll();


    $("#demo").text();
    $("#demo").html();
    $("#demo").val();
    $("#demo").html('Hey <em>yo</em>');


    $("#link").attr("href");
    $("#link").attr("href", 'https://htmlg.com');
    $("#link").attr({
        "href": "https://htmlg.com",
        "title": "HTML Editor"
    });
    $("#demo").addClass("big red"); // add class
    $("h1, p").removeClass("red"); // remove class
    $("#demo").toggleClass("big"); // toggle between adding and removing

    $("div").animate({
        opacity: '0.5',
        left: '200px',
        height: '200px'
    });

    $("#demo").slideDown();
    $("#demo").slideUp("slow");
    $("#demo").slideToggle();

    $("#demo").fadeIn();
    $("#demo").fadeOut(300);
    $("#demo").fadeToggle("slow");

});