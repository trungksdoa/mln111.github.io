// config.js - Fixed version
const CONFIG = {
    // Socket.IO Configuration
    SOCKET: {
        URL: 'http://localhost:3000',
        TIMEOUT: 10000, // Increased timeout
        TRANSPORTS: ['websocket', 'polling'],
        FALLBACK_MODE: true // Enable offline fallback
    },
    
    // Game Configuration
    GAME: {
        MAX_TURNS: 20,
        CHOICE_COOLDOWN_MS: 2000,
        RANDOM_EVENT_CHANCE: 0.3,
        RESULT_DISPLAY_TIME: 3000,
        EVENT_DISPLAY_TIME: 5000
    },
    
    // Multiplayer Configuration
    MULTIPLAYER: {
        MAX_PLAYERS: {
            competitive: 4,
            cooperative: 3,
            versus: 2
        },
        VOTE_TIMEOUT: 30000,
        ROOM_CODE_LENGTH: 6
    },
    
    // Game End Conditions
    END_CONDITIONS: {
        FAILURE: {
            conflict: 85,
            discontent: 80,
            economy: 10
        },
        SUCCESS: {
            perfect_leader: { all: 70 },
            economic_emperor: { economy: 85 },
            green_messiah: { environment: 85 },
            democratic_hero: { freedom: 80, security_max: 50 },
            warlord: { security: 80, conflict_max: 60 }
        }
    },
    
    // UI Configuration
    UI: {
        PLAYER_COLORS: ['#4CAF50', '#2196F3', '#FF9800', '#E91E63', '#9C27B0', '#00BCD4'],
        ANIMATIONS: {
            SLIDE_DURATION: 500,
            FADE_DURATION: 300
        }
    },
    
    // Debug mode
    DEBUG: true
};

// Validate CONFIG
if (typeof window !== 'undefined') {
    console.log('📊 CONFIG loaded:', CONFIG);
}

// Export for Node.js or use globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
