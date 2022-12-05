function changeimage (artisttitle, artistdesc, artistlink, artistbackground)
{
    document.getElementById("artisttitle").innerText=artisttitle;
    document.getElementById("artistdesc").innerText=artistdesc;
    document.getElementById("artistlink").href=artistlink;
    document.getElementById("artistbackground").style.backgroundImage='url("' + artistbackground + '")';

}