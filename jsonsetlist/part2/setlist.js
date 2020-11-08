$(document).ready(() => {

    //gets json and stringifies
    $.get("https://trmasse.github.io/comp20/jsonsetlist/setlist.json", function(data) {
        string_list = JSON.stringify(data);
        document.write(string_list);
    })

});
