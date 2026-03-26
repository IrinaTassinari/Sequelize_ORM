import axios from "axios"

async function createAccount(){
    try{
        const response = await axios.post('http://localhost:3000/accounts', {
            username: 'Johan01',
            email: 'john01@test.com'
        })
        console.log('Sever response:', response.data)
    } catch(error){
        console.error('Response error:', error.message)
    }
}

await createAccount()