### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Protect the beets.

## Step 1
Something keeps getting into the garden and taking beets. Have the Agent build a fence around the farm to keep out whatever is doing it.

Use the ``||hoc2020:place fence behind||`` block to place a fence block behind the Agent.  

The ``||hoc2020:agent move||`` block will move the agent in whatever direction you specify. 

The ``||hoc2020:turn agent||`` block will turn the Agent either left or right.

The ``||loops:repeat||`` block will allow you to repeat a set of blocks multiple times.


```ghost
for (let i = 0; i < 5; i++) {
    hoc2020.placeFence()
    hoc2020.moveAgent()
    hoc2020.turnAgent()  
}
```
```template
\\
```
```package
hoc2020-ts=github:rewrite-media/hoc2020-ts
```