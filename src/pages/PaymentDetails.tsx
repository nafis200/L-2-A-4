import { useAppSelector } from "../redux/hooks";
import { shopSelector, subTotalSelector } from "../redux/features/cars/carSlice";
import { FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const navigate = useNavigate()
  const subTotal = useAppSelector(subTotalSelector);
  const product = useAppSelector(shopSelector)

  const handlePaymentProceed = (id:string) => {
      navigate(`/checkout/${id}`)
  };

  return (
    <div className="w-full md:w-[250px] md:sticky md:top-20 lg:w-[350px] lg:top-24 lg:sticky h-fit mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 dark:bg-background">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          💳 Payment Summary
        </h2>

        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium text-gray-800 dark:text-white">
              ${subTotal}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>$0%</span>
          </div>
          <div className="flex justify-between">
            <span>Shipment</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between">
            <span>Discount price</span>
            <span>$0</span>
          </div>
          <hr className="border-gray-300 dark:border-gray-700" />
          <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
            <span>Total</span>
            <span>${subTotal}</span>
          </div>
        </div>

        <button
          onClick={()=>handlePaymentProceed(product)}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center gap-2 transition-all duration-300"
        >
          <FaCreditCard />
          Go to Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
