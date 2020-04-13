public void testHaveFunAtDuckPond() 
{
    Person p = new Person();
    DuckPond dp = Mockito.mock(DuckPond.class);
    p.haveFunAtDuckPond(dp);
    verify(dp.haveFun(), times(1)); 
}
    
   