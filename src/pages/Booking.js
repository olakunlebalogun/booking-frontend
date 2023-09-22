import React from 'react'

const Booking = () => {
  return (
    <div className="wrapper">
			<div className="inner">
				<div className="image-holder">
					<img src="images/registration-form-6.jpg" alt=""/>
				</div>
				<form action="">
					<h3>Make An Appointment</h3>
					<div className="form-row">
						<input type="text" className="form-control" placeholder="Name"/>
						<input type="text" className="form-control" placeholder="Mail"/>
					</div>
					<div className="form-row">
						<input type="text" className="form-control" placeholder="Phone"/>
						<div className="form-holder">
							<select name="" id="" className="form-control">
								<option value="" disabled selected>Choose Your ClassName</option>
								<option value="className 01">ClassName 01</option>
								<option value="className 02">ClassName 02</option>
								<option value="className 03">ClassName 03</option>
							</select>
							<i className="zmdi zmdi-chevron-down"></i>
						</div>
					</div>
					<textarea name="" id="" placeholder="Message" className="form-control" style="height: 130px;"></textarea>
					<button>Book Now
						<i className="zmdi zmdi-long-arrow-right"></i>
					</button>
				</form>
				
			</div>
		</div>
  )
}

export default Booking


 {/* // <div classNameName='small'>
      //   <p>Booking</p>
      //                   <Link to='/successful-booking'>
      //                     Go to Booking Succesful
      //                   </Link>
      //                 </div> */}