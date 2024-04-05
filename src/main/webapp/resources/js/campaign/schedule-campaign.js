const format = 'hh:mm'
var rlyUserFlag=0;
/*only for one option in future delete it*/
var locationRly;
var locationLevelRly;

	$('#locationRly').change(function() {
		rlyUserFlag=1;
		console.log("locationrly");
		if($(this).val()){
			
			/*only for one option in future delete it*/
            locationRly=$(this).val();
            locationLevelRly=$(this).find('option:selected').data('level');
			$('#locationLevel').val($(this).find('option:selected').data('level'));
			
			getCampaignListForLocation($(this).val(), $(this).find('option:selected').data('level'));
			getAuctionsForUserLocationRly($(this).val(), $(this).find('option:selected').data('level'));
			
			

		}
	});

$(document).ready(function() {
	
	$('#scheduleTable').DataTable();
	
	$('.multiple-select').multiselect({
		buttonClass: 'btn btn-primary btn-sm',
		includeSelectAllOption: true,
		enableCaseInsensitiveFiltering: true,
		enableFiltering: true,
		maxHeight: 300
    });
	
	$('.multiselectDiv button, .multiselectDiv .btn-group').css({'width':'100%', 'margin-top':'0px'});
		
	$('#location').change(function() {
		if($(this).val()){
			$('#locationLevel').val($(this).find('option:selected').data('level'));
			getCampaignListForLocation($(this).val(), $(this).find('option:selected').data('level'));
			getAuctionsForUserLocation($(this).val(), $(this).find('option:selected').data('level'));
		}
	});
	 $('#locationRly').trigger('change');
	$('#auctionIdSelect').change(function() {
		$('#auctionId').val($(this).val());
		$('#auctionDetailsDiv').hide();
		$('#auctionDetailsDiv').find('input,select').val(null);
		$('#auctionDetailsDiv').find('input,select').not('.auctionActiveField').attr('disabled', true);
		$('#auctionShareFlag').val($('#auctionIdSelect option:selected').data('shareflag'));
		$('#timeSlot option').not(':first').remove();
		$('.scheduleSlotRow').not(':first').each(function(i, div) {
			removeFieldsfromValidatorTimeSlot($(this));
			$(this).remove();
		});
		if($(this).val()) { 
			getAuctionDetails($(this).val());
		}
	});
	
	$('#toggleDevice').on('change', function() {
		toggleFieldsDev();
	});
	
	$('#toggleSchedule').on('change', function() {
		toggleFields();
	});

	
	$('#scheduleSlotDiv').on('click', '.add-row', function() {
		addTimeSlotDiv($(this));
	}).on('click', '.remove-row', function() {
		removeTimeSlotDiv($(this));
	});
	
	$('#scheduleCampaignForm').bootstrapValidator({
    	excluded: ':disabled',
        fields: {
        	location: {
            	group: '.col-md-3',
        		validators: {
        			notEmpty: { 
                        message: "Select Location"
                    }
        		}
        	},
        	campaignId: {
            	group: '.col-md-3',
				validators: {
					notEmpty: { 
						message: "Select Campaign"
					}
				}
        	},
        	groupId: {
        		group: '.col-md-3',
        		validators: {
        			notEmpty: { 
        				message: "Select Device Group"
        			}
        		}
        	},
        	deviceCode: {
        		group: '.col-md-12',
        		validators: {
        			notEmpty: { 
        				message: "Select Devices"
        			}
        		}
        	},
        	endTime: {
        		group: '.col-md-3',
        		validators: {
        			callback: {
                    	message: 'Time Slot not in auctioned range',
                    	callback: function(value, validator, $field) {
                    		if(value) {
                    			var isValid=false;
        						var selEndDate=moment(value.split('T')[0]);
        						var selEndTime=moment(value.split('T')[1], format);
                    			$.each( auctionList, function(i, row){
                    				var isValidStartDate=moment(moment().format('YYYY-MM-DD')).isBetween(row.startEndDateTime[0].startDate, row.startEndDateTime[0].endDate, null, '[]');
                    				var isValidEndDate=moment(selEndDate).isBetween(row.startEndDateTime[0].startDate, row.startEndDateTime[0].endDate, null, '[]');
                    				if(isValidStartDate && isValidEndDate) {
                    					$.each( row.startEndDateTime, function(j, data){
                    						var slotStart=moment(data.startTime, format);
                    						var slotEnd=moment(data.endTime, format);
                    		        		isStartValid=moment(moment().format('HH:mm'), format).isBetween(slotStart, slotEnd, null, '[]');
                    		        		isEndValid=selEndTime.isBetween(slotStart, slotEnd, null, '[]');
                    						console.log('slotStart',slotStart,'slotEnd', slotEnd,
                    								'isStartValid',isStartValid, 'isEndValid',isEndValid, 'sharedd:',(row.sharingFlag==$('#campaignId option:selected').data('shareFlag')));
                    						if(rlyUserFlag!=1){
												if(isStartValid && isEndValid && row.sharingFlag==$('#campaignId option:selected').data('shareflag')){ 
                    							$('#auctionId').val(row.auctionId);
                    							$('#auctionShareFlag').val(row.sharingFlag);
                    							$('#aucStartDate').val(data.startDate);
                    							$('#auctionStartTime0').val(data.startTime);
                    							isValid=true;
                    							return false;
                    						}}
                    						else{
												///////
											if(isStartValid && isEndValid ){ 
                    							$('#auctionId').val(row.auctionId);
                    							$('#auctionShareFlag').val(row.sharingFlag);
                    							$('#aucStartDate').val(data.startDate);
                    							$('#auctionStartTime0').val(data.startTime);
                    							isValid=true;
                    							return false;
	
												}
											
												//////
												
												}
                    					});
                    					if(isValid) {
                    						return false;
                    					}
                    				}
                    			});
                    			if (isValid) { return true; }
	                    		else  return {
                                    valid: false,
                                    message: 'Time slot not in Auctioned range'
                                };
                    		} else { 
                    			return {
	                                valid: false,
	                                message: 'Select End Time'
	                            };
                    		}
                    	}
                    }
        		}
        	},
        	auctionIdSelect: {
        		group: '.col-md-3',
        		validators: {
        			notEmpty: { 
        				message: "Select Auction"
        			}
        		}
        	},
        	startDate: {
        		group: '.col-md-3',
        		validators: {
        			callback: {
                    	message: 'Date not in Auctioned range',
                    	callback: function(value, validator, $field) {
                    		if(value) {
	                    		var isValid=moment(value).isBetween($('#aucStartDate').val(), $('#aucEndDate').val(), null, '[]');
	                    		if (isValid) { return true; }
	                    		else  return {
                                    valid: false,
                                    message: 'Date not in Auctioned range'
                                };
                    		} else { 
                    			return {
	                                valid: false,
	                                message: 'Select Start Date'
	                            };
                    		}
                    	}
                    }
        		}
        	},
        	endDate: {
        		group: '.col-md-3',
        		validators: {
        			callback: {
                    	message: 'Date not in Auctioned range',
                    	callback: function(value, validator, $field) {
                    		if(value) {
	                    		var isValid=moment(value).isBetween($('#aucStartDate').val(), $('#aucEndDate').val(), null, '[]');
	                    		if (isValid) { 
	                    			if( moment(value).isSameOrAfter($('#startDate').val()) )
	                    				return true;
	                    			else return {
	                                    valid: false,
	                                    message: 'End Date should be greater than Start Date'
	                                };
	                    		}
	                    		return {
	                                valid: false,
	                                message: 'Date not in Auctioned Range'
	                            };
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
        	startTimeSlot: {
        		group: '.col-md-3',
        		selector: '.startTimeSlot',
        		validators: {
        			notEmpty: { 
        				message: "Select Start Time"
        			},
        			callback: {
                    	message: 'Time not in Auctioned slot',
                    	callback: function(value, validator, $field) {
                    		var isValid=false;
                    		var selTime=moment(value, format); 
                    		$('#auctionTimeTBody tr').each(function(i, timeRow) { 
                        		var slotStart=moment($(timeRow).find('.slotStartTime').val(), format);
                        		var slotEnd=moment($(timeRow).find('.slotEndTime').val(), format);
                        		isValid=selTime.isBetween(slotStart, slotEnd, null, '[]');
                    			if (isValid) {
                    				$field.closest('.scheduleSlotRow').find('.auctionStartTime').val($(timeRow).find('.slotStartTime').val());
                    				return false;
                    			}
                    		});
                    		
                    		if (isValid) { 
                    			var rNum=$field.attr('id').match(/\d+/)-1;
                    			if(rNum>=0){
                    				var prevEnd=moment($('#endTime'+rNum).val(), format);
                    				if (!selTime.isSameOrAfter(prevEnd)) {
                    					return {
                                            valid: false,
                                            message: 'Start Time should be greater than previous end time'
                                        };
                    				}
                    			}
                    			return true; 
                    		} else return {
                                valid: false,
                                message: 'Time not in Auctioned slot'
                            };
                    	}
                    }
        		}
        	},
        	endTimeSlot: {
        		group: '.col-md-3',
        		selector: '.endTimeSlot',
        		validators: {
        			notEmpty: { 
        				message: "Select End Time"
        			},
        			callback: {
                    	message: 'Time not in Auctioned slot',
                    	callback: function(value, validator, $field) {
                    		var isStartValid=false, isEndValid=false;
                    		var selStartTime=moment($field.closest('.scheduleSlotRow').find('.startTimeSlot').val(), format);
                    		var selEndTime=moment(value, format);
                    		$('#auctionTimeTBody tr').each(function(i, timeRow) { 
                        		var slotStart=moment($(timeRow).find('.slotStartTime').val(), format);
                        		var slotEnd=moment($(timeRow).find('.slotEndTime').val(), format);
                        		isStartValid=selStartTime.isBetween(slotStart, slotEnd, null, '[]');
                        		isEndValid=selEndTime.isBetween(slotStart, slotEnd, null, '[]');
                    			if (isStartValid && isEndValid) 	return false;
                    		});
                    		if (isStartValid && isEndValid) { 
                    			if( selEndTime.isAfter(selStartTime))
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
	
	}).on('click', '#saveCampaignScheduleBtn', function(event){
		$('#formErrorMessage').empty();
		var bootstrapValidator=$("#scheduleCampaignForm").data("bootstrapValidator");
		bootstrapValidator.resetForm();
		bootstrapValidator.validate();
		if (bootstrapValidator.getInvalidFields().length <= 0) {
			if($('#campaignId option:selected').data('shareflag')!=$('#auctionShareFlag').val()){
					if(rlyUserFlag!=1){
						console.log('rlyUserFlag'+rlyUserFlag);
				$('#formErrorMessage').html('Selected Campaign does not match the sharing flag');
				return false; 
			}
			}
			bootbox.confirm({
				message: '<span style="font-size: large">Are you sure you want to save this Schedule?',
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
		        callback: function (result) {
		        	if (result) {
		        		saveCampaignSchedule();
					}
		        }
	    	});
		} else {
			alertify.error('Input all required fields');
		}
		
	});
	
	toggleFields();
	toggleFieldsDev();
	
});

var auctionList=[];
function toggleFields() {
		console.log('suuuuuuuuu');

	if ($('#toggleSchedule').is(':checked') ) {
		
		
		
		$('#auctionIdSelect').removeAttr('disabled');
	
	console.log("suuuuuuuuu");
	$("#startDate").prop("disabled", false);
	$("#endDate").prop("disabled", false);
	$("#scheduleCampaignForm #scheduleSlotDiv input").not('.auctionActiveField').prop("disabled", false);
   $("#endTime").prop("disabled", true);

	
	

		$('#playNowLabel').css('color', '#9E9E9E');
		$('#schdCmpgnLabel').css('color', '#5f73e3')
		
		/*edit by shivam, no future purpose*/
		
		toggleFieldRly=1;
		if(rlyUserFlag==1 && toggleFieldRly==1 )
		{
		$('#auctionDetailsDiv').show();
			//$('#auctionIdSelect').val(null).attr('disabled', true); locationLevel;locationRly
		$.ajax({
		url: getContextPath() + "/get-auctions-for-user-location",
		type: "POST",
		dataType: "json",
		data: {
			location:locationRly ,
			locationLevel: locationLevelRly
		},
		success: function(response) {
			auctionList=response;
			$.each(response, function(i, data)
			{
				$('#auctionIdSelect').empty();
				var newOption = $('<option>')  
                                  .val(null)       
                                  .text("Select Auction");
                                  
                $('#auctionIdSelect').append($(newOption))  ;                
				$('#auctionIdSelect').append($('<option>')  
					.val(data.auctionId)       
					.text(data.auctionName+' ('+data.auctionId+') - '+(data.sharingFlag=='T'?'Time Share':'Screen Share' ))
					.attr('data-shareflag', data.sharingFlag)
					.prop('selected', true)
				);
				$('#auctionShareFlag').val(data.sharingFlag=='T'?'T':'S');
                //$('#auctionShareFlag').val()
				console.log("inside successa");
				//$('#campaignId option:selected').data('shareflag')=$('#auctionShareFlag').val()
	
			});
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});				
            $('#auctionDetailsDiv').show();
            console.log("aftre show");
			
		}
	} else {

		$('#auctionIdSelect').val(null).attr('disabled', true);
		$('#endTime').removeAttr('disabled');
		$('#schdCmpgnLabel').css('color', '#9E9E9E');
		$('#playNowLabel').css('color', '#5f73e3');
		$('#auctionDetailsDiv').hide();
		$('#auctionDetailsDiv').find('input,select').val(null);
		$('#auctionDetailsDiv').find('input,select').not('.auctionActiveField').attr('disabled', true);
		
		/**/
		toggleFieldRly=0;
		if(rlyUserFlag==1 && toggleFieldRly==0 )
		  {
		
           $('#auctionDetailsDiv').find('input,select').not('.auctionActiveField').attr('disabled', true);
            $('#auctionDetailsDiv').hide();
            console.log("inside else's if")
          }
	    }
}



function toggleFieldsDev() {
	if ($('#toggleDevice').is(':checked')) {
		$('#groupId').val(null).attr('disabled', true);
		$('#deviceCode').removeAttr('disabled');
		$('#deviceCode').closest('div').find('.dropdown-toggle').removeAttr('disabled');
	} else {
		$('#deviceCode').attr('disabled', true);
		$('#deviceCode').closest('div').find('.dropdown-toggle').attr('disabled', true);
		$("#deviceCode").val(null);
		$("#deviceCode").multiselect("refresh");
		$("#deviceCode").trigger('change');
		$('#groupId').removeAttr('disabled');
	}
}

function getCampaignListForLocation(location, locationLevel) {
	$('#campaignId option').not(':first').remove();
	console.log('getCampaignListForLocation');
	$.ajax({
		url: getContextPath() + "/get-campaign-list-for-location",
		type: "POST",
		dataType: "json",
		data: {
			location: location,
			locationLevel: locationLevel
		},
		success: function(response) {
			$.each(response, function(i, data){
				//approve campaign condition not yet implemented
				$('#campaignId').append($('<option>')  
					.val(data.campaignId)
					.text(data.campaignName+' - '+(data.shareFlag=='T'?'Time Share':'Screen Share' ))
					.attr('data-shareflag', data.shareFlag)
				);
			});
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

function getAuctionsForUserLocation(location, locationLevel) {
	$('#auctionIdSelect option').not(':first').remove();
	$.ajax({
		url: getContextPath() + "/get-auctions-for-user-location",
		type: "POST",
		dataType: "json",
		data: {
			location: location,
			locationLevel: locationLevel
		},
		success: function(response) {
			auctionList=response;
			$.each(response, function(i, data){
				$('#auctionIdSelect').append($('<option>')  
					.val(data.auctionId)       
					.text(data.auctionName+' ('+data.auctionId+') - '+(data.sharingFlag=='T'?'Time Share':'Screen Share' ))
					.attr('data-shareflag', data.sharingFlag)
				);
				
			});
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

/* function created by Shivam*/
function getAuctionsForUserLocationRly(location, locationLevel) {
	$('#auctionIdSelect option').not(':first').remove();
	
	$.ajax({
		url: getContextPath() + "/get-auctions-for-user-location",
		type: "POST",
		dataType: "json",
		data: {
			location: location,
			locationLevel: locationLevel
		},
		success: function(response) {
			auctionList=response;
			$.each(response, function(i, data)
			{
				$('#auctionIdSelect').append($('<option>')  
					.val(data.auctionId)       
					.text(data.auctionName+' ('+data.auctionId+') - '+(data.sharingFlag=='T'?'Time Share':'Screen Share' ))
					.attr('data-shareflag', data.sharingFlag)
					.prop('selected', true)
				);
				getAuctionDetailsRly(data.auctionId);
			//	$('#auctionDetailsDiv').style.display="none";
				//$('#campaignId option:selected').data('shareflag')=$('#auctionShareFlag').val()
	
			});
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

/*this function is also created by shivam for rly purpose*/
function getAuctionDetailsRly(auctionId) {
	
	$.ajax({
		url: getContextPath() + "/get-auction-details",
		type: "POST",
		dataType: "json",
		data: {
			auctionId: auctionId
		},
		success: function(response) {
			console.log('response', response);
			if(response) {
				//$('#auctionDetailsDiv').show();
				$('#auctionIdLabel').html(': '+auctionId);
				$('#auctionId').val(auctionId);
				$('#auctionNameLabel').html(': '+response[0].auctionName);
				$('#startDateLabel').html(': '+formatDate('DD-MM-YYYY', response[0].startDate));
				$('#aucStartDate').val(response[0].startDate);
				$('#endDateLabel').html(': '+formatDate('DD-MM-YYYY', response[0].endDate));
				$('#aucEndDate').val(response[0].endDate);
				var tableRow='', inventoryId=response[0].inventoryId;
				$.each(response, function(i, data){
					if(inventoryId!=data.inventoryId) {
						return false;
					}
					tableRow+='<tr>'
						+'<td>'+data.startTime
						+'<input type="hidden" id="slotStartTime'+i+'" class="slotStartTime" value="'+data.startTime+'"/></td>'
						+'<td>'+data.endTime
						+'<input type="hidden" id="slotEndTime'+i+'" class="slotEndTime" value="'+data.endTime+'"/></td>'
						+'</tr>'; 
				});
				$('#auctionTimeTBody').empty();
				$('#auctionTimeTBody').append(tableRow);
				//$('#auctionDetailsDiv').find('input,select').removeAttr('disabled');
				
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}
/*shivam'part end */


function getAuctionDetails(auctionId) {
	
	$.ajax({
		url: getContextPath() + "/get-auction-details",
		type: "POST",
		dataType: "json",
		data: {
			auctionId: auctionId
		},
		success: function(response) {
			console.log('response', response);
			if(response) {
				$('#auctionDetailsDiv').show();
				$('#auctionIdLabel').html(': '+auctionId);
				$('#auctionId').val(auctionId);
				$('#auctionNameLabel').html(': '+response[0].auctionName);
				$('#startDateLabel').html(': '+formatDate('DD-MM-YYYY', response[0].startDate));
				$('#aucStartDate').val(response[0].startDate);
				$('#endDateLabel').html(': '+formatDate('DD-MM-YYYY', response[0].endDate));
				$('#aucEndDate').val(response[0].endDate);
				var tableRow='', inventoryId=response[0].inventoryId;
				$.each(response, function(i, data){
					if(inventoryId!=data.inventoryId) {
						return false;
					}
					tableRow+='<tr>'
						+'<td>'+data.startTime
						+'<input type="hidden" id="slotStartTime'+i+'" class="slotStartTime" value="'+data.startTime+'"/></td>'
						+'<td>'+data.endTime
						+'<input type="hidden" id="slotEndTime'+i+'" class="slotEndTime" value="'+data.endTime+'"/></td>'
						+'</tr>'; 
				});
				$('#auctionTimeTBody').empty();
				$('#auctionTimeTBody').append(tableRow);
				$('#auctionDetailsDiv').find('input,select').removeAttr('disabled');
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

function addTimeSlotDiv($addBtn) {
	var prNum = $('.scheduleSlotDiv .scheduleSlotRow').length;
	var $row=$('#scheduleSlotRow0').clone();
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
			$(this).attr('id', $(this).attr('id').replace(/\d+/, i ));
			$(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, "[" + i + "]"));
		});
	});
	
}

function removeTimeSlotDiv($remBtn) {
	var rowLen=$('.scheduleSlotRow').length;
	if(rowLen>1){
		removeFieldsfromValidatorTimeSlot($remBtn.closest('.scheduleSlotRow'));
		$remBtn.closest('.scheduleSlotRow').remove();
		renameTimeSlotDivs();
	}
}

/**
 * function to add fields in validator when a row is added
 * @param $row
 * @returns
 */
function addFieldsInValidatorTimeSlot($row) {
	$("#scheduleCampaignForm").bootstrapValidator('addField', $row.find(".startTimeSlot"));
	$("#scheduleCampaignForm").bootstrapValidator('addField', $row.find(".endTimeSlot"));
}

/** 
 * function to remove fields from validator when a row is removed 
 * @param $row
 * @returns
 */
function removeFieldsfromValidatorTimeSlot($row) {
	$("#scheduleCampaignForm").bootstrapValidator('removeField', $row.find(".startTimeSlot"));
	$("#scheduleCampaignForm").bootstrapValidator('removeField', $row.find(".endTimeSlot"));
}

function saveCampaignSchedule() {
	var mediaIdList = [];
	var formData = new FormData();
	console.log('inside saveCampSchedulefunction ');
	var other_data = $('#scheduleCampaignForm').serializeArray();
    $.each(other_data,function(key,input){
    	formData.append(input.name,input.value);
    });
	$.ajax({
		url: getContextPath() +'/save-campaign-schedule',
		type: "post",
		data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
        	if(result) {
        		var response=JSON.parse(result);
        		if(response.respCode=='0' && response.respMessage=='success') {
					bootbox.alert({
						message: '<span style="font-size:large">Campaign Schedule has been saved successfully!</span>',
						callback: function () {
							location.reload();
						}
					});
        		} else if(response.respCode=='-1') {
					console.log('inside elseif ',response.respString);
        			var respString=JSON.parse(response.respString);
        			console.log('respss is :',respString);
        			var messageHtml='<span style="font-size:large">One of the schedules is overlapping for the following:<br>';
        			if(respString.faultyDeviceGroupId && respString.faultyDeviceGroupId.length>0) {
        				messageHtml+='<br>Group ID: ';
        				$.each(respString.faultyDeviceGroupId, function(i, data){
        					messageHtml+=data.deviceGroupId+', ';
        				});
        			} else if(respString.faultyDeviceId && respString.faultyDeviceId.length>0) {
        				messageHtml+='<br>Device ID: ';
        				$.each(respString.faultyDeviceId, function(i, data){
        					messageHtml+=data.deviceId+', ';
        				});
        			}
        			
        			messageHtml+='<br><br>Do you want to override previous schedules with new one?</span>';
        			bootbox.confirm({
          			  message: messageHtml,
          			  buttons: {
          				  confirm: {
          					  label: '<i class="fa fa-check"></i> Yes Override',
          					  className: 'btn-primary'
          				  },
          				  cancel: {
          					  label: '<i class="fa fa-times"></i> No, Reschedule',
          					  className: 'btn-danger'
          				  }
          			  },
          			  callback: function (result) {
          				  if (result) {
          					  $('#overRideFlag').val('1');
          					  saveCampaignSchedule()
          				  } else {
          					  $('#overRideFlag').val('0');
          				  }
          			  }
        			});
        		} else {
    				alertify.error('Some error occurred while saving the Campaign Schedule. Please try after some time')
    			}
			} else {
				alertify.error('Some error occurred while saving the Campaign Schedule. Please try after some time')
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error('Some error occurred while saving the Campaign Schedule. Please try after some time');
		}
	});
}