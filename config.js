// Basic Information
const config = {
    valentineName: "Happy",
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating Background Elements
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // Questions and Buttons
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine...?",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    // Love Meter Messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    // Final Celebration
    celebration: {
        title: "Yay! I'm the luckiest person...",
        message: "Now come get your gift...",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Website Colors
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation Settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Music Settings
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dn7jeryp3/video/upload/v1734165339/romantic-music.mp3", // I added a default romantic track for you!
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Export the config
export default config;
