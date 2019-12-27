

function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    })
  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });




    function animatedNavigate() {
        $('a[href^="#"]').click(function(){ //берем все ссылки атрибут href которых начинается с #
            if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
               $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500); // анимируем скролл к элементу
            }     
            return false;
          });
      }
      