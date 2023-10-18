$(window).on('load resize',function(){
    if($(window).width() > 500){
        // window.location = window.location.origin;
        window.location = window.location.origin + '/portfolio/index.html';
    }
});

// $(window).on('load resize',function(){
//     if($(window).width() > 500){
//     }
// });

$('.dark-icon').on('click', function () {
    var body = document.getElementById('body');
    var top_bar = document.getElementById('top-bar');
    body.classList.toggle('light');
    top_bar.classList.toggle('light');
    
    var skill = document.getElementsByClassName('single-skill');
    for (let i = 0; i <= skill.length; i++) {
        skill[i].classList.toggle('dark-skill'); 
    }
});

var typed4 = new Typed('.work-title', {
    strings: ['I am a Web-Designer', 'I also work with React.js', "I want to learn more ..."],
    typeSpeed: 140,
    backSpeed: 48,
    // attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
});

$('.slickSlide').slick({
    fade: true,
    cssEase: 'linear',
    accessibility : false,
    dots : false,
    infinite : true,
    speed : 1250,
    autoplay : true,
    autoplayspeed : 2500,
    arrows : false,
  });

function togglevis() {
    // alert('done');
    let showclass = document.getElementById('hide');
    let moreclass = document.getElementById('more');
    let two = document.getElementById('two');
    showclass.classList.toggle('show');
    moreclass.innerHTML = moreclass.innerHTML == ' ..See more' ? ' ..See less' : ' ..See more' ;
    two.classList.toggle('w-100');
}