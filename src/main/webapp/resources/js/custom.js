/**
 * 
 */

var specialKeys = new Array();
specialKeys.push(8); // Backspace
function IsNumeric(e) {
    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
    return ret;
}

function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}

setTimeout(function() {
    $('.alert-success, .alert-danger').fadeOut('slow');
}, 10000);


/*******************************************************************************
 * auto input character case(Upper,Lower,Normal) selection case from properties
 * file according to key.
 ******************************************************************************/
function caseConversionForId(columnName) {
	columnName = columnName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
	    return letter.toUpperCase();
	});
}

function inputValueCaseChange(obj) {
	//console.log("inside custom.js");
    var id=$(obj).attr('id');
    var optionVal=$("#"+id+"-opt").val();
// console.log("optionVal : "+optionVal);
    if(optionVal=="U") {
        $("#"+id).val($("#"+id).val().toUpperCase());
    } else  if(optionVal=="L") {
        $("#"+id).val($("#"+id).val().toLowerCase());
    }
    else {
        $("#"+id).val($("#"+id).val());
    }
}

function inputValueCaseChangeV2(optionVal, value) {
	if (optionVal == "U") {
		return value.toUpperCase();
	} else if (optionVal == "L") {
		return value.toLowerCase();
	} else {
		return value;
	}
}

// end...

/**
 * Format a date like YYYY-MM-DD.
 * 
 * @param {string}
 *            template
 * @param {Date=}
 *            [date]
 * @return {string}
 * @author Bhagvan Singh Jadoun begin....
 */
function formatDate(date) {
	var dateParts = date.split("/");
	return dateParts[2]+"-"+dateParts[1] - 1+"-"+ dateParts[0];
}

function formatDate(template, date) {
    var date1 = new Date(date);
	/*
	 * var dateParts = dateString.split("/"); var dateObject = new
	 * Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
	 */
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
        return template.split(specs[i]).join(item);
    }, template);
}

/*******************************************************************************
 * for keyup only allow number only
 * 
 * @param evt
 * @returns {boolean}
 */
function isNumberKey(evt)
{
	/*
	 * console.log("evt.charAt(0) : "+evt.charAt(0)); var charCode = (evt.which) ?
	 * evt.which : event.keyCode; var charCode = (evt.which) ? evt.which :
	 * event.keyCode; if (!(charCode > 31 && (charCode < 48 || charCode > 57)) ) {
	 * console.log("if.... : "+evt.charAt(0)); if (!(evt.charAt(0)=="9" &&
	 * evt.charAt(0)=="8" && evt.charAt(0)=="7") ) { return false; } else {
	 * return true; } return true; } return false;
	 */
	/*
	 * var charCode = (evt.which) ? evt.which : event.keyCode; if (charCode > 31 &&
	 * (charCode < 48 || charCode > 57)) return false; return true;
	 */
	
	var e = evt || window.event; // window.event is safer, thanks
	// @ThiefMaster
	var charCode = e.which || e.keyCode;

	if (charCode > 31 && (charCode < 47 || charCode > 57) && (charCode != 46))
		return false;
	if (e.shiftKey)
		return false;
	if (charCode == 47)
		return false;
	return true;
}

/*******************************************************************************
 * for keyup only allow character only
 * 
 * @param evt
 * @returns {boolean}
 */
$(document).on("keypress", ".txtOnly", function(e) {
// $( ".txtOnly" ).keypress(function(e) {
    var key = e.keyCode;
// if ((!(key >= 97 && key <= 122)) || key == 190) {
    	 if (!((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || key == 32 || key == 46)) {
        e.preventDefault();
    }
});

$(document).on("keypress", ".txtNumOnly", function(e) {
// $( ".txtNumOnly" ).keypress(function(e) {
    var key = e.keyCode;
// if ((!(key >= 97 && key <= 122)) || key == 190) {
    	 if (!((48 <= key && key <= 57) || ( key >= 65 && key <=90) || ( key >= 97 && key <=122) || key == 32)) {
        e.preventDefault();
    }
});

/**
 * Function to replace < & > signs by html supported tags 
 * @param e
 * @returns
 */
$(document).on("change", "textarea, input[type=text]", function(e) {
		$(this).val($(this).val().replace("<", "&lt;").replace(">", "&gt;"));
	});

/**
 * date validation
 */
function isDate()
{
	
    var currVal = $("#dateOfBirth").val();
    if(currVal == '') {
    	return false;
    }
    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; // Declare
																	// Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    console.log(dtArray);
    console.log(currVal);
    if (dtArray == null) {
    	return false;
    }
        
    // Checks for mm/dd/yyyy format.
    dtMonth = dtArray[3];
    dtDay= dtArray[1];
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) {
    	return false;
    }
        
    else if (dtDay < 1 || dtDay> 31) {
    	return false;
    }
        
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) {
    	 return false;
    }
       
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}


