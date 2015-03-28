import java.io.*;

public class ReadFileLinebyLine {
	public static void main(String[] args) throws IOException { 
		BufferedReader bufferedReader = new BufferedReader(new FileReader("ReadFileLinebyLine.java")); 
		StringBuffer stringBuffer = new StringBuffer();
		String line = null; 
		while((line =bufferedReader.readLine())!=null){
			stringBuffer.append(line).append("\n");
		}   
		System.out.println(stringBuffer);
	}
}