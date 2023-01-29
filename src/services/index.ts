export const getMoviesData = async () => {
  const response = await fetch('https://test-data-interviews.s3.eu-west-1.amazonaws.com/accedoTest.json');
  return response.json();
}