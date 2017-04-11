 $('document').ready(function(){
    $('.send').on('click', validateForm);
    $('.send-mob').on('click', validateFormMob);

//DYNAMIC LOAD #tab-content IN A INDEX.HTML
// Check for hash value in URL
  var hash = window.location.hash.substr(1);
  var href = $('.nav li a').each(function(){
  var href = $(this).attr('href');
    if(hash==href.substr(0,href.length-5)){
  var toLoad = hash+'.html #tab-content';
    $('#tab-content').load(toLoad)
    }
  });

  $('.nav li a').click(function() {
    $('.navbar-collapse').removeClass('in');
    var toLoad  = $(this).attr('href')+' #tab-content';
    $('#tab-content').fadeOut(300, loadContent);
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
      $('#tab-content').load(toLoad,'', showNewContent());
    }
    function showNewContent() {
      $('#tab-content').fadeIn(300);
      }
  return false;
  }); 

//SEND EMAIL IN DESKTOP VERSION
function validateForm(){
  var email_test = $('#email').val();
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(email_test)) {
          $.get(
            "message.php",
            {
              "email" : $('#email').val(),
              "name" : $('#name').val(),
              "msg" : $('#comment').val()
            },
            ifSuccess
            );
      }
        else {
          $('#send-res').html('Check the entered email.');
          $('#resultModal').modal('show');
        }
  }


function ifSuccess (data) {
  if (data==1){
    $('#send-res').html('Message sent successfully!');
    $('#resultModal').modal('show');
    setTimeout(function(){
        $('#resultModal').modal('hide');
    }, 3000);
    $('#email, #name, #comment').val('');
    }
  else {
    $('#send-res').html('Check the entered data.');
    $('#resultModal').modal('show');
  }
}



//SEND EMAIL IN MOBILE VERSION
function validateFormMob(){
  var email_testMob = $('#email-mob').val();
  var filterMob = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filterMob.test(email_testMob)) {
          $.get(
            "message.php",
            {
              "email" : $('#email-mob').val(),
              "name" : $('#name-mob').val(),
              "msg" : $('#comment-mob').val()
            },
            ifSuccessMob
            );
      }
        else {
          $('#send-res').html('Check the entered email.');
          $('#resultModal').modal('show');
        }
    }

function ifSuccessMob (data) {
  if (data==1){
    $('#send-res').html('Message sent successfully!');
    $('#resultModal').modal('show');
    setTimeout(function(){
        $('#resultModal').modal('hide');
    }, 3000);
    $('#email-mob, #name-mob, #comment-mob').val('');
    }
  else {
    $('#send-res').html('Check the entered data.');
    $('#resultModal').modal('show');
  }
}

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

  

