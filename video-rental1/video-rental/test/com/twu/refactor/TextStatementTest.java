package com.twu.refactor;

import org.junit.Test;

import java.util.List;

import static org.junit.Assert.assertTrue;

/**
 * Created by ankurks on 3/19/2015.
 */
public class TextStatementTest {
    @Test
    public void testGetFooterLinesGivesFooterLines(){
        TextStatement ts=new TextStatement();
        String stmt=ts.getFooterLines(13.5,2);
        String expected="Amount owed is 13.5\nYou earned 2 frequent renter points";
        assertTrue(expected.equals(stmt));
    }

    public class StatementTest {
        @Test
        public void testGetFooterLinesShouldGiveFooterLines() {
            TextStatement ts = new TextStatement();
            String statement = ts.getFooterLines(13.5, 2);
            String expectedStatement = "Amount owed is 13.5\n" +
                    "You earned 2 frequent renter points";
            assertTrue(expectedStatement.equals(statement));
        }

        @Test
        public void testGetHeaderGetsTheHeaderForCustomer() {
            TextStatement ts = new TextStatement();
            Customer customer = new Customer("Dinsdale");
            String statement = ts.getHeader(customer);
            String expectedStatement = "Rental Record for Dinsdale\n";
            assertTrue(expectedStatement.equals(statement));
        }

        @Test
        public void testGetStatementGetsTheStatement() {
            TextStatement ts = new TextStatement();
            Customer customer = new Customer("Dinsdale Pirhana");
            List<Rental> rentalList = customer.getRentalList();
            Movie python = new Movie("Monty Python and the Holy Grail", MoviePricingCategory.REGULAR);
            Movie ran = new Movie("Ran", MoviePricingCategory.REGULAR);
            Movie la = new Movie("LA Confidential", MoviePricingCategory.NEW_RELEASE);
            Movie trek = new Movie("Star Trek 13.2", MoviePricingCategory.NEW_RELEASE);
            Movie wallace = new Movie("Wallace and Gromit", MoviePricingCategory.KIDS );

            customer.addRental(new Rental (python, 3));
            customer.addRental(new Rental (ran, 1));
            customer.addRental(new Rental (la, 2));
            customer.addRental(new Rental (trek, 1));
            customer.addRental(new Rental (wallace, 6));
            String statement = ts.getStatement(rentalList, customer);
            String expectedStatement = "Rental Record for Dinsdale Pirhana\n" +
                    "\tMonty Python and the Holy Grail\t3.5\n" +
                    "\tRan\t2.0\n" +
                    "\tLA Confidential\t6.0\n" +
                    "\tStar Trek 13.2\t3.0\n" +
                    "\tWallace and Gromit\t6.0\n" +
                    "Amount owed is 20.5\n" +
                    "You earned 6 frequent renter points";
            assertTrue(expectedStatement.equals(statement));
        }
    }

    @Test
    public void testGetHeaderLinesGivesHeaderLines(){
        TextStatement ts=new TextStatement();
        Customer cus=new Customer("Dinsadale");
        String header = ts.getHeader(cus);
        String expected="Rental Record for Dinsadale\n";
        assertTrue(expected.equals(header));
    }
}
