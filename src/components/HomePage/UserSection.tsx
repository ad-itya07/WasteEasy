import React, { useState } from "react";
import Link from "next/link";
import { History, Bell } from "lucide-react";
import { UserData } from "@/types/UserApiResponse";

interface UserSectionProps {
  user: {
    userData?: UserData;
  };
}

const UserSection: React.FC<UserSectionProps> = ({ user }) => {
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 shadow-md border border-gray-300 rounded-2xl">

      {/* User Info */}
      <Link href="/profile" className="flex items-center gap-3">
        <img
          src={user?.userData?.profilePicture || "https://placehold.co/400x400"}
          className="w-12 h-12 rounded-full object-cover"
          alt="User Profile"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-xl capitalize">
            Hi, {user?.userData?.username || "Unknown"}
          </h1>
          <span className="text-sm font-medium text-gray-600">
            {user?.userData?.state || "Unknown"},{" "}
            {user?.userData?.city || "Unknown"}
          </span>
        </div>
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link href="/history">
          <History
            size={30}
            className="text-gray-500 hover:text-gray-700 transition"
          />
        </Link>
        <div className="relative">
          <Bell
            size={30}
            className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
            onClick={() => setOpenNotification(!openNotification)}
          />
          {openNotification && (
            <div className="absolute right-0 top-10 w-52 max-h-56 overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-lg p-3 z-50">
              <p className="text-sm text-gray-600">
                No notifications available.
              </p>
              {/* TODO: Add dynamic notifications here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSection;
