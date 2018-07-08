var word = "ABC"; //Das richtige Wort wird in dieser Variable gespeichert; am Anfang befindet sich hier ein Platzhalter mit 3 Buchstaben
var rightLetters = 0; //Die richtig erratenen Buchstaben
var wordLetters = 3; //Eine Variable für die Buchstabenanzahl
var letters = word.length; //Die Anzahl der Buchstaben des Wortes entspricht seiner Länge
var mistakes = 0; //Die Anzahl der gemachten Fehler
var keysPressable = true; //Diese Variable gibt an, ob man die Buchstaben aktuell drücken kann (siehe letterClick())
var randomLetters = false; //Ist diese Variable wahr, werden Wörter mit zufälliger Buchstabenlänge angegeben (siehe randomLetterWord(); letterClick())
var inTheGame = false; //Diese Variable zeigt an, ob man sich derzeit im Spiel befindet (siehe inGame(); notInGame())
var lang = "GER"; //Die Sprache der angefragten Wörter ist anfangs Deutsch

function generalReset() //Setzt die Farbe der Tastaturtasten und das Galgenbild zurück
	{
	rightLetters = 0; //Zurücksetzen der richtigen Buchstaben und der Fehler
	mistakes = 0;
	
	for (i=65; i<91; i++) //i läuft alle Werte von 65 bis 90 durch; das sind die ASCII-Werte für A-Z
		{
		letterFromASCII = String.fromCharCode(i); //Die Variable letterFromASCII ist A-Z
		
		document.getElementById(letterFromASCII).style.background = "#FFFFFF"; //Alle Buchstaben von A-Z werden weiß gemacht
		}
		
	document.getElementById("Ä").style.background = "#FFFFFF"; //Ä, Ö, Ü und ß werden weiß gemacht
	document.getElementById("Ö").style.background = "#FFFFFF";
	document.getElementById("Ü").style.background = "#FFFFFF";
	document.getElementById("ß").style.background = "#FFFFFF";
	
	document.getElementById("hangmanDiv").src="images/hangman/h0.png"; //Setzt das Galgenbild zurück
	}

function langChange(nextLang) //Wechselt die Sprache
	{
	if (nextLang == 1) //Wenn die deutsche Flagge angeklickt wird
		{
		lang = "GER";
		document.getElementById("GERflag").src="images/flags/GER.png";
		document.getElementById("ENGflag").src="images/flags/ENGbw.png";
		}
	
	if (nextLang == 2) //Wenn die britische (Sprache ist Englisch) Flagge angeklickt wird
		{
		lang = "ENG";
		document.getElementById("GERflag").src="images/flags/GERbw.png";
		document.getElementById("ENGflag").src="images/flags/ENG.png";
		}
	}

function inGame() //Funktion, die ausgelöst wird, wenn man im Spiel ist
	{
	inTheGame = true; //Man befindet sich nun im Spiel
	
	for (i=1; i<5; i++) //Die Klasse aller Elemente mit der id "inInGame + eine Zahl bis 4" wird von nInGame (notInGame) auf yInGame (yesInGame) gesetzt
		{
		document.getElementById("ifInGame" + i).classList.remove("nInGame");
		
		document.getElementById("ifInGame" + i).classList.add("yInGame");
		}
	
	for (i=5; i<8; i++) //Die Klasse aller Elemente mit der id "inInGame + eine Zahl von 5 bis 6" wird von yInGame auf nInGame gesetzt
		{
		document.getElementById("ifInGame" + i).classList.remove("yInGame");
		
		document.getElementById("ifInGame" + i).classList.add("nInGame");
		}
	}

function notInGame() //Funktion, die ausgelöst wird, wenn man nicht im Spiel ist
	{
	inTheGame = false; //Man befindet sich nicht mehr im Spiel
	
	for (i=1; i<5; i++) //Die Klasse aller Elemente mit der id "inInGame + eine Zahl bis 4" wird von yInGame auf nInGame gesetzt
		{
		document.getElementById("ifInGame" + i).classList.remove("yInGame");
		
		document.getElementById("ifInGame" + i).classList.add("nInGame");
		}
	
	for (i=5; i<8; i++) //Die Klasse aller Elemente mit der id "inInGame + eine Zahl von 5 bis 6" wird von nInGame auf yInGame gesetzt
		{
		document.getElementById("ifInGame" + i).classList.remove("nInGame");
		
		document.getElementById("ifInGame" + i).classList.add("yInGame");
		}
	}

function menuButton() //Funktion für den Menüknopf
	{
	window.location.reload(false);
	}

function anotherWordLength(newWordLength) //Die neue Wortlänge
	{
	wordLetters = newWordLength; //Die Variable wordLetters wird geändert
	}

