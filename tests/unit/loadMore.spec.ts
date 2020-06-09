import { shallowMount, VueClass } from '@vue/test-utils';
import MovieList from '@/components/MovieList.vue';

function getMountedComponent(Component: VueClass<Vue>, propsData: object) {
  return shallowMount(Component, {
    propsData,
  });
}

const movies = [
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
    Title: 'Batman Begins',
    Type: 'movie',
    Year: '2005',
    imdbID: 'tt0372784',
  },
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Title: 'Batman v Superman: Dawn of Justice',
    Type: 'movie',
    Year: '2016',
    imdbID: 'tt2975590',
  },
];

describe('Load more button', () => {
  it('should show the load more button', () => {
    expect(
      getMountedComponent(MovieList, {
        movies,
        total: 20,
        getMovies: () => {},
        incrementPage: () => {},
      })
        .get('button')
        .text()
    ).toBe('Load more');
  });

  it('should hide the load more button', () => {
    expect(
      getMountedComponent(MovieList, {
        movies,
        total: 2,
        getMovies: () => {},
        incrementPage: () => {},
      })
        .find('button')
        .exists()
    ).toBe(false);
  });
});
