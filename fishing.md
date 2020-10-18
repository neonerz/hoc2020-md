### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true 
### @explicitHints 1

# Teach fishing

## Step 1
Build the outline of a dock that's 6 blocks long and 4 blocks wide.

```ghost
player.onChat("teach_fish", function () {
    agent.setItem(PLANKS_BIRCH, 64, 1)
    for (let index = 0; index < 6; index++) {
        agent.move(FORWARD, 1)
        agent.place(DOWN)
    }
    for (let index = 0; index < 3; index++) {
        agent.move(RIGHT, 1)
        agent.place(DOWN)
    }
    for (let index = 0; index < 6; index++) {
        agent.move(BACK, 1)
        agent.place(DOWN)
    }
})
```
```template
```
```package
```