function isValidDate(date)
{
    var matches = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.exec(date);
    if (matches == null) {
      var matches = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/.exec(date);
      if (matches == null) {
        return false;
      }
    }
    var d = matches[2];
    var m = matches[1] - 1;
    var y = matches[3];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() == d &&
            composedDate.getMonth() == m &&
            composedDate.getFullYear() == y;
}

function validateEmailAddress(email) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return filter.test(email);
}

function isValidNumberValue(evt) {
	var e = evt || window.event; // window.event is safer, thanks
	// @ThiefMaster
	var charCode = e.which || e.keyCode;

	if (charCode > 31 && (charCode < 47 || charCode > 57) && (charCode != 46))
		return false;
	if (e.shiftKey)
		return false;
	if (charCode == 47)
		return false;
	return true;
}

function isValidStringValueOnly(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	var regex = /^[a-zA-Z0-9-\b\t ]*$/; // @Bhagvan
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault)
			theEvent.preventDefault();
	}
}
function isValidAlphaNumericValueOnly(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	var regex = /^[a-zA-Z0-9\b\t]*$/; // @Bhagvan
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault)
			theEvent.preventDefault();
	}
}

function validateName(name) {
	var filter = /^[a-zA-Z][a-zA-Z0-9-\b ]*$/; // @Bhagvan
	return filter.test(name);
}

function validateNumberOnly(mobile) {
	var filter = /^[0-9\.\,]*$/; // @Bhagvan
	return filter.test(mobile);
}

/*
 * created by Bhagvan Singh on 22-11-2018 For focus on validated text field
 * start
 */
function focusForValidation(id) {
	$("#" + id).css("border", "1px solid red");
	$("#" + id).click(function() {
		$(this).css("border", "1px solid #cccccc");
	});
}

/* end */
var timeOut;
var showPreExpiredMsg;
var sessionTimeOut;
$(document).ready(function(){
	if($("#loginForm").length){
		$('#loginForm').bootstrapValidator({
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	        	username: {
	                validators: {
	                    notEmpty: {
	                        message: 'The username is required'
	                    }
	                }
	            },
	            emailAddress: {
	            	validators: {
	            		callback: {
	            			message: 'Invalid Email ID',
	            			callback: function(value, validator, $field) {
	            				if($('#username').val()=='----') {
	            					return false;
	            				}
	            				else return true;
	            			}
	            		}
	            	}
	            },
	            password: {
	                validators: {
	                    notEmpty: {
	                        message: 'The password is required'
	                    }
	                }
	            }
	        }
	    });
	}
	
	if($("#otp_form").length){
		$('#otp_form').bootstrapValidator({
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	        	otp: {
	                validators: {
	                    notEmpty: {
	                        message: 'OTP is required'
	                    },
	                    regexp: {
	                        regexp: /^[0-9]{6}$/i,
                        	message: "OTP should have 6 digits."
                        }
	                }
	            }
	        }
	    });
	}
	
	if($('.switch-role-a').length>0){
		$('.switch-role-a').click(function(event){
			event.preventDefault();
			$('#switchRoleForm').attr('action', $(this).attr('href'));
			$('#switchRoleForm')[0].submit();
		});
	}
	
	
	
});

