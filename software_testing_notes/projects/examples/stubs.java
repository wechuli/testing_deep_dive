public class DogTest
 {
    @Test
    public void testEatDinner() 
    {  
        Dog d = new Dog();
        DogFood mockedDogFood = Mockito.mock(DogFood.class);
        when(mockedDogFood.eat()).thenReturn(13);
        int returnVal = d.eatDinner(mockedDogFood);
        assertEquals(13, returnVal); 
    }
    
}

public void goToCatCafe(CatCafe catCafe)
{
    System.out.println("Petting cats at a Cat Café!");
    catCafe.haveFun();
}
    
