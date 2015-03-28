import org.junit.Test;
import static org.junit.Assert.*;
public class CalcTest{
	@Test
	public void newCalcIsInitializedWithGivenValue(){
		Calc c = new Calc(5);
		assertEquals(5,c.getValue());
	}

	@Test
	public void canAddANumberToCalculator(){
		Calc c = new Calc(3);
		c.add(5);
		assertEquals(8,c.getValue());			
	}

	@Test
	public void toStringGivesValuealong(){
		Calc c = new Calc(5);
		assertEquals("[Calc:5]",c.toString());
	}
}