document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const letters = "rainsstorms"; // 可能出现的字母

    function createLetter() {
        const letter = document.createElement("span");
        letter.classList.add("letter");
        letter.textContent = letters[Math.floor(Math.random() * letters.length)];

        // ✅ 修正随机位置、大小、动画时间
        const x = Math.random() * window.innerWidth;
        const fontSize = Math.random() * 20 + 15; // 15px - 35px
        const duration = Math.floor(Math.random() * 3 + 2); // 2s - 5s
        const rotation = (Math.random() - 0.5) * 30; // -15° 到 15°

        // ✅ 修正样式
        letter.style.left = `${x}px`;
        letter.style.fontSize = `${fontSize}px`;
        letter.style.animation = `fall ${duration}s linear`;
        letter.style.setProperty("--rotation", `${rotation}deg`);

        container.appendChild(letter);

        // ✅ 定时移除字母，避免页面过载
        setTimeout(() => {
            letter.remove();
        }, duration * 1000);
    }

    // ✅ 修正字母生成频率
    setInterval(createLetter, 100);
});

