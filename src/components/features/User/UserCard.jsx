import React, { useState } from "react";
import UserForm from "./UserForm";
import { useEditUserMutation } from "../../../redux/userApi";
import { createPortal } from "react-dom";

function UserCard({ user }) {
  const [showForm, setShowForm] = useState(false);

  const openEditUserForm = () => {
    setShowForm(true);
  };

  const handleOnCancel = () => {
    setShowForm(false);
  };

  const [editUser, { isLoading: isUpdating }] = useEditUserMutation();

  const handleOnSave = async (formData) => {
    console.log(formData);
    await editUser(formData);
    setShowForm(false);
  };

  return (
    <>
      {showForm &&
        createPortal(
          <UserForm
            title="Edit user"
            handleOnCancel={handleOnCancel}
            handleOnSave={handleOnSave}
            isUpdating={isUpdating}
            record={user}
          />,
          document.getElementById("portal")
        )}
      <tr className="border-b dark:border-neutral-500">
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {user.firstName}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {user.lastName}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {user.title}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {user.email}
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap">
          {user.phoneNumber}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <svg
            className="w-6 h-6 mx-auto  text-[#10113A] cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={openEditUserForm}
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

export default UserCard;
