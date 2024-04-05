var selectedOptions = [];
var selectedInv = [];

function deleteRow(button, inventoryId) {
	var row = button.parentNode.parentNode;
	var tableBody = row.parentNode;

	// Check if there's only one row left
	if (tableBody.rows.length > 1) {
		row.parentNode.removeChild(row);

		// Remove the inventoryId from the selectedInv array
		var index = selectedInv.indexOf(inventoryId);
		if (index > -1) {
			selectedInv.splice(index, 1);
		}
	} else {
		alert('At least one row must remain in the table.');
	}
}

function validateEndDate() {
	const startDate = new Date(document.getElementById('startDate').value);
	const endDate = new Date(document.getElementById('endDate').value);

	// Disable the "END DATE" input if it's earlier than the "START DATE"
	if (endDate < startDate) {
		alert('End date cannot be before the start date!');
		document.getElementById('endDate').value = ''; // Clear the invalid date
	}
}

function validateStartDate() {
	var today = new Date();
	var selectedDate = new Date(document.getElementById('startDate').value);

	if (selectedDate < today) {
		alert("Please select a start date from tomorrow onwards.");
		document.getElementById('startDate').value = "";
	} else {
		document.getElementById('endDate').removeAttribute('disabled');
	}
}

function validateEndDate() {
	var startDate = new Date(document.getElementById('startDate').value);
	var endDate = new Date(document.getElementById('endDate').value);

	if (endDate < startDate) {
		alert("End date cannot be before the start date!");
		document.getElementById('endDate').value = "";
	}
}

var addbtncountfirst = 1; //btnSubmit

function validateInputs(container) {
	var inputs = container.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].value.trim() === '') {
			alert('Please fill all inputs in the new row before adding more slots.');
			return false;
		}
	}
	return true;
}

document.addEventListener("DOMContentLoaded", function() {
	var tableContainer = document.querySelector('.table-container');
	var tableHead = document.getElementById('myTablehead');
	tableContainer.addEventListener('scroll', function() {
		var translate = 'translate(0,' + this.scrollTop + 'px)';
		tableHead.style.transform = translate;
	});
});

function storeSelectedValues() {
	var selectedValues = [];
	var selectElement = document.getElementById('siteclass');
	for (var i = 0; i < selectElement.options.length; i++) {
		if (selectElement.options[i].selected) {
			selectedValues.push(selectElement.options[i].value);
		}
	}
	return selectedValues;
	// You can now use 'selectedValuesString' in your JavaScript code
}

function getContextPath() {
	return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}

function saveslot() {

	console.log('inside save');

	var startendtime = collectTimeSlotData()
	console.log('collectTimeSlotData()>>>', startendtime);
	/*  var startendtime = storeFormData();
	  console.log('startendtime>>>', startendtime); */

	var siteId = document.getElementById('siteclass');
	var siteeeeee = siteId.value;
	console.log("sitevalues" + siteeeeee);

	var selectElementratio = document.getElementById('ratioid');
	var ratioidvalue = selectElementratio.value;
	console.log('ratioidvalue>>>', ratioidvalue);

	var startDate = document.getElementById('startDate');
	var startDateValue = startDate.value;
	console.log("startDateValue :" + startDateValue + "T10:00:00.000");

	var endDate = document.getElementById('endDate');
	var endDateValue = endDate.value;
	console.log("endDateValue :" + endDateValue + "T10:00:00.000");
	//alert("saved");

	const radioButtons = document.querySelectorAll('input[name="inlineRadioOptions"]');
	// Initialize a variable to store the selected value
	let selectedValue;
	radioButtons.forEach(function(radioButton) {
		if (radioButton.checked) {
			selectedValue = radioButton.value;
		}
	});
	console.log("radio>>>>" + selectedValue);

	var selectedInventories1 = storeSelectedValues() //working  var siteId=$(row).find('.siteclass').val()
	//  console.log("selectedInventories1>>>>"+selectedInventories1.length);
	console.log("selectedInventories12", selectedInventories1);

	var selectedOptions = $('.js-select2').val(); // Get selected values

	// Do something with the selected values, for example:
	var selectedValuesString = selectedOptions.join(','); // Convert to comma-separated string

	// Now you have the selected values in the variable 'selectedValuesString'
	console.log("selectedOptionsjson>>>>>>", JSON.stringify({
		selectedOptions
	}));
	console.log("selectedOptions>>>>>>", selectedOptions);
	console.log("selectedValuesString>>>>>>", selectedValuesString);

	var selectedinventories = selectedInv;
	console.log('selectedinventories>>>', selectedinventories);

	var jsonPartnerList = JSON.stringify({
		selectedinventories
	});

	var auctionname = document.getElementById('auctionname');
	var auctionnameValue = auctionname.value;
	console.log("auctionname :" + auctionnameValue);

	$.ajax({
		url: getContextPath() + "/submitAuction",
		type: "POST",
		dataType: "json",

		data: {
			sharingFlag: selectedValue, //toggle
			sharingRatio: ratioidvalue, //toggleRatio
			contractStartDate: startDateValue, //startDate
			contractEndDate: endDateValue, //endDate
			inventoryId: JSON.stringify({
				selectedOptions
			}), //storeSelectedDevices
			startEndTimeList: startendtime, //auctionName
			auctionName: auctionnameValue
		},

		success: function(response) {

			bootbox.alert({
				message: '<span style="font-size:large;color:green">Auction is saved with ID: ' + response.auctionId + ' </span>',
				callback: function() {
					location.reload();

				}
			});

		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		},
		error: function(response) {
			console.log("inside error" + response);

			bootbox.alert({
				message: '<span style="font-size:large;color:red">Unable to create auction !! Please try after sometime</span>',
				callback: function() {
					location.reload();

				}
			});
		}
	});

}

