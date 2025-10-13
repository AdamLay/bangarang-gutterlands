type Faction = {
  name: string;
  rule: string;
};

export const factions: Faction[] = [
  {
    name: "Beadbots",
    rule: `Beadbots start the game with 14 HP. They are also susceptible to glitching. Once per game after you have declared your actions, one of your opponents (the first to do it) may call out “Glitching” and they can change the order in which you must do your stated actions.`,
  },
  {
    name: "The Junkers",
    rule: `A Junker’s RustBot can reroll any roll on two separate occasions in a game. This overrules other faction abilities.
    The first time see if something interesting happens, they they lose a hit point,
    and after the attacker has checked to see if something interesting happens, they HAVE to roll on the “something interesting happens” table.
    If the first hit would have made this happen anyway, they must roll a second time as their bot suffers`,
  },
  {
    name: "The Uppers",
    rule: `- Twice a game these Bots can do 4 actions a Turn.
    Any time you have to roll on the “Something Interesting Happens” table, theplayer that caused you to roll on the table may make you re-roll the result if they wish.
    Each enemy player may make you do this once. The new result must be adhered to.`,
  },
  {
    name: "The Meaty Ones",
    rule: `At the end of every Round roll a d6, and on a 5 or 6 they regain 2HP (This can never take them above their starting number of HP).
    MeatyBots must end their Turn in base to base contact with (or on) a terrain piece.
    If a MeatBot ends its Turn exposed away from (and not touching) terrain it automatically loses 2 hit points`,
  },
];

export enum WeaponType {
  Ranged,
  Melee,
  Hand,
}

type Weapon = {
  type: WeaponType;
  name: string;
  rule: string;
  damage: number;
};

export const weapons: Weapon[] = [
  {
    type: WeaponType.Ranged,
    name: "Blaster",
    rule: `Causes 2HP damage.`,
    damage: 2,
  },
  {
    type: WeaponType.Ranged,
    name: "Burner",
    rule: `Causes 1HP damage. Can only target enemies within 6". Gives target a blast marker. Always counts as shooting at the side facing.`,
    damage: 1,
  },
  {
    type: WeaponType.Ranged,
    name: "Boomer",
    rule: `Causes 1 HP damage. Can target enemies out of line of sight, but still in your Bots front arc. Cannot target Bots underneath Bridges.
Always counts as targeting front-facing of enemy Bot if shooting at a target out of line of sight.`,
    damage: 1,
  },
  {
    type: WeaponType.Ranged,
    name: "Zapper",
    rule: `Causes 1 HP damage. Target loses an action next turn if you rolled an unmodified 6 to hit.`,
    damage: 1,
  },
  {
    type: WeaponType.Melee,
    name: "Cutter",
    rule: `Causes 2 HP damage.`,
    damage: 2,
  },
  {
    type: WeaponType.Melee,
    name: "Whacker",
    rule: `Causes 1 HP damage. Enemy is moved 2” directly away from Bot if Bashed. This can cause an enemy to hit obstructions and to fall.
The player doing the bashing chooses which direction the Bot is moved.`,
    damage: 1,
  },
  {
    type: WeaponType.Melee,
    name: "Shield",
    rule: `Makes your bot harder to hit when being bashed. +1 to “to hit” value when being bashed, regardless of facing.`,
    damage: 0,
  },
  {
    type: WeaponType.Melee,
    name: "Crusher",
    rule: `Causes 1 HP damage. Gives target a blast marker when Bashing`,
    damage: 1,
  },
  {
    type: WeaponType.Hand,
    name: "Hand",
    rule: `Causes 1 HP damage. Melee only.`,
    damage: 1,
  },
];
