// import Link from 'next/link';
// import React, { useState } from 'react'
// import { useForm } from "react-hook-form";
// import { useSession, signIn, signOut } from "next-auth/react"

// const login = () => {

//  const [login, setLogin] = useState();
//  const { data: session } = useSession();

//  const { register, handleSubmit,  formState: { errors } } = useForm();
// const onSubmit = ({email, password}) => {

    
// }






//   return (
//     <div className='formContainer'>
//         <div className='formInner'>
//         <form onSubmit={handleSubmit(onSubmit)}  className='siginForm'>
//             <h1 className='signin'>sign in </h1>
//             <div className='formWrap'>
//                 <label >
//                     <input type='email' name='email' placeholder='Email' {...register("email", { required: true })}/>
//                     {errors.email && <p className='errorMsg'>please enter email</p>}
//                 </label>
//                 <label >
//                 <input type='password' name='password' placeholder='Password' {...register("password", { required: true })}  />
//                 {errors.password && <p className='errorMsg'>please enter a valid password</p>}
//                 </label>
                
//             </div>
//             <button type='submit' className="btnred" onClick={() => setLogin(true)}>sign in</button>
//             <p onClick={() => setLogin(false)}> <span>new to netflix? </span>signup now</p>
//         </form>
        
//         </div>
//     </div>
//   )
// }

// export default login