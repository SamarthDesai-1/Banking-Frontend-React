import React from 'react'
import '../../style-css/Admin/Admin_Login.css'

function Admin_Login() {
  return (
    <div className='adlog'>
         <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <h2 class=" fw-normal mb-0 me-3 mb-3 text-center">Signin</h2>
          </div>


     
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3" >Email address</label>
            <input autoComplete='new-password' type="email" name="lemail" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

       
          <div class="form-outline mb-3">
            <label class="form-label" for="form3Example4">Password</label>
            <input autoComplete='new-password' type="password"  name="lpass" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem" ,paddingRight: "2.5rem"}}>Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Admin_Login
