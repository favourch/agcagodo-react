import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ReactToPrint } from "react-to-print";

const Edit = () => {
  const history = useHistory();
  const { rowIndex } = useParams();
  const [data, setData] = useState({
    surname: "",
    otherName: "",
    gender: "",
    department: "",
    membershipStatus: "",
    address: "",
    // date: new Date().toString(),
  });

  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/84a3c6f5-bed8-4fb5-aeec-1a2fb70ec3aa/${rowIndex}`
      );
      const data = await res.json();
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/84a3c6f5-bed8-4fb5-aeec-1a2fb70ec3aa/${rowIndex}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form style={{ maxWidth: 700, margin: "auto" }} onSubmit={handleSubmit}>
      <h1 className="text-muted text-center">Member Details</h1>
      <div className="mb-3">
        <label htmlFor="surname" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          disabled="true"
          value={data.surname + ' ' + data.otherName}
          onChange={handleChange}
        />
      </div>
      
      {/* Group for Department and Membership Status */}
      <div className="row mb-3">
        <div className="col">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <input
          type="text"
          className="form-control"
          name="gender"
          disabled="true"
          value={data.gender}
          onChange={handleChange}
        />
        </div>
        
        <div className="col">
        <label htmlFor="martialStatus" className="form-label">
          Marital Status
        </label>
        <input
          type="text"
          className="form-control"
          name="martialStatus"
          disabled="true"
          value={data.maritalStatus}
          onChange={handleChange}
        />
        </div>
      </div>
      


    {/* Group for Department and Membership Status */}
      <div className="row mb-3">
        <div className="col">
        <label htmlFor="otherName" className="form-label">
          Department
        </label>
        <input
          type="text"
          className="form-control"
          name="gender"
          disabled="true"
          value={data.department}
          onChange={handleChange}
        />
        </div>
        
        <div className="col">
        <label htmlFor="otherName" className="form-label">
          Membership Status
        </label>
        <input
          type="text"
          className="form-control"
          name="gender"
          disabled="true"
          value={data.membershipStatus}
          onChange={handleChange}
        />
        </div>
      </div>

      <div>
          <hr></hr>
      </div>

      {/* Group for Department and Membership Status */}
      <div className="row mb-3">
        <div className="col">
        <label htmlFor="otherName" className="form-label">
          State
        </label>
        <input
          type="text"
          className="form-control"
          name="state"
          disabled="true"
          value={data.state}
          onChange={handleChange}
        />
        </div>
        
        <div className="col">
        <label htmlFor="otherName" className="form-label">
          LGA
        </label>
        <input
          type="text"
          className="form-control"
          name="lga"
          disabled="true"
          value={data.lga}
          onChange={handleChange}
        />
        </div>

        <div className="col">
        <label htmlFor="otherName" className="form-label">
          Town
        </label>
        <input
          type="text"
          className="form-control"
          name="town"
          disabled="true"
          value={data.town}
          onChange={handleChange}
        />
        </div>
      </div>


      <div className="mb-3">
        <label htmlFor="membershipStatus" className="form-label">
          Current Address
        </label>
        <textarea
          name="address"
          disabled="true"
          cols="30"
          rows="3"
          className="form-control"
          value={data.address}
          onChange={handleChange}
        />
      </div>
      {/* <div className="text-center">
        <button className="btn btn-primary">Print</button>
      </div> */}
    </form>

  );

  
};

export default Edit;
