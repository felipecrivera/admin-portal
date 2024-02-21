import React from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
function Dashboard() {
  const params = useParams();
  const { ShowSwitchButton, setShowSwitchButton } = useContext(AppContext);
  const location = useLocation();
  const { customer } = location.state;
  const navigate = useNavigate();
  if (customer.dashboardDisplay === "Both") {
    setShowSwitchButton(true);
    return navigate(`/bookings/${customer._id}`, {
      state: { customer: customer },
    });
  } else if (customer.dashboardDisplay === "Booking") {
    return navigate(`/bookings/${customer._id}`, {
      state: { customer: customer },
    });
  } else {
    return navigate(`/activations/${customer._id}`, {
      state: { customer: customer },
    });
  }

  return <></>;
}

export default Dashboard;
