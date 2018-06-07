document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  const $galleryModal = $('#modal-button');
  $galleryModal.on('click', function() {
    $('.modal').addClass('is-active');
  });

  const $closeGalleryModal = $('.close-modal');
  $closeGalleryModal.on('click', function() {
    $('.modal').removeClass('is-active');
  });

  const file = document.getElementById('file');
  file.onchange = function(){
    if(file.files.length > 0) {
      document.getElementById('filename').innerHTML = file.files[0].name;
    }
  };
  wateringListener();

});

const wateringListener = function() {
  const wateredButton = document.querySelector('#watered-button');
  wateredButton.addEventListener('click', function() {
  });
};
