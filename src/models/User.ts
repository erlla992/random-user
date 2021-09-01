export interface UserProps {
  userImageUrl: string,
  titleAndName: string;
  age: number;
  location: string;
  phone: string;
  cell: string;
  email: string;
  username: string;
  uuid: string;
  registred: string;
  gender: string,
  dateOfBirth: string;
  address: string;
  nationality: string;
}

export const defaultUserValues =  {
  userImageUrl: "",
  titleAndName: "",
  age: 0,
  location: "",
  phone: "",
  cell: "",
  email: "",
  username: "",
  uuid: "",
  registred: "",
  gender: "",
  dateOfBirth: "",
  address: "",
  nationality: "",
};

interface assignUserFromApiDataProps {
  apiData: any,
}

/**
 * Function for putting API data into a user. Used for cleaner code in main file
 */
export const assignUserFromApiData = ({ apiData }: assignUserFromApiDataProps): UserProps => {
  const apiUser: UserProps = {
    userImageUrl: apiData?.picture?.large,
    titleAndName: apiData.name.title + ' ' + apiData.name.first + ' ' + apiData.name.last,
    age: apiData.dob.age,
    location: apiData.location.city + ' ' + apiData.location.country,
    phone: apiData.phone,
    cell: apiData.cell,
    email: apiData.email,
    username: apiData.login.username,
    uuid: apiData.login.uuid,
    registred: apiData.registered.date.split('T')[0],
    gender: apiData.gender,
    dateOfBirth: apiData.dob.date.split('T')[0],
    address: apiData.location.street.name + ' ' + apiData.location.street.number + ', ' + apiData.location.city,
    nationality: apiData.nat,
  }
  return apiUser;
}
