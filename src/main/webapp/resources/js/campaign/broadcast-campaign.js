/* console.log('listStateDivDeviceCount'+JSON.stringify(listStateDivDeviceCount));
//Reference to the state select element
var stateSelect = $('#stateIdOneTimePlay');
var divisionSelect = $('#divisionOneTimePlay');


// Initialize the division options based on the initial state selection
updateDivisionOptions();

// Add an event listener to the state select element
stateSelect.on('change', function() {
    // Update the division options when the state selection changes
    updateDivisionOptions();
});

// Function to update the division options based on the selected state(s)
function updateDivisionOptions() {
    // Get the selected state(s)
    var selectedStates = stateSelect.val();
    
    // Clear existing options in the division dropdown
    divisionSelect.empty();

    // Create a default "Select Division" option
    divisionSelect.append($('<option>', {
        value: '',
        text: 'Select Division'
    }));
    
    if (selectedStates) {
        // Filter and populate division options based on the selected state(s)
        $.each(listStateDivDeviceCount, function(index, groupItem) {
            if (selectedStates.includes(groupItem.state)) {
                console.log('groupItem.divisionCode: ' + groupItem.divisionCode);
                divisionSelect.append($('<option>', {
                    value: groupItem.divisionCode,
                    text: groupItem.divisionCode+'('+groupItem.state+')'
                }));
            }
        });
    }
    $('#divisionOneTimePlay').multiselect('rebuild');  
}
 */



function togglePlaynowButton() {
    var toggle = document.getElementById('togglefortickerOtp');
    if (toggle.checked) {
        console.log('togglePlaynowButton>>' + $('#tickerPositionOtp').text().trim());
        if ($('#complianceCheckOtp').is(':checked') && $('#stateIdOneTimePlay').val().length > 0 && $('#tickerPositionOtp').text().trim() !== 'Select') {
            $('#submitOneTimePLayBtn').prop('disabled', false);
        } else {
            $('#submitOneTimePLayBtn').prop('disabled', true);
        }
    } else {
        if ($('#complianceCheckOtp').is(':checked') && $('#stateIdOneTimePlay').val().length > 0) {
            $('#submitOneTimePLayBtn').prop('disabled', false);
        } else {
            $('#submitOneTimePLayBtn').prop('disabled', true);
        }
    }
}

function toggleScheduleButton() {
    var toggle = document.getElementById('togglefortickerSchedule');
    if (toggle.checked) {
        console.log('toggleScheduleButton>>' + $('#tickerPositionSchedule').text().trim());
        if ($('#complianceCheckSchedule').is(':checked') && $('#stateIdIdSchedule').val().length > 0 && $('#tickerPositionSchedule').text().trim() !== 'Select') {
            $('#submitScheduleBtn').prop('disabled', false);
        } else {
            $('#submitScheduleBtn').prop('disabled', true);
        }
    } else {
        if ($('#complianceCheckSchedule').is(':checked') && $('#stateIdIdSchedule').val().length > 0) {
            $('#submitScheduleBtn').prop('disabled', false);
        } else {
            $('#submitScheduleBtn').prop('disabled', true);
        }
    }
}

var tickerPositionOtp1 = "";
$(".dropdown-item").on('click', function(event) {
    // Get the content of the clicked dropdown item
    var selectedItemContent = $(this).html();
    console.log('in ropdown-item tickerOtpValue');
    tickerPositionOtp1 = $(this).attr('data-value');
    console.log('tickerPositionOtp1>>>' + tickerPositionOtp1);
    $(window).scrollTop(0);
    // Set the content of the button to the content of the clicked dropdown item
    setTimeout(function() {
        $("#tickerPositionOtp").html(selectedItemContent);
        togglePlaynowButton();
    }, 100);
});

var tickerPositionSchedule1 = "";
$(".dropdown-item").on('click', function(event) {
    // Get the content of the clicked dropdown item
    var selectedItemContent = $(this).html();
    console.log('in ropdown-item tickerPositionSchedule1');
    tickerPositionSchedule1 = $(this).attr('data-value');
    console.log('tickerPositionSchedule1>>>' + tickerPositionSchedule1);
    $(window).scrollTop(0);
    // Set the content of the button to the content of the clicked dropdown item
    setTimeout(function() {
        $("#tickerPositionSchedule").html(selectedItemContent);
        toggleScheduleButton();
    }, 100);

});




$('#stateIdOneTimePlay').change(function() {
    var selectedOptions = $(this).find("option:selected");
    var totalCount = 0;
    selectedOptions.each(function() {
        var devCount = parseInt($(this).data("noofdevice"), 10);
        if (!isNaN(devCount)) {
            totalCount += devCount;

        }
    });
    $('#countDeviceOtp').html('No. of seleced Devices :' + totalCount);
});


