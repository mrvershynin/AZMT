$('document').ready(function(){

	//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
      $('body').on('click', '[data-toggle="modal"]', function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal).click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
});