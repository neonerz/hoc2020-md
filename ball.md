### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Get the ball.

## Step 1
The old lady's elevator isn't working. It looks like the levers are stuck. Have the Agent use its strength to flip all the levers so she can bring down the children's ball.


#### ~ tutorialhint 
Use the ``||hoc2020:agent climb||`` block to climb **up** the wall and ``||hoc2020:flip lever||`` to flip the lever.

```ghost
    hoc2020.agentClimb()
    hoc2020.flipLever()
```
```template
\\
```
```package
hoc2020-ts=github:neonerz/hoc2020-ts
```
