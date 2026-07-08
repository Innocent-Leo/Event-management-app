import React from "react";
import { assets } from "../../assets/assets";
import { GoPencil } from "react-icons/go";

const ProfilePage = () => {
  return (
    <div className="px-16 py-6">
      <div className="flex gap-6">
        <div className="relative">
          <img
            src={assets.avatars.profilePicture}
            alt="profile-picture"
            className="h-30 w-43 rounded-2xl object-cover"
          />

          <div className="absolute top-2 right-2 rounded-full bg-white p-1">
            <GoPencil size={14} />
          </div>
        </div>

        <div className="bg-light-cyan/30 relative w-full rounded-3xl p-4 px-6 font-medium">
          <div className="absolute top-6 right-6 rounded-full bg-white p-1.5">
            <GoPencil size={14} />
          </div>

          <h1 className="text-orange mb-4 text-2xl font-semibold">
            Dean Dun Kirk
          </h1>
          <div className="*:not-last:mb-2 [&>div>span]:font-semibold">
            <div>
              Date of Birth: <span>27th October 1997</span>
            </div>
            <div>
              Gender: <span>Male</span>
            </div>
            <div>
              Marital Status: <span>Married</span>
            </div>
            <div>
              Email: <span>deandun@gmail.com</span>
            </div>
            <div>
              Mobile: <span>+123 987654678</span>
            </div>
            <div className="flex gap-1.5">
              <div>Hobbies:</div>
              <div className="*:bg-light-cyan text-cyan-lightest flex items-center gap-2 rounded-lg text-[10px] *:rounded *:px-3 *:py-2 *:shadow">
                <div>Art</div>
                <div>Traveling</div>
                <div>Partying</div>
              </div>
            </div>

            <div className="flex gap-1.5">
              <div>Medical Condition:</div>
              <div className="*:bg-light-orange text-cyan-lightest flex items-center gap-2 rounded-lg text-[10px] *:rounded *:px-3 *:py-2 *:shadow">
                <div>Autism Spectrum</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
