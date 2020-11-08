$(document).ready(() => {

    //gets json
    $.get("https://trmasse.github.io/comp20/jsonsetlist/setlist.json", function(data) {
        string_list = JSON.stringify(data);
        //output
        data.forEach(song => {
            outstr = "";
            outstr += "<div style=\"border:1px solid red;text-align:center;line-height:10px;\"><h1>" + song.title + "</h1>" +
                      "<h2>" + song.artist + "</h2>" +
                      "<p>";
                      song["genre"].forEach(genre => {
                          outstr += genre + ", ";
                      })
            outstr = outstr.substr(0, outstr.length -2);
            outstr += "</p>" + "<p>" + song["year"] + "</p></div></br>";
            document.writeln(outstr);
        })
    })
});
