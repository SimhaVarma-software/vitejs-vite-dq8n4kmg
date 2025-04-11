// write the component code here
import React from "react";

const Usercard = () => {
  // Static dummy details
  const profilePhoto = "https://via.placeholder.com/150"; // Placeholder image URL
  const name = "Simha";
  const mail = "Simha@gmail.com;
  const phone = "+1 234 567 890";
  const address = "123, Elm Street, Springfield, USA";

  return (
    <div className="usercard">
      <img
        src={profilePhoto}
        alt="Profile"
        className="profile-photo"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2 className="user-name">{name}</h2>
      <p className="user-mail">📧 {mail}</p>
      <p className="user-phone">📞 {phone}</p>
      <p className="user-address">🏠 {address}</p>
    </div>
  );
};

export default Usercard;