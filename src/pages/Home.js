import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/84a3c6f5-bed8-4fb5-aeec-1a2fb70ec3aa?_format=index"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (rowIndex) => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/84a3c6f5-bed8-4fb5-aeec-1a2fb70ec3aa/${rowIndex}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedData = data.filter((_, i) => i !== rowIndex);
        setData(updatedData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="accordion" id="accordionExample">
      {data?.map((item, i) => (
        <div className="accordion-item" key={i}>
          <h2 className="accordion-header" id={`heading${i}`}>
            
          
            
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${i}`}
              aria-expanded="true"
              aria-controls={`collapse${i}`}
            >
            
              <span className="itemID">{item.id}</span>
              <span className="itemID">{item.surname}</span>
              <span className="itemID">{item.otherName}</span>
              <span className="itemID">{item.gender}</span>
              <span className="itemID">{item.phoneNumber}</span>
              <span className="itemID">{item.department}</span>
              <span className="itemID">{item.membershipStatus}</span>
          
              
              
            </button>
          </h2>

          {/* <table>
            <tr>
              <td>{item.id}</td>
              <td>{item.surname}</td>
              <td>{item.otherName}</td>
              <td>{item.gender}</td>
              <td>{item.department}</td>
              <td>{item.membershipStatus}</td>
              </tr>
            </table> */}
            
          <div
            id={`collapse${i}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${i}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-between align-items-center">
                
           
              {item.surname} 
              {item.otherName}
              {item.gender}
              {item.phoneNumber}
              {item.department}
              {item.membershipStatus}

                <span>
                  <strong className="display-6">{item.id}</strong> ---{" "}
                  {item.surname}
                </span>
                <span>
                  <Link to={`/edit/${i}`} style={{ textDecoration: "none" }}>
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ms-1"
                    onClick={() => handleDelete(i)}
                  >
                    X
                  </button>
                </span>
              </div>
              <p>{item.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
