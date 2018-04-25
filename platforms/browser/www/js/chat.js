var member_srl = window.localStorage.getItem("member_srl");



function gotop() {
  console.log("top");
   
}

function make_room() {
  var uuid=device.uuid;
   var modal = UIkit.modal("#make_chat_uk_modal");
    modal.show();

}

function make_chat_room() {
  var title=$("#chat_room_title").val();
  var mode=$("#chat_mode").val();
  var uuid=device.uuid;

  if (!title) {
    alert_msg("방제목을 입력하세요.");
    return;
  }
  if (mode==2) {
   alert_msg("알림","비공개방은 대화상태를 초대해야만 대화가 가능합니다.");
  }
  $.post("http://homes1004.cafe24.com/chat/make_room_app.php",
   {
    title:title,
    member_srl:member_srl,
    mode:mode,
    uuid:uuid
       },
   function(data){
 //  console.log(data);
    chat_show();
    alert_msg("알림","대화방이 생성되었습니다.");
  var modal = UIkit.modal("#make_chat_uk_modal");
    modal.hide();  
   });
}

function chat_room_make(title,member_srl,uuid){
  var title=title;
  var member_srl=member_srl;
  var uuid=uuid;
    $.post("http://homes1004.cafe24.com/chat/make_room.php",
   {
    title:title,
    member_srl:member_srl,
    uuid:uuid
       },
   function(data){
    chat_show();
    alert_msg("알림","대화방이 생성되었습니다.");
    
   });
     
}

function open_chat_room (no) {
  menu="chat_open";
  $("#chat_body").html('');
$("#chat_room_modal").addClass('active');
  var no=no;
  var uuid=device.uuid;
   console.log("회원 번호 "+member_srl);
 $.post("http://homes1004.cafe24.com/chat/chat_list_app.php",
   {
    no:no,
    member_srl:member_srl,
    uuid:uuid
    
       },
   function(data){
 // console.log(data);
$("#chat_body").html(data);
//console.log(data);
chat_page_top();
   });
  $("#room_no").val(no);

  

}
function chat_page_top() {
  $(document).ready(function(){
  htop=$('#chat_body').height();
 // console.log("h"+htop);
  $('.content').scrollTop(htop); 
  });
}


function save_chat() {
  var uuid=device.uuid;
  var room_no=$("#room_no").val();
  var chat_msg=$("#chat_msg").val();
  var from_lan=$("#from_lan").val();
  if (!chat_msg){
    alert_msg("경고","내용을 입력해주세요.");
    exit;
  }


    $.post("http://homes1004.cafe24.com/chat/chat_save_app.php",
   {
    room_no:room_no,
    uuid:uuid,
    member_srl:member_srl,
    chat_msg:chat_msg,
    from_lan:from_lan
       },
   function(data){
  //open_chat(room_no);
 // console.log(data);
  $("#chat_msg").val('');

   });
}



// 대화갱신
function sc_size_scheck() {

var top=$("#chat_body").offset().top;
var height=$("#chat_body").height();
var height2=$("#chat_room_modal").height();
var last_no=$("#last_no").val();
var postop=(top*-1)+height2-90;
var var1=height-postop;
//console.log(last_no);
//console.log("top"+postop+"height"+height+"cheight"+height2+"var1"+var1);
if (height<height2) {
check_new_chat();
} else if (var1<190) {
  check_new_chat();
} else if (last_no==0) {
  check_new_chat();
}



}
 function check_new_chat() {
  var last_no=$("#last_no").val();
  var room_no=$("#room_no").val();
  var check_chat=$("#check_chat").val();

  $("#check_chat").val("t");
  if (check_chat=="t") {
    exit;
  
  }

  // console.log(last_no+" "+room_no+" "+check_chat); 
   $.post("http://homes1004.cafe24.com/chat/check_new_chat_no_app.php",
   {
    
    last_no:last_no,
    room_no:room_no
    
       },
   function(data){
 //   console.log(data);
     var data=data;

     if (data) {
      $("#last_no").val(data);
      $("#check_chat").val("t");
    re_open_chat_room();
     
     } else {
       $("#check_chat").val("f");
     }


   });

}

// 대화 내용 경신
function reload_chat(room_no,last_no) {
  var room_no=room_no;
  var last_no=last_no;
  var uuid=device.uuid;
//  console.log('last_no'+last_no+" "+room_no);
   $.post("http://homes1004.cafe24.com/chat/check_list_app.php",
   {
    
    last_no:last_no,
    room_no:room_no,
    member_srl:member_srl,
    uuid:uuid
    
       },
   function(data){
     if (data) {
      
        $("#chat_body").append(data); 

     }
 $("#check_chat").val("f"); 
 htop=$('#chat_body').height();
$('.content').scrollTop(htop);

   });
}


function re_open_chat_room () {
  var no=$("#room_no").val();
  var uuid=device.uuid;
  var to_lan=$("#to_lan").val();
//   console.log(member_srl);
 $.post("http://homes1004.cafe24.com/chat/chat_list_app.php",
   {
    no:no,
    
    uuid:uuid,
    to_lan:to_lan
    
       },
   function(data){
$("#chat_body").html(data);
//console.log(data);
chat_page_top();
   });
  $("#room_no").val(no);

  

}



function exit_chat_room(button) {
    if(button==2){//If User selected No, then we just do nothing
        return;
    }else{
        $("#chat_room_modal").removeClass('active');
        menu="chat";
    }
}
function black_list(member_srl) {
     var room_no=$("#room_no").val();
     var member_srl=member_srl;
      console.log("회원번호"+member_srl+" room_no "+ room_no);

       $.post("http://homes1004.cafe24.com/chat/save_black_list.php",
   {
   room_no:room_no,
   member_srl:member_srl
    
       },
   function(data){
    chat_member_list();

   });

      alert_msg("알림","선택하신 회원을 강퇴 시켰습니다.");

}

function delete_chat(room_no,no) {
  var room_no=room_no;
   var no=no;
   UIkit.modal.confirm('삭제하시겠습니까?', function(){ 
    delete_chat_go(no);
  });

    
}

function delete_chat_go(no) {
  var no=no;
  $.post("http://homes1004.cafe24.com/chat/delete_chat.php",
   {
   
    no:no
       },
   function(data){
     re_open_chat_room ();

   });
}

function chat_member_list() {
  var member_srl = window.localStorage.getItem("member_srl");
   $("#chat_member_list_modal").addClass('active');
   var room_no=$("#room_no").val();
    console.log("회원번호"+member_srl+" room_no "+ room_no);
    $.post("http://homes1004.cafe24.com/chat/chat_member_list_app.php",
   {
    member_srl:member_srl,
    room_no:room_no
       },
   function(data){
    console.log(data);
    $("#chat_member_list_contents").html(data);
     

   });

      
}

// 방삭제 
function delete_chat_room() {
  var room_no=$("#room_no").val();
  
navigator.notification.confirm(
    '대화방을 삭제 하시겠습니까?', // message
     check_room_delete,            // callback to invoke with index of button pressed
    '알림',           // title
    ['삭제','취소']     // buttonLabels
);
}

function check_room_delete(btn) {
      var btn=btn;
      var room_no=$("#room_no").val();
      if (btn==1) {
    
        $.post("http://homes1004.cafe24.com/chat/chat_room_delete_app.php",
   {
    
    room_no:room_no
       },
   function(data){
        console.log(data);
        alert_msg("알림",'삭제 되었습니다.')
  $("#chat_member_list_modal").removeClass('active');
  $("#chat_room_modal").removeClass('active');
  chat_show();


   });


      }
    
}
