import React, { useState } from 'react';
import { monsters } from "./data/monsters-data";

import CharacterContainer from './components/CharacterInfoContainer';
import ButtonsContainer from './components/ButtonsContainer';
import CombatLogsContainer from './components/CombatLogsContainer';

function getDamageMessage(atk, mag) {
  let atkPointsInteger = parseInt(atk)
  let magPointsInteger = parseInt(mag)
  
  if (atkPointsInteger > magPointsInteger) {
    return "The player dealt: " + atk + " damage points | [Offensive stat: ATK]"
  }
  else if (magPointsInteger > atkPointsInteger) {
    return "The player dealt: " + mag + " damage points | [Offensive stat: MAG]"
  } 
  else if (atkPointsInteger === magPointsInteger) { // on equals, set the offensive stat to ATK
    return "The player dealt: " + atk + " damage points | [Offensive stat: ATK]"
  }
}

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

  /* player - normal attack (could be either ATK or MAG) */
  function attackMonster(playerStatsDataArr) {
    let playerATK = playerStatsDataArr[1].statValue
    let playerMAG = playerStatsDataArr[2].statValue
    let newMessage = getDamageMessage(playerATK, playerMAG)
    setDamageLogsData(prevState => 
      [...prevState, newMessage]
    )
  }

  /* monster - normal attack (always based on ATK) */
  function attackPlayer(enemyStatsDataArr, playerStatsDataArr) {
    let enemyAttackStat = enemyStatsDataArr[1].statValue
    let playerDefenceStat = playerStatsDataArr[3].statValue
    let damageDealt = enemyAttackStat - playerDefenceStat // formula

    if (damageDealt < 0) {
      damageDealt = 0
    }

    let newTextMessage = "The enemy dealt: " + damageDealt + " damage points | [Offensive stat: ATK] | [Player's defensive stat: DEF]"
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
