// js/gameState.js
class GameState {
    constructor() {
        this.currentTurn = 1;
        this.stats = {
            discontent: 45,
            conflict: 35,
            economy: 55,
            environment: 50,
            freedom: 60,
            security: 45
        };
        this.score = 0;
        this.gameEnded = false;
        this.eventHistory = [];
        this.choices = null;
        this.choiceCooldown = false;
    }

    // Stat management
    updateStat(stat, change) {
        if (this.stats.hasOwnProperty(stat)) {
            this.stats[stat] = Math.max(0, Math.min(100, this.stats[stat] + change));
            return true;
        }
        return false;
    }

    updateStats(effects) {
        const changes = {};
        Object.entries(effects).forEach(([stat, change]) => {
            if (this.updateStat(stat, change)) {
                changes[stat] = change;
            }
        });
        return changes;
    }

    // Score management
    addScore(points) {
        this.score += points;
        return this.score;
    }

    calculateScoreFromChoice(choice) {
        return Math.abs(Object.values(choice.effects).reduce((sum, val) => sum + val, 0));
    }

    // Turn management
    nextTurn() {
        this.currentTurn++;
        return this.currentTurn;
    }

    // Event history
    addEvent(event) {
        this.eventHistory.push({
            turn: this.currentTurn,
            timestamp: Date.now(),
            ...event
        });
    }

    // Cooldown management
    setCooldown(duration = CONFIG.GAME.CHOICE_COOLDOWN_MS) {
        this.choiceCooldown = true;
        setTimeout(() => {
            this.choiceCooldown = false;
        }, duration);
    }

    // Game end checks
    checkFailureConditions() {
        const conditions = CONFIG.END_CONDITIONS.FAILURE;
        
        if (this.stats.conflict >= conditions.conflict) {
            return { type: 'revolution', title: 'CÁCH MẠNG', 
                    description: 'Xung đột đã đạt mức tới hạn. Người dân nổi dậy!' };
        }
        
        if (this.stats.discontent >= conditions.discontent) {
            return { type: 'overthrown', title: 'MẤT QUYỀN LỰC', 
                    description: 'Sự bất mãn đạt đỉnh điểm. Bạn bị truất phế!' };
        }
        
        if (this.stats.economy <= conditions.economy) {
            return { type: 'economic_collapse', title: 'SỤP ĐỔ KINH TẾ', 
                    description: 'Nền kinh tế sụp đổ hoàn toàn!' };
        }
        
        return null;
    }

    checkSuccessConditions() {
        if (this.currentTurn < 15) return null;
        
        const conditions = CONFIG.END_CONDITIONS.SUCCESS;
        
        // Perfect Leader
        if (Object.values(this.stats).every(stat => stat >= conditions.perfect_leader.all)) {
            return { type: 'perfect_leader', title: 'LÃNH ĐẠO HOÀN HẢO', 
                    description: 'Bạn đã cân bằng tất cả yếu tố xuất sắc!' };
        }
        
        // Economic Emperor
        if (this.stats.economy >= conditions.economic_emperor.economy) {
            return { type: 'economic_emperor', title: 'HOÀNG ĐẾ KINH TẾ', 
                    description: 'Nền kinh tế phát triển mạnh mẽ!' };
        }
        
        // Add other success conditions...
        
        return null;
    }

    // Save/Load state
    saveState() {
        return {
            currentTurn: this.currentTurn,
            stats: { ...this.stats },
            score: this.score,
            gameEnded: this.gameEnded,
            eventHistory: [...this.eventHistory]
        };
    }

    loadState(savedState) {
        Object.assign(this, savedState);
    }

    // Reset for new game
    reset() {
        this.currentTurn = 1;
        this.stats = {
            discontent: 45,
            conflict: 35,
            economy: 55,
            environment: 50,
            freedom: 60,
            security: 45
        };
        this.score = 0;
        this.gameEnded = false;
        this.eventHistory = [];
        this.choices = null;
        this.choiceCooldown = false;
    }
}

// Singleton instance
const gameState = new GameState();
