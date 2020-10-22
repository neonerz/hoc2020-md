### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Protect the beets.

## Step 1
Something keeps getting into the garden and taking beets. Have the Agent build a fence around the farm to keep out whatever is doing it.

#### ~ tutorialhint 
Use the ``||hoc2020:move and place||`` block to move the Agent forward while placing fences behind.  

The ``||hoc2020:turn agent||`` block will turn the Agent either left or right.

```ghost
    hoc2020.buildFence()
    hoc2020.turnAgent()  
```
```template
\\
```
```package
hoc2020-ts=github:rewrite-media/hoc2020-ts
```