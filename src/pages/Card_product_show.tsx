import OrderProduct from "./OrderProduct";
import PaymentDetails from "./PaymentDetails";


const Card_product_show = () => {
  return (
    <div className="lg:flex md:flex lg:gap-10 lg:px-8 md:gap-6 md:px-4 md:justify-between">
      <OrderProduct />
      <PaymentDetails />
    </div>
  );
};

export default Card_product_show;
