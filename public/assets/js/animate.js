document.addEventListener("DOMContentLoaded", function () {
    const skelly = document.getElementById('skelly');
    let current = 0;

    // Function to hide all frames
    function hideAllFrames() {
        const frames = skelly.getElementsByTagName('pre');
        for (const frame of frames) {
            frame.style.display = 'none';
        }
    }

    // Function to show the next frame
    function showNextFrame() {
        const frames = skelly.getElementsByTagName('pre');
        if (frames.length === 0) return; // Exit if no frames

        hideAllFrames(); // Hide all frames

        // Show the next frame and update the current index
        frames[current].style.display = 'block';
        current = (current + 1) % frames.length;
    }

    // Interval to loop through frames
    const interval = setInterval(showNextFrame, 50); // Change 1000 to your desired frame rate (in milliseconds)

    // Optional: Clear interval if skelly is no longer in the DOM
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (!document.contains(skelly)) {
                clearInterval(interval);
                observer.disconnect();
            }
        });
    });

    observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
});
