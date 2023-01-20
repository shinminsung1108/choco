let width = 50
let width_2 = 50
let elem = document.getElementById("myBar");
let elem2 = document.getElementById("myBar_2");

function move() {
    document.getElementById('result').scrollIntoView();
    if (width >= 100) {
        width -= 1
        width_2 += 1
        alert('맥스값은 100%입니다')
    } else {
        width += 1
        width_2 -= 1
        elem.style.width = width + '%';
        elem2.style.width = width_2 + '%';
        document.getElementById("label").innerHTML = "초코 : " + width * 1 + '%';
        document.getElementById("label_2").innerHTML = "송이 : " + width_2 * 1 + '%';
        console.log("test", width, width_2)
    }
}

function move_2() {
    document.getElementById('result').scrollIntoView();
    if (width_2 >= 100) {
        width_2 -= 1
        width += 1
        alert('맥스값은 100%입니다')
    } else {
        width_2 += 1
        width -= 1
        elem.style.width = width + '%';
        elem2.style.width = width_2 + '%';
        document.getElementById("label").innerHTML ="초코 : " + width * 1 + '%';
        document.getElementById("label_2").innerHTML = "송이 : " + width_2 * 1 + '%';
        console.log("test2", width_2)
    }
}
