import static java.lang.System.out;
import static java.nio.file.Files.readAllBytes;
import static java.nio.file.Paths.get;
 
public class ReadFile {
    public static void main(String[] args) throws Exception {
    	String string=new String(readAllBytes(get(args[0])));//args[0] is filepath
		System.out.println(string);
    }
}