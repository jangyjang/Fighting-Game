$("document").ready(function(){
$(".btn-lg").hide()

var fighterName = ["Buakaw", "Sangdao", "Muay Thai Kid", "PM Prayuth"];
var fighterHP =[500, 400, 350, 450];
var fighterAP = [50, 30, 40, 100];
var fighterCAP = [5,40, 80, 20];

$("#restart").on("click", function(){;
location.reload()
$(".btn-lg").hide()
});

function roundOne(){
var playerName ="";
var defenderName =[];
var choosingPlayerClick = 0;
var playerInfo =[];
var defenderInfo ={};
var attackClick = 0;
var HPofPlayer= 0;
var HPofDefender= 0;
var gameCount = 0;
alert("Plasee select your player");

	$(".thumbnail .btn").on("click", moveFightertoPlayer);
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
	$(".thumbnail .btn").on("click", moveFightertoDefender);
	function moveFightertoDefender (){
		if (choosingPlayerClick===2){
			$("#defenderIMG").attr("src",$(this).parent().siblings("img").attr("src"));
			$("#defenderName").text($(this).parent().siblings("h3").text());
			defenderName=($(this).parent().siblings("h3").text());
			$("#defenderHP").text($(this).parent().siblings("h4").text())
			$(this).parent().parent().hide()
			$("#alert").text("Let's fight!")
			$(".btn-lg").show()
			gameCount++;
			console.log(gameCount)

			for (var i=0; i<fighterName.length; i++){
				//console.log(fighterName.length)
				if (fighterName[i].indexOf(defenderName) >-1){
					defenderInfo =[fighterName[i],fighterHP[i],fighterAP[i],fighterCAP[i]]
				//console.log(defenderInfo)
				}
			}
		}
	}

	$(".btn-lg").on("click", letsfight);
	function letsfight (){
		attackClick++
		if (attackClick){
			HPofPlayer=playerInfo[1]-defenderInfo[3];
			playerInfo[1]=(HPofPlayer);
			HPofDefender=(defenderInfo[1]-(playerInfo[2]*(attackClick)));
			defenderInfo[1]=(HPofDefender);
		$("#playerHP").text("Health Point: " + HPofPlayer);
		$("#defenderHP").text("Health Point: " + HPofDefender);
		$("#alert").html("You attacked " +defenderName+ " for " + playerInfo[2]*(attackClick) + " damages.</br>" + defenderName +" attacked you for " + defenderInfo[3] + " damages.")
		}
		
		if ((gameCount<3) && (HPofDefender<=0) && (HPofPlayer>HPofDefender)){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You win!</h3><h3>Please select a new defender</h3>")
			roundTwo()	
		}

		if ((gameCount>=3) && (HPofDefender<=0) && (HPofPlayer>HPofDefender)){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You won this game!</h3><h3>Click RESTART below to try again</h3>")
			$("#playerIMG").attr("src","assets/images/yodabest.jpg")
			$("#playerName").text("Great, you did!");
			$("#playerHP").text("Proud of you I am")
		}

		if ((HPofPlayer<=0) && (HPofPlayer<HPofDefender)){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You lost this match</h3><h3>Click RESTART below to try again</h3>")
			$("#playerIMG").attr("src","assets/images/ouch.jpg")
			$("#playerName").text("Aww. I am sorry");
			$("#playerHP").text("I really am....")

		}
		if ((HPofPlayer<=0) && (HPofPlayer>HPofDefender)){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You won this game!</h3><h3>Click RESTART below to try again</h3>")
			$("#playerIMG").attr("src","assets/images/yodabest.jpg")
			$("#playerName").text("Great, you did!");
			$("#playerHP").text("Proud of you I am")

		}


	}

function roundTwo (){
var choosingDefendertwoclick = 0;
choosingDefendertwoclick++;

	$(".thumbnail .btn").on("click", moveFightertoDefender);
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
			gameCount++;
			console.log(gameCount)

			for (var i=0; i<fighterName.length; i++){
				//console.log(fighterName.length)
				if (fighterName[i].indexOf(defenderName) >-1){
					defenderInfo =[fighterName[i],fighterHP[i],fighterAP[i],fighterCAP[i]]
				}
			}
		}
	}
}

}roundOne()




});