$('#stateIdIdSchedule').change(function() {
    var selectedOptions = $(this).find("option:selected");
    var totalCount = 0;
    selectedOptions.each(function() {
        var devCount = parseInt($(this).data("noofdevice"), 10);
        if (!isNaN(devCount)) {
            totalCount += devCount;

        }
    });
    $('#countDeviceSchedule').html('No. of seleced Devices :' + totalCount);

});

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

$('#scheduleSlotDiv').on('click', '.add-row', function() {
    addTimeSlotDiv($(this));
}).on('click', '.remove-row', function() {
    removeTimeSlotDiv($(this));
});

$('.scheduleSlotRow').on('change', '.startTimeSlot, .endTimeSlot', function() {
    var $row = $(this).closest('.scheduleSlotRow');
    $('.error-message').hide();
});
$('#closebtnModalforContent').on('click', function(e) {
    console.log('closebtnModalforContent clicked');
    $('#ModalforContent').hide();

});
$('#closeIconModalforContent').on('click', function(e) {
    console.log('closeIconModalforContent clicked');
    $('#ModalforContent').hide();

});
$('#playOnScreen').on('click', function(e) {
    console.log('playOnScreen clicked');
    var iframe = document.getElementById("liveVideoIframe");

    // Get a reference to the input field.
    var liveUrlInput = document.getElementById("liveURl");

    var src = iframe.getAttribute("src");

    var videoId = src.split("/embed/")[0];
    console.log(' videoId' + videoId);

    var urlInputString = liveUrlInput.value;
    console.log('urlInputString' + urlInputString);
    urlInputString = urlInputString.split('?v=')[1];
    console.log('urlInputString' + urlInputString);
    videoId = videoId + '/embed/' + urlInputString;
    console.log('new videoId' + videoId);
    iframe.setAttribute("src", videoId);
});

function addTimeSlotDiv($addBtn) {
    $('.error-message').hide();
    var prNum = $('.scheduleSlotDiv .scheduleSlotRow').length;

    // Check if the previous row's details are filled
    var $prevRow = $addBtn.closest('.scheduleSlotRow');
    var $startTimeInput = $prevRow.find('.startTimeSlot');
    var $endTimeInput = $prevRow.find('.endTimeSlot');

    if ($startTimeInput.val() && $endTimeInput.val()) {
        var $row = $('#scheduleSlotRow0').clone(); // Clone the row
        $row.insertAfter($prevRow).find('input, select').each(function() {
            $(this).removeAttr('disabled');
            $(this).val(null);
        });

        addFieldsInValidatorTimeSlot($row);
        renameTimeSlotDivs();
    } else {
        // If the previous row's details are not filled, do not clone a new row.
        // You can display the specific error message under the previous row or handle it as needed.
        $prevRow.find('.error-message').text('Please fill in the details before adding a new row.');
        $prevRow.find('.error-message').show();
    }
}




function renameTimeSlotDivs() {
    $('.scheduleSlotRow').each(function(i, div) {
        console.log('i>>' + i);
        $(this).attr('id', 'scheduleSlotRow' + i);
        $(this).find('input,select,textarea').each(function() {
            $(this).attr('id', $(this).attr('id').replace(/\d+/, i));
            $(this).attr('name', $(this).attr('name').replace(/\[\d+\]/, "[" + i + "]"));

        });
    });
}

function removeTimeSlotDiv($remBtn) {
    var rowLen = $('.scheduleSlotRow').length;
    if (rowLen > 1) {
        //removeFieldsfromValidatorTimeSlot($remBtn.closest('.scheduleSlotRow'));
        $remBtn.closest('.scheduleSlotRow').remove();
        renameTimeSlotDivs();
    }
}

