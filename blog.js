var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
xhr.onload = function () {
    var responseJSON = JSON.parse(xhr.response);

    for (let i = 0; i < responseJSON.length; i++) {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let userId = document.createTextNode(" userId:"+responseJSON[i].userId);
        p1.append(userId);
        let p2 = document.createElement("p");
        let id = document.createTextNode(" id:"+responseJSON[i].id);
        p2.append(id);
        let p3 = document.createElement("p");
        let title = document.createTextNode(" title:"+responseJSON[i].title);
        p3.append(title);
        let p4 = document.createElement("p");
        let body = document.createTextNode(" body:"+responseJSON[i].body);
        p4.append(body);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        document.getElementById("div").appendChild(div);
    }
}
xhr.send();
