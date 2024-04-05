$(document).ready(function(){
	
	
	
	$(".data-div").hide();
	$("#divUpload").show();
	$("#addSchd").click(function () {
		var len=$("#schdTbl tbody tr").length;
     $("#schdTbl").each(function () {
    	 var tds = '<tr id="scheduleRow'+len+'">';
         jQuery.each($('tr:last td', this), function () {
             tds += '<td>' + $(this).html() + '</td>';
         });
         tds += '</tr>';
         if ($('tbody', this).length > 0) {
             $('tbody', this).append(tds);
         } else {
             $(this).append(tds);
         }
     });
     
	});

     $("#optAudio").click(function () {
		 $("#fileTypeLbl").text('Upload Audio File (Max 25MB)');
		 $("#type").val("A");
	});
     $("#optVideo").click(function () {
		 $("#fileTypeLbl").text('Upload Video File (Max 900MB)');
		 $("#type").val("V");
	});
     $("#optText").click(function () {
		$("#fileTypeLbl").text('Upload Text (Image) File (Max 10MB)');
		$("#type").val("I");
	});
     
});
function saveContent()
{
	event.preventDefault();
	$('#error-alert').empty();
	$('#submit-upload-modal').attr('disabled', true);
 	var ministry=$( "#min option:selected" ).text();
	var rmrk=$("#rmrk").val();
	var cntnname=$("#name").val();
	var schdRemarks=$("#scheduleRemarks").val();
	var schdfrom=[];
	var origschdfrom=[];
	var schdto=[];
	var origschdto=[];
	var cntr=0;
	if(rmrk=='')
	{
		alert('Please describe the content first');
		return false;
	}
	if(ministry=='')
	{
		alert("Ministry can't be left blank");
		return false;
	}
	if(cntnname=='')
	{
		alert("Please name the attached file properly");
		return false;
	}
	if($("input[name=scheduleFlag]:checked").val()=='R' && schdRemarks=='')
	{
		alert("Please enter remarks for schedule");
		return false;
	}
	console.log('stattat',$("#states").val(),':');
	if(!$("#states").val().length>0)
	{
		alert("Please select states");
		return false;
	}
	$("input[name='txtDateTimeFrom']")  // for all checkboxes
	    .each(function() {  // first pass, create name mapping
	        var crntval = $(this).val();
	        origschdfrom[cntr]=crntval;
	        schdfrom[cntr]=convertDateFmt(crntval);
	        cntr++;
	    });
	cntr=0;
	$("input[name='txtDateTimeTo']")  // for all checkboxes
	    .each(function() {  // first pass, create name mapping
	        var crntval = $(this).val();
	        origschdto[cntr]=crntval;
	        schdto[cntr]=convertDateFmt(crntval);
	        cntr++;
	    });
	var htmlschdlist='';
	for(var i=0;i<cntr;i++)
	{
		if(new Date(origschdto[i]) <= new Date(origschdfrom[i]))
		{
			alert('Schedule Time To ('+origschdto[i].replace("T"," ")+') must be greater than Schedule Time From ('+origschdfrom[i].replace("T"," ")+')');
			return false;
		}
		if($("input[name=scheduleFlag]:checked").val()=='S' && origschdto[i].split("T")[0] != origschdfrom[i].split("T")[0])
		{
		alert('For across the dates schedules, please make two entries');
		return false;
		}
		htmlschdlist+=schdfrom[i]+' To '+schdto[i]+'<span class="badge badge-success text-light">'+getTimeDiff(origschdfrom[i],origschdto[i])+'</span><br>';
	}
	
	htmlschdlist+='</ul>';

	var filename = $('input[type=file]')[0].files.length ? $('input[type=file]')[0].files[0].name : "";
	var filesize= $('input[type=file]')[0].files.length ? Math.round(($('input[type=file]')[0].files[0].size)/(1024*1024)) : "";
	if($("input[name=scheduleFlag]:checked").val()=='S') {
		checkForOverlappingSchedule();
	} else {
		$('#submit-upload-modal').removeAttr('disabled');
	}
	$("#previewModal").modal('show');
	htmlstr='<div class="row">';
	htmlstr+='<div class="col-md-3 text-wrap">Ministry</div><div class="col-md-9">'+ministry+'</div>';
	htmlstr+='<div class="col-md-3 text-wrap">Remarks</div><div class="col-md-9" style="word-wrap: break-word">'+rmrk+'</div>';
	htmlstr+='<div class="col-md-3 text-wrap">File</div><div class="col-md-9">'+filename+' ('+filesize+' MB)</div>';
	
	if($("input[name=scheduleFlag]:checked").val()=='R') {
		htmlstr+='<div class="col-md-3 text-wrap">Instructions to play</div><div class="col-md-9">'+schdRemarks+'</div>';
	}
	htmlstr+='</div>';
	$("#divPreview").html(htmlstr);
	$("#timefrom").val(schdfrom.join(","));
	$("#timeto").val(schdto.join(","));
	$("#schdcont").val(cntr);
}