const format = 'hh:mm';
const formatforOTP = "YYYY-MM-DDTHH:mm";
const formatforDate = "YYYY-MM-DD";
$(document).ready(function() {

    var multiselect = $('.multiple-select').multiselect({
        buttonClass: 'btn btn-primary btn-sm',
        includeSelectAllOption: true,
        enableClickableOptGroups: true,
        enableCaseInsensitiveFiltering: true,
        enableFiltering: true,
        maxHeight: 300,
        dropdownAutoWidth: true,
        buttonWidth: '100%',
        delimiterText: ' - '
    });
    $('#stateIdOneTimePlay.multiple-select').parent().css('width', '500px !important');

    $('#scheduleCampaignForm').bootstrapValidator({
        excluded: ':disabled',
        fields: {

            complianceCheckSchedule: {
                validators: {
                    notEmpty: {
                        message: 'Please agree to terms and conditions'
                    }
                }
            },
            startdate: {
                group: '.col-md-12',
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
                                return true;
                            } else {
                                console.log('not current day ');
                                return {
                                    valid: false,
                                    message: 'Start Date should be current day or greater than current day'
                                };
                            }
                        }
                    }
                }
            },
            enddate: {
                group: '.col-md-12',
                validators: {
                    callback: {
                        message: 'End Date gibberish',
                        callback: function(value, validator, $field) {
                            console.log("endDateField Name: ", $field.attr('name'));

                            if (value) {
                                if (moment(value).isSameOrAfter($('#startdate').val())) {
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
            startTimeSlot: {
                group: '.col-md-12',
                selector: '.startTimeSlot',
                validators: {
                    notEmpty: {
                        message: "Select Start Time"
                    },
                    callback: {
                        message: 'Start Time gibberish',
                        callback: function(value, validator, $field) {
                            console.log("startTimeSlotField Name: ", $field.attr('name'));

                            var isValid = false;
                            var selTime = moment(value, format);
                            var rNum = $field.attr('id').match(/\d+/);
                            var currentTime = moment();
                            console.log('prevEnd' + $('#endtime' + (parseInt(rNum) - 1)).val());

                            if (rNum == 0) {
                                if (selTime < currentTime) {
                                    return {
                                        valid: false,
                                        message: 'Start Time should be greater than current time'
                                    };
                                }
                            } else {
                                var prevEnd = moment($('#endtime' + (parseInt(rNum) - 1)).val(), format);
                                console.log('selTime' + value);

                                console.log('rNum' + rNum);
                                if (!selTime.isSameOrAfter(prevEnd)) {
                                    return {
                                        valid: false,
                                        message: 'Start Time should be greater than previous end time'
                                    };
                                }
                            }
                            return true;

                        }
                    }
                }
            },
            endTimeSlot: {
                group: '.col-md-12',
                selector: '.endTimeSlot',
                validators: {
                    notEmpty: {
                        message: "Select End Time"
                    },
                    callback: {
                        message: 'End Time gibberish',
                        callback: function(value, validator, $field) {
                            console.log("endTimeSlotField Name:  ", $field.attr('name'));

                            var isStartValid = false,
                                isEndValid = false;
                            var selStartTime = moment($field.closest('.scheduleSlotRow').find('.startTimeSlot').val(), format);
                            var selEndTime = moment(value, format);

                            if (selEndTime.isAfter(selStartTime))
                                return true;
                            else return {
                                valid: false,
                                message: 'End Time should be greater than Start Time'
                            };
                        }

                    }
                }
            }
        }

    }).on('click', '#submitScheduleBtn', function(event) {
        event.preventDefault();
        var validator = $("#scheduleCampaignForm").data("bootstrapValidator");
        validator.validate();
        console.log("var scheduleCampaignForm submit is " + validator.isValid());
        console.log("var scheduleCampaignForm button is " + this);
        if (validator.isValid()) {
            console.log('scheduleCampaignForm successfully validated');
            savebroadcastCampaignSchedule();
        }

    });



    //    start of bootstrap validator for one time play div       
    $('#broadcastCampaignFormOtp').bootstrapValidator({
        excluded: ':disabled',
        fields: {
            complianceCheckOtp: {
                validators: {
                    notEmpty: {
                        message: 'Please agree to terms and conditions'
                    }
                }
            },
            startdatetime: {
                group: '.col-md-12',
                selector: '.startdatetime',
                validators: {
                    callback: {
                        message: 'Start Date Time otp is required',
                        callback: function(value, validator, $field) {
                            console.log("Start Date Time inside: " + value); // Log the value

                            if (!value) {
                                console.log('Start Date Time is empty');
                                return {
                                    valid: false,
                                    message: 'Start Date Time should be not empty'
                                };
                            }
                            var selectedDateTime = moment(value, formatforOTP);
                            console.log('Start Date Time selectedDateTime' + selectedDateTime);
                            const currentDateTime = moment();
                            console.log('currentDateTime startdatetime' + currentDateTime);

                            if (currentDateTime.isSame(selectedDateTime, 'day') && (selectedDateTime >= currentDateTime)) {
                                console.log('Same day and time > than current');
                                return true;
                            } else {
                                console.log('not Same day or time > than current');
                                return {
                                    valid: false,
                                    message: 'Start Date time should be current day and greater than current time'
                                };
                            }
                        }
                    }
                }
            },
            enddatetime: {
                group: '.col-md-12',
                selector: '.enddatetime',
                validators: {
                    callback: {
                        message: 'End Date Time otp should be 6hrs less than start time',
                        callback: function(value, validator, $field) {
                            console.log("End Date Time inside: " + value); // Log the value

                            if (!value) {
                                console.log('End Date Time is empty');
                                return {
                                    valid: false,
                                    message: 'End Date Time should not be empty'
                                };
                            }

                            const startDateTime = moment($('#startdatetime1').val(), formatforOTP);
                            const endDateTime = moment(value, formatforOTP);
                            console.log('startDateTime' + startDateTime);
                            console.log('endDateTime' + endDateTime);
                            const durationHours = endDateTime.diff(startDateTime, 'hours');
                            console.log('durationHours' + durationHours);

                            if (startDateTime.isSameOrBefore(endDateTime)) {
                                // Calculate the duration in hours (rounded to the nearest hour)
                                const durationHours = Math.round(endDateTime.diff(startDateTime, 'hours'));

                                if (durationHours >= 0 && durationHours <= 6) {
                                    console.log('inside <= 6');
                                    return {
                                        valid: true,
                                        message: 'Validation succeeded'
                                    };
                                } else {
                                    return {
                                        valid: false,
                                        message: 'End Date Time otp should be within 6 hours of the start time'
                                    };
                                }
                            } else {
                                return {
                                    valid: false,
                                    message: 'End Date Time otp should be greater than or equal to the start time'
                                };
                            }
                        }
                    }
                }
            },
            remarksOneTimepPlay: {
                validators: {
                    notEmpty: {
                        message: 'Remarks is required'
                    },
                    stringLength: {
                        max: 200,
                        message: 'Remarks cannot exceed 200 characters'
                    }
                }
            }
        }
    }).on('click', '#submitOneTimePLayBtn', function(event) {
        event.preventDefault();
        var validator = $("#broadcastCampaignFormOtp").data("bootstrapValidator");
        validator.validate();
        console.log("Start Date Time: " + $('#startdatetime1').val()); // Log the value

        console.log("var broadcastCampaignFormOtp submit is " + validator.isValid());
        console.log("var broadcastCampaignFormOtp button is " + this);
        if (validator.isValid()) {
            console.log('broadcastCampaignFormOtp successfully validated');
            savebroadcastCampaignOtp();
        }
    });
    //    end of bootstrap validator for one time play div     



});

function savebroadcastCampaignSchedule() {
    var contentId = $('#contentId1').val();
    var liveURl = $('#liveURl').val();
    if (contentId == "") {
        if (!$('#toggleContAndUrl').is(':checked')) {
            alertify.error("please select a content before submitting");
            return;
        }
    }
    if (liveURl == "") {
        if ($('#toggleContAndUrl').is(':checked')) {
            alertify.error("please select a url before submitting");
            return;
        }
    }
    var playNowFlagValue = $('#toggle').prop('checked');
    console.log('playNowFlagValue' + playNowFlagValue);

    var selectedValues = $('#stateIdIdSchedule').val();
    console.log('selectedValues>>' + selectedValues);

    // Initialize an array to store the division data
    var divisionData = [];

    // Iterate through the selected values and split them into divisionCode and state
    console.log('selectedValues.length>>' + selectedValues.length);

    for (var i = 0; i < selectedValues.length; i++) {
        console.log('i>>' + i);

        var value = selectedValues[i];
        var parts = value.split('-'); // Split using the separator (change to your separator)

        var state = parts[0];
        var divisionCode = parts[1];
        console.log('divisionCode<' + divisionCode);
        console.log('state<' + state);

        // Create an object for the division data
        var division = {
            divisionCode: divisionCode,
            state: state
        };

        // Add the division data to the array
        divisionData.push(division);
        console.log('division<' + division);

    }

    // Format the division data as a JSON object
    var jsonData = {
        divisionData: divisionData
    };

    // Convert the JSON object to a string for further use
    var jsonString = JSON.stringify(jsonData);

    // Display or use the jsonString as needed
    console.log(jsonString);




    var startdateSchedule = $('#startdate').val();
    var enddateSchedule = $('#enddate').val();
    var remarksSchedule = $('#remarks').val();
    var flagSchedule = $('#complianceCheck').prop('checked');
    console.log('startdateSchedule' + startdateSchedule);
    console.log('enddateSchedule' + enddateSchedule);
    console.log('remarks' + remarksSchedule);
    console.log('flag' + flag);
    var timeslots = [];
    var tickerPositionSchedule = $('#tickerPositionSchedule').val();
    var tickerContentSchedule = $('#tickerContentSchedule').val();


    console.log('tickerPositionSchedule' + tickerPositionSchedule);
    console.log('tickerContentSchedule' + tickerContentSchedule);


    console.log('liveURl' + liveURl);
    var tickerFlag, tickerSize;


    var togglefortickerSchedule = document.getElementById('togglefortickerSchedule');

    if (togglefortickerSchedule.checked) {
        console.log('togglefortickerSchedule  chedked>>' + togglefortickerSchedule.checked);
        tickerFlag = 1;
        tickerSize = 10;
        console.log('tickerFlag' + tickerFlag);
        tickerPositionSchedule = tickerPositionSchedule1;
    } else {
        console.log('togglefortickerSchedule not chedked>>' + togglefortickerSchedule.checked);
        tickerFlag = 0;
        tickerSize = '';
        tickerPositionSchedule = "";
    }



    $('.startTimeSlot').each(function(index) {
        var startTimeId = $(this).attr('id');
        var index1 = startTimeId.match(/\d+/)[0];
        console.log('index' + index);

        console.log('index1' + index1);

        var endTimeValue = $('#endtime' + index1).val();
        var startTimeValue = $('#starttime' + index1).val();
        console.log('startTimeId>>' + startTimeId);
        console.log('endtimeId' + index1);
        console.log('startTimeValue>>' + startTimeValue);
        console.log('endTimeValue' + endTimeValue);

        var timeSlot = {
            playStartTime: startTimeValue,
            playEndTime: endTimeValue,
            playStartDate: startdateSchedule,
            playEndDate: enddateSchedule

        };
        timeslots.push(timeSlot);

    });
    if ($('#toggleContAndUrl').is(':checked')) {
        contentId = "";
    } else {
        liveURl = "";
    }
    console.log('timeslots' + JSON.stringify(timeslots));
    var dataSchedule = {
        contentId: contentId,
        url: liveURl,
        divisionData: divisionData,
        timeSlots: timeslots,
        remarks: null,
        playNowFlag: playNowFlagValue - 1,
        tickerFlag: tickerFlag,
        tickerPosition: tickerPositionSchedule,
        tickerSize: tickerSize,
        tickerContent: tickerContentSchedule
    };
    console.log('dataSchedule' + JSON.stringify(dataSchedule));
    $.ajax({
        url: getContextPath() + '/savebroadcastCampaignSchedule',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(dataSchedule),
        success: function(response) {
            console.log('savebroadcastCampaignSchedule success');
            bootbox.alert({
                message: '<span style="font-size:large">Broadcast campaign saved successfully !</span>',
                callback: function() {
                    console.log("inside bootbox alert");

                    location.reload();
                }
            });
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));

        },
        error: function() {
            console.log('savebroadcastCampaignSchedule error');
            bootbox.alert({
                message: '<span style="font-size:large;color:red">Failed to save Broadcast campaign !</span>',
                callback: function() {
                    console.log("inside bootbox alert");

                    location.reload();
                }
            });
        }
    });
}

