$(document).ready(function() {
	$('body').on('change', '#dropdownMenu2', function() {
		console.log("Selected values212");
		updateSelectedValues();
	});
	var selectedValues = [];

	function updateSelectedValues() {
		checkedLocations = [];

		$('#filtersonlycheckbox input[type="checkbox"]:checked').each(function() {
			checkedLocations.push($(this).val());
		});

		var selectedDropdownValue = $('#dropdownMenu2').val();
		console.log("seldropdown", selectedDropdownValue);
		if (selectedDropdownValue !== "luck") {
			checkedLocations.push(selectedDropdownValue);
		}

		console.log("checkedLocations.length:", checkedLocations.length);
		console.log("checkedLocations{}:", checkedLocations);
		console.log("selectedDropdownValue", selectedDropdownValue);

		if (checkedLocations.length === 1 && selectedDropdownValue === "") {
			checkedLocations = [];
			console.log("inside if dd");
			location.reload();
		} else {
			console.log("inside else dd");
			filterCards();
		}

	}
	var checkedLocations = []; // Array to store checked locations

	$('#filtersonlycheckbox input[type="checkbox"]').change(function() {
		const value = $(this).val(); // Get the value of the checked checkbox
		if ($(this).is(':checked')) {
			checkedLocations.push(value); // Add the value to the array if checked
		} else {
			const index = checkedLocations.indexOf(value);
			if (index !== -1) {
				checkedLocations.splice(index, 1); // Remove the value if unchecked
			}
		}

		console.log("checkedLocations>>", checkedLocations); // Display the array in the console (you can perform further actions with it)
		console.log("checkedLocationstype>>", checkedLocations);
		filterCards();

	});

	function filterCards() {
		$('input[name="selectedDevice"]').prop('checked', false);
		$('.selectedDevice').trigger('change');
		console.log("inside filtercards");
		$('.card-container').find('.col-md-3').each(function() {
			const locationText = $(this).find('.card-body').text();
			const locationMatch = locationText.match(/Location:\s*([^\n\s]+)\s+Status/);
			console.log(" locationMatch", locationMatch);

			if (locationMatch && locationMatch.length > 1) {
				const cardLocation = locationMatch[1].trim();
				console.log("cardLocation", cardLocation);
				if (checkedLocations.length === 0 || checkedLocations.includes(cardLocation)) {
					$(this).show(); // Show the card if checkedLocations is empty or if its location is in checkedLocations
				} else {
					console.log(" inside else");
					$(this).hide(); // Hide the card if its location is not in checkedLocations
				}
			}
		});
	}

	$("#successUpload").click(function(event) {
		location.reload();
	});
	$("#closepreviewmodal").click(function(event) {
		location.reload();
	});

	$('.selectedDevice').change(function() {
		console.log("inside change");
		if ($('.selectedDevice:checked').length > 0) {
			$('#deletedevice').prop('disabled', false); // Enable the button
			$('#stopcampaign').prop('disabled', false); // Enable the button

		} else {
			$('#deletedevice').prop('disabled', true); // Disable the button
			$('#stopcampaign').prop('disabled', true); // Disable the button

		}
	});

	//closepreviewmodal
	$(".preview-icon").click(function() {
		var deviceId = $(this).data("device-id");
		const modalTitle = document.getElementById('id');
		modalTitle.innerHTML = deviceId;
		$("#previewModal-" + deviceId).modal('show');
		console.log("Previewing device: " + deviceId);
		$('#previewCampaignModal').modal('show');

		document.querySelector('#campaignPreviewDiv .spinner').style.display = 'block';

		let counter = 0;
		const callApi = () => {
			$.ajax({
				url: getContextPath() + "/get-device-preview",
				type: "POST",
				dataType: "json",

				data: {

					deviceId: deviceId
				},

				success: function(json) {
					console.log("inside s");
					console.log("campaign idd", json.campaignId);

					if (json.campaignId === "          ") {

						var idele = document.getElementById('id');
						var bodytext = deviceId;
						idele.textContent = bodytext;
						$('#previewCampaignModal').modal('show');

						$.ajax({
							url: getContextPath() + "/get-content-layout",
							async: false,
							type: "POST",
							data: {
								layoutId: "LAY9999",
								shareFlag: "S",
								operation: 'A'
							},
							success: function(response) {
								$('#previewCampaignModal').modal('show');
								$('#campaignPreviewDiv').html(response);
								//getCampaignDetails(campaignId);

							},
							beforeSend: function(xhr) {
								xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
							},
							error: function() {
								alertify.error("Some error occured, please try again")
							}
						});
						counter++;
						if (counter < 3) {
							setTimeout(callApi, 10000);
						}

					} else if (json.campaignId === "") {
						if (counter === 0) {
							var idele = document.getElementById('id');
							var bodytext = deviceId;
							idele.textContent = bodytext;
							$('#previewCampaignModal').modal('show');
							var respbody = document.getElementById('campaignPreviewDiv');
							var bodytext = "Trying to get campaign....";
							respbody.textContent = bodytext;
							respbody.style.textAlign = "center";
						} else {
							var idele = document.getElementById('id');
							var bodytext = deviceId;
							idele.textContent = bodytext;
							$('#previewCampaignModal').modal('show');
							var respbody = document.getElementById('campaignPreviewDiv');
							var bodytext = "Sorry !! Application seems not to be working. Please check device !";
							respbody.textContent = bodytext;
							respbody.style.textAlign = "center";
						}

						counter++;
						if (counter < 3) {
							setTimeout(callApi, 10000);
						}
					} else {
						var idele = document.getElementById('id');
						var bodytext = deviceId;
						idele.textContent = bodytext;
						console.log("inside json object", json);
						console.log("inside jsonparse ", json.campaignId);
						var campaigndetails;
						$.ajax({
							url: getContextPath() + "/get-campaign-details",
							async: false,
							type: "POST",
							data: {
								campaignId: json.campaignId
							},
							success: function(response) {
								console.log("response1", response);
								campaigndetails = JSON.parse(response);

							},
							beforeSend: function(xhr) {
								xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
							},
							error: function() {
								alertify.error("Some error occured, please try again")
							}
						});

						console.log("response2");
						console.log("inside campaigndetails ", campaigndetails.campaignId);

						getContentLayout(campaigndetails.campaignId, campaigndetails.layoutId, campaigndetails.shareFlag);

					}
					counter++;
					if (counter < 3) {
						setTimeout(callApi, 10000);
					}

				},
				beforeSend: function(xhr) {
					xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
				},
				error: function() {
					counter++;
					if (counter < 3) {
						var idele = document.getElementById('id');
						var bodytext = deviceId;
						idele.textContent = bodytext;
						$('#previewCampaignModal').modal('show');
						var respbody = document.getElementById('campaignPreviewDiv');
						var bodytext = "Trying to get campaign....";
						respbody.textContent = bodytext;
						respbody.style.textAlign = "center";
						// Call the API again after a 10-second delay
						setTimeout(callApi, 10000);
					} else {
						var idele = document.getElementById('id');
						var bodytext = deviceId;
						idele.textContent = bodytext;
						$('#previewCampaignModal').modal('show');
						var respbody = document.getElementById('campaignPreviewDiv');
						var bodytext = "Sorry !! Application seems not to be working. Please check device !";
						respbody.style.textAlign = "center";
						respbody.textContent = bodytext;
					}

				}
			});

		}
		// Call the API for the first time
		console.log("b4 call");
		callApi();

	});

});

