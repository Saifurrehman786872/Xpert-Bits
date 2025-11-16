import React from 'react'

const QuoteContactForm = ({onNext}) => {
  return (
      <form >
                        <div class="row">
                            <div class="col-12 col-md-6 mb-3">
                                <label class="form-label text-dark fw-bold" for="name">Name</label>
                                <input class="form-control" id="name" type="text" />
                                <div class="text-danger">

                                </div>
                            </div>
                            <div class="col-12 col-md-6 mb-3">
                                <label class="form-label text-dark fw-bold" for="email">Phone Number</label>
                                <input class="form-control" id="email" type="email" required="" />
                                <div class="text-danger">

                                </div>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <label class="form-label text-dark fw-bold" for="email">Email Address</label>
                                <input class="form-control" id="email" type="email" required="" />
                                <div class="text-danger">

                                </div>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <label class="form-label text-dark fw-bold" for="email">Company Name</label>
                                <input class="form-control" id="email" type="email" required="" />
                                <div class="text-danger">

                                </div>
                            </div>
                        </div>


                        <div class="text-end">
                            <button onClick={()=>{onNext()}} class="btn-fill text-white p-2 rounded-3 mt-2 fw-bold" type="submit">
                                Next<i class="fa-solid fa-arrow-right text-white ms-2"></i>
                            </button>
                        </div>
                    </form>
  )
}

export default QuoteContactForm
