var app = app || {};

$(document).ready(function() {
	try{
		$.get("/api/user", function( data ){
			if( data.length == 1 ){
				app.user = eval( data[0] );
			}
			// Add user name to page
			$("#userFIO").append( app.user.fio );
		});
	}
	catch(e){
		console.log( e.message );
	}
});
