/* Custom Js */

$(document).ready(function() {
	 

$("input[name='gender']").click(function(){
   $("input[name='gender']").removeClass('active');   
   $(this).addClass('active');
});

$("input[name='marital']").click(function(){
   $("input[name='marital']").removeClass('active');   
   $(this).addClass('active');
});

$("input[name='jobs']").click(function(){
   $("input[name='marital']").removeClass('active');   
   $(this).addClass('active');
});

typeWrite('typewriter');


});




function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function typeWrite(span){
  $('#'+span).addClass('cursor')
  var text = $('#'+span).text();
  $('#'+span).text('');
  $('#'+span).removeClass('invisible');
  var randInt = 0
  for (var i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(100,500));
    var typing = setTimeout(function(y){
      $('#'+span).append(text.charAt(y));
    },randInt, i);
  };
  setTimeout(function(){
    $('#'+span).removeClass('cursor');
  },randInt+1500);
}




var now = new Date();
var month = now.getMonth()+1;
var day = now.getDate();
var twenty_two_ago = new Date(now.getFullYear()-22  + '/' + ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day);
//alert(twenty_two_ago);

var d = new Date();
var year = d.getFullYear() - 22;
d.setFullYear(year);
$('#dob').datepicker({ 
	changeYear: true, 
	changeMonth: true,
	 yearRange: '1940:' + year + '', 
	 defaultDate: d, maxDate:twenty_two_ago});

$("#dob").on("change paste keyup keypress click", function() {
	/* $('#dob').datepicker({
            uiLibrary: 'bootstrap4',
            format:'yyyy-mm-dd',
            endDate: twenty_two_ago,
            enableOnReadonly :true,
        });
	return true;
	/*	
	//$('#dob').datepicker('setDate',twenty_two_ago);
console.log(twenty_two_ago);
	//var $this=$(this);
     //$this.datepicker('hide');
    
    setTimeout(function(){
     	$("#dob").datepicker('endDate',twenty_two_ago);	
    },100);
   */
});




    $('.cMate_leadForm')
     // IMPORTANT: on('init.field.fv') must be declared
        // before calling .formValidation(...)
        .on('init.field.fv', function(e, data) {
            // $(e.target)  --> The field element
            // data.fv      --> The FormValidation instance
            // data.field   --> The field name
            // data.element --> The field element
            var $parent = data.element.parents('.form-group'),
                $icon   = data.element.data('fv.icon'),
                $label  = $parent.find('label');

            // Place the icon right after the label
            $icon.insertAfter($label);
        })
        .formValidation({
        framework: 'bootstrap4',

        control: {
            valid: "is-valid",
            invalid: "is-invalid"
        },
        row: {
            invalid: "has-danger"
        },
        button: {
            selector: "#formSubmit",
            disabled: "disabled"
        },/*
        err: {
                    clazz: "errormsg"
                },
        
       err: {
            container: 'tooltip'
        }, */
        icon: {
            valid: 'ion-checkmark-round',
            invalid: 'ion-android-close',
            validating: 'ion-load-a'
        },
        fields: {
            BikeBrand: {
            	
                validators: {
                    notEmpty: {
                        message: 'The Bike Brand is required'
                    },
                   
                  }
            },
           BikeModel: {
           	
                validators: {
                    notEmpty: {
                        message: 'The Bike Model is required'
                    },
                   
                  }
            },
           city: {
           	
                validators: {
                    notEmpty: {
                        message: 'The City is required'
                    },
                   
                  }
            },
           loanDate: {
           	
                validators: {
                    notEmpty: {
                        message: 'The Loan Date is required'
                    },
                   
                  }
            },
          
            name: {
            	
                validators: {
                    notEmpty: {
                        message: 'Your Name is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The Name must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'The username can only consist of alphabetical'
                    }
                }
            },
            email: {
                validators: {
                	notEmpty: {
                        message: 'Your Email is required'
                    },
                    emailAddress: {
                        message: "The email address is not valid"
                    }
                }
            },
            mobile: {
            	
                validators: {
                    notEmpty: {
                        message: 'Your Mobile Number is required'
                    },
                   
                    regexp: {
                        regexp: /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/,
                        message: 'Please Enter Correct Mobile Number'
                    }
                }
            },
            
            dob: {
            	
                validators: {
                	 date: {
                        format: 'YYYY-MM-DD',
                        message: 'The value is not a valid date',
                         max: twenty_two_ago,
                    },

                    notEmpty: {
                        message: 'Date of Birth is required'
                    },
                   
                    
                   
                  }
            },
            
            pincode: {
            	
                validators: {
                	zipCode: {
                            country: 'IN',
                            message: 'The value is not valid %s postal code'
                        },

                    notEmpty: {
                        message: 'Pin Code is required'
                    },
                   
                  }
            },
            
            gender: {
            	
                validators: {
                	
                    notEmpty: {
                        message: 'Gender is required'
                    },
                   
                  }
            },
            
            marital: {
            	
                validators: {
                	
                    notEmpty: {
                        message: 'Marital Status is required'
                    },
                   
                  }
            },
            
            jobs: {
            	
                validators: {
                	
                    notEmpty: {
                        message: 'Nature of Job is required'
                    },
                   
                  }
            },
            
            occupation: {
            	
                validators: {
                	
                    notEmpty: {
                        message: 'Occupation is required'
                    },
                   
                  }
            },
            
            income: {
            	
                validators: {
                	
                    notEmpty: {
                        message: 'Income is required'
                    },
                                   
                  }
            },
            
            residence: {
            	
                validators: {
                	
                    notEmpty: {
                        message: 'Residence is required'
                    },
                   
                  }
            },
            
            dependents: {
            	
                validators: {
                	
                    notEmpty: {
                        message: 'Number of Dependents'
                    },
                   
                  }
            },
            
            pannumber: {
            	
                validators: {
                    notEmpty: {
                        message: 'Your Pan Card Number is required'
                    },
                    stringLength: {
                        min: 10,
                        max: 10,
                        message: 'Pan Card is Invalid'
                    },
                    regexp: {
                        regexp: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                        message: 'Pan Card is Invalid'
                    }
                }
            },
            styledCheckbox1: {
            	
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            }
        }
    }).on('success.form.fv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Some instances you can use are
            var $form = $(e.target),        // The form instance
                fv    = $(e.target).data('formValidation'); // FormValidation instance
            // Do whatever you want here ...
                alert('Form Submitted Successfully');
        });



 function isNumeric(e) {
           var keyCode = e.which ? e.which : e.keyCode
           var ret = ((keyCode >= 48 && keyCode <= 57));
           return ret;
       }

 

	 /* Function for only Text Input **/
	 function isTextKey(evt){
		 
    var charCode = (evt.which) ? evt.which : event.keyCode;
	
	
	
    //if (charCode > 31 && (charCode > 48 || charCode < 57 ) && charCode != 32)
    if ((charCode > 47 && charCode <= 64) || (charCode > 0 && charCode <= 31) || (charCode > 90 && charCode <= 96) || (charCode > 122 && charCode <= 126) )
	{
		
      return false
	}
	
    return evt;
}    
	 




