# Coupon Code Application

Coupon Code Application is a coupon management application based on Node.js. It allows the user to validate their coupon, apply the coupon on their cart to get the discount amount , create coupons , list them and edit them. 
You can find the working application [here](https://shrouded-escarpment-03337.herokuapp.com/). Please make sure you add your coupons.

## Dependencies and Installation

1. express `npm install express`
2. mongoose `npm install mongoose`
3. nodemon `npm install nodemon`

## Features

* Validation of coupon.
* Makes use of two types of coupons - Flat Dicount types & Percentage Discount types
* If coupon is valid, calculates the discount for the cartPrice and returns the final amount after discount.
* For Percentage Discount coupon, output depends on if the percentage amount is over or under the maximum allowed discount. 

## Getting it running

1. Install all dependencies by running - `npm install`
2. To start the application - `npm start`

## Usage

* `/couponvalidator?price=<-price->&coupon=<-coupon->` returns the cartPrice, discountAmount & finalPrice.
* User can add main coupon by making a "post" request to `/coupons` with "startDate" , "endDate" & "couponType". 
* Flat Dicount coupon is added by making a "post" request to `/coupons/flatcoupons` with "coupon_id"(refers to the "_id" of main coupon created), "discountAmnt" and "minCartPrice".
* Percentage Discount coupon is added by making a "post" request to `/coupons/percentagecoupons` with "coupon_id"(refers to the "_id" of main coupon created) , "maxDiscountAmnt", "minCartPrice" and "discountPercentage".
* Flat Dicount and Percentage Discount coupon can be deleted by sending DELTE request to `/coupons/flatcoupons/:<coupon_id>` and `/coupons/percentagecoupons/:<coupon_id>` respectively 
(*Note: The `<coupon_id>` mentioned here is main coupon's `"_id"` that was refered to during creation of the sub coupons and not their current fields `"_id"`* ).

For more detailed working instruction refer https://shrouded-escarpment-03337.herokuapp.com/

### License

Copyright(c) 2020 
