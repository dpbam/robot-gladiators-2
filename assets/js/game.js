var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  // repeat and execute as long as the enemy robot is alive
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === 'SKIP') {
      window.alert(playerName + ' has chosen to skip the fight!');
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Good-bye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log('playerMoney', playerMoney);
        // if (playerMoney <= 0) {
        //   break;
        // }
        break;
      }
    }

    // if player chooses to fight, then fight
    if (promptFight === 'fight' || promptFight === 'FIGHT') {
      // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
      enemyHealth = enemyHealth - playerAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(
        playerName +
          ' attacked ' +
          enemyName +
          '. ' +
          enemyName +
          ' now has ' +
          enemyHealth +
          ' health remaining.'
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');

        // award player money for winning
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }

      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(
        enemyName +
          ' attacked ' +
          playerName +
          '.' +
          playerName +
          ' now has ' +
          playerHealth +
          ' health remaining.'
      );

      // check players health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(
          playerName + ' still has ' + playerHealth + ' health left.'
        );
      }
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
