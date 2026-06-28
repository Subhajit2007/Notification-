// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
        console.log("Service Worker registered!", reg);
    });
}

document.getElementById('notifyBtn').addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            // Service Worker er maddhome notification pathano
            navigator.serviceWorker.ready.then(reg => {
                reg.showNotification("Hello Subhajit!", {
                    body: "Service Worker diye notification elo!",
                    icon: "https://cdn-icons-png.flaticon.com/512/3233/3233519.png"
                });
            });
        }
    });
});

