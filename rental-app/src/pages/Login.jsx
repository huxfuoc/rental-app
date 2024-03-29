import React from 'react'


const Login = () => {
    return (
        <div className='login-form'>
            <div className='image-container'>
                <span className='white-text'>T</span><span className='blue-text'>II</span><span className='white-text'>RA</span>
            </div>
            <div className='form-login'>
                <h3>Login</h3>
                <div className='form-input'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username'></input>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password'></input>
                </div>
                <button className='btn-forgot' onClick={handleForgotPassword}>Forgot Password?</button>
                <button className='btn-login'>Login</button>
            </div>
        </div>
    )
}
const handleForgotPassword = () => {
    // Xử lý khi người dùng nhấp vào nút "Forgot Password"
    console.log("Forgot Password clicked!");
    // Có thể thêm mã xử lý khôi phục mật khẩu ở đây
}

export default Login
