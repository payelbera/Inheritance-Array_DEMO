class Tiger extends Animal{
    constructor(x,y,col){
        super(x,y);
        this.body.shapeColor = col
    }
    showFoodHabit(){
        console.log("Tiger eats animals")
    }
}