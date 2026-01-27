import { User } from "@/lib/actions/backoffice.action";
import { UserCookie } from "@/lib/auth";

export default function BackofficeUsersTable({users} : {users: User[]}) {
    return (
        <div className="text-black">
            {users.map((user) => (
                <div key={user.id} className="p-4 mb-2 border text-black border-gray-300 rounded-md">
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                </div>
            ))}
        </div>
    )
}