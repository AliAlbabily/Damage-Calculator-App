import React, { useState } from 'react';

import CharacterContainer from './components/CharacterInfoContainer';
import ButtonsContainer from './components/ButtonsContainer';
import CombatLogsContainer from './components/CombatLogsContainer';

function App() {

  const enemyStatsData = [
    { statName: 'HP', statValue: 500, statMultiplier: 0 },
    { statName: 'ATK', statValue: 40, statMultiplier: 0 },
    { statName: 'MAG', statValue: 0, statMultiplier: 0 },
    { statName: 'DEF', statValue: 0, statMultiplier: 0 },
    { statName: 'SPR', statValue: 0, statMultiplier: 0 }
  ]

  const [playerStatsData, setPlayerStatsData] = useState([
    { statName: 'HP', statValue: 100, statMultiplier: 0 },
    { statName: 'ATK', statValue: 10, statMultiplier: 0 },
    { statName: 'MAG', statValue: 10, statMultiplier: 0 },
    { statName: 'DEF', statValue: 10, statMultiplier: 0 },
    { statName: 'SPR', statValue: 10, statMultiplier: 0 }
  ])

  const [damageLogsData, setDamageLogsData] = useState([])

  function updateStatsData(newStatsDataArr) {
    setPlayerStatsData(newStatsDataArr)
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
        displayBuildSelecter={true} 
        updateCharacterStats={updateStatsData} 
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
        displayBuildSelecter={false} 
      />
      <CombatLogsContainer damageLogs={damageLogsData} />
    </div>
  );
}

export default App;
