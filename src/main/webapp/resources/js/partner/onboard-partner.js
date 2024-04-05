document.addEventListener('DOMContentLoaded', function() {
	var tbody = document.querySelector('#myTable tbody');

	for (var i = 0; i < tbody.rows.length; i++) {
		var row = tbody.rows[i];

		for (var j = 1; j < row.cells.length; j++) {
			var cell = row.cells[j];
			var text = cell.innerText;
			var titleCaseText = text.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
				return match.toUpperCase();
			});

			cell.innerText = titleCaseText;
		}
	}
});

function getContextPath() {
	return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}
// Add event listeners to trigger filtering when inputs change

var campaignApproval = "1";
var templateCreation = "1";
var ownerContent = "0";

$(document).ready(function() {
	$("#prgsModal").modal('hide');
	$("#myTable").DataTable({
		language: {
			paginate: {
				next: '&#8594;',
				previous: '&#8592;'
			}
		}
	});
	$('#campApp').change(function() {

		if ($(this).is(':checked')) {
			campaignApproval = "1";

		} else {

			campaignApproval = "0";
		}
	});

	$('#conSel').change(function() {
		if ($(this).is(':checked')) {
			ownerContent = "1";
		} else {
			ownerContent = "0";
		}
	});

	$('#tempCreat').change(function() {

		if ($(this).is(':checked')) {
			templateCreation = "1";
		} else {

			templateCreation = "0";
		}
	});

});

function storeOnboardParner() {
	console.log('inside storeOnboardParner');
	var approvedPartners = document.querySelectorAll('input[name="selectedApprovedPartners"]:checked');
	var onboardPartnersList = [];

	approvedPartners.forEach(function(checkbox) {
		var approvedpartnermobileid = checkbox.value;
		var partners = {
			"partnerId": approvedpartnermobileid
		};
		onboardPartnersList.push(partners);
	});

	var jsonOnBoardPartnerList = JSON.stringify({
		"partnerData": onboardPartnersList
	});

	console.log('Selected devices in JSON format:', jsonOnBoardPartnerList);
	return jsonOnBoardPartnerList;

}
$("#successUpload").click(function(event) {
	location.reload();
});

function storeOnboardParner2() {
	console.log("storeOnboardParner2>>>");

	var approvedPartners = document.querySelectorAll('input[name="selectedApprovedPartners"]:checked');

	var onboardPartnersList = [];
	console.log("ap>>" + approvedPartners);
	approvedPartners.forEach(function(checkbox) {
		var partnerId = checkbox.value;
		var campaignApprovalFlag = campaignApproval;
		var campaignTemplateFlag = templateCreation;
		var ownerContentFlag = ownerContent;
		var timeShareFrequency = $("#timeFreq").val();
		var remarks = $("#remarks").val();

		var partnerData = {
			"partnerId": partnerId,
			"campaignApprovalFlag": campaignApprovalFlag,
			"campaignTemplateFlag": campaignTemplateFlag,
			"ownerContentFlag": ownerContentFlag,
			"timeShareFrequency": timeShareFrequency,
			"remarks": remarks
		};
		console.log("partnerData>>>" + JSON.stringify(partnerData));

		onboardPartnersList.push(partnerData);
	});
	console.log("onboardPartnersList>>>" + JSON.stringify(onboardPartnersList));
	return onboardPartnersList;
}

$('#onboardPartnerSubmit').on("click", function() {
	console.log("inside onbrdpartn>>>");
	var approvedPartners = document.querySelectorAll('input[name="selectedApprovedPartners"]:checked');
	if (approvedPartners.length === 0) {
		alertify.error('Select atleast 1 partner to onboard');
		return;
	}
	var remarks = $("#remarks").val();
	if (remarks.trim() === '') {
		alertify.error('Remarks field is empty');
		return; // or handle the empty remarks case accordingly
	}
	var partnerListToOnboard = storeOnboardParner2();
	var partnerListToOnboard2 = partnerListToOnboard;
	console.log("partnerListToOnboard>>>" + partnerListToOnboard2);

	/* var remarks=$("#remarks").val(); 
	  console.log("remarks>>>"+ remarks);
	  
	  var campApp=campaignApproval; 
	  console.log("campApp>>>"+ campApp);
	  
	  var conSel=ownerContent; 
	  console.log("conSel>>>"+ conSel);
	  
	  var tempCreat=templateCreation; 
	  console.log("tempCreat>>>"+ tempCreat);
	  
	  var timeFreq=$("#timeFreq").val(); 
	  console.log("timeFreq>>>"+ timeFreq);
	  
	
	  var partnerListToOnboard = storeOnboardParner();
	  console.log("partnerListToOnboard>>>"+ partnerListToOnboard); */

	console.log("calling onboard partner click");

	$.ajax({
		url: getContextPath() + "/onboardPartnerSubmit",
		type: "POST",
		dataType: "json",
		contentType: "application/json",
		/*  data : {
		    	 
			  userId: "8130797444",
		    	 partnerList: partnerListToOnboard2,
		    	 
		     }, */

		data: JSON.stringify(partnerListToOnboard2),

		success: function(json) {
			console.log("inside submitParnerDetails ajax success ");
			bootbox.alert({
				message: '<span style="font-size:large;color:green">Selected partners are Onboarded !! </span>',
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
				message: '<span style="font-size:large;color:red">Unable to onboard partner!! Try after some time. </span>',
				callback: function() {
					location.reload();

				}
			});
			console.log("error inside ajx");
			//location.reload(true);
		}
	});

});