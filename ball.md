### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Get the ball

## Step 1
The old lady's elevator isn't working. It looks like the levers are stuck. Have the Agent use it's strength to flip all the levers so she can bring down the children's ball.  ``||hoc2020:flipLever||``

```ghost
player.onChat("witch", function () {
    agent.move(UP, 1)
    hoc2020.flipLever()
    agent.move(RIGHT, 3)
    agent.move(UP, 2)
    hoc2020.flipLever()
    agent.move(LEFT, 3)
    agent.move(UP, 1)
    hoc2020.flipLever()
    agent.move(RIGHT, 3)
    agent.move(UP, 2)
    hoc2020.flipLever()
})
```
```template
\\
```
```explicitHints
This is one flipLever test
```
```package
minecraft-hoc2020-md=github:neonerz/hoc2020-md
```
