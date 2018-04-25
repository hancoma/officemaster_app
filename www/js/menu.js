function main_show() {
   $.ajax({
            type:"GET",
            url:"http://officemaster.iwinv.net/app_data.php",
            success:function(data){
                $("#main_contents").html(data);
            }
        })
}
function chat_show() {
  menu="chat";
  
  $("#chat_icon").addClass('active');
  $.ajax({
            type:"GET",
            url:"http://officemaster.iwinv.net/chat_app.php",
            success:function(data){
                $("#main_contents").html(data);
            }
        })
}



function photo_show(cat) {
  var cat=cat;
  // 지도 숨김 
  $("#photo_icon").addClass('active');
 $.post("http://officemaster.iwinv.net/photo_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#main_contents").html(data);
  
   });

}

function freeboard_show(cat) {
  var cat=cat;
$("#board_icon").addClass('active');
  $("#top_banner").html("freeboard");
 $.post("http://officemaster.iwinv.net/freeboard_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#main_contents").html(data);

   });

}

function shop_show() {
  
  $("#shop_icon").addClass('active');
  $.ajax({
            type:"GET",
            url:"http://www.officemaster.iwinv.net/shop_list.php",
            success:function(data){
                $("#main_contents").html(data);
            }
        })
}

function blog_show() {
  
  $("#blog_icon").addClass('active');
  $.ajax({
            type:"GET",
            url:"http://www.officemaster.iwinv.net/atopy_blog.php",
            success:function(data){
                $("#main_contents").html(data);
            }
        })
}

function exit_show() {
navigator.notification.confirm("종료하시게습니까? ", onConfirm, "Confirmation", "Yes,No"); 
 } 