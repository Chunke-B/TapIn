// // pages/SomePage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SignOutModal from "../components/SignOutModal";
// import Sidebar from "../components/shared/sidebar";

// export default function LogOutPage() {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);

//   const handleSignOut = () => {
//     console.log("Signed out");
//     navigate("/logout");
//     // redirect to login or clear auth state
//   };

//   const handleConfirm = () => {
//     // clear token/session if needed
//     window.location.href = "/login"; // redirect to login
//   };

//   const handleCancel = () => {
//     window.history.back(); // go back to dashboard if user cancels
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar onLogoutClick={setShowModal} />
//       {/* <button onClick={() => setShowModal(true)}>Log out</button> */}
//       {showModal && (
//         <SignOutModal
//           onConfirm={handleSignOut}
//           onCancel={() => setShowModal(false)}
//         />
//       )}
//     </div>
//   );
// }

// pages/LogOutPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignOutModal from "../components/SignOutModal";
import Sidebar from "../components/shared/sidebar";

export default function LogOutPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true); // Automatically shows modal on route load

  const handleConfirm = () => {
    // Optional: clear auth/session data
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/dashboard"); // Or use navigate(-1) to go back
  };

  return (
    <div className="dashboard">
      <Sidebar onLogoutClick={() => setShowModal(true)} />
      {showModal && (
        <SignOutModal onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
}
