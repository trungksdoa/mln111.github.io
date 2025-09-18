// js/uiManager.js
class UIManager {
    constructor() {
        this.elements = {};
        this.initElements();
    }

    initElements() {
        // Cache frequently used elements
        this.elements = {
            startScreen: document.getElementById('startScreen'),
            gameModeSelection: document.getElementById('gameModeSelection'),
            multiplayerOptions: document.getElementById('multiplayerOptions'),
            roomWaiting: document.getElementById('roomWaiting'),
            gameContainer: document.getElementById('gameContainer'),
            statsPanel: document.getElementById('statsPanel'),
            storyTitle: document.getElementById('storyTitle'),
            storyText: document.getElementById('storyText'),
            choicesGrid: document.getElementById('choicesGrid'),
            resultPanel: document.getElementById('resultPanel'),
            randomEvent: document.getElementById('randomEvent'),
            gameEnd: document.getElementById('gameEnd'),
            mpStatus: document.getElementById('mpStatus'),
            votingPanel: document.getElementById('votingPanel'),
            oppositionPanel: document.getElementById('oppositionPanel'),
            turnCounter: document.getElementById('turnCounter'),
            gameScore: document.getElementById('gameScore')
        };
    }

    // Screen transitions
    showStartScreen() {
        this.hideAllScreens();
        this.show(this.elements.startScreen);
    }

    hideStartScreen() {
        this.hide(this.elements.startScreen);
    }

    showGameModeSelection() {
        this.hideAllScreens();
        this.show(this.elements.gameModeSelection);
    }

    showMultiplayerOptions() {
        this.hide(this.elements.gameModeSelection);
        this.show(this.elements.multiplayerOptions);
    }

    showRoomWaiting() {
        this.hideAllScreens();
        this.renderRoomWaiting();
        this.show(this.elements.roomWaiting);
    }

    hideRoomWaiting() {
        this.hide(this.elements.roomWaiting);
    }

    showGameContainer() {
        this.hideAllScreens();
        this.show(this.elements.gameContainer);
    }

    showMultiplayerStatus() {
        this.show(this.elements.mpStatus);
        this.updateMultiplayerStatus();
    }

    hideAllScreens() {
        Object.values(this.elements).forEach(element => {
            if (element) this.hide(element);
        });
    }

    // Utility methods
    show(element) {
        if (element) {
            element.style.display = element.dataset.displayType || 'block';
        }
    }

    hide(element) {
        if (element) {
            element.style.display = 'none';
        }
    }

    // Stats display
    updateStatsDisplay(stats) {
        if (!this.elements.statsPanel) return;

        const statLabels = {
            discontent: 'Bất Mãn',
            conflict: 'Xung Đột',
            economy: 'Kinh Tế',
            environment: 'Môi Trường',
            freedom: 'Tự Do',
            security: 'An Ninh'
        };

        this.elements.statsPanel.innerHTML = '';
        
        Object.entries(stats).forEach(([stat, value]) => {
            const statElement = this.createElement('div', 'stat');
            statElement.innerHTML = `
                <div class="stat-label">${statLabels[stat]}</div>
                <div class="stat-value">${value}</div>
                <div class="stat-bar">
                    <div class="stat-fill" style="width: ${value}%"></div>
                </div>
            `;
            this.elements.statsPanel.appendChild(statElement);
        });
    }

    // Game info display
    updateGameInfo(turn, score) {
        if (this.elements.turnCounter) {
            this.elements.turnCounter.textContent = turn;
        }
        if (this.elements.gameScore) {
            this.elements.gameScore.textContent = score;
        }
    }

    // Story section
    updateStorySection(title, text) {
        if (this.elements.storyTitle) {
            this.elements.storyTitle.textContent = title;
        }
        if (this.elements.storyText) {
            this.elements.storyText.textContent = text;
        }
    }

