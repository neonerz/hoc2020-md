### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true
### @explicitHints 1

# Teach Farming

## Step 1
Replace all the gravel with dirt and till the dirt into soil.

```ghost
player.onChat("teach_farm", function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 10; index++) {
            agent.destroy(DOWN)
            agent.setItem(DIRT, 1, 1)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
            agent.till(BACK)
        }
        agent.move(RIGHT, 1)
        agent.turn(RIGHT_TURN)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        for (let index = 0; index < 10; index++) {
            agent.destroy(DOWN)
            agent.setItem(DIRT, 1, 1)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
            agent.till(BACK)
        }
        agent.move(LEFT, 1)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
    }
})
```
```template
```
```package
```
