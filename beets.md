### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Protect the beets.

## Step 1
Something keeps getting into the garden and taking beets. Have the Agent build a fence around the farm to keep out whatever is doing it.

#### ~ tutorialhint 
Use the ``||hoc2020:place fence||`` block to move forward while placing fences behind.

```ghost
    for (let index = 0; index < 11; index++) {
       hoc2020.buildFence()
       hoc2020.flipLever()
       agent.turn()
    }
```
```template
\\
```
```explicitHints
```
```package
hoc2020-ts=github:neonerz/hoc2020-ts
```