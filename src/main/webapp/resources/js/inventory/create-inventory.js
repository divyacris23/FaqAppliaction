$(document).ready(function() {

	$("#siteclass").select2({
		closeOnSelect: false,
		placeholder: "Please select an skill",
		allowHtml: true,
		allowClear: true,
		tags: true // создает новые опции на лету
	});

	$("#successUpload").click(function(event) {
		location.reload();
	});

	$('#myTable').on('click', '.add-row-btn', function() {
		addRowInTable($(this));
	});

	$('#myForm').bootstrapValidator({

		fields: {

			locationname: {
				selector: '.location',
				group: 'td',
				validators: {
					notEmpty: {
						message: 'Please select location'
					}
				}
			},

			sizename: {
				group: 'td',
				validators: {

					notEmpty: {
						message: 'Please Provide size'
					},
					numeric: {
						message: 'Please enter a numeric value'
					}

				}
			},

			screencountname: {
				group: 'td',
				validators: {
					notEmpty: {
						message: 'Please select screencount'
					},
					numeric: {
						message: 'Please enter a valid numeric value'
					},
					stringLength: {
						min: 1,
						max: 5,
						message: 'Size must be between 1 and 5 characters'
					}
				}
			},
			Sitename: {
				group: 'td',
				selector: '.Site',
				validators: {

					notEmpty: {
						message: 'Please select Site'
					}
				}
			},
			descriptionname: {

				group: 'td',
				validators: {
					notEmpty: {
						message: 'Please select description'
					},
					stringLength: {
						min: 1,
						max: 50,
						message: 'Size must be between 1 and 50 characters'
					}
				}
			},

			inventoryname1: {
				group: '.col-md-12',
				validators: {

					notEmpty: {
						message: 'Please select inventoryname'
					},
					stringLength: {
						min: 1,
						max: 20,
						message: 'Size must be between 1 and 20 characters'
					}
				}
			},

		}
	}).on('click', '#submitinventoryid', function(e) {
		var validator = $('#myForm').data('bootstrapValidator');
		validator.validate();
		console.log("var submit is " + validator.isValid());
		console.log("var button is " + this);
		if (validator.isValid()) {
			console.log("before save called")
			saveInventory();
		}
	});

});

/* function addRowInTable($addRow) {
	    var $tr=$addRow.closest('tr').clone();
		$tr.insertAfter($addRow.closest('tr'))
	        .find('input,select').each(function(){
	            $(this).removeAttr('disabled');
                $(this).val(null);
	    });
	    renameTableRowElements($addRow.closest('tbody'));
		console.log('tr',$tr);
		console.log('tr select2',$tr.find('.select2.select2-container'));
	    $tr.find('.select2.select2-container').remove();
	    $tr.find('.select2').select2().select2("destroy").select2();
	    $addRow.closest('tbody').find('tr').removeClass('table-success')
	    $tr.addClass('table-success');
	      setTimeout(function() {
	          $tr.removeClass('table-success');
	    }, 2000);
	} */

function addRowInTable($addRow) {
	var $tr = $addRow.closest('tr').clone();
	$tr.insertAfter($addRow.closest('tr'))
		.find('input,select,select2').each(function() {
			$(this).removeAttr('disabled');
			$(this).val(null);
		});
	$tr.find('.was-validated').removeClass('was-validated'); // Remove validation class

	renameTableRowElements($addRow.closest('tbody'));

	// Reapply event handlers and validations

	addFieldsInValidatorTimeSlot($tr);

	$tr.find('.select2.select2-container').remove();
	$tr.find('.select2').select2().select2("destroy").select2();
	$addRow.closest('tbody').find('tr').removeClass('table-success');
	$tr.addClass('table-success');

	setTimeout(function() {
		$tr.removeClass('table-success');
	}, 2000);

}

function renameTableRowElements($tbody) {
	$tbody.find('tr').each(function(i, val) {
		$(this).attr('id', $(this).attr('id').replace(/\d+/, i));
		$(this).find("input,select").each(function(n, val) {
			if ($(this).attr('id') != null) {
				$(this).attr('id', $(this).attr('id').replace(/\d+/, i));
				if ($(this).hasClass('select2')) {
					$(this).attr('id', $(this).attr('id').replace(/\d+/, i));
					$(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, "[" + i + "]"));
				}
			}
		});

	});
}

//Event delegation for minus buttons
document.getElementById('myTable').addEventListener('click', function(e) {

	if (e.target && e.target.classList.contains('minus')) {
		console.log("etarget" + e.target);
		removeRow(e.target);
	}
});
// Function to remove a row
// Function to remove a row
function removeRow(button) {
	console.log("inside remove");

	var rows = document.querySelectorAll('#myTable tbody tr');
	console.log("inside rows" + rows.length);
	if (rows.length > 1) {

		console.log("inside if2");
		// removeFieldsfromValidatorTimeSlot($remBtn.closest('.scheduleSlotRow'));
		// removeFieldsfromValidatorTimeSlot(button.closest('tr'));
		button.closest('tr').remove();
		// renameTableRowElements(button);
	}
}

