package DatabaseConnection_Update;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/*
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
 */

 public class Connect{

    private static String username = "Username";
    private static String passsword = "Pasword";
    private static String databaseID = "DatabaseID";
    private static String connUrl = "jdbc:oracle:thin:" + username + "/" + passsword + "@dbHost:1521:" + databaseID;

    public static void main(String[] args) {

        // connectToDatabase(connUrl);
    }

    private static void connectToDatabase(String url)
    {
        try{
            Connection conn = DriverManager.getConnection(url);
            if (conn != null) {
                System.out.println("Connected");
            }
            
        }catch(SQLException e)
        {
            System.out.println("Database did not establish a connection.");
        }
    }
}