'use strict'
jQuery(document).ready(function(){
  


    var par1 = document.querySelector('.parallax-layer1');
    par1.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        par1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
    var par2 = document.querySelector('.parallax-layer2');
    par2.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        par2.style.transform = 'translate(-' + x * 1 + 'px, -' + y * 50 + 'px)';
    });

    var map=document.querySelector('.imgMap');
    var link=document.querySelector('.map');
    link.addEventListener('mouseover', function(e) {
       map.style.opacity='1';
    });
    link.addEventListener('mouseleave', function(e) {
        map.style.opacity='0';
     })

     var info=document.querySelector('.info');
     var text=document.querySelector('.infoText');
     info.addEventListener('mouseover', function(e) {
       text.style.opacity='1';
     });
     info.addEventListener('mouseleave', function(e) {
         text.style.opacity='0';
      })
 
      
        $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
        $( "#datepicker" ).datepicker();
 

      var form=document.querySelector('.form');
      var butForm=document.querySelector('.butForm');
      var cancel=document.querySelector('.cancel');
     var butReceive=document.querySelector('.receive');
     var accept=document.querySelector('.accept');
      var cancelAccept=document.querySelector('.cancelAccept');
      
      butForm.addEventListener('click', function(e) {
        form.style.display='block';
      })
      cancel.addEventListener('click', function(e) {
        form.style.display='none';
      })

      
      butReceive.addEventListener('click', function(e) {
        accept.style.display='block';
        form.style.display='none';
      })
      cancelAccept.addEventListener('click', function(e) {
        accept.style.display='none';
      })
      
});
