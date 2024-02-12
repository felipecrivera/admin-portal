import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import CustomerForm from "./CustomerForm";

function CustomerCard({ customer }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const onCustomerClick = () => {
    navigate(`/customer/${customer._id}`);
  };

  const handleOnCancel = () => {
    setShowForm(false);
  };

  const handleOnSave = async (formData) => {
    const rows = [formData];

    const [editCustomer, { isLoading: isUpdating }] =
      await useEditCustomerMutation(rows);

    setShowForm(false);
  };

  const openEditCustomerForm = (customer) => {
    setShowForm(true);
  };

  return (
    <>
      {showForm &&
        createPortal(
          <CustomerForm
            title="Edit customer"
            handleOnCancel={handleOnCancel}
            handleOnSave={handleOnSave}
            isUpdating={isUpdating}
          />,
          document.getElementById("portal")
        )}
      <tr
        className="border-b dark:border-neutral-500"
        onClick={onCustomerClick}
      >
        <td className="cursor-pointer whitespace-nowrap px-6 py-4">{customer.firstName}</td>
        <td className="cursor-pointer whitespace-nowrap px-6 py-4">{customer.lastName}</td>
        <td className="cursor-pointer whitespace-nowrap px-6 py-4">{customer.email}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <svg
            className="w-6 h-6 mx-auto  text-[#10113A] cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => openEditCustomerForm(customer)}
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
