function BillDetails() {
  return (
    <div className="mt-6 bg-gray-50 rounded-xl p-4">

      <h2 className="font-bold text-lg mb-4">
        Bill Details
      </h2>

      <div className="flex justify-between mb-2">
        <span>Items Total</span>
        <span>₹300</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Delivery Charge</span>
        <span>₹25</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Handling Charge</span>
        <span>₹5</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between font-bold text-lg">
        <span>Grand Total</span>
        <span>₹330</span>
      </div>

    </div>
  );
}

export default BillDetails;