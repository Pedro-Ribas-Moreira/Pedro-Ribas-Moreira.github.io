document.addEventListener("DOMContentLoaded", (event) => {
  const lyricsDiv = document.querySelector(".lyrics");
  var counter = 99;

  for (var i = counter; i >= 0; i--) {
    const paragraph = document.createElement("p");

    if (i >= 3) {
      paragraph.textContent =
        i +
        " bottles of beer on the wall, " +
        i +
        " bottles of beer. Take one down and pass it around, " +
        (i - 1) +
        " bottles of beer on the wall.";
    } else if (i == 2) {
      paragraph.textContent =
        i +
        " bottles of beer on the wall, " +
        i +
        " bottles of beer. Take one down and pass it around, " +
        (i - 1) +
        " bottle of beer on the wall.";
    } else if (i == 1) {
      paragraph.textContent =
        i +
        " bottle of beer on the wall, " +
        i +
        " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall";
    } else if (i == 0) {
      paragraph.textContent =
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall";
    }
    lyricsDiv.appendChild(paragraph);
  }
});
