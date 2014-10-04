var app = app || {};

$(document).ready(function() {
	try{
		$.get("/api/user", function( data ){
			if( data.length == 1 ){
				app.user = eval( data[0] );
			} 
		});
	}
	catch(e){
		console.log( e.message );
	}
});