function savebroadcastCampaignOtp() {
    var contentId = $('#contentId1').val();
    var liveURl = $('#liveURl').val();
    if (contentId == "") {
        if (!$('#toggleContAndUrl').is(':checked')) {
            alertify.error("please select a content before submitting");
            return;
        }
    }
    if (liveURl == "") {
        if ($('#toggleContAndUrl').is(':checked')) {
            alertify.error("please select a url before submitting");
            return;
        }
    }
    var playNowFlagValue = $('#toggle').prop('checked');
    console.log('playNowFlagValue' + playNowFlagValue);

    var selectedValues = $('#stateIdOneTimePlay').val();
    console.log('selectedValues>>' + selectedValues);

    // Initialize an array to store the division data
    var divisionData = [];

    // Iterate through the selected values and split them into divisionCode and state
    console.log('selectedValues.length>>' + selectedValues.length);

    for (var i = 0; i < selectedValues.length; i++) {
        console.log('i>>' + i);

        var value = selectedValues[i];
        var parts = value.split('-'); // Split using the separator (change to your separator)

        var state = parts[0];
        var divisionCode = parts[1];
        console.log('divisionCode<' + divisionCode);
        console.log('state<' + state);

        // Create an object for the division data
        var division = {
            divisionCode: divisionCode,
            state: state
        };

        // Add the division data to the array
        divisionData.push(division);
        console.log('division<' + division);

    }

    // Format the division data as a JSON object
    var jsonData = {
        divisionData: divisionData
    };

    // Convert the JSON object to a string for further use
    var jsonString = JSON.stringify(jsonData);

    // Display or use the jsonString as needed
    console.log(jsonString);




    var startdatetime = $('#startdatetime1').val();
    var enddatetime = $('#enddatetime1').val();
    var remarks = $('#remarksOneTimepPlay').val();

    var flag = $('#complianceCheckOtp').prop('checked');


    var tickerPositionOtpSelected = $(".dropdown-item.tickerOtpValue.active").first();
    console.log('tickerPositionOtp1' + tickerPositionOtp1);

    var tickerPositionOtp = tickerPositionOtpSelected.data('value');


    var tickerContentOtp = $('#tickerContentOtp').val();
    var tickerFlag, tickerSize;

    var togglefortickerOtp = document.getElementById('togglefortickerOtp');

    if (togglefortickerOtp.checked) {
        console.log('togglefortickerOtp  chedked>>' + togglefortickerOtp.checked);

        tickerFlag = 1;
        tickerSize = 10;
        console.log('tickerFlag' + tickerFlag);
        tickerPositionOtp = tickerPositionOtp1;

    } else {
        console.log('togglefortickerOtp not chedked>>' + togglefortickerOtp.checked);
        tickerFlag = 0;
        tickerSize = '';
        tickerPositionOtp = "";
    }

    console.log('tickerPositionOtp' + tickerPositionOtp);
    console.log('tickerContentOtp' + tickerContentOtp);
    console.log('startdatetime' + startdatetime);
    console.log('enddatetime' + enddatetime);
    console.log('remarks' + remarks);
    console.log('flag' + flag);

    /* url validation by shivan */



    console.log('liveURl' + liveURl);



    var timeslot1 = {
        "playStartDate": startdatetime.split('T')[0],
        "playEndDate": enddatetime.split('T')[0],
        "playStartTime": startdatetime.split('T')[1],
        "playEndTime": enddatetime.split('T')[1]
    };
    var timeslot = [];
    timeslot.push(timeslot1);
    if ($('#toggleContAndUrl').is(':checked')) {
        contentId = "";
    } else {
        liveURl = "";
    }
    var dataOtp = {
        contentId: contentId,
        url: liveURl,
        divisionData: divisionData,
        timeSlots: timeslot,
        remarks: null,
        playNowFlag: playNowFlagValue + 1,
        tickerFlag: tickerFlag,
        tickerPosition: tickerPositionOtp,
        tickerSize: tickerSize,
        tickerContent: tickerContentOtp
    };
    console.log('dataOtp' + JSON.stringify(dataOtp));

    $.ajax({
        url: getContextPath() + '/save-broadcast-campaign-otp',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(dataOtp),
        success: function(response) {
            console.log('savebroadcastCampaignOtp success');
            bootbox.alert({
                message: '<span style="font-size:large">Broadcast Campaign successfully saved !</span>',
                callback: function() {
                    console.log("inside bootbox alert");
                    location.reload();
                }
            });
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));

        },
        error: function() {
            console.log('savebroadcastCampaignOtp error');
            bootbox.alert({
                message: '<span style="font-size:large;color:red">Failed to save Broadcast campaign !</span>',
                callback: function() {
                    console.log("inside bootbox alert");
                    location.reload();
                }
            });
        }
    });
}


