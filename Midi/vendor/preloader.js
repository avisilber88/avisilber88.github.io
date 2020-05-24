var APP = { 'STARTED': false };
var PRELOADER = (function(){
	// This preloader is time based and imperfect.
	// Your application will run even if all the images 
	// have not loaded. 

	APP_INIT = "";
	
	ASSET_STORE = {};
	TOTAL_ASSETS = 0;
	ASSETS_NOT_LOADED = 0;
    ASSETS_LOADED = 0; 

	REGISTER_ASSETS = function() { 
		if(!ASSET_STORE[this.src]) {
			ASSET_STORE[this.src] = this;
		}
	}
	
	CHECKLOADED = function(){
		REGISTER_ASSETS.call(this);
		ASSETS_LOADED++;
        ASSETS_NOT_LOADED--;
		
        // Note: Draw progress bar on screen
        $("#app-preloader .progress-percentage").text( ((100 * parseFloat(ASSETS_LOADED / TOTAL_ASSETS)) )  + "%");
        $("#preload-progress-bar").attr( 'value', parseFloat(ASSETS_LOADED / TOTAL_ASSETS) );

		if(ASSETS_NOT_LOADED < 5 && APP.STARTED === false) {
		  setTimeout(APP_INIT, 1000);
			APP.STARTED = true;
		}
	};

	LOAD_AUDIO = function(){
		var src = $(this).data('src');
        
		if(!(src in ASSET_STORE)) {
			var _audio = new Audio();
			_audio.onloadeddata = CHECKLOADED;
			_audio.onerror = LOAD_FAILURE;
			_audio.src = src;
            _audio.preload = true;
			TOTAL_ASSETS++;
			ASSETS_NOT_LOADED++;
			ASSET_STORE[_audio.src] = null;
            $(this).attr('src', src);
		} else {
			$(this).attr('src', src);
		}
	}

	LOAD_IMAGE = function(){
		var src = $(this).data('src');
		if(!(src in ASSET_STORE)) {
			var img = new Image();
			img.onload = CHECKLOADED;
			img.onerror = LOAD_FAILURE;
			img.src = src;
			TOTAL_ASSETS++;
			ASSETS_NOT_LOADED++;
			ASSET_STORE[img.src] = null;
			$(this).attr('src', src);
		} else {
			$(this).attr('src', src);
		}
	}
     
	// First fail: try again
	// Second fail: console.log then give up
	LOAD_FAILURE = function(){
		console.log(this.src + " failed to preload");
	  //be careful uncommenting this line- it will repeatedly try to fetch failed images
	  //this will be an infinite loop for most errors (404 are the most obvious)
	  //img.onerror = this.onerror;
	};
	
	return { 
		RUN: function(timeout, callback){
			$("audio[data-src]").each(LOAD_AUDIO);
			$("img[data-src]").each(LOAD_IMAGE);			
            
			APP_INIT = callback; 

            setTimeout(function(){
                if(APP.STARTED === false){
                    console.log("Preload timed out at: " + timeout *  0.001 + " sec");
                    APP_INIT();
                }
            }, timeout);
		}
	};

})();// end PRELOADER MODULE

// START HERE!!!!
$(document).ready( function(){ 
    $('body').addClass('not-loaded'); 
    PRELOADER.RUN(30000, appStart) 
} );

function appStart(){
	"use strict";
	console.log("start app");
    $('body').removeClass('not-loaded');
    $('body').addClass('loaded');
    $("#preload-progress-bar").attr( 'value', TOTAL_ASSETS );
}