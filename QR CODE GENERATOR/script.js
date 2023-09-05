let insert = document.getElementById('insert');
let img = document.getElementById('img');
let button = document.getElementById('button');
let input = false;


button.addEventListener("click", () => {
    if (insert.value != "") {
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + insert.value;
        input = true;
    }
    if (input = true) {
        insert.value = "";
        img.style.display = "block";
    }
})

insert.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("button").click();
    }
});