function getContentLayout(campaignId, layoutId, shareFlag) {
	$.ajax({
		url: getContextPath() + "/get-content-layout",
		async: false,
		type: "POST",
		data: {
			layoutId: layoutId,
			shareFlag: shareFlag,
			operation: 'A'
		},
		success: function(response) {
			$('#previewCampaignModal').modal('show');
			$('#campaignPreviewDiv').html(response);
			getCampaignDetails(campaignId);

		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		},
		error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

function getCampaignDetails(campaignId) {
	$.ajax({
		url: getContextPath() + "/get-campaign-details",
		type: "POST",
		dataType: "json",
		data: {
			campaignId: campaignId
		},
		success: function(response) {
			console.log('response', response);
			if (response) {
				$('#campaignId').val(campaignId);
				if (response.shareFlag == 'S') {
					$.each(response.contents, function(i, data) {
						var j = parseInt(data.sectionId) - 1;
						$('#mediaObject' + j).attr('data', getContextPath() + '/image/?variable1=' + data.contentId + '&variable2=' + data.contentFormat + '&variable3=' + data.contentStoragePath);
					});
					/*shivam */
					var soundBtns = document.querySelectorAll('.row .soundBtn');
					soundBtns.forEach(function(btn) {
						btn.style.display = 'none';
					})
					if (response.tickerFlag === 1 && response.tickerPosition === 'B') {
						console.log('inside if', response.tickerFlag);
						var specifiedRow = document.querySelector('.row.hidden.BT.example1');
						if (specifiedRow) {
							var soundBtns = document.querySelectorAll('.row.hidden.BT.example1 .soundBtn');

							soundBtns.forEach(function(btn) {
								btn.style.display = 'none';
							});
							var specifiedIndex = Array.from(specifiedRow.parentNode.children).indexOf(specifiedRow);
							var rowAbove = specifiedRow.parentNode.children[specifiedIndex - 1];
							var secondRowAbove = specifiedRow.parentNode.children[specifiedIndex - 2];
							if (rowAbove && rowAbove.classList.contains('row') && response.layoutId !== "LAY0003" && response.layoutId !== "LAY0004" && response.layoutId !== "LAY0011" && response.layoutId !== "LAY0013") {
								rowAbove.style.height = '45%';
							} else {
								rowAbove.style.height = '91%';
							}
							if (secondRowAbove && secondRowAbove.classList.contains('row') && response.layoutId !== "LAY0003" && response.layoutId !== "LAY0004" && response.layoutId !== "LAY0011" && response.layoutId !== "LAY0013") {
								secondRowAbove.style.height = '45%';
							} else {
								secondRowAbove.style.height = '91%';
							}
						}

						$('.BT').removeClass('hidden');
						$('#BTcontent').text(response.tickerContent).css('color', 'white');

					}

					if (response.tickerFlag === 1 && response.tickerPosition === 'T') {
						console.log("top");
						// $('.BT').removeClass('hidden');
						console.log("response.tickerContent", response.tickerContent);
						var specifiedRow = document.querySelector('.row.hidden.TT.example1');

						if (specifiedRow) {

							var specifiedIndex = Array.from(specifiedRow.parentNode.children).indexOf(specifiedRow);
							var rowAbove = specifiedRow.parentNode.children[specifiedIndex + 1];
							var secondRowAbove = specifiedRow.parentNode.children[specifiedIndex + 2];
							if (rowAbove && rowAbove.classList.contains('row') && response.layoutId !== "LAY0003" && response.layoutId !== "LAY0004" && response.layoutId !== "LAY0011") {
								rowAbove.style.height = '45%';
							} else {
								rowAbove.style.height = '91%';
							}
							if (secondRowAbove && secondRowAbove.classList.contains('row') && response.layoutId !== "LAY0003" && response.layoutId !== "LAY0004" && response.layoutId !== "LAY0011") {
								secondRowAbove.style.height = '45%';
							} else {
								secondRowAbove.style.height = '91%';
							}
							var elementToPosition = specifiedRow.querySelector('.soundBtn');
							if (elementToPosition) {
								elementToPosition.style.top = '9%';
							}
						}

						$('.TT').removeClass('hidden');
						$('#TTcontent').text(response.tickerContent).css('color', 'white');

					}
				} else {
					$('.carousel-item').not(':first').remove();
					$('.carousel-item').empty();
					$.each(response.contents, function(i, data) {
						var $carouselItem;
						if (i == 0) {
							$carouselItem = $('.carousel-item');
						} else {
							$carouselItem = $('.carousel-item:first').clone();
							$carouselItem.removeClass('active');
							$carouselItem.empty();
							$carouselItem.appendTo('.carousel-inner');
						}
						var storagePath = getContextPath() + '/image/?variable1=' + data.contentId + '&variable2=' + data.contentFormat + '&variable3=' + data.contentStoragePath;
						switch (data.contentTypeCode) {
							case 'I':
								$carouselItem.html('<img src="' + storagePath + '" class="d-block w-100" alt="..." style="height: 60vh; object-fit: contain;">');
								break;
							case 'V':
								$carouselItem.html('<video src="' + storagePath + '" class="d-block w-100" preload="metadata" controls>')
								break;
							case 'A':
							default:
								$carouselItem.html('<object data="' + storagePath + '" class="d-block w-100">')
						}
					});
				}
			}

		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		},
		error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

$('#deletedevice').click(function() {
	bootbox.confirm({
		message: '<span style="font-size: large">Are you sure you want to delete Seleted device?',
		buttons: {
			confirm: {
				label: '<i class="fa fa-check"></i> Yes',
				className: 'btn-primary'
			},
			cancel: {
				label: '<i class="fa fa-times"></i> No',
				className: 'btn-danger'
			}
		},
		callback: function(result) {
			if (result) {
				deregisterButton();
			}
		}
	});
});

/* delete button ajax */
var seldevicelist = [];

function deregisterButton() {
	console.log("inside deletedevice");
	var selecteddevices = document.querySelectorAll('input[name="selectedDevice"]:checked');

	selecteddevices.forEach(function(checkbox) {
		var devicevalue = checkbox.value;

		seldevicelist.push(devicevalue);
	});
	console.log("selecteddevices>>", seldevicelist);
	var jsonseldevicelist = JSON.stringify({
		seldevicelist
	});
	var rem = "test";

	$.ajax({
		url: getContextPath() + "/DeregisterDevice",
		type: "POST",
		dataType: "json",

		data: {

			remarks: rem,
			deviceId: jsonseldevicelist,

		},

		success: function(json) {
			console.log("inside DeregisterDevice ajax success ");
			
			bootbox.alert({
					message: '<span style="font-size:large;color:green">Device Unregistered Successfully !!' + ' </span>',
					callback: function() {
						location.reload();

					}
				});

		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		},
		error: function() {

			console.log("error DeregisterDevice ajx");
			
			bootbox.alert({
					message: '<span style="font-size:large;color:green">Unable to De-register !!! Try after some time ' + ' </span>',
					callback: function() {
						location.reload();

					}
				});
			console.log("error single ajx");
			//location.reload(true);
		}

	});

}

function deregisterDevice(deviceId) {
	var seldevicelist = [];
	seldevicelist.push(deviceId);
	console.log("deviceID>>>", seldevicelist);
	var jsonseldevicelist = JSON.stringify({
		seldevicelist
	});
	var rem = "test";
	$.ajax({
		url: getContextPath() + "/DeregisterDevice",
		type: "POST",
		dataType: "json",

		data: {

			remarks: rem,
			deviceId: jsonseldevicelist,

		},

		success: function(json) {
			console.log("inside single  ajax success ");
			
				bootbox.alert({
					message: '<span style="font-size:large;color:green">Device Unregistered Successfully !!' + ' </span>',
					callback: function() {
						location.reload();

					}
				});
			

		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		},
		error: function() {

			
			bootbox.alert({
					message: '<span style="font-size:large;color:green">Unable to De-register !!! Try after some time ' + ' </span>',
					callback: function() {
						location.reload();

					}
				});
			console.log("error single ajx");

		}

	});
}

document.addEventListener('DOMContentLoaded', function() {
	const deleteIcons = document.querySelectorAll('.delete-icon');

	deleteIcons.forEach(function(icon) {
		icon.addEventListener('click', function() {
			const deviceId = icon.dataset.deviceId;
			// deregisterDevice(deviceId);
			bootbox.confirm({
				message: '<span style="font-size: large">Are you sure you want to delete this device?',
				buttons: {
					confirm: {
						label: '<i class="fa fa-check"></i> Yes',
						className: 'btn-primary'
					},
					cancel: {
						label: '<i class="fa fa-times"></i> No',
						className: 'btn-danger'
					}
				},
				callback: function(result) {
					if (result) {
						deregisterDevice(deviceId);
					}
				}
			});
		});
	});
});

$('#stopcampaign').click(function() {

	bootbox.confirm({
		message: '<span style="font-size: large">Are you sure you want to stop campaign?',
		buttons: {
			confirm: {
				label: '<i class="fa fa-check"></i> Yes',
				className: 'btn-primary'
			},
			cancel: {
				label: '<i class="fa fa-times"></i> No',
				className: 'btn-danger'
			}
		},
		callback: function(result) {
			if (result) {
				stopCampaignButton();
			}
		}
	});
});

function stopCampaignButton() {
	console.log("inside stopcampaign");
	var selecteddevices = document.querySelectorAll('input[name="selectedDevice"]:checked');

	selecteddevices.forEach(function(checkbox) {
		var devicevalue = checkbox.value;

		seldevicelist.push(devicevalue);
	});
	console.log("selecteddevices>>", seldevicelist);
	var jsonseldevicelist = JSON.stringify({
		seldevicelist
	});
	var rem = "test";

	$.ajax({
		url: getContextPath() + "/Stopcampaign",
		type: "POST",
		dataType: "json",

		data: {

			remarks: rem,
			deviceId: jsonseldevicelist,

		},

		success: function(json) {
			console.log("inside Stopcampaign ajax success ");
			
			bootbox.alert({
					message: '<span style="font-size:large;color:green">Content Stopped !!' + ' </span>',
					callback: function() {
						location.reload();

					}
				});

		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		},
		error: function() {

			console.log("error DeregisterDevice ajx");
			
			bootbox.alert({
					message: '<span style="font-size:large;color:green">Unable to Stop!! Try after some time' + ' </span>',
					callback: function() {
						location.reload();

					}
				});
			console.log("error single ajx");
			//location.reload(true);
		}

	});

}

document.addEventListener('DOMContentLoaded', function() {
	const stopIcons = document.querySelectorAll('.stop-icon');

	var seldevicelist = []
	stopIcons.forEach(function(icon) {
		icon.addEventListener('click', function() {
			const deviceId = icon.dataset.deviceId;
			console.log("deviceId1 ..", deviceId);
			var rem = "test";
			seldevicelist.push(deviceId);
			var jsonseldevicelist = JSON.stringify({
				seldevicelist
			});
			bootbox.confirm({
				message: '<span style="font-size: large">Are you sure you want to stop  campaign',
				buttons: {
					confirm: {
						label: '<i class="fa fa-check"></i> Yes',
						className: 'btn-primary'
					},
					cancel: {
						label: '<i class="fa fa-times"></i> No',
						className: 'btn-danger'
					}
				},
				callback: function(result) {
					if (result) {
						stopCampaignIcon(jsonseldevicelist, rem);
					}
				}
			});

		});
	});
});

function stopCampaignIcon(jsonseldevicelist, rem) {

	$.ajax({
		url: getContextPath() + "/Stopcampaign",
		type: "POST",
		dataType: "json",

		data: {

			remarks: rem,
			deviceId: jsonseldevicelist,

		},

		success: function(json) {
			console.log("inside Stopcampaign ajax success ");
			
			//$("#prgsModal").modal('show');
			bootbox.alert({
					message: '<span style="font-size:large;color:green">Content Stopped !!' + ' </span>',
					callback: function() {
						location.reload();

					}
				});

		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		},
		error: function() {

			//$("#prgsModal").modal('show');
			bootbox.alert({
					message: '<span style="font-size:large;color:green">Unable to Stop!! Try after some time' + ' </span>',
					callback: function() {
						location.reload();

					}
				});
			console.log("error single ajx");
			//location.reload(true);
		}

	});

}
function getContextPath() {
	return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}

$('#deletedevice').click(function() {
	console.log("inside deletedevice");
	var selecteddevices = document.querySelectorAll('input[name="selectedDevice"]:checked');
	var seldevicelist = [];

	selecteddevices.forEach(function(checkbox) {
		var devicevalue = checkbox.value;

		selecteddevices.push(devicevalue);
	});

	console.log("selecteddevices" + selecteddevices)

});