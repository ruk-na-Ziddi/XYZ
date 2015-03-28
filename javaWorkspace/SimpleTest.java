import org.junit.Test;
import static org.junit.Assert.*;
public class SimpleTest{

	@Test
	public void addGivesSumOf2Numbers(){
		assertEquals(2,1+1);
	}

	@Test
	public void objectReferencesAreNullByDefault(){
		Object a =  null;
		assertEquals(null,a);
	}

	@Test
	public void anewObjectsAreNotNull(){
		Object a = new Object();
		assertNotNull(a);	
	}

	@Test
	public void objectReferencesCanBePassedAround(){
		Object a = new Object();
		Object b = a;
		assertEquals(a,b);
	}
	@Test
	public void objectEqualsCanBeUsedToCompare(){
		Object a = new Object();
		Object b = new Object();		
		assertTrue(a.equals(a));
		assertFalse(a.equals(b));
		assertFalse(a.hashCode() == b.hashCode());
	}

	@Test
	public void stringsCanBeCreatedWithLiterals(){
		String a = "hello";		
		assertEquals("hello",a);
	}

}