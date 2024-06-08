import { useGetUsersQuery } from "./usersApiSlice"
import User from "./User"
const UsersList = () => {

  const {
    data:users,
    isLoading,
    isError,
    error,
    isSuccess


  }=useGetUsersQuery()

  let content

  if(isLoading) content=<p>Loading..</p>

  if (isError) {
    content = (
      <p className={isError ? "text-red-500 font-bold" : "hidden"}>
        {error?.data?.message}
      </p>
    );
  }


  if (isSuccess) {
    const { ids } = users;

    const tableContent = ids?.length
      ? ids.map(userId => <User key={userId} userId={userId} />)
      : null;

    content = (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Username
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Roles
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Edit
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableContent}
        </tbody>
      </table>
    );
  }


  return content
    
}

export default UsersList
