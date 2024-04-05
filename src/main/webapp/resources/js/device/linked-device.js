var strnonreg;
var strreg;
var selectcheckboxes = [];
$("input[type='checkbox']").each(function() {
    selectcheckboxes.push($(this).val());
});

function resetFormsBootstrap() {
    $('.myCommonForm')[0].reset(); // Reset the form fields
    $('.myCommonForm').data('bootstrapValidator').resetForm();
    console.log('on refresh form reset');
}

function showcards() {
    console.log('registeredList', registeredList);
    console.log('nonRegisteredList', nonRegisteredList);
    console.log('siteList', siteList);
    // Clear the existing content in the containers
    $("#cardContainer1").empty();
    $("#cardContainer2").empty();

    var selectedLocations = [];
    // Loop through the checkboxes to find the selected ones
    $("input[type='checkbox']:checked").each(function() {
        selectedLocations.push($(this).val());
    });

    console.log('selectedLocations', selectedLocations);
    strnonreg = '  <div class="card" style="margin-bottom: 10px;"><div class="card-body p-3"><h5>&nbsp; &nbsp; &nbsp;Registered Devices</h5>  <div class="row">';

    var str = '';
    var selectedDropdownLocation = $("#dropdownMenu2").val();
    console.log('selectedDropdownLocation', selectedDropdownLocation);
    $.each(nonRegisteredList, function(i, data) {
        if (selectedLocations.includes(data.deviceLocCode) || selectedDropdownLocation === data.deviceLocCode) {
            console.log('nonRegisteredList data.deviceLocCode', data.deviceLocCode);
            str += '<div class="col-md-4" style="padding:10px;margin-bottom:0px"><div class="card card-body border border-primary  card-plain border-radius-lg d-flex" style="padding:10px" > <div class="card-body" style="padding:0px"><form id="myForm" method="get" class="myCommonForm needs-validation" novalidate><input type="hidden" name="hiddenotc" id="hiddenotc" value="' + data.otc + '"> <div class="card-header bg-light border-radius-lg"><div class="row "><div class="col-md-6"><h6>DeviceCode :</h6></div><div class="col-md-6" style="padding:0px"><input name="deviceCode1" style="border:none;background-color:#e9ecef;width:90%" id="deviceCode1" readonly="true" class="section-readonly-input deviceCode1" value="' + data.deviceId + '"></div><div class="col-md-6"><h6>Location :</h6></div><div class="col-md-3" style="padding:0px"><input name="deviceLocCode" style="border:none;background-color:#e9ecef;width:90%" id="deviceLocCode" readonly="true" class="section-readonly-input deviceLocCode" value="' + data.deviceLocCode + '"></div></div></div><br><div class="col-md-12"><input class="form-control form-control-lg" type="text" id="deviceName" name="deviceName" maxlength="20" class="form-control password" placeholder="Device Name"></div><div class="col-md-12"><select class="form-control select2" id="deviceSite" name="deviceSite" style="width:90%"><option value="" disabled selected>Select Device Site</option>';

            // Assuming deviceSiteOptions is an array of options for the select dropdown
            for (var j = 0; j < siteList.length; j++) {
                str += '<option value="' + siteList[j].siteCode + '">' + siteList[j].siteCode + ' - ' + siteList[j].siteName + '</option>';
            }

            str += '</select></div><div class="col-md-12"><input class="form-control form-control-lg" type="text" id="mirrordevices" name="mirrordevices" maxlength="3" class="form-control password" placeholder="No. of Mirror Devices"></div><div class="col-md-12"><input class="form-control form-control-lg" type="text" id="deviceDescription" name="deviceDescription" maxlength="200" class="form-control" placeholder="DeviceDescription"></div><div class="col-md-12"><input class="form-control form-control-lg" type="text" id="oneTimeCode" name="oneTimeCode" maxlength="6" class="form-control" placeholder="OneTimeCode"></div><div class="card-footer bg-transparent border-success"><a href="#" class="scroll-link underline-link float-end btn btn-link" onclick="handleScrollLinkClick(event)">Validate OTC</a><div id="message"></div><button id="RegisterDevice"  name="RegisterDevice" class="btn btn-round registerdeviceClass" style="background-color:#90ee90;display:none">RegisterDevice</button></form></div></div></div></div>';
        }
    });

    str += '</div></div>';
    strnonreg += str;
    $("#cardContainer1").append(strnonreg);
    $("#cardContainer1").find('.select2').select2();
    $("#RegisterDevice").hide();


    strreg = '<div class="card" style="margin-bottom: 10px;"><div class="card-body p-3"><h5>&nbsp; &nbsp; &nbsp;Claimed Devices</h5> <div class="row">';
    str = '';
    $.each(registeredList, function(i, data) {
        if (selectedLocations.includes(data.deviceLocCode) || selectedDropdownLocation === data.deviceLocCode) {
            str += '<div class="col-md-3" style="padding:10px">';
            str += '<div class="card card-body border border-warning card-plain border-radius-lg d-flex align-items-center flex-row">';
            str += '<div class="row" style="padding:10px">';
            str += '<div class="col-md-4" style="padding:10px">';
  		str += '<img class="img-fluid" src="' + imageUrl + '">';
  	console.log('imageUrl'+imageUrl);
  				 str += '</div>';
            str += '<div class="col-md-8">';
            str += 'Device code: <b>' + data.deviceId + ' </b><br>';
            str += 'Location: ' + data.deviceLocCode + '<br>';
            str += 'Status: ' + data.deviceStatus + '</div></div></div></div><br><br>';
        }
    });
    str += '</div></div></div>';
    strreg += str;
    $("#cardContainer2").append(strreg);


    $(".myCommonForm").bootstrapValidator({
        fields: {
            deviceName: {
                group: '.col-md-12',
                validators: {
                    notEmpty: {
                        message: 'Please select valid device name'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\s]+$/,
                        message: 'Invalid input. Only letters and white spaces are allowed.'
                    },
                    callback: {
                        message: 'Maximum 5 characters allowed.',
                        callback: function(value, validator, $field) {
                            if (value.length <= 20) {
                                console.log('Validation successful');
                                return true;
                            } else {
                                console.log('Validation failed');
                                return false;
                            }
                        }
                    }
                }
            },
            mirrordevices: {
                group: '.col-md-12',
                validators: {
                    notEmpty: {
                        message: 'Please select valid no. of mirror devices'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'Invalid input. Only numbers are allowed.'
                    },
                    callback: {
                        message: 'Maximum 5 characters allowed.',
                        callback: function(value, validator, $field) {
                            if (value.length <= 3) {
                                console.log('Validation successful');
                                return true;
                            } else {
                                console.log('Validation failed');
                                return false;
                            }
                        }
                    }

                }
            },
            deviceDescription: {
                group: '.col-md-12',
                validators: {
                    notEmpty: {
                        message: 'Please select valid device description'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\s]+$/,
                        message: 'Invalid input. Only letters and white spaces are allowed.'
                    },
                    callback: {
                        message: 'Maximum 5 characters allowed.',
                        callback: function(value, validator, $field) {
                            if (value.length <= 200) {
                                console.log('Validation successful');
                                return true;
                            } else {
                                console.log('Validation failed');
                                return false;
                            }
                        }
                    }
                }

            },
            oneTimeCode: {
                group: '.col-md-12',
                validators: {
                    notEmpty: {
                        message: 'Please select valid one-time code'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'Invalid input. Only numbers are allowed.'
                    },
                    callback: {
                        message: 'Maximum 5 characters allowed.',
                        callback: function(value, validator, $field) {
                            if (value.length <= 6) {
                                console.log('Validation successful');
                                return true;
                            } else {
                                console.log('Validation failed');
                                return false;
                            }
                        }
                    }

                }
            }
        }
    }).on('click', '#RegisterDevice', function(e) {
        e.preventDefault();
        var form = $(this).closest('form');
        var validator = form.data('bootstrapValidator');
        validator.validate();
        console.log("var submit is " + validator.isValid());
        console.log("var button is " + this);
        if (validator.isValid()) {
            console.log('successfully validated');
            handleClick(this);
        }
    });

    resetFormsBootstrap();
}

