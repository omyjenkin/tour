
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        //addCheckAppUpdateInfo();
		checkAppUpdate();
    }
};

function addCheckAppUpdateInfo() {
    $('check').addEventListener("click", checkAppUpdate);
   
}

function checkAppUpdate() {
    var updateUrl = "http://localhost:9998/Update/Version?format=json&jsoncallback=?";
	 var svrVersion;
	 $.ajax({
                type: "GET",
                url: updateUrl,
				data:{},
                dataType: "jsonp",
                jsonp:"jsoncallback",
                jsonpCallback:"jsoncallback_success", 
　　　　　　　　success:function(data){
				$.each(data,function(index,obj){
					svrVersion=obj.version;});                 
                },
				error:function(XMLHttpRequest, textStatus, errorThrown){
					
					alert(textStatus);
				}
            });
    cordova.getAppVersion.getPackageName().then(function (version) {
    //var versionCode = parseInt(version.toString().replace(/\./g,''));
    if(svrVersion!=version)
	$("#dVersion").html("version from server:"+svrVersion+" local version:"+version);
	});
	
	/*
    var me = this;
    function onFail() {console.log('fail', JSON.stringify(arguments), arguments);}
    function onSuccess() {
        console.log('success', JSON.stringify(arguments), arguments);
        me.innerHTML+="<br/>request-completed";
    }*/
}

/*
function $(id) {
    return document.getElementById(id);
}
*/

app.initialize();

