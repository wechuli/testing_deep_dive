public class Dog 
{  
    DogFood _df = null; 
    DogDish _dd = null; 
    DogWater _dw = null; 

    public void setUpDogStuff() 
    { 
        
        _dd = new DogDish(); 
        _df = new DogFood();
        _dw = new DogWater(); 
    } 
    
    public int eatDinner() 
    { 
        _df.eat();
        return 1;
    }
}
    
public class Dog 
{  
    DogFood _df = null;
    DogDish _dd = null;
    DogWater _dw = null;
    public void setDogFood(DogFood df)
    { 
        df = _df;
    }  
    public void setDogDish(DogDish dd)
    { 
        dd = _dd;
    } 
    public void setDogWater(DogWater dw) 
    {
        dw = _dw;
    }

    public int eatDinner() 
    { 
        _df.eat();
        return 1;
    }
}
        
public class Dog 
{ 
     public int eatDinner(DogFood df)
    { 
        int tastiness = df.eatDinner();
        return tastiness; 
    }
}



