class Animal {
    constructor(x,y){
       
       this.body = createSprite(x,y,30,30)
       this.body.shapeColor = "blue"

    }

displayAnimal(){
    drawSprites();
}

showFoodHabit(){
    console.log("Animals can eat plant or other animals")
}
}