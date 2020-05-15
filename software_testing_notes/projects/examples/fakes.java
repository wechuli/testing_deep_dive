public class DuckPond extends Pond 
{
    private int _funLevel = 0;
    public void haveFun() 
    {
         _funLevel++;
    } 
    public void haveUltraFun() 
    {
    int funMultiplier = super.retrieveUltraLevelFromDatabase();
     _funLevel += funMultiplier * _funLevel;
    }
    public int getFunLevel() {
         return _funLevel;
    } 

}
    

   