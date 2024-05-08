
import axios from "axios";
import router from "next/router";
import { toast } from "react-toastify";

const loginStudents = async (user: string, password: string) => {
    
        try {

            const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}/Users/Login`, `username=${user}&password=${password}`, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            // const router = useRouter();
            // const x = atob('eyJpZDoiOjEsInN1YiI6Imx1aXNkbG9wZXJhIiwic2NvcGUiOiIiLCJleHAiOjE3MTQyNDg1MDd9');
            // console.log('atob', x);

            // console.log('response login: ', response);
            // console.log(response.data);
            // console.log('jwtToken: ', jwtToken);
            
            const jwtToken = response.data.access_token;
            const token_type = response.data.token_type;

            sessionStorage.setItem('token', `${token_type} ${jwtToken}`);

            if (response.status === 200) {
                console.log('Login success!');
                return true;
            }

        } catch (error) {
            toast.error('¡Ups! Algo salió mal, estamos trabajando para resolverlo.');
            return `Tiene un error: ${error}`;
        }

};

export { loginStudents };