package com.JDBC;

import java.sql.*;
import java.util.Properties;

public class OracleJdbcExample {
    public static void main(String args[]) throws SQLException {
        String url = "jdbc:oracle:thin:@localhost:1632:DEVROOT32";
        Properties props = new Properties();
        props.setProperty("user", "jdbc");
        props.setProperty("password", "jdbc");
        Connection conn = DriverManager.getConnection(url,props);
        String sql ="select sysdate as current_day from dual";
        PreparedStatement preStatement = conn.prepareStatement(sql);
        ResultSet result = preStatement.executeQuery();
        while(result.next()){
            System.out.println("Current Date from Oracle : " +result.getString("current_day"));
        }
        System.out.println("done");
    }
}