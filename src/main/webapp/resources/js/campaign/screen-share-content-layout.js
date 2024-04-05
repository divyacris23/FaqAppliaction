/**
 * 
 */

$(document).ready(function() {
	
	$('#complianceCheck').change(function() {
		if ($(this).is(':checked')) {
			$('#submitCampaignBtn').removeAttr('disabled');
		} else {
			$('#submitCampaignBtn').attr('disabled', true);
		}
	});
	
	$('#location').change(function() {
		$('#locationLevel').val($(this).find('option:selected').data('level'));
		$('#subscriberContentDiv').empty();
		$('#clearLayout').click();
		if($(this).val()){
			getSubscriberContent($(this).val(), $(this).find('option:selected').data('level'));
		}
	});
	
	$('#tickerPosition').change(function() {
		if($(this).val()=='0') {
			$('#tickerContentDiv').hide();
			$('#tickerContent').val(null).attr('disabled', true);
		} else {
			$('#tickerContentDiv').show();
			$('#tickerContent').removeAttr('disabled');			
		}
	});
	
	$('#clearLayout').click(function() {
		$('.droppedMediaObject').empty();
		$('.content-inputs').val(null);
		$('.playSound').val('Y');
		$('.soundBtn').html('<i class="mdi mdi-volume-high"></i>');
		switch(layoutId) {
		case 'LAY0003': 
			$('#mediaObject0').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
			$('#mediaObject1').attr('data', getContextPath() + '/resources/img/adSpace501.png');
			break;
		case 'LAY0004': 
			$('#mediaObject0').attr('data', getContextPath() + '/resources/img/adSpace501.png');
			$('#mediaObject1').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
			break;
		case 'LAY0005': 
			$('#mediaObject0').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
			$('#mediaObject1').attr('data', getContextPath() + '/resources/img/adSpace501.png');
			break;
		case 'LAY0006': 
			$('#mediaObject0').attr('data', getContextPath() + '/resources/img/adSpace501.png');
			$('#mediaObject1').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
			break;
		case 'LAY0007': 
			$('#mediaObject0').attr('data', getContextPath() + '/resources/img/ownerSpace502.png');
			$('#mediaObject1').attr('data', getContextPath() + '/resources/img/adSpace502.png');
			break;
		case 'LAY0008': 
			$('#mediaObject0').attr('data', getContextPath() + '/resources/img/adSpace502.png');
			$('#mediaObject1').attr('data', getContextPath() + '/resources/img/ownerSpace502.png');
			break;
		case 'LAY0013': 
			$('#mediaObject0').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
			$('#mediaObject1').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
			break;
		case 'LAY0011': 
			$('#mediaObject0').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
			break;
		default: ;
		}
	});
	
	$('.soundBtn').click(function() {
		if($(this).hasClass('btn-success')) {
			$(this).removeClass('btn-success');
			$(this).addClass('btn-danger');
			$(this).html('<i class="mdi mdi-volume-off"></i>');
			$(this).closest('div').find('.playSound').val('N');
			$(this).closest('div').find('video').attr('muted', true);
		} else {
			$(this).removeClass('btn-danger');
			$(this).addClass('btn-success');
			$(this).html('<i class="mdi mdi-volume-high"></i>');
			$(this).closest('div').find('.playSound').val('Y');
			$(this).closest('div').find('video').removeAttr('muted');
			
		}
	});
	
	$('#previewCampaign').click(function() {
		$('#previewCampaignModal').modal('show');
		$('.carousel-item').not(':first').remove();
		$('.carousel-item').empty();
		$('.droppedMediaObject').each(function(i, obj) {
			var $carouselItem;
			if (i == 0) {
				$carouselItem = $('.carousel-item');
			} else {
				$carouselItem = $('.carousel-item:first').clone();
				$carouselItem.removeClass('active');
				$carouselItem.empty();
				$carouselItem.appendTo('.carousel-inner');
			}
			switch ($(obj).data('mediatype')) {
				case 'I':
					$carouselItem.html('<img src="' + $(obj).attr('data') + '" class="d-block w-100" alt="..." style="height: 60vh; object-fit: contain;">');
					break;
				case 'V':
					$carouselItem.html('<video src="' + $(obj).attr('data') + '" class="d-block w-100" controls preload="metadata">')
					break;
				case 'A':
					break;
				default:
			}
		});

	});

	$('#screenShareCampaign').bootstrapValidator({
    	excluded: ':disabled',
        fields: {
        	location: {
            	group: '.col-md-5',
        		validators: {
        			notEmpty: { 
                        message: "Select Location"
                    }
        		}
        	},
        	campaignName: {
            	group: '.col-md-5',
				validators: {
					notEmpty: { 
						message: "Enter Campaign Name"
					}
				}
			},
			tickerContent: {
        		group: '.col-md-5',
        		validators: {
        			notEmpty: { 
        				message: "Enter Ticker Content"
        			}
        		}
        	},
        	remarks: {
        		group: '.col-md-7',
        		validators: {
        			notEmpty: { 
        				message: "Enter Remarks"
        			}
        		}
        	}
        }
		
	}).on('click', '#submitCampaignBtn', function(event){
		$('#formErrorMessage').empty();
		var bootstrapValidator=$("#screenShareCampaign").data("bootstrapValidator");
		bootstrapValidator.resetForm();
		bootstrapValidator.validate();
		$('#subscriberContentAttached').val('1');
		$('.ownerSpaceDiv .contentId').each(function(i, obj){
			if(!$(obj).val()) {
				$('#subscriberContentAttached').val('0');
				return false;
			}
		});
		var isValid=true;
		$('.adSpaceDiv .contentId').each(function(i, obj){
			if(!$(obj).val()) {
				isValid=false;
				return false;
			}
		});
		if(!isValid) {
			$('#formErrorMessage').html('<br>Kindly upload content in all Ad Spaces<br>');
			return false;
		}
		if (bootstrapValidator.getInvalidFields().length <= 0) {
			bootbox.confirm({
				message: '<span style="font-size: large">Are you sure you want to save this Campaign?',
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
		        		saveCampaignDetails();
					}
		        }
	    	});
		} else {
			alertify.error('Input all required fields');
		}
	}).on('click', '#approveCampaignBtn', function(event){
		$('#formErrorMessage').empty();
		var bootstrapValidator=$("#screenShareCampaign").data("bootstrapValidator");
		bootstrapValidator.resetForm();
		bootstrapValidator.validate();
		var isValid=true;
		$('.ownerSpaceDiv .contentId').each(function(i, obj){
			if(!$(obj).val()) {
				isValid=false;
				return false;
			}
		});
		if(!isValid) {
			$('#formErrorMessage').html('<br>Kindly upload content in all Subscriber Spaces<br>');
			return false;
		}
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
						$('#approvedFlag').val('1');
						saveCampaignApprovalDetails();
					}
				}
			});
		} else {
			alertify.error('Input Remarks');
		}
	}).on('click', '#rejectCampaignBtn', function(event){
		var bootstrapValidator=$("#screenShareCampaign").data("bootstrapValidator");
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
						$('#approvedFlag').val('0');
						saveCampaignApprovalDetails();
					}
				}
			});
		} else {
			alertify.error('Input all required fields');
		}
	});

	if(campaignId) {
		getCampaignDetails(campaignId);
	}
	
});
var mediaid1 = "";

