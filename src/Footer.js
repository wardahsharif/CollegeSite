import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
<div className="footer">
<div className="footerSection bg-dark">
  {/*footer start section */}
<table class="table table-borderless table-dark">
  <thead>
    <tr>
      <th scope="col">IST COLLEGE HALL</th>
      <th scope="col">USEFUL LINKS</th>
      <th scope="col">CAMPUS TODAY</th>
      <th scope="col">RESEARCH</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <th scope="row">8353 Sierra Avenue</th>
      <td>Academics</td>
      <td>Life & Events</td>
      <td>Academic Divisions</td>
    </tr>
    <tr>
      <th scope="row">Frisco, CA 91335</th>
      <td>Student Life</td>
      <td>Housing</td>
      <td>Student Research</td>
    </tr>
    <tr>
      <th scope="row">Monday – Thursday, 8:00 am – 6:00 pm</th>
      <td colspan="2">Community</td>
       <td>Centers & Institutes</td>

    </tr>
  </tbody>
</table>
<hr/>
<div className="bg-dark text-light">
    <hr/>
    <p>
    <center>©copyright 2019 - IST College   </center>
    </p>
</div>
</div>


</div>
    )
}

export default Footer;