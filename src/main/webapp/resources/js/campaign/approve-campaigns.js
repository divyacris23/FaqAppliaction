
$(document).ready(function() {
	
	$('#campaignBulkApprovalForm').bootstrapValidator({
    	excluded: ':disabled',
        fields: {
        	'remarks': {
            	group: '.col-md-7',
        		validators: {
        			notEmpty: { 
                        message: "Enter your Remarks"
                    }
        		}
        	}
        }
		
	}).on('click', '#bulkApproveCampaignBtn', function(event){
		var bootstrapValidator=$("#campaignBulkApprovalForm").data("bootstrapValidator");
		bootstrapValidator.resetForm();
		bootstrapValidator.validate();
		if (bootstrapValidator.getInvalidFields().length <= 0) {
			bootbox.confirm({
				message: '<span style="font-size: large">Are you sure you want to approve the selected campaigns?</span>',
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
		        		$('#bulkApprovalStatus').val('1');
		        		saveCampaignApprovalStatus($('#campaignBulkApprovalForm'), 'AP');
					}
		        }
	    	});
		} else {
			alertify.error('Input Remarks');
		}
	}).on('click', '#bulkRejectCampaignBtn', function(event){
		var bootstrapValidator=$("#campaignBulkApprovalForm").data("bootstrapValidator");
		bootstrapValidator.resetForm();
		bootstrapValidator.validate(); 
		if (bootstrapValidator.getInvalidFields().length <= 0) {
			bootbox.confirm({
				message: '<span style="font-size: large">Are you sure you want to Reject the selected campaigns?</span>',
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
						$('#bulkApprovalStatus').val('0');
						saveCampaignApprovalStatus($('#campaignBulkApprovalForm'), 'RJ');
					}
				}
			});
		} else {
			alertify.error('Input all required fields');
		}
	});
	
	$('#campaignApprovalForm').bootstrapValidator({
		excluded: ':disabled',
		fields: {
			'remarks': {
				group: '.col-md-7',
				validators: {
					notEmpty: { 
						message: "Enter your Remarks"
					}
				}
			}
		}
	
	}).on('click', '#approveCampaignBtn', function(event){
		var bootstrapValidator=$("#campaignApprovalForm").data("bootstrapValidator");
		bootstrapValidator.resetForm();
		bootstrapValidator.validate();
		if (bootstrapValidator.getInvalidFields().length <= 0) {
			bootbox.confirm({
				message: '<span style="font-size: large">Are you sure you want to approve this campaign?</span>',
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
						$('#approvalStatus').val('1');
						saveCampaignApprovalStatus($('#campaignApprovalForm'), 'AP');
					}
				}
			});
		} else {
			alertify.error('Input Remarks');
		}
	}).on('click', '#rejectCampaignBtn', function(event){
		var bootstrapValidator=$("#campaignApprovalForm").data("bootstrapValidator");
		bootstrapValidator.resetForm();
		bootstrapValidator.validate(); 
		if (bootstrapValidator.getInvalidFields().length <= 0) {
			bootbox.confirm({
				message: '<span style="font-size: large">Are you sure you want to Reject this campaign?</span>',
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
						$('#approvalStatus').val('0');
						saveCampaignApprovalStatus($('#campaignApprovalForm'), 'RJ');
					}
				}
			});
		} else {
			alertify.error('Input all required fields');
		}
	});
	
	$('#campaignListTBody').on('click', '.open-campaign-page', function(){
		/*$('#openCampaignId').val($(this).data('campaignid'));
		$('#openLayoutId').val($(this).data('layoutid'));
		$('#openShareFlag').val($(this).data('shareflag'));
		$('#openCampaignForm')[0].submit();*/
		getContentLayout($(this).data('campaignid'), $(this).data('layoutid'),$(this).data('shareflag'));
		if($(this).closest('tr').find('.campaignId').length>0) {
			$('#formDataDiv').show();
		} else {
			$('#formDataDiv').hide(); 
		}
	});
	
	getCampaignListForApproval();
});

