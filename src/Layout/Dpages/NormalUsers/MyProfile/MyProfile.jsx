import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mx-auto text-center md:w-8/12 my-8 bg-gray-100 p-8 rounded-lg shadow-md">
      {/* Profile Picture */}
      <img
        src={
          // user?.photoURL ||
          "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
        }
        alt="User Avatar"
        className="mx-auto w-28 sm:w-52 h-28 sm:h-52 rounded-full mb-4"
      />
      <h2 className="text-emerald-400 text-4xl mb-2">
        Name: {user?.displayName || "N/A"}
      </h2>
      <p className="text-emerald-400 text-3xl mb-2">
        Email Address: {user?.email || "N/A"}
      </p>

      <p className="text-emerald-400 text-xl mb-2">
        Email Verified: {user?.emailVerified ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default MyProfile;