$('#scheduleSlotDiv').on('click', '.add-row', function() {
	addTimeSlotDiv($(this));
}).on('click', '.remove-row', function() {
	removeTimeSlotDiv($(this));
});

function addTimeSlotDiv($addBtn) {
	var prNum = $('.scheduleSlotDiv .scheduleSlotRow').length;
	var $row = $('#scheduleSlotRow0').clone();
	$row.insertAfter($addBtn.closest('.scheduleSlotRow'))
		.find('input,select').each(function() {
			$(this).removeAttr('disabled');
			$(this).val(null);
		});
	addFieldsInValidatorTimeSlot($row);
	renameTimeSlotDivs()
}

function renameTimeSlotDivs() {
	$('.scheduleSlotRow').each(function(i, div) {
		$(this).attr('id', 'scheduleSlotRow' + i)
		$(this).find('input,select,textarea').each(function() {
			$(this).attr('id', $(this).attr('id').replace(/\d+/, i));
			$(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, "[" + i + "]"));
		});
	});

}

function removeTimeSlotDiv($remBtn) {
	var rowLen = $('.scheduleSlotRow').length;
	if (rowLen > 1) {
		removeFieldsfromValidatorTimeSlot($remBtn.closest('.scheduleSlotRow'));
		$remBtn.closest('.scheduleSlotRow').remove();
		renameTimeSlotDivs();
	}
}

function collectTimeSlotData() {
	var timeSlotData = [];
	var slots = [];

	$('.scheduleSlotRow').each(function() {
		var startTime = $(this).find('.startTimeSlot').val();
		var endTime = $(this).find('.endTimeSlot').val();

		if (startTime && endTime) {
			timeSlotData.push({
				"startTime": startTime,
				"endTime": endTime
			});
		}
	});

	var jsonFormData = {
		"startEndTimeList": timeSlotData
	};

	var jsonString = JSON.stringify(jsonFormData);

	return jsonString;
}

