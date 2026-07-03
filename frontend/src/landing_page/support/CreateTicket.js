import React, { useState } from "react";
import "./CreateTicket.css";

function CreateTicket() {

  const [open, setOpen] = useState(null);


  const tickets = [
    {
      title:"Account Opening",
      icon:"fa-plus-circle",
      links:[
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started"
      ]
    },

    {
      title:"Your Zerodha Account",
      icon:"fa-user-circle",
      links:[
        "Login issues",
        "Account modification",
        "Profile update",
        "Account closure"
      ]
    },


    {
      title:"Kite",
      icon:"fa-line-chart",
      links:[
        "Kite login",
        "Kite user manual",
        "Trading issues",
        "Orders"
      ]
    },


    {
      title:"Funds",
      icon:"fa-inr",
      links:[
        "Add funds",
        "Withdraw funds",
        "Fund transfer"
      ]
    },


    {
      title:"Console",
      icon:"fa-circle-o",
      links:[
        "Reports",
        "Statements",
        "Portfolio"
      ]
    },


    {
      title:"Coin",
      icon:"fa-clock-o",
      links:[
        "Mutual funds",
        "SIP",
        "Withdraw"
      ]
    }

  ];



  return (

    <>

    <div className="support-top">

      <div className="container">

        <div className="heading">

          <h1>Support Portal</h1>

          <button>
            My tickets
          </button>

        </div>


        <div className="search">

          <i className="fa fa-search"></i>

          <input 
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          />

        </div>


      </div>

    </div>




    <div className="container mt-5">

      <div className="row">


        {/* Left */}

        <div className="col-md-8">


        {
          tickets.map((ticket,index)=>(


            <div className="ticket-box" key={index}>


              <div 
              className="ticket-head"
              onClick={()=>
                setOpen(open===index ? null:index)
              }
              >


                <div className="ticket-icon">

                <i className={`fa ${ticket.icon}`}></i>

                </div>


                <h4>
                  {ticket.title}
                </h4>


                <i className="fa fa-chevron-down"></i>


              </div>



              {
                open===index &&

                <div className="ticket-content">

                {
                  ticket.links.map((link,i)=>(

                    <a href="#" key={i} >
                      {link}
                    </a>

                  ))
                }

                </div>

              }


            </div>


          ))
        }


        </div>




        {/* Right */}


        <div className="col-md-4">


          <div className="notice">

            <ul>

              <li>
                Adjustment of F&O contracts of MPHASIS due to dividend
              </li>

              <li>
                Adjustment of F&O contracts of UNIONBANK due to dividend
              </li>


            </ul>

          </div>



          <div className="quick-links">

            <h4>
              Quick links
            </h4>


            <a href="#">1. Track account opening</a>
            <a href="#">2. Track segment activation</a>
            <a href="#">3. Intraday margins</a>
            <a href="#">4. Kite user manual</a>
            <a href="#">5. Learn how to create a ticket</a>


          </div>


        </div>


      </div>

    </div>
    <div className="p-5"></div>


    </>

  )
}


export default CreateTicket;