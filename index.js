// Ensure content is loaded
document.addEventListener('DOMContentLoaded', function() {

    let int = 0;
    // Listen for click
    document.querySelector('#troll_button').addEventListener('click', function() {

        if (int == 0)
        {
            document.getElementById("goofyimage").src = "media/cursed_emoji.jpg";
            document.getElementById("troll").innerHTML = "Whoops! That's the wrong image again!";
        }

        if (int == 1)
        {
            document.getElementById("goofyimage").src = "media/jason.jpg";
            document.getElementById("troll").innerHTML = "Nope, not that one!";
        }

        if (int == 2)
        {
            document.getElementById("goofyimage").src = "media/me.jpg";
            document.getElementById("troll").innerHTML = "There we go!";
        }

        int++;

    });
});