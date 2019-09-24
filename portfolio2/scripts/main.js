$('#downBtn, .projectsNav').click(function(){
    $('.projects').toggleClass('expandProjects');
    $('html, body').animate({
        scrollTop: ($('.projectsHeading').offset().top)
    },1000);
    $('.aboutMeBtn, .thing').fadeToggle(2000);
})


$('.projectsHeading').click(function(){
    $('.projects').toggleClass('expandProjects');
    $('.aboutMeBtn, .thing').fadeToggle(1000);
})

$('.aboutMe h1, .aboutMeBtn, .thing, .aboutMeNav').click(function(){
    $('.aboutMe').toggleClass('expandProjects');
    $('html, body').animate({
        scrollTop: ($('.aboutMe').offset().top)
    },1000);
})
$('.contactBtn, .thingTwo, .contactNav').click(function(){
    $('.contactMe').toggleClass('expandProjects');
    $('html, body').animate({
        scrollTop: ($('.contactMe').offset().top)
    },1000);
})

// Email Prompt ------
$('.emailIcon').click(function(){
    $(location).attr('href', 'mailto:hbrucel88@gmail.com?subject='
                             + encodeURIComponent("This is my subject")
                             + "&body=" 
                             + encodeURIComponent("This is my body")
    );
});
$('.goToGit').click(function(){
    window.open('http://www.github.com/hbrucel88','_blank');
})
$('.linkedIcon').click(function(){
    window.open('https://www.linkedin.com/in/hunter-lindsey-021392194/','_blank');
})
