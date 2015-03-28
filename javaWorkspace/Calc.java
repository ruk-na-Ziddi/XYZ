public class Calc{	
	private int value;
	public Calc(int init){
		value = init;
	}
	public int getValue(){
		return value;
	}
	public void add(int newValue){
		value += newValue;
	}
	public String toString(){
		return "[Calc:" + value + "]";
	}	
}