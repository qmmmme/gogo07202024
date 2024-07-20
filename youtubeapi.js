//function for default homepage about gymnastic videos
$(window).on("load", function(e){
	//prevent reloading the Web page
	e.preventDefault();

	let queryString = "gym workout";
	let part = "snippet";
	// let api_key = "AIzaSyAwMm0aEgAHfZj_o54gt2df0bQKf_aIkUo";
	let api_key = "AIzaSyB_Ul4-_3PUdBPCyXBjP5cGOZGNpGM4RMg";//second api 
	let type = "video";
	let max_result = 5;
	let url = "https://www.googleapis.com/youtube/v3/search?part="+part+"&q="+queryString+"&type="+type+"&maxResults="+max_result+"&key="+api_key+"";

	if(queryString !== "") {
		
		$.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			//show the loader indicator when waiting
			beforeSend: function() {
				$("#loader").show(); 
			},
			// hide the loader indicator
			complete: function () {
				$("#loader").hide();
			},
			// when the response is fully received
			success: function(info) {
				//if the request is succeeded
				let op = "";
				let latestVideos = info.items;

				for(var i in  latestVideos) {
					op += `
						<div class="video${i}">
							
								<iframe width="280" height="150" src="https://www.youtube.com/embed/${latestVideos[i].id.videoId}" frameborder="0" allowfullscreen></iframe>
								<p>${latestVideos[i].snippet.title}</p>
								<p>Published Time: ${latestVideos[i].snippet.publishTime}</p>
							
						</div>
					`;
				}
				//if the content is available, print it onto the page
				if(op !== "") {
					
					$("#default_videos").html(op);

				}
				else {
					//if the videos is not found
					let videosNotFound = "This video isn't available. Sorry for that";
					$("#default_videos").html(videosNotFound);
				}
			},
			error: function() {
				console.log("error");
			}
		});
	}
	
	
});

$(document).ready( function (){
	
	
	$("#searchbtn").click( function(e){
		//prevent reloading the Web page
		e.preventDefault();
		//hide the default news
		// $("#default_news").hide();
		let queryString = $("#searchquery").val();
		let part = "snippet";
		// let api_key = "AIzaSyAwMm0aEgAHfZj_o54gt2df0bQKf_aIkUo";
		let api_key = "AIzaSyB_Ul4-_3PUdBPCyXBjP5cGOZGNpGM4RMg";//second api 
		let type = "video";
		let max_result = 5;
		let url = "https://www.googleapis.com/youtube/v3/search?part="+part+"&q="+queryString+"&type="+type+"&maxResults="+max_result+"&key="+api_key+"";

		if(queryString !== "") {
			
			$.ajax({
				url: url,
				method: "GET",
				dataType: "json",
				//show the loader indicator when waiting
				beforeSend: function() {
					$("#loader").show(); 
				},
				// hide the loader indicator
				complete: function () {
					$("#loader").hide();
				},
				// when the response is fully received
				success: function(info) {
					let op = "";
					let latestVideos = info.items;

					for(var i in  latestVideos) {
						op += `
							<div class="video${i}">
							
								<iframe width="280" height="150" src="https://www.youtube.com/embed/${latestVideos[i].id.videoId}" frameborder="0" allowfullscreen></iframe>
								<p>${latestVideos[i].snippet.title}</p>
								<p>Published Time: ${latestVideos[i].snippet.publishTime}</p>
							
							</div>
						`;
					}
					if(op !== "") {
						$("#default_videos").hide();
						$("#videos").html(op);

					}
					else {
						//console.log("not found");
						let videoNotFound = "This video isn't available. Sorry for that";
						$("#videos").html(videoNotFound);
					}
				},
				error: function() {
					console.log("error");
				}
			});
		}
		
		
	});
	
	
});

