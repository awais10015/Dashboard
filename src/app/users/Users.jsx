import React from "react";
import { Edit, Trash2 } from "lucide-react";

const Users = () => {
  const dummyUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      role: "Moderator",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily@example.com",
      role: "User",
      avatar: "https://randomuser.me/api/portraits/women/76.jpg",
    },
  ];

  return (
   
      <div className="p-6 w-full">
        <h2 className="text-2xl min-w-full font-semibold mb-4">Users List</h2>
        <div className="overflow-x-auto rounded-lg shadow w-full">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3">User</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{user.name}</span>
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-sm rounded-full ${
                        user.role === "Admin"
                          ? "bg-red-100 text-red-600"
                          : user.role === "Moderator"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-3">
                    <button className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
};

export default Users;