function displayReset() //Setzt die Anzeige für erratene Buchstaben zurück
	{
	document.getElementById("letter1").innerHTML = "_";
	document.getElementById("letter2").innerHTML = "_";
	document.getElementById("letter3").innerHTML = "_";
	
	if (wordLetters == 3)
		{
		document.getElementById("letter4").innerHTML = ""; //Die Anzeige zeigt die Buchstabenfelder 4 bis 8 nicht mehr an
		document.getElementById("letter5").innerHTML = "";
		document.getElementById("letter6").innerHTML = "";
		document.getElementById("letter7").innerHTML = "";
		document.getElementById("letter8").innerHTML = "";
		}
	if (wordLetters == 4)
		{
		document.getElementById("letter4").innerHTML = "<p>_</p>"; //Die Anzeige zeigt die Felder 5 bis 8 nicht mehr an
		document.getElementById("letter5").innerHTML = "";
		document.getElementById("letter6").innerHTML = "";
		document.getElementById("letter7").innerHTML = "";
		document.getElementById("letter8").innerHTML = "";
		}
	if (wordLetters == 5)
		{
		document.getElementById("letter4").innerHTML = "<p>_</p>"; //Die Anzeige zeigt die Felder 6 bis 8 nicht mehr an
		document.getElementById("letter5").innerHTML = "<p>_</p>";
		document.getElementById("letter6").innerHTML = "";
		document.getElementById("letter7").innerHTML = "";
		document.getElementById("letter8").innerHTML = "";
		}
	if (wordLetters == 6)
		{
		document.getElementById("letter4").innerHTML = "<p>_</p>"; //Die Anzeige zeigt die Felder 7 und 8 nicht mehr an
		document.getElementById("letter5").innerHTML = "<p>_</p>";
		document.getElementById("letter6").innerHTML = "<p>_</p>";
		document.getElementById("letter7").innerHTML = "";
		document.getElementById("letter8").innerHTML = "";
		}
	if (wordLetters == 7)
		{
		document.getElementById("letter4").innerHTML = "<p>_</p>"; //Die Anzeige zeigt nur das achte Feld nicht an
		document.getElementById("letter5").innerHTML = "<p>_</p>";
		document.getElementById("letter6").innerHTML = "<p>_</p>";
		document.getElementById("letter7").innerHTML = "<p>_</p>";
		document.getElementById("letter8").innerHTML = "";
		}
	if (wordLetters == 8)
		{
		document.getElementById("letter4").innerHTML = "<p>_</p>"; //Die Anzeige zeigt alle Felder an
		document.getElementById("letter5").innerHTML = "<p>_</p>";
		document.getElementById("letter6").innerHTML = "<p>_</p>";
		document.getElementById("letter7").innerHTML = "<p>_</p>";
		document.getElementById("letter8").innerHTML = "<p>_</p>";
		}

	}

function threeLetterWord() //Wort mit 3 Buchstaben
	{
	wordLetters = 3; //Die Buchstabenanzahl des neuen Wortes ist 3
	
	getWordFromTxt(3); //Ein neues Wort wird herausgesucht
	
	displayReset();
	}

function fourLetterWord() //siehe threeLetterWord()
	{
	wordLetters = 4;
	
	getWordFromTxt(4);
	
	displayReset();
	}

function fiveLetterWord() //siehe threeLetterWord()
	{
	wordLetters = 5;
	
	getWordFromTxt(5);
	
	displayReset();
	}

function sixLetterWord() //siehe threeLetterWord()
	{
	wordLetters = 6;
	
	getWordFromTxt(6);
	
	displayReset();
	}

function sevenLetterWord() //siehe threeLetterWord()
	{
	wordLetters = 7;
	
	getWordFromTxt(7);
	
	displayReset();
	}

function eightLetterWord() //siehe threeLetterWord()
	{
	wordLetters = 8;
	
	getWordFromTxt(8);
	
	displayReset();
	}

function randomLetterWord() //Gibt ein Wort mit zufälliger Buchstabenlänge aus (wählt also eins aus allen verfügbaren)
	{
	randomLetterCount = Math.floor(6*Math.random())+3; //randomLetterCount gibt die Anzahl der Buchstaben des Wortes aus
	
	anotherWordLength(randomLetterCount);
	
	randomLetters = true; //Zufällige Buchstabenanzahl ist aktiviert
	
	wordLetters = randomLetterCount;
	displayReset();
	
	if (randomLetterCount == 3) //Wenn randomLetterCount 3 ist, hat das nächste Wort 3 Buchstaben
		{
		threeLetterWord();
		}
	
	if (randomLetterCount == 4) //siehe if (randomLetterCount == 3)
		{
		fourLetterWord();
		}
	
	if (randomLetterCount == 5) //siehe if (randomLetterCount == 3)
		{
		fiveLetterWord();
		}
	
	if (randomLetterCount == 6) //siehe if (randomLetterCount == 3)
		{
		sixLetterWord();
		}
	
	if (randomLetterCount == 7) //siehe if (randomLetterCount == 3)
		{
		sevenLetterWord();
		}
	
	if (randomLetterCount == 8) //siehe if (randomLetterCount == 3)
		{
		eightLetterWord();
		}
	
	}

