// Class to test 
public class Horse { 
     public int leadTo(Water w) { w.drink();
        return 1;

}
}  // Unit test for class
import static org.junit.Assert.*; 
import org.junit.*; 
public class HorseTest {  // Test that a leading a horse to water will return 1 @Test
public void testWaterDrinkReturnVal() { 
Horse horse = new Horse();
// We are making a test double for water 

Water mockWater = Mockito.mock(Water.class); 
int returnVal = h.leadTo(mockWater);
assertEquals(1, returnVal); }
}

