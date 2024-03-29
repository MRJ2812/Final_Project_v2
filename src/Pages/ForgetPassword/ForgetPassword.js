import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';




const ForgetPassword = () => {

    useTitle("Reset password");

    const { passwordReset } = useContext(AuthContext);

    const [error, setError] = useState(null);


    const handlePasswordReset = (event) => {

        event.preventDefault();
        const email = event.target.email.value;

        setError('')
        passwordReset(email)
            .then(() => {
                event.target.reset();
                toast.success('Please check your email address!', {
                    duration: 4000,
                    position: 'top-center',
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError("There is no valid user in this email.");
            });
    }




    return (
        <div>
            <div className="bg-white flex w-3/5 mx-auto mt-10 rounded-2xl shadow-lg  p-5 items-center mb-6">
                <form className="w-3/5 mx-auto" onSubmit={handlePasswordReset}>
                    <h2 className=" text-2xl font-bold mb-4">Reset password</h2>
                    <p className="text-left text-gray-600 mb-4">Enter the email address associated with your account and we'll send you a link to reset your password.</p>

                    <div className="mb-4">
                        <input type="email" className="border border-gray-300 rounded-lg w-full px-4 py-3" name="email" placeholder="Email Address" required />
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 w-full rounded-lg">Continue</button>
                    </div>

                    <div className="mt-3 text-xs  flex justify-between items-center text-[#002D74]">
                        <p className='text-base text-left text-red-700'>{error}</p>
                    </div>

                </form>

            </div>


        </div >
    );
};

export default ForgetPassword;