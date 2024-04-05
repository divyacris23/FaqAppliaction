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
		switch (layoutId) {

			case 'LAY0001':
				$('.mediaOwnerObject').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
				$('.mediaPartnerObject').attr('data', getContextPath() + '/resources/img/adSpace501.png');

			case 'LAY0101':
				$('.mediaOwnerObject').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
				$('.mediaPartnerObject').attr('data', getContextPath() + '/resources/img/adSpace501.png');

		
				break;
			default:
				;
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
					$carouselItem.html('<video src="' + $(obj).attr('data') + '" class="d-block w-100" preload="metadata" controls>')
					break;
				case 'A':
					break;
				default:
			}
		});

	});

	$('#timeShareCampaign').bootstrapValidator({
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
			}
        }
		
	}).on('click', '#submitCampaignBtn', function(event){
		$('#formErrorMessage').empty();
		var bootstrapValidator=$("#timeShareCampaign").data("bootstrapValidator");
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
		var bootstrapValidator=$("#timeShareCampaign").data("bootstrapValidator");
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
		var bootstrapValidator=$("#timeShareCampaign").data("bootstrapValidator");
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
	
	$('#addTimeShare').click(function() {
		addTimeShareDiv($(this));
	});

	$('.filmstrip').on('click', '.delTimeShare', function() {
		$(this).closest('.timeShareDiv').remove();
		renameTimeShareDivs();
	});
	
	if(campaignId) {
		$('#addTimeShare').hide();
		getCampaignDetails(campaignId);
	}

});

function saveCampaignDetails() {
	var mediaIdList = [];
	var formData = new FormData();
	var other_data = $('#timeShareCampaign').serializeArray();
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
	console.log("drag draggedMediaPath " + draggedMediaPath);
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

function addTimeShareDiv($addBtn) {
	var prNum = $('.filmstrip .timeShareDiv').length;
	$('#timeShareDiv0').clone().insertBefore($addBtn)
		.attr('id', 'timeShareDiv' + prNum)
		.css('margin-left', '10px')
		.css('position', 'relative')
		.css('border', '2px solid #f5365c')
		.find('input,select,textarea').each(function() {
			$(this).removeAttr('disabled');
			$(this).val(null);
		});
	$('#timeShareDiv' + prNum).find('div').each(function() {
		$(this).attr('id', $(this).attr('id').replace(/\d+/, prNum));
	});
	$('#timeShareDiv' + prNum).find('.ownerSpaceDiv').find('input,select,textarea, object').each(function() {
		$(this).attr('id', $(this).attr('id').replace(/\d+/, (prNum*2) ));
		if($(this).attr('name')) {
			$(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, "[" + (prNum*2) + "]"));
		}
	});
	$('#timeShareDiv' + prNum).find('.adSpaceDiv').find('input,select,textarea, object').each(function() {
		$(this).attr('id', $(this).attr('id').replace(/\d+/, (prNum*2+1) ));
		if($(this).attr('name')) {
			$(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, "[" + (prNum*2+1) + "]"));
		}
	});
	
	$('#timeShareDiv' + prNum + ' .ownerSpaceObject').attr('data', getContextPath() + '/resources/img/ownerSpace501.png');
	$('#timeShareDiv' + prNum + ' .adSpaceObject').attr('data', getContextPath() + '/resources/img/adSpace501.png');
	$('#timeShareDiv' + prNum+' .playSound').val('Y');
	$('#timeShareDiv' + prNum+' .sectionId').val('1');
	$('#ownerSpaceDiv' + prNum+' .frameId').val(prNum*2+1);
	$('#adSpaceDiv' + prNum+' .frameId').val(prNum*2+2);
	
	$('<a href="#" class="delTimeShare btn btn-xs btn-danger" style="position: absolute; top: 0; right: 0; padding: 0.4rem;"><i class="fa fa-trash"></i></a>').appendTo($('#timeShareDiv' + prNum));
}

function renameTimeShareDivs() {
	$('.timeShareDiv').each(function(i, div) {
		$(this).attr('id', 'timeShareDiv' + i)
		$(this).find('.ownerSpaceDiv').find('input,select,textarea, object').each(function() {
			$(this).attr('id', $(this).attr('id').replace(/\d+/, (i*2) ));
			if($(this).attr('name')) {
				$(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, "[" + (i*2) + "]"));
			}
		});
		$(this).find('.adSpaceDiv').find('input,select,textarea, object').each(function() {
			$(this).attr('id', $(this).attr('id').replace(/\d+/, (i*2+1) ));
			if($(this).attr('name')) {
				$(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, "[" + (i*2+1) + "]"));
			}
		});
		$(this).find('div').each(function() {
			$(this).attr('id', $(this).attr('id').replace(/\d+/, i));
		});
		$(this).find('.ownerSpaceDiv').find('.frameId').val(i*2+1 );
		$(this).find('.adSpaceDiv').find('.frameId').val(i*2+2);
	});
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
				
				divHtml+='<div class="col-lg-4 col-md-6 col-sm-6">'
					+'<div class="card draggable-card content-card" draggable="true" ondragstart="handleDragStart(event, \'' + data.contentId+'\',\''+data.contentFormat+'\',\''+data.storagePath+'\', \''+data.contentTypeCode+'\',\'Y\' )">'
						+'<div class="card-header content-card-header" data-toggle="tooltip" data-placement="top" title="'+data.contentName+'">'
							+'<b>'+data.contentName.substring(0,15)+'</b>: '+data.contentTypeCode
						+'</div>'
						+'<div class="card-body" style="padding: 3px;">'
							+mediaTag
						+'</div>'
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
				var len=response.contents.length;
				var frameNo=response.contents[len-1].frameId;
				for(i=1;i<(frameNo/2); i++){
					$('#addTimeShare').trigger('click');
				}
				
				$.each(response.contents, function(i, data){
					var j=parseInt(data.frameId)-1;
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
	var other_data = $('#timeShareCampaign').serializeArray();
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