function getCampaignListForApproval(){
	$.ajax({
		url: getContextPath() + "/get-campaign-list-for-approval",
		type: "POST",
		dataType: "json",
		success: function(response) {
			console.log('response', response);
			if(response) {
				var tableRow='';
				$.each(response, function(i, data){
					tableRow+='<tr>'
						+'<td class="text-center">'+(data.approvalStatus=='Pending'?'<input type="checkbox" id="campaignIdCheck'+i+'" class="campaignId" name="campaignData['+i +'].campaignId" style="height:20px;width:20px ;" value="'+data.campaignId+'" />':'')+'</td>'
						+'<td style="max-width:30vh;">'+data.agencyName.substring(0,20)
						+'<input type="hidden" id="slotStartTime'+i+'" class="slotStartTime" value="'+data.startTime+'"/></td>'
						+'<td>'+data.ownerUserId+'</td>'
						+'<td>'+data.campaignId+'</td>'
						+'<td>'+data.campaignName+'</td>'
						+'<td>'+(data.shareFlag=='S'?'Screen Share':'Time Share')+'</td>'
						+'<td>'+(data.creationDate!=null?data.creationDate:'')+'</td>'
						+'<td class="bold-text text-center">'+getApprovalStatusCss(data.approvalStatus)+'</td>'
						+'<td><a href="#" class="open-campaign-page text-primary" data-campaignid="'+data.campaignId+'" data-layoutid="'+data.layoutId+'" data-shareflag="'+data.shareFlag+'"> View</a></td>'
						+'</tr>'; 
				});
				$('#campaignListTBody').empty();
				$('#campaignListTBody').append(tableRow);
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

function getCampaignDetails(campaignId){
	$.ajax({
		url: getContextPath() + "/get-campaign-details",
		type: "POST",
		dataType: "json",
	  	data: {campaignId: campaignId},
		success: function(response) {
			console.log('response', response);
			if(response) {
				$('#campaignId').val(campaignId);
				if(response.shareFlag=='S') {
					$.each(response.contents, function(i, data){
						var j=parseInt(data.sectionId)-1;
						$('#mediaObject'+j).attr('data', getContextPath()+'/image/?variable1='+data.contentId+'&variable2='+data.contentFormat+'&variable3='+data.contentStoragePath);
					});
					/*shivam */
					  var soundBtns = document.querySelectorAll('.row .soundBtn');
					  soundBtns.forEach(function(btn) {
			            btn.style.display = 'none';
			          })
					  if (response.tickerFlag === 1 && response.tickerPosition === 'B') {
                         
                            var specifiedRow = document.querySelector('.row.hidden.BT.example1');
                            if (specifiedRow) {
								var soundBtns = document.querySelectorAll('.row.hidden.BT.example1 .soundBtn');
                                
						        soundBtns.forEach(function(btn) {
						            btn.style.display = 'none';
						        });
							    var specifiedIndex = Array.from(specifiedRow.parentNode.children).indexOf(specifiedRow);
							    var rowAbove = specifiedRow.parentNode.children[specifiedIndex - 1];
							    var secondRowAbove = specifiedRow.parentNode.children[specifiedIndex - 2];
					            if (rowAbove && rowAbove.classList.contains('row') && response.layoutId !=="LAY0003" && response.layoutId !=="LAY0004" && response.layoutId !=="LAY0011"  && response.layoutId !=="LAY0013") {
							        rowAbove.style.height = '45%';
							    }
							     else{
									 rowAbove.style.height = '91%';
								}
							    if (secondRowAbove && secondRowAbove.classList.contains('row')  && response.layoutId !=="LAY0003" && response.layoutId !=="LAY0004"&& response.layoutId !=="LAY0011" && response.layoutId !=="LAY0013") {
							        secondRowAbove.style.height = '45%';
							    }
							     else{
									 secondRowAbove.style.height = '91%';
								}
                           }

                            $('.BT').removeClass('hidden');
                            $('#BTcontent').text(response.tickerContent).css('color', 'white');
                            
    
                           }
                           
                          if (response.tickerFlag === 1 && response.tickerPosition === 'T') {
                          console.log("top");
                          // $('.BT').removeClass('hidden');
                            console.log("response.tickerContent",response.tickerContent);
                            var specifiedRow = document.querySelector('.row.hidden.TT.example1');
							
							if (specifiedRow) {
								
							    var specifiedIndex = Array.from(specifiedRow.parentNode.children).indexOf(specifiedRow);
							    var rowAbove = specifiedRow.parentNode.children[specifiedIndex + 1];
							    var secondRowAbove = specifiedRow.parentNode.children[specifiedIndex + 2];
					            if (rowAbove && rowAbove.classList.contains('row') && response.layoutId !=="LAY0003" && response.layoutId !=="LAY0004" && response.layoutId !=="LAY0011") {
							        rowAbove.style.height = '45%';
							    }
							    else{
									 rowAbove.style.height = '91%';
								}
							    if (secondRowAbove && secondRowAbove.classList.contains('row') && response.layoutId !=="LAY0003" && response.layoutId !=="LAY0004"&& response.layoutId !=="LAY0011") {
							        secondRowAbove.style.height = '45%';
							    }
							    else{
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
						var storagePath=getContextPath()+'/image/?variable1='+data.contentId+'&variable2='+data.contentFormat+'&variable3='+data.contentStoragePath;
						switch (data.contentTypeCode) {
							case 'I':
								$carouselItem.html('<img src="' + storagePath + '" class="d-block w-100" alt="..." style="height: 60vh; object-fit: contain;">');
								break;
							case 'V':
								$carouselItem.html('<video src="' + storagePath + '" class="d-block w-100" preload="metadata" controls>')
								break;
							case 'A':
							default: $carouselItem.html('<object data="' + storagePath + '" class="d-block w-100">')
						}
					});
				}
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

function getContentLayout(campaignId, layoutId, shareFlag) {
	$.ajax({
		url: getContextPath() + "/get-content-layout",
		async: false,
	  	type: "POST",
	  	data: {layoutId: layoutId, shareFlag: shareFlag, operation: 'A'},
	  	success: function(response) {
	  		$('#previewCampaignModal').modal('show');
	  		$('#campaignPreviewDiv').html(response);
	  		getCampaignDetails(campaignId);
	  		
	  	}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

function saveCampaignApprovalStatus($empForm, status) {
	var mediaIdList = [];
	var formData = new FormData();
	var other_data = $empForm.serializeArray();
    $.each(other_data,function(key,input){
    	formData.append(input.name,input.value);
    });
	$.ajax({
		url: getContextPath() +'/save-campaign-approval-status',
		type: "post",
		data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
        	if(result) {
        		var response=JSON.parse(result);
        		if(response.respCode=='0') {
					bootbox.alert({
						message: '<span style="font-size:large">Campaign has been '+(status=='AP'?'Approved':'Rejected')+' successfully!</span>',
						callback: function () {
							location.reload();
						}
					});
        		}
        		$('.bootbox-close-button').remove(); 
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

function getApprovalStatusCss(status) {
	switch(status) {
	
	case 'Approved': return '<span class="text-success"><i class="fa fa-check"></i> Approved</span>'; break;
	case 'Rejected': return '<span class="text-danger"><i class="fa fa-times"></i> Rejected</span>'; break;
	case 'Not Required': return '<span class="text-primary">Not Required</span>'; break;
	case 'Pending': return '<span class="text-warning">Pending</span>'; break;
	default: return status;
	}
}