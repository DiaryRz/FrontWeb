import '../assets/bootstrap/css/bootstrap.min.css'; 

 /* Login.css */
const loginContainer = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#b2adad',
};
    

  
const loginForm = {
    width: '600px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius:'10px',
    backgroundColor: 'white',
    
};

const Login = () => {  
    return(
        <> 
                <div style={loginContainer}>
                    <form style={loginForm}>
                        <div style={{ fontSize: '30px',fontFamily:'serif', marginBottom: '20px' ,color:'chocolate'}}><b>Login</b></div>
                        <div className="mb-3"> 
                            <input type="email" className="form-control" id="email" placeholder="Enter email adress" />
                        </div>
                        <div className="mb-3" style={{marginTop:'40px'}}>
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                        </div>
                        <button type="submit" className="btn btn-success" style={{width:'300px',marginTop:'30px'}}>Login</button>
                    </form>
                </div>

        </>
    );
}
export default Login;