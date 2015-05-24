// JavaScript Document
$(document).ready(function(e) {
    $('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('do','audio/DO.wav',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('re','audio/RE.wav',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('mi','audio/MI.wav',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('fa','audio/FA.wav',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('sol','audio/SOL.wav',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('la','audio/LA.wav',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('si','audio/SI.wav',function(){},function(e){alert('Error '+e);});
		//reproducir las notas
		$('.nota').bind('touchstart', function(){$(this).addclass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		
		},false);//deviceready
});//ready