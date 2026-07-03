import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Orders = () => {

  const [orders, setOrders] = useState([]);


  useEffect(() => {

    axios.get(
      "https://zerodha-0pzb.onrender.com/allOrders",
      {
        headers:{
          Authorization: localStorage.getItem("token")
        }
      }
    )
    .then((res)=>{

      setOrders(res.data);

    })
    .catch((err)=>{

      console.log(err);

    });


  }, []);



  return (
    <div className="orders">


      {
        orders.length === 0 ? (

          <div className="no-orders">

            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>

          </div>


        ) : (


          <div className="order-table">

            <table>

              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>


              {
                orders.map((order)=>(
                  
                  <tr key={order._id}>

                    <td>{order.name}</td>

                    <td>{order.qty}</td>

                    <td>{order.price}</td>

                    <td>{order.mode}</td>

                  </tr>

                ))
              }


            </table>

          </div>


        )
      }


    </div>
  );
};


export default Orders;