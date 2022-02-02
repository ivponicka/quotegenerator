function generate(){
	var quotes = {
		"- Aaron Lauritsen" : '"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow."',
		"― Alysha Speer" : '"You never really know what is coming a small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity."',
		"― C.S. Lewis" : '"I was not born to be free---I was born to adore and obey."',
		"― Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
		"― John Galsworthy" : '"Life calls the tune, we dance."',
		"― Lewis B. Smedes" : '"To forgive is to set a prisoner free and discover that the prisoner was you."',
		"― Deepak Chopra" : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
		"― Mary Astell" : '"If all men are born free, how is it that all women are born slaves?"',
		"― Jenny Valentine, " : '"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."',
		"― Aaron Lauritsen" : '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”"',
		"― Nenia Campbell" : '"You want to be free. You also want to be mine. You cannot be both."',
		"― Aaron Lauritsen" : "From this point forward, you don’t even know how to quit in life.",
		"― Edward M. Hallowel" : "Forgiveness takes intelligence, discipline, imagination, and persistence, as well as a special psychological strength, something athletes call mental toughness and warriors call courage."
	}

	var authors = Object.keys(quotes);
	var author = authors[Math.floor(Math.random
		() * authors.length)];
	var quote = quotes[author];

	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = author;
}