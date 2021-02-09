$(document).ready(function(){
 
    $('#btn_login_details').click(function(){
     
     var error_email = '';
     var error_password = '';
     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     
     if($.trim($('#email').val()).length == 0)
     {
      error_email = 'Email is required';
      $('#error_email').text(error_email);
      $('#email').addClass('has-error');
     }
     else
     {
      if (!filter.test($('#email').val()))
      {
       error_email = 'Invalid Email';
       $('#error_email').text(error_email);
       $('#email').addClass('has-error');
      }
      else
      {
       error_email = '';
       $('#error_email').text(error_email);
       $('#email').removeClass('has-error');
      }
     }
     
     if($.trim($('#password').val()).length == 0)
     {
      error_password = 'Password is required';
      $('#error_password').text(error_password);
      $('#password').addClass('has-error');
     }
     else
     {
      error_password = '';
      $('#error_password').text(error_password);
      $('#password').removeClass('has-error');
     }
   
     if(error_email != '' || error_password != '')
     {
      return false;
     }
     else
     {
      $('#list_login_details').removeClass('active active_tab1');
      $('#list_login_details').removeAttr('href data-toggle');
      $('#login_details').removeClass('active');
      $('#list_login_details').addClass('inactive_tab1');
      $('#list_personal_details').removeClass('inactive_tab1');
      $('#list_personal_details').addClass('active_tab1 active');
      $('#list_personal_details').attr('href', '#personal_details');
      $('#list_personal_details').attr('data-toggle', 'tab');
      $('#personal_details').addClass('active in');
     }
    });
    
    $('#previous_btn_personal_details').click(function(){
     $('#list_personal_details').removeClass('active active_tab1');
     $('#list_personal_details').removeAttr('href data-toggle');
     $('#personal_details').removeClass('active in');
     $('#list_personal_details').addClass('inactive_tab1');
     $('#list_login_details').removeClass('inactive_tab1');
     $('#list_login_details').addClass('active_tab1 active');
     $('#list_login_details').attr('href', '#login_details');
     $('#list_login_details').attr('data-toggle', 'tab');
     $('#login_details').addClass('active in');
    });
    
    $('#btn_personal_details').click(function(){
     var error_first_name = '';
     var error_last_name = '';
     
     if($.trim($('#first_name').val()).length == 0)
     {
      error_first_name = 'First Name is required';
      $('#error_first_name').text(error_first_name);
      $('#first_name').addClass('has-error');
     }
     else
     {
      error_first_name = '';
      $('#error_first_name').text(error_first_name);
      $('#first_name').removeClass('has-error');
     }
     
     if($.trim($('#last_name').val()).length == 0)
     {
      error_last_name = 'Last Name is required';
      $('#error_last_name').text(error_last_name);
      $('#last_name').addClass('has-error');
     }
     else
     {
      error_last_name = '';
      $('#error_last_name').text(error_last_name);
      $('#last_name').removeClass('has-error');
     }
   
     if(error_first_name != '' || error_last_name != '')
     {
      return false;
     }
     else
     {
      $('#list_personal_details').removeClass('active active_tab1');
      $('#list_personal_details').removeAttr('href data-toggle');
      $('#personal_details').removeClass('active');
      $('#list_personal_details').addClass('inactive_tab1');
      $('#list_contact_details').removeClass('inactive_tab1');
      $('#list_contact_details').addClass('active_tab1 active');
      $('#list_contact_details').attr('href', '#contact_details');
      $('#list_contact_details').attr('data-toggle', 'tab');
      $('#contact_details').addClass('active in');
     }
    });
    
    $('#previous_btn_contact_details').click(function(){
     $('#list_contact_details').removeClass('active active_tab1');
     $('#list_contact_details').removeAttr('href data-toggle');
     $('#contact_details').removeClass('active in');
     $('#list_contact_details').addClass('inactive_tab1');
     $('#list_personal_details').removeClass('inactive_tab1');
     $('#list_personal_details').addClass('active_tab1 active');
     $('#list_personal_details').attr('href', '#personal_details');
     $('#list_personal_details').attr('data-toggle', 'tab');
     $('#personal_details').addClass('active in');
    });
    
    $('#btn_contact_details').click(function(){
     var error_address = '';
     var error_mobile_no = '';
     var mobile_validation = /^\d{10}$/;
     if($.trim($('#address').val()).length == 0)
     {
      error_address = 'Address is required';
      $('#error_address').text(error_address);
      $('#address').addClass('has-error');
     }
     else
     {
      error_address = '';
      $('#error_address').text(error_address);
      $('#address').removeClass('has-error');
     }
     
     if($.trim($('#mobile_no').val()).length == 0)
     {
      error_mobile_no = 'Mobile Number is required';
      $('#error_mobile_no').text(error_mobile_no);
      $('#mobile_no').addClass('has-error');
     }
     else
     {
      if (!mobile_validation.test($('#mobile_no').val()))
      {
       error_mobile_no = 'Invalid Mobile Number';
       $('#error_mobile_no').text(error_mobile_no);
       $('#mobile_no').addClass('has-error');
      }
      else
      {
       error_mobile_no = '';
       $('#error_mobile_no').text(error_mobile_no);
       $('#mobile_no').removeClass('has-error');
      }
     }
     if(error_address != '' || error_mobile_no != '')
     {
      return false;
     }
     else
     {
      $('#btn_contact_details').attr("disabled", "disabled");
      $(document).css('cursor', 'prgress');
      $("#register_form").submit();
     }
     
    });
    
   });