function toggleFieldsContentUrl() {
    console.log('inside toggleFieldsContentUrl');

    var toggle = document.getElementById('toggleContAndUrl');
    var input1 = document.getElementById('liveURl');
    var input2 = document.getElementById('UploadedContentInput');
    if (toggle.checked) {
        console.log('inside toggleFieldsContentUrl checked');

        input1.disabled = false;
        input2.disabled = true;
        $('#liveVideoIframe').show();
        $('#media2Object').hide();

    } else {
        input1.disabled = true;
        input2.disabled = false;
        $('#liveVideoIframe').hide();
        $('#media2Object').show();

    }

}
toggleFieldsContentUrl();
toggleFieldstickerOtp();

function toggleFieldstickerOtp() {
    var toggle = document.getElementById('togglefortickerOtp');
    if (toggle.checked) {
        $('#tickerRequiredOtp').css('color', '#9E9E9E');
        $('#tickerPositionOtp').prop('disabled', false);
        //	$('#tickerContentOtpDiv').show();
        $('#tickerContentOtp').prop('disabled', false);

        $('#tickerPositionOtp').css('color', 'white');
    } else {

        $('#tickerRequiredOtp').css('color', '#5f73e3');
        $('#tickerPositionOtp').prop('disabled', true);
        //	$('#tickerContentOtpDiv').hide();
        $('#tickerPositionOtp').css('color', 'black');
        $('#tickerPositionOtp').css('color', 'black');
        $('#tickerContentOtp').prop('disabled', true);
        $('#tickerContentOtp').val('');
        $('#charCountOtp').text('Count : 0/500');



    }
    togglePlaynowButton();
}


