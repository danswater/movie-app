global.fetch = jest.fn().mockImplementation(() => (
  new Promise((resolve) => {
    resolve({
      json: () => ({
        results: [{
          id: 1,
          backdrop_path: '',
          original_title: 'Batman',
          poster_path: 'Batman',
          overview: 'Batman is batman',
        }],
      }),
    });
  })
));
