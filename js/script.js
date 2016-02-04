var playerScores = { player1: 0, player2: 0}; 
currentPlayer = 'player1'; 

$(document).ready(function() {

	swal({ title: "Namaste!", 
		text: "<p>This is a <b>two</b> player game. </p> <p>Drag photo tiles to their pose names.</p> <p> Each successful match accrues <b>one</b> point.</p> <p> A turn lasts as long as matches are made successfully.</p> <p>When the board is clear, the game is over. </p> <p> <b> Player One</b> begins.</p>",
  	   html: true });
	
	$('.photo').draggable( {
		revert: function(valid) {
			if (valid) {
				playerScores[currentPlayer] ++;
				$('#displayScoreOne').text(playerScores.player1);
				$('#displayScoreTwo').text(playerScores.player2);
				// upon successful drop: increments by one and displays value 
			} else {
				if (currentPlayer === 'player1') {
					currentPlayer = 'player2';
					document.getElementById('playerTwoScore').style.color = "red";
					document.getElementById('playerOneScore').style.color="black";
					swal("Player Two's turn!")
				// upon unsuccessful drop by player1: switches the player and highlights new player in red
				} else {
					currentPlayer = 'player1';
					document.getElementById('playerTwoScore').style.color = "black";
					document.getElementById('playerOneScore').style.color = "red";
					swal("Player One's turn!")
				}
				// upon unsuccessful drop by player2: switches player and highlights new player in red
			}

			if (playerScores.player1 + playerScores.player2 === 16) {
				swal("The game is finished. Well done!", location.reload());
			//checks to see if game is finished, and if so, issues an alert, reloads page.
			}
			return !valid;
		}
	});


	//following code matches drags and drops and hides both divs on successful matching. is super repetitive
$('#2').droppable( {
		accept: "#5",
		drop: function() {
			$('#2').hide();
			$('#5').hide();
			swal ("Child's Pose:",
			"A resting pose, in which the knees are under the chest while the head is bowed and the arms are stretched.");
		}
	});

	$('#3').droppable( {
		accept: "#1",
		drop: function() {
			$('#3').hide();
			$('#1').hide();
			swal("Crow Pose:", 
			"An arm balancing pose in which the hands are planted on the floor, shins are rested upon upper arms, and the feet are lifted up.");
		}

	});

	$('#6').droppable( {
		accept: "#8",
		drop: function() {
			$('#6').hide();
			$('#8').hide();
			swal("Bharadvaja's Twist:",
			 "A basic seated spinal twist.");
		}
	});

	$('#7').droppable( {
		accept: "#4",
		drop: function() {
			$('#7').hide();
			$('#4').hide();
			swal("Peacock Pose:",
			"A horizontal arm balance in which one's entire body is supported by the palms.");

		}
	});
    
    $('#9').droppable( {
		accept: "#15",
		drop: function() {
			$('#9').hide();
			$('#15').hide();
			swal("Lord of the Dance Pose:",
			"A standing pose in which one stands on one foot and reaches backward to hold the other ankle.");
		}
	});

	$('#12').droppable( {
		accept: "#10",
		drop: function() {
			$('#12').hide();
			$('#10').hide();
			swal("Eagle Pose:",
			"A standing pose, on one foot, in a shallow squat, in which both sets of limbs are crossed.")
		}
	});

	$('#13').droppable( {
		accept: "#14",
		drop: function() {
			$('#13').hide();
			$('#14').hide();
			swal("Pose Dedicated to the Sage Marichi:",
			"A forward bend in which the hips are opened. ")

		}
	});

	$('#16').droppable( {
		accept: "#11",
		drop: function() {
			$('#16').hide();
			$('#11').hide();
			swal("One-Legged King Pigeon Pose:",
			"A seated backbend in which the ankle is grasped behind the head. ")
		}
	});

	$('#18').droppable( {
			accept: "#20",
			drop: function() {
				$('#18').hide();
				$('#20').hide();
				swal("Noose Pose:",
				"A squatting twist in which one wraps one's arms around one's legs with one's hands clasped behind the back. ")
			}
		});

	$('#19').droppable( {
		accept: "#17",
		drop: function() {
			$('#19').hide();
			$('#17').hide();
			swal("Triangle Pose:",
			"A standing pose in which one arm extends skyward while the other rests near the foot.")
		}
	});


	$('#22').droppable( {
		accept: "#21",
		drop: function() {
			$('#22').hide();
			$('#21').hide();
			swal("Upward Plank Pose:",
			"A pose in which the body is supported parallel to the ground, chest facing up. ")
		}
	});

	$('#23').droppable( {
		accept: "#24",
		drop: function() {
			$('#23').hide();
			$('#24').hide();
			swal ("Locust Pose:",
			"A backbend in which one, while face down and parallel to the floor, raises both legs and both arms.")
		}
	});

	$('#26').droppable( {
		accept: "#29",
		drop: function() {
			$('#26').hide();
			$('#29').hide();
			swal ("Warrior II Pose: ",
			"A forward lunge pose in which one arm is extended parallel and forward, and the other parallel and backward.")
		}
	});

	$('#27').droppable( {
		accept: "#32",
		drop: function() {
			$('#27').hideg();
			$('#32').hide();
			swal ("Warrior III Pose: ",
			"A standing pose in which one balances on one foot while the rest of the body is held perpendicular to the floor in a straight line. ")
		}
	});

	$('#30').droppable( {
		accept: "#28",
		drop: function() {
			$('#30').hide();
			$('#28').hide();
			swal ("Warrior I Pose: ",
			"A forward lunge pose in which both arms are extended skyward. ")
		}
	});

	$('#31').droppable( {
		accept: "#25",
		drop: function() {
			$('#31').hide();
			$('#25').hide();
			swal ("Chair Pose: ",
			"A squat in which both arms are raised skyward. ")
		}
	});

});