    // Choices display
    displayChoices(choices) {
        if (!this.elements.choicesGrid || !choices) return;

        this.elements.choicesGrid.innerHTML = '';

        choices.forEach((choice, index) => {
            const choiceElement = this.createElement('div', 'choice');
            
            // Set click handler based on multiplayer mode
            if (multiplayerManager.mode === 'cooperative') {
                choiceElement.onclick = () => {
                    if (!gameState.choiceCooldown) {
                        multiplayerManager.startVote(choices);
                    }
                };
            } else {
                choiceElement.onclick = () => gameEngine.makeChoice(choice, index);
            }

            // Generate effects preview
            const effectsPreview = this.generateEffectsPreview(choice.effects);

            choiceElement.innerHTML = `
                <div class="choice-title">${choice.title}</div>
                <div class="choice-text">${choice.text}</div>
                <div class="choice-effects">📈 Tác động: ${effectsPreview}</div>
            `;

            this.elements.choicesGrid.appendChild(choiceElement);
        });
    }

    generateEffectsPreview(effects) {
        const statLabels = {
            discontent: 'Bất Mãn',
            conflict: 'Xung Đột',
            economy: 'Kinh Tế',
            environment: 'Môi Trường',
            freedom: 'Tự Do',
            security: 'An Ninh'
        };

        return Object.entries(effects)
            .filter(([stat, change]) => change !== 0)
            .map(([stat, change]) => {
                const sign = change > 0 ? '+' : '';
                return `${statLabels[stat]}: ${sign}${change}`;
            })
            .join(' ');
    }

    // Choice result display
    showChoiceResult(choice, changes) {
        if (!this.elements.resultPanel) return;

        let effectsHtml = '';
        Object.entries(changes).forEach(([stat, change]) => {
            const label = this.getStatLabel(stat);
            const sign = change > 0 ? '+' : '';
            const className = change > 0 ? 'effect-positive' : 
                             (change < 0 ? 'effect-negative' : 'effect-neutral');
            
            effectsHtml += `<div class="effect-item">
                <span class="${className}">${label}: ${sign}${change}</span>
            </div>`;
        });

        this.elements.resultPanel.innerHTML = `
            <h3>✅ CHÍNH SÁCH ĐÃ THỰC HIỆN</h3>
            <div class="result-description">${choice.text}</div>
            <div class="result-effects">
                <div class="effects-title">📊 Tác Động</div>
                <div class="effects-list">${effectsHtml}</div>
            </div>
            <div style="margin-top: 15px; color: #ffaa00; font-size: 0.9em;">
                ⏳ Chờ ${CONFIG.GAME.CHOICE_COOLDOWN_MS/1000}s để tiếp tục...
            </div>
        `;

        this.show(this.elements.resultPanel);

        setTimeout(() => {
            this.hide(this.elements.resultPanel);
        }, CONFIG.GAME.RESULT_DISPLAY_TIME);
    }

    // Random event display
    showRandomEvent(event, changes) {
        if (!this.elements.randomEvent) return;

        let effectsHtml = '';
        Object.entries(changes).forEach(([stat, change]) => {
            const label = this.getStatLabel(stat);
            const sign = change > 0 ? '+' : '';
            const className = change > 0 ? 'effect-positive' : 
                             (change < 0 ? 'effect-negative' : 'effect-neutral');
            
            effectsHtml += `<div class="effect-item">
                <span class="${className}">${label}: ${sign}${change}</span>
            </div>`;
        });

        this.elements.randomEvent.innerHTML = `
            <div class="event-type">SỰ KIỆN NGẪU NHIÊN</div>
            <div class="event-title">${event.title}</div>
            <div class="event-description">${event.text}</div>
            <div class="event-effects">
                <div class="effects-title">Ảnh Hưởng</div>
                <div class="effects-grid">${effectsHtml}</div>
            </div>
        `;

        this.show(this.elements.randomEvent);
    }

    hideRandomEvent() {
        this.hide(this.elements.randomEvent);
    }

    // Choice state management
    disableAllChoices() {
        this.elements.choicesGrid?.querySelectorAll('.choice').forEach(choice => {
            choice.classList.add('choice-disabled');
            choice.style.opacity = '0.6';
            choice.style.cursor = 'not-allowed';
            choice.style.pointerEvents = 'none';
        });
    }

