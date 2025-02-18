document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {  // 检测是否按下 Enter 键
            let query = searchInput.value.trim(); // 获取用户输入并去除首尾空格
            if (query) {
                window.location.href = `article.html?search=${encodeURIComponent(query)}`;
            } else {
                alert("请输入搜索内容！");
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    const speed = 0.1; // 调整跟随速度

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        posX += (mouseX - posX) * speed;
        posY += (mouseY - posY) * speed;
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
        requestAnimationFrame(animate);
    }
    animate();
});
    document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const menuItems = document.getElementById("menuItems");
    const menuItem1 = document.getElementById("menuItem1"); // 获取菜单项 "1"

    // 点击 ☰ 按钮，显示/隐藏菜单
    menuBtn.addEventListener("click", () => {
        menuItems.style.display = menuItems.style.display === "block" ? "none" : "block";
    });

    // 监听菜单项 "1" 的点击事件
    menuItem1.addEventListener("click", () => {
        window.location.href = "page1.html"; // 仅菜单项 "1" 跳转到 page1.html
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuItem2 = document.getElementById("menuItem2"); // ✅ 获取菜单项 2

    if (menuItem2) {
        menuItem2.addEventListener("click", () => {
            window.location.href = "page2.html"; // ✅ 仅菜单项 2 跳转
        });
    } else {
        console.error("menuItem2 未找到！");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // 获取 "3" 这个菜单项
    const menuItem3 = document.getElementById("menuItem3");

    // 监听点击事件
    menuItem3.addEventListener("click", function () {
        const url = menuItem3.getAttribute("data-url");

        // 只有 "3" 有效，执行跳转
        if (url) {
            window.location.href = url;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // 获取 "4" 这个菜单项
    const menuItem4 = document.getElementById("menuItem4");

    // 监听点击事件
    menuItem4.addEventListener("click", function () {
        const url = menuItem4.getAttribute("data-url");

        // 只有 "4" 有效，执行跳转
        if (url) {
            window.location.href = url;
        }
    });
});