var timeOut;
var showPreExpiredMsg;
var sessionTimeOut;
$(document).ready(function(){
	timeOut = $('meta[name=_timeout]').attr("content");
	if (!(typeof timeOut === "undefined") && timeOut != null && timeOut != "" && !Number.isNaN(timeOut)) {
		console.log(timeOut);
		showPreExpiredMsg = window.setTimeout(function() {
			console.log("Your session will be expired in next "+ (timeOut*20/100) +" seconds.");
			$('#exampleModal-danger-header .modal-dialog .modal-content .modal-body p').html("Your session will be expired in next <span id='timerCountdown'>"+ (timeOut*20/100) +"</span> seconds.");
			var timeleft=(timeOut*20/100);
			var downloadTimer = setInterval(function(){
		    timeleft--;
		    document.getElementById("timerCountdown").textContent = timeleft;
		    if(timeleft <= 0)
		        clearInterval(downloadTimer);
		    },1000);
			$('#exampleModal-danger-header').modal('show');
		},((timeOut-(timeOut*20/100))* 1000));
		sessionTimeOut = window.setTimeout(function() {
			$('#exampleModal-danger-header').modal('hide');
		 	location.reload();
		},((timeOut+5)* 1000));
		$("#continue-session").click(function() {
			$.ajax({
				type: "GET",
				dataType: 'json',
				url: getContextPath() + "/ajax/validate-session",
				success: function (json) {
					console.log(json);
					if (json.status == 'ok') {
						window.clearTimeout(showPreExpiredMsg);
						window.clearTimeout(sessionTimeOut);
						showPreExpiredMsg = window.setTimeout(function() {
							// console.log("Your session will be expired in next
							// "+ (timeOut*20/100) +" seconds.");
							$('#exampleModal-danger-header .modal-dialog .modal-content .modal-body p').html("Your session will be expired in next <span id='timerCountdown'>"+ (timeOut*20/100) +"</span> seconds.");
							var timeleft=(timeOut*20/100);
							var downloadTimer = setInterval(function(){
						    timeleft--;
						    document.getElementById("timerCountdown").textContent = timeleft;
						    if(timeleft <= 0)
						        clearInterval(downloadTimer);
						    },1000);
							$('#exampleModal-danger-header').modal('show');
						},((timeOut-(timeOut*20/100))* 1000));
						sessionTimeOut = window.setTimeout(function() {
							$('#exampleModal-danger-header').modal('hide');
							// console.log("Your session is expired.");
					     	location.reload();
						},((timeOut+5)* 1000));
					}
					$('#exampleModal-danger-header').modal('toggle');
				}, error: function(xhr, ajaxOptions, thrownError) {
					console.log("Something went wrong.")
				}
			});
		});
	}
	
	if($("#login").length){
		$('#login').bootstrapValidator({
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	        	username: {
	                validators: {
	                    notEmpty: {
	                        message: 'The username is required'
	                    }
	                }
	            },
	            password: {
	                validators: {
	                    notEmpty: {
	                        message: 'The password is required'
	                    }
	                }
	            }
	        }
	    });
	}
	
	if($("#otp_form").length){
		$('#otp_form').bootstrapValidator({
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	        	otp: {
	                validators: {
	                    notEmpty: {
	                        message: 'OTP is required'
	                    },
	                    regexp: {
	                        regexp: /^[0-9]{6}$/i,
                        	message: "OTP should have 6 digits."
                        }
	                }
	            }
	        }
	    });
	}
});
$( document ).ajaxSend(function() {
	  // console.log( "Triggered ajaxSend handler." );
	  window.clearTimeout(showPreExpiredMsg);
	  window.clearTimeout(sessionTimeOut);
});


	



// toggle password visibility
$('.eye').on('click', function() {
	
  $($(this).children()).toggleClass('fa-eye-slash').toggleClass('fa-eye');
  var x = $(this).siblings('.password');
  if (x.attr('type') == "password") {
	  x.attr('type','text');
  } else {
	  x.attr('type','password');
   // x.type = "password";
  }
  
});



function startLoader() {
	$('body').loading('start');
}
function stopLoader() {
	$(':loading').loading('stop');
}

/*
 * if ( $(".select2").length ) { $('.select2').each(function (i, obj) {
 * console.log(i, obj); if (!$(obj).data('select2')) { $(obj).select2({ width:
 * 'resolve', }); } }); $(".select2").select2({ width: 'resolve', }); }
 */

if ( $("select").length ) {
	$('select').each(function (i, obj) {
	    if (!$(obj).data('select2') && $(obj).hasClass("select2"))
	    {
	        $(obj).select2({ width: 'resolve',  });
	    }
	});
}


