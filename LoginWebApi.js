var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var ticket = null;

describe('First use case', function() {
	it('Login as Administrator', function() {
		console.log("Login");
		var xhr = new XMLHttpRequest();
		var url = "http://192.168.96.20:8080/alfresco/s/api/login";
		xhr.open("POST", url, false);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () { 
			if (xhr.readyState == 4 && xhr.status == 200) {
				var receiveData = JSON.parse(xhr.responseText);
				ticket = receiveData.data.ticket;
				//console.log(ticket);
				expect(ticket).not.toBe(null);
			}
		}
		var sendData = JSON.stringify({"username":"admin","password":"admin"});
		xhr.send(sendData);
	});
	
	it('Get Sites', function() {
		console.log("GetSites");
		var xhr = new XMLHttpRequest();
		var url = "http://192.168.96.20:8080/alfresco/s/api/sites?alf_ticket=" + ticket;
		//console.log(url);
		xhr.open("GET", url, false);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () { 
			//console.log(xhr.status);
			if (xhr.readyState == 4 && xhr.status == 200) {
				var receiveData = JSON.parse(xhr.responseText);
				//console.log(receiveData);
				expect(receiveData).not.toBe(null);
			}
		}
		xhr.send(null);
	});	
	
});
