import React, { useState } from "react";
import PhoneList from "./PhoneList";
import PhoneDetail from "./PhoneDetail";
import "./App.css";

const App = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState(null);

  const handleSelectPhone = (phoneId) => {
    setSelectedPhoneId(phoneId);
  };

  return (
    <div className="container">
      <h1>Phone Catalog</h1>
      <div>Please, click on the title of each phone on the left to display its details</div>
      <div className="row">
        <div className="col-md-6">
          <PhoneList onSelectPhone={handleSelectPhone} />
        </div>
        <div className="col-md-6">
          {selectedPhoneId ? (
            <PhoneDetail phoneId={selectedPhoneId} />
          ) : (
            <div>No phone selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
