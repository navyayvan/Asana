var playerScores = { player1: 0, player2: 0}

currentPlayer = 'player1'; 

$(document).ready(function() {

	swal("Welcome!", "This is a two player game. Player One begins.");
	
	$('.photo').draggable( {
		revert: function(valid) {
			if (valid) {
				playerScores[currentPlayer] ++;
				$('#displayScoreOne').text(playerScores.player1);
				$('#displayScoreTwo').text(playerScores.player2);
			} else {
				if (currentPlayer === 'player1') {
					currentPlayer = 'player2';
					document.getElementById('playerTwoScore').style.color = "red";
					document.getElementById('playerOneScore').style.color="black";
				} else {
					currentPlayer = 'player1';
					document.getElementById('playerTwoScore').style.color= "black";
					document.getElementById('playerOneScore').style.color = "red";
				}
			}
			if (playerScores.player1 + playerScores.player2 === 16) {
				swal("The game is up. Great job!");
			}
			return !valid;

		}


	});


	$('#2').droppable( {
		accept: "#5",
		drop: function() {
			$('#2').hide();
			$('#5').hide();
		}
	});

	$('#3').droppable( {
		accept: "#1",
		drop: function() {
			$('#3').hide();
			$('#1').hide();
		}
	});

	$('#6').droppable( {
		accept: "#8",
		drop: function() {
			$('#6').hide();
			$('#8').hide();
		}
	});

	$('#7').droppable( {
		accept: "#4",
		drop: function() {
			$('#7').hide();
			$('#4').hide();
		}
	});
    
    $('#9').droppable( {
		accept: "#15",
		drop: function() {
			$('#9').hide();
			$('#15').hide();
		}
	});

	$('#12').droppable( {
		accept: "#10",
		drop: function() {
			$('#12').hide();
			$('#10').hide();
		}
	});

	$('#13').droppable( {
		accept: "#14",
		drop: function() {
			$('#13').hide();
			$('#14').hide();
		}
	});

	$('#16').droppable( {
		accept: "#11",
		drop: function() {
			$('#16').hide();
			$('#11').hide();
		}
	});

	$('#18').droppable( {
			accept: "#20",
			drop: function() {
				$('#18').hide();
				$('#20').hide();
			}
		});

	$('#19').droppable( {
		accept: "#17",
		drop: function() {
			$('#19').hide();
			$('#17').hide();
		}
	});

	$('#16').droppable( {
		accept: "#11",
		drop: function() {
			$('#16').hide();
			$('#11').hide();
		}
	});

	$('#22').droppable( {
		accept: "#21",
		drop: function() {
			$('#22').hide();
			$('#21').hide();
		}
	});

	$('#23').droppable( {
		accept: "#24",
		drop: function() {
			$('#23').hide();
			$('#24').hide();
		}
	});

	$('#26').droppable( {
		accept: "#29",
		drop: function() {
			$('#26').hide();
			$('#29').hide();
		}
	});

	$('#27').droppable( {
		accept: "#32",
		drop: function() {
			$('#27').hide();
			$('#32').hide();
		}
	});

	$('#30').droppable( {
		accept: "#28",
		drop: function() {
			$('#30').hide();
			$('#28').hide();
		}
	});

	$('#31').droppable( {
		accept: "#25",
		drop: function() {
			$('#31').hide();
			$('#25').hide();
		}
	});

});