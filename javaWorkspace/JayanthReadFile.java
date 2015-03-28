import java.io.*;

public class JayanthReadFile{
    public static void main(String[] args) throws IOException {
        File thisFile = new File("./JayanthReadFile.java");
        FileReader fr = null;
        try {
            fr = new FileReader(thisFile);
        } catch(Exception e) {
        }

        BufferedReader br=new BufferedReader(fr);
        int length = (int)thisFile.length();
        char cbuf[] = new char[1000];
        br.read(cbuf,0,length);
        System.out.println(cbuf);
    }
}