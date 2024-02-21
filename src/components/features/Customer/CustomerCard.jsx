import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerForm from "./CustomerForm";
import { createPortal } from "react-dom";
import { useEditCustomerMutation } from "../../../redux/customerApi";
import CampaignForm from "../Campaign/CampaignForm";
import { useCreateCampaignMutation } from "../../../redux/campaignApi";
import { FaAddressBook } from "react-icons/fa";
function CustomerCard({ customer }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showCampaignForm, setShowCampaignForm] = useState(false);

  const [editCustomer, { isLoading: isUpdating }] = useEditCustomerMutation();
  const [createCampaign, { isLoading: isCampaignUpdating }] =
    useCreateCampaignMutation();

  const openEditCustomerForm = () => {
    setShowForm(true);
  };
  const handleOnCampaignCancel = () => {
    setShowCampaignForm(false);
  };

  const handleOnCampaignSave = async (formData) => {
    const updatedData = { ...formData, customer: customer._id };
    await createCampaign(updatedData);
    setShowCampaignForm(false);
  };

  const openCreateCampaignForm = () => {
    setShowCampaignForm(true);
  };

  const handleOnCancel = () => {
    setShowForm(false);
  };

  const handleOnSave = async (formData) => {
    await editCustomer(formData);
    setShowForm(false);
  };

  const openUserList = () => {
    console.log("openUserList");
    console.log(customer);
    navigate(`/users/${customer._id}`, { state: { id: customer._id } });
  };

  const onCustomerClick = () => {
    navigate(`/customer/${customer._id}`, { state: { customer: customer } });
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
            record={customer}
          />,
          document.getElementById("portal")
        )}
      {showCampaignForm &&
        createPortal(
          <CampaignForm
            title="Create campaign"
            handleOnCancel={handleOnCampaignCancel}
            handleOnSave={handleOnCampaignSave}
            isUpdating={isCampaignUpdating}
            record={customer}
          />,
          document.getElementById("portal")
        )}
      <tr className="border-b dark:border-neutral-500">
        <td
          className="px-6 py-4 cursor-pointer whitespace-nowrap"
          onClick={onCustomerClick}
        >
          {customer.AccountId}
        </td>
        <td
          className="px-6 py-4 cursor-pointer whitespace-nowrap"
          onClick={onCustomerClick}
        >
          {customer.AccountName}
        </td>
        <td
          className="px-6 py-4 cursor-pointer whitespace-nowrap"
          onClick={onCustomerClick}
        >
          {customer.bookingGoal}
        </td>
        <td
          className="px-6 py-4 cursor-pointer whitespace-nowrap"
          onClick={onCustomerClick}
        >
          {customer.activationGoal}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          <button className="underline text-blue-700" onClick={openUserList}>
            {customer.users.length}
          </button>
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

        <td className="px-6 py-4 whitespace-nowrap">
          <FaAddressBook
            className="w-6 h-6 mx-auto  text-[#10113A] cursor-pointer"
            onClick={openCreateCampaignForm}
          />
        </td>
      </tr>
    </>
  );
}

export default CustomerCard;
