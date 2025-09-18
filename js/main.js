// main.js - Fixed version
class App {
    constructor() {
        this.initialized = false;
        this.init();
    }

    async init() {
        console.log('🚀 Initializing Political Leader Simulator');
        
        try {
            // Initialize managers with proper async handling
            await this.initializeManagers();
            
            // Setup global event handlers
            this.setupGlobalEvents();
            
            // Setup guide functionality
            this.setupGuide();
            
            this.initialized = true;
            console.log('✅ App initialized successfully');
            
        } catch (error) {
            console.error('❌ App initialization failed:', error);
            this.handleInitError(error);
        }
    }

    async initializeManagers() {
        try {
            // Initialize socket manager with await
            await socketManager.init();
            console.log('📡 Socket manager initialized');
            
            // Set up connection status handler
            socketManager.on('connection-status-changed', (connected) => {
                console.log('Connection status:', connected ? 'Connected' : 'Disconnected');
                this.updateConnectionStatus(connected);
            });
            
            socketManager.on('max-reconnect-attempts', () => {
                console.log('⚠️ Running in offline mode');
                this.showOfflineMode();
            });
            
            console.log('👥 Managers initialized');
            
        } catch (error) {
            console.warn('⚠️ Socket initialization failed, running in offline mode:', error.message);
            this.showOfflineMode();
        }
    }

    setupGlobalEvents() {
        // Global click handlers
        window.showGameModeSelection = () => uiManager.showGameModeSelection();
        window.goBack = () => uiManager.showStartScreen();
        
        window.showMultiplayerOptions = async () => {
            try {
                // Ensure socket is initialized before showing multiplayer options
                if (!socketManager.isReady()) {
                    await socketManager.init();
                }
                uiManager.showMultiplayerOptions();
            } catch (error) {
                console.error('Failed to initialize multiplayer:', error);
                alert('❌ Không thể kết nối server! Chỉ có thể chơi single player.');
            }
        };
        
        window.startSinglePlayer = () => gameEngine.startSinglePlayer();
        
        // Multiplayer functions with error handling
        window.createRoom = async (mode) => {
            try {
                if (!socketManager.isReady()) {
                    throw new Error('Socket not ready');
                }
                multiplayerManager.createRoom(mode);
            } catch (error) {
                console.error('Failed to create room:', error);
                alert('❌ Không thể tạo phòng! Vui lòng thử lại.');
            }
        };
        
        window.joinRoom = async () => {
            try {
                const roomCode = document.getElementById('roomCodeInput')?.value;
                if (!roomCode) {
                    alert('Vui lòng nhập Room Code!');
                    return;
                }
                
                if (!socketManager.isReady()) {
                    throw new Error('Socket not ready');
                }
                
                multiplayerManager.joinRoom(roomCode);
            } catch (error) {
                console.error('Failed to join room:', error);
                alert('❌ Không thể tham gia phòng! Vui lòng thử lại.');
            }
        };
        
        // Utility functions
        window.copyRoomCode = () => {
            const roomCode = multiplayerManager.roomCode;
            if (roomCode) {
                navigator.clipboard.writeText(roomCode).then(() => {
                    alert('Đã copy Room Code: ' + roomCode);
                }).catch(() => {
                    // Fallback for older browsers
                    prompt('Copy Room Code:', roomCode);
                });
            }
        };
        
        // Guide functions
        window.openGuide = () => this.openGuide();
        window.closeGuide = () => this.closeGuide();
        
        // Error handling
        window.addEventListener('error', (event) => {
            console.error('Global error:', event.error);
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
        });
    }

    setupGuide() {
        const guidePopup = document.getElementById('guidePopup');
        if (guidePopup) {
            guidePopup.addEventListener('click', (e) => {
                if (e.target === guidePopup) {
                    this.closeGuide();
                }
            });
        }
    }

    openGuide() {
        const guidePopup = document.getElementById('guidePopup');
        if (guidePopup) {
            guidePopup.style.display = 'flex';
        }
    }

    closeGuide() {
        const guidePopup = document.getElementById('guidePopup');
        if (guidePopup) {
            guidePopup.style.display = 'none';
        }
    }

    // Connection status handling
    updateConnectionStatus(connected) {
        const statusElement = document.getElementById('connectionStatus');
        if (statusElement) {
            statusElement.textContent = connected ? '🟢 Kết nối' : '🔴 Mất kết nối';
            statusElement.className = connected ? 'connected' : 'disconnected';
        }
    }

    showOfflineMode() {
        console.log('🔌 Running in offline mode - only single player available');
        
        // Hide multiplayer button
        const multiplayerBtn = document.querySelector('button[onclick="showMultiplayerOptions()"]');
        if (multiplayerBtn) {
            multiplayerBtn.style.opacity = '0.5';
            multiplayerBtn.onclick = () => {
                alert('❌ Multiplayer không khả dụng - chỉ có single player!');
            };
        }
    }

    handleInitError(error) {
        console.error('Initialization error:', error);
        
        // Show error to user
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 15px;
            border-radius: 5px;
            z-index: 9999;
        `;
        errorDiv.textContent = 'Lỗi khởi tạo! Một số tính năng có thể không hoạt động.';
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            document.body.removeChild(errorDiv);
        }, 5000);
    }

    // Public API
    isInitialized() {
        return this.initialized;
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new App();
    });
} else {
    window.app = new App();
}

// Export for debugging
window.socketManager = socketManager;
window.multiplayerManager = multiplayerManager;
window.gameEngine = gameEngine;
window.uiManager = uiManager;
