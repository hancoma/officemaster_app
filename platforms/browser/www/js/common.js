var user_id = window.localStorage.getItem("user_id");
var member_srl = window.localStorage.getItem("member_srl");
var language = window.localStorage.getItem("language");
var uuid=device.uuid;
var basic_url="http://homes1004.cafe24.com/";
var room_no=0;
var menu;
function trans_show() {
  
    $("#trans_modal").addClass('active');
}
function show_wallet() {
    
    $("#wallet_modal").addClass('active');
    var member_srl = window.localStorage.getItem("member_srl");
    console.log("지갑"+member_srl);
     $.post("http://homes1004.cafe24.com/wallet_main.php",
   { 
    
    member_srl:member_srl
    
       },
   function(data){
   
$("#wallet_contents").html(data);
   });
}


function send_point() {
    
    $("#send_point_modal").addClass('active');
    var member_srl = window.localStorage.getItem("member_srl");

    console.log("보내기지갑"+member_srl);
     $.post("http://homes1004.cafe24.com/send_point.php",
   { 
    
    member_srl:member_srl
    
       },
   function(data){
   
$("#send_point_contents").html(data);
   });
}

function point_press() {
  var member_srl=$("#member_srl").val();
  var member_srl2=$("#member_srl2").val();
  var point=$("#point").val();
  if (!member_srl2) {
    alert_msg("경고","받으시는 분 지갑주소를 입력하세요.");
    return;
  }
  if (!point) {
    alert_msg("경고","보내실 포인트를 입력하세요.");
    return;
  }

   $.post("http://homes1004.cafe24.com/send_press.php",
   { 
    member_srl:member_srl,
    member_srl2:member_srl2,
    point:point
    
       },
   function(data){
   alert_msg("메시지",data);
send_point();
   });


}

function trans_history_btn() {
    
    

    $("#trans_list_modal").addClass('active');
    trans_list_view();
}
function trans_list_view() {
     var member_srl = window.localStorage.getItem("member_srl");

     $.post("http://homes1004.cafe24.com/trans_list.php",
   {
    
    member_srl:member_srl
    
       },
   function(data){
   
$("#trans_list_contents").html(data);
   });
}

function trans_view_contents(no){
  var no=no;
      $("#trans_view_modal").addClass('active');

$.post("http://homes1004.cafe24.com/trans_view.php",
   {
    
    no:no
    
       },
   function(data){
   
$("#trans_view_contents").html(data);
   });

}

function friend_add() {
    var url="http:/homes1004.cafe24.com/kakaolink.php"
  open_web(url);
}

function img_trans_show(data) {
    var data=data;
    $("#trans_modal").addClass('active');
    $("#trans_contents_box").html(data);

}

function open_url(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_self', 'location=no');
}
function open_web(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_system', 'location=no');
}

function open_left() {
    UIkit.offcanvas.show('#offcanvas-left');
    load_left();
}

function open_right() {
    UIkit.offcanvas.show('#offcanvas-right');
    //load_right();
}

// msg 
function alertDismissed() {
    // do something
}
function trans_btn() {
  var trans_contents=$("#trans_contents_box").val();
    var trans_language2=$("#trans_language2").val();
  var member_srl = window.localStorage.getItem("member_srl");
  
  console.log(trans_contents);
  $.post("http://homes1004.cafe24.com/trans_app.php",
   {
    trans_contents:trans_contents,
  
    trans_language2:trans_language2,
    member_srl:member_srl
    
       },
   function(data){
$("#trans_contents_box2").val(data);
   });
}
function  trans_save_btn(argument) {
  var trans_contents2=$("#trans_contents_box2").val();
  var member_srl = window.localStorage.getItem("member_srl");

  alert_msg("알림","번역 내용이 저장 되었습니다.");
  $.post("http://homes1004.cafe24.com/trans_save_app.php",
   {
    member_srl:member_srl,
    trans_contents2:trans_contents2
    
       },
   function(data){
$("#trans_contents_box2").val(data);
   });

  // body...
}
function save_room() {
      
   
    
    var params = jQuery("#room_form").serialize(); // serialize() : 입력된 모든Element(을)를 문자열의 데이터에 serialize 한다.
    jQuery.ajax({
        url: 'http://homes1004.cafe24.com/save_room.php',
        type: 'POST',
        data:params,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8', 
        dataType: 'html',
        success: function (result) {
            if (result!="ok"){
              
              alert(result);
                // 데이타 성공일때 이벤트 작성
            } else {
              var modal = UIkit.modal("#modal_join");

    modal.hide();
              alert("감사합니다.등록 되었습니다.");

            }
         }
    });

  }

