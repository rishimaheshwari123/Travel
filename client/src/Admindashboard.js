import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminlogout } from "./adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const adminName = useSelector((state) => state.adminuser.adminname);
  const myDispatch = useDispatch();
  const myNav = useNavigate();
  useEffect(() => {
    if (adminName == "") {
      myNav("/");
    }

  }, []);
  const adminLogout = () => {
    myDispatch(adminlogout());
    myNav("/");
  }

  const [valuerun, setValuerun] = useState(0);
  const [valuerun1, setValuerun1] = useState(0);
  const [valuerun2, setValuerun2] = useState(0);

  useEffect(() => {
    const timeoutIds = [];

    // Increment valuerun
    timeoutIds.push(setTimeout(() => {
      if (valuerun < 200) {
        setValuerun(valuerun + 1);
      }
    }, 100));

    // Increment valuerun1
    timeoutIds.push(setTimeout(() => {
      if (valuerun1 < 50) {
        setValuerun1(valuerun1 + 1);
      }
    }, 100));

    // Increment valuerun2
    timeoutIds.push(setTimeout(() => {
      if (valuerun2 < 56) {
        setValuerun2(valuerun2 + 1);
      }
    }, 100));

    return () => {
      // Clear all timeouts when component unmounts or re-renders
      timeoutIds.forEach(clearTimeout);
    };
  }, [valuerun, valuerun1, valuerun2]);






  const [myData, setMyData] = useState([]);
  const [newdata, setNewData] = useState([]); // Initialize newdata with an empty array

  const loadData = () => {
    let url = "http://localhost:4000/admin";
    axios.get(url).then((res) => {
      setMyData(res.data);
    });
  }
  useEffect(() => {
    loadData();

  }, []
  );

  const guestUsers = myData.map((key) => (
    <tr>
      <td>{key.id}</td>
      <td>{key.name}</td>
      <td>{key.email}</td>
      <td>{key.number}</td>

    </tr>
  ));

  return (
    <>

      <div className="admindash">
        {/* <h1 className="h1"> Welcome {adminName}!</h1> */}
        <div class="d-flex">
          <div id="adminmenu">
            <ul>
              <li><h4 className="h4">Welcome {adminName}</h4></li>
              <hr />
              <li><Link to='/Admindashboard'><i className='bx bxs-dashboard'></i>Dashboard</Link></li>
              <hr />
              <li><Link to='/roomm'><i class='bx bxs-bed' ></i>Rooms</Link></li>
              <hr />
              <li><Link to='/bookings'><i class='bx bx-calendar-check'></i>Bookings</Link></li>
              <hr />
              <li><Link to='/messsage'><i class='bx bxs-chat'></i>Messages</Link></li>
              <hr />
              <li><Link to='/settings'><i class='bx bxs-cog'></i>Settings</Link></li>
              <br />
              <li><Link to="/home" onClick={adminLogout}>Logout</Link></li>
            </ul>
          </div>
          <div className='container-dash'>
            <div class="row-dash">
              <div class="col">
                <h3 className='h3'>Volunteers</h3>
                <h5 id="run">{valuerun}</h5> <i class='bx bxs-group'></i>
              </div>
              <div class="col">
                <h3 className='h3'>Programs</h3>
                <h5 id="run1">{valuerun1}</h5>
                <i class='bx bx-calendar-plus'></i>
              </div>
              <div class="col">
                <h3 className='h3'>Projects</h3>
                <h5 id="run3">{valuerun2}</h5>
                <i class='bx bx-edit'></i>
              </div>
            </div>
            <div className='container guestuser'>
              <h1>Guest</h1>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {guestUsers}
                </tbody>
              </table>
            </div>
            




          </div>
        </div>



      </div >
      <Outlet />




    </>
  );
}
export default AdminDashboard;