function getWordFromTxt(number) //Benutzt XMLHttpRequest, um ein zufälliges Wort aus einer Textdatei auszulesen
	{
	var wordRequest = new XMLHttpRequest(); //Neues XMLHttpRequest
	var wordUsedBefore = word; //Das vorher abgefragte Wort entspricht noch dem aktuellen Wort
	
	if (lang == "GER")
		wordRequest.open("GET", "words/GER" + number + ".txt", false); //Öffnet entsprechende Datei (Deutsch)
	
	if (lang == "ENG")
		wordRequest.open("GET", "words/ENG" + number + ".txt", false); //Öffnet entsprechende Datei (Englisch)
	
	wordRequest.overrideMimeType("text/plain; charset=iso-8859-1;");
	wordRequest.send(null); //Sendet die Anfrage
	
	//wordRequest.onreadystatechange = function()
		//{
		if (wordRequest.readyState === 4 && wordRequest.status === 200) //Wird ausgeführt, wenn die Antwort erhalten ist
			{
			txtLength = wordRequest.responseText.length; //Gesamtlänge des Dokuments (Absatz = 2 Leerzeichen)
			numb = number+2;
			
			wordFromTxtLength = (txtLength+2)/(number+2);
			randomWordNumber = Math.floor(wordFromTxtLength*Math.random());
			
			finishedWord = ""; //finishedWord wird als String festgelegt
			
			for (i=(randomWordNumber*numb); i<(randomWordNumber*numb)+number; i++)
				{
				receivedLetter = wordRequest.responseText.charAt(i);
				
				finishedWord = finishedWord.concat(receivedLetter); //receivedLetter wird an finishedWord angefügt
				}
			
			word = finishedWord; //Endvariable ist word
			letters = word.length; //Die Buchstaben eines Wortes entsprechen seiner Länge
			
			if (wordUsedBefore == word) //Verhindert, dass dasselbe Wort direkt hintereinander abgefragt wird
				getWordFromTxt(number);
			}
		//};
	}

