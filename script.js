// Animaciones y funcionalidades con jQuery
$(document).ready(function() {
    
    // Animación suave al hacer scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Animación de aparición al hacer scroll
    function animateOnScroll() {
        $('.feature-card, .hero-content, .content-wrapper, .testimonial-card').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    }

    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    $(window).on('scroll', animateOnScroll);

    // Efecto hover en botones
    $('.btn').hover(
        function() {
            $(this).css('transform', 'translateY(-2px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
});

