import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircleWarning, TriangleAlert } from "lucide-react";

export default function Rules() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl pt-2">How To Play</h2>
      <p>
        <span className="text-title">Rounds:</span> At the beginning of each Round, determine which order Bots
        will act in. Each player rolls a D6 and adds their remaining number of HP to the result. The Player
        with the lowest score goes first, and play proceeds around the table in the direction of the player
        with the second lowest score.
      </p>
      <p>
        <span className="text-title">On your Turn</span>, you may perform any 3 actions with your bot in any
        combination or in any permissible order.You may repeat actions during your turn. You have to declare
        aloud the three actions you are taking and then do them.
      </p>
      <h2 className="text-2xl pt-2">Actions</h2>
      <ul>
        <li>
          <span className="text-title">Move</span> - Move up to 4” in the direction your Bot is facing & turn
          up to 90 degrees, OR turn on the spot up to 90 degrees.
        </li>
        <li>
          <span className="text-title">Strafe</span> - Move sideways up to 3” without changing orientation.
        </li>
        <li>
          <span className="text-title">Backwards</span> - Bot moves up to 2” backwards and then turns up to 45
          degrees.
        </li>
        <li>
          <span className="text-title">Shoot</span> - Shoot in the direction of your Bot's front arc. Shooting
          generates a blast token.
        </li>
        <li>
          <span className="text-title">Reload/Reboot</span> - Remove one blast token from your Bot
        </li>
        <li>
          <span className="text-title">Bash</span> - Make a melee attack against another Bot. Bashing does not
          generate blast tokens. Must be in base to base contact with another Bot.
        </li>
        <li>
          <span className="text-title">Climb</span> - Go up any Stack your bot is in base contact with. Must
          be in base to base contact with a Stack in order to Climb.
        </li>
        <li>
          <span className="text-title">Drop</span> - Deliberately jump down any vertical distance from a Stack
          to avoid taking damage. Must be in base to base contact with the edge of a Stack to Drop.
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
      <h2 className="text-2xl pt-2">Shoot / Bash</h2>
      <p>
        Determine which facing you are attacking at on the enemy's Bot by drawing a line from your Bot's front
        arc.
      </p>
      <p>
        If your bot is one Stack or more higher than the target Bot, intervening terrain does not prevent
        shooting.
      </p>

      <p>
        Roll a D6 (& if shooting, place a blast marker next to your bot). The value to hit is based on the
        facing being targetted. A roll of 1 always misses.
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
      <div role="alert" className="alert alert-soft alert-info">
        <MessageCircleWarning />
        <span>
          If within 4” of the target Bot (and not in base to base contact with any Bot), reroll any shooting
          attack that misses.
        </span>
      </div>
      <div role="alert" className="alert alert-soft alert-warning">
        <TriangleAlert />
        <span>
          You may not Shoot if you have one or more Blast tokens already unless a faction rules says you may.
        </span>
      </div>
      <div role="alert" className="alert alert-soft alert-warning">
        <TriangleAlert />
        <span>
          If in base to base contact with any Bot, you <strong>must</strong> reroll any shooting attack that
          hits.
        </span>
      </div>
      <p>
        <span className="text-title">Shooting when on Stacks:</span> If at 1 Stack higher than the target Bot,
        +1 to the result. If at 2 or more Stacks higher than the target Bot, +2 to the result.
      </p>
      <p>
        When you successfully hit a Bot you must roll an additional D6. If you roll a 5-6, something exciting
        happens! The Player who owns the Bot that got hit at must roll on - the “Something Exciting Happens”
        Table
      </p>
      <h2 className="text-2xl pt-2">Climbing & Falling</h2>
      <p>
        If a Bot loses any HP whilst within 1" of the edge of a Stack they Fall down it. The Player removes
        their Bot from the ledge and places them at the bottom of the Stack directly underneath where they
        fell, so that they are touching the Stack. Bots falling off Bridges go straight down.
      </p>
      <p>
        The Bot suffers additional HP lost equal to 2 HP per level of Stack it Fell. This also occurs if they
        move off an edge without making a Drop action.
      </p>
      <p>
        To perform a Climb action, a bot must be in Base-to-Base contact with a Stack. You do not need to be
        facing the stack. The action then moves it to the top of the Stack, and your place your Bot facing any
        direction at the top.
      </p>
      <p>
        If 2 Stacks are placed in a way so that their faces are aligned and it creates a double height
        obstacle, the Bot must make successive climb actions. If a Bot falls off a double height Stack, but
        there is not enough room to place it where it fell on the lower Stack, it must fall to the next level.
      </p>
      <p>
        A Bot May make a Drop action to get down safely. A Bot must be in base to base contact with an edge of
        a Stack or a bridge. It then drops down and can be placed facing any direction at the bottom in base
        to base contact with the point where it dropped. Unlike climbing, the dropping action can drop a bot
        any number of Stacks (if the edges of Stacks are close enough together that a Bot could not stop at
        the intermediary levels).
      </p>
      <h2 className="text-2xl pt-2">Fall/Drop onto Bot</h2>
      <p>
        A bot may Fall or Drop onto another Bot! If a Bot is within 2" of the point where a Bot would usually
        fall or drop, it may choose to land on the opponent Bot. If you do this, place your Bot in Base to
        Base contact with the opponent's Bot anywhere you like. Your Bot may be facing any direction you wish.
      </p>
      <p>
        <span className="text-title">Fall</span> - If you fall onto an opponent's bot, calculate the number of
        HP you would have lost if falling usually. Half that number and round up. Your Bot and the opponent's
        Bot both lose that number of HP.
      </p>
      <p>
        <span className="text-title">Drop</span> - If you deliberately drop onto an opponent's Bot, the
        opponent Bot suffers all the HP you would have suffered had you fallen. In order to successfully drop
        like this, you must take a Drop Test.
      </p>
      <h2 className="text-2xl pt-2">Drop Test</h2>
      <p>Roll a D6.</p>
      <p>
        <span className="text-title">1 Fail</span> - Your Bot falls and misses completely. Counts as having
        fallen and is placed adjacent to the target Bot in Base-to-Base contact. Your bot suffers fall damage
        as usual.
      </p>
      <p>
        <span className="text-title">2 Partial Fail</span> - Your Bot falls onto the target Bot. Counts as
        having fallen and is placed adjacent to the target Bot in Base-to-Base contact. Calculate damage as
        you would for falling onto a Bot.
      </p>
      <p>
        <span className="text-title">3+ Success</span> - You successfully drop.
      </p>
      <h2 className="text-2xl pt-8">Zero HP</h2>
      <p>
        When you reach 0 hit points your Bot is destroyed. Immediately roll a D6 to see what happens to your
        Bot.
      </p>
      <p>
        <span className="text-title">1-3 - Wreck</span> - sparks fly, lights dim and limbs slacken as the poor
        Bot shuts down. The Bot becomes an obstruction for the remaining players. Mark the Bot with some
        additional blast markers to highlight its demise.
      </p>
      <p>
        <span className="text-title">4-6 - Detonation</span> - In a colossal explosion the Bot explodes! This
        obliterates the Bot entirely and sends fragments of wreckage flying in all directions. Make a shooting
        attack at all Bots within 12” and line of sight that causes 2 HP damage, nearest to the destroyed Bot
        first. Remove the Bot from the board.
      </p>
      <p>
        <span className="text-title">AUTO-DESTRUCT</span> - In some desperate situations a Bot may find it
        nearly impossible to inflict damage on its opponents, such as after suffering multiple weapon
        failures. In situtions such as this where victory is impossible, a Bot may elect to auto-destruct.
        Proceed as if detonating, as above.
      </p>
    </div>
  );
}
