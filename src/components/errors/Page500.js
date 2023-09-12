import React from 'react'

const Page500 = () => {
  return (
    <div>
      <div id='layoutError'>
        <div id='layoutError_content'>
          <main>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-6'>
                  <div className='text-center mt-4'>
                    <h1 className='display-1'>500</h1>
                    <p className='lead'>Internal Server Error</p>
                    <a href='index.html'>
                      <i className='fas fa-arrow-left me-1'></i>
                      Return to Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id='layoutError_footer'>
          <footer className='py-4 bg-light mt-auto'>
            <div className='container-fluid px-4'>
              <div className='d-flex align-items-center justify-content-between small'>
                <div className='text-muted'>Copyright &copy; Your Website 2023</div>
                <div>
                  <a href='#'>Privacy Policy</a>
                  &middot;
                  <a href='#'>Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
        crossorigin='anonymous'
      ></script>
      <script src='js/scripts.js'></script>
    </div>
  )
}

export default Page500