function hidePreview()
{
	$("#previewModal").modal('hide');
}
function submitUpload()
{
	$("#previewModal").modal('hide');
	/*$("#aLoading").click();*/
	$("#frmUpload").submit();
	$('#divMesg').html('').removeClass('text-danger text-success');
	$("#prgsModal .form-actions a").hide();
	$("#prgsModal").modal({backdrop: 'static', keyboard: false});
	$("#prgsModal").modal('show');
	/*setInterval(showUploadProgress, 1000);*/
}
function validateFile(cntl)
{
	   var fi = cntl;
	   var maxsize=0;
	    var validExtensions=[];
		// Check if any file is selected.
		if (fi.files.length > 0) {
			for (var i = 0; i <= fi.files.length - 1; i++) {

				var fsize = fi.files.item(i).size;
				var file = Math.round((fsize / (1024*1024)));
				// The size of the file.
				if($('#optVideo').is(':checked')) {
					maxsize=5120;
					validExtensions=["mp4"];
				}
				if($('#optAudio').is(':checked'))
				{
					maxsize=25;
					validExtensions=["mp3"];
				}
				if($('#optText').is(':checked'))
				{
					maxsize=10;
					validExtensions=["jpg","jpeg","png"];
				}

				if (file >= maxsize) {
					if($('#optVideo').is(':checked')) {
						alert("File of upto 1.5 GB can only be uploaded! Please reduce/compress the file size");
					} else {
						alert("File of upto "+maxsize+" MB can only be uploaded ! Please reduce/compress the file size");
					}
					$(cntl).val('');
					return false;
				}
			}
		}
		var file = $(cntl).val().split('.').pop();
		if (validExtensions.indexOf(file) == -1) {
			alert("File Formats Allowed : "+validExtensions.join(', '));
			$(cntl).val('');
			return false;
		}

		var filename = cntl.files.length ? cntl.files[0].name : "";
		$("#name").val(filename);
		$("#name").focus();
		$("#name").select();

}
function showProfile()
{
	$(".data-div").hide();
	$("#divProf").show();
}

function showAllMediaCount() {
	var myurl=getContextPath()+"/getAllMediaSmry";
	$.ajax({
		url : myurl,
		type : "POST",
		dataType : "json",
		async : true,
		success : function(result) {
			var cntr=0;
			var prevcid='';
			console.log('result', result);
			$.each(result, function(i, data) {
				console.log('in ooop', i, data);
				var val1=data.FILE_TYPE;
				var val2=data.COUNT;
				if(val1=="V") {
					$("#vidCount").text(val2);
				} else if(val1=="A") {
					$("#audCount").text(val2);
				} else if(val1=="I") {
					$("#textCount").text(val2);
				}
			});
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

function showUserMediaCount(userId) {
	var myurl=getContextPath()+"/getUserMediaSmry";
	$.ajax({
		url : myurl,
		type : "POST",
		dataType : "json",
		data: { userId: userId },
		async : true,
		success : function(result) {
			var cntr=0;
			var prevcid='';
			console.log('result', result);
			$.each(result, function(i, data) {
				console.log('in ooop', i, data);
				var val1=data.FILE_TYPE;
				var val2=data.COUNT;
				if(val1=="V") {
					$("#myVidCount").text(val2);
				} else if(val1=="A") {
					$("#myAudCount").text(val2);
				} else if(val1=="I") {
					$("#myTextCount").text(val2);
				}
			});
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

function getTimeDiff(start_time, end_time) {
	var diff =  Math.abs(new Date(end_time) - new Date(start_time));
	var seconds = Math.floor(diff/1000); //ignore any left over units smaller than a second
	var minutes = Math.floor(seconds/60);
	seconds = seconds % 60;
	var hours = Math.floor(minutes/60);
	minutes = minutes % 60;
	return hours + ":" + minutes + ":" + seconds;
}

function checkForOverlappingSchedule() {
	var timeFrom='', timeTo='', states='';
	$.each($('input[name="txtDateTimeFrom"]'), function(i, item){
		if(i==0) { timeFrom=$(item).val();  }
		else { timeFrom+=','+$(item).val(); }
	});
	
	$.each($('input[name="txtDateTimeTo"]'), function(i, item){
		if(i==0) { timeTo=$(item).val();  }
		else { timeTo+=','+$(item).val(); }
	});
	
	$.each($('#states').val(), function(i, item){
		if(i==0) { states=item;  }
		else { states+=','+item; }
	});
	
	$.ajax({
		url : getContextPath()+'/check-for-overlapping-schedule',
		type : "post",
		dataType : "json",
		data : { timeFrom: timeFrom , timeTo: timeTo, states: states },
		success : function(result) {
			if (result != null && result.result=='SUCCESS') {
				$('#submit-upload-modal').removeAttr('disabled');
				return true;
			} else {
				$('#error-alert').html(result.result+'<br>');
				$("#previewModal").modal('hide');
				return false;
			}
		}, beforeSend: function (xhr){
            xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
        }, error: function (jqXHR, exception) {
			alertify.error("Some error occurred. Please try again");
			$("#previewModal").modal('hide');
		}
	});
}

function isSafari() {
    return /^((?!chrome).)*safari/i.test(navigator.userAgent);
}

function showUploadProgress()
{
	console.log('calledddddd');
	$.ajax({
     url :  getContextPath()+'/get-file-upload-progress',
     type : "post",
     dataType : "json",
     data: {optn:'IRCDMA_UPLOAD_PROGRESS'},
     success : function(data) {
	 	console.log(data);
        var stts=data.ProgressMessage;
        var pctgupload=data.PctgUpload;
        $("#divMesg").html(stts);
        $("#prgsbar").css("width",pctgupload+"%");
    }, beforeSend: function (xhr){
        xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
    }, error: function (jqXHR, exception) {
		alertify.error("Some error occurred. Please try again");
	}
   });
}