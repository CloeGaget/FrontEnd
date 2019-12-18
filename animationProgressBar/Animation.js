
$(function(){
   $('#btAnimer').on('click',Animer);
   $('#btReset').on('click',Reset);
});

function Animer(){
   let step = $('#step').val();
   let progress = $('#pbValue').val();
   progress = parseInt(progress,10);
   step = parseInt(step,10);

   if($('#progressBar').css("width") && ((progress+step) < 100)){
     $('#progressBar').animate({width : "+="+step+"%"},500);
     $('#pbValue').attr('value',(progress+step));
   }
   else if ($('#progressBar').css("width") && ((progress+step) >= 100)) {
     $('#progressBar').animate({width : "100%"},500);
     $('#pbValue').attr('value',100);
     console.log(progress+step);
   }
}

function Reset(){
   $('#progressBar').animate({width : "0%"},1000);
   $('#pbValue').attr('value',0);
}
