import axios, { AxiosInstance } from 'axios';

const axiosTimeout: number = 3000;
const baseURL = 'http://localhost:3000/api/v1';

export function createAxiosInstance({ timeout }: { timeout: number }): AxiosInstance {
    const instance = axios.create({
      timeout,
      baseURL,
    });
  
    return instance;
  }
  
  const axiosInstance = createAxiosInstance({ timeout: axiosTimeout });
  
  export default axiosInstance;