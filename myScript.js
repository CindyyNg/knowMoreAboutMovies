$("#Body").hide();
$("#output").hide();
$("#start").click(function(){
	$("#start").fadeOut(800,function(){
		alert("You can find more information about movies now!");
		$("#Body").show();
})
});

$("#choice1").hide()
$("#choice2").hide()
$("#choice3").hide()

	
$("#Style").click(function(){
  $("#choice1").slideToggle();
});

$("#Backgroung-Image").click(function(){
  $("#choice2").slideToggle();
});


$("#FontFamily").click(function(){
  $("#choice3").slideToggle();
});

function dropdown_choice1() {
	let form = document.getElementById("choice1");
	let choice1 = form.elements.dropdown1.value;
	$("#Body").css("color",choice1);
	$("#Body").css("border-color",choice1);
	$("#start").css("color",choice1);
	$("#start").css("border-color",choice1);
}

function dropdown_choice2() {
	let form = document.getElementById("choice2");
	let choice2 = form.elements.dropdown2.value;
	choice2 = "url('" + choice2 + "')";
	//$("body").attr(backgroundImage,choice2);
	document.body.style.backgroundImage = choice2;
}

function dropdown_choice3() {
	let form = document.getElementById("choice3");
	let choice3 = form.elements.dropdown3.value;
	$("body").css("font-family",choice3);


}




function displayResults(data) {

	$("#resultTitle").html(data.Title);
	$("#resultType").html(data.Type);
	$("#resultGenre").html(data.Genre);
	$("#resultLanguage").html(data.Language);
	$("#resultCountry").html(data.Country);
	$("#resultDirector").html(data.Director);
	$("#resultStars").html(data.Actors);
	$("#resultTime").html(data.Runtime);
	$("#resultPlot").html(data.Plot);
	$("#resultBoxOffice").html(data.BoxOffice);
	$("#resultAwards").html(data.Awards);
	
	
	let g = "https://docs-assets.developer.apple.com/published/218def98e6/267c8fd4-12a4-4fbb-89ef-ed88d909b9f1.png";
	let pg = "https://docs-assets.developer.apple.com/published/f44edd2a0a/9a2a66de-b42e-447b-8894-89182d4b0b08.png";
	let pg13 = "https://docs-assets.developer.apple.com/published/8cab854be4/c9b697bd-27a2-4b98-8330-38842529f91a.png";
	let nc17 = "https://docs-assets.developer.apple.com/published/66836a12ac/d8e30ec4-21ce-41fc-a97c-f7067b49da4a.png";
	let r = "https://docs-assets.developer.apple.com/published/f3448319da/9d1c255f-eae3-42a1-a557-dbf5f33eaaa1.png";
	let unrated = "https://docs-assets.developer.apple.com/published/522c8ab8e3/a34a2e4f-be16-4d5f-b5fd-9922473c771b.png";

	let rating = data.Rated;
	let ratedImageURL = unrated;
	if (rating === "G") {
	ratedImageURL = g;
	} else if (rating === "PG") {
	ratedImageURL = pg;
	} else if (rating === "PG-13") {
	ratedImageURL = pg13;
	} else if (rating === "NC-17") {
	ratedImageURL = nc17;
	} else if (rating === "R") {
	ratedImageURL = r;
	}
	$("#ratedImg").attr("src", ratedImageURL);
		
		
	$("#resultYear").html(data.Released);
	

	
	let array = data.Ratings;
	$("#resultRating").html('<p style="font-family: Impact, Charcoal, sans-serif">'+ "Not Found" + '</p>');
	for (let i=0; i < array.length; i++){
	  if (array[i].Source === "Rotten Tomatoes"){
		let theRating = array[i].Value;
		let source = '<p style="font-family: Impact, Charcoal, sans-serif"> Source:"Rotten Tomatoes" </p>';
		if ( theRating > "90%"){
			$("#resultRating").html('<i class="far fa-grin-hearts"></i>'+ " <br> " + theRating + source);
		}
		else if ( theRating > "80%"){
			$("#resultRating").html('<i class="far fa-laugh-squint"></i>'+ " <br> " + theRating + source);
		}
		else if ( theRating > "60%"){
			$("#resultRating").html('<i class="far fa-smile"></i>'+ " <br> " + theRating + source);
		}
		else if ( theRating > "50%"){
			$("#resultRating").html('<i class="far fa-meh-rolling-eyes"></i>'+ " <br> " + theRating + source);
		}
		else{
			$("#resultRating").html('<b><i class="fas fa-sad-tear"></i></b>'+ " <br> " + theRating + source);
		}

		
	  }
	}
	
	let  star = data.imdbRating;
	let fixnum = '<i class="fas fa-star"></i>';
	let halfnum = '<i class="fas fa-star-half-alt"></i>';
	let empnum = '<i class="far fa-star"></i>';
	
	let fixresult = '';
	let empresult = '';
	let Source = '<p style="font-family: Impact, Charcoal, sans-serif">Source:"imdbRating"</p>';
	star = star*1;
	
	if (star>=9.5){
		
		for (let i=0;i<5;i++){
			fixresult = fixresult + fixnum;			
		}
		$("#resultstar").html(fixresult + Source);
	}
	else if (star>=8.5){

		for (let i=0;i<4;i++){
			fixresult = fixresult + fixnum;
		}
		$("#resultstar").html(fixresult + halfnum + Source);
	}
	else if (star>=7.5){

		for (let i=0;i<4;i++){
			fixresult = fixresult + fixnum;
		}		
		$("#resultstar").html(fixresult + empnum + Source);		
	}
	else if (star>=6.5){

		for (let i=0;i<3;i++){
			fixresult = fixresult + fixnum;
		}		

		$("#resultstar").html(fixresult + halfnum + empnum + Source);		
	}
	else if (star>=5.5){

		for (let i=0;i<3;i++){
			fixresult = fixresult + fixnum;
		}		

		$("#resultstar").html(fixresult + empnum + empnum + Source);		
	}
		else if (star>=4.5){

		for (let i=0;i<2;i++){
			fixresult = fixresult + fixnum;
			empresult = empresult + empnum;
		}		

		$("#resultstar").html(fixresult + halfnum + empnum + Source);		
	}
		else{
			
			$("#resultstar").html('<p style="font-family: Impact, Charcoal, sans-serif">'+ "Not Found" + '</p>');
		}

}






function submit() {
	$("#output").show(2000);
	let title = $("#movieTitle").val();
	let year = $("#movieYear").val();
	let url = "https://www.omdbapi.com/?apikey=9e5dce54";
	url = url + "&t=" + title + "&y=" + year;
	$.get(url,function(data){
		//document.getElementById("raw").innerHTML = JSON.stringify(data);
		displayResults(data);
	});
	
}