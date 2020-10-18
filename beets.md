### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly 1
### @hideIteration 1 
### @explicitHints 1

# Protect the beets

## Step 1
Place a fence around the beet farm.

```ghost
player.onChat("fox", function () {
    agent.setItem(OAK_FENCE, 64, 1)
    for (let index = 0; index < 11; index++) {
        agent.move(FORWARD, 1)
        agent.place(BACK)
    }
    for (let index = 0; index < 6; index++) {
        agent.move(LEFT, 1)
        agent.place(RIGHT)
    }
    for (let index = 0; index < 12; index++) {
        agent.move(BACK, 1)
        agent.place(FORWARD)
    }
    for (let index = 0; index < 7; index++) {
        agent.move(RIGHT, 1)
        agent.place(LEFT)
    }
})
```