function saveCampaignDetails() {
	var mediaIdList = [];
	var formData = new FormData();
	var other_data = $('#screenShareCampaign').serializeArray();
    $.each(other_data,function(key,input){
    	formData.append(input.name,input.value);
    });
	$.ajax({
		url: getContextPath() +'/save-campaign-details',
		type: "post",
		data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
			if(result && JSON.parse(result).respMessage=='success') {
				bootbox.alert({
					message: 'Campaign details have been saved successfully!',
					callback: function () {
						location.reload();
					}
				});
			} else {
				alertify.error('Some error occurred while saving the campaign details. Please try after some time')
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error('Some error occurred while saving the campaign details. Please try after some time');
		}
	});
}

var draggedMediaPath = "",
	draggedMediaId = "",
	draggedMediaType = "",
	forRly = ''; // Stores the path of the dragged media

function handleDragStart(event, mediaId, mediaFormat, storagePath, mediaTypeCode, isRlyContent) {
	draggedMediaPath = getContextPath() + "/image/?variable1=" + mediaId + "&variable2=" + mediaFormat + "&variable3=" + storagePath;
	console.log("drag draggedMediaPath " + draggedMediaPath,'isRlyContent:',isRlyContent);
	forRly = isRlyContent;
	draggedMediaId = mediaId;
	draggedMediaType = mediaTypeCode;
}

function handleDragOver(event) {
	event.preventDefault();
}

