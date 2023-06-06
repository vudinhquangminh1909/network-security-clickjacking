window.onmousemove = function (e) {
    var m = document.getElementById('demo2');
    m.style.left = e.clientX - 30 + 'px';
    m.style.top = e.clientY - 30 + 'px';
}

func1();
function func1() {
    setInterval(function () {
        document.getElementById('demo2').style.display = 'none';
    }, 5000);
}

func();
function func() {
    setInterval(function () {
        document.getElementById('demo2').style.display = 'block';
    }, 10000);
}