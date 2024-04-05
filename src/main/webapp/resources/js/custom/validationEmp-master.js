/**
 * 
 */

var t ;
    $( document ).on(
        'DOMMouseScroll mousewheel scroll',
        '.container-fluid', 
        function(){
        	window.clearTimeout( t );
            t = window.setTimeout( function(){            
                $('.datepicker_scroll').datepicker('place')
            }, 10 );
        }
    );




function validationBasic() {
	var dateOfBirth=$("#dateOfBirth").val();
	return dateOfBirth(dateOfBirth);
	return validPan();
}

function validPan() {
	var panNo=$('#panNumber').val();
	$('span.error-keyup-3').remove();
    var inputVal = $(panNo).val();
    console.log("inputVal : "+inputVal);
    var characterReg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if(!characterReg.test(inputVal)) {
        $(panNo).after('<span class="error error-keyup-3">Pan Number is not Valid.</span>').focus();
        return false;
    }
}

function dateOfBirth(dateOfBirth) {
	var age = 18;
	var today = new Date(day.toString());
    var day = today.getDate();
    var month = today.getMonth()+1; //January is 0!
    var year = today.getFullYear();
	var setDate = new Date(year + age, month - 1, day);
	var currdate = new Date();
	if (currdate >= setDate) {
	  // you are above 18
	   alert("above 18");
	} else {
		 alert("under 18");
		$("#dateOfBirth").focus();
		 return false;
	}
}




