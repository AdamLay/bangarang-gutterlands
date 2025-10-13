"use client";

import { factions, weapons, WeaponType } from "@/lib/data";
import { sum, sumBy } from "lodash";
import { useMechBuilder } from "@/contexts/MechBuilderContext";

interface MechBuilderProps {}

export default function MechBuilder({}: MechBuilderProps) {
  const { selectedFaction, setSelectedFaction, arm1, setArm1, arm2, setArm2 } = useMechBuilder();
  const factionObj = factions.find((f) => f.name === selectedFaction);
  const arm1Obj = weapons.find((w) => w.name === arm1);
  const arm2Obj = weapons.find((w) => w.name === arm2);

  // Group weapons by type
  const weaponTypes = ["Ranged", "Melee", "Hand"];
  const weaponTypeLabels: Record<string, string> = {
    Ranged: "Ranged Weapons",
    Melee: "Melee Weapons",
    Hand: "Hand",
  };
  const weaponsByType: Record<string, typeof weapons> = {
    Ranged: weapons.filter((w) => w.type === 0),
    Melee: weapons.filter((w) => w.type === 1),
    Hand: weapons.filter((w) => w.type === 2),
  };

  const comboRule = (() => {
    if (arm1Obj && arm2Obj) {
      const types = [WeaponType[arm1Obj.type], WeaponType[arm2Obj.type]].sort().join("|");
      switch (types) {
        case "Melee|Ranged":
          return "Bot can do all the things a normal bot can do.";
        case "Hand|Melee":
          return "Bot suffers HALF damage falling (rounded up) and no damage from being pushed into Stacks, using its spare hand to grab stuff whilst falling";
        case "Hand|Ranged":
          return "Can aim much better, reroll misses that target the side or rear of an enemy Bot. This can be used in conjunction with the reroll afforded by being at close range (i.e. can reroll twice)";
        case "Melee|Melee":
          return "Bot is 2” faster when making any move action. Cannot perform Bash actions with 1 or more Blast Tokens";
        case "Ranged|Ranged":
          return "The first time you Shoot in a Turn does not generate a blast token for your Bot. Cannot Bash!";
        case "Hand|Hand":
          return "Bot suffers HALF damage falling (rounded up) and no damage from being pushed into Stacks, using its hands to grab stuff whilst falling. When making a Bash action, you may opt to make a special Grapple action. If you choose to Grapple, make a Bash attack as normal and once you have applied damage - but before the effects of “Something interesting happens” happen (if they do) - you may rotate the target bot on the spot to any orientation you wish. This rotation can occur even if the bash action misses.";
      }
    }
    return "";
  })();

  return (
    <div className="flex flex-col gap-4">
      <select
        className="select w-full"
        value={selectedFaction}
        onChange={(e) => setSelectedFaction(e.target.value)}>
        <option value="" disabled>
          Pick a faction
        </option>
        {factions.map((f) => (
          <option key={f.name} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>
      {factionObj && (
        <div className="card-1">
          <div className="card-body">
            <span className="font-bold">{factionObj.name} Rule:</span>
            <div className="text-sm whitespace-pre-line mt-1">{factionObj.rule}</div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mt-4 font-semibold">Arm 1</label>
          <select className="select w-full" value={arm1} onChange={(e) => setArm1(e.target.value)}>
            <option value="" disabled>
              Select weapon for Arm 1
            </option>
            {weaponTypes.map((type) => (
              <optgroup key={type} label={weaponTypeLabels[type]}>
                {weaponsByType[type].map((w) => (
                  <option key={w.name} value={w.name}>
                    {w.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {arm1Obj && (
            <div className="card-1 mt-2">
              <div className="card-body">
                <span className="font-bold">{arm1Obj.name} Rule:</span>
                <div className="text-sm whitespace-pre-line mt-1">{arm1Obj.rule}</div>
              </div>
            </div>
          )}
        </div>
        <div>
          <label className="mt-2 font-semibold">Arm 2</label>
          <select className="select w-full" value={arm2} onChange={(e) => setArm2(e.target.value)}>
            <option value="" disabled>
              Select weapon for Arm 2
            </option>
            {weaponTypes.map((type) => (
              <optgroup key={type} label={weaponTypeLabels[type]}>
                {weaponsByType[type].map((w) => (
                  <option key={w.name} value={w.name}>
                    {w.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {arm2Obj && (
            <div className="card-1 mt-2">
              <div className="card-body">
                <span className="font-bold">{arm2Obj.name} Rule:</span>
                <div className="text-sm whitespace-pre-line mt-1">{arm2Obj.rule}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {comboRule && (
        <div className="card-1 mt-4">
          <div className="card-body">
            <span className="font-bold">Combo Rule:</span>
            <div className="text-sm whitespace-pre-line mt-1">{comboRule}</div>
          </div>
        </div>
      )}
    </div>
  );
}
