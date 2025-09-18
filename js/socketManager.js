// socketManager.js - Improved version
class SocketManager {
    constructor() {
        this.socket = null;
        this.isConnected = false;
        this.eventHandlers = new Map();
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.initReady = false;
        this.offlineMode = false;
    }

    // Initialize socket connection with better detection
    async init() {
        console.log('🔌 Initializing SocketManager...');
        
        // Check if we're in forced offline mode
        if (window.offlineMode === true) {
            console.log('🔌 Running in forced offline mode');
            this.offlineMode = true;
            return Promise.resolve(null);
        }
        
        // Check Socket.IO availability with multiple methods
        if (!this.isSocketIOAvailable()) {
            console.log('❌ Socket.IO not detected, waiting...');
            
            try {
                await this.waitForSocketIO();
            } catch (error) {
                console.error('❌ Socket.IO failed to load:', error.message);
                this.offlineMode = true;
                return Promise.resolve(null);
            }
        }
        
        return this.doInit();
    }

    // Enhanced Socket.IO detection
    isSocketIOAvailable() {
        return (
            typeof io !== 'undefined' && 
            typeof io === 'function' &&
            window.socketIOLoaded === true
        );
    }

    // Wait for Socket.IO with exponential backoff
    waitForSocketIO(maxRetries = 30) { // Increased retries
        return new Promise((resolve, reject) => {
            let retries = 0;
            
            const checkSocketIO = () => {
                if (this.isSocketIOAvailable()) {
                    console.log('✅ Socket.IO detected and ready');
                    resolve();
                } else if (retries >= maxRetries) {
                    reject(new Error('Socket.IO failed to load after maximum retries'));
                } else {
                    retries++;
                    const delay = Math.min(100 * Math.pow(1.1, retries), 1000); // Exponential backoff
                    
                    if (retries % 5 === 0) { // Log every 5 attempts
                        console.log(`⏳ Waiting for Socket.IO... (${retries}/${maxRetries})`);
                    }
                    
                    setTimeout(checkSocketIO, delay);
                }
            };
            
            checkSocketIO();
        });
    }

    // Actual initialization
    doInit() {
        if (this.socket || this.initReady) {
            return Promise.resolve(this.socket);
        }

        if (this.offlineMode) {
            console.log('🔌 Offline mode - skipping Socket.IO connection');
            return Promise.resolve(null);
        }

        console.log('🌐 Connecting to server:', CONFIG.SOCKET.URL);
        
        try {
            this.socket = io(CONFIG.SOCKET.URL, {
                timeout: CONFIG.SOCKET.TIMEOUT,
                transports: CONFIG.SOCKET.TRANSPORTS,
                autoConnect: true,
                reconnection: true,
                reconnectionDelay: 1000,
                reconnectionAttempts: this.maxReconnectAttempts
            });

            this.setupEventHandlers();
            this.initReady = true;
            
            console.log('📡 Socket.IO connection initiated');
            return Promise.resolve(this.socket);
            
        } catch (error) {
            console.error('❌ Failed to initialize Socket.IO:', error);
            this.offlineMode = true;
            return Promise.resolve(null);
        }
    }

    // Enhanced event handlers setup
    setupEventHandlers() {
        if (!this.socket || this.offlineMode) return;

        this.socket.on('connect', () => {
            console.log('🟢 Connected to multiplayer server');
            this.isConnected = true;
            this.reconnectAttempts = 0;
            this.offlineMode = false;
            this.emit('connection-status-changed', true);
        });

        this.socket.on('disconnect', (reason) => {
            console.log('🔴 Disconnected from server:', reason);
            this.isConnected = false;
            this.emit('connection-status-changed', false);
            
            if (reason === 'io server disconnect') {
                this.socket.connect();
            }
        });

        this.socket.on('connect_error', (error) => {
            console.log('⚠️ Connection error:', error.message);
            this.isConnected = false;
            this.handleReconnect();
        });

        // Multiplayer events
        this.socket.on('room-created', (data) => this.emit('room-created', data));
        this.socket.on('room-joined', (data) => this.emit('room-joined', data));
        this.socket.on('player-joined', (data) => this.emit('player-joined', data));
        this.socket.on('player-left', (data) => this.emit('player-left', data));
        this.socket.on('game-started', (data) => this.emit('game-started', data));
        this.socket.on('vote-started', (data) => this.emit('vote-started', data));
        this.socket.on('vote-update', (data) => this.emit('vote-update', data));
        this.socket.on('vote-finished', (data) => this.emit('vote-finished', data));
        this.socket.on('competitive-scores', (data) => this.emit('competitive-scores', data));
        this.socket.on('opposition-action', (data) => this.emit('opposition-action', data));
        this.socket.on('game-state-update', (data) => this.emit('game-state-update', data));
        this.socket.on('error', (data) => this.emit('socket-error', data));

        console.log('📡 Socket event handlers setup complete');
    }

    // Event emitter pattern (unchanged)
    on(event, handler) {
        if (!this.eventHandlers.has(event)) {
            this.eventHandlers.set(event, []);
        }
        this.eventHandlers.get(event).push(handler);
    }

    off(event, handler) {
        if (this.eventHandlers.has(event)) {
            const handlers = this.eventHandlers.get(event);
            const index = handlers.indexOf(handler);
            if (index > -1) {
                handlers.splice(index, 1);
            }
        }
    }

    emit(event, data) {
        if (this.eventHandlers.has(event)) {
            this.eventHandlers.get(event).forEach(handler => {
                try {
                    handler(data);
                } catch (error) {
                    console.error(`Error in event handler for ${event}:`, error);
                }
            });
        }
    }

    // Socket.IO methods with offline protection
    send(event, data) {
        if (this.offlineMode) {
            console.warn('Offline mode - cannot send:', event);
            return false;
        }
        
        if (this.socket && this.isConnected) {
            this.socket.emit(event, data);
            return true;
        }
        
        console.warn('Socket not connected, cannot send:', event);
        return false;
    }

    // Enhanced reconnection logic
    handleReconnect() {
        if (this.offlineMode) return;
        
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            const delay = Math.min(Math.pow(2, this.reconnectAttempts) * 1000, 10000);
            
            console.log(`🔄 Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
            
            setTimeout(() => {
                if (!this.isConnected && this.socket && !this.offlineMode) {
                    this.socket.connect();
                }
            }, delay);
        } else {
            console.log('❌ Max reconnection attempts reached - switching to offline mode');
            this.offlineMode = true;
            this.emit('max-reconnect-attempts');
        }
    }

    // Status checks
    isReady() {
        return !this.offlineMode && this.initReady && this.socket;
    }
    
    isOffline() {
        return this.offlineMode;
    }

    // Force offline mode
    setOfflineMode(offline = true) {
        this.offlineMode = offline;
        if (offline && this.socket) {
            this.socket.disconnect();
        }
    }

    // Get status
    getStatus() {
        return {
            ready: this.isReady(),
            connected: this.isConnected,
            offline: this.offlineMode,
            reconnectAttempts: this.reconnectAttempts
        };
    }

    // Cleanup
    destroy() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
        this.isConnected = false;
        this.initReady = false;
        this.offlineMode = false;
        this.eventHandlers.clear();
    }
}

// Singleton instance
const socketManager = new SocketManager();

// Debug helper
if (CONFIG && CONFIG.DEBUG) {
    window.socketManager = socketManager;
}
