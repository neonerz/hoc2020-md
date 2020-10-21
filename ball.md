### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Get the ball

## Step 1
The old lady's elevator isn't working. It looks like the levers are stuck. Have the Agent use it's strength to flip all the levers so she can bring down the children's ball.

```ghost
    agent.move(UP, 1)
    hoc2020.flipLever()
```
```explicitHints
Use the ``||agent:agent move||`` block to go **up** the wall and use ``||hoc2020:flip lever||`` to try and flip the lever.
```
```package
hoc2020-ts=github:neonerz/hoc2020-ts
```
