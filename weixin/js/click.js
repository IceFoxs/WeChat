function chat_change() {
	$("#bottom_chat_img").css({
		"height": "30px",
		"width": "50px",
		"background": "url(img/chat_press.svg)",
		"background-size": "120% 120%",
		"background-repeat": "no-repeat",
		"text-align": "center",
		"background-position": "center"
	});
	$("#bottom_chat_name").css({
		"height": "20px",
		"width": "50px",
		"color": "#46C01B",
		"font-size": "10px",
		"text-align": " center"
	});
}
function chat_native() {
	$("#bottom_chat_img").css({
		"height": "30px",
		"width": "50px",
		"background": "url(img/chat.svg)",
		"background-size": "90% 90%",
		"background-repeat": "no-repeat",
		"text-align": "center",
		"background-position": "center"
	});
	$("#bottom_chat_name").css({
		"height": "20px",
		"width": "50px",
		"color": "#8A8A8A",
		"font-size": "10px",
		"text-align": " center"
	});
}

function address_list_change() {
	$("#bottom_address_list_img").css({
		"height": "30px",
		"width": "50px",
		"background": "url(img/address_list_press.svg)",
		"background-size": "120% 120%",
		"background-repeat": "no-repeat",
		"text-align": "center",
		"background-position": "center"
	});
	$("#bottom_address_list_name").css({
		"height": "20px",
		"width": "50px",
		"color": "#46C01B",
		"font-size": "10px",
		"text-align": " center"
	});

}

function address_list_native() {
	$("#bottom_address_list_img").css({
		"height": "30px",
		"width": "50px",
		"background": "url(img/address_list.svg)",
		"background-size": "120% 120%",
		"background-repeat": "no-repeat",
		"text-align": "center",
		"background-position": "center"
	});
	$("#bottom_address_list_name").css({
		"height": "20px",
		"width": "50px",
		"color": "#8A8a8a",
		"font-size": "10px",
		"text-align": " center"
	});
}

function found_change() {
	$("#bottom_found_img").css({
		"height": "30px",
		"width": "50px",
		"background": "url(img/found_press.svg)",
		"background-size": "140% 140%",
		"background-repeat": "no-repeat",
		"text-align": "center",
		"background-position": "center"
	});
	$("#bottom_found_name").css({
		"height": "20px",
		"width": "50px",
		"color": "#46C01B",
		"font-size": "10px",
		"text-align": " center"
	});

}

function found_native() {
	$("#bottom_found_img").css({
		"height": "30px",
		"width": "50px",
		"background": "url(img/found.svg)",
		"background-size": "100% 100%",
		"background-repeat": "no-repeat",
		"text-align": "center",
		"background-position": "center"
	});
	$("#bottom_found_name").css({
		"height": "20px",
		"width": "50px",
		"color": "#8A8A8A",
		"font-size": "10px",
		"text-align": " center"
	});
}

function me_change() {
	$("#bottom_me_img").css({
		"height": "30px",
		"width": "50px",
		"background": "url(img/me_press.svg)",
		"background-size": "120% 120%",
		"background-repeat": "no-repeat",
		"text-align": "center",
		"background-position": "center"
	});
	$("#bottom_me_name").css({
		"height": "20px",
		"width": "50px",
		"color": "#46C01B",
		"font-size": "10px",
		"text-align": " center"
	});

}
function me_native() {
	$("#bottom_me_img").css({
		"height": "30px",
		"width": "50px",
		"background": "url(img/me.svg)",
		"background-size": "120% 120%",
		"background-repeat": "no-repeat",
		"text-align": "center",
		"background-position": "center"
	});
	$("#bottom_me_name").css({
		"height": "20px",
		"width": "50px",
		"color": "#8A8A8A",
		"font-size": "10px",
		"text-align": " center"
	});
}
function chat_click(){
	add_leave();
	chat_change();
	address_list_native();
	found_native();
	me_native();
	
	$("#address_list_content").hide();
	$("#found_content").hide();
    $("#me_content").hide();
    $("#chat_content").show();
}
function address_list_click(){
	add_leave();
	address_list_change();
	chat_native();
	found_native();
	me_native();
	$("#chat_content").hide();
	$("#found_content").hide();
    $("#me_content").hide();
	$("#address_list_content").show();
	
}
function found_click(){
	add_leave();
	found_change();
	chat_native();
	address_list_native();
	me_native();
	$("#chat_content").hide();
    $("#me_content").hide();
	$("#address_list_content").hide();
	$("#found_content").show();
}
function me_click(){
	add_leave();
	me_change();
	chat_native();
	address_list_native();
	found_native();
	$("#chat_content").hide();
   
	$("#address_list_content").hide();
	$("#found_content").hide();
	$("#me_content").show();
}
function add_clicked(){
	if(add_status==false){
	  $("#plus_click").css({
		"height": "205px",
	    "width":"150px",
	    "background-color": "#393A3E",
	    "position":"fixed",
		"top":"72px",
		"right":"10px",
		"float": "right",
		"z-index": "10",
		"visibility": "visible"
	  });
	    add_status=true;
	}
	else{
		add_leave();
		add_status=false;
	}
}
function add_leave(){
	if(add_status==true){
	$("#plus_click").css({
		"height": "305px",
	    "width":"200px",
	    "background-color": "#393A3E",
	    "position":"fixed",
		"top":"72px",
		"right":"40px",
		"float": "right",
		"z-index": "10",
		"visibility": "hidden"
	});
	}
}
function friend_click(){
	$("#FC_top").css({
	 "height":"50px",
	 "width": "100%",
	  "top":"22px",
	"bottom":"0px",
	"background-color": "#393A3E",
	 "position": "fixed",
	 "visibility": "visible"
    });
    $("#friend_circle").css({"z-index":1});
}
function return_click(){
	$("#FC_top").css({
	 "height":"50px",
	 "width": "100%",
	  "top":"22px",
	"bottom":"0px",
	"background-color": "#393A3E",
	 "position": "fixed",
	 "visibility": "hidden"
    });
    $("#friend_circle").css({"z-index":0});
}
function personal_chat_click(obj){
     
	 var name=obj.id+'_name';
	 var content= document.getElementById(name).innerText;
	 document.getElementById('top_personal_chat_name').innerText=content;
	 $("#top_personal_chat").css({
	 "height":"50px",
	 "width": "100%",
	  "top":"22px",
	"bottom":"0px",
	"background-color": "#393A3E",
	 "position": "fixed",
	 "visibility": "visible"
    });
    $("#personal_chat").css({"z-index":1});
    $("#bottom_personal_chat").css({"z-index":1});
}
function personal_chat_return(){
	 $("#top_personal_chat").css({
	 "height":"50px",
	 "width": "100%",
	  "top":"22px",
	"bottom":"0px",
	"background-color": "#393A3E",
	 "position": "fixed",
	 "visibility": "hidden"
    });
    $("#personal_chat").css({"z-index":0});
    $("#bottom_personal_chat").css({"z-index":0});
}
