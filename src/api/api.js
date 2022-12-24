import axios from 'axios';

axios.defaults.baseURL = 'https://639eddc35eb8889197ee98fe.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  // console.log(data);
  return data;
  // handle success
  // console.log(response);
  //   })
  //   .catch(function (error) {
  // handle error
  // console.log(error);
}
// }
export async function fetchContactsById(contactId) {
  const { data } = await axios.get(`/contacts/${contactId}?_expend=name`);
  // console.log(data);
  return data;
}

//   axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })

//   axios.delete(url[, config])
