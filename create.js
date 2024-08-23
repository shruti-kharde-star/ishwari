var video = {
    title: "video 1",
    duration:"3:45",
    views:10000,
    likes:5000,
    dislikes:2000,
    comments:100
}


let playlistBox = document.getElementById("playlist");

let card = document.createElement("div");
card.className = "card";

let title = document.createElement("h1");
title.textContent = video.title;

let duration = document.createElement("p");
duration.textContent = video.duration;

card.appendChild(title);
card.appendChild(duration);
playlistBox.appendChild(card);