function letterClick(letter) //Funktion für die einzelnen Tasten
	{
	if (keysPressable == true) //letterClick() ist nur ausführbar, wenn die Tasten auch drückbar sind
		{
		if (letter.style.background != "rgb(132, 132, 132) none repeat scroll 0% 0%") //Nur ausgeführt, wenn die Farbe der Taste nicht grau ist ("rgb(132, 132, 132) ..." ist der innerHTML-Wert eines grauen Buchstaben)
			{
			var pressedKey = letter.id; //Der gedrückte Buchstabe entpricht der id der taste
			var rightLetter = false; //rightLetter gibt an, ob ein richtiger Buchstabe gefunden wurde
			
			for (i=0; i<letters; i++) //Die Länge des Wortes mal wird geschaut, ob die gedrückte Taste einem oder mehreren Buchstaben des Wortes entspricht
				{
				if (word.charAt(i) == pressedKey)
					{
					rightLetter = true; //Ein treffender Buchstabe wurde erraten
					
					document.getElementById("letter" + (i+1)).innerHTML = pressedKey; //Der Buchstabe wird auf dem entsprechenden Anzeigeplatz angezeigt
					
					rightLetters = rightLetters + 1; //Die Anzahl insgesamt richtiger Buchstaben wird um 1 erhöht
					}
				}
				
			if (rightLetter == false) //Sollte kein richtiger Buchstabe erraten werden
				{
				mistakes = mistakes + 1; //Die Anzahl Fehler wird um 1 erhöht
				}
			
			document.getElementById("hangmanDiv").src="images/hangman/h" + mistakes + ".png"; //Das Galgenbild wird aktualisiert
			
			letter.style.background = "#848484"; //Der Buchstabe wird grau gemacht
			
			if (rightLetters == letters) //Wenn alle Buchstaben erraten wurden
				{
				rightLetters = 0; //Zurücksetzen der richtigen Buchstaben und der Fehler
				mistakes = 0;
				
				for (i=65; i<91; i++) //i läuft alle Werte von 65 bis 90 durch; das sind die ASCII-Werte für A-Z
					{
					letterFromASCII = String.fromCharCode(i); //Die Variable letterFromASCII ist A-Z
					
					document.getElementById(letterFromASCII).style.background = "#FFFFFF"; //Alle Buchstaben von A-Z werden weiß gemacht
					}
				
				document.getElementById("Ä").style.background = "#FFFFFF"; //Ä, Ö, Ü und ß werden weiß gemacht
				document.getElementById("Ö").style.background = "#FFFFFF";
				document.getElementById("Ü").style.background = "#FFFFFF";
				document.getElementById("ß").style.background = "#FFFFFF";
				
				document.getElementById("hangmanDiv").src="images/hangman/hRight.png"; //Das "Richtig"-Bild wird eingeblendet
				
				keysPressable = false; //Die Buchstaben sind nun nicht mehr drückbar
				
				setTimeout(function() //Ein Timeout (Dauer: 1,5 Sekunden), damit das "Richtig-Bild" 1,5 Sekunden lang angezeigt wird
					{
					document.getElementById("hangmanDiv").src="images/hangman/h0.png"; //Das Galgenbild wird zurückgesetzt
					
					if (randomLetters == true) //Wenn randomLetters aktiv ist, werden weitere Wörter mit zufälliger Buchstabenanzahl ausgewählt
						{
						randomLetterWord();
						}
					
					if (randomLetters == false) //Ist randomLetters nicht aktiv, wird ja nach Länge des Wortes ein Wort derselben Länge ausgewählt
						{
						if (wordLetters == 3)
							{
							anotherWordLength(3);
							threeLetterWord();
							}
						
						if (wordLetters == 4)
							{
							anotherWordLength(4);
							fourLetterWord();
							}
						
						if (wordLetters == 5)
							{
							anotherWordLength(5);
							fiveLetterWord();
							}
						
						if (wordLetters == 6)
							{
							anotherWordLength(6);
							sixLetterWord();
							}
						
						if (wordLetters == 7)
							{
							anotherWordLength(7);
							sevenLetterWord();
							}
						
						if (wordLetters == 8)
							{
							anotherWordLength(8);
							eightLetterWord();
							}
						}
					
					keysPressable = true; //Die Buchstaben sind wieder drückbar
					
					for (i=0; i<letters; i++) //Die Anzeige der erratenen Buchstaben wird zurückgesetzt
						{
						document.getElementById("letter" + (i+1)).innerHTML = "<p>_</p>";
						}
					}, 1500);
				}
			
			if (mistakes == 11) //Wenn der Galgen mit 11 Fehlern komplett ist
				{
				rightLetters = 0; //Zurücksetzen der richtigen Buchstaben und der Fehler
				mistakes = 0;
				
				for (i=65; i<91; i++) //Alle Tasten von A-Z werden weiß gemacht
					{
					letterFromASCII = String.fromCharCode(i);
					
					document.getElementById(letterFromASCII).style.background = "#FFFFFF";
					}
				
				document.getElementById("Ä").style.background = "#FFFFFF"; //Ä-, Ö-, Ü- und ß-Tasten werden weiß gemacht
				document.getElementById("Ö").style.background = "#FFFFFF";
				document.getElementById("Ü").style.background = "#FFFFFF";
				document.getElementById("ß").style.background = "#FFFFFF";
				
				keysPressable = false; //Die Buchstaben sind nun nicht mehr drückbar
				
				for (i=0; i<letters; i++) //Die richtigen Buchstaben des Wortes werden in der Anzeige aufgedeckt
						{
						document.getElementById("letter" + (i+1)).innerHTML = word.charAt(i);
						}
				
				setTimeout(function() //Das Galgenbild wird zurückgesetzt und ein neues Wort ausgewählt
					{
					document.getElementById("hangmanDiv").src="images/hangman/h0.png";
					
					if (randomLetters == true)
						{
						randomLetterWord();
						}
					
					if (randomLetters == false)
						{
						if (wordLetters == 3)
							{
							anotherWordLength(3);
							threeLetterWord();
							}
						
						if (wordLetters == 4)
							{
							anotherWordLength(4);
							fourLetterWord();
							}
						
						if (wordLetters == 5)
							{
							anotherWordLength(5);
							fiveLetterWord();
							}
						
						if (wordLetters == 6)
							{
							anotherWordLength(6);
							sixLetterWord();
							}
						
						if (wordLetters == 7)
							{
							anotherWordLength(7);
							sevenLetterWord();
							}
						
						if (wordLetters == 8)
							{
							anotherWordLength(8);
							eightLetterWord();
							}
						}
					
					keysPressable = true; //Die Buchstaben sind wieder drückbar
					
					for (i=0; i<letters; i++) //Die Anzeige der erratenen Buchstaben wird zurückgesetzt
						{
						document.getElementById("letter" + (i+1)).innerHTML = "<p>_</p>";
						}
					}, 1500);
				}
			}
		}
	}