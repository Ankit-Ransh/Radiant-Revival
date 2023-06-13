import React from 'react'
import "../../assets/styles/profile.css"

export default function Profile() {
  return (
    <>
    {/* <!-- Navbar top --> */}
    <div class="navbar-top">
      <div class="title">
        <h1>Profile</h1>
      </div>

      {/* <!-- Navbar --> */}
      <ul>
        <li>
          <a href="{{url_for('home')}}">
            <i class="fa fa-home fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="{{url_for('logout')}}">
            <i class="fa fa-sign-out-alt fa-2x"></i>
          </a>
        </li>
      </ul>
      {/* <!-- End --> */}
    </div>
    {/* <!-- End --> */}

    {/* <!-- Sidenav --> */}
    <div class="sidenav">
      <div class="profile">
        <img
          src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
          alt=""
          width="100"
          height="100"
        />

        <div class="name"> UserName </div>
        <div class="job"> Customer </div>
      </div>

      <div class="sidenav-url">
        <div class="url">
          <a href="{{url_for('profile')}}" class="active">Profile</a>
          <hr align="center" />
        </div>
        <div class="url">
          <a href="{{url_for('settings')}}">Settings</a>
          <hr align="center" />
        </div>
      </div>
    </div>
    {/* <!-- End --> */}

    {/* <!-- Main --> */}
    <div class="main">
      <h2>IDENTITY</h2>
      <div class="card">
        <div class="card-body">
          <i class="fa fa-pen fa-xs edit"></i>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td> Name </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td> Email </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td> Address </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>:</td>
                <td> Phone Number </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Contact Us</h2>
      <div class="card">
        <div class="card-body">
          <i class="fa fa-pen fa-xs edit"></i>
          <div class="social-media">

            {/* <!-- facebook --> */}
            <span class="fa-stack fa-sm">
              <i class="fas fa-circle fa-stack-2x"></i>
              <a href = "{{url_for('facebook')}}" > <i class="fab fa-facebook fa-stack-1x fa-inverse"></i> </a>
            </span>

            {/* <!-- twitter  --> */}
            <span class="fa-stack fa-sm">
              <i class="fas fa-circle fa-stack-2x"></i>
              <a  href = "{{url_for('twitter')}}" > <i class="fab fa-twitter fa-stack-1x fa-inverse">   </i> </a>
            </span>

            {/* <!-- instagram --> */}
            <span class="fa-stack fa-sm">
              <i class="fas fa-circle fa-stack-2x"></i>
              <a href = "{{ url_for('instagram') }}" > <i class="fab fa-instagram fa-stack-1x fa-inverse"></i> </a>
            </span>

            {/* <!-- linkedin --> */}
            <span class="fa-stack fa-sm">
              <i class="fas fa-circle fa-stack-2x"></i>
              <a href = "{{ url_for('linkedin') }}" > <i class="fab fa-invision fa-stack-1x fa-inverse"></i> </a>
            </span>

            {/* <!-- whatsapp  --> */}
            <span class="fa-stack fa-sm">
              <i class="fas fa-circle fa-stack-2x"></i>
              <a href = "{{ url_for('whatsapp') }}" > <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i> </a>
            </span>

          </div>
        </div>
      </div> 


    </div>
    {/* <!-- End --> */}
    </>
  )
}
