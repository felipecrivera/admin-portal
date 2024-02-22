import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { utils, writeFile } from "xlsx";
import { useGetAdminDashboardQuery } from "../../../redux/adminApi";
import { useGetAllCampaignQuery } from "../../../redux/campaignApi";
import Loading from "../../utils/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../layout/Navbar";
function Booking() {
  const params = useParams();
  const location = useLocation();
  const { customer } = location.state;
  const [data, setData] = useState([]);
  const [noOfBookings, setNoOfBookings] = useState();
  const [prevnoOfBookings, setPrevNoOfBookings] = useState();
  const [goalReachedPercent, setGoalReachedPercent] = useState();
  const [noOfConversations, setNoOfConversations] = useState();
  const [noOfPrevConversations, setNoOfPrevConversations] = useState();
  const [conversationRate, setConversationRate] = useState();
  const [prevconversationRate, setPrevConversationRate] = useState();
  const [currentActiveFilter, setCurrentActiveFilter] = useState(1);
  const navigate = useNavigate();
  const {
    data: dashboardData,
    refetch: adminRefetch,
  } = useGetAdminDashboardQuery({ id: params.id, filter: currentActiveFilter, type: 'Booking' });

  const {
    data: campaigns,
    refetch: campaignRefetch,
    isLoading: isCampaignLoading,
  } = useGetAllCampaignQuery(params.id);

  const onTabChange = (tab) => {
    adminRefetch();
    campaignRefetch();
    setCurrentActiveFilter(tab);
  };

  useEffect(() => {
    if (dashboardData) {
      setData(dashboardData.records);
      setNoOfBookings(dashboardData.noOfBookings);
      setNoOfConversations(dashboardData.noOfConversations);
      setPrevNoOfBookings(dashboardData.prevnoOfBookings);
      setNoOfPrevConversations(dashboardData.prevnoOfConversations);
      
      if (dashboardData.noOfConversations !== 0) {
        setConversationRate(
          Number.parseFloat(((dashboardData.noOfBookings / dashboardData.noOfConversations) * 100)).toFixed(2)
        );
      } else {
        setConversationRate(0);
      }

      if (dashboardData.prevnoOfConversations !== 0) {
        setPrevConversationRate(
          (dashboardData.prevnoOfBookings / dashboardData.prevnoOfConversations) * 100
        );
      } else {
        setPrevConversationRate(0);
      }

      if (customer && customer.bookingGoal && customer.bookingGoal != 0) {
        setGoalReachedPercent(
          (dashboardData?.noOfBookings / customer.bookingGoal / dashboardData.dayCnt) * 100
        );
      } else {
        setGoalReachedPercent(0);
      }
    }
  }, [dashboardData, customer]);

  const exportToCSV = (e) => {
    const worksheet = utils.json_to_sheet([
      {
        "Activation Date": e.activationDate,
        Company: e.company,
        Campaign: e.company,
        "First Name": e.firstName,
        "Last Name": e.lastName,
        Title: e.title,
        Phone: e.phone,
        Email: e.email,
        Address: e.address,
        City: e.city,
        State: e.state,
        "Zip Code": e.zipCode,
        Outcome: e.outCome,
        "Booking Date": e.bookingDate,
        "Booking Time ": e.bookingTime,
        Notes: e.notes,
      },
    ]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    writeFile(workbook, "Report.xlsx");
  };

  const switchToActivation = () => {
    navigate(`/activations/${customer._id}`, { state: { customer: customer } });
  };
  return (
    <>
      <main className="relative z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16 min-h-screen">
        <Navbar
          currentActiveFilter={currentActiveFilter}
          setCurrentActiveFilter={onTabChange}
        />
        <button className="font-semibold" onClick={switchToActivation}>
          Switch to Activation Dashboard
        </button>

        <div className="mt-8 flex-1">
          <div>
            <div className="">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
                <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 17 19"
                          className="h-5 w-5"
                        >
                          <path d="M15.349 1.395h-2.093V.698a.698.698 0 0 0-1.396 0v.697H4.885V.698a.698.698 0 1 0-1.396 0v.697H1.395A1.395 1.395 0 0 0 0 2.791v13.953a1.395 1.395 0 0 0 1.395 1.396H15.35a1.395 1.395 0 0 0 1.395-1.396V2.791a1.395 1.395 0 0 0-1.395-1.396ZM3.489 2.791v.697a.698.698 0 0 0 1.395 0v-.697h6.976v.697a.698.698 0 0 0 1.396 0v-.697h2.093v2.79H1.395v-2.79h2.093Zm11.86 13.953H1.395V6.977H15.35v9.767ZM6.977 9.07v5.581a.698.698 0 1 1-1.396 0v-4.453l-.385.194a.698.698 0 1 1-.624-1.249l1.395-.698a.698.698 0 0 1 1.01.625Zm5.159 2.655-1.67 2.229h1.395a.698.698 0 0 1 0 1.395H9.07a.697.697 0 0 1-.558-1.116l2.51-3.347a.697.697 0 1 0-1.161-.77.697.697 0 1 1-1.208-.697 2.093 2.093 0 1 1 3.483 2.306Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Bookings</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> {noOfBookings < prevnoOfBookings ? "-" : "+"}{prevnoOfBookings ? (noOfBookings - prevnoOfBookings) / prevnoOfBookings * 100 : 100}% </span>
                    </div>
                  </div>

                  <div className="px-4 py-6 lg:p-8">
                    <h2 className="text-5xl font-medium lg:text-8xl">
                      {noOfBookings}
                    </h2>
                  </div>

                  <div className="">
                    <div className="mb-2 flex flex-wrap justify-between gap-4 text-sm font-medium text-primary">
                      <p className="font-semibold">Progress Tracker</p>
                      <p>
                        <span className="font-medium text-secondary">
                          {Number.parseFloat(100 - goalReachedPercent).toFixed(2)} %
                        </span>
                        {" "}to goal
                      </p>
                    </div>

                    <div
                      className="flex h-5 w-full overflow-hidden bg-gradient "
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        data-aos="fade-right"
                        className="flex flex-col justify-center overflow-hidden whitespace-nowrap  bg-[#f4b610] text-center text-xs text-white transition delay-100 duration-500"
                        style={{ width: `${goalReachedPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 2xl:col-span-1">
                  <div className="rounded-xl bg-secondary/10 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                      <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                        <span className="rounded-lg bg-accent-1 p-1 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                            className="h-5 w-5"
                          >
                            <path d="M12.461 6.23v4.155a.692.692 0 1 1-1.384 0V7.902L6.72 12.259a.691.691 0 0 1-1.183-.49.693.693 0 0 1 .203-.49l4.357-4.356H7.615a.692.692 0 1 1 0-1.385h4.154a.693.693 0 0 1 .692.693ZM18 9a9 9 0 1 1-9-9 9.01 9.01 0 0 1 9 9Zm-1.385 0A7.615 7.615 0 1 0 9 16.615 7.625 7.625 0 0 0 16.615 9Z"></path>
                          </svg>
                        </span>
                        <h6 className="text-base font-medium">Conversation</h6>
                      </div>

                      <div className="flex items-center gap-px text-sm font-medium text-primary">
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 21 21"
                            className="h-4 w-4"
                          >
                            <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z"></path>
                          </svg>
                        </span>
                        <span className=""> { noOfConversations < noOfPrevConversations ? "-" : "+"} { noOfPrevConversations ? (noOfPrevConversations - noOfConversations) / noOfPrevConversations * 100 : "100"}% </span>
                      </div>
                    </div>

                    <div className="px-4 pt-4 lg:px-8">
                      <h2 className="text-5xl font-medium">
                        {noOfConversations}
                      </h2>
                    </div>
                  </div>

                  <div className="rounded-xl bg-secondary/10 p-5 flex flex-col justify-between">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                      <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                        <span className="rounded-lg bg-accent-1 p-1 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="h-5 w-5"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"></path>
                          </svg>
                        </span>
                        <h6 className="text-base font-medium">
                          Conversion Rate
                        </h6>
                      </div>

                      <div className="flex items-center gap-px text-sm font-medium text-primary">
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 21 21"
                            className="h-4 w-4"
                          >
                            <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z"></path>
                          </svg>
                        </span>
                        <span className=""> {conversationRate < prevconversationRate ? "-" : "+"} {prevconversationRate ? (conversationRate - prevconversationRate) / prevconversationRate * 100 : "100" }% </span>
                      </div>
                    </div>

                    <div className="px-4 pt-4 lg:px-8">
                      <h2 className="text-5xl font-medium">
                        {conversationRate}%
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-acflex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2cent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 18"
                          className="h-5 w-5"
                        >
                          <path d="M15.604 4.38a.636.636 0 0 1-.857-.271 7.482 7.482 0 0 0-2.66-2.935.638.638 0 0 1-.028-1.057.636.636 0 0 1 .707-.019 8.86 8.86 0 0 1 3.11 3.426.636.636 0 0 1-.272.856ZM.636 4.452a.636.636 0 0 0 .564-.343 7.483 7.483 0 0 1 2.66-2.935.636.636 0 1 0-.679-1.076 8.86 8.86 0 0 0-3.11 3.426.636.636 0 0 0 .565.928Zm14.794 8.263a1.272 1.272 0 0 1-1.098 1.912h-3.244a3.18 3.18 0 0 1-6.232 0H1.613a1.272 1.272 0 0 1-1.097-1.912c.717-1.236 1.097-2.994 1.097-5.083a6.36 6.36 0 1 1 12.719 0c0 2.088.38 3.846 1.098 5.083Zm-5.66 1.912H6.174a1.908 1.908 0 0 0 3.596 0Zm4.562-1.272c-.846-1.452-1.272-3.377-1.272-5.723a5.088 5.088 0 1 0-10.175 0c0 2.346-.428 4.272-1.272 5.723h12.719Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Campaigns</h6>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <div className="p-2 lg:p-4 min-w-500 ">
                      {isCampaignLoading && <Loading />}
                      {campaigns &&
                        !isCampaignLoading &&
                        campaigns.filter((e) => e.type== 'Boost').map((item) => {
                          return (
                            <div key={item._id}>
                              <a href={"/report?campaign=" + item._id}>
                                <div className="flex justify-between mt-6">
                                  <div>
                                    <h6 className="font-semibold">
                                      Campaign name
                                    </h6>
                                    <div className="text-base font-medium whitespace-pre">
                                      {item.name}
                                    </div>
                                  </div>
                                  <div>
                                    <h6 className="font-semibold">Description</h6>
                                    <div className="text-base font-medium whitespace-pre">
                                      {item.description}
                                    </div>
                                  </div>
                                  <div>
                                    <h6 className="font-semibold">Type</h6>
                                    <div className="text-base font-medium whitespace-pre">
                                      {item.type}
                                    </div>
                                  </div>
                                </div>

                                <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                              </a>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Reports</h6>
                    </div>
                  </div>

                  <div className="py-4 p-1 lg:p-1">
                    {data &&
                      data.filter((e) => (e.outCome == 'Booked Appt')).map((e, i) => (
                        <React.Fragment key={i}>
                          <div className="flex justify-between mt-6">
                            <div>
                              <h6 className="text-base font-medium ">
                                {e.title}
                              </h6>
                            </div>
                            <div className="">
                              <button onClick={() => exportToCSV(e)}>
                                <svg
                                  className="myhover"
                                  width="20px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Booking;