toggleFieldstickerSchedule();

function toggleFieldstickerSchedule() {
    var toggle = document.getElementById('togglefortickerSchedule');
    if (toggle.checked) {

        $('#tickerRequiredSchedule').css('color', '#9E9E9E');

        $('#tickerPositionSchedule').prop('disabled', false);
        $('#tickerContentSchedule').prop('disabled', false);

        $('#tickerPositionSchedule').css('color', 'white');
    } else {
        $('#tickerRequiredSchedule').css('color', '#5f73e3');
        $('#tickerPositionSchedule').prop('disabled', true);
        $('#tickerContentSchedule').prop('disabled', true);

        $('#tickerPositionSchedule').css('color', 'black');
        $('#tickerContentSchedule').val('');
        $('#charCountSchedule').text('Count : 0/500');




    }
}

function toggleFields() {
    console.log('inside toggleFields');

    var toggle = document.getElementById('toggle');
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');


    if (toggle.checked) {
        console.log('inside toggleFields');

        input1.disabled = false;
        input2.disabled = true;
        $('#input2').css('color', '#9E9E9E');
        $('#input1').css('color', '#5f73e3');

        $('#scheduleDivOuter').show();
        $('#onetimeplayDiv').hide();
        $('#submitOneTimePLayBtn').hide();


    } else {
        input1.disabled = true;
        input2.disabled = false;

        $('#input1').css('color', '#9E9E9E');
        $('#input2').css('color', '#5f73e3');

        $('#onetimeplayDiv').show();
        $('#scheduleDivOuter').hide();
        $('#submitOneTimePLayBtn').show();

    }

    /* $('.broadcastCampaignFormOtp')[0].reset(); // Reset the form fields
	 $('.broadcastCampaignFormOtp').data('bootstrapValidator').resetForm(); 
	 
    $('.scheduleCampaignForm')[0].reset(); // Reset the form fields
	 $('.scheduleCampaignForm').data('bootstrapValidator').resetForm(); 
     */
}
toggleFields();


