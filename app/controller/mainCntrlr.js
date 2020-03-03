const Coupon = require("../model/Code-model");
const Flat = require("../model/Flat-coupon-model");
const Percent = require("../model/Percent-coupon-model");

module.exports.calc = (req, res) => {
  const body = req.query;
  console.log(body);
  if (Object.keys(body).length == 0) {
    res.status(400).json({
      error: "Empty request made"
    });
  } else if (body.price.length == 0 && body.coupon.length == 0) {
    res.status(400).json({
      error: "Empty request made"
    });
  } else {
    const price = Number(body.price);
    const coupon = body.coupon;
    Coupon.findOne({ coupon })
      .then(coupon => {
        if (!coupon) {
          res.status(404).json({
            error: "Coupon Not Found"
          });
        } else if (coupon.endDate < Date.now()) {
          res.status(422).json({
            error: "Coupon has been expired"
          });
        }
        let coupon_id = coupon._id;
        if (coupon.couponType == "flat") {
          Flat.findOne({ coupon_id }).then(flat => {
            if (price < flat.minCartPrice) {
              res.json({
                error: `price must be atleast ${flat.minCartPrice}`
              });
            } else {
              res.json({
                cartPrice: price,
                discountAmount: flat.discountAmnt,
                finalPrice: price - flat.discountAmnt
              });
            }
          });
        } else {
          Percent.findOne({ coupon_id })
          .then(percent => {
            let percentCal = (price * percent.discountPercentage) / 100;
            if (price < percent.minCartPrice) {
              res.json({
                error: `price must be atleast ${percent.minCartPrice}`
              });
            } else if (percentCal > percent.maxDiscountAmnt) {
              res.json({
                cartPrice: price,
                discountAmount: percent.maxDiscountAmnt,
                finalPrice: price - percent.maxDiscountAmnt
              });
            } else {
              res.json({
                cartPrice: price,
                discountPercentage: percent.discountPercentage,
                finalPrice: price-percentCal
              });
            }
          });
        }
      })
      .catch(err => res.send(err));
  }
};
