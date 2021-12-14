import axios from 'axios';

const Api = {

    getPersons: async function(){
        let res =  await axios.get(`https://api-pagamento-m4.herokuapp.com/pagamento`);
        let {data} = await res;
        return data;
    }
}

export default Api;

// Consumo de API =====================
// import Api from './Api'

// const [resApi, setResApi] = useState([{}])

// async function initApi(){
//   let pegaNomes = await Api.getPersons()
//   console.log(pegaNomes.Users[0])
// }
// initApi()