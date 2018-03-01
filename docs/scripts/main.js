$( '.btn-cinematic' ).click(function() {
  $( '.btn-cinematic' ).removeClass('active');
  $( this ).addClass('active');
  $( '.cinematic' )
    .removeClass((idx, className) => (className.match(/\bcinematic--\S+/g) || []).join(' '))
    .addClass('cinematic--' + $( this ).data('cinematic'))
    .one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
      $( this ).removeClass((idx, className) => (className.match(/\bcinematic--\S+/g) || []).join(' '));
    });
});