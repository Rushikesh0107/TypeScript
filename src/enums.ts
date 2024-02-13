enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
    if(keyPressed === Direction.Up){
        console.log("You pressed Up");
    }

    if(keyPressed === Direction.Down){
        console.log("You pressed Down");
    }
}

doSomething(Direction.Up); // You pressed Up