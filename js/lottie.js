// function work() {
//     $(".lottie").css(
//         "visibility", "hidden"
//     );
// }

// if (document.readyState == 'loading') {
//     $(".lottie").css(
//         "visibility", "visible"
//     );
//     console.log('loading');
// } 

// if (document.readyState == 'complete') {
//     work()
//     console.log('done')
// }

jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('#preloader').fadeOut('slow', function () {
            });
        }, 10000);
    });  
});