window.addEventListener('load', function () {
	fetch('https://handlers.education.launchcode.org/static/astronauts.json')
		.then(function (response) {
			return response.json();
			console.log(json);
		})
		.then((json) => {
			const container = document.getElementById('#container');
			let astronautHTML = ' ';
			for (astronaut of json) {
				console.log(astronaut);
				astronautHTML += (
					<div id="container">
						<div class="astronaut">
							<div class="bio"></div>
							<h3>
								${astronaut.firstName} ${astronaut.lastName}
							</h3>
							<ul>
								<li>Hours in space: ${astronaut['hoursInSpace']}</li>
								<li>Active: ${astronaut.active}hi!</li>
								<li>Skills: ${astronaut.skills.join(' , ')}</li>
							</ul>
						</div>
						<img>class="avatar" scr=${astronaut.picture}</img>
					</div>
				);
			}
		});
});
// TODO: add code here
