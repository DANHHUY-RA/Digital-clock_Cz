function startTime() {
    // Lấy ngày,gio hiện tại
    var today = new Date();

    // Giờ, phút, giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    document.getElementById("clock-hour").innerText = h + " giờ";
    document.getElementById("clock-minute").innerText = m + " phút";
    document.getElementById("clock-second").innerText = s + " giây";

    var t = setTimeout(function () {
        startTime();
    }, 500);
}
startTime();
