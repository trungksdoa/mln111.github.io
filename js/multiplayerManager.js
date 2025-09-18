// js/multiplayerManager.js
class MultiplayerManager {
    constructor() {
        this.mode = null;
        this.roomCode = null;
        this.players = [];
        this.currentPlayer = null;
        this.isHost = false;
        this.gameStarted = false;
        this.votingActive = false;
        this.votes = {};
        this.currentChoices = null;
        
        this.setupSocketEvents();
    }

    setupSocketEvents() {
        socketManager.on('room-created', (data) => this.handleRoomCreated(data));
        socketManager.on('room-joined', (data) => this.handleRoomJoined(data));
        socketManager.on('player-joined', (data) => this.handlePlayerJoined(data));
        socketManager.on('player-left', (data) => this.handlePlayerLeft(data));
        socketManager.on('game-started', (data) => this.handleGameStarted(data));
        socketManager.on('vote-started', (data) => this.handleVoteStarted(data));
        socketManager.on('vote-update', (data) => this.handleVoteUpdate(data));
        socketManager.on('vote-finished', (data) => this.handleVoteFinished(data));
        socketManager.on('competitive-scores', (data) => this.handleCompetitiveScores(data));
        socketManager.on('opposition-action', (data) => this.handleOppositionAction(data));
        socketManager.on('socket-error', (data) => this.handleError(data));
    }

    // Room management
    createRoom(mode) {
        this.mode = mode;
        const playerName = this.generatePlayerName();
        
        return socketManager.send('create-room', { 
            mode: mode, 
            playerName: playerName 
        });
    }

    joinRoom(roomCode) {
        const playerName = this.generatePlayerName();
        
        return socketManager.send('join-room', { 
            roomCode: roomCode.toUpperCase(), 
            playerName: playerName 
        });
    }

    leaveRoom() {
        if (this.roomCode) {
            socketManager.send('leave-room', { roomCode: this.roomCode });
            this.reset();
        }
    }

    startGame() {
        if (!this.isHost || this.players.length < 2) return false;
        
        return socketManager.send('start-game', { 
            roomCode: this.roomCode,
            gameMode: this.mode
        });
    }

    // Voting system (Cooperative mode)
    startVote(choices) {
        if (this.mode !== 'cooperative') return false;
        
        return socketManager.send('start-vote', {
            roomCode: this.roomCode,
            choices: choices
        });
    }

    castVote(choiceIndex) {
        if (!this.votingActive) return false;
        
        return socketManager.send('cast-vote', {
            roomCode: this.roomCode,
            choice: choiceIndex
        });
    }

    // Score management (Competitive mode)
    updateScore(score, stats) {
        if (this.mode !== 'competitive') return false;
        
        return socketManager.send('update-score', {
            roomCode: this.roomCode,
            score: score,
            stats: stats
        });
    }

    // Opposition actions (Versus mode)
    triggerOppositionAction(action, effects, message) {
        if (this.mode !== 'versus' || this.currentPlayer.role !== 'opposition') {
            return false;
        }
        
        return socketManager.send('opposition-action', {
            roomCode: this.roomCode,
            action: action,
            effects: effects,
            message: message
        });
    }

    // Event handlers
    handleRoomCreated(data) {
        this.roomCode = data.roomCode;
        this.currentPlayer = data.player;
        this.players = Array.isArray(data.players) ? data.players : [data.player];
        this.isHost = true;
        
        uiManager.showRoomWaiting();
    }

    handleRoomJoined(data) {
        this.roomCode = data.roomCode;
        this.currentPlayer = data.player;
        this.players = Array.isArray(data.players) ? data.players : [];
        this.isHost = data.player.isHost || false;
        
        uiManager.showRoomWaiting();
    }

    handlePlayerJoined(data) {
        this.players = Array.isArray(data.players) ? data.players : [];
        uiManager.updatePlayersList();
    }

    handlePlayerLeft(data) {
        this.players = Array.isArray(data.players) ? data.players : [];
        uiManager.updatePlayersList();
    }

    handleGameStarted(data) {
        this.gameStarted = true;
        uiManager.startGameplay();
    }

    handleVoteStarted(data) {
        this.votingActive = true;
        this.currentChoices = data.choices;
        this.votes = {};
        uiManager.showVotingPanel(data.choices);
    }

    handleVoteUpdate(data) {
        this.votes = data.votes;
        uiManager.updateVoteCounts(data.votes);
    }

    handleVoteFinished(data) {
        this.votingActive = false;
        uiManager.hideVotingPanel();
        
        if (this.currentChoices && this.currentChoices[data.winningChoice]) {
            gameEngine.makeChoice(this.currentChoices[data.winningChoice], data.winningChoice);
        }
    }

    handleCompetitiveScores(data) {
        if (this.mode === 'competitive') {
            uiManager.updateCompetitiveScores(data.scores);
        }
    }

    handleOppositionAction(data) {
        if (this.mode === 'versus') {
            gameEngine.applyOppositionEffects(data.effects);
            uiManager.showOppositionNotification(data.message);
        }
    }

    handleError(data) {
        console.error('Multiplayer error:', data);
        uiManager.showError(data.message || 'Unknown multiplayer error');
    }

    // Utility methods
    generatePlayerName() {
        return `Player${Math.floor(Math.random() * 1000)}`;
    }

    getPlayerCount() {
        return this.players ? this.players.length : 0;
    }

    getMaxPlayers() {
        return CONFIG.MULTIPLAYER.MAX_PLAYERS[this.mode] || 4;
    }

    canStartGame() {
        return this.isHost && 
               this.getPlayerCount() >= 2 && 
               socketManager.isConnected &&
               !this.gameStarted;
    }

    // State management
    reset() {
        this.mode = null;
        this.roomCode = null;
        this.players = [];
        this.currentPlayer = null;
        this.isHost = false;
        this.gameStarted = false;
        this.votingActive = false;
        this.votes = {};
        this.currentChoices = null;
    }

    getState() {
        return {
            mode: this.mode,
            roomCode: this.roomCode,
            players: this.players,
            currentPlayer: this.currentPlayer,
            isHost: this.isHost,
            gameStarted: this.gameStarted,
            playerCount: this.getPlayerCount(),
            maxPlayers: this.getMaxPlayers(),
            canStart: this.canStartGame()
        };
    }
}

// Singleton instance
const multiplayerManager = new MultiplayerManager();
