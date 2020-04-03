console.log(1);

/*
 *  
 * ----------------------------------------------------------------- 
*/

// jQuery v 3.3.1


jQuery(document).ready(function($) {

    var mobile_breakpoint = 768;   
    var viewportHeight = getViewportHeight(); //console.log(viewportHeight);
    var isCounterAllreadyStared = false;




    smoothScrollMenu();


    if ( isMobileResolution(mobile_breakpoint) ) {

        // mobile only
    } else {
        // tablets, desktops
    }

   


});



function isMobileResolution(mobile_breakpoint) {

    var container_width = jQuery(".container").innerWidth();
    var mobile_width = mobile_breakpoint;

    // console.log('isMobileResolution(): Hi, container_width: ' + container_width);
    return ( container_width < mobile_width );
}


function getViewportHeight(argument) {

    // $(window).resize(function() {
        viewportHeight = $(document).height(); // Высота всего документа)
        viewportHeight = $(window).height(); // Высота viewporta браузера
    // });        

    // console.log(viewportHeight);
    return viewportHeight;
} 