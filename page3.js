const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

// 🌈 颜色选择（浅色系）
const softColors = ["#FFC0CB", "#ADD8E6", "#D8BFD8", "#FFFFE0"];
const glassColor = "rgba(255, 255, 255, 0.4)"; // 毛玻璃透明气泡

// 🎈 生成随机气泡
for (let i = 0; i < 50; i++) {
    bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 50 + 20, // 随机大小
        speedX: (Math.random() - 0.5) * 1.5, // 水平方向随机飘动
        speedY: (Math.random() - 0.5) * 1.5, // 竖直方向随机飘动
        originalColor: glassColor, // 初始颜色（透明毛玻璃）
        color: glassColor, // 当前颜色
        blur: 8, // 初始模糊
        clicked: false // 是否被点击过
    });
}

// 🎨 随机颜色
function randomColor() {
    return softColors[Math.floor(Math.random() * softColors.length)];
}

// 🌀 绘制气泡
function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bubbles.forEach(bubble => {
        ctx.beginPath();
        ctx.fillStyle = bubble.color;
        ctx.filter = `blur(${bubble.blur}px)`;
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    });

    ctx.filter = "none"; // 取消模糊
}

// 🎬 让气泡缓慢飘动
function updateBubbles() {
    bubbles.forEach(bubble => {
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // 碰到边界反弹
        if (bubble.x - bubble.radius < 0 || bubble.x + bubble.radius > canvas.width) {
            bubble.speedX *= -1;
        }
        if (bubble.y - bubble.radius < 0 || bubble.y + bubble.radius > canvas.height) {
            bubble.speedY *= -1;
        }
    });
}

// 🎥 动画循环
function animate() {
    drawBubbles();
    updateBubbles();
    requestAnimationFrame(animate);
}
animate();

// 🖱️ 点击切换颜色（变色 / 变回毛玻璃）
canvas.addEventListener("click", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    bubbles.forEach(bubble => {
        const dx = mouseX - bubble.x;
        const dy = mouseY - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < bubble.radius) {
            if (!bubble.clicked) {
                bubble.color = randomColor(); // 变色
                bubble.blur = 0; // 去除模糊
            } else {
                bubble.color = glassColor; // 恢复毛玻璃色
                bubble.blur = 8; // 重新模糊
            }
            bubble.clicked = !bubble.clicked; // 切换状态
        }
    });
});

// 📏 调整画布大小
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
