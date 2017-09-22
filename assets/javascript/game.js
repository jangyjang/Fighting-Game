$("document").ready(function(){

//hiding attack button at the beginning of the game
$(".btn-lg").hide();

//global var
var fighterName = ["Buakaw", "Sangdao", "Muay Thai Kid", "PM Prayuth"];
var fighterHP =[500, 400, 350, 450];
var fighterAP = [15, 50, 40, 100];
var fighterCAP = [80,120, 60, 20];

//restart function
$("#restart").on("click", function(){;
	location.reload();
	$(".btn-lg").hide();
});

//roundOne functon
function roundOne(){
var playerName ="";
var defenderName =[];
var choosingPlayerClick = 0;
var playerInfo =[];
var defenderInfo =[];
var attackClick = 0;
var HPofPlayer= 0;
var HPofDefender= 0;
var roundCount = 0;
alert("Plasee select your player");

	
	function moveFightertoPlayer (){
		choosingPlayerClick++;

		if (choosingPlayerClick===1){
			$("#playerIMG").attr("src",$(this).parent().siblings("img").attr("src"));
			$("#playerName").text($(this).parent().siblings("h3").text())
			playerName=($(this).parent().siblings("h3").text());
			$("#playerHP").text($(this).parent().siblings("h4").text());
			$(this).parent().parent().hide();
			$("#alert").text(($(this).parent().siblings("h3").text() + " is your player. Now, please select your defender"))

			for (var i=0; i<fighterName.length; i++){
				if (fighterName[i].indexOf(playerName) >-1){
					playerInfo =[fighterName[i],fighterHP[i],fighterAP[i],fighterCAP[i]]
				}
			}
		}
	}

	function moveFightertoDefender (){
		if (choosingPlayerClick===2){
			$("#defenderIMG").attr("src",$(this).parent().siblings("img").attr("src"));
			$("#defenderName").text($(this).parent().siblings("h3").text());
			defenderName=($(this).parent().siblings("h3").text());
			$("#defenderHP").text($(this).parent().siblings("h4").text())
			$(this).parent().parent().hide()
			$("#alert").text("Let's fight!")
			$(".btn-lg").show()
			roundCount++;
			//console.log(roundCount)

			for (var i=0; i<fighterName.length; i++){
				//console.log(fighterName.length)
				if (fighterName[i].indexOf(defenderName) >-1){
					defenderInfo =[fighterName[i],fighterHP[i],fighterAP[i],fighterCAP[i]]
				//console.log(defenderInfo)
				}
			}
		}
	}

	//this function has what happen when they fight and the scoring system
	function letsfight (){
		attackClick++;

		if (attackClick){
			HPofPlayer=playerInfo[1]-defenderInfo[3];
			playerInfo[1]=(HPofPlayer);
			HPofDefender=(defenderInfo[1]-(playerInfo[2]*(attackClick)));
			defenderInfo[1]=(HPofDefender);
			$("#playerHP").text("Health Point: " + HPofPlayer);
			$("#defenderHP").text("Health Point: " + HPofDefender);
			$("#alert").html("You attacked " +defenderName+ " for " + playerInfo[2]*(attackClick) + " damages.</br>" + defenderName +" attacked you for " + defenderInfo[3] + " damages.")
		}

		//HERE IS WINNING AND LOSING SCENARIOES
		//before round 3, player still has positive HP and defender has negative HP
		if ((roundCount<3) && (HPofDefender<=0) && (HPofPlayer>=0) && (HPofPlayer>HPofDefender)){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You win!</h3><h3>Please select a new defender</h3>")
			roundTwo()	
		}
		//before round 3, player has negative HP, but there is still defender to fight with
		if ((roundCount<3) && (HPofPlayer<=0)){
			$("#defender").hide();
			$(".thumbnail .btn").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>Game Over. You lost. You have exhaused all of your Health Point before Team Defender</h3><h3>Click RESTART below to try again</h3>");
			$("#playerIMG").attr("src","assets/images/catboxer.jpg");
			$("#playerName").text("We train a lot");
			$("#playerHP").text("So should you!");
		}

		//round 3, defender has negative HP and player has higher HP
		if ((roundCount>=3) && (HPofDefender<=0) && (HPofPlayer>HPofDefender)){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You won this game!</h3><h3>Click RESTART below to try again</h3>");
			$("#playerIMG").attr("src","assets/images/yodabest.jpg");
			$("#playerName").text("Great, you did!");
			$("#playerHP").text("Proud of you I am");
		}

		//round 3, both have negative HP but player still have higher HP
		if ((roundCount>=3) && (HPofPlayer<=0) && (HPofPlayer>HPofDefender)){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You won this game!</h3><h3>Click RESTART below to try again</h3>");
			$("#playerIMG").attr("src","assets/images/yodabest.jpg");
			$("#playerName").text("Great, you did!");
			$("#playerHP").text("Proud of you I am");

		}
		//round 3, both have negative HP, but player has lower HP
		if ((roundCount>=3) && (HPofPlayer<=0) && (HPofPlayer<HPofDefender)){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You lost this match</h3><h3>Click RESTART below to try again</h3>");
			$("#playerIMG").attr("src","assets/images/ouch.jpg");
			$("#playerName").text("Aww. I am sorry");
			$("#playerHP").text("I really am....");
		}

	}//end of letsfight function
	
	//here are event listeners of the theree functions above
	$(".thumbnail .btn").on("click", moveFightertoPlayer);
	$(".thumbnail .btn").on("click", moveFightertoDefender);
	$(".btn-lg").on("click", letsfight);


	function roundTwo (){
	var choosingDefendertwoclick = 0;
	choosingDefendertwoclick++;

		function moveFightertoDefender (){
			$("#defender").show();
			if (choosingDefendertwoclick===1){
				$("#defenderIMG").attr("src",$(this).parent().siblings("img").attr("src"));
				$("#defenderName").text($(this).parent().siblings("h3").text());
				defenderName=($(this).parent().siblings("h3").text());
				$("#defenderHP").text($(this).parent().siblings("h4").text())
				$(this).parent().parent().hide()
				$(".btn-lg").show();
				$("#alert").text("Good luck!")
				roundCount++;
				//console.log(roundCount)

				for (var i=0; i<fighterName.length; i++){
					//console.log(fighterName.length)
					if (fighterName[i].indexOf(defenderName) >-1){
						defenderInfo =[fighterName[i],fighterHP[i],fighterAP[i],fighterCAP[i]]
					}
				}
			}
		}
		$(".thumbnail .btn").on("click", moveFightertoDefender);

	}//endof roundTwo function
}//end of roundOne function
roundOne()

});//end of document.ready