function handleDrop(event, dropDiv, rlyDiv) {
	event.preventDefault();
	$(dropDiv).empty();
	console.log('rlyDiv:',rlyDiv,'forRly:',forRly);
	if (rlyDiv == forRly) {
		if (draggedMediaPath !== "") {
			$(dropDiv).attr('data', draggedMediaPath);
			$(dropDiv).attr('data-mediaid', draggedMediaId);
			$(dropDiv).attr('data-mediatype', draggedMediaType);
			draggedMediaPath = "";
			$(dropDiv).closest('div').find('.contentId').val(draggedMediaId);
			$(dropDiv).closest('div').find('.contentType').val(draggedMediaType);
		}
	} else {
		alertify.error('Kindly ensure to drop media in designated areas');
	}
}

function getSubscriberContent(location, locationLevel) {
	
	$.ajax({
		url: getContextPath() + "/get-subscriber-media-list",
		type: "POST",
		dataType: "json",
		data: {
			location: location,
			locationLevel: locationLevel
		},
		success: function(response) {
			var divHtml='';
			$.each(response, function(i, data){
				var mediaTag='';
				switch(data.contentTypeCode) {
				case 'V':
					mediaTag='<div id="'+data.contentId+'" style="object-fit: contain; background-image: url(\''+getContextPath().trim()+'/image/?variable1='+data.contentId+'&variable2=png&variable3=thumbnail\');background-size: contain;">'
								+'<img src="'+getContextPath()+'/resources/img/play-icon.png" alt="video" width="100%" style="object-fit: contain;">'
							+'</div>';
					break;
				default:
					mediaTag='<object data="'+getContextPath()+'/image/?variable1='+data.contentId+'&variable2='+data.contentFormat+'&variable3='+data.storagePath+'" id="'+data.contentId+'" type="image/jpg" width=100% height="100"></object>';
					break;
				}
				
 				divHtml+='<div class="card draggable-card content-card" draggable="true" ondragstart="handleDragStart(event, \'' + data.contentId+'\',\''+data.contentFormat+'\',\''+data.storagePath+'\', \''+data.contentTypeCode+'\',\'Y\' )">'
					+'<div class="card-header content-card-header" data-toggle="tooltip" data-placement="top" title="'+data.contentName+'">'
						+'<b>'+data.contentName.substring(0,15)+'</b>: '+data.contentTypeCode
					+'</div>'
					+'<div class="card-body" style="padding: 3px;">'
						+mediaTag
					+'</div>'
				+'</div>';
			});
			$('#subscriberContentDiv').html(divHtml);
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
				$('#campaignId').val(response.campaignId);
				$('#campaignName').val(response.campaignName);
				$('#location').val(response.locCode);
				$('#locationLevel').val(response.locationLevel);
				if(response.tickerFlag==1) {
					$('#tickerPosition').val(response.tickerPosition).change();
					$('#tickerContent').val(response.tickerContent);
				}
				$.each(response.contents, function(i, data){
					var j=parseInt(data.sectionId)-1;
					$('#mediaObject'+j).attr('data', getContextPath()+'/image/?variable1='+data.contentId+'&variable2='+data.contentFormat+'&variable3='+data.contentStoragePath);
					$('#contentId'+j).val(data.contentId);
					$('#contentType'+j).val(data.contentTypeCode);
					if(data.playSound){
						$('#playSound'+j).val('Y');
					} else {
						$('#playSound'+j).val('N');
						var $soundBtn=$('#playSound'+j).closest('div').find('.soundBtn')
						$soundBtn.removeClass('btn-success');
						$soundBtn.addClass('btn-danger');
						$soundBtn.html('<i class="mdi mdi-volume-off"></i>');
						$soundBtn.closest('div').find('video').attr('muted', true);
					}
				});
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error("Some error occured, please try again")
		}
	});
}

function saveCampaignApprovalDetails() {
	var formData = new FormData();
	var other_data = $('#screenShareCampaign').serializeArray();
    $.each(other_data,function(key,input){
    	formData.append(input.name,input.value);
    });
	$.ajax({
		url: getContextPath() +'/save-campaign-subscriber-content',
		type: "post",
		data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
			if(result && JSON.parse(result).respMessage=='success') {
				bootbox.alert({
					message: 'Campaign details have been saved successfully!',
					callback: function () {
						window.location=getContextPath()+'/addSubscriberContent';
					}
				});
			} else {
				alertify.error('Some error occurred while saving the campaign details. Please try after some time')
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error('Some error occurred while saving the campaign details. Please try after some time');
		}
	});
}

function updateCharacterCount1() {
       const textarea = document.getElementById('tickerContent');
       const charCount = document.getElementById('charCount');

       const typedChars = textarea.value.length;
     
       if (typedChars >=500) {
         charCount.innerText="Max limit reached";
         charCount.style.color = 'red';
           
       } else {
         charCount.style.color = 'black';
         charCount.innerText= "Count : "+typedChars +"/500";
       }
     }