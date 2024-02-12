import React from "react";
import { useGetCustomersQuery } from "../../../redux/customerApi";
import Loading from "../../utils/Loading";
import CustomerCard from "./CustomerCard";

function Customer() {
  const { data: customers, isLoading } = useGetCustomersQuery();

  return (
    <main className="relative z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16">
      {isLoading && <Loading />}
      {!isLoading &&
        customers &&
        (customers.length > 0 ? (
          <table className="flex flex-col gap-4">
            <thead className="flex w-full p-2 my-2">
              <th className="text-center w-1/3">First name</th>
              <th className="text-center w-1/3">Last name</th>
            </thead>
            <tbody>
              {customers.map((customer) => {
                return <CustomerCard key={customer._id} customer={customer} />;
              })}
            </tbody>
          </table>
        ) : (
          <p>No customers found </p>
        ))}
    </main>
  );
}

export default Customer;
