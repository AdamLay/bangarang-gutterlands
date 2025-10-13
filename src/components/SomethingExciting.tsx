import { MessageCircleWarning, TriangleAlert } from "lucide-react";

export default function SomethingExciting() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl">“Something Exciting Happens” Table</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <span className="text-title">Weapon Offline</span> - You must choose a weapon system or hand to be
          unusable for the rest of the game. If you already have no weapon systems or hands, lose D4 Hit
          Points.
        </li>
        <li>
          <span className="text-title">Unfriendly Nanites</span> - One of the many unseen roaming clouds of
          nanites happened to be passing by as your Bot suffered damage. Sensing your Bot was in danger and
          weakened, the opportunistic swarm descends upon your bot and begins stripping its systems.
          Insulating cables dissolve away, lubricants are drained and bolts spin themselves loose. You lose an
          additional D4 Hitpoints.
        </li>
        <li>
          <span className="text-title">Off Balance</span> - The attack disrupts your Bot's gyros and it loses
          balance, stumbling about. The player that inflicted the damage causing this result may immediately
          make your Bot take a Move, Strafe or Backwards action. Any obstructions walked into cause damage,
          and falling may occur.
        </li>
        <li>
          <span className="text-title">Venting Power Core</span> - With a fading whir the power core for your
          Bot is temporarily knocked offline. Noxious hot vapours emanate from every aperture. At the
          beginning of your next Turn, you must undertake a special PURGE action if you want to start to
          Move/Strafe/Go Backwards/Climb or Drop again. The APUs automatically kick in so there is just enough
          juice to keep the weapon systems active. You may make Shooting/Bashing actions.
        </li>
        <li>
          <span className="text-title">AWAKENED Technology Module</span> - Deep within the circuitry and
          actuators of the Bot is an antique technology module of unknown purpose and origin. The incoming
          damage has knocked something, and after a brief power surge this module activates! You now have an
          additional weapon system for the remainder of this game. You may choose either Ranged or Melee and
          then roll on the relevant weapons table. This does not change the Combo of your bot.
        </li>
        <li>
          <span className="text-title">Phoenix Protocol</span> - A command line override stirs your bot into
          defiant action, its data cores recalling a similar situation it faced previously in an ancient
          offworld battle. Knowing what to do to get out of dodge, you may make a single action of your
          choosing, and regain 2 Hit points.
        </li>
        <li>
          <span className="text-title">Canister Drop</span> - A volatile subsystem is damaged, and a
          pressurised container is dislodged by the attack, and falls to the feet of your bot. It begins to
          hiss violently. Place a small 25mm marker anywhere in base to base contact with your Bot. Roll a D6.
          After that many actions (by any player), starting after the action that caused this damage, the
          canister explodes, automatically hitting any Bots within 5” and causing 2HP damage.
        </li>
        <li>
          <span className="text-title">Ablative Plating Loss</span> - The popping of rivets, tearing of sinew
          and clatter of falling plates is loud enough to be heard over the raging battle. The armour on your
          bot has been permanently damaged by the attack. The face of your Bot that was attacked has its “To
          Hit” number decreased by 1 for the rest of the game as the vulnerable systems underneath are
          exposed.
        </li>
        <li>
          <span className="text-title">Dead Leg</span> - Despite automatically rerouting power to the
          locomotive systems, one of your Bot's legs is now heavily damaged. You may no longer Strafe for the
          remainder of the game. If this result happens again the distance you may move is halved when you
          Move or go Backwards.
        </li>
        <li>
          <span className="text-title">Hydraulic Line Fire</span> - A high pressure hose ruptures and a plume
          of pale liquid enshrouds the bot momentarily before it ignites in a rising fireball. Your bot is
          ablaze! Add two blast tokens to your bot. Lose an additional D4 Hitpoints.
        </li>
        <li>
          <span className="text-title">Friendly Nanites</span> - One of the many unseen roaming clouds of
          nanites happened to be passing by as your Bot suffered damage. Sensing your Bot was in distress, the
          benign swarm flows through the pistons, circuitry and gubbins of your Bot patching up what it can.
          You regain D6 Hitpoints.
        </li>
        <li>
          <span className="text-title">Trigger Control</span> - An electrical short caused by the damage
          causes a cluster of servos to misfire and trigger one of your Bot's weapon systems. Even though it
          is not necessarily your turn, you may make a shooting or melee attack against any valid target in
          your front arc. This attack generates blast tokens as usual. If there is no target the weapons
          activate anyway. If you already have Blast Tokens on your bot preventing you from undertaking any
          attack, or have no weapons, instead lose an additional D3 Hitpoints.
        </li>
        <li>
          <span className="text-title">Anti Ruster Protesters</span> - Anti-Ruster Protesters run onto the
          field, smashing any bots within 4” from the edge of the board, trying to spread their hateful
          message (before the guards remove them). Lose 1 HP if within 4” of the edge of the board. JUNKERS
          are treated particularly worse due to their ongoing business relations with The Rusters. Protesters
          run directly for the Junkers as far 8” from the edge who then suffer 2 HP.
        </li>
        <li>
          <span className="text-title">Called to the Plant</span> - People call it different things. Some call
          it “The Signal’’, others “The Hum” or “The Frequency”. Nearly all of the technology in The
          Gutterlands resonates with this one unifying signal. Its source? The Plant - the mysterious AI
          singularity somewhere in the endless junkheaps of the decommissioning deserts. Occasionally this
          frequency surges in power and intensity, magnetically drawing all intelligent systems towards it.
          The player who rolled on this table selects a board edge of their choosing. This is the direction of
          The Plant. All Bots must immediately make a move action to turn on the spot to face this board edge.
          All BEADBOTS are particularly susceptible to the call of The Plant and once they have turned to face
          it, they must make an additional move to go toward that board edge (falling and hitting things as
          they do).
        </li>
        <li>
          <span className="text-title">Rust Bugs</span> - The metal oxidising bacteria that scours The
          Gutterlands infects the arena. Actuators seize up and armour degrades. Each Player must choose and
          simultaneously verbally declare “HP” or “Actions”. Each player then rolls a D3. You either instantly
          lose that many HP, or only have that many actions the next time it is your Turn.
        </li>
        <li>
          <span className="text-title">Moler Trap</span> - With a sudden crack and a cloud of dust, a Bot
          disappears down a hole! The Molers have long objected to the Bot Blitz (as it’s far too noisy for
          them) and occasionally undermine the stadium to set pit traps. You must select a Bot not on terrain.
          If there are none on the ground you must select the bot nearest the ground (If in either case that’s
          your Bot you must select your Bot). Place a 40mm token representing a hole on the ground as close to
          the targeted bot as you can. Place a second token 8” away from it on the ground in a location of
          your choosing. This represents where the Bot managed to break out of the Moler tunnel back into the
          stadium. For the remainder of the game any Bot can use this tunnel as a shortcut by
          moving/strafing/going backwards into it. Then move the bot into base to base contact with the other
          hole (selecting any orientation you wish). For the Bot first affected by the trap, and any Bot
          choosing to use the tunnel after its discovery, the crawl through the tunnel causes 1HP of damage to
          the Bot. Any Bot voluntarily using the tunnel to move around the battlefield also loses an action
          that turn.
        </li>
        <li>
          <span className="text-title">The Crowd Goes Wild</span> - The ongoing carnage of the battle sets off
          a huge Mexican wave that runs round the audience. Bots are cheered, and Bots are booed. The
          cacophony is briefly enough to overcome the sounds of battle, and the Bots struggle to concentrate
          as some soak up the glory and some are left quite bruised by the crowd’s jeering. For the remainder
          of this Round, and the next Round until the player who rolled on this table goes again, the riotous
          crowd distracts all Bots. Whenever a player declares their 3 actions - the player immediately to
          their left overrides one of their actions with a different one. The player then has to undertake the
          new sequence of actions. If the player whose Turn it is is one of THE UPPERS, the person to their
          left may override 2 of their actions. The Uppers are not used to the coarse language and rude
          gestures of normal people in The Gutterlands, and it causes them much vexation.
        </li>
        <li>
          <span className="text-title">Marrow Sucker Outbreak</span> - Screams are heard around the audience
          and members of the crowd are seen to be convulsing in agony. With a creeping horror the Bangarang
          organisers realise there has been a Marrow Sucker Outbreak. Bullet-like invertebrates fly at the
          speed of sound from person to person, piercing straight through to the nutritious interiors of their
          skeletons. Red clouds obscure the falling bodies. Quickly the rampaging swarm finds its way down to
          the pits and control decks of the auditorium, causing absolute chaos. But the show must go on! At
          the end of this Round (once all players have had a Turn), each player rolls a D4. That is how many
          actions they may take on their next Turn.
        </li>
        <li>
          <span className="text-title">Acid Rain</span> - The ecosphere of The Gutterlands is highly unstable
          after centuries of dumping the galaxy’s most terrifying weapons-grade waste on its surface. As a
          result, occasional Acid Rain downpours are common. Until the end of this Round no Bots may make any
          climbing actions as all terrain is coated in a mildly corrosive slurry. This sort of environmental
          hazard is particularly painful for the exposed flesh and organic components of THE MEATY ONES. This
          Round and the next, any Meaty Ones playing may not attempt to regain HP at the end of their go. This
          is unless they are underneath a Bridge at the end of the Round.
        </li>
        <li>
          <span className="text-title">Geo Tremor</span> - The ground begins to shake and split, clouds of
          dust are shaken off all nearby structures, and the vibrations intensify. It’s a Geo-Tremor! All Bots
          scatter d8” without changing orientation. Any bots that would move off of elevated areas, or move
          into obstructions, fall or suffer damage as usual.
        </li>
      </ol>
    </div>
  );
}
