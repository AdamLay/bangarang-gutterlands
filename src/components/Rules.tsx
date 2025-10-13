import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TriangleAlert } from "lucide-react";

export default function Rules() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl">How To Play</h2>
      <p>
        <span className="text-title">Rounds:</span> At the beginning of each Round, determine which order Bots
        will act in. Each player rolls a d6 and adds their remaining number of HP to the result. The Player
        with the lowest score goes first, and play proceeds around the table in the direction of the player
        with the second lowest score.
      </p>
      <p>
        <span className="text-title">On your Turn</span>, you may perform any 3 actions with your bot in any
        combination or in any permissible order.You may repeat actions during your turn. You have to declare
        aloud the three actions you are taking and then do them.
      </p>
      <h2 className="text-xl">Actions</h2>
      <ul>
        <li>
          <span className="text-title">Move</span> - Move up to 4” in the direction your Bot is facing & turn
          up to 90 degrees, OR turn on the spot up to 90 degrees.
        </li>
        <li>
          <span className="text-title">Strafe</span> - Move sideways up to 3” without changing orientation
          (tactical, good for poking round corners)
        </li>
        <li>
          <span className="text-title">Backwards</span> - Bot moves up to 2” backwards and then turns up to 45
          degrees. Shoot - shoot in the direction of your Bot's front arc. Shooting generates a blast token
          (see “Shooting”)
        </li>
        <li>
          <span className="text-title">Reload/Reboot</span> - Remove one blast token from your Bot
        </li>
        <li>
          <span className="text-title">Bash</span> - Make a melee attack against another Bot. Bashing does not
          generate blast tokens (see “Bashing”). Must be in base to base contact with another Bot.
        </li>
        <li>
          <span className="text-title">Climb</span> - Go up any Stack your bot is in base contact with (see
          “climbing and falling”). Must be in base to base contact with a Stack in order to Climb.
        </li>
        <li>
          <span className="text-title">Drop</span> - Deliberately jump down any vertical distance from a Stack
          to avoid taking damage (see “climbing and falling”). Must be in base to base contact with the edge
          of a Stack to Drop.
        </li>
      </ul>
      <ol>
        <li>1. Bots may not move through other Bots or Stacks.</li>
        <li>
          2. If a bot is moved into a Stack by another player's Bot or AN effect in the game, you lose a hit
          point.
        </li>
        <li>
          3. Turning on the spot or moving / strafing / reversing away when in contact with a STACK incurs no
          further loss of hitpoints.
        </li>
        <li>4. If a Bot’s movement takes it into base to base contact with another bot, it stops.</li>
        <li>5. The edge of the board counts as Stack you cannot climb.</li>
        <li>
          6. You may move your bot less than the full distance in inches stated in the action you’re taking
        </li>
      </ol>
      <h2 className="text-xl">Shooting</h2>
      <p>
        Shoot at targets in Line of Sight of your bot's front arc. Determine which facing you are shooting at
        on the enemy's Bot.
      </p>
      <p>
        If your bot is one Stack or more higher than the target Bot, intervening terrain does not prevent
        shooting.
      </p>
      <p>
        You may not Shoot if you have one or more Blast tokens already unless a faction rules says you may.{" "}
      </p>
      <p>
        Roll a d6 & place a blast marker next to your bot. The value to hit is based on the which facing being
        targetted:
      </p>
      <table className="table">
        <tbody>
          <tr>
            <td>Front</td>
            <td>6+</td>
          </tr>
          <tr>
            <td>Sides</td>
            <td>5+</td>
          </tr>
          <tr>
            <td>Rear</td>
            <td>4+</td>
          </tr>
        </tbody>
      </table>
      <p>A roll of 1 always misses.</p>
      <p>
        If within 4” of the target Bot (and not in base to base contact with any Bot), reroll any shooting
        attack that misses.
      </p>
      <div role="alert" className="alert alert-soft alert-warning">
        <TriangleAlert />
        <span>
          If in base to base contact with any Bot, you <strong>must</strong> reroll any shooting attack that
          hits.
        </span>
      </div>
      <p>
        If at 1 Stack higher than the target Bot, +1 to the result you roll on your dice when firing. If at 2
        or more Stacks higher than the target Bot, +2 to the result you roll on your dice when firing.
      </p>
      <p>
        When you successfully hit a Bot you must roll an additional D6. If you roll a 5-6, something exciting
        happens! The Player who owns the Bot that got shot at must roll on - the “Something Exciting Happens”
        Table
      </p>
    </div>
  );
}
