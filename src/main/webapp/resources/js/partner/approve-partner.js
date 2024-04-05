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

var selectedPartnersList = [];

$("#successUpload").click(function(event) {
	location.reload();
});

function selectedSignedUpPartner() {
	console.log('inside checkboxes');
	var selectedPartners = document.querySelectorAll('input[name="selectedSignedUpPartner"]:checked');

	selectedPartnersList = [];

	selectedPartners.forEach(function(checkbox) {
		var partnermobileid = checkbox.value;
		selectedPartnersList.push(partnermobileid);
	});

	console.log('selectedPartnersList devices in JSON format123:', selectedPartnersList);
	var jsonPartnerList = JSON.stringify({
		selectedPartnersList
	});
	console.log('partnerList devices in JSON format:', typeof(jsonPartnerList));

	return jsonPartnerList;

}

function getContextPath() {
	return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}
// Add event listeners to trigger filtering when inputs change
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

});

$('#approvePartner').on("click", function() {

	var remarks = $("#remarks").val();
	console.log("remarks>>>" + remarks);
	if (remarks.trim() === '') {
		console.log("Remarks is empty");
		alertify.error('Remarks field is empty');
		return;
	}
	var partnerListToApprove = selectedSignedUpPartner()
	console.log("partnerListToApprove>>>" + partnerListToApprove);
	if (partnerListToApprove === '{"selectedPartnersList":[]}') {
		console.log("Remarks is empty");
		alertify.error('Select atleast 1 partner');
		return;
	}
	console.log("calling approvePartner click");

	$.ajax({
		url: getContextPath() + "/approveSubmit",
		type: "POST",
		dataType: "json",

		data: {

			remarks: remarks,
			partnerList: partnerListToApprove,

		},

		success: function(json) {

			bootbox.alert({
				message: '<span style="font-size:large;color:green">Selected partners are approved </span>',
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
				message: '<span style="font-size:large;color:red">Unable to approve partner!! Please try after some time. </span>',
				callback: function() {
					location.reload();

				}
			});

			console.log("error inside ajax");
			//location.reload(true);
		}

	});

});