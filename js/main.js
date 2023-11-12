

$('.pjlist').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
});


if (window.screen.width > 500) {
    var myFullpage = new fullpage('#fullpage', {
        // licenseKey: '',
        anchors: ['', '', ''],
        navigation: true,
        navigationTooltips: ['Home', 'About', 'Skills', 'Projects', 'Contract', 'Footer'],
        responsiveHeight: 300,
        responsiveWidth: 500,
        responsiveSlides: true,
        // autoScrolling:true,
        // scrollHorizontally: true,
    });
}
// else{
//     // window.onload.location.href = window.location.origin + '/pages/smartPhone/';
//     // return;
// }

// $(window).on('load resize',function(){
//     if($(window).width() < 500){
//         window.location = window.location.origin + '/portfolio/pages/smartPhone/index.html';
//     }
// });

// console.log(window.location.origin);

// var url = window.location;
// console.log(url);
// $(window).on('load resize',function(){
//     if($(window).width() < 500){
//         window.location = url + 'pages/smartPhone/index.html';
//     }
// });



const tx = document.getElementsByClassName("response-textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}


$('.dark-icon').on('click', function () {
    var body = document.getElementById('body');
    var top_bar = document.getElementById('top-bar');
    var fp_nav = document.getElementById('fp-nav');
    // var fp_span = document.querySelectorAll('#fp-nav ul li a span');
    body.classList.toggle('light');
    fp_nav.classList.toggle('fp-light');
    // top_bar.classList.toggle('light');
    
    var skill = document.getElementsByClassName('single-skill');
    for (let i = 0; i <= skill.length; i++) {
        skill[i].classList.toggle('dark-skill'); 
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var mixer = mixitup('.projects');
});


var typed4 = new Typed('.work-title', {
    strings: ['I am a Web-Designer', 'I also work with React.js', "I want to learn more ..."],
    typeSpeed: 65,
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



// var bar = new ProgressBar.Circle(bar1, {
//     color: '#058C42',
//     trailColor: '#ffffff00',
//     trailWidth: 6,
//     duration: 2800,
//     easing: 'bounce',
//     strokeWidth: 8,
//     from: {color: '#FFEA82', a:0},
//     to: {color: '#ED6A5A', a:1},
//     // Set default step function for all animate calls
//     step: function(state, circle) {
//       circle.path.setAttribute('stroke', state.color);
//     }
//   });
  
//   bar.animate(0.8);  // Number from 0.0 to 1.0



// $('').on('load', function(
    
//     ));
    
// function load() {
//     var watermark = document.getElementsByClassName('fp-watermark');
//     document.getElementsByTagName('body').remove(watermark);
// };