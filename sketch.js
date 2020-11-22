var lions =[] , tigers=[], cows=[]

function setup() {
  createCanvas(800,400);
  for(var x = 30;x<innerWidth;x+=50){
    lions.push(new Lion(x,100,"brown"));
  }
  
  for(var y = 30;y<innerWidth;y+=50){
    cows.push(new Cow(y,200));
  }
  for(var z = 30;z<innerWidth;z+=50){
    tigers.push(new Tiger(z,300,"yellow"));
  }
 textSize(16)
 fill(255)

  }

function draw() {
  background("cyan"); 
  for(var x = 0;x<lions.length;x++){
    
    lions[x].displayAnimal();
    
  }
  for(var y = 0;y<tigers.length;y++){
   
    tigers[y].displayAnimal();
    
  }
  for(var z = 0;z<cows.length;z++){
    
    cows[z].displayAnimal();
    
  }
  
  
}