$("#successUpload").click(function(event) {
	location.reload();
});

function getContextPath() {
	return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}
// Add event listeners to trigger filtering when inputs change
$(document).ready(function() {
	$("#prgsModal").modal('hide');
});

function saveInventory() {
	console.log("save inv called");

	var auctionFlag = 1;
	var inventoryName = document.getElementById('inventoryname');
	var auctionFlagtest = document.getElementById('auctionFlag').checked;
	if (auctionFlagtest === true) {
		auctionFlag = 1;
	} else {
		auctionFlag = 0;
	}
	console.log("auctionFlag>>>", auctionFlag);
	var element4 = inventoryName.value;
	var data = {
		"inventoryName": element4,
		"userId": null,
		"auctionRequired": auctionFlag,
		"locationDataList": [] // This will be an array of SubmitInventoryBean objects
	};
	$('#myTable tbody tr').each(function(index, row) {
		var location = $(row).find('#locationid').val();
		console.log("location>>" + location);

		var site = $(row).find('.select2.select2-container .select2-selection--multiple .select2-selection__choice').map(function() {
			return $(this).attr('title').trim().replace(/\n/g, ''); // Remove leading/trailing spaces and replace '\n'
		}).get();

		var siteId = $(row).find('.siteclass').val()
		console.log("sitevalues" + siteId);

		var siteString = site.join(',');
		console.log("sitecode>>" + siteString);

		var siteString1 = siteId.join(',');
		console.log("siteString1>>" + siteString1);

		var size = $(row).find('#sizeid').val();
		console.log("size>>" + size);
		// var orientation = $(row).find('#Orientationid').val();
		var noOfScreens = $(row).find('#screencount').val();
		console.log("noOfScreens>>" + noOfScreens);
		var description = $(row).find('#description').val();

		/*  data.push({
		     "description": description,
		     "locCode": location,
		     "siteCode": site,
		     "size": size,
		     "noOfScreen": noOfScreens
		 }); */

		var item = {
			"description": description,
			"locCode": location,
			"siteCode": siteString1,
			"screenSize": size,
			"noOfScreen": noOfScreens
		};

		data.locationDataList.push(item);

	});

	console.log("data>> " + JSON.stringify(data));

	$.ajax({
		url: getContextPath() + "/submitInventory",
		type: "POST",
		data: JSON.stringify(data),
		contentType: "application/json",
		dataType: "json",
		success: function(response) {
			console.log("resp code", response.respCode);
			if (response.hasOwnProperty('responseString')) {

				bootbox.alert({
					message: '<span style="font-size:large;color:red">' + response.responseString + ' </span>',
					callback: function() {
						location.reload();
					}
				});

			} else {
				console.log("resp", response.inventoryId)
				bootbox.alert({
					message: '<span style="font-size:large;color:green">Inventory is saved with ID: ' + response.inventoryId + ' </span>',
					callback: function() {
						location.reload();

					}
				});
			}

		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		},
		error: function() {
			console.log('in error');

			bootbox.alert({
				message: '<span style="font-size:large;color:red">Unable to create inventory!!! Please try after sometime </span>',
				callback: function() {
					location.reload();

				}
			});
		}
	});

	console.log("calling getDetails");

}

function addFieldsInValidatorTimeSlot($row) {
	console.log("add row bootstrap validator called");
	$("#myForm").bootstrapValidator('addField', $row.find(".size"));
	$("#myForm").bootstrapValidator('addField', $row.find(".location"));
	$("#myForm").bootstrapValidator('addField', $row.find(".screencount"));
	$("#myForm").bootstrapValidator('addField', $row.find(".Site"));
	$("#myForm").bootstrapValidator('addField', $row.find(".description"));

}

/** 
 * function to remove fields from validator when a row is removed 
 * @param $row sizename locationname screencountname Sitename descriptionname inventoryname1
 * @returns
 */
function removeFieldsfromValidatorTimeSlot($row) {
	console.log("add row bootstrap validator called");
	$("#myForm").bootstrapValidator('removeField', $row.find(".size"));
	$("#myForm").bootstrapValidator('removeField', $row.find(".location"));
	$("#myForm").bootstrapValidator('removeField', $row.find(".screencount"));
	$("#myForm").bootstrapValidator('removeField', $row.find(".Site"));
	$("#myForm").bootstrapValidator('removeField', $row.find(".description"));
}