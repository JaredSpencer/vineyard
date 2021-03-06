import Addresses from '../models/addresses';

export const newAddress = (params) => {
  return new Addresses({
    street: params.street,
    street_2: params.street2,
    city: params.city,
    state: params.state,
    zip: params.zip,
    country: params.country
  }).save();
};

export const getAddressByStreet = (params) => {
  return new Addresses({
    street: params
  })
  .fetch()
  .then( function(address) {
    return address;
  })
};

export const getAddressById = (params) => {
  return new Addresses({
    id: params.id
  })
  .fetch()
  .then( function(address) {
    console.log('address found from fetch: ', address);
    return address;
  })

};
