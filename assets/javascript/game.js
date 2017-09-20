$("document").ready(function(){

var fighterName = ["Buakaw", "Sangdao", "Muay Thai Kid", "PM Prayuth"];
var fighterHP =[100, 180, 120, 200];
var fighterAP = [10, 30, 40, 25];
var fighterCAP = [20,40, 10, 5];

$("#restart").on("click", function(){;
location.reload()
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
			console.log(playerName)

			for (var i=0; i<fighterName.length; i++){
				console.log(fighterName.length)
				if (fighterName[i].indexOf(playerName) >-1){
					playerInfo =[fighterName[i],fighterHP[i],fighterAP[i],fighterCAP[i]]
					console.log(playerInfo)
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
			console.log(defenderName)

			for (var i=0; i<fighterName.length; i++){
				console.log(fighterName.length)
				if (fighterName[i].indexOf(defenderName) >-1){
					defenderInfo =[fighterName[i],fighterHP[i],fighterAP[i],fighterCAP[i]]
				console.log(defenderInfo)
				}
			}
		};
	}

	$(".btn-lg").on("click", letsfight);
	function letsfight (){
		attackClick++
		if (attackClick){
			HPofPlayer=playerInfo[1]-defenderInfo[3];
			playerInfo[1]=(HPofPlayer);
			HPofDefender=(defenderInfo[1]-(playerInfo[2]*(attackClick)));
			defenderInfo[1]=(HPofDefender);
		console.log("player base hp " + playerInfo[1])
		console.log("defender CAP " + defenderInfo[3])
		console.log("player hp after attack " + HPofPlayer)
		console.log("defender base hp " + defenderInfo[1])
		console.log("player ap " + playerInfo[2])
		console.log("defender hp after attk " +HPofDefender)
		console.log("player ap times click " + (playerInfo[2]*(attackClick)))
		console.log("attk click count " + attackClick)
		$("#playerHP").text("Health Point: " + HPofPlayer);
		$("#defenderHP").text("Health Point: " + HPofDefender);
		}
		if (HPofDefender<=0){
			$("#defender").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>ROUND ONE: You win!</h3><h3>Please select a new defender</h3>")
	
		}
		if (HPofPlayer<=0){
			$("#player").hide();
			$(".btn-lg").hide();
			$("#alert").html("<h3>You lost this match</h3><h3>Click RESTART below to try again</h3>")
			$(".fightingring").attr("src","images/pug.jpg")

		}
	}

}roundOne()










});



