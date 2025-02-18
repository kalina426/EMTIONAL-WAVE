document.getElementById("menuBtn").addEventListener("click", function () {
    alert("菜单按钮被点击！可以扩展侧边栏功能。");
});
document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".wave-text");

    texts.forEach(text => {
        text.addEventListener("click", function () {
            text.classList.add("active"); // 添加 CSS 类，使动画变快
            setTimeout(() => {
                text.classList.remove("active"); // 1秒后恢复正常
            }, 1000);
        });
    });
});
