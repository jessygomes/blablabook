import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";
import EditProfile from "@/components/Profil/EditProfile";
import { auth } from "@/auth.config";

export default async function ModifierPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/se-connecter");
  }

  const userId = Number(session.user.id);
  const userData = await getUserById(userId);

  return (
    <section className="wrapper bg-white py-10 flex flex-col">
      <EditProfile
        userId={userId}
        initialData={{
          username: userData.username || "",
          description: userData.description || "",
          profilePicture: userData.profilePicture || "",
          isPrivate: userData.isPrivate || false,
        }}
      />
    </section>
  );
}
