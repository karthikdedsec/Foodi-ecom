import { HiTrash } from "react-icons/hi";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  // Calculate total price
  const totalPrice = cartItems?.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="min-h-screen mt-3 flex justify-center items-center">
      <div className="max-w-screen-xl flex flex-col sm:flex-row justify-between items-center gap-8  container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className=" container mx-auto mt-8 flex-1">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          {cartItems?.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems?.map((item) => (
                <div
                  key={item?.product}
                  className="flex items-center justify-between border-b border-gray-200 py-2"
                >
                  <div className="flex items-center space-x-7">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">{item?.name}</p>
                      <p className="text-gray-600">${item?.price}</p>
                    </div>
                    <div className="flex gap-2 ">
                      <span className="btn btn-danger h-12 w-12 rounded-full minus">
                        -
                      </span>
                      <input
                        type="number"
                        className="form-input count w-8 text-center"
                        value={item?.quantity}
                        readOnly
                      />
                      <span className="btn text-white bg-green-500 h-12 w-12 rounded-full plus">
                        +
                      </span>
                    </div>
                  </div>
                  <button className="text-red-500 pl-5">
                    <HiTrash className="text-xl" />
                  </button>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-lg font-semibold">
                  Total: ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full sm:w-auto">
          <div className="bg-gray-100 p-9 rounded-lg ">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