$(document).ready(function() {
	$(".js-select2").select2({
		closeOnSelect: false,
		placeholder: "Select Inventories",
		allowHtml: true,
		allowClear: true,

		tags: true // создает новые опции на лету
	});
	const format = 'hh:mm';
	$("#closeButton").click(function() {
		$("#hidecard").hide();
	});
	const formatforDate = "YYYY-MM-DD";
	$('#myForm').bootstrapValidator({

		fields: {
			startDate: {
				validators: {
					callback: {
						message: 'Start Date   is required',
						callback: function(value, validator, $field) {
							console.log("Start Date  inside: " + value); // Log the value

							if (!value) {
								console.log('Start Date is empty');
								return {
									valid: false,
									message: 'Start Date should be not empty'
								};
							}
							var selectedDate = moment(value, formatforDate);
							console.log('Start Date  selectedDate' + selectedDate);
							const currentDateTime = moment();
							console.log('Start Date  currentDateTime' + currentDateTime);

							if (currentDateTime.isSame(selectedDate, 'day') || selectedDate > currentDateTime) {
								console.log('Same day');
								document.getElementById('endDate').removeAttribute('disabled');

								return true;
							} else {
								console.log('not current day ');
								$('#endDate').val('');

								$('#endDate').prop('disabled', true);

								return {
									valid: false,
									message: 'Start Date cannot be previous date'
								};
							}
						}
					}
				}
			},
			endDate: {
				validators: {
					callback: {
						message: 'End Date gibberish',
						callback: function(value, validator, $field) {
							console.log("endDateField Name: ", $field.attr('name'));

							if (value) {
								if (moment(value).isSameOrAfter($('#startDate').val())) {
									return true;
								} else {
									return {
										valid: false,
										message: 'End Date should be greater than Start Date'
									};
								}
							} else {
								return {
									valid: false,
									message: 'Select End Date'
								};
							}
						}
					}
				}
			},

			auctionname: {
				group: '.col-md-4',
				validators: {
					notEmpty: {
						message: 'Please Provide Name'

					}
				}
			},
			/*  startTime: {
			            validators: {
			              notEmpty: {
			                message: 'Please select start Time'
			              }
			            }
			          },
			          endTime: {
				            validators: {
				              notEmpty: {
				                message: 'Please select End Time'
				              }
				            }
				          }, */
			inlineRadioOptions: {
				group: '.col-md-4',
				validators: {
					notEmpty: {
						message: 'Please select option'
					}
				}
			},
			selectratio: {
				group: '.col-md-4',
				validators: {
					notEmpty: {
						message: 'Please Select Ratio'
					}
				}
			},

			siteclass: {
				group: '.col-md-4',
				validators: {
					notEmpty: {
						message: 'Please Select Inventory'
					}
				}
			},

			startTimeSlot: {
				group: '.col-md-4',
				selector: '.startTimeSlot',
				validators: {
					notEmpty: {
						message: "Select Start Time"
					},
					callback: {
						message: 'Time not in Auctioned1 slot',
						callback: function(value, validator, $field) {
							var isValid = true;

							var selTime = moment(value, format);

							/* $('#auctionTimeTBody tr').each(function(i, timeRow) { 
							                        		 var slotStart=moment($(timeRow).find('.slotStartTime').val(), format);
							                        		var slotEnd=moment($(timeRow).find('.slotEndTime').val(), format); 
							                        		//isValid=selTime.isBetween(slotStart, slotEnd, null, '[]');
							                    			console.log("inside loop"+ isValid);
							                    			isvalid=true;
							                        		if (isValid)return false;
							                    		}); */
							console.log("test bef if" + isValid);
							if (isValid) {
								var rNum = $field.attr('id').match(/\d+/) - 1;
								console.log("check2" + rNum);
								if (rNum >= 0) {
									var prevEnd = moment($('#endTime' + rNum).val(), format);
									console.log("get prev end" + prevEnd);
									if (!selTime.isSameOrAfter(prevEnd)) {
										return {
											valid: false,
											message: 'Start Time should be greater than previous end time'
										};
									}
								}
								return true;
							};
						}
					}
				}
			},

			endTimeSlot: {
				group: '.col-md-4',
				selector: '.endTimeSlot',
				validators: {
					notEmpty: {
						message: "Select End Time"
					},
					callback: {
						message: 'Time not in Auctioned slot',
						callback: function(value, validator, $field) {
							var isStartValid = true,
								isEndValid = true;
							var selEndTime = moment(value, format);
							var selStartTime = moment($field.closest('.scheduleSlotRow').find('.startTimeSlot').val(), format);

							$('#auctionTimeTBody tr').each(function(i, timeRow) {
								var slotStart = moment($(timeRow).find('.slotStartTime').val(), format);
								var slotEnd = moment($(timeRow).find('.slotEndTime').val(), format);
								/* isStartValid=selStartTime.isBetween(slotStart, slotEnd, null, '[]');
							                        		isEndValid=selEndTime.isBetween(slotStart, slotEnd, null, '[]');
							                    			 */
								if (isStartValid && isEndValid) return false;

							});
							console.log("test c");
							if (isStartValid && isEndValid) {

								if (selEndTime.isAfter(selStartTime))

									return true;
								else return {
									valid: false,
									message: 'End Time should be greater than Start Time'
								};
							}
							return {
								valid: false,
								message: 'Time not in Auctioned slot'
							};
						}
					}
				}
			}

		}
	}).on('click', '#saveslotSubmit', function(e) {
		var validator = $('#myForm').data('bootstrapValidator');
		validator.validate();
		console.log("var submit is " + validator.isValid());
		console.log("var button is " + this);
		if (validator.isValid()) {
			saveslot();
		}
	});
});

