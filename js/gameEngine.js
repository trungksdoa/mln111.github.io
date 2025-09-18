// js/gameEngine.js
class GameEngine {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        console.log('🎮 Game Engine initialized');
        this.loadGameData();
    }

    async loadGameData() {
        try {
            // In a real implementation, you'd load from external files
            // For now, using inline data
            console.log('📊 Game data loaded');
        } catch (error) {
            console.error('Failed to load game data:', error);
        }
    }

    // Core game flow
    startSinglePlayer() {
        gameState.reset();
        multiplayerManager.mode = 'single';
        
        uiManager.hideStartScreen();
        uiManager.showGameContainer();
        this.updateDisplay();
        this.loadCurrentStory();
    }

    startMultiplayer() {
        gameState.reset();
        
        uiManager.hideRoomWaiting();
        uiManager.showGameContainer();
        uiManager.showMultiplayerStatus();
        
        this.updateDisplay();
        this.loadCurrentStory();
    }

    // Story and choice management
    loadCurrentStory() {
        const storyIndex = Math.min(gameState.currentTurn - 1, GAME_DATA.stories.length - 1);
        const storyData = GAME_DATA.stories[storyIndex];
        
        if (!storyData) {
            console.error('No story data for turn:', gameState.currentTurn);
            return;
        }
        
        uiManager.updateStorySection(storyData.title, storyData.text);
        uiManager.displayChoices(storyData.choices);
    }

    makeChoice(choice, index) {
        // Prevent spam clicking
        if (gameState.choiceCooldown) {
            console.log('Choice on cooldown');
            return;
        }
        
        gameState.setCooldown();
        uiManager.disableAllChoices();
        
        console.log('Making choice:', choice.title);
        
        // Apply effects
        const changes = gameState.updateStats(choice.effects);
        
        // Update score
        const scoreGain = gameState.calculateScoreFromChoice(choice);
        gameState.addScore(scoreGain);
        
        // Log event
        gameState.addEvent({
            type: 'choice',
            choice: choice,
            effects: changes,
            scoreGain: scoreGain
        });
        
        // Show result
        uiManager.showChoiceResult(choice, changes);
        
        // Handle multiplayer sync
        this.handleMultiplayerSync();
        
        // Update display
        this.updateDisplay();
        
        // Check game end
        if (this.checkGameEnd()) {
            return;
        }
        
        // Continue game after delay
        setTimeout(() => {
            this.continueGame();
        }, CONFIG.GAME.RESULT_DISPLAY_TIME);
    }

    continueGame() {
        gameState.nextTurn();
        
        // Random event chance
        if (Math.random() < CONFIG.GAME.RANDOM_EVENT_CHANCE) {
            this.triggerRandomEvent();
        } else {
            this.loadCurrentStory();
        }
        
        uiManager.enableAllChoices();
    }

    // Random events
    triggerRandomEvent() {
        const event = this.selectRandomEvent();
        if (!event) {
            this.loadCurrentStory();
            return;
        }
        
        // Apply effects
        const changes = gameState.updateStats(event.effects);
        
        // Log event
        gameState.addEvent({
            type: 'random_event',
            event: event,
            effects: changes
        });
        
        // Show event
        uiManager.showRandomEvent(event, changes);
        
        // Update display
        this.updateDisplay();
        
        // Continue after delay
        setTimeout(() => {
            uiManager.hideRandomEvent();
            this.loadCurrentStory();
        }, CONFIG.GAME.EVENT_DISPLAY_TIME);
    }

    selectRandomEvent() {
        const events = GAME_DATA.randomEvents;
        if (!events || events.length === 0) return null;
        
        // Simple random selection for now
        return events[Math.floor(Math.random() * events.length)];
    }

    // Game end management
    checkGameEnd() {
        // Check failure conditions
        const failure = gameState.checkFailureConditions();
        if (failure) {
            this.endGame(failure);
            return true;
        }
        
        // Check success conditions
        const success = gameState.checkSuccessConditions();
        if (success) {
            this.endGame(success);
            return true;
        }
        
        // Check turn limit
        if (gameState.currentTurn >= CONFIG.GAME.MAX_TURNS) {
            this.endGame({
                type: 'natural_end',
                title: 'KẾT THÚC NHIỆM KỲ',
                description: 'Bạn đã hoàn thành nhiệm kỳ cầm quyền.'
            });
            return true;
        }
        
        return false;
    }

    endGame(ending) {
        gameState.gameEnded = true;
        
        // Log final event
        gameState.addEvent({
            type: 'game_end',
            ending: ending,
            finalScore: gameState.score,
            finalStats: gameState.stats
        });
        
        // Handle multiplayer end
        if (multiplayerManager.mode !== 'single') {
            multiplayerManager.endGame && multiplayerManager.endGame(ending);
        }
        
        // Show end screen
        uiManager.showGameEnd(ending, gameState.score);
        
        console.log('🏁 Game ended:', ending.type, 'Score:', gameState.score);
    }

    // Multiplayer integration
    handleMultiplayerSync() {
        if (multiplayerManager.mode === 'competitive') {
            multiplayerManager.updateScore(gameState.score, gameState.stats);
        } else if (multiplayerManager.mode === 'cooperative') {
            // Sync game state for cooperative mode
            // Implementation depends on server setup
        }
    }

    applyOppositionEffects(effects) {
        const changes = gameState.updateStats(effects);
        this.updateDisplay();
        return changes;
    }

    // Display updates
    updateDisplay() {
        uiManager.updateStatsDisplay(gameState.stats);
        uiManager.updateGameInfo(gameState.currentTurn, gameState.score);
    }

    // Restart game
    restartGame() {
        gameState.reset();
        multiplayerManager.reset();
        
        uiManager.hideGameEnd();
        uiManager.showStartScreen();
    }
}

// Singleton instance
const gameEngine = new GameEngine();
