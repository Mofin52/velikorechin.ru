$(document).ready(function() {  
    var winHeight = $(window).height(), 
        docHeight = $(document).height(),
        progressBar = $('progress'),
        max, value;

    max = docHeight - winHeight;
    progressBar.attr('max', max);
  
    $(document).on('scroll', function(){
       value = $(window).scrollTop();
       progressBar.attr('value', value);
    });
    
    $(window).on('resize', function() {
        winHeight = $(window).height(),
        docHeight = $(document).height();
      
        max = docHeight - winHeight;
        progressBar.attr('max', max);
      
        value =  $(window).scrollTop();
        progressBar.attr('value', value);
      });

  });