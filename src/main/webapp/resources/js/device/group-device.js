
function toggleFields(){
	   var toggle = document.getElementById('toggle');
	   if(!toggle.checked){
    $('#createGroup').prop('disabled', true);
    $('#groupDropdown').prop('disabled', false);
    $('#removeGroup').prop('disabled', false);
        $('#LinkedGroupList').show();
        $('#NotLinkedGroupList').show();
        $('#cardContainer').hide();
		
	   }
	   else{
		   $('#groupDropdown').prop('disabled', true);
		    $('#createGroup').prop('disabled', false);
		    $('#removeGroup').prop('disabled', true);
		    $('#LinkedGroupList').hide();
	        $('#NotLinkedGroupList').hide();
	        $('#newgrp').val('');
	      $('#createNewGroupModal').show();
			          
	   }
    
}





function submitgrpname() {
	$('#createNewGroupModal').hide();	
	 var groupName = document.getElementById('newgrp').value;	 
	 document.getElementById('displayGroupName').innerHTML = '<h6> Created Group Name: ' + groupName+'(Please add device to the new group)</h6>';
	 $("#cardContainer").show();
		
}
  function handleDropdownChange(dropdown) {
      var selectedGroupId = dropdown.value;
    const selectedGroup = $('#groupDropdown').val();
    $.ajax({
      type: 'POST',
      url: getContextPath() +'/getGroupDetails', // Replace with your controller endpoint
      success: function(data) {
        const parsedData = JSON.parse(data);
        updateTables(parsedData, selectedGroup);
      },
      error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
      }
    });
  }
  function toggleButtonStateFordevicesInGroupTable() {
	   console.log('toggleButtonStateFordevicesInGroupTable');
      const selectedCheckboxes = $('#devicesInGroupTable input.checkboxrow:checked');
      const removeFromGroupButton = $('#removeFromGroup');

      if (selectedCheckboxes.length > 0) {
          // At least one checkbox is selected, so disable the button
          removeFromGroupButton.prop('disabled', false);
      } else {
   	      
          // No checkboxes are selected, so enable the button
          removeFromGroupButton.prop('disabled', true);
      }
  }
  
  function toggleButtonStateFordevicesNotInGroupTable() {
	   console.log('toggleButtonStateFordevicesNotInGroupTable');
     const selectedCheckboxes = $('#devicesNotInGroupTable input.checkboxrow:checked');
     const addFromGroupButton = $('#addFromGroup');

     if (selectedCheckboxes.length > 0) {
         // At least one checkbox is selected, so disable the button
         addFromGroupButton.prop('disabled', false);
     } else {
  	     
         // No checkboxes are selected, so enable the button
         addFromGroupButton.prop('disabled', true);
     }
 }  
  
  function toggleButtonStateFormainGroupTable() {
	   console.log('toggleButtonStateFormainGroupTable');
    const selectedCheckboxes = $('#mainTable input.checkboxrow:checked');
    const createNewGroupButton = $('#createNewGroup');

    if (selectedCheckboxes.length > 0) {
        // At least one checkbox is selected, so disable the button
        createNewGroupButton.prop('disabled', false);
    } else {
 	     
        // No checkboxes are selected, so enable the button
        createNewGroupButton.prop('disabled', true);
    }
}  
  // Initial state
  toggleButtonStateFordevicesInGroupTable();
  toggleButtonStateFordevicesNotInGroupTable();
  toggleButtonStateFormainGroupTable();
  function updateTables(data, selectedGroup) {
	  console.log('updateTables data>>',data);
	    $("#cardContainer").hide();
	    $("#LinkedGroupList").show();
	    $("#NotLinkedGroupList").show();
	    const devicesInGroupTable1 = $('#devicesInGroupTable tbody');
	    const devicesNotInGroupTable = $('#devicesNotInGroupTable tbody');
	    devicesInGroupTable1.empty();
	    devicesNotInGroupTable.empty();
		
	    $.each(data, function(index, group) {
	        const groupDetails = group.groupDetails.find(details => details.groupId === selectedGroup);
	        const groupIdsAndNames = group.groupDetails.map(details => details.groupId + '(' + details.groupName + ')').join(', ');
	        var transformedgroupIdsAndNames = groupIdsAndNames.split(', ').slice(1).join(', ');
			console.log('groupIdsAndNames'+groupIdsAndNames);
			console.log('transformedgroupIdsAndNames'+transformedgroupIdsAndNames);
			
			if(transformedgroupIdsAndNames==''){
				transformedgroupIdsAndNames='Not availabe in any group';
			}
			console.log('newtransformedgroupIdsAndNames'+transformedgroupIdsAndNames);
			
		        if (groupDetails) {
	            devicesInGroupTable1.append('<tr>' +
	                '<td><input type="checkbox" style="margin-top:7px"  class="checkboxrow" id="' + group.deviceId + '"></td>' +
	                '<td>' + group.deviceId + '</td>' +
	                '<td>' + group.deviceName + '</td>' +
	                '<td>' + group.deviceSiteCode + '</td>' +
	                '<td style="max-width:400px; white-space: normal;"">' + transformedgroupIdsAndNames + '</td>' +
	                '<td>' + group.noOfMirrorDevice + '</td>' +
	                '</tr>');
	        } else {
	            devicesNotInGroupTable.append('<tr>' +
	                '<td><input type="checkbox"  style="margin-top:7px"  class="checkboxrow" id="' + group.deviceId + '"></td>' +
	                '<td>' + group.deviceId + '</td>' +
	                '<td>' + group.deviceName + '</td>' +
	                '<td>' + group.deviceSiteCode + '</td>' +
	                '<td style="max-width:400px; white-space: normal;">' + transformedgroupIdsAndNames + '</td>' +
		            '<td>' + group.noOfMirrorDevice + '</td>' +
	                '</tr>');
	        }
	    });
	    
	    $('#devicesInGroupTable input.checkboxrow').on('change', toggleButtonStateFordevicesInGroupTable);
	    $('#devicesNotInGroupTable input.checkboxrow').on('change', toggleButtonStateFordevicesNotInGroupTable);
	      
	}
	//to just remove te whitesapces
  function trimArrayElements(str) {
	    // Split the string into an array based on commas
	    var array = str.split(',');
	    
	    // Trim each element in the array
	    var trimmedArray = array.map(function(element) {
	        return element.trim();
	    });
	    
	    return trimmedArray.join(', ');
	}
        $(document).ready(function() {
        	
        	$('#myForm').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    newgrp: {
                    	  group: '.col-md-8',
                        validators: {
                            notEmpty: {
                                message: 'Please enter a valid group name'
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9\s]+$/,
                                message: 'Invalid input. Only letters and white spaces are allowed.'
                            },
                            stringLength: {
                                max: 10,
                                message: 'Maximum 10 characters allowed.'
                            }
                        }
                    }
                }
            }).on('click', '#buttonCreateNewGrpSubmit', function (e) {
			    e.preventDefault();
			    var form = $(this).closest('form');
			    var validator = form.data('bootstrapValidator');
			    validator.validate();
			    console.log("var submit is " + validator.isValid());
			    console.log("var button is " + this);
			    if (validator.isValid()) {
			        console.log('successfully validated');
			        submitgrpname();
			    }
			});
       
        	
     	const style = '<style>.fixed-width-cell { width: 20px;  }</style>';
          $('head').append(style);
        
         //just removing the createGroup (),
          $('#mainTable td:nth-child(3)').each(function() {
              var content = $(this).text();
              console.log('content'+trimArrayElements(content));
              var newcontent=trimArrayElements(content);
              newcontent = newcontent.replace(/^\(\)\,/, '');
              if(newcontent==='()'){
            	  newcontent='Not available in any group';
              }
              $(this).text(newcontent);
              console.log('new content'+newcontent);
              
          });
          
          $("#LinkedGroupList").hide();
          $("#NotLinkedGroupList").hide();
          $("#cardContainer").hide();
          $('#createGroup').click(function() {
            $("#LinkedGroupList").hide();
            $("#NotLinkedGroupList").hide();
            $("#cardContainer").hide();
            $("#createNewGroupModal").modal('show'); 
         //   $("#groupDropdown").hide();
            console.log('createGroup clicked');
            // Disable the dropdown
            $('#removeGroup').prop('disabled', true);
            
            // Disable the link
            $('#groupDropdown').prop('disabled', true);
        	
          });
          
          $('#closeModalDeleteGroup').click(function() {
        	  $('#removeGroupModal').modal('hide'); 			  
            });
   		  
          
          $('#buttonCreateNewGrpClose').click(function() {
        		$('#createNewGroupModal').hide();
              	  
            });
         
 			$('#closeModalRemoveGrp').click(function() {
 				$('#removeGroupModal').hide();
          });
 		
 		
 			
 			
 			
          $('#removeFromGroup').click(function() {
            var dropdown = document.getElementById('groupDropdown');
            var selectedGroupId = dropdown.value;
            console.log('groupId for removefromgroup' + selectedGroupId);
            var selectedDeviceDetails = {
              groupId: selectedGroupId,
              deviceId: []
            };
            $('#devicesInGroupTable tbody tr').each(function() {
              var $row = $(this);
              
              if ($row.find('input[type="checkbox"]').is(':checked')) {
                var deviceIdCode = $row.find('td:nth-child(2)').text();
                
                selectedDeviceDetails.deviceId.push(deviceIdCode);
              }
            });
            console.log('devicesInGroupTable' + JSON.stringify(selectedDeviceDetails));
            // Make an AJAX request to submit the selectedDeviceDetails
             $.ajax({
              url: getContextPath() +'/removeFromGroup', // Replace with your appropriate URL
              type: 'POST',
              data: JSON.stringify(selectedDeviceDetails),
              contentType: 'application/json',
              success: function(response) {
                // Handle success response
                console.log('Devices removed from group:', response);
                bootbox.alert({
        			message: '<span style="font-size:large">   Device removed from group successfully !</span>',
        			callback: function () {
        	               console.log("inside bootbox alert");
        	               
        				location.reload();
        			}
        		});
              },
              error: function(error) {
                // Handle error
                     	bootbox.alert({
    			message: '<span style="font-size:large;color:red"> Failed to remove device from group !</span>',
    			callback: function () {
    	               console.log("inside bootbox alert");
    	               
    				location.reload();
    			}
    		});
                console.error('Error:', error);
              }
            }); 
          });
          $('#addFromGroup').click(function() {
            var dropdown = document.getElementById('groupDropdown');
            var selectedGroupId = dropdown.value;
            console.log('groupId' + selectedGroupId);
            var selectedDeviceDetails = {
              groupId: selectedGroupId,
              deviceId: []
            };
            $('#devicesNotInGroupTable tbody tr').each(function() {
              var $row = $(this);
              if ($row.find('input[type="checkbox"]').is(':checked')) {
                var deviceIdCode = $row.find('td:nth-child(2)').text();
                selectedDeviceDetails.deviceId.push(deviceIdCode);
              }
            });
            console.log('devicesNotInGroupTable,' + JSON.stringify(selectedDeviceDetails));
            // Make an AJAX request to submit the selectedDeviceDetails
            $.ajax({
              url: getContextPath() +'/addFromGroup', // Replace with your appropriate URL
              type: 'POST',
              data: JSON.stringify(selectedDeviceDetails),
              contentType: 'application/json',
              success: function(response) {
                // Handle success response
                console.log('Devices added from group:', response);
                bootbox.alert({
        			message: '<span style="font-size:large">   Device added to group successfully !</span>',
        			callback: function () {
        	               console.log("inside bootbox alert");
        	               
        				location.reload();
        			}
        		});
                
              },
              error: function(error) {
                // Handle error
                     	bootbox.alert({
    			message: '<span style="font-size:large;color:red"> Failed to add Device to group !</span>',
    			callback: function () {
    	               console.log("inside bootbox alert");
    	               
    				location.reload();
    			}
    		});
                console.error('Error:', error);
              }
            });
          });
          
          //create group
          $('#createNewGroup').click(function() {
        	  var groupName = document.getElementById('newgrp').value;	 
         	 console.log('groupName' + groupName);
             var selectedDeviceDetails = {
              groupName: groupName,
              userId:null,
              deviceId: []
            };
            $('#mainTable tbody tr').each(function() {
              var $row = $(this);
              if ($row.find('input[type="checkbox"]').is(':checked')) {
                var deviceIdCode = $row.find('td:nth-child(2)').text();
                selectedDeviceDetails.deviceId.push(deviceIdCode);
              }
            });
            console.log('mainTable,' + JSON.stringify(selectedDeviceDetails));
            // Make an AJAX request to submit the selectedDeviceDetails
            $.ajax({
              url: getContextPath() +'/createNewGroup', // Replace with your appropriate URL
              type: 'POST',
              data: JSON.stringify(selectedDeviceDetails),
              contentType: 'application/json',
              success: function(response) {
                // Handle success response
                console.log('Devices added to new group:', response);
                   
                bootbox.alert({
        			message: '<span style="font-size:large">   Device added to new group successfully !</span>',
        			callback: function () {
        	               console.log("inside bootbox alert");
        	               
        				location.reload();
        			}
        		});
                },
              error: function(error) {
                // Handle error
                	bootbox.alert({
    			message: '<span style="font-size:large;color:red"> Failed to add Device to new group !</span>',
    			callback: function () {
    	               console.log("inside bootbox alert");
    	               
    				location.reload();
    			}
    		});
                console.error('Error:', error);
              }
            });
          });
          
          //remove group
           $('#removeGroup').click(function() {
        	    $("#LinkedGroupList").hide();
                $("#NotLinkedGroupList").hide();
                $("#cardContainer").hide();
                console.log('removeGroup clicked');
             
                var dropdown = document.getElementById('groupDropdown');
                var selectedGroupId = dropdown.value;
                console.log('groupId' + selectedGroupId);
               
                var selectedDeviceDetails = {
              groupId: selectedGroupId,
              userId:null,
            };
            // Make an AJAX request to submit the selectedDeviceDetails
            $.ajax({
              url: getContextPath() +'/removeGroup', // Replace with your appropriate URL
              type: 'POST',
              data: JSON.stringify(selectedDeviceDetails),
              contentType: 'application/json',
              success: function(response) {
                // Handle success response
          bootbox.alert({
        			message: '<span style="font-size:large">  group  removed successfully !</span>',
        			callback: function () {
        	               console.log("inside bootbox alert");
        	               
        				location.reload();
        			}
        		});
                // Perform any necessary actions after successful removal
              },
              error: function(error) {
                // Handle error	
                bootbox.alert({
    			message: '<span style="font-size:large;color:red"> Removing group failed !</span>',
    			callback: function () {
    	               console.log("inside bootbox alert");
    	               
    				location.reload();
    			}
    		});
                console.error('Error:', error);
              }
            });
          });
           $('#mainTable input.checkboxrow').on('click', toggleButtonStateFormainGroupTable);
   		
          
        });
    