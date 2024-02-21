import React from "react";
import UserCard from "./UserCard";
import { useGetAllUserQuery } from "../../../redux/userApi";
import Loading from "../../utils/Loading";
import { useLocation } from "react-router-dom";

function UserList() {
  const location = useLocation();
  const { data: users, isLoading } = useGetAllUserQuery(location.state.id);

  return (
    <main
      className="relative z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16"
      style={{ minHeight: "100vh" }}
    >
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
