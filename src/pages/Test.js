import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';

const Test = () => {
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

  
  return (
    <Table responsive striped bordered hover>

<thead>
    <tr>
      <th>#</th>
      <th>Surname</th>
      <th>Other Name</th>
      <th>Gender</th>
      <th>Department</th>
      <th>M. Status</th>
    </tr>
</thead>
      {data?.map((item, i) => (
  
  <tbody>
    <tr className="accordion" id="accordionExample">
      <td>{item.id}</td>
      <td>{item.surname}</td>
      <td>{item.otherName}</td>
      <td>{item.gender}</td>
      <td>{item.department}</td>
      <td>{item.membershipStatus}</td>
      <td> <Link to={`/view/${i}`} style={{ textDecoration: "none" }}>View</Link></td>
    </tr>
  </tbody>

      ))}
</Table>
  );
};

export default Test;