function alert_msg(title,msg) {
    var title=title;
    var msg=msg;
   navigator.notification.alert(
    msg,  // message
    alertDismissed,         // callback
    title,            // title
    'OK'                  // buttonName
);
}
function load_left() {
    $.post("http://ku4h.com/left_menu_app.php",
   {
    
    
       },
   function(data){
$("#left_menu").html(data);
   });
}

function load_right() {
    $.post("http://ku4h.com/right_menu_app.php",
   {
    
    
       },
   function(data){
$("#right_menu").html(data);
   });
}

// 메인페이지

function main_show() {
  var user_id = window.localStorage.getItem("user_id");
var member_srl = window.localStorage.getItem("member_srl");
alert(member_srl);
   $.ajax({
            type:"GET",
            data: { member_srl : member_srl },
            url:"http://homes1004.cafe24.com/bang_list.php",
            success:function(data){
                $("#main_contents").html(data);
            }
        })
}
function input_bang() {
  var uuid=device.uuid;
   $.ajax({
            type:"GET",
            data: { uuid : uuid },
            url:"http://homes1004.cafe24.com/bang_input.php",
            success:function(data){
                $("#main_contents").html(data);
            }
        })
}
function get_juso() {
   $("#juso_modal").addClass('active');
}
// 기본 정보 
function get_kind() {
   $("#kind_modal").addClass('active');
}

function get_kind2() {
   $("#kind2_modal").addClass('active');
}

function get_kind3() {
   $("#kind3_modal").addClass('active');
}
function end_address() {
   var address1=$("#autocomplete").val();
  var address2=$("#address2").val();

  $("#addr1").val(address1);
  $("#addr2").val(address2);
  $("#juso_modal").removeClass('active');
    $("#juso_icon").html("입력완료");
    $("#juso_icon").addClass("badge-primary")

}

function end_kind() {
   
  $("#kind_modal").removeClass('active');
    $("#kind_icon").html("입력완료");
    $("#kind_icon").addClass("badge-primary")

}
function end_kind2() {
   
  $("#kind2_modal").removeClass('active');
   $("#kind2_icon").html("입력완료");
    $("#kind2_icon").addClass("badge-primary")

}

function end_kind3() {
   
  $("#kind3_modal").removeClass('active');
   $("#kind3_icon").html("입력완료");
    $("#kind3_icon").addClass("badge-primary")

}

function get_bang() {
   $("#bang_modal").addClass('active');
}
function chat_show() {
  var uuid=device.uuid;
  menu="chat";
  var member_srl = window.localStorage.getItem("member_srl");

  console.log("대화방");
  $("#map").hide();
  $("#main_contents").hide();
  $("#chat_icon").addClass('active');

  $.ajax({
            type:"GET",
            data: { member_srl : member_srl },
            url:"http://homes1004.cafe24.com/chat/chat_room_list_app.php",
            success:function(data){
             
                $("#chat_contents").html(data);
            }
        })
}


function talk_show() {
  // 지도 숨김 
 // $("#photo_icon").addClass('active');
 $("#chat_icon").addClass('active');
 console.log(member_srl+"talk");

 $.post("http://ku4h.com/talk_list_app.php",
   {
    member_srl:member_srl
    
       },
   function(data){

$("#main_contents").html(data);
  
   });

}

function photo_show(cat) {
  var cat=cat;
  // 지도 숨김 
  $("#photo_icon").addClass('active');
 $.post("http://ku4h.com/photo_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#main_contents").html(data);
  
   });

}

function photo_tag_show(tag) {
  var tag=tag;
  // 지도 숨김 
  console.log(tag);
  $("#photo_icon").addClass('active');
 $.post("http://ku4h.com/photo_list_app.php",
   {
  
    tag:tag
    
       },
   function(data){

$("#main_contents").html(data);
  
   });

}
function photo_search_show() {

UIkit.modal.prompt("검색어:", "", function(tag){
   photo_tag_show(tag);
});



}

function freeboard_show(cat) {
  var cat=cat;
  member_srl=member_srl;
$("#board_icon").addClass('active');
  $("#top_banner").html("커뮤니티");
 $.post("http://ku4h.com/freeboard_list_app.php",
   {
    cat:cat,
    member_srl:member_srl
    
       },
   function(data){

$("#main_contents").html(data);

   });

}

function shop_show() {
  console.log("쇼핑");
  $("#shop_icon").addClass('active');
  $.ajax({
            type:"GET",
            url:"http://www.ku4h.com/shop_list.php",
            success:function(data){
                $("#main_contents").html(data);
            }
        })
}