function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}

function handleClick(button) {

    var buttonId = button.id;
    console.log('button ' + buttonId);
    event.preventDefault();
    var element1 = $(button).closest('.card').find('#deviceCode1').val();
    var element2 = $(button).closest('.card').find('#deviceName').val();
    var element3 = $(button).closest('.card').find('#mirrordevices').val();
    var element4 = $(button).closest('.card').find('#deviceSite').val();
    var element5 = $(button).closest('.card').find('#deviceDescription').val();

    console.log('deviceCode1>>>>' + element1);
    console.log('deviceName>>>' + element2);
    console.log('mirrordevices>>>' + element3);
    console.log('deviceSite>>' + element4);
    console.log('deviceDescription>>>' + element5);
    //timer if notification service takes too much 
    var modal = document.getElementById("prgsModalWait");
    var timer;
    // Show the modal after 5 seconds
    timer = setTimeout(function() {
        modal.style.display = "block";
    }, 5000);

    $.ajax({
        url: getContextPath() + "/registerDevice",
        type: "POST",
        dataType: "json",
        data: {
            deviceId: element1,
            deviceName: element2,
            noOfMirrorDevice: element3,
            deviceSiteCode: element4,
            deviceDescription: element5,
            userId: null
        },
        success: function(response) {
            clearTimeout(timer);
            modal.style.display = "none";
            event.preventDefault();
            console.log("succree");
            //       alert("Content  uploaded successfully! ");
            bootbox.alert({
                message: '<span style="font-size:large">Device claimed successfully !</span>',
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
            clearTimeout(timer);
            bootbox.alert({
                message: '<span style="font-size:large;color:red">Device claimed failed !</span>',
                callback: function() {
                    console.log("inside bootbox alert");

                    location.reload();
                }
            });
        }
    });

}

function handleScrollLinkClick(event) {

    event.preventDefault();
    var card = $(event.target).closest("div.card");
    var hiddenotc = card.find("input[name='hiddenotc']").val();
    var otc = card.find("input[name='oneTimeCode']").val();
    var otcInput = card.find("input[name='oneTimeCode']");

    console.log("hiddenotc: " + hiddenotc);
    console.log("otc: " + otc);

    if (hiddenotc !== otc) {

        card.find("div[id='message']").html("Please enter correct Otc");
        return;
    } else {

        bootbox.dialog({
            message: 'OTC is successfully validated .Please proceed to register device.',
            buttons: {
                proceed: {
                    label: 'Proceed',
                    className: 'btn-primary',
                    callback: function() {
                        console.log('This was logged in the callback: ');
                    }
                }
            }
        });

        card.find("button[name='RegisterDevice']").show();
        card.find("div[id='message']").hide(); ////to hide string(please enter correct otc) in case it comes
        card.find("a").hide(); //to hide validate otc
        otcInput.prop('disabled', true); //to disable input field otc

    }
}
$(document).ready(function() {

    $('#cardContainer11 input[type="checkbox"]:first').prop('checked', true);
    // Event listener for dropdown selection

    if (selectcheckboxes.length === 1) {
        // If there's only one selected location, hide an element
        $("#cardContainer11").hide();
    } else {
        // If there's more than one selected location, show the element (if previously hidden)
        $("#cardContainer11").show();
    }



    $("#cardContainer11").on("change", showcards);
    $("#prgsModalWait").modal('hide');

    $("#successUpload").click(function(event) {
        location.reload();
    });


    $("#failedUpload").click(function(event) {
        location.reload();
    });
    $("#failedUpload").click(function(event) {
        location.reload();
    });
    $("[id='RegisterDevice']").hide();
    $(document).ready(function() {
        console.log("Binding click event to elements with class 'scroll-link'");
    });




    showcards();

});