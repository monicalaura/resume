
$(document).ready(function() {
  AOS.init( {
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

//active class
$(document).ready(function(){
  $('.act').addClass("active");
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
 });
});

//filter
$(document).ready(function() {
$('#tags li a'). click(function() {
  var tag = $(this).attr('data-tag');

   if(tag === 'all') {
 $('#gallery .porfolio-image').fadeIn();
  } else {
 $('#gallery .porfolio-image[data-tag!='+tag+']').hide('200');
 $('#gallery .porfolio-image[data-tag='+tag+']').fadeIn();
  }
  return false;
 });
});

