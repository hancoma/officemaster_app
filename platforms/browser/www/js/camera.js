function ocr_reader() {
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        var member_srl2=result.text;
        $("#member_srl2").val(member_srl2);
          //alert("We got a barcode\n" +  "Result: " + result.text + "\n" +  "Format: " + result.format + "\n" +    "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert_msg("경고","barcode를 다시 읽어 주세요.");
      }
   );
}

function qrcode_reader() {
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        var member_srl2=result.text;
        $("#member_srl2").val(member_srl2);
          //alert("We got a barcode\n" +  "Result: " + result.text + "\n" +  "Format: " + result.format + "\n" +    "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert_msg("경고","qrcode를 다시 읽어 주세요.");
      }
   );
}


function getImage_trans() {
 

   
        navigator.camera.getPicture(uploadPhoto_trans, function(message) {
// alert('사진 등록에 실패 했습니다.');
},{
quality: 10,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.CAMERA
});
    }

function getImage() {
 

   
        navigator.camera.getPicture(uploadPhoto, function(message) {
// alert('사진 등록에 실패 했습니다.');
},{
quality: 100,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});
    }

    function getImage_pic() {
 

        navigator.camera.getPicture(uploadPhoto_img, function(message) {
// alert('사진 등록에 실패 했습니다.');
},{
quality: 100,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});
    } 

// 이미지 암호화
    function cameraCallback(imageData) {
 
    var img="data:image/jpeg;base64," + imageData;
    var uuid=device.uuid;
     $.post("http://officemaster.iwinv.net/save_img_data.php",
   {
    uuid:uuid,
    img:img
    
       },
   function(data){
    var data=data;
    alert(data);
    console.log(data);
   });
}




    function uploadPhoto(imageURI) {
          var uuid=device.uuid;
         navigator.notification.activityStart("사진 등록 중", "사진 업로드 중입니다.");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        add_file_name=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
     
        params.uuid=uuid;
        console.log(uuid);
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://officemaster.iwinv.net/upload_bang_app.php", win, fail, options);
    }

     function uploadPhoto_trans(imageURI) {
          var uuid=device.uuid;
         navigator.notification.activityStart("분석중", "사진을분석중입니다..");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        add_file_name=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
     
        params.uuid=uuid;
        console.log(uuid);
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://officemaster.iwinv.net/upload_trans_app.php", win_trans, fail, options);
    }



   function uploadPhoto_img(imageURI) {
          var uuid=device.uuid;
         navigator.notification.activityStart("사진 등록 중", "사진선택중입니다.");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        add_file_name=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
     
        params.uuid=uuid;
        console.log(uuid);
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://officemaster.iwinv.net/upload_img.php", win_img, fail, options);
    }


function win_trans(r) {

navigator.notification.activityStop();
alert(r.response);
      img_trans_show(r.response);
}
function win(r) {
       console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent); 
navigator.notification.activityStop();
var uuid=device.uuid;
      var img_src="http://officemaster.iwinv.net/photo3/"+r.response;
      var file_name=uuid+".jpg";
      console.log(img_src);
    //$("#photo1").attr("src", img_src);
    var img="<img src='"+img_src+"' class='uk-width-1-3'>";
     console.log(img);
    $("#img_list").append(img);
    
   
    }

    function win_img(r) {
       console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent); 
navigator.notification.activityStop();
var uuid=device.uuid;
      var img_src="http://officemaster.iwinv.net/upload_img/"+r.response;
      var file_name=uuid+".jpg";
 ref_img.executeScript({code: "insert_img('"+img_src+"');"});
    
   
    }

    // 성공
  

   

    function fail(error) {
        navigator.notification.activityStop();

    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
