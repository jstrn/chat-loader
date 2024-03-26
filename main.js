document.addEventListener('DOMContentLoaded', function() {
	const currentTime = new Date();
	const hour = currentTime.getHours();
	const dayOfWeek = currentTime.getDay();
	const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5; // Monday to Friday
	const isDaytime = hour >= 7 && hour < 18; // 7:00 AM to 5:59 PM
	const container = document.getElementById('app-container');

	if (isWeekday && isDaytime) {
		// It's a weekday and daytime
		container.innerHTML = '<iframe src="https://messenger.chatgenie.io/?appId=992ebe24-9d7b-4b00-adc4-3e3faf72c434" frameborder="0"></iframe>';
	} else {
		// It's either not a weekday or not daytime
		container.innerHTML = '<iframe src="https://mentorappweb.globalmentoring.com/client?clientId=MjQ5NTE4&clientType=TXNw&lang=ZW4%3D" frameborder="0"></iframe>';
	}
});


