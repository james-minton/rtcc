
// Slideout menu


var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

$('.toggle-button').on('click', function() {
    slideout.toggle();
});

var fixed = document.querySelector('.fixed-footer');

slideout.on('translate', function(translated) {
  fixed.style.transform = 'translateX(' + translated + 'px)';
});

slideout.on('beforeopen', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(256px)';
});

slideout.on('beforeclose', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(0px)';
});

slideout.on('open', function () {
  fixed.style.transition = '';
  // $("svg#menu-closed").addClass("mobile-off");
});

slideout.on('close', function () {
  fixed.style.transition = '';
  // $("svg#menu-closed").removeClass("mobile-off");
});

// Stop main page scrolling at end of content block

var mainContainer = $('main'),
divHeight = $('#homepage').height(),
stickyClass = 'sticky-main'

// function checkSize(){   
   // if ($("main").css("max-width") == "75%"){
     
        $(window).on('scroll', function(){
           if ($("h1").css("font-size") == "32px") {
            var mainPadding = 64;
           }
           else if ($("h1").css("font-size") == "48px") {
             var mainPadding = 80;
           };
          
            var topSetting = divHeight - $(window).height() + mainPadding;
            var scrollPos = $(window).scrollTop() + (divHeight-40) - topSetting;
            
        if /*(*/(scrollPos > divHeight) /* && (divHeight < $(window).height())) */ {
            //$('.sticky-main').css("top", topSetting);
            mainContainer.addClass(stickyClass);
        } else {
            mainContainer.removeClass(stickyClass);
           // $('main').css("top", "unset");
        }
        })

  //  }
// }
/* $(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
}); */