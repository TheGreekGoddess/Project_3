// Search Bar Functions and Manipulation

// UMAR Artists name list
var artistList = ["10 Years","112","2 Chainz","2Pac","2 Pistols","311","3 Doors Down","3LW","3OH!3","50 Cent","702",
"Aaron Carter","Aaron Lewis","Aaron Lines","Aaron Tippin","Ace Hood","Action Bronson","Adam Lambert","Adele","Aerosmith","AFI","Afrojack","Afroman","Airwaves","Akon","Alabama","Alanis Morissette","Alan Jackson","Alejandro Sanz",
"Alexandra Stan","Alex Clare","Alice In Chains","Alicia Keys","Alien Ant Farm","Alisan Porter","Alison Krauss","Aloe Blacc","Alpha Rev","Aly","Amanda","Amanda Perez","Amel Larrieux","American Hi","Amerie","Amy Winehouse",
"Anastacia","Andy Grammer","Andy Griggs","Andy Williams","Angels","Angie Stone","Anita Baker","Anna Nalick","Annie Lennox","Anthony Hamilton","Anya Marina","A Perfect Circle","Apocalyptica","Arcade Fire","Arctic Monkeys",
"Armin van Buuren","A Rocket To The Moon","Ashanti","Asher Roth","Ashlee Simpson","Ashley Tisdale","A*Teens","A Tribe Called Quest","Audioslave","Augustana","Avant","Aventura","Avril Lavigne","AWOLNATION","Azul Azul",
"B2K","Baby Bash","Babyface","Backstreet Boys","Baha Men","BBMak","Beanie Sigel","Beastie Boys","Beck","Ben Folds","Ben Rector","Benzino","Beth Hart","Beyonce","Big","Big Punisher","Big Sean","Big Time Rush","Big Tymers","Bilal",
"Billy Currington","Billy Dean","Billy Gilman","Billy Ray Cyrus","Bing Crosby","Birdman","Bjork","Black Rob","Blake Lewis","Blake Shelton","Blink","Bloodhound Gang","Blue October","B.o.B","Bobby Helms","Bobby V","Bobby Valentino",
"Bo Bice","Bon","Bone Thugs","Bon Jovi","Bowling For Soup","Bow Wow","Boys Like Girls","Boyz II Men","Boyz N Da Hood","Brad Paisley","Brandi Carlile","Brandy","Brantley Gilbert","Breaking Benjamin","Breathe Carolina","Brenda Lee",
"Britney Spears","Britt Nicole","Brooke Hogan","Brooke White","Brooks","Brown Boy","Bruno Mars","BT","Bubba Sparxxx","Buckcherry","Bucky Covington","Buddy Jewell","Bush","Busta Rhymes","B*Witched",
"Caesars","Cage The Elephant","Ca$his","Cali Swag District","Calvin Harris","Cam'Ron","Carlos Vives","Carl Thomas","Carly Rae Jepsen","Carolyn Dawn Johnson","Carrie Underwood","Cartel","Case","Cash Cash","Cassidy","Celine Dion",
"Chad Brock","Cham","Chamillionaire","Changing Faces","Chante Moore","Charice","Charlie Wilson","Chely Wright","Cher","Chevelle","Chico DeBarge","Childish Gambino","Chingy","Chris Brown","Chris Cagle","Chris Cornell",
"Chrisette Michele","Chris Lake","Christina Aguilera","Christina Milian","Christina Perri","Chris Willis","Chris Young","Chuck Berry","Ciara","Clay Aiken","Clay Walker","Clint Black","Clipse","Cobra Starship","Cody Johnson",
"Colbie Caillat","Cold","Collective Soul","Collin Raye","Common","Coo Coo Cal","Counting Crows","Craig Campbell","Craig David","Craig Morgan","Crazy Frog","Crazy Town","Creed","Crime Mob",
"Cristian Castro","Crossfade","Crystal Bowersox","Cupid","Curren$Y",
"Da Brat","Daddy Yankee","Daft Punk","Damian Jr. Gong 'Marley'","Damien","Daniel Powter","Danity Kane","Danny Gokey","Darius Rucker","Darlene Love","Darren Hayes","Darryl Worley","Darude","Daryl Hall John Oates",
"Dashboard Confessional","Daughtry","Dave Days","Dave Hollister","Dave Matthews Band","David Archuleta","David Ball","David Banner","David Bowie","David Cook","David Gray","David Guetta","David Lee Murphy","David Nail","Dcup",
"deadmau5","Death Cab For Cutie","Deborah Cox","Default","Dem Franchize Boyz","Demi Lovato","Depeche Mode","Diamond Rio","Diana DeGarmo","Diddy","Dido","Dierks Bentley","Dilated Peoples","Diplo","Dirty Vegas","Disturbed",
"Dixie Chicks","DJ Drama","DJ Khaled","DJ Sammy","DMX","Donell Jones","Don Henley","Don Omar","Dorrough","Down A.K.A. Kilo","Dragonette","Drake","Drama","Dream","Dru Hill","Dunn","Duran Duran","Dwele","Dwight Yoakam",
"Easton Corbin","Ed Sheeran","Edward Maya","Edwin McCain","Eiffel 65","El Chombo","Elephant Man","Eli Young Band","Ellie Goulding","Elliott Yamin","Elvis Presley","Emerson Drive","Eminem","Empire Of The Sun","Enrique Iglesias",
"En Vogue","Enya","Eric Benet","Eric Heatherly","Erick Sermon","Erykah Badu","Estelle","Evanescence","Eve","Eve 6","Everclear","Everlast",
"Fabolous","Faith Evans","Fall Out Boy","Fantasia","Far*East Movement","Fastball","Fatboy Slim","Fat Joe","Fefe Dobson","Feist","Field Mob","Filter","Finger Eleven","Fitz And The Tantrums","Five Finger Death Punch",
"Fleetwood Mac","Flex","Flobots","Floetry","Florence + The Machine","Flo Rida","Flyleaf","Foo Fighters","Foster The People","Fountains Of Wayne","Fragma","Framing Hanley","Francesca Battistelli","Frankie J","Frank Sinatra",
"Franz Ferdinand","Freeway","French Montana","Fuel",
"Game","Garbage","Gary Allan","Gavin DeGraw","Gene Autry","George Harrison","George Michael","George Strait","Gerald Levert","Gesaffelstein","Ghostface Killah","Gigi D'Agostino","Ginuwine","Glee Cast","Glen Campbell",
"Gloria Estefan","Gloriana","Godsmack","Good Charlotte","Goo Goo Dolls","Gorillaz","Gorilla Zoe","Gotye","Grace","Granger Smith","Green Day","Gretchen Wilson","Grouplove","Guerilla Black","Guns N' Roses","Guy Sebastian",
"Gwen Stefani","Gym Class Heroes","Gyptian",
"Hannah Montana","Heather Headley","Hellogoodbye","High School Musical Cast","High Valley","Hikaru Utada","Hilary Duff","Hinder","Hoobastank","Hot Boys","Houston","Howie Day","Huey","Hugh Laurie","Hunter Hayes","Hurricane Chris",
"Ice Cube","Ideal","Idina Menzel","iio","Incubus","India.Arie","Ingrid Michaelson","INXS",
"J","Jack Ingram","Jack Johnson","Jadakiss","Jagged Edge","Jaheim","Jake Owen","James Blake","James Blunt","James Newton Howard","James Otto","Jamie Foxx","Jamie O'Neal","Janelle Monae","Janet","Janet Jackson","Ja Rule",
"Jason Derulo","Jason Michael Carroll","Jason Mraz","Jay Rock","Jazmine Sullivan","J. Cole","Jeannie Ortega","Jeezy","Jeff Bates","Jennifer Hudson","Jennifer Lopez","Jeremih","Jermaine Dupri","Jerrod Niemann","Jesse McCartney",
"Jessica Andrews","Jessica Simpson","Jessie J","Jessie James","Jet","Jewel","J. Holiday","Jim Jones","Jimmy Buffett","Jimmy Eat World","Jimmy Wayne","Jo Dee Messina","Joe","Joe Budden","Joe Diffie","Joe Nichols","John Legend",
"John Mayer","John Mellencamp","John Michael Montgomery","Jonas Brothers","Jon B","Jordan Knight","Jordin Sparks","Jose Feliciano","Josh Gracin","Josh Groban","Josh Kelley","Josh Thompson","Josh Turner","Joshua Radin",
"Joss Stone","JT Money","Juanes","Juelz Santana","Juicy J","Julianne Hough","Julie Roberts","Justin Bieber","Justin Moore","Justin Timberlake","Juvenile",
"Kardinal Offishall","Kart","Kaskade","Kat DeLuna","Kate Voegele","Katharine McPhee","Katy Perry","k.d. lang","Keane","Keith Murray","Keith Urban","KeKe Wyatt","Kelis","Kellie Pickler","Kelly Clarkson","Kelly Price",
"Kelly Rowland","Kem","Ken","Kendrick Lamar","Kenny Chesney","Kenny G","Keri Hilson","Kevin Gates","Kevin Lyttle","Keyshia Cole","Kid Cudi","Kid Rock","Killer Mike","Kimberley Locke","Kings Of Leon","Kirk Franklin","Kirko Bangz",
"KONGOS","Korn","Kris Allen","Kristinia DeBarge","Kylie Minogue",
"Lady Antebellum","Lady Gaga","Lady Sovereign","Lana Del Rey","Lara Fabian","La Roux","Lasgo","Lauren Alaina","LeAnn Rimes","Lee Ann Womack","Lee Brice","Lee DeWyze","Len","Lenny Kravitz","Leona Lewis","Leonard Cohen",
"LFO","Li","Lifehouse","Lila McCann","Lil Jon","Lil' Kim","Lil' Mo","Lil Rob","Lil Scrappy","Lil' Troy","Lil Wayne","Lil' Wayne","Lily Allen","Limp Bizkit","Linkin Park","Lionel Richie","Lit","Little Big Town","Liz Phair",
"LL Cool J","Lloyd","Lloyd Banks","LMFAO","Lonestar","Loon","Los Lonely Boys","Lostprophets","Lou Bega","Love And Theft","Ludacris","Luis Fonsi","Luke Bryan","Lumidee","Lupe Fiasco","Lustra","Luther Vandross","Lyfe Jennings",
"M2M","M83.","Mac Miller","Macy Gray","Madcon","Madonna","Maino","Major Lazer","Mana","Mandy Moore","Mann","Mannie Fresh","Mariah Carey","Maria Mena","Mario","Mark Chesnutt","Mark Ronson","Mark Wills","Maroon 5","Marques Houston",
"Marsha Ambrosius","Martina McBride","Martin Solveig","Marvin Sapp","Mary Chapin Carpenter","Mary J. Blige","Mary Mary","Mase","Master P","matchbox twenty","Matisyahu","Mat Kearney","Matt And Kim","Matt Nathanson","Maxwell",
"Meek Mill","Melanie Fiona","Melissa Etheridge","Mercedes","MercyMe","Metallica","Method Man","Metro Station","MGMT","M.I.A.","Michael Buble","Michael Franti","Michael Jackson","Michelle Branch","Michel Telo","Migos","Miguel",
"MIKA","Mike Jones","Mike Posner","Miley Cyrus","Mindless Behavior","Mint Condition","Miranda Lambert","Missy Elliott","Mobb Deep","Moby","Modest Mouse","Molly","Monchy","Monica","Montell Jordan","Montgomery Gentry","Mos Def",
"Mr. Cheeks","Mr. Vegas","Mudvayne","Mumford","Murphy Lee","Muse","Musiq","Musiq Soulchild","Mya","My Chemical Romance","Mystikal",
"Nappy Roots","Natalie Imbruglia","Natasha Bedingfield","Naughty By Nature","Ne","Neal McCoy","NEEDTOBREATHE","Nelly","Nelly Furtado","Neon Trees","NERO","New Boyz","New Edition","New Found Glory","New Kids On The Block",
"NewSong","Next","Nick Cannon","Nickelback","Nicki Minaj","Nick Lachey","Nicky Jam","Nico","Nine Days","Nine Inch Nails","Nipsey Hussle","Nitty","Nivea","No Doubt","Norah Jones","N.O.R.E.","Now",
"Oakenfold","O.A.R.","Oasis","Obie Trice","Of Monsters And Men","OK Go","Ol' Dirty Bastard","Olly Murs","Omarion","OneRepublic","Orianthi","Our Lady Peace","OutKast","Owl City","Ozzy Osbourne",
"Panic! At The Disco","Panjabi MC","Papa Roach","Parachute","Paramore","Passenger","Passion Pit","Pastor Troy","Pat Green","Patti LaBelle","Patty Loveless","Paula Abdul","Paulina Rubio","Paul Wall","Pearl Jam","Pedro Capo",
"Perry Como","Petey Pablo","Pharoahe Monch","Pharrell","Pharrell Williams","Phil Collins","Phil Vassar","Phoenix","Pilar Montenegro","Pistol Annies","Pitbull","Plain White T's","Play","Pleasure P","Plies","P!nk","P.O.D.",
"Portugal. The Man","Pretty Ricky","Prince Royce","Profyle","Project Pat","PSY","Puddle Of Mudd","Pusha T",
"Q","Queen","Queens Of The Stone Age",
"Rachel Platten","Radiohead","Rage Against The Machine","Raheem DeVaughn","Randy Houser","Randy Travis","Raphael Saadiq","Rascal Flatts","Ray J","Ray LaMontagne","Reba","Reba McEntire","Red Hot Chili Peppers","Redman",
"Regina Spektor","Reik","Reina","Relient K","R.E.M.","Remy Ma","Rich Boy","Rick Ross","Ricky Martin","Rihanna","Rise Against","R. Kelly","R.L.","Robbie Williams","Robin Thicke","Rob Thomas","Rocko","Rodney Atkins",
"Ron Browz","Roscoe Dash","Ruben Studdard","Ruff Endz","Ryan Cabrera",
"Sade","Saliva","Sammie","Santana","Sara Bareilles","Sara Evans","Sarah Connor","Sarah McLachlan","Saving Abel","Scarface","ScHoolboy Q","S Club 7","Scotty McCreery","Seal","Sean Kingston","Sean Paul","Secondhand Serenade",
"Seether","September","Serj Tankian","Shaggy","Shakira","Shawty Lo","SHeDAISY","Sherrie Austin","Sheryl Crow","Shinedown","Shiny Toy Guns","Shontelle","Shwayze","Shyne","Sia","Sick Puppies","Silversun Pickups","Simple Plan",
"Sixpence None The Richer","Skillet","Slaughterhouse","Slum Village","Smash Mouth","Smokie Norful","Snoop Dogg","Snow Patrol","Solange","Son By Four","Sonique","Sons","Soulja Boy Tell 'em","Soundgarden","Spearhead","Spose",
"Stacie Orrico","Staind","Steve Aoki","Steve Azar","Steve Holy","Steve Wariner","Stevie Wonder","Sting","Stone Sour","Stone Temple Pilots","Sugababes","Sugarland","Sugar Ray","Sum 41","Sunday","Sunny Sweeney","Sunshine Anderson",
"Susan Boyle","Switchfoot","System Of A Down",
"T","Taio Cruz","Taking Back Sunday","Talib Kweli","Tamar Braxton","Tamia","Tammy Cochran","Tank","Tanto Metro","t.A.T.u.","Taylor Hicks","Taylor Swift","Teairra Mari","Tech N9Ne","Teddy Geiger","Teena Marie","Tegan And Sara",
"Terri Clark","Terry Dexter","Tessanne Chin","Thalia","The Afters","The Alchemist","The All","The Ataris","The Band Perry","The Beatnuts","The Black Eyed Peas","The Black Keys","The Bravery","The Cheetah Girls","The Click Five",
"The Corrs","The East Side Boyz","The Fratellis","The Fray","The Game","The Hives","The Killers","The Lonely Island","The Mars Volta","The Nocturnals","The Notorious B.I.G.","Theory Of A Deadman","The Pack","The Raconteurs",
"The Ready Set","The Red Jumpsuit Apparatus","The Revivalists","The Rolling Stones","The Ronettes","The Roots","The Scene","The Script","The Shins","The Smashing Pumpkins","The Strokes","The Ting Tings","The Veronicas",
"The Wallflowers","The Wanted","The White Buffalo","The White Stripes","The Wreckers","Thirty Seconds To Mars","Thompson Square","Three 6 Mafia","Three Days Grace","T.I.","Tiesto","Timbaland","Tim McGraw","Tinie Tempah",
"TLC","Toby Keith","Toby Love","Tom Petty","Toni Braxton","Tony Bennett","Tony Lucca","Tool","Toya","Trace Adkins","Tracie Spencer","Tracy Byrd","Tracy Lawrence","Train","Trapt","Trey Songz","Trick","Trick Daddy","Trick Pony",
"Trillville","Trina","TRUSTcompany","Tweet","twenty one pilots","Twista","Ty Herndon","Tyler The Creator","Tyrese",
"U2","Uncle Kracker","Unk","Usher",
"Vanessa Carlton","Van Halen","Van Zant","Vertical Horizon","V.I.C.","Vince Gill","Vitamin C","Vivian Green","V V Brown",
"Wale","Warren G","Wayne Wonder","WC","Webbie","Weezer","Westlife","Westside Connection","WE the Kings","Wham!","Whitney Houston","will.i.am","Willie Nelson","Will Smith","Will Young","Wisin","Wiz Khalifa","Wonder Girls","Wynonna",
"Xzibit",
"Yael Naim","Yandel","Yeah Yeah Yeahs","Yellowcard","YG","Ying Yang Twins","Yo Gotti","Yolanda Adams","Yolanda Be Cool","YoungBloodZ", "Young Buck", "Young Dro", "Young Gunz", "Young The Giant", "Young Thug", "Yung Joc", 
"Yung L.A.",
"Zac Brown Band", "Zombie Nation"];
//artistData = [0.11436822223581175, 0.612931206231935, 0.49777308838314815, 0.7665792361048979, 0.04247983534295952, 0.4129530349025795, 0.24083730718785043, 0.6666666666666666, 0.3352509399748568, 0.09646937374553434, 0.8342141186052763, 0.9053497942386831, 0.4378547481136458]

//refresh(artistData)

// UMAR Selecting Document
$( document ).ready(function()
{
  // UMAR function running on user keyboard key up
  $ ( "#SearchBar" ).keyup( function()
   {
     // UMAR removing any search list created
     $("#SearchItemsContainer").empty(); 
     
     // UMAR running loop to generate search list
     for (var i= 0; i < artistList.length; i++)
     {
        // UMAR selecting input variable for search
        var searchInput = $( "#SearchBar").val().toLowerCase().trim();

        // UMAR defining condition for search input to be included with minimum lenght of 2 letters
        if (artistList[i].toLowerCase().includes(searchInput) && searchInput.length > 1)
        {
          // UMAR appending the populated searched items on the HTML
          $("#SearchItemsContainer").append( 
            `<div class = "searchHover container" id = "searchedDiv">
              <div class = "row">
                  <div class = "col-md-12">
                    <p class = "searchHover pl-3 pt-3 pb-2 searchedItems" id="${artistList[i]}" >${artistList[i]}</p> 
                  </div>
                </div>
            </div>`
            );
        };
     };
   });
});

