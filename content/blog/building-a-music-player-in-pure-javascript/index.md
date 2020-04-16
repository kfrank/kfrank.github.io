---
title: Building a music player with pure javascript
date: "2015-04-15T22:12:03.284Z"
posttype: blog
---

I will preface this by saying I’m no expert in building javascript web apps from scratch. Most of the work I do using Javascript involves page interactions, working with apis, and prototyping. When my friend Courtney approached me with the idea to do a parody of our friends weekly playlist, This Week’s Playlist, I figured at the very least it would be a great way to exercise some js skills while putting my love of all types of music out there. This Week’s Playlist is a curated weekly playlist of (mostly) new music. Part of our goal for our parody, Next Week’s Playlist (launching on April Fool’s Day, of course), was to also focus on mostly new music, predicting what should be on next week’s This Week’s Playlist.

I decided early on to test myself by only using pure javascript instead of relying on jquery. The first time I decided to not use jquery was on my coding assignment for my job application to Treehouse, where the functionality I wanted to accomplish was so small that adding an extra second of load time just to make five lines of code work seemed superfluous. While I knew there would be significantly more lines of code needed for Next Week’s Playlist, it seemed like a good opportunity to test out building in pure javascript.

##Planning out the functionality

I started by compiling a list of things we wanted the site to do, starting with the bare minimum needed for it to work:

- When a user clicks on a song, play the song
- If a user clicks on a song that is playing, pause the song
- When a song ends, play the next song
- When a user presses the spacebar for the first time, play the first song
- When a user presses the spacebar and a song is playing, pause the song
- When a user presses the spacebar and a song is paused, play the song

We also wanted to add a feature to allow for links to external music services (if the song was available) and decided on a maximum of three: soundcloud, spotify, and rdio (rip, rdio):

- When a user clicks on a links button, toggle the links to external music services

##Starting with interactions

I usually start projects by laying out the interactions. In this case, it’s a spacebar press and when a track gets clicked.

```
// Get all elements with a class of track
var trackList = document.querySelectorAll('.track');

// When the spacebar is pressed
document.addEventListener('keypress', function(key){
if( key.keyCode == 32 ){

}
});

// When .track is clicked
function playPause(){
trackList[i].addEventListener('click', function(e){

});
}

// Applying the function to all .track elements
for ( i=0; i < trackList.length; i++ ) {
playPause();
}
```

##Using track index instead of attributes

Next Week’s Playlist works by getting the value of the audio attribute on a selected track. Since all tracks are meant to be listed in numerical order, I decided to take this a step forward and get the index (+1) of the selected track.

We’ll use a function to find the index of the selected song (either the song that is clicked or the song that is playing):

```
function findIndex(el){
var i=1;
while(el.previousSibling){
el = el.previousSibling;
if(el.nodeType === 1){
i++;
}
}
return i;
}
```

##Adding play and paused classes

Next, I added in the appropriate classes based on my base interactions. (Note that we’re still not introducing sound yet.)

First, we’ll need a function to check for if an element has a class:

```
// A function to check if an element has a class
function hasClass(el, cls) {
return el.className && new RegExp('(\\s|^)' + cls + '(\\s|\$)').test(el.className);
}
```

For a spacebar press, I’ll add a class of playing to the first song if nothing has been played yet, and a class of activated to the playlist so that I can style it a bit.

```
// When the spacebar is pressed
document.addEventListener('keypress', function(key){
if( key.keyCode == 32 ){
// If no songs have been played yet
if (document.querySelectorAll('.playing').length == 0) {
index = 0, // Setting the song index
trackList[index].parentNode.classList.add('playing'),
document.querySelectorAll('.playlist')[0].classList.add('activated');
} else if ( trackList[index].parentNode.classList[1] == 'paused' ) {
// If a user pressed the spacebar when a song is paused, play the song
trackList[index].parentNode.classList.remove('paused');
} else {
// If a user pressed the spacebar when a song is playing, pause the song
trackList[index].parentNode.classList.add('paused');
}
key.preventDefault();
}
});
```

For a song click, we'll add similar classes of activated, playing, and paused:

```
// When .track is clicked
function playPause(){
trackList[i].addEventListener('click', function(e){
// Saves li instead of a
var selected = this.parentNode;
// Finds index of the selected li
index = findIndex(selected);

    // If a song is being played for the first time, add a class to .playlist
    if( !hasClass(document.querySelectorAll('.playlist')[0], 'activated') ){
      document.querySelectorAll('.playlist')[0].classList.add('activated');
    }

    // If selected
    if( hasClass(selected, 'playing') || (document.querySelectorAll('.playing').length !== 0)){
      if (!hasClass(selected, 'playing') && (document.querySelectorAll('.playing').length !== 0)) {
        if (selected.parentNode.hasChildNodes()){
          var children = selected.parentNode.childNodes;
          for (var i = 1; i < children.length; i+=2) {
            children[i].classList.remove('playing','paused');
          }
        };
      }
    }

      e.preventDefault();

      return song.play(),
      selected.classList.add('playing');
      if (!hasClass(selected, 'paused') && song.currentTime > 0) {
        song.pause(),
        selected.classList.add('paused');
      } else {

      }
      !hasClass(selected, 'paused') && song.currentTime > 0 ? (song.pause(), selected.classList.add('paused')) : hasClass(selected, 'paused') && song.currentTime > 0 && selected.classList.remove('paused'); !1;

});
}
```

##Adding in extra features

One of the big requests that Courtney received was the ability to scrub through a track. I use this a lot on Soundcloud and Rdio to see if the track has enough pull to even consider listening all the way through and eventually put on Next Week’s Playlist.

To accomplish this, we need to track the position of the mouse click along one axis in the progress bar.

```
// Get click point
```

From there, we can calculate the percentage and apply it to the track.

```
// Apply it to current audio
```

##Limitations

The way I used javascript requires everything in the html to be in its proper order. Using jquery to grab a sibling by element instead of using javascript to grab a sibling by node index is a lot more forgiving.

```
\$(this).siblings('li').children('.track');

// compared to:

this.parentNode.childNodes[0];
```

##Takeaways

While this was an interesting exercise in creating something using pure javascript, it could be done easier using libraries. It also doesn't take into consideration pulling in tracks from different sources; it's definitely a first iteration. That being said, we shouldn't be automatically turning to JQuery for everything, especially when it could be written as simply and load way faster without a library.
