import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerForm from "./CustomerForm";
import { createPortal } from "react-dom";

function CustomerCard({ customer }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const openEditCustomerForm = () => {
    setShowForm(true);
  };

  const handleOnCancel = () => {
    setShowForm(false);
  };

  const handleOnSave = async (formData) => {
    const rows = [formData];

    // Assuming useEditCustomerMutation is an asynchronous function that handles customer updates
    try {
      // Simulating a loading state while the update is being processed
      setIsUpdating(true);

      // Perform the edit operation here
      const [editCustomer, { isLoading }] = await useEditCustomerMutation(rows);

      // After the update is done, hide the form
      setShowForm(false);
    } catch (error) {
      // Handle errors appropriately
    } finally {
      // Reset the loading state
      setIsUpdating(false);
    }
  };

  const [isUpdating, setIsUpdating] = useState(false); // Define isUpdating state

  return (
    <>
      {showForm &&
        createPortal(
          <CustomerForm
            title="Edit customer"
            handleOnCancel={handleOnCancel}
            handleOnSave={handleOnSave}
            isUpdating={isUpdating}
            record={customer}
          />,
          document.getElementById("portal")
        )}
      <tr
        className="border-b dark:border-neutral-500"
        // onClick={onCustomerClick}
      >
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {customer._id}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {customer.firstName} {customer.lastName}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {customer.bookingGoal}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {customer.activationGoal}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {customer.users.length}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <svg
            className="w-6 h-6 mx-auto  text-[#10113A] cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={openEditCustomerForm}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
            />
          </svg>
        </td>
      </tr>
    </>
  );
}

export default CustomerCard;