function CommaNumber(Num) { //function to add commas to textboxes

 var charCode = (Num.which) ? Num.which : event.keyCode;
 //alert(charCode);
 if (charCode > 31 && (charCode < 48 || charCode > 57 ) && charCode != 43)
	{
		
		//Number =Num.slice(0,-1);
		Number =Num.substring(0,Num.length-1);
        return false;
       
	}

	
	else if (charCode == 43 || charCode == 188 ){
		
		 Num += '';
        Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
        Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
        x = Num.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
       // return x1 + x2;
   		$('#income').val(x1 + x2);
	}
        Num += '';
        Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
        Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
        x = Num.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx =/(\d+)(\d{3})/;
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
       

        //return x1 + x2;
    	$('#income').val(x1 + x2);
    }

	 
	 /* Function for only Pincode  Input **/
	 function mobileNumber(evt){
		
    var charCode = (evt.which) ? evt.which : event.keyCode;
	 //alert(charCode);
	
	
    if (charCode > 31 && (charCode < 48 || charCode > 57 ) && charCode != 43)
	{
		
     evt =evt.slice(0,-1);
       // return evt;
        return evt;
	}

	else if(evt.length >=11 ){
		Num = Num.substring(0,11);
        return Num;
	}

	return evt;

}    
	 
	 
	 
	 /* Function for only Pincode  Input **/
	 function pincodeNumber(evt){
		
    var charCode = (evt.which) ? evt.which : event.keyCode;
	 //alert(charCode);
	
	
    if (charCode > 31 && (charCode < 48 || charCode > 57 ) && charCode != 43)
	{
		
     evt =evt.slice(0,-1);
       // return evt;
        return evt;
	}

	else if(evt.length >=7 ){
		Num = Num.substring(0,7);
        return Num;
	}

	else if (charCode == 43 || charCode == 188){
		
		return evt;
	}
	return evt;

}    
	 
	 
	 /* Function for only Number Input **/
	 function isNumberKey(evt){
		
    var charCode = (evt.which) ? evt.which : event.keyCode;
	 //alert(charCode);
	
	
    if (charCode > 31 && (charCode < 48 || charCode > 57 ) && charCode != 43)
	{
		
        return false;
	}
	else if (charCode == 43 || charCode == 188){
		
		return true;
	}
	return true;

}    
	 
	