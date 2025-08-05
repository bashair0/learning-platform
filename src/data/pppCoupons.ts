import { env } from "./env/server";

export const pppCoupons = [
  {
    stripeCouponId: env.STRIPE_PPP_10_COUPON_ID,
    discountPercentage: 0.1,
    countryCodes: ["EG", "MA", "IN"],
  },
];
