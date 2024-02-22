import React, { useState } from "react";
import UserCard from "./UserCard";
import UserForm from "../User/UserForm";
import { useGetAllUserQuery } from "../../../redux/userApi";
import { useCreateUserMutation } from "../../../redux/userApi";
import Loading from "../../utils/Loading";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

function UserList() {
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);

  const { data: users, isLoading } = useGetAllUserQuery(location.state.id);
  const [createUser, { isLoading: isUpdating }] = useCreateUserMutation();

  const handleOnCancel = () => {
    setShowForm(false);
  };
  const handleOnSave = async (formData) => {
    createUser({...formData, customer: location.state.id})
      .then((e) => {
        if (e.error) {
          alert(e.error.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    window.location.reload();
    setShowForm(false);
  };
  const onAddUserTap = () => {
    setShowForm(true);
  };
  return (
    <main
      className="relative z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16"
      style={{ minHeight: "100vh" }}
    >
      {showForm &&
        createPortal(
          <UserForm
            title="Create user"
            handleOnCancel={handleOnCancel}
            handleOnSave={handleOnSave}
            isUpdating={isUpdating}
          />,
          document.getElementById("portal")
        )}
      <div className="w-full flex justify-end ">
        <button
          className="p-2 mx-2 bg-[#10113A] text-white rounded"
          onClick={onAddUserTap}
        >
          Add user
        </button>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {isLoading && <Loading />}
              {!isLoading &&
                users &&
                (users.length > 0 ? (
                  <table className="min-w-full text-sm font-light text-left">
                    <thead className="font-medium border-b dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          First Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Last Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Phone Number
                        </th>
                        <th scope="col" className="px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => {
                        return <UserCard key={user._id} user={user} />;
                      })}
                    </tbody>
                  </table>
                ) : (
                  <p>No users found </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserList;
