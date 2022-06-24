var ajax = new XMLHttpRequest()

load("[HEADER]", "header.html")
load("[FOOTER]", "footer.html")

function load(mark, html) {
    ajax.open("GET", html, false)
    ajax.onreadystatechange = function() {
        if (ajax.readyState == XMLHttpRequest.DONE) {
            if (ajax.status == 200) {
                document.body.innerHTML = document.body.innerHTML.replace(mark, ajax.responseText)
            }
        }
    }
    ajax.send()
}