function updateCharacterCount1() {
    const maxChars = 500;
    const textarea = document.getElementById('tickerContentOtp');
    const charCount = document.getElementById('charCountOtp');

    const typedChars = textarea.value.length;

    if (typedChars >= 500) {
        charCount.innerText = "Max limit reached";
        charCount.style.color = 'red';

    } else {
        charCount.style.color = 'black';
        charCount.innerText = "Count : " + typedChars + "/500";
    }
}

function updateCharacterCount2() {
    const maxChars = 500;
    const textarea = document.getElementById('tickerContentSchedule');
    const charCount = document.getElementById('charCountSchedule');

    const typedChars = textarea.value.length;

    if (typedChars >= 500) {
        charCount.innerText = "Max limit reached";
        charCount.style.color = 'red';

    } else {
        charCount.style.color = 'black';
        charCount.innerText = "Count : " + typedChars + "/500";
    }
}

function updateCharacterCount() {
    const maxChars = 200;
    const textarea = document.getElementById('remarks');
    const charCount = document.getElementById('charCount');

    const typedChars = textarea.value.length;

    if (typedChars >= 200) {
        charCount.innerText = "Max limit reached";
        charCount.style.color = 'red';

    } else {
        charCount.style.color = 'black';
        charCount.innerText = "Count : " + typedChars + "/200";
    }
}

function updateCharacterCountOtp() {
    const maxChars = 200;
    const textarea = document.getElementById('remarksOneTimepPlay');
    const charCount = document.getElementById('charCountOneTimepPlay');

    const typedChars = textarea.value.length;

    if (typedChars >= 200) {
        charCount.innerText = "Max limit reached";
        charCount.style.color = 'red';

    } else {
        charCount.style.color = 'black';
        charCount.innerText = "Count : " + typedChars + "/200";
    }
}

function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}

/* getSubscriberContent();
function getSubscriberContent() {
    $.ajax({
        url: getContextPath() + "/listContent",
        type: "POST",
        dataType: "json",
        success: function (response) {
            var divHtml = '';
            var videoCount = 0; // Counter to keep track of videos in a row
            divHtml += '<div class="row">';
            
            $.each(response, function (i, data) {
            	 console.log('inside each(response, ');
                      var mediaTag = '';
                switch (data.contentTypeCode) {
                    case 'V':
                        mediaTag = '<video src="' + getContextPath() + '/image/?variable1=' + data.contentId + '&variable2' + data.contentFormat + '&variable3' + data.storagePath + '" id="' + data.contentId + '" width="100%" controls preload="metadata" style="object-fit: contain;"></video>';
                        break;
                    default:
                        mediaTag = '<object data="' + getContextPath() + '/image/?variable1=' + data.contentId + '&variable2' + data.contentFormat + '&variable3' + data.storagePath + '" id="' + data.contentId + '" type="image/jpg" width=100% height="100"></object>';
                        break;
                }

                // Check if the videoCount is divisible by 3 to start a new row
                
                    
                

                divHtml += '<div class="col-md-12">';
                divHtml += '<div class="card draggable-card" style="border:1px solid #e3020f; margin-bottom:5px;" draggable="true" ondragstart="handleDragStart(event, \'' + data.contentId + '\',\'' + data.contentFormat + '\',\'' + data.storagePath + '\', \'' + data.contentTypeCode + '\',\'Y\' )">';
                divHtml += '<div class="card-header" style="padding: 5px;  border-bottom: 1px solid #e3020f; background: #ffe8ea;" data-toggle="tooltip" data-placement="top" title="' + data.contentName + '">';
                divHtml += '<b>' + data.contentName.substring(0, 15) + '</b>: ' + data.contentTypeCode;
                divHtml += '</div>';
                divHtml += '<div class="card-body" style="padding: 3px;">';
                divHtml += mediaTag;
                divHtml += '</div>';
                divHtml += '</div>';
                divHtml += '</div>';

                // Increase the videoCount
                videoCount++;
            	console.log('videoCount'+videoCount);
                
                      });

              divHtml += '</div>';
            
		    $('#subscriberContentDiv').html(divHtml);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
        },
        error: function () {
            alertify.error("Some error occurred, please try again")
        }
    });
} */
var draggedMediaPath = "",
    draggedMediaId = "",
    draggedMediaType = "",
    forRly = ''; // Stores the path of the dragged media

