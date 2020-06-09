import axios, { AxiosInstance } from 'axios';
import { MovieDetail, MoviesResponse } from './types';

class MovieService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: '/',
    });
  }

  public async getMovieList(options: object) {
    const result = await this.axiosInstance.get<MoviesResponse>('/api/', {
      params: {
        s: 'Batman',
        ...options,
      },
    });

    return {
      result: result.data.Search,
      numberOfResults: +result.data.totalResults,
    };
  }

  public async getSpecificMovie(id: string) {
    const result = await this.axiosInstance.get<MovieDetail>('/api/', {
      params: {
        i: id,
      },
    });

    return result.data;
  }
}

const movieService = new MovieService();

export default {
  movieService,
};