    enableAllChoices() {
        this.elements.choicesGrid?.querySelectorAll('.choice').forEach(choice => {
            choice.classList.remove('choice-disabled');
            choice.style.opacity = '1';
            choice.style.cursor = 'pointer';
            choice.style.pointerEvents = 'auto';
        });
    }

    // Multiplayer UI
    renderRoomWaiting() {
        if (!this.elements.roomWaiting) return;

        const state = multiplayerManager.getState();
        
        this.elements.roomWaiting.innerHTML = `
            <div class="room-waiting">
                <h2>🏛️ Phòng Chơi: ${state.roomCode}</h2>
                <p>Chia sẻ mã này với bạn bè:</p>
                <div class="room-code">${state.roomCode}</div>
                <button onclick="copyRoomCode()" class="copy-btn">
                    📋 Copy Mã Phòng
                </button>
                
                <div class="players-waiting">
                    <h3>👥 Người Chơi (${state.playerCount}/${state.maxPlayers})</h3>
                    <div id="playersList"></div>
                </div>
                
                <div class="room-status">
                    <p><strong>Trạng thái:</strong> ${socketManager.isConnected ? '🟢 Kết nối' : '🔴 Mất kết nối'}</p>
                    <p><strong>Host:</strong> ${state.isHost ? '👑 Bạn là host' : '👤 Thành viên'}</p>
                    <p><strong>Mode:</strong> ${state.mode ? state.mode.toUpperCase() : 'Unknown'}</p>
                </div>
                
                ${state.isHost ? `
                    <button class="start-game-btn" 
                            id="startGameBtn"
                            onclick="multiplayerManager.startGame()"
                            ${!state.canStart ? 'disabled' : ''}>
                        ${this.getStartButtonText(state)}
                    </button>
                ` : '<p class="waiting-message">⏳ Chờ host bắt đầu game...</p>'}
                
                <button onclick="multiplayerManager.leaveRoom()" class="leave-btn">
                    ❌ Rời Phòng
                </button>
            </div>
        `;

        this.updatePlayersList();
    }

    updatePlayersList() {
        const playersList = document.getElementById('playersList');
        if (!playersList) return;

        const players = multiplayerManager.players;
        if (!players || players.length === 0) {
            playersList.innerHTML = '<p class="no-players">⚠️ Không có người chơi nào</p>';
            return;
        }

        let playersHtml = '';
        players.forEach((player, index) => {
            const isCurrentPlayer = multiplayerManager.currentPlayer && 
                                   player.id === multiplayerManager.currentPlayer.id;
            
            const roleDisplay = this.getPlayerRoleDisplay(player, index);
            
            playersHtml += `
                <div class="player-item ${isCurrentPlayer ? 'current-player' : ''}">
                    <div class="player-color" style="background: ${CONFIG.UI.PLAYER_COLORS[index]}"></div>
                    <div class="player-info">
                        <div class="player-name">
                            ${player.name} 
                            ${player.isHost ? '👑 Host' : ''} 
                            ${isCurrentPlayer ? '(Bạn)' : ''}
                        </div>
                        <div class="player-role">${roleDisplay}</div>
                    </div>
                </div>
            `;
        });
        
        playersList.innerHTML = playersHtml;
    }

    getPlayerRoleDisplay(player, index) {
        const mode = multiplayerManager.mode;
        
        if (mode === 'versus') {
            return player.role === 'government' ? '🏛️ Chính phủ' : 
                   player.role === 'opposition' ? '⚔️ Đối lập' : '🎮 Player';
        } else if (mode === 'competitive') {
            return `🌏 Quốc gia ${index + 1}`;
        } else if (mode === 'cooperative') {
            return player.isHost ? '👑 Thủ tướng' : '🤝 Bộ trưởng';
        }
        
        return '🎮 Player';
    }

    getStartButtonText(state) {
        if (state.playerCount < 2) {
            return `🚫 Cần ít nhất 2 người (${state.playerCount}/2)`;
        } else if (!socketManager.isConnected) {
            return '🔴 Mất kết nối';
        } else {
            return '🎮 Bắt Đầu Game';
        }
    }

