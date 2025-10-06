window.addEventListener('onWidgetLoad', function (obj) {

    console.log("Widget loaded!");

    // Create a container for the bubbles if it doesn't exist
    if (!document.getElementById('bubble-container')) {
        const container = document.createElement('div');
        container.id = 'bubble-container';
        container.style.cssText = 'position: fixed; top: 0; bottom: 0; width: 100%; height: 100%; pointer-events: none';
        document.body.appendChild(container);
    }

    // Bubble configuration settings
    const CONFIG = {
        bubbleImage: "https://cragtower.github.io/Bubble_Overlay/Bubble.png",
        minSize: 30,
        maxSize: 120,
        minDuration: 3,
        maxDuration: 6,
        staggerDelay: 100,
        maxCount: 100
    }

    const container = document.getElementById('bubble-container');

    // Command List
    const commands = {
        "!bubbles": drawBubblesToScreen
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        console.log(bubble);

        // Randomize bubble properties
        const size = Math.random() * (CONFIG.maxSize - CONFIG.minSize) + CONFIG.minSize;
        const duration = Math.random() * (CONFIG.maxDuration - CONFIG.minDuration) + CONFIG.minDuration;
        const startX = Math.random() * window.innerWidth;

        // Style the bubble
        bubble.style.backgroundImage = `url(${CONFIG.bubbleImage})`;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${startX}px`;
        bubble.style.bottom = `-150px`;
        bubble.style.animationDuration = `${duration}s`;

        // Randomly use wobble animation for variety
        if (Math.random() > 0.5) {
            bubble.style.animationName = 'rise-wobble';
        }

        // Append bubble to container
        container.appendChild(bubble);

        // Remove bubble after animation completes
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    function drawBubblesToScreen() {
        const bubbleCount = CONFIG.maxCount;
        console.log("Preparing bubbles...")

        for (let i = 0; i < bubbleCount; i++) {
            setTimeout(() => {
                console.log("Creating bubbles...")
                createBubble();
            }, i * CONFIG.staggerDelay);
        }
    }

    // Listen for chat messages
    window.addEventListener('onEventReceived', function (obj) {
        console.log("Checking event...");
        if (!obj.detail.event.listener === 'message') {
            return;
        }

        const data = obj.detail.event.data;
        const message = data.text;

        const command = message.split(' ')[0];
        if (commands[command]) {
            console.log("Checking command...");
            commands[command]();
        }
    });
});