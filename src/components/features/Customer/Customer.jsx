import React from "react";
import { useGetCustomersQuery } from "../../../redux/customerApi";
import Loading from "../../utils/Loading";
import CustomerCard from "./CustomerCard";

function Customer() {
  const { data: customers, isLoading } = useGetCustomersQuery();

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
                customers &&
                (customers.length > 0 ? (
                  <table className="min-w-full text-sm font-light text-left">
                    <thead className="font-medium border-b dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Account ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Account Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Booking Goal
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Activation Goal
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Number of users
                        </th>
                        <th scope="col" className="px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer) => {
                        return (
                          <CustomerCard
                            key={customer._id}
                            customer={customer}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <p>No customers found </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Customer;