function blog_show() {
  console.log("블로그");
  $("#blog_icon").addClass('active');
  $.ajax({
            type:"GET",
            url:"http://www.ku4h.com/atopy_blog.php",
            success:function(data){
                $("#main_contents").html(data);
            }
        })
}

function qna_show(cat) {
  var cat=cat;
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("qna");
 $.post("http://ku4h.com/qna_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function goods_show(cat) {
  var cat=cat;
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("goods");
 $.post("http://ku4h.com/goods_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function parade_show(cat) {
  var cat=cat;
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/parade_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function chat_job_show(cat) {
  var cat=cat;
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/chat_job_app.php",
   {
    sub_code:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function friend_show() {
    $("#map").hide();
  $("#top_banner").show();
 
   $.post("http://gallerybear.com/around_list_app.php",
   {
    
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function more_friend() {
  var last_no=$("#last_no").val();
  console.log(last_no);
    $.post("http://gallerybear.com/around_list_app.php",
   {
    last_no:last_no
    
       },
   function(data){

$("#company_list").append(data);
var obj = $("#member_list").offset();
console.log("left: " + obj.left + "px, top: " + obj.top + "px");
$("#member_list").css("margin-top", obj.top);
   });

}

function global_show(sub_code) {
  var sub_code=sub_code;
   $("#map").hide();
  $("#top_banner").show();
 
   $.post("http://gallerybear.com/global_list_app.php",
   {
    sub_code:sub_code
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function more_global(sub_code) {
  var last_no=$("#last_no").val();
  var sub_code=sub_code;
  console.log(last_no);
    $.post("http://gallerybear.com/global_list_app.php",
   {
    last_no:last_no,
    sub_code:sub_code
    
       },
   function(data){

$("#company_list").append(data);
var obj = $("#member_list").offset();
console.log("left: " + obj.left + "px, top: " + obj.top + "px");

$("#member_list").css("margin-top", obj.top);
   });

}


function premium_show(sub_code) {
  var sub_code=sub_code;
   $("#map").hide();
  $("#top_banner").show();
 
  if (sub_code==1) {
    var url="http://gallerybear.com/premium1_app.php";
  }
  if (sub_code==2) {
    var url="http://gallerybear.com/premium2_app.php";
  }
  if (sub_code==3) {
    var url="http://gallerybear.com/premium3_app.php";
  }
  if (sub_code==4) {
    var url="http://gallerybear.com/premium4_app.php";
  }

   $.post(url,
   {
    
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}



    function map_menu_show() {
      $("#map_sub_menu").toggle(500);
      // body...
    }
    function freeboard_menu_show() {
 
      $("#freeboard_sub_menu").toggle(500);
      // body...
 }
 function self_camera_menu_show () {
      $("#self_camera_sub_menu").toggle(500);
      // body...
  }
  function parade_menu_show() {
      $("#parade_sub_menu").toggle(500);
      // body...
 }
 function sns_menu_show() {
      $("#sns_sub_menu").toggle(500);
     
}
function global_menu_show() {
      $("#global_sub_menu").toggle(500);
 }
 function premium_menu_show() {
      $("#premium_sub_menu").toggle(500);
  
 }
 // 메뉴 클릭
// 맵 보이기 
function map_show(kind_no) {
  var kind_no=kind_no;
  var url="http://gallerybear.com/map_kind_app.php";
  UIkit.offcanvas.hide('#offcanvas-left');
   $.post(url,
   {
    kind_no:kind_no
    
       },
   function(data){

$("#company_list").html(data);
$("#map").show();
$("#top_banner").hide();
 
   });
}
// 모달 호출 
function contents_modal_show(menu,no) {
    var menu=menu;
    var no=no;
   console.log(member_srl);
    if (menu=="photo") {
      var url="http://ku4h.com/photo_info_modal_app.php";
    }
    if (menu=="freeboard") {
      var url="http://ku4h.com/freeboard_info_modal_app.php";
    }
     if (menu=="qna") {
      var url="http://ku4h.com/qna_info_modal_app.php";
    }
     if (menu=="goods") {
      var url="http://ku4h.com/goods_info_modal_app.php";
    }
    if (menu=="shop") {
     var url="http://ku4h.com/shop_info_modal_app.php"; 
    }


     $.post(url,
   {
    no:no,
    member_srl:member_srl
    
       },
   function(data){

$("#modal_contents").html(data);

   });

var modal = UIkit.modal("#contents_uk_modal");


    modal.show();

 jQuery("#modal_title").html("내용보기");
}

function member_info_modal_show(memberuid) {
  var memberuid=memberuid;
    $.post("http://gallerybear.com/member_info_modal_app.php",
   {
    no:memberuid
    
       },
   function(data){

$("#member_modal_contents").html(data);

   });


var modal = UIkit.modal("#member_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 

}


function open_shop(no) {
  var no=no;
  console.log(no);
  $("#shop_modal_contents").html("");
    $.post("http://ku4h.com/shop_info_modal_app.php",
   {
    no:no
    
       },
   function(data){
console.log(data);
$("#shop_modal_contents").html(data);

   });
$("#shop_modal_title").html("SHOP INFORMATION")

var modal = UIkit.modal("#shop_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 

}

function zzim_member(uid) {
 
  var uid2=uid;
  console.log(memberuid+" "+uid2);
   $.post("http://gallerybear.com/add_zzim.php",
   {
    uid:memberuid,
    uid2:uid2
   },
   function(data){
      
     alert_msg("member","member picked member !");
    
   });
}
function msg_send(uid,msg) {
  var my_uid=memberuid;
  var by_uid=uid;
  var msg=msg;
    $.post("http://gallerybear.com/msg_save_app.php",
   {
    my_uid:my_uid,
    by_uid:by_uid,
    msg:msg
   },
   function(data){
      
     alert_msg("member","SEND MESSAGE");
    
   });
}
//  콘텐츠 등록 

function add_photo(cat) {
  var cat=cat;
  console.log("category="+cat)
    $.post("http://ku4h.com/photo_camera_app.php",
   {
    member_srl:member_srl,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("UPLOAD SELF CAEMRA")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

function add_freeboard(cat) {
  var cat=cat;
  console.log("freeboard category="+member_srl);
    $.post("http://ku4h.com/freeboard_app.php",
   {
    member_srl:member_srl,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("글작성");

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

function add_qna(cat) {
  var cat=cat;
  console.log("qna category="+member_srl);
    $.post("http://ku4h.com/qna_app.php",
   {
    member_srl:member_srl,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("질문하기")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}


function add_goods(cat) {
  var cat=cat;
  console.log("goods category="+member_srl);
    $.post("http://ku4h.com/goods_app.php",
   {
    member_srl:member_srl,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("상품등록")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

function add_parade(cat) {
  var cat=cat;
  console.log("category="+cat)
    $.post("http://gallerybear.com/parade_app.php",
   {
    memberuid:memberuid,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("WRITE LET'S DRIVE")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

// 프로필 대표 사진 설정
function file_check(no) {
  var no=no;
  console.log(no);
  $.post("http://gallerybear.com/file_check_app.php",
   {
    memberuid:memberuid,
    no:no
    
       },
   function(data){

    view_photo_upload();

   });
}

// 프로필 대표 사진 설정
function file_delete(no) {
  var no=no;
  console.log(no);
  $.post("http://gallerybear.com/file_delete_app.php",
   {
    memberuid:memberuid,
    no:no
    
       },
   function(data){

    view_photo_upload();

   });
}
function open_news(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_self', 'location=no');
}

function open_down(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_system', 'location=no');


}


// 종류
function exit_show() {
navigator.notification.confirm("종료하시겠습니까? ", onConfirm, "Confirmation", "Yes,No"); 
}

function onConfirm(button) {
    if(button==2){//If User selected No, then we just do nothing
        return;
    }else{
        navigator.app.exitApp();// Otherwise we quit the app.
    }
}


  function onBackKeyDown() {
    console.log("뒤로가기 "+menu);
    if (menu=="chat_open") {
      close_chat_room(); //대화방 나가기 
      
    }    }

// 로그아웃
function logout() {
  window.localStorage.removeItem("user_id");
  window.localStorage.clear();
    window.localStorage.removeItem("member_srl");
  window.localStorage.clear();
  user_id=null;
  member_srl=null;
   location.replace('login.html') ;

}

function view_mypage() {
  console.log("내정보");
}
 
  function delete_contents(mode,no) {
  var mode=mode;
   var no=no;
    $.post("http://ku4h.com/freeboard_delete.php",
   {
   
    no:no
    
       },
   function(data){
     freeboard_show();

   });
}

 function delete_comment(no) {
 
   var no=no;

    $.post("http://ku4h.com/freeboard_comment.php",
   {
   
    no:no
    
       },
   function(data){
    var div_name="#contents_"+no;
     $(div_name).hide();

   });
}

function check_msg() {
 console.log("메시지 채크");
  $.post("http://ku4h.com/check_msg.php",
   {
    member_srl:member_srl
       },
   function(data){
    var data=data;
    if (data=="no"){
    console.log("메시지없음");  
    } else {
    console.log(data);
    alert_msg("초대",data);
    }
   });

}

