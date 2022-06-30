console.log("marvel.js linked")
// "marvel-celebrates-10-dates.jpg",
var files=[
    { name: 'Iron Man', date:'	May 2, 2008',image:"marvel-cinematic-universe-iron-man-movie-poster-202x300.jpg"},
    { name: 'The Incredible Hulk', date:'	June 13, 2008',image:"marvel-cinematic-universe-the-incredible-hulk-movie-poster-203x300.jpg"},
    { name:'Iron Man 2',date:'May 7,2010',image:"marvel-cinematic-universe-iron-man-2-movie-poster-204x300.jpg"},
    { name: 'Thor', date:'	May 6, 2011',image:"marvel-cinematic-universe-thor-movie-poster-203x300.jpg"},
    { name: 'Captain America: The First Avenger', date:'July 22, 2011',image:"marvel-cinematic-universe-captain-america-the-first-avenger-movie-poster-203x300.jpeg"},
    { name: 'The Avengers', date: 'May 4, 2012',image:"marvel-cinematic-universe-the-avengers-movie-poster-203x300.jpg"},
    { name: 'Iron Man 3', date:'May 3, 2013',image:"marvel-cinematic-universe-iron-man-3-movie-poster-203x300.jpg"},
    { name: 'Thor: The Dark World', date:'November 8, 2013',image:"marvel-cinematic-universe-thor-dark-world-movie-poster-203x300.jpg"},
    { name: 'Captain America: The Winter Soldier', date:'April 4, 2014',image:"marvel-cinematic-universe-captain-america-winter-soldier-movie-poster-203x300.jpg"},
    { name: 'Guardians of the Galaxy', date:'August 1, 2014',image:"marvel-cinematic-universe-guardians-of-the-galaxy-movie-poster-203x300.jpg"},
    { name: 'Avengers: Age of Ultron', date:'May 1, 2015',image:"marvel-cinematic-universe-the-avengers-age-of-ultron-movie-poster-203x300.jpg"},
    { name: 'Ant-Man', date: 'July 17, 2015',image:"marvel-cinematic-universe-ant-man-movie-poster-203x300.jpg"},
    { name: 'Captain America: Civil War', date:'May 6, 2016',image:"marvel-cinematic-universe-captain-america-civil-war-movie-poster-202x300.jpg"},
    { name: 'Doctor Strange', date:'November 4, 2016',image:"marvel-cinematic-universe-doctor-strange-movie-poster-203x300.jpg"},
    { name: 'Guardians of the Galaxy Vol. 2', date:'May 5, 2017',image:"marvel-cinematic-universe-guardians-of-the-galaxy-2-movie-poster-203x300.jpg"},
    { name: 'Spider-Man: Homecoming', date:'July 7, 2017',image:"marvel-cinematic-universe-spiderman-homecoming-movie-poster-203x300.jpg"},
    { name: 'Thor: Ragnarok', date:'November 3, 2017',image:"marvel-cinematic-universe-thor-ragnarok-movie-poster-203x300.jpg"},
    { name: 'Black Panther', date:'February 16, 2018',image:"marvel-cinematic-universe-black-panther-movie-poster-202x300.jpg"},
    { name: 'Avengers: Infinity War', date:'April 27, 2018',image:"marvel-cinematic-universe-the-avengers-infinity-war-movie-poster-203x300.jpg"},
    { name: 'Ant-Man and the Wasp', date:'July 6, 2018',image:"marvel-cinematic-universe-ant-man-wasp-movie-poster-1-203x300.jpg"},
    { name: 'Captain Marvel', date:'March 8, 2019',image:"marvel-cinematic-universe-captain-marvel-movie-poster-203x300.jpg"},
    { name: 'Avengers: Endgame', date:'April 26, 2019',image:"marvel-cinematic-universe-the-avengers-endgame-movie-poster-202x300.jpg"},
    { name: 'Spider-Man: Far From Home', date:'July 2, 2019',image:"marvel-cinematic-universe-spiderman-far-from-home-movie-poster-203x300.jpg"},
    { name: 'Black Widow', date:'July 9, 2021',image:"marvel-cinematic-universe-black-widow-movie-poster-202x300.jpg"},
    { name: 'Shang-Chi and the Legend of the Ten Rings', date:'	September 3, 2021',image:"marvel-cinematic-universe-shang-chi-and-the-legend-of-the-ten-rings-movie-poster-203x300.jpg"},
    { name: 'Eternals', date:'	November 5, 2021',image:"marvel-cinematic-universe-eternals-movie-poster-203x300.jpg"},
    { name: 'Spider-Man: No Way Home', date:'December 17, 2021',image:"marvel-cinematic-universe-spiderman-no-way-home-movie-poster-202x300.jpg"},
    { name: 'Doctor Strange in the Multiverse of Madness', date:'May 6, 2022',image:"marvel-cinematic-universe-doctor-strange-in-the-multiverse-of-madness-movie-poster-203x300.jpg"}, 
]


files.forEach(file => {
    console.log(file);
        document.getElementById("container").innerHTML+=`
        <div class="cards">
            <img src="images/${file.image}" alt="poster">
            <div class="description">
            <div class="moviename">${file.name}</div>
                <div class="date">${file.date}</div>
        </div>
        </div>
        `
});