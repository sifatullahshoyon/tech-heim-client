import React from 'react';
import { MdEditSquare, MdOutlineDownloadDone } from 'react-icons/md';

const PopUpModal = () => {

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button onClick={() => document.getElementById('my_modal_3').showModal()}><MdEditSquare className='w-8 h-8 hover:text-teal-600' /></button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-2xl hover:text-teal-500 text-center">Edit PersonalData..!</h3>

                    {/* form section  */}
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="location" placeholder="location" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn ml-4 rounded-lg bg-gray-700 text-white border-white border-2 hover:text-gray-700 hover:border-gray-700 hover:bg-white text-xl flex items-center "> <MdOutlineDownloadDone /> Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default PopUpModal;