function addFieldsInValidatorTimeSlot($row) {
	$("#myForm").bootstrapValidator('addField', $row.find(".startTimeSlot"));
	$("#myForm").bootstrapValidator('addField', $row.find(".endTimeSlot"));
	console.log("end time ", $row.find(".endTimeSlot"));
	console.log("end time " + $row.find(".endTimeSlot"));

}

/** 
 * function to remove fields from validator when a row is removed 
 * @param $row
 * @returns
 */
function removeFieldsfromValidatorTimeSlot($row) {
	$("#myForm").bootstrapValidator('removeField', $row.find(".startTimeSlot"));
	$("#myForm").bootstrapValidator('removeField', $row.find(".endTimeSlot"));
} 

	$(document).ready(function() {

		$("#prgsModal").modal('hide');
		$('#myTableViewInventory ').hide();
		$("#successUpload").click(function(event) {
			location.reload();
		});

		/*     $("#myTableViewInventory").DataTable(); */
		var tableBody = document.getElementById('myTableViewInventory').getElementsByTagName('tbody')[0];

		$('.js-select2').change(function() {
			$('#inventdetgo1').text('Show Details').removeClass('btn-warning').addClass('btn-primary'); // Reset button text
			document.getElementById("hidecard").style.display = "none";

			// Add any additional logic you need here

			// Clear the selectedInv array if needed
			// selectedInv = [];
		});
		$('#inventdetgo1').click(function() {
			var button = $(this);
			var selectedOptions = $('.js-select2').val();

			if (selectedOptions && selectedOptions.length > 0) {
				if (button.text() == "Show Details") {
					document.getElementById("hidecard").style.display = "block";

					var selectedValuesString = selectedOptions.join(',');

					console.log("selectedValuesString>>>>>>" + selectedValuesString);
					tableBody.innerHTML = '';

					for (var i = 0; i < selectedOptions.length; i++) {
						var selectedValue = selectedOptions[i];

						$.ajax({
							url: getContextPath() + '/tablefinalizeInventory',
							type: 'POST',
							data: {
								inventoryId: selectedValue
							},
							dataType: 'json',
							success: function(response) {
								tableBody = document.getElementById('myTableViewInventory').getElementsByTagName('tbody')[0];

								for (var i = 0; i < response.length; i++) {
									var row = tableBody.insertRow(tableBody.rows.length);
									var cell1 = row.insertCell(0);
									var cell2 = row.insertCell(1);
									var cell3 = row.insertCell(2);
									var cell4 = row.insertCell(3);

									cell1.innerHTML = response[i].inventoryName + ' ' + '(' + response[i].inventoryId + ')';
									//cell2.innerHTML = response[i].inventoryName;
									cell2.innerHTML = response[i].locationCode + ' ' + '(' + response[i].locationName + ')';
									//cell4.innerHTML = response[i].locationName;
									cell3.innerHTML = response[i].siteCode;
									cell4.innerHTML = response[i].noOfScreen;

									selectedInv.push(response[i].inventoryId);
								}
								$('#myTableViewInventory').show();
							},
							error: function() {
								alert('Failed to fetch inventory details.');
							}
						});
					}
					button.text("Hide Details").removeClass('btn-outline-danger').addClass('btn-warning');
				} else {
					document.getElementById("hidecard").style.display = "none";
					button.text("Show Details").removeClass('btn-warning').addClass('btn-primary');
				}
			} else {
				document.getElementById("hidecard").style.display = "none";
				button.text("Show Details").removeClass('btn-warning').addClass('btn-primary');
				alert("Atleast 1 Inventory to be selected");
			}
		});
	});

function getContextPath() {
	return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}

