### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Teach Farming

## Step 1
The villagers agreed to teach the illagers how to farm, but first they need farmland setup. Have the Agent replace the gravel pad with farmland.

#### ~ tutorialhint 
Use the ``||hoc2020:prepare soil||`` block to move the Agent forward while replacing the gravel with tilled soil. 

The ``||hoc2020:turn agent||`` block will turn the Agent either left or right.



```ghost
    hoc2020.tillSoil(1)
    hoc2020.turnAgent()  
```
```template
\\
```
```package
hoc2020-ts=github:rewrite-media/hoc2020-ts
```