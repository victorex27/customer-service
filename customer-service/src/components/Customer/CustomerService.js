import axios from 'axios';
import { BILLER_SERVICE } from '../../config/envVariables';
class CustomerService {
  static async postTransaction(data) {
    // make axios call

    const res = await axios.post(`${BILLER_SERVICE}/biller`, data);

    if (res?.status !== 201 || !res?.data?.data) {
      throw new Error('Operation was not successful');
    }

    return res.data.data;
  }
}

export default CustomerService;
