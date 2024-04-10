import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// create stripe checkout session => /api/v1/payment/checkout_session
export const stripeCheckoutSession = catchAsyncErrors(
  async (req, res, next) => {
    const body = req?.body;

    const line_items = body?.orderItems?.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item?.name,
            images: [item?.image],
            metadata: { productId: item?.product },
          },
          unit_amount: item?.price * 100,
        },
        tax_rates: ["txr_1P3rGISBJ2Ajfmv8rlPqloa4"],
        quantity: item?.quantity,
      };
    });

    const shippingInfo = body?.deliveryInfo;

    const shipping_rate =
      body?.itemsPrice > 50
        ? "shr_1P3r6rSBJ2Ajfmv8CJKimnZr"
        : "shr_1P3r82SBJ2Ajfmv8dpri7ps7";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      success_url: `${process.env.FRONTEND_URL}/me/orders`,
      cancel_url: `${process.env.FRONTEND_URL}`,
      customer_email: req?.user?.email,
      client_reference_id: req?.user?._id.toString(),
      mode: "payment",
      metadata: { ...shippingInfo, itemsPrice: body?.itemsPrice },
      shipping_options: [{ shipping_rate }],
      line_items,
    });

    res.status(200).json({
      url: session.url,
    });
  }
);
