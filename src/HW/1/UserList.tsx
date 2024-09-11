type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

export type UserType = {
  id:number;
  name:string;
  age:number;
  address:AddressType
};

 type UserListPropsType = {
  users: Array<UserType>;
   // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((userrr:UserType ) => ( 
          // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={userrr.id} id={`hw01-user-${userrr.id}`}>
           <strong>{userrr.name}</strong> (Age: {userrr.age})<strong> Address:</strong>
           {userrr.address.street}, {userrr.address.city}
         </li>
       ))}
      </ul>
    </div>
  );
};
