package com.twu.refactor;

import java.util.ArrayList;
import java.util.Iterator;

public class Customer {

	private String name;
	private ArrayList<Rental> rentalList = new ArrayList<Rental>();

	public Customer(String name) {
		this.name = name;
	}

	public void addRental(Rental arg) {
		rentalList.add(arg);
	}

	public String getName() {
		return name;
	}

	public String statement() {
		double totalAmount = 0;
		int frequentRenterPoints = 0;
		Iterator<Rental> rentals = rentalList.iterator();
		String result = getHeaderLines();
//        for(Rental rental:rentalList){}
		while (rentals.hasNext()) {
			double thisAmount = 0;
			Rental each = rentals.next();
            thisAmount = getAmountFor(each);
            frequentRenterPoints += getFrequentPointForNew(each);
            result += getRentalSubTotal(thisAmount, each);
			totalAmount += thisAmount;

		}
        result += getFooterLines(totalAmount, frequentRenterPoints);
		return result;
	}

    private int getFrequentPointForNew(Rental each) {
        int frequentRenterPoints=0;
        frequentRenterPoints++;
        if (isNewRealease(each)
                && each.getDaysRented() > 1)
            frequentRenterPoints++;
        return frequentRenterPoints;
    }

    private double getAmountFor(Rental each) {
        double thisAmount=0;
        switch (getMoviePriceCode(each)) {
        case Movie.REGULAR:
            thisAmount += 2;
            if (each.getDaysRented() > 2)
                thisAmount += (each.getDaysRented() - 2) * 1.5;
            break;
        case Movie.NEW_RELEASE:
            thisAmount += each.getDaysRented() * 3;
            break;
        case Movie.CHILDRENS:
            thisAmount += 1.5;
            if (each.getDaysRented() > 3)
                thisAmount += (each.getDaysRented() - 3) * 1.5;
            break;

        }
        return thisAmount;
    }

    private String getRentalSubTotal(double thisAmount, Rental each) {
        return "\t" + each.getMovie().getTitle() + "\t"
                + String.valueOf(thisAmount) + "\n";
    }

    private int getMoviePriceCode(Rental each) {
        return each.getMovie().getPriceCode();
    }

    private String getHeaderLines() {
        return "Rental Record for " + getName() + "\n";
    }

    private String getFooterLines(double totalAmount, int frequentRenterPoints) {
        String result = "Amount owed is " + String.valueOf(totalAmount) + "\n";
        result += "You earned " + String.valueOf(frequentRenterPoints)
                + " frequent renter points";
        return result;
    }

    private boolean isNewRealease(Rental each) {
        return (getMoviePriceCode(each) == Movie.NEW_RELEASE);
    }

    public String getHTMLHeader() {
        return "<H1>Rentals for<EM>"+getName() +"</EM></H1><P>";
    }

    public String getHTMLFooter(double totalAmount, int frequentRenterPoints) {
        String statement;
        statement = "<P>You owe<EM>" + String.valueOf(totalAmount) + "</EM>";
        statement += "<P>On this rental you earned<EM>" + String.valueOf(frequentRenterPoints)
                + "</EM>frequent renter points<P>";
        return statement;
    }

}
