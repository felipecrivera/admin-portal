import React from "react";
import { useNavigate } from "react-router-dom";

function CustomerCard({ customer }) {
  const navigate = useNavigate();
  console.log(customer);

  const onCustomerClick = () => {
    navigate(`/customer/${customer._id}`);
  };

  return (
    <div
      className="border border-black rounded px-3 py-2 m-1"
      onClick={onCustomerClick}
    >
      <h5>
        {customer.firstName} {customer.lastName}
      </h5>
    </div>
  );
}

export default CustomerCard;
