/*
 * . Плавная прокрутка меню
 * ----------------------------------------------------------------- 
 */


    function smoothScrollMenu(argument) {

        // Выбираем элементы - ссылки у которых адрес начинается с решетки 
        $('a[href*="#"]:not([href="#"])').on('click', function() {



            //alert(location);
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                // var offset = jQuery('.section-header.clone').height(); //alert(offset);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html, body').animate({
                        scrollTop:  target.offset().top
                        // scrollTop: (target.offset().top - offset)
                    }, 1000);
                    return false;
                }
            }


        });


    }
