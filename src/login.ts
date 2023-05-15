import axios from 'axios';

async function Login(email:string , password:string) {
    try {
        const response = await axios.post('https://reqres.in/api/login', {
          username: email,
          password: password
        });
        console.log(response.data);

    }catch(error){
       alert('datos erroneos')
        
    }  
}

export default Login