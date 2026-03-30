/**
 * The Ostracism Game
 * An interactive demonstration of how governance works as a club good.
 *
 * Based on Seth C. Oranburg, "Private" Governance Is Actually a Club Good (2026).
 *
 * Portable: embed anywhere with:
 *   <div id="ostracism-game"></div>
 *   <script src="ostracism-game.js"></script>
 *   <script>OstracismGame.init('ostracism-game')</script>
 *
 * No dependencies. Pure vanilla JS + inline CSS.
 */

var OstracismGame = (function () {
  'use strict';

  // --- Configuration ---
  var CONFIG = {
    totalRounds: 8,
    networkSize: 20,       // other members in the network
    cooperatePayoff: 10,   // per-round payoff for cooperating
    defectPayoff: 25,      // per-round payoff for defecting (if not caught)
    catchProbability: 0.7,  // probability of being caught defecting
    ostracismCost: -200,   // total career cost of being expelled (property rule)
    damagesFine: 15,       // one-time fine if caught under liability rule
    nonMemberBaseline: 100, // non-member welfare at full governance quality
    qualityDecayRate: 0.08, // governance quality lost per defection in the network
  };

  var state, container;

  // --- State ---
  function freshState() {
    return {
      mode: null,            // 'property' or 'liability'
      round: 0,
      score: 0,
      expelled: false,
      choices: [],
      caught: [],
      networkDefections: 0,
      governanceQuality: 1.0, // 1.0 = perfect, 0.0 = collapsed
      nonMemberWelfare: CONFIG.nonMemberBaseline,
      history: [],
      gameOver: false,
    };
  }

  // --- Rendering ---
  function render() {
    if (!state.mode) { renderModeSelect(); return; }
    if (state.gameOver || state.expelled) { renderResults(); return; }
    renderRound();
  }

  function renderModeSelect() {
    container.innerHTML = ''
      + '<div class="og-panel og-intro">'
      + '<h2 class="og-title">The Ostracism Game</h2>'
      + '<p class="og-subtitle">How governance works as a club good &mdash; and what happens when courts intervene.</p>'
      + '<div class="og-scenario">'
      + '<p>You are a diamond dealer in a trading network of ' + CONFIG.networkSize + ' members. '
      + 'Each round, you make a deal. You can <strong>honor</strong> it or <strong>cheat</strong>.</p>'
      + '<p>The network governs itself through one mechanism: the credible threat of <strong>ostracism</strong>. '
      + 'Cheaters get expelled. But how the network enforces this rule depends on the legal regime.</p>'
      + '</div>'
      + '<p class="og-choose-label">Choose the legal regime:</p>'
      + '<div class="og-mode-buttons">'
      + '<button class="og-btn og-btn-property" onclick="OstracismGame.startGame(\'property\')">'
      + '<strong>Property Rule</strong><br>'
      + '<span class="og-btn-desc">The network controls expulsion.<br>No court review. Ostracism is final.</span>'
      + '</button>'
      + '<button class="og-btn og-btn-liability" onclick="OstracismGame.startGame(\'liability\')">'
      + '<strong>Liability Rule</strong><br>'
      + '<span class="og-btn-desc">Courts can override expulsion.<br>Cheaters pay a fine but stay in.</span>'
      + '</button>'
      + '</div>'
      + '<p class="og-credit">Based on <a href="https://dx.doi.org/10.2139/ssrn.6439378" target="_blank">&ldquo;Private&rdquo; Governance Is Actually a Club Good</a> by Seth C. Oranburg (2026).</p>'
      + '</div>';
  }

  function renderRound() {
    var roundNum = state.round + 1;
    var qualityPct = Math.round(state.governanceQuality * 100);
    var qualityColor = qualityPct > 60 ? '#4ade80' : qualityPct > 30 ? '#fbbf24' : '#f87171';
    var modeLabel = state.mode === 'property' ? 'Property Rule (network controls)' : 'Liability Rule (courts override)';

    container.innerHTML = ''
      + '<div class="og-panel">'
      + '<div class="og-header">'
      + '<div class="og-round">Round ' + roundNum + ' of ' + CONFIG.totalRounds + '</div>'
      + '<div class="og-mode-tag">' + modeLabel + '</div>'
      + '</div>'

      // Dashboard
      + '<div class="og-dashboard">'
      + '<div class="og-stat">'
      + '<div class="og-stat-label">Your Score</div>'
      + '<div class="og-stat-value">' + state.score + '</div>'
      + '</div>'
      + '<div class="og-stat">'
      + '<div class="og-stat-label">Governance Quality</div>'
      + '<div class="og-stat-value" style="color:' + qualityColor + '">' + qualityPct + '%</div>'
      + '<div class="og-quality-bar"><div class="og-quality-fill" style="width:' + qualityPct + '%;background:' + qualityColor + '"></div></div>'
      + '</div>'
      + '<div class="og-stat">'
      + '<div class="og-stat-label">Non-Member Welfare</div>'
      + '<div class="og-stat-value">' + Math.round(state.nonMemberWelfare) + '</div>'
      + '</div>'
      + '</div>'

      // Network activity (other members defecting in liability mode)
      + (state.networkDefections > 0
        ? '<div class="og-network-alert">' + state.networkDefections + ' other member' + (state.networkDefections > 1 ? 's have' : ' has') + ' defected this game. Governance is weakening.</div>'
        : '')

      // Decision
      + '<div class="og-decision">'
      + '<p class="og-decision-prompt">A counterparty offers you a deal worth <strong>' + CONFIG.cooperatePayoff + ' points</strong>. You can honor it &mdash; or cheat for <strong>' + CONFIG.defectPayoff + ' points</strong>.</p>'
      + '<div class="og-decision-buttons">'
      + '<button class="og-btn og-btn-cooperate" onclick="OstracismGame.choose(\'cooperate\')">Honor the Deal<br><span class="og-btn-payoff">+' + CONFIG.cooperatePayoff + ' points (safe)</span></button>'
      + '<button class="og-btn og-btn-defect" onclick="OstracismGame.choose(\'defect\')">Cheat<br><span class="og-btn-payoff">+' + CONFIG.defectPayoff + ' points (if not caught)</span></button>'
      + '</div>'
      + '</div>'

      // History
      + renderHistory()
      + '</div>';
  }

  function renderHistory() {
    if (state.history.length === 0) return '';
    var rows = '';
    for (var i = state.history.length - 1; i >= 0; i--) {
      var h = state.history[i];
      var icon = h.choice === 'cooperate' ? '&#9745;' : (h.caught ? '&#9888;' : '&#9746;');
      var cls = h.choice === 'cooperate' ? 'og-hist-coop' : (h.caught ? 'og-hist-caught' : 'og-hist-defect');
      rows += '<div class="og-hist-row ' + cls + '">'
        + '<span class="og-hist-round">R' + h.round + '</span> '
        + '<span class="og-hist-icon">' + icon + '</span> '
        + '<span class="og-hist-desc">' + h.description + '</span> '
        + '<span class="og-hist-points">' + (h.points >= 0 ? '+' : '') + h.points + '</span>'
        + '</div>';
    }
    return '<div class="og-history"><div class="og-hist-label">History</div>' + rows + '</div>';
  }

  function renderResults() {
    var qualityPct = Math.round(state.governanceQuality * 100);
    var modeLabel = state.mode === 'property' ? 'Property Rule' : 'Liability Rule';
    var expelled = state.expelled;

    var insight = '';
    if (state.mode === 'property') {
      if (expelled) {
        insight = '<p>You were <strong>expelled</strong>. Under the property rule, the network\'s ostracism is final. Your career in this market is over. But the network\'s governance remained credible &mdash; other members continued to cooperate because they saw that cheating has real consequences.</p>'
          + '<p>Non-member welfare: <strong>' + Math.round(state.nonMemberWelfare) + '</strong>. Downstream consumers still benefit from low fraud rates because the governance mechanism works.</p>';
      } else {
        insight = '<p>You honored every deal. Under the property rule, cooperation is the rational strategy because the cost of expulsion (' + Math.abs(CONFIG.ostracismCost) + ' points &mdash; your entire career) far exceeds the gain from cheating (' + CONFIG.defectPayoff + ' points per round).</p>'
          + '<p>Governance quality: <strong>' + qualityPct + '%</strong>. Non-member welfare: <strong>' + Math.round(state.nonMemberWelfare) + '</strong>. The club good is intact.</p>';
      }
    } else {
      insight = '<p>Under the liability rule, courts override the network\'s expulsion decisions. Cheaters pay a fine of ' + CONFIG.damagesFine + ' points but <strong>stay in the network</strong>.</p>'
        + '<p>Result: ' + state.networkDefections + ' members defected over ' + CONFIG.totalRounds + ' rounds. Governance quality fell to <strong>' + qualityPct + '%</strong>. Non-member welfare dropped to <strong>' + Math.round(state.nonMemberWelfare) + '</strong> (from ' + CONFIG.nonMemberBaseline + ').</p>'
        + '<p>The court intended to protect the expelled member. But by converting exclusion from a property rule to a liability rule, it weakened the ostracism mechanism that made cooperation rational. Members defected because the cost of getting caught (a fine) was less than the gain from cheating. The club good degraded toward a public good &mdash; and non-members bore the heaviest costs.</p>';
    }

    container.innerHTML = ''
      + '<div class="og-panel og-results">'
      + '<h2 class="og-title">Game Over</h2>'
      + '<div class="og-results-header">'
      + '<div class="og-result-stat"><div class="og-result-label">Mode</div><div class="og-result-val">' + modeLabel + '</div></div>'
      + '<div class="og-result-stat"><div class="og-result-label">Your Score</div><div class="og-result-val">' + state.score + '</div></div>'
      + '<div class="og-result-stat"><div class="og-result-label">Governance</div><div class="og-result-val">' + qualityPct + '%</div></div>'
      + '<div class="og-result-stat"><div class="og-result-label">Non-Member Welfare</div><div class="og-result-val">' + Math.round(state.nonMemberWelfare) + '</div></div>'
      + '</div>'
      + '<div class="og-insight">' + insight + '</div>'
      + '<div class="og-paradox">'
      + '<h3>The Paradox</h3>'
      + '<p>The court that overrides a network\'s expulsion does not merely redistribute wealth from the network to the excluded member. It weakens the ostracism mechanism itself. The club good degrades. Non-members &mdash; who never participated and never paid &mdash; lose the benefits they received for free.</p>'
      + '<p><em>Awarding damages does not transfer a right from one party who values it less to another who values it more. Awarding damages degrades the right.</em></p>'
      + '</div>'
      + '<div class="og-actions">'
      + '<button class="og-btn og-btn-replay" onclick="OstracismGame.restart()">Play Again</button>'
      + '<button class="og-btn og-btn-switch" onclick="OstracismGame.switchMode()">Try ' + (state.mode === 'property' ? 'Liability' : 'Property') + ' Rule</button>'
      + '</div>'
      + '<p class="og-credit">Based on <a href="https://dx.doi.org/10.2139/ssrn.6439378" target="_blank">&ldquo;Private&rdquo; Governance Is Actually a Club Good</a> by Seth C. Oranburg (2026).</p>'
      + '</div>';
  }

  // --- Game Logic ---
  function choose(choice) {
    var h = { round: state.round + 1, choice: choice, caught: false, points: 0, description: '' };

    if (choice === 'cooperate') {
      h.points = CONFIG.cooperatePayoff;
      h.description = 'Honored the deal.';
      state.score += h.points;
    } else {
      // Defect
      var caught = Math.random() < CONFIG.catchProbability;
      h.caught = caught;

      if (state.mode === 'property') {
        if (caught) {
          h.points = CONFIG.ostracismCost;
          h.description = 'Caught cheating. Expelled from the network. Career over.';
          state.score += h.points;
          state.expelled = true;
        } else {
          h.points = CONFIG.defectPayoff;
          h.description = 'Cheated and got away with it... this time.';
          state.score += h.points;
        }
      } else {
        // Liability rule
        if (caught) {
          h.points = CONFIG.defectPayoff - CONFIG.damagesFine;
          h.description = 'Caught cheating. Court orders fine of ' + CONFIG.damagesFine + '. You stay in the network.';
          state.score += h.points;
          state.governanceQuality = Math.max(0, state.governanceQuality - CONFIG.qualityDecayRate * 2);
        } else {
          h.points = CONFIG.defectPayoff;
          h.description = 'Cheated and got away with it.';
          state.score += h.points;
        }
        // Under liability rule, other network members also defect more
        simulateNetworkDefections();
      }
    }

    state.history.push(h);
    state.round++;
    state.nonMemberWelfare = CONFIG.nonMemberBaseline * state.governanceQuality;

    if (state.round >= CONFIG.totalRounds) {
      state.gameOver = true;
    }

    render();
  }

  function simulateNetworkDefections() {
    // Under liability rule, some other members defect each round
    // More defect as governance quality drops (positive feedback loop)
    var defectionRate = 0.1 + (1 - state.governanceQuality) * 0.3;
    var newDefections = 0;
    for (var i = 0; i < CONFIG.networkSize; i++) {
      if (Math.random() < defectionRate) newDefections++;
    }
    state.networkDefections += newDefections;
    state.governanceQuality = Math.max(0, state.governanceQuality - newDefections * CONFIG.qualityDecayRate);
  }

  function startGame(mode) {
    state = freshState();
    state.mode = mode;
    render();
  }

  function restart() {
    startGame(state.mode);
  }

  function switchMode() {
    startGame(state.mode === 'property' ? 'liability' : 'property');
  }

  // --- Styles ---
  function injectStyles() {
    if (document.getElementById('og-styles')) return;
    var style = document.createElement('style');
    style.id = 'og-styles';
    style.textContent = ''
      + '.og-panel{max-width:680px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#e5e5e5;}'
      + '.og-intro{text-align:center;}'
      + '.og-title{font-size:1.8rem;font-weight:700;color:#6dacde;margin:0 0 0.5rem;}'
      + '.og-subtitle{color:#9ca3af;font-size:1.05rem;margin:0 0 1.5rem;}'
      + '.og-scenario{background:#0a3255;border-radius:8px;padding:1.2rem 1.5rem;margin:0 0 1.5rem;text-align:left;line-height:1.7;}'
      + '.og-scenario p{margin:0 0 0.8rem;}'
      + '.og-choose-label{font-weight:600;margin:0 0 0.8rem;color:#b5e1e1;}'
      + '.og-mode-buttons{display:flex;gap:1rem;margin:0 0 1.5rem;}'
      + '@media(max-width:600px){.og-mode-buttons{flex-direction:column;}}'
      + '.og-btn{flex:1;padding:1rem;border-radius:8px;border:2px solid #1e5080;background:#0a3255;color:#e5e5e5;cursor:pointer;font-size:0.95rem;text-align:center;transition:border-color 0.2s,transform 0.2s;}'
      + '.og-btn:hover{border-color:#6dacde;transform:translateY(-2px);}'
      + '.og-btn strong{display:block;font-size:1.1rem;color:#6dacde;margin-bottom:0.3rem;}'
      + '.og-btn-desc{font-size:0.8rem;color:#9ca3af;}'
      + '.og-btn-payoff{font-size:0.8rem;color:#9ca3af;}'
      + '.og-btn-property:hover{border-color:#4ade80;} .og-btn-property:hover strong{color:#4ade80;}'
      + '.og-btn-liability:hover{border-color:#fbbf24;} .og-btn-liability:hover strong{color:#fbbf24;}'
      + '.og-btn-cooperate{border-color:#1e5080;} .og-btn-cooperate:hover{border-color:#4ade80;background:#0d3d68;}'
      + '.og-btn-defect{border-color:#1e5080;} .og-btn-defect:hover{border-color:#f87171;background:#0d3d68;}'
      + '.og-btn-replay,.og-btn-switch{min-width:140px;}'
      + '.og-header{display:flex;justify-content:space-between;align-items:center;margin:0 0 1rem;}'
      + '.og-round{font-weight:700;font-size:1.1rem;color:#6dacde;}'
      + '.og-mode-tag{font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;background:#0a3255;padding:0.25rem 0.6rem;border-radius:4px;}'
      + '.og-dashboard{display:flex;gap:1rem;margin:0 0 1rem;}'
      + '.og-stat{flex:1;background:#0a3255;border-radius:8px;padding:0.8rem;text-align:center;}'
      + '.og-stat-label{font-size:0.7rem;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;margin:0 0 0.3rem;}'
      + '.og-stat-value{font-size:1.4rem;font-weight:700;}'
      + '.og-quality-bar{height:4px;background:#1e5080;border-radius:2px;margin:0.4rem 0 0;overflow:hidden;}'
      + '.og-quality-fill{height:100%;border-radius:2px;transition:width 0.4s;}'
      + '.og-network-alert{background:#7c2d12;border-radius:6px;padding:0.6rem 1rem;margin:0 0 1rem;font-size:0.85rem;color:#fbbf24;}'
      + '.og-decision{background:#0a3255;border-radius:8px;padding:1.2rem;margin:0 0 1rem;}'
      + '.og-decision-prompt{margin:0 0 1rem;line-height:1.6;}'
      + '.og-decision-buttons{display:flex;gap:0.8rem;}'
      + '@media(max-width:600px){.og-decision-buttons{flex-direction:column;}}'
      + '.og-history{margin:1rem 0 0;}'
      + '.og-hist-label{font-size:0.7rem;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;margin:0 0 0.4rem;}'
      + '.og-hist-row{display:flex;align-items:center;gap:0.5rem;padding:0.3rem 0.5rem;border-radius:4px;font-size:0.85rem;margin:0 0 2px;}'
      + '.og-hist-coop{background:rgba(74,222,128,0.08);}'
      + '.og-hist-defect{background:rgba(251,191,36,0.08);}'
      + '.og-hist-caught{background:rgba(248,113,113,0.1);}'
      + '.og-hist-round{color:#9ca3af;min-width:1.8rem;}'
      + '.og-hist-desc{flex:1;}'
      + '.og-hist-points{font-weight:600;min-width:3rem;text-align:right;}'
      + '.og-results-header{display:flex;gap:0.8rem;margin:1.2rem 0;}'
      + '.og-result-stat{flex:1;background:#0a3255;border-radius:8px;padding:0.8rem;text-align:center;}'
      + '.og-result-label{font-size:0.65rem;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;}'
      + '.og-result-val{font-size:1.2rem;font-weight:700;color:#6dacde;margin-top:0.2rem;}'
      + '.og-insight{background:#0d3d68;border-left:4px solid #6dacde;border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin:1rem 0;line-height:1.7;}'
      + '.og-insight p{margin:0 0 0.8rem;} .og-insight p:last-child{margin:0;}'
      + '.og-paradox{background:#0a3255;border-left:4px solid #b21f2c;border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin:1rem 0;}'
      + '.og-paradox h3{color:#b21f2c;font-size:1rem;margin:0 0 0.5rem;}'
      + '.og-paradox p{margin:0 0 0.8rem;line-height:1.7;} .og-paradox em{color:#b5e1e1;}'
      + '.og-actions{display:flex;gap:0.8rem;justify-content:center;margin:1.5rem 0;}'
      + '.og-credit{text-align:center;font-size:0.75rem;color:#9ca3af;margin:1rem 0 0;}'
      + '.og-credit a{color:#6dacde;}';
    document.head.appendChild(style);
  }

  // --- Public API ---
  return {
    init: function (elementId) {
      container = document.getElementById(elementId);
      if (!container) { console.error('OstracismGame: element #' + elementId + ' not found'); return; }
      injectStyles();
      state = freshState();
      render();
    },
    startGame: startGame,
    choose: choose,
    restart: restart,
    switchMode: switchMode,
  };
})();
