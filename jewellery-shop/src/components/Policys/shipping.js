import React from "react";

const shipping = () => {
  return (
    <div className="container">
      <div className="text-centre" style={{ margin: "100px 0 50px 0" }}>
        <h2>SHIPPING & DELIVERY</h2>
        <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
      </div>
      <div className="row policy-header">
        <h5>HOW WILL MY ORDER BE SHIPPED?</h5>
        <p>
          Once your made-to-order piece is ready and certified, we pack it in
          adorable boxes and ship it through reliable shipping companies. The
          product will be delivered at your doorstep. We take extra care in
          shipping jewellery since it&rsquo;s a high value item. Thus, each and
          every order delivery is transit insured to make sure that your perfect
          piece reaches you safely. The order shall reach you in 10-15 business
          days if it's not in stock. If your order is already available in our
          inventory, it will be shipped within 1-2 days and be delivered with
          4-6 days.
        </p>

        <h5>
          I HAVE ORDERED A HIGH VALUE ITEM. WHAT IF IT GETS MISPLACED DURING
          SHIPPING?
        </h5>
        <p>
          Though the chances are minimal, but in the event that your order gets
          misplaced during transit, we will re-ship the product to you without
          any additional cost. The complete responsibility of the order rests on
          our shoulder till we deliver the product safely in your hands. You can
          rest be assured that the product you have ordered and paid for, will
          come to you by all means.
        </p>

        <h5>HOW CAN I TRACK THE STATUS OF THE ORDER?</h5>
        <p>
          The status of the order can be tracked by logging into your account on
          our website. Look for “Orders” under the “My Account” section to check
          the status of your order. Alternatively, the order can also be tracked
          here without logging in.
        </p>

        <h5>CAN YOU SHIP THE PRODUCTS OUTSIDE INDIA?</h5>
        <p>
          Yes, BlueStone proudly ships worldwide and offers multiple shipping
          options for all our customers. Over the years, BlueStone has excelled
          in catering to customers from all over the world. To make it simpler
          for us, BlueStone charges a flat international shipping fee for all
          its orders, irrespective of the order value. Our shipping charges are
          very economical and on actual-cost basis. Further, PayPal payment
          option is available for international customers.
        </p>

        <h5>I STILL HAVE SOME QUESTIONS. HELP ME, PLEASE.</h5>
        <p>
          Don’t worry. We will happily answer all your queries and concerns.
          Just drop us an email at yourfriends@BlueStone.com Or Call on 0141 493
          8866 Or Start a Live Chat session with us to help us help you better.
        </p>
      </div>
    </div>
  );
};

export default shipping;
