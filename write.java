

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.io.*; 

public class write {

    public static void main(String[] args) {

        // Nothing much here

        String text = "Welcome to JMD Math class ";

        // Defining the file name of the file
        Path fileName = Path.of("/Users/hrutilpatel/Desktop/Jmd webiste /JMD/Write/text.txt"); 

        try{ 

            // Writing into the file
            Files.writeString(fileName, text);

        }catch (Exception e)
        { 

                System.out.println("Not worked"); 

        }

    }

}
