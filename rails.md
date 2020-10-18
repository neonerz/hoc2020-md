### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly true
### @hideIteration true
### @explicitHints 1

# Lay down some rails

## Step 1
Connect the two villages using minecart rails.

```ghost
player.onChat("rails", function () {
    for (let index = 0; index < 6; index++) {
        for (let index = 0; index < 4; index++) {
            agent.setItem(RAIL, 1, 1)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(DOWN, 1)
    }
})
```
```template
```
```package
```
