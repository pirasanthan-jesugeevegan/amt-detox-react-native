const baseUrl = 'https://www.festicket.com';

export async function fetchAllFestival() {
  return fetch(
    `${baseUrl}/api-internal/v1/festivals/?page_size=9&sorting=popular_first&page=1`
  ).then((data) => data.json());
}
