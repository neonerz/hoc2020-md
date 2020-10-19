### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly 1
### @hideIteration 1
### @explicitHints 1

# Get the ball

## Step 1
Have the Agent go up the wall pressing each button along the way . 

```ghost
player.onChat("witch", function () {
    agent.move(UP, 1)
    agent.interact(FORWARD)
    agent.move(RIGHT, 3)
    agent.move(UP, 2)
    agent.interact(FORWARD)
    agent.move(LEFT, 3)
    agent.move(UP, 1)
    agent.interact(FORWARD)
    agent.move(RIGHT, 3)
    agent.move(UP, 2)
    agent.interact(FORWARD)
})
```