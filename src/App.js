import React, { useState } from 'react';
import { monsters } from "./data/monsters-data";

import CharacterContainer from './components/CharacterInfoContainer';
import ButtonsContainer from './components/ButtonsContainer';
import CombatLogsContainer from './components/CombatLogsContainer';

function App() {

  const [enemyStatsData, setEnemyStatsData] = useState(monsters.shinobi)

  const [playerStatsData, setPlayerStatsData] = useState([
    { statName: 'HP', statValue: 100, statMultiplier: 0 },
    { statName: 'ATK', statValue: 10, statMultiplier: 0 },
    { statName: 'MAG', statValue: 10, statMultiplier: 0 },
    { statName: 'DEF', statValue: 10, statMultiplier: 0 },
    { statName: 'SPR', statValue: 10, statMultiplier: 0 }
  ])

  const [damageLogsData, setDamageLogsData] = useState([])

  function updatePlayerStats(newStatsDataArr) {
    setPlayerStatsData(newStatsDataArr)
  }

  function updateEnemyStats(newStatsDataArr) {
    setEnemyStatsData(newStatsDataArr)
  }

  /* player - normal attack */
  function attackMonster(playerStatsDataArr) {
    let playerAttackStat = playerStatsDataArr[1].statValue
    let newTextMessage = "The player dealt: " + playerAttackStat + " damage points"
    setDamageLogsData(prevState => 
      [...prevState, newTextMessage]
    )
  }

  /* monster - normal attack */
  function attackPlayer(enemyStatsDataArr, playerStatsDataArr) {
    let enemyAttackStat = enemyStatsDataArr[1].statValue
    let playerDefenceStat = playerStatsDataArr[3].statValue
    let damageDealt = enemyAttackStat - playerDefenceStat // formula
    if (damageDealt < 0) {
      damageDealt = 0
    }
    let newTextMessage = "The enemy dealt: " + damageDealt + " damage points"
    setDamageLogsData(prevState => 
      [...prevState, newTextMessage]
    )
  }

  return (
    <div className="App">
      <CharacterContainer 
        name="Player" 
        stats={playerStatsData} 
        displayBuildSelector={true} 
        updateCharacterStats={updatePlayerStats} 
      />
      <ButtonsContainer 
        playerStats={playerStatsData}
        enemyStats={enemyStatsData}
        attackMonster={attackMonster}
        attackPlayer={attackPlayer}
      />
      <CharacterContainer 
        name="Monster" 
        stats={enemyStatsData} 
        displayMonsterSelector={true}
        updateCharacterStats={updateEnemyStats}
      />
      <CombatLogsContainer damageLogs={damageLogsData} />
    </div>
  );
}

export default App;
