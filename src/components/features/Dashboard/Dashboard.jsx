import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const { customer } = location.state;
  const navigate = useNavigate();
  if (customer.dashboardDisplay === "Both") {
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
}

export default Dashboard;