function handleDragStart(event, mediaId, mediaFormat, storagePath, mediaTypeCode, isRlyContent) {
    draggedMediaPath = getContextPath() + "/image/?variable1=" + mediaId + "&variable2=" + mediaFormat + "&variable3=" + storagePath;
    console.log("drag draggedMediaPath " + draggedMediaPath, 'isRlyContent:', isRlyContent);
    forRly = isRlyContent;
    draggedMediaId = mediaId;
    draggedMediaType = mediaTypeCode;
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDragStart1(event, mediaId, mediaFormat, storagePath, mediaTypeCode, isRlyContent) {
    console.log("inside  handleDragStart1");
    draggedMediaPath = getContextPath() + "/image/?variable1=" + mediaId + "&variable2=" + mediaFormat + "&variable3=" + storagePath;
    console.log("drag draggedMediaPath " + draggedMediaPath, 'isRlyContent:', isRlyContent);
    forRly = isRlyContent;
    draggedMediaId = mediaId;
    draggedMediaType = mediaTypeCode;
    var mediadiv = $(this).attr('media2Object');
    console.log('mediadiv:', mediadiv);
    handleDrop(event, mediadiv, 'Y');
    $('#ModalforContent').hide();
    console.log('ModalforContenthide: called');

}

function handleDrop(event, dropDiv, rlyDiv) {
    console.log('handleDrop called');
    event.preventDefault();
    $(dropDiv).empty();
    console.log('rlyDiv:', rlyDiv, 'forRly:', forRly);
    console.log('dropDiv:', dropDiv);

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

$('#clearLayout').click(function() {
    $('.droppedMediaObject').empty();
    $('.content-inputs').val(null);
    $('.playSound').val('Y');
    $('.soundBtn').html('<i class="mdi mdi-volume-high"></i>');
    $('#media2Object').attr('data', getContextPath() + '/resources/img/adSpace501.png');
    $('#liveVideoIframe').attr('src', 'https://www.youtube.com/embed/sc');
});

function saveBroadcastCampaignDetails() {
    var mediaIdList = [];
    var formData = new FormData();
    var other_data = $('#broadcastCampaign').serializeArray();
    $.each(other_data, function(key, input) {
        formData.append(input.name, input.value);
    });
    console.log('other_data', JSON.stringify(other_data));

    /* $.ajax({
		url: getContextPath() +'/save-broadcast-campaign-details',
		type: "post",
		data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
			if(result && JSON.parse(result).respMessage=='success') {
				bootbox.alert({
					message: 'Broadcast Campaign details have been saved successfully!',
					callback: function () {
						location.reload();
					}
				});
			} else {
				alertify.error('Some error occurred while saving the b roadcastcampaign details. Please try after some time')
			}
			
		}, beforeSend: function(xhr) {
			xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
		}, error: function() {
			alertify.error('Some error occurred while saving the campaign details. Please try after some time');
		}
	}); */
}



$('#ModalPopOut').click(function(e) {
    console.log('monitorscreen');
    var modalString = '';

    $.ajax({
        url: getContextPath() + 'listContent',
        type: "post",
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            modalString += '<div class="row">';
            $.each(response, function(i, data) {
                var mediaTag = '';
                switch (data.contentTypeCode) {
                    case 'V':
                        mediaTag = '<video src="' + getContextPath() + '/image/?variable1=' + data.contentId + '&variable2' + data.contentFormat + '&variable3' + data.storagePath + '" id="' + data.contentId + '" width="100%" controls preload="metadata" style="object-fit: contain;"></video>';
                        break;
                    default:
                        mediaTag = '<object data="' + getContextPath() + '/image/?variable1=' + data.contentId + '&variable2' + data.contentFormat + '&variable3' + data.storagePath + '" id="' + data.contentId + '" type="image/jpg" width=100% height="100"></object>';
                        break;
                }

                modalString += '<div class="col-md-4"> ';
                modalString += '<div class="card draggable-card" style="border:1px solid #e3020f;" onclick="handleDragStart1(event, \'' + data.contentId + '\',\'' + data.contentFormat + '\',\'' + data.storagePath + '\', \'' + data.contentTypeCode + '\',\'Y\' )" >';
                modalString += '<div class="card-header" style="padding: 5px;  border-bottom: 1px solid #e3020f; background: #ffe8ea;" data-toggle="tooltip" data-placement="top">\'' + data.contentName + '\'</div>';
                modalString += '<div class="card-body">\'' + mediaTag + '\'</div></div></div>';

            });
            modalString += '</div>';
            $('#ModalforContentBody').html(modalString);
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
        },
        error: function() {
            console.log('in error of monitor screen');
        }
    });
    $('#ModalforContent').show();

});