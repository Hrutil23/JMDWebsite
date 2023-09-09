

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.io.*; 

public class write {

    public static void main(String[] args) {

        // Defining the file name of the file
        Path fileName = Path.of("test.txt"); 

        write("Welcome to JMD Math class ", fileName); 

    }

    public static void write (String data, Path fileName )
    { 

        try{ 

            // Writing into the file
            Files.writeString(fileName, data);

        }catch (Exception e)
        { 

            System.out.println("Encounter some error"); 

        }

    }

}
