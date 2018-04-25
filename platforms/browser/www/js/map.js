
    var map;
    var locations;
    var data_app;
     var company_name;
    var map_kind;
    var point_x;
    var point_y;
    var chicago = {lat: 41.85, lng: -87.65}; 
    var markers = new Array();
    var data_company=new Array();
    var data_no=new Array();
    var data_point_x=new Array();
    var data_point_y=new Array();
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 5
  });
