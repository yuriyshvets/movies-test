import axios, { AxiosInstance } from 'axios';
import { MovieDetail } from './types';

class MovieService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: '/',
    });
  }

  public async getMovieList(token: string, page = 1) {
    const result = await this.axiosInstance.get('/api/', {
      params: {
        s: 'Batman',
        page,
        // apikey: token,
      },
    });

    return {
      result: result.data.Search,
      numberOfResult: result.data.totalResults,
    };
  }

  public async getSpecificMovie(token: string, id: string): Promise<MovieDetail> {
    const result = await this.axiosInstance.get('/api/', {
      params: {
        i: id,
        apikey: token,
      },
    });

    return result.data;
  }
}

const movieService = new MovieService();

export default {
  movieService,
};
