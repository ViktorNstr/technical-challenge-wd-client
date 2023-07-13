import React, { useState, useEffect } from "react";
import axios from "axios";

const PhoneList = ({ onSelectPhone }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/phones")
      .then((response) => {
        const allPhones = response.data;
        setPhones(allPhones);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handlePhoneClick = (phoneId) => {
    onSelectPhone(phoneId);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {phones.map((phone) => (
            <li
              key={phone.id}
              onClick={() => handlePhoneClick(phone.id)}
              style={{ cursor: "pointer" }}
            >
              {phone.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhoneList;
