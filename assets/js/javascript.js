function changeimage(artisttitle, artistdesc, artistlink, artistbackground) {
    document.getElementById("artisttitle").innerText = artisttitle;
    document.getElementById("artistdesc").innerText = artistdesc;
    document.getElementById("artistlink").href = artistlink;
    document.getElementById("artistbackground").style.backgroundImage = 'url("' + artistbackground + '")';

}

function subscribeSuccess() {
    document.getElementById("subscribetext").classList.add("hide");
    document.getElementById("subscribebtn").classList.add("hide");
    document.getElementById("subscribeoutput").classList.remove("hide");
}

function commentbox() {
    document.getElementById("commentfullname").setAttribute("disabled", "");
    document.getElementById("commentemail").setAttribute("disabled", "");
    document.getElementById("commentbox").setAttribute("disabled", "");
    document.getElementById("commentbtn").setAttribute("disabled", "");
    document.getElementById("commentbtn").innerText = "Comment Sent!";
}


function sendmessage() {
    document.getElementById("userMessage").setAttribute("disabled", "");
    document.getElementById("userEmail").setAttribute("disabled", "");
    document.getElementById("userFullname").setAttribute("disabled", "");
    document.getElementById("messagebtn").setAttribute("disabled", "");
    document.getElementById("messagebtn").innerText = "Message Sent!";
}