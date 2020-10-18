### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly 1
### @hideIteration 1
### @explicitHints 1

# Introduct the ravager

## Step 1
Lead the ravager to the 3 marked villagers by navigating the Agent to each one.

```ghost
player.onChat("ravager", function () {
    agent.move(FORWARD, 11)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 13)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 11)
})
```