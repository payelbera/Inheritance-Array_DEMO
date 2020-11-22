class Lion extends Animal{
    constructor(x,y,col){
        super(x,y);
        this.body.shapeColor = col
    }

    showFoodHabit(){
        super.showFoodHabit()
        console.log("Lion eats animals")
    }

    
}