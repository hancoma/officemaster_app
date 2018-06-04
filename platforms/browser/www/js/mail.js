function send_mail_app() {
    $.post("http://officemobile.cafe24.com/app/mail.php",
   {
    
    
       },
   function(data){
   
    console.log("메일발송");
    alert_msg("알림","메일이발송되었습니다.");
   });
}
