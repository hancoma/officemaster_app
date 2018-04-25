function onSuccess_contacts(contacts) {
 console.log(contacts.length);
 
 var list;
 var email;    
 var name;
 var telephone;
    for (var i=0; i<contacts.length; i++)
        {

     name=contacts[i].displayName;
     email="";
     telephone="";
     
     
if (contacts[i].emails) {                        
for (var j=0; j<contacts[i].emails.length; j++) {
    email=email+contacts[i].emails[j].value+"\n";
    }
 } 
  

if (contacts[i].phoneNumbers) {                        
for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
    telephone=telephone+contacts[i].phoneNumbers[j].value+"\n";
    }
 }
 if (name) {
  
        if (telephone) {
 list="<li class='table-view-cell'><a  onclick='send_sms("+telephone+")'>문자</a><a class='navigate-right'>"+name+"\n"+email+"\n"+telephone+"</a></li>";
$( "#contacts_list" ).append( list );
save_phonenumber(name,telephone); 
    }
    }

save_contact_update("Y");
  
 
}

  
 

};
function send_sms (telephone) {
    var telephone=telephone;
    SMS.sendSMS("01027457280", "hello, raymond", function(){ alert("sendSMS"); }, function(){ alert("sendSMS error");  });
alert_msg("WHAT",telephone);
}
function onError_contacts(contactError) {
    alert('onError!');
};

function address_list() {
  var member_srl = window.localStorage.getItem("member_srl");
   $.post("http://homes1004.cafe24.com/save_phonenumber_check.php",
               {
                member_srl:member_srl
                   },
               function(data){
                var data=data;
                  if (data=="Y") {
                    view_contact();
                  } else {
                    address_list_save();
                  }
               });
  
 } 
// find all contacts
function address_list_save() {
  var options = new ContactFindOptions();
options.filter = "";
options.multiple = true;
filter = ["*"];
$("#contacts_modal").addClass('active');
navigator.contacts.find(filter, onSuccess_contacts, onError_contacts, options);
}


function save_phonenumber(name,telephone) {
  var member_srl = window.localStorage.getItem("member_srl");
  var name=name;
  var telephone=telephone;
  $.post("http://homes1004.cafe24.com/save_phonenumber.php",
               {
                member_srl:member_srl,
                name:name,
                telephone:telephone
                   },
               function(data){
                
               });

}

function save_contact_update(data) {
  var member_srl = window.localStorage.getItem("member_srl");
  var data=data;
  $.post("http://homes1004.cafe24.com/save_contact_update.php",
               {
                member_srl:member_srl,
                data:data
                   },
               function(data){
                
               });

}

function view_contact() {
  var member_srl = window.localStorage.getItem("member_srl");
  var data=data;
  $("#contacts_modal").addClass('active');
  $.post("http://homes1004.cafe24.com/contact_list.php",
               {
                member_srl:member_srl
                   },
               function(data){
                var data=data;
                $("#contacts_list").html(data);
                
               });

}