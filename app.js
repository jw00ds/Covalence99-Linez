var friends = ["Menza", "Thomas", "Jordan", "Cam", "Dave"];

// console.log(
    // touppercase()
    // 99x
    // if num > 1, lines
    // if num === 1, line
    // do it for array items 0-4
)

for (var friendName of friends) {
    console.log(friendName.toUpperCase() + ":");
    var lyricLineCounter = 99;
    var linesVar = "lines"
    while (lyricLineCounter > 0) {
        console.log(lyricLineCounter + " " + linesVar + " of code in the file, " + lyricLineCounter + " " + linesVar + " of code; " + friendName + " strikes one out, clears it all out, " + lyricLineCounter + " " + linesVar + " of code in the file");
        lyricLineCounter = lyricLineCounter - 1; // could also be counter--;
        if (lyricLineCounter === 1) {
            linesVar = "line"
        }
    }
}

// 99 lines of code in the file, 99 lines of code; John strikes one out, clears it all out, 98 lines of code in the file