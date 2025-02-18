window.onload = function () {
    const homeBtn = document.getElementById("homeBtn");

    if (homeBtn) {
        homeBtn.addEventListener("click", () => {
            console.log("跳转到主页 index.html"); // 调试信息
            window.location.href = "index.html"; // 跳转到主页
        });
    } else {
        console.error("homeBtn 未找到！");
    }
};
