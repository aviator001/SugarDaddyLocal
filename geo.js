	var id, target, options, socket;
	var h = 'wss://terrawire.com:7003/?login=gauts&mobile=32323232322'
	socket = new WebSocket(h);

	function success(pos) {
		socket.send(JSON.stringify({'type':pos}))
	}	
options = {
	  enableHighAccuracy: true,
	  timeout: 5000,
	  maximumAge: 0
	};
	id = navigator.geolocation.watchPosition(success, error, options);

function error(err) {
	console.log(e)
}

function stimulate() {
	var m1=Math.random()*10000
	var m2=Math.random()*10000
	success([m1,m2])
}
