const movieJSON = () => {
    let d = [
      {
        "name": "The Shawshank Redemption",
        "score": 9.3,
        "ranking": 1,
        "type": "Drama",
        "year": "1994"
      },
      {
        "name": "The Godfather",
        "score": 9.2,
        "ranking": 2,
        "type": "Crime",
        "year": "1972"
      },
      {
        "name": "The Dark Knight",
        "score": 9,
        "ranking": 3,
        "type": "Action",
        "year": "2008"
      },
      {
        "name": "The Godfather: Part II",
        "score": 9,
        "ranking": 4,
        "type": "Crime",
        "year": "1974"
      },
      {
        "name": "The Lord of the Rings: The Return of the King",
        "score": 8.9,
        "ranking": 5,
        "type": "Action",
        "year": "2003"
      },
      {
        "name": "Pulp Fiction",
        "score": 8.9,
        "ranking": 6,
        "type": "Crime",
        "year": "1994"
      },
      {
        "name": "Schindler's List",
        "score": 8.9,
        "ranking": 7,
        "type": "Biography",
        "year": "1993"
      },
      {
        "name": "12 Angry Men",
        "score": 8.9,
        "ranking": 8,
        "type": "Crime",
        "year": "1957"
      },
      {
        "name": "Hamilton",
        "score": 8.8,
        "ranking": 9,
        "type": "Biography",
        "year": "2020"
      },
      {
        "name": "Inception",
        "score": 8.8,
        "ranking": 10,
        "type": "Action",
        "year": "2010"
      },
      {
        "name": "Fight Club",
        "score": 8.8,
        "ranking": 11,
        "type": "Drama",
        "year": "1999"
      },
      {
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "score": 8.8,
        "ranking": 12,
        "type": "Action",
        "year": "2001"
      },
      {
        "name": "Forrest Gump",
        "score": 8.8,
        "ranking": 13,
        "type": "Drama",
        "year": "1994"
      },
      {
        "name": "Il buono, il brutto, il cattivo",
        "score": 8.8,
        "ranking": 14,
        "type": "Western",
        "year": "1966"
      },
      {
        "name": "The Lord of the Rings: The Two Towers",
        "score": 8.7,
        "ranking": 15,
        "type": "Action",
        "year": "2002"
      },
      {
        "name": "The Matrix",
        "score": 8.7,
        "ranking": 16,
        "type": "Action",
        "year": "1999"
      },
      {
        "name": "Goodfellas",
        "score": 8.7,
        "ranking": 17,
        "type": "Biography",
        "year": "1990"
      },
      {
        "name": "Star Wars: Episode V - The Empire Strikes Back",
        "score": 8.7,
        "ranking": 18,
        "type": "Action",
        "year": "1980"
      },
      {
        "name": "One Flew Over the Cuckoo's Nest",
        "score": 8.7,
        "ranking": 19,
        "type": "Drama",
        "year": "1975"
      },
      {
        "name": "Seppuku",
        "score": 8.7,
        "ranking": 20,
        "type": "Action",
        "year": "1962"
      },
      {
        "name": "Gisaengchung",
        "score": 8.6,
        "ranking": 21,
        "type": "Comedy",
        "year": "2019"
      },
      {
        "name": "Interstellar",
        "score": 8.6,
        "ranking": 22,
        "type": "Adventure",
        "year": "2014"
      },
      {
        "name": "Cidade de Deus",
        "score": 8.6,
        "ranking": 23,
        "type": "Crime",
        "year": "2002"
      },
      {
        "name": "Sen to Chihiro no kamikakushi",
        "score": 8.6,
        "ranking": 24,
        "type": "Animation",
        "year": "2001"
      },
      {
        "name": "Saving Private Ryan",
        "score": 8.6,
        "ranking": 25,
        "type": "Drama",
        "year": "1998"
      },
      {
        "name": "The Green Mile",
        "score": 8.6,
        "ranking": 26,
        "type": "Crime",
        "year": "1999"
      },
      {
        "name": "La vita è bella",
        "score": 8.6,
        "ranking": 27,
        "type": "Comedy",
        "year": "1997"
      },
      {
        "name": "Se7en",
        "score": 8.6,
        "ranking": 28,
        "type": "Crime",
        "year": "1995"
      },
      {
        "name": "The Silence of the Lambs",
        "score": 8.6,
        "ranking": 29,
        "type": "Crime",
        "year": "1991"
      },
      {
        "name": "Star Wars",
        "score": 8.6,
        "ranking": 30,
        "type": "Action",
        "year": "1977"
      },
      {
        "name": "Shichinin no samurai",
        "score": 8.6,
        "ranking": 31,
        "type": "Action",
        "year": "1954"
      },
      {
        "name": "It's a Wonderful Life",
        "score": 8.6,
        "ranking": 32,
        "type": "Drama",
        "year": "1946"
      },
      {
        "name": "Joker",
        "score": 8.5,
        "ranking": 33,
        "type": "Crime",
        "year": "2019"
      },
      {
        "name": "Whiplash",
        "score": 8.5,
        "ranking": 34,
        "type": "Drama",
        "year": "2014"
      },
      {
        "name": "The Intouchables",
        "score": 8.5,
        "ranking": 35,
        "type": "Biography",
        "year": "2011"
      },
      {
        "name": "The Prestige",
        "score": 8.5,
        "ranking": 36,
        "type": "Drama",
        "year": "2006"
      },
      {
        "name": "The Departed",
        "score": 8.5,
        "ranking": 37,
        "type": "Crime",
        "year": "2006"
      },
      {
        "name": "The Pianist",
        "score": 8.5,
        "ranking": 38,
        "type": "Biography",
        "year": "2002"
      },
      {
        "name": "Gladiator",
        "score": 8.5,
        "ranking": 39,
        "type": "Action",
        "year": "2000"
      },
      {
        "name": "American History X",
        "score": 8.5,
        "ranking": 40,
        "type": "Drama",
        "year": "1998"
      },
      {
        "name": "The Usual Suspects",
        "score": 8.5,
        "ranking": 41,
        "type": "Crime",
        "year": "1995"
      },
      {
        "name": "Léon",
        "score": 8.5,
        "ranking": 42,
        "type": "Action",
        "year": "1994"
      },
      {
        "name": "The Lion King",
        "score": 8.5,
        "ranking": 43,
        "type": "Animation",
        "year": "1994"
      },
      {
        "name": "Terminator 2: Judgment Day",
        "score": 8.5,
        "ranking": 44,
        "type": "Action",
        "year": "1991"
      },
      {
        "name": "Nuovo Cinema Paradiso",
        "score": 8.5,
        "ranking": 45,
        "type": "Drama",
        "year": "1988"
      },
      {
        "name": "Hotaru no haka",
        "score": 8.5,
        "ranking": 46,
        "type": "Animation",
        "year": "1988"
      },
      {
        "name": "Back to the Future",
        "score": 8.5,
        "ranking": 47,
        "type": "Adventure",
        "year": "1985"
      },
      {
        "name": "Anand",
        "score": 8.5,
        "ranking": 48,
        "type": "Drama",
        "year": "1971"
      },
      {
        "name": "Once Upon a Time in the West",
        "score": 8.5,
        "ranking": 49,
        "type": "Western",
        "year": "1968"
      },
      {
        "name": "Psycho",
        "score": 8.5,
        "ranking": 50,
        "type": "Horror",
        "year": "1960"
      },
      {
        "name": "Casablanca",
        "score": 8.5,
        "ranking": 51,
        "type": "Drama",
        "year": "1942"
      },
      {
        "name": "Modern Times",
        "score": 8.5,
        "ranking": 52,
        "type": "Comedy",
        "year": "1936"
      },
      {
        "name": "City Lights",
        "score": 8.5,
        "ranking": 53,
        "type": "Comedy",
        "year": "1931"
      },
      {
        "name": "Capharnaüm",
        "score": 8.4,
        "ranking": 54,
        "type": "Drama",
        "year": "2018"
      },
      {
        "name": "Kimi no na wa.",
        "score": 8.4,
        "ranking": 55,
        "type": "Animation",
        "year": "2016"
      },
      {
        "name": "Dangal",
        "score": 8.4,
        "ranking": 56,
        "type": "Action",
        "year": "2016"
      },
      {
        "name": "Spider-Man: Into the Spider-Verse",
        "score": 8.4,
        "ranking": 57,
        "type": "Animation",
        "year": "2018"
      },
      {
        "name": "Avengers: Endgame",
        "score": 8.4,
        "ranking": 58,
        "type": "Action",
        "year": "2019"
      },
      {
        "name": "Avengers: Infinity War",
        "score": 8.4,
        "ranking": 59,
        "type": "Action",
        "year": "2018"
      },
      {
        "name": "Coco",
        "score": 8.4,
        "ranking": 60,
        "type": "Animation",
        "year": "I) ("
      },
      {
        "name": "Django Unchained",
        "score": 8.4,
        "ranking": 61,
        "type": "Drama",
        "year": "2012"
      },
      {
        "name": "The Dark Knight Rises",
        "score": 8.4,
        "ranking": 62,
        "type": "Action",
        "year": "2012"
      },
      {
        "name": "3 Idiots",
        "score": 8.4,
        "ranking": 63,
        "type": "Comedy",
        "year": "2009"
      },
      {
        "name": "Taare Zameen Par",
        "score": 8.4,
        "ranking": 64,
        "type": "Drama",
        "year": "2007"
      },
      {
        "name": "WALL·E",
        "score": 8.4,
        "ranking": 65,
        "type": "Animation",
        "year": "2008"
      },
      {
        "name": "The Lives of Others",
        "score": 8.4,
        "ranking": 66,
        "type": "Drama",
        "year": "2006"
      },
      {
        "name": "Oldeuboi",
        "score": 8.4,
        "ranking": 67,
        "type": "Action",
        "year": "2003"
      },
      {
        "name": "Memento",
        "score": 8.4,
        "ranking": 68,
        "type": "Mystery",
        "year": "2000"
      },
      {
        "name": "Mononoke-hime",
        "score": 8.4,
        "ranking": 69,
        "type": "Animation",
        "year": "1997"
      },
      {
        "name": "Once Upon a Time in America",
        "score": 8.4,
        "ranking": 70,
        "type": "Crime",
        "year": "1984"
      },
      {
        "name": "Raiders of the Lost Ark",
        "score": 8.4,
        "ranking": 71,
        "type": "Action",
        "year": "1981"
      },
      {
        "name": "The Shining",
        "score": 8.4,
        "ranking": 72,
        "type": "Drama",
        "year": "1980"
      },
      {
        "name": "Apocalypse Now",
        "score": 8.4,
        "ranking": 73,
        "type": "Drama",
        "year": "1979"
      },
      {
        "name": "Alien",
        "score": 8.4,
        "ranking": 74,
        "type": "Horror",
        "year": "1979"
      },
      {
        "name": "Tengoku to jigoku",
        "score": 8.4,
        "ranking": 75,
        "type": "Crime",
        "year": "1963"
      },
      {
        "name": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "score": 8.4,
        "ranking": 76,
        "type": "Comedy",
        "year": "1964"
      },
      {
        "name": "Witness for the Prosecution",
        "score": 8.4,
        "ranking": 77,
        "type": "Crime",
        "year": "1957"
      },
      {
        "name": "Paths of Glory",
        "score": 8.4,
        "ranking": 78,
        "type": "Drama",
        "year": "1957"
      },
      {
        "name": "Rear Window",
        "score": 8.4,
        "ranking": 79,
        "type": "Mystery",
        "year": "1954"
      },
      {
        "name": "Sunset Blvd.",
        "score": 8.4,
        "ranking": 80,
        "type": "Drama",
        "year": "1950"
      },
      {
        "name": "The Great Dictator",
        "score": 8.4,
        "ranking": 81,
        "type": "Comedy",
        "year": "1940"
      },
      {
        "name": "1917",
        "score": 8.3,
        "ranking": 82,
        "type": "Drama",
        "year": "2019"
      },
      {
        "name": "Andhadhun",
        "score": 8.3,
        "ranking": 83,
        "type": "Crime",
        "year": "2018"
      },
      {
        "name": "Jagten",
        "score": 8.3,
        "ranking": 84,
        "type": "Drama",
        "year": "2012"
      },
      {
        "name": "Jodaeiye Nader az Simin",
        "score": 8.3,
        "ranking": 85,
        "type": "Drama",
        "year": "2011"
      },
      {
        "name": "Incendies",
        "score": 8.3,
        "ranking": 86,
        "type": "Drama",
        "year": "2010"
      },
      {
        "name": "Babam ve Oglum",
        "score": 8.3,
        "ranking": 87,
        "type": "Drama",
        "year": "2005"
      },
      {
        "name": "Toy Story 3",
        "score": 8.3,
        "ranking": 88,
        "type": "Animation",
        "year": "2010"
      },
      {
        "name": "Inglourious Basterds",
        "score": 8.3,
        "ranking": 89,
        "type": "Adventure",
        "year": "2009"
      },
      {
        "name": "Eternal Sunshine of the Spotless Mind",
        "score": 8.3,
        "ranking": 90,
        "type": "Drama",
        "year": "2004"
      },
      {
        "name": "Amélie",
        "score": 8.3,
        "ranking": 91,
        "type": "Comedy",
        "year": "2001"
      },
      {
        "name": "Snatch",
        "score": 8.3,
        "ranking": 92,
        "type": "Comedy",
        "year": "2000"
      },
      {
        "name": "Requiem for a Dream",
        "score": 8.3,
        "ranking": 93,
        "type": "Drama",
        "year": "2000"
      },
      {
        "name": "American Beauty",
        "score": 8.3,
        "ranking": 94,
        "type": "Drama",
        "year": "1999"
      },
      {
        "name": "Good Will Hunting",
        "score": 8.3,
        "ranking": 95,
        "type": "Drama",
        "year": "1997"
      },
      {
        "name": "Bacheha-Ye aseman",
        "score": 8.3,
        "ranking": 96,
        "type": "Drama",
        "year": "1997"
      },
      {
        "name": "Toy Story",
        "score": 8.3,
        "ranking": 97,
        "type": "Animation",
        "year": "1995"
      },
      {
        "name": "Braveheart",
        "score": 8.3,
        "ranking": 98,
        "type": "Biography",
        "year": "1995"
      },
      {
        "name": "Reservoir Dogs",
        "score": 8.3,
        "ranking": 99,
        "type": "Crime",
        "year": "1992"
      },
      {
        "name": "Full Metal Jacket",
        "score": 8.3,
        "ranking": 100,
        "type": "Drama",
        "year": "1987"
      },
      {
        "name": "Idi i smotri",
        "score": 8.3,
        "ranking": 101,
        "type": "Drama",
        "year": "1985"
      },
      {
        "name": "Aliens",
        "score": 8.3,
        "ranking": 102,
        "type": "Action",
        "year": "1986"
      },
      {
        "name": "Amadeus",
        "score": 8.3,
        "ranking": 103,
        "type": "Biography",
        "year": "1984"
      },
      {
        "name": "Scarface",
        "score": 8.3,
        "ranking": 104,
        "type": "Crime",
        "year": "1983"
      },
      {
        "name": "Star Wars: Episode VI - Return of the Jedi",
        "score": 8.3,
        "ranking": 105,
        "type": "Action",
        "year": "1983"
      },
      {
        "name": "Das Boot",
        "score": 8.3,
        "ranking": 106,
        "type": "Adventure",
        "year": "1981"
      },
      {
        "name": "Taxi Driver",
        "score": 8.3,
        "ranking": 107,
        "type": "Crime",
        "year": "1976"
      },
      {
        "name": "The Sting",
        "score": 8.3,
        "ranking": 108,
        "type": "Comedy",
        "year": "1973"
      },
      {
        "name": "A Clockwork Orange",
        "score": 8.3,
        "ranking": 109,
        "type": "Crime",
        "year": "1971"
      },
      {
        "name": "2001: A Space Odyssey",
        "score": 8.3,
        "ranking": 110,
        "type": "Adventure",
        "year": "1968"
      },
      {
        "name": "Per qualche dollaro in più",
        "score": 8.3,
        "ranking": 111,
        "type": "Western",
        "year": "1965"
      },
      {
        "name": "Lawrence of Arabia",
        "score": 8.3,
        "ranking": 112,
        "type": "Adventure",
        "year": "1962"
      },
      {
        "name": "The Apartment",
        "score": 8.3,
        "ranking": 113,
        "type": "Comedy",
        "year": "1960"
      },
      {
        "name": "North by Northwest",
        "score": 8.3,
        "ranking": 114,
        "type": "Adventure",
        "year": "1959"
      },
      {
        "name": "Vertigo",
        "score": 8.3,
        "ranking": 115,
        "type": "Mystery",
        "year": "1958"
      },
      {
        "name": "Singin' in the Rain",
        "score": 8.3,
        "ranking": 116,
        "type": "Comedy",
        "year": "1952"
      },
      {
        "name": "Ikiru",
        "score": 8.3,
        "ranking": 117,
        "type": "Drama",
        "year": "1952"
      },
      {
        "name": "Ladri di biciclette",
        "score": 8.3,
        "ranking": 118,
        "type": "Drama",
        "year": "1948"
      },
      {
        "name": "Double Indemnity",
        "score": 8.3,
        "ranking": 119,
        "type": "Crime",
        "year": "1944"
      },
      {
        "name": "Citizen Kane",
        "score": 8.3,
        "ranking": 120,
        "type": "Drama",
        "year": "1941"
      },
      {
        "name": "M - Eine Stadt sucht einen Mörder",
        "score": 8.3,
        "ranking": 121,
        "type": "Crime",
        "year": "1931"
      },
      {
        "name": "Metropolis",
        "score": 8.3,
        "ranking": 122,
        "type": "Drama",
        "year": "1927"
      },
      {
        "name": "The Kid",
        "score": 8.3,
        "ranking": 123,
        "type": "Comedy",
        "year": "1921"
      },
      {
        "name": "Green Book",
        "score": 8.2,
        "ranking": 124,
        "type": "Biography",
        "year": "2018"
      },
      {
        "name": "Three Billboards Outside Ebbing, Missouri",
        "score": 8.2,
        "ranking": 125,
        "type": "Comedy",
        "year": "2017"
      },
      {
        "name": "Klaus",
        "score": 8.2,
        "ranking": 126,
        "type": "Animation",
        "year": "2019"
      },
      {
        "name": "Drishyam",
        "score": 8.2,
        "ranking": 127,
        "type": "Crime",
        "year": "2015"
      },
      {
        "name": "Gangs of Wasseypur",
        "score": 8.2,
        "ranking": 128,
        "type": "Action",
        "year": "2012"
      },
      {
        "name": "El secreto de sus ojos",
        "score": 8.2,
        "ranking": 129,
        "type": "Drama",
        "year": "2009"
      },
      {
        "name": "Warrior",
        "score": 8.2,
        "ranking": 130,
        "type": "Action",
        "year": "2011"
      },
      {
        "name": "Shutter Island",
        "score": 8.2,
        "ranking": 131,
        "type": "Mystery",
        "year": "2010"
      },
      {
        "name": "Up",
        "score": 8.2,
        "ranking": 132,
        "type": "Animation",
        "year": "2009"
      },
      {
        "name": "The Wolf of Wall Street",
        "score": 8.2,
        "ranking": 133,
        "type": "Biography",
        "year": "2013"
      },
      {
        "name": "There Will Be Blood",
        "score": 8.2,
        "ranking": 134,
        "type": "Drama",
        "year": "2007"
      },
      {
        "name": "Pan's Labyrinth",
        "score": 8.2,
        "ranking": 135,
        "type": "Drama",
        "year": "2006"
      },
      {
        "name": "V for Vendetta",
        "score": 8.2,
        "ranking": 136,
        "type": "Action",
        "year": "2005"
      },
      {
        "name": "Rang De Basanti",
        "score": 8.2,
        "ranking": 137,
        "type": "Comedy",
        "year": "2006"
      },
      {
        "name": "Batman Begins",
        "score": 8.2,
        "ranking": 138,
        "type": "Action",
        "year": "2005"
      },
      {
        "name": "Swades: We, the People",
        "score": 8.2,
        "ranking": 139,
        "type": "Drama",
        "year": "2004"
      },
      {
        "name": "Der Untergang",
        "score": 8.2,
        "ranking": 140,
        "type": "Biography",
        "year": "2004"
      },
      {
        "name": "Hauru no ugoku shiro",
        "score": 8.2,
        "ranking": 141,
        "type": "Animation",
        "year": "2004"
      },
      {
        "name": "A Beautiful Mind",
        "score": 8.2,
        "ranking": 142,
        "type": "Biography",
        "year": "2001"
      },
      {
        "name": "Lock, Stock and Two Smoking Barrels",
        "score": 8.2,
        "ranking": 143,
        "type": "Action",
        "year": "1998"
      },
      {
        "name": "L.A. Confidential",
        "score": 8.2,
        "ranking": 144,
        "type": "Crime",
        "year": "1997"
      },
      {
        "name": "Eskiya",
        "score": 8.2,
        "ranking": 145,
        "type": "Crime",
        "year": "1996"
      },
      {
        "name": "Heat",
        "score": 8.2,
        "ranking": 146,
        "type": "Crime",
        "year": "1995"
      },
      {
        "name": "Casino",
        "score": 8.2,
        "ranking": 147,
        "type": "Crime",
        "year": "1995"
      },
      {
        "name": "Unforgiven",
        "score": 8.2,
        "ranking": 148,
        "type": "Drama",
        "year": "1992"
      },
      {
        "name": "Indiana Jones and the Last Crusade",
        "score": 8.2,
        "ranking": 149,
        "type": "Action",
        "year": "1989"
      },
      {
        "name": "Tonari no Totoro",
        "score": 8.2,
        "ranking": 150,
        "type": "Animation",
        "year": "1988"
      },
      {
        "name": "Die Hard",
        "score": 8.2,
        "ranking": 151,
        "type": "Action",
        "year": "1988"
      },
      {
        "name": "Ran",
        "score": 8.2,
        "ranking": 152,
        "type": "Action",
        "year": "1985"
      },
      {
        "name": "Raging Bull",
        "score": 8.2,
        "ranking": 153,
        "type": "Biography",
        "year": "1980"
      },
      {
        "name": "Stalker",
        "score": 8.2,
        "ranking": 154,
        "type": "Drama",
        "year": "1979"
      },
      {
        "name": "Monty Python and the Holy Grail",
        "score": 8.2,
        "ranking": 155,
        "type": "Adventure",
        "year": "1975"
      },
      {
        "name": "Chinatown",
        "score": 8.2,
        "ranking": 156,
        "type": "Drama",
        "year": "1974"
      },
      {
        "name": "The Great Escape",
        "score": 8.2,
        "ranking": 157,
        "type": "Adventure",
        "year": "1963"
      },
      {
        "name": "To Kill a Mockingbird",
        "score": 8.2,
        "ranking": 158,
        "type": "Crime",
        "year": "1962"
      },
      {
        "name": "Yôjinbô",
        "score": 8.2,
        "ranking": 159,
        "type": "Action",
        "year": "1961"
      },
      {
        "name": "Judgment at Nuremberg",
        "score": 8.2,
        "ranking": 160,
        "type": "Drama",
        "year": "1961"
      },
      {
        "name": "Some Like It Hot",
        "score": 8.2,
        "ranking": 161,
        "type": "Comedy",
        "year": "1959"
      },
      {
        "name": "Smultronstället",
        "score": 8.2,
        "ranking": 162,
        "type": "Drama",
        "year": "1957"
      },
      {
        "name": "Det sjunde inseglet",
        "score": 8.2,
        "ranking": 163,
        "type": "Drama",
        "year": "1957"
      },
      {
        "name": "Du rififi chez les hommes",
        "score": 8.2,
        "ranking": 164,
        "type": "Crime",
        "year": "1955"
      },
      {
        "name": "Dial M for Murder",
        "score": 8.2,
        "ranking": 165,
        "type": "Crime",
        "year": "1954"
      },
      {
        "name": "Tôkyô monogatari",
        "score": 8.2,
        "ranking": 166,
        "type": "Drama",
        "year": "1953"
      },
      {
        "name": "Rashômon",
        "score": 8.2,
        "ranking": 167,
        "type": "Crime",
        "year": "1950"
      },
      {
        "name": "All About Eve",
        "score": 8.2,
        "ranking": 168,
        "type": "Drama",
        "year": "1950"
      },
      {
        "name": "The Treasure of the Sierra Madre",
        "score": 8.2,
        "ranking": 169,
        "type": "Adventure",
        "year": "1948"
      },
      {
        "name": "To Be or Not to Be",
        "score": 8.2,
        "ranking": 170,
        "type": "Comedy",
        "year": "1942"
      },
      {
        "name": "The Gold Rush",
        "score": 8.2,
        "ranking": 171,
        "type": "Adventure",
        "year": "1925"
      },
      {
        "name": "Sherlock Jr.",
        "score": 8.2,
        "ranking": 172,
        "type": "Action",
        "year": "1924"
      },
      {
        "name": "Portrait de la jeune fille en feu",
        "score": 8.1,
        "ranking": 173,
        "type": "Drama",
        "year": "2019"
      },
      {
        "name": "Contratiempo",
        "score": 8.1,
        "ranking": 174,
        "type": "Crime",
        "year": "2016"
      },
      {
        "name": "Ah-ga-ssi",
        "score": 8.1,
        "ranking": 175,
        "type": "Drama",
        "year": "2016"
      },
      {
        "name": "Logan",
        "score": 8.1,
        "ranking": 176,
        "type": "Action",
        "year": "2017"
      },
      {
        "name": "Room",
        "score": 8.1,
        "ranking": 177,
        "type": "Drama",
        "year": "I) ("
      },
      {
        "name": "Relatos salvajes",
        "score": 8.1,
        "ranking": 178,
        "type": "Comedy",
        "year": "2014"
      },
      {
        "name": "The Grand Budapest Hotel",
        "score": 8.1,
        "ranking": 179,
        "type": "Adventure",
        "year": "2014"
      },
      {
        "name": "Gone Girl",
        "score": 8.1,
        "ranking": 180,
        "type": "Drama",
        "year": "2014"
      },
      {
        "name": "Hacksaw Ridge",
        "score": 8.1,
        "ranking": 181,
        "type": "Biography",
        "year": "2016"
      },
      {
        "name": "Inside Out",
        "score": 8.1,
        "ranking": 182,
        "type": "Animation",
        "year": "I) ("
      },
      {
        "name": "12 Years a Slave",
        "score": 8.1,
        "ranking": 183,
        "type": "Biography",
        "year": "2013"
      },
      {
        "name": "Rush",
        "score": 8.1,
        "ranking": 184,
        "type": "Action",
        "year": "I) ("
      },
      {
        "name": "Ford v Ferrari",
        "score": 8.1,
        "ranking": 185,
        "type": "Action",
        "year": "2019"
      },
      {
        "name": "Spotlight",
        "score": 8.1,
        "ranking": 186,
        "type": "Biography",
        "year": "I) ("
      },
      {
        "name": "Prisoners",
        "score": 8.1,
        "ranking": 187,
        "type": "Crime",
        "year": "2013"
      },
      {
        "name": "Mad Max: Fury Road",
        "score": 8.1,
        "ranking": 188,
        "type": "Action",
        "year": "2015"
      },
      {
        "name": "Gran Torino",
        "score": 8.1,
        "ranking": 189,
        "type": "Drama",
        "year": "2008"
      },
      {
        "name": "Harry Potter and the Deathly Hallows: Part 2",
        "score": 8.1,
        "ranking": 190,
        "type": "Adventure",
        "year": "2011"
      },
      {
        "name": "Hachi: A Dog's Tale",
        "score": 8.1,
        "ranking": 191,
        "type": "Drama",
        "year": "2009"
      },
      {
        "name": "Mary and Max",
        "score": 8.1,
        "ranking": 192,
        "type": "Animation",
        "year": "2009"
      },
      {
        "name": "How to Train Your Dragon",
        "score": 8.1,
        "ranking": 193,
        "type": "Animation",
        "year": "2010"
      },
      {
        "name": "Into the Wild",
        "score": 8.1,
        "ranking": 194,
        "type": "Adventure",
        "year": "2007"
      },
      {
        "name": "No Country for Old Men",
        "score": 8.1,
        "ranking": 195,
        "type": "Crime",
        "year": "2007"
      },
      {
        "name": "Million Dollar Baby",
        "score": 8.1,
        "ranking": 196,
        "type": "Drama",
        "year": "2004"
      },
      {
        "name": "Hotel Rwanda",
        "score": 8.1,
        "ranking": 197,
        "type": "Biography",
        "year": "2004"
      },
      {
        "name": "Salinui chueok",
        "score": 8.1,
        "ranking": 198,
        "type": "Action",
        "year": "2003"
      },
      {
        "name": "Kill Bill: Vol. 1",
        "score": 8.1,
        "ranking": 199,
        "type": "Action",
        "year": "2003"
      },
      {
        "name": "Finding Nemo",
        "score": 8.1,
        "ranking": 200,
        "type": "Animation",
        "year": "2003"
      },
      {
        "name": "Catch Me If You Can",
        "score": 8.1,
        "ranking": 201,
        "type": "Biography",
        "year": "2002"
      },
      {
        "name": "Amores perros",
        "score": 8.1,
        "ranking": 202,
        "type": "Drama",
        "year": "2000"
      },
      {
        "name": "Lagaan: Once Upon a Time in India",
        "score": 8.1,
        "ranking": 203,
        "type": "Adventure",
        "year": "2001"
      },
      {
        "name": "The Sixth Sense",
        "score": 8.1,
        "ranking": 204,
        "type": "Drama",
        "year": "1999"
      },
      {
        "name": "The Truman Show",
        "score": 8.1,
        "ranking": 205,
        "type": "Comedy",
        "year": "1998"
      },
      {
        "name": "The Big Lebowski",
        "score": 8.1,
        "ranking": 206,
        "type": "Comedy",
        "year": "1998"
      },
      {
        "name": "Fa yeung nin wah",
        "score": 8.1,
        "ranking": 207,
        "type": "Drama",
        "year": "2000"
      },
      {
        "name": "Trainspotting",
        "score": 8.1,
        "ranking": 208,
        "type": "Drama",
        "year": "1996"
      },
      {
        "name": "Fargo",
        "score": 8.1,
        "ranking": 209,
        "type": "Crime",
        "year": "1996"
      },
      {
        "name": "La haine",
        "score": 8.1,
        "ranking": 210,
        "type": "Crime",
        "year": "1995"
      },
      {
        "name": "Before Sunrise",
        "score": 8.1,
        "ranking": 211,
        "type": "Drama",
        "year": "1995"
      },
      {
        "name": "Trois couleurs: Rouge",
        "score": 8.1,
        "ranking": 212,
        "type": "Drama",
        "year": "1994"
      },
      {
        "name": "Jurassic Park",
        "score": 8.1,
        "ranking": 213,
        "type": "Action",
        "year": "1993"
      },
      {
        "name": "In the Name of the Father",
        "score": 8.1,
        "ranking": 214,
        "type": "Biography",
        "year": "1993"
      },
      {
        "name": "Dead Poets Society",
        "score": 8.1,
        "ranking": 215,
        "type": "Comedy",
        "year": "1989"
      },
      {
        "name": "The Princess Bride",
        "score": 8.1,
        "ranking": 216,
        "type": "Adventure",
        "year": "1987"
      },
      {
        "name": "Stand by Me",
        "score": 8.1,
        "ranking": 217,
        "type": "Adventure",
        "year": "1986"
      },
      {
        "name": "Platoon",
        "score": 8.1,
        "ranking": 218,
        "type": "Drama",
        "year": "1986"
      },
      {
        "name": "Paris, Texas",
        "score": 8.1,
        "ranking": 219,
        "type": "Drama",
        "year": "1984"
      },
      {
        "name": "Kaze no tani no Naushika",
        "score": 8.1,
        "ranking": 220,
        "type": "Animation",
        "year": "1984"
      },
      {
        "name": "The Thing",
        "score": 8.1,
        "ranking": 221,
        "type": "Horror",
        "year": "1982"
      },
      {
        "name": "Blade Runner",
        "score": 8.1,
        "ranking": 222,
        "type": "Action",
        "year": "1982"
      },
      {
        "name": "The Elephant Man",
        "score": 8.1,
        "ranking": 223,
        "type": "Biography",
        "year": "1980"
      },
      {
        "name": "Life of Brian",
        "score": 8.1,
        "ranking": 224,
        "type": "Comedy",
        "year": "1979"
      },
      {
        "name": "The Deer Hunter",
        "score": 8.1,
        "ranking": 225,
        "type": "Drama",
        "year": "1978"
      },
      {
        "name": "Rocky",
        "score": 8.1,
        "ranking": 226,
        "type": "Drama",
        "year": "1976"
      },
      {
        "name": "Network",
        "score": 8.1,
        "ranking": 227,
        "type": "Drama",
        "year": "1976"
      },
      {
        "name": "Barry Lyndon",
        "score": 8.1,
        "ranking": 228,
        "type": "Adventure",
        "year": "1975"
      },
      {
        "name": "Cool Hand Luke",
        "score": 8.1,
        "ranking": 229,
        "type": "Crime",
        "year": "1967"
      },
      {
        "name": "Persona",
        "score": 8.1,
        "ranking": 230,
        "type": "Drama",
        "year": "1966"
      },
      {
        "name": "Andrei Rublev",
        "score": 8.1,
        "ranking": 231,
        "type": "Biography",
        "year": "1966"
      },
      {
        "name": "La battaglia di Algeri",
        "score": 8.1,
        "ranking": 232,
        "type": "Drama",
        "year": "1966"
      },
      {
        "name": "Les quatre cents coups",
        "score": 8.1,
        "ranking": 233,
        "type": "Crime",
        "year": "1959"
      },
      {
        "name": "Ben-Hur",
        "score": 8.1,
        "ranking": 234,
        "type": "Adventure",
        "year": "1959"
      },
      {
        "name": "Kumonosu-jô",
        "score": 8.1,
        "ranking": 235,
        "type": "Drama",
        "year": "1957"
      },
      {
        "name": "The Bridge on the River Kwai",
        "score": 8.1,
        "ranking": 236,
        "type": "Adventure",
        "year": "1957"
      },
      {
        "name": "On the Waterfront",
        "score": 8.1,
        "ranking": 237,
        "type": "Crime",
        "year": "1954"
      },
      {
        "name": "Le salaire de la peur",
        "score": 8.1,
        "ranking": 238,
        "type": "Adventure",
        "year": "1953"
      },
      {
        "name": "The Third Man",
        "score": 8.1,
        "ranking": 239,
        "type": "Film-Noir",
        "year": "1949"
      },
      {
        "name": "Rebecca",
        "score": 8.1,
        "ranking": 240,
        "type": "Drama",
        "year": "1940"
      },
      {
        "name": "Mr. Smith Goes to Washington",
        "score": 8.1,
        "ranking": 241,
        "type": "Comedy",
        "year": "1939"
      },
      {
        "name": "Gone with the Wind",
        "score": 8.1,
        "ranking": 242,
        "type": "Drama",
        "year": "1939"
      },
      {
        "name": "It Happened One Night",
        "score": 8.1,
        "ranking": 243,
        "type": "Comedy",
        "year": "1934"
      },
      {
        "name": "La passion de Jeanne d'Arc",
        "score": 8.1,
        "ranking": 244,
        "type": "Biography",
        "year": "1928"
      },
      {
        "name": "The Circus",
        "score": 8.1,
        "ranking": 245,
        "type": "Comedy",
        "year": "1928"
      },
      {
        "name": "The General",
        "score": 8.1,
        "ranking": 246,
        "type": "Action",
        "year": "1926"
      },
      {
        "name": "The Help",
        "score": 8,
        "ranking": 247,
        "type": "Drama",
        "year": "2011"
      },
      {
        "name": "Before Sunset",
        "score": 8,
        "ranking": 248,
        "type": "Drama",
        "year": "2004"
      },
      {
        "name": "Monsters, Inc.",
        "score": 8,
        "ranking": 249,
        "type": "Animation",
        "year": "2001"
      },
      {
        "name": "The Terminator",
        "score": 8,
        "ranking": 250,
        "type": "Action",
        "year": "1984"
      }
    ]
    return d
}
