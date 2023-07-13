import React, { useEffect, useState } from "react";
import axios from "axios";

const PhoneDetail = ({ phoneId }) => {
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/phones/${phoneId}`)
      .then((response) => {
        setPhone(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [phoneId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!phone) {
    return <div>Phone not found</div>;
  }

  return (
    <div>
      <h2>Phone Detail</h2>
      <h3>{phone.name}</h3>
      <p>{phone.description}</p>
      <p>Price: ${phone.price}</p>
      <img src={phone.imageFileName} alt={phone.name} />
    </div>
  );
};

export default PhoneDetail;