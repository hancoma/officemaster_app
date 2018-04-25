/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var telephone;
 var user_id = window.localStorage.getItem("user_id");
var member_srl = window.localStorage.getItem("member_srl");
var language= window.localStorage.getItem("language");
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
          document.addEventListener("backbutton", onBackKeyDown, false);
        //  window.plugins.sim.getSimInfo(successCallback, errorCallback);
        app.receivedEvent('deviceready');
        
       
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
        console.log('Received Event: ' + id);
       
        app.onmain();
    },
    onmain : function() {
    var reg_id=device.uuid;
       // 기기 번호 검출 
chat_show();
        
    
       
}
};


function successCallback(result) {
 alert_msg('전화',result.phoneNumber);
 telephone=result.phoneNumber;
}
 
function errorCallback(error) {
  console.log(error);
}
 


