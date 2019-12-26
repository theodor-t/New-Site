const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');
const particlesSettings = {"particles":{"number":{"value":199,"density":{"enable":true,"value_area":1262.6362266116362}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":false,"anim":{"enable":false,"speed":24.36231636904035,"size_min":4.060386061506725,"sync":false}},"line_linked":{"enable":true,"distance":128.27296486924183,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":9.620472365193136,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}
particlesJS('particles',particlesSettings)
