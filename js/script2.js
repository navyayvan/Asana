$('#3').droppable( {
		accept: "#1",
		drop: function() {
			$('#3').hide();
			$('#1').hide();
			swal("Bakasana or Crow Pose:", 
			"arm balancing asana in which hands are planted on the floor, shins rest upon upper arms, and feet lift up.");
		}

	});

function isDrop(photo, pose, alert)
	$("photo").droppable({
		accept: "pose",
		drop: function() {
			$("photo").hide();
			$("pose").hide();
			swal("alert");
		}
	})

isDrop("#3", )