    updateMultiplayerStatus() {
        const mpModeTitle = document.getElementById('mpModeTitle');
        if (mpModeTitle) {
            const mode = multiplayerManager.mode;
            const icons = { competitive: '🏆', cooperative: '🤝', versus: '⚔️' };
            mpModeTitle.textContent = `${icons[mode] || '🎮'} ${mode?.toUpperCase() || 'UNKNOWN'}`;
        }

        // Update competitive scores if applicable
        if (multiplayerManager.mode === 'competitive') {
            this.updateCompetitiveScores();
        }
    }

    updateCompetitiveScores(scores) {
        const scoresContainer = document.getElementById('competitiveScores');
        if (!scoresContainer || multiplayerManager.mode !== 'competitive') return;

        let playerScores = scores || multiplayerManager.players.map(player => ({
            id: player.id,
            name: player.name,
            score: player.score || 0,
            color: player.color
        }));

        let scoresHtml = '<h4>🏆 Bảng Xếp Hạng</h4>';
        
        playerScores
            .sort((a, b) => b.score - a.score)
            .forEach((player, index) => {
                const isCurrentPlayer = multiplayerManager.currentPlayer && 
                                       player.id === multiplayerManager.currentPlayer.id;
                
                scoresHtml += `
                    <div class="score-item ${isCurrentPlayer ? 'current-player' : ''}">
                        <span class="rank">#${index + 1}</span>
                        <span class="player-name" style="color: ${player.color}">${player.name}</span>
                        <span class="score">${player.score} điểm</span>
                    </div>
                `;
            });
        
        scoresContainer.innerHTML = scoresHtml;
    }

    // Voting panel (Cooperative mode)
    showVotingPanel(choices) {
        if (!this.elements.votingPanel) return;

        let choicesHtml = '';
        choices.forEach((choice, index) => {
            choicesHtml += `
                <div class="vote-option" onclick="multiplayerManager.castVote(${index})">
                    <h4>${choice.title}</h4>
                    <p>${choice.text}</p>
                    <div class="vote-count" id="voteCount${index}">0 phiếu</div>
                </div>
            `;
        });

        this.elements.votingPanel.innerHTML = `
            <div class="vote-timer" id="voteTimer">30</div>
            <h3>🗳️ Bỏ Phiếu Quyết Định</h3>
            <div class="vote-counts">${choicesHtml}</div>
            <p>Chờ tất cả thành viên bỏ phiếu...</p>
        `;

        this.show(this.elements.votingPanel);
        this.disableAllChoices();
    }

    hideVotingPanel() {
        this.hide(this.elements.votingPanel);
        this.enableAllChoices();
    }

    updateVoteCounts(votes) {
        Object.entries(votes).forEach(([choice, count]) => {
            const voteCountEl = document.getElementById(`voteCount${choice}`);
            if (voteCountEl) {
                voteCountEl.textContent = `${count} phiếu`;
            }
        });
    }

    // Game end
    showGameEnd(ending, finalScore) {
        if (!this.elements.gameEnd) return;

        this.elements.gameEnd.innerHTML = `
            <h2>${ending.title}</h2>
            <div class="ending-description">${ending.description}</div>
            <div class="final-score">Điểm số cuối: ${finalScore}</div>
            <button class="restart-btn" onclick="gameEngine.restartGame()">
                Chơi lại
            </button>
        `;

        this.show(this.elements.gameEnd);
        this.hide(this.elements.choicesGrid);
    }

    hideGameEnd() {
        this.hide(this.elements.gameEnd);
        this.show(this.elements.choicesGrid);
    }

    // Error handling
    showError(message) {
        alert(`❌ Lỗi: ${message}`);
    }

    // Opposition notifications
    showOppositionNotification(message) {
        const notification = this.createElement('div', 'opposition-notification');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 107, 53, 0.9);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 2000;
            font-size: 1.1em;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 4000);
    }

    // Utility methods
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        return element;
    }

    getStatLabel(stat) {
        const labels = {
            discontent: 'Bất Mãn',
            conflict: 'Xung Đột',
            economy: 'Kinh Tế',
            environment: 'Môi Trường',
            freedom: 'Tự Do',
            security: 'An Ninh'
        };
        return labels[stat] || stat;
    }
}

// Singleton instance
const uiManager = new UIManager();