if ($("#loginForm").length) {
	/*$("#loginForm #username").on("keyup", function(){
		$(this).val(inputValueCaseChangeV2("U", $(this).val()));
	});
	$("#loginForm #username").on("blur", function(){
		$(this).val(inputValueCaseChangeV2("U", $(this).val()));
	});*/
	
	$("#loginForm #password").keypress(function(e) {
		var character = e.keyCode ? e.keyCode : e.which;
		var sftKey = e.shiftKey ? e.shiftKey : ((character == 16) ? true : false);
		
		// Is caps lock on?
	    isCapsLock = (((character >= 65 && character <= 90) && !sftKey) || ((character >= 97 && character <= 122) && sftKey));
		
	 	// Display warning and set css
	    if (isCapsLock == true) {
	    	$("#loginForm .msg").css("display", "block");
	    } else {
	    	$("#loginForm .msg").css("display", "none");
	    }
	});
}


var offset = 0 ;
var limit = 50 ;
var flag = true ;



var waitingDialog = waitingDialog || (function ($) {
    'use strict';

	// Creating modal dialog's DOM
	var $dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m">' +
		'<div class="modal-content">' +
			'<div class="modal-header"><h5 style="margin:0;"></h5></div>' +
			'<div class="modal-body">' +
				'<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%"></div></div>' +
			'</div>' +
		'</div></div></div>');

	return {
		/**
		 * Opens our dialog
		 * 
		 * @param message
		 *            Custom message
		 * @param options
		 *            Custom options: options.dialogSize - bootstrap postfix for
		 *            dialog size, e.g. "sm", "m"; options.progressType -
		 *            bootstrap postfix for progress bar type, e.g. "success",
		 *            "warning".
		 */
		show: function (message, options) {
			// Assigning defaults
			if (typeof options === 'undefined') {
				options = {};
			}
			if (typeof message === 'undefined') {
				message = 'Loading';
			}
			var settings = $.extend({
				dialogSize: 'm',
				progressType: '',
				onHide: null // This callback runs after the dialog was
								// hidden
			}, options);

			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
			/* $dialog.find('.progress-bar').attr('class', 'progress-bar');
			if (settings.progressType) {
				$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
			} */
			$dialog.find('h5').text(message);
			// Adding callbacks
			if (typeof settings.onHide === 'function') {
				$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
					settings.onHide.call($dialog);
				});
			}
			// Opening dialog
			$dialog.modal();
		},
		/**
		 * Closes dialog
		 */
		hide: function () {
			$dialog.modal('hide');
		}
	};

})(jQuery);


function convertDateFmt(inptdate)
{
	if(inptdate=='')
		return inptdate;
	var datepart=inptdate.split("T")[0];
	var timepart=inptdate.split("T")[1];
	var datarr=datepart.split("-");
	var dat=datarr[1]+"/"+datarr[2]+"/"+datarr[0];
	if(timepart.length==5)
		timepart+=":00";

	return dat+" "+timepart;
}

function getDivisionForZone(zone, $railwayUnit) {
	/*$railwayUnit.find('option').not(':first').remove();*/
	$railwayUnit.find('option').remove();
	$.ajax({
		url : getContextPath()+"/get-railway-unit-for-zone",
		type : "POST",
		dataType : "json",
		data : { zone: zone },
		success : function(result) {
			if(result!=null && result.length>0) {
				$.each(result, function(i, data) {
					$railwayUnit.append('<option value="'+data.DIVISION_CODE+'">'+data.DIVISION_CODE+'</option>');
				});
			}
			
		}, beforeSend: function (xhr){
	        xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
	    }, error: function (xhr, ajaxOptions, thrownError) {
	    	$('<div class="alert alert-danger show" role="alert">Some error occurred: '+thrownError+'</div>').insertAfter('#divDataTable');
	    	setTimeout(function() {
		   		$(".alert-danger").alert('close');
		   	}, 20000);
		}
	});
}

	function successToast(msg) {
	      cuteToast({
	      type: "success",
	      message: msg,
	      timer: 5000
	    })
	}
	function failedToast(msg) {
	      cuteToast({
	      type: "error",
	      message: msg,
	      timer: 8000
	    })
	}

	function warningToast(msg)
	{
	      cuteToast({
	      type: "warning",
	      message: msg,
	      timer: 8000
	    })
	}