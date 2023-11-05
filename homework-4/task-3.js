class Warrior {
    _AVAILABLE_RANKS = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

    _experience = 100;
    _level = 1;
    _rank = this._AVAILABLE_RANKS[0];
    _achievements = [];

    #updateInfo(){
        // update experience
        if (this._experience > 10000) {
            this._experience = 10000;
        }

        // update level
        const currentLevel = this._level;
        const updatedLevel = Math.floor(this._experience / 100);

        if (updatedLevel > 100) {
            this._level = 100;
        }

        if (updatedLevel > currentLevel) {
            this._level = updatedLevel;
        }

        // update rank
        const currentRankIndex = this._AVAILABLE_RANKS.indexOf(this._rank);
        const updatedRankIndex = Math.floor(this._level / 10);

        if (updatedRankIndex >= this._AVAILABLE_RANKS.length) {
            this._rank = this._AVAILABLE_RANKS.at(-1);
        }

        if (updatedRankIndex > currentRankIndex) {
            this._rank = this._AVAILABLE_RANKS[updatedRankIndex];
        }

    }

    level() {
        return this._level;
    }


    rank() {
        return this._rank;
    }

    experience() {
        return this._experience;
    }

    achievements() {
        return this._achievements;
    }

    training([description, experience, levelRequired]) {
        let message;

        if (levelRequired <= this._level) {
            this._experience += experience;
            this._achievements.push(description);

            this.#updateInfo();
            return description;
        }
        return "Not strong enough";
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const levelsDiff = enemyLevel - this._level;

        const enemyRankIndex = Math.floor(enemyLevel / 10);
        const warriorRankIndex = this._AVAILABLE_RANKS.indexOf(this._rank);
        const ranksDiff = enemyRankIndex - warriorRankIndex;

        let message;

        if (levelsDiff >= 5 && ranksDiff >= 1) {
            message = "You've been defeated";
        }

        if (levelsDiff >= 1 && ranksDiff === 0 || levelsDiff < 5 && ranksDiff === 1) {
            this._experience += 20 * (levelsDiff ** 2);
            message = "An intense fight";
        }

        if (levelsDiff === 0) {
            this._experience += 10;
            message = "A good fight";
        }

        if (levelsDiff === -1) {
            this._experience += 5;
            message = "A good fight";
        }

        if(levelsDiff < -1){
            message = "Easy fight";
        }

        this.#updateInfo();
        return message;
    }
}

const bruce_lee = new Warrior();
bruce_lee.level();
bruce_lee.training(["Defeated Chuck Norris", 9000, 1]);
console.log(bruce_lee.level());
