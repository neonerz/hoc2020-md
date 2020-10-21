// Add your code here

enum Direction {
    //% block="forward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right
}
//%  block="HOC 2020" weight=200 color=#00a513 icon=""
namespace hoc2020 {

    /**
     * Agent Interact Forward
     */
    //% block="Flip Lever"
    export function flipLever(): void {
        agent.interact(FORWARD)
    }  

}