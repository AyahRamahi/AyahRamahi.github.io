window.onload = function(){
	load_quote();
	function load_quote(){
		var quotes = [
			    "You've got the words to change a nation but you're biting your tongue.",
			    "It's just a matter of time before we learn how to fly!",
			    "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.",
			    "Know thyself. ",
			    "To thine own self be true!",
			    "Chaos is order yet undeciphered.",
			    "Have I gone mad?",
			    "I'll search the universe.",
			    "Be afraid and do it anyway!",
			    "But only the fearless can be great.",
			    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
			    "Go forth and have no fear.",
			    "Lost in your mind? I wanna know...",
			    "Seek, and ye shall find.",
			    "Success is my only option, failure's not."
			];
		document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
	};
}