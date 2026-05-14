import { getUser } from "@/lib/user";
import { Shield, ShieldEllipsis, User } from "lucide-react";

export default async function Account() {
  const user = await getUser();

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
      <div className="mb-8">
        <h1 className="font-notoserif lg:text-3xl text-2xl text-slate-800">My Account</h1>
        <p className="text-slate-500 text-sm">Manage your profile settings and account preferences.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2 flex gap-2 items-center"><User className="size-4 sm:size-5 text-secondary"/> Profile Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold">Username</label>
                <p className="text-slate-700 font-medium">{user.username}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold">Email Address</label>
                <p className="text-slate-700 font-medium">{user.email}</p>
              </div>
            </div>
            <button className="mt-6 bg-secondary px-4 py-2 text-primary hover:opacity-90 transition-all text-sm font-medium rounded-md">
              Update Profile
            </button>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2 flex gap-2 items-center"><Shield className="size-4 sm:size-5 text-secondary"/> Security</h2>
            <p className="text-sm text-slate-500 mb-4">Keep your account secure by updating your password regularly.</p>
            <button className="bg-slate-100 hover:bg-slate-200 px-4 py-2 text-slate-700 text-sm font-medium rounded-md transition-colors">
              Update Password
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h2 className="text-sm font-bold text-slate-800 uppercase mb-4">Account Actions</h2>
            <div className="flex flex-col gap-3">
              <button className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-primary rounded-md transition-all">
                Logout
              </button>
              <div className="pt-4 border-t border-slate-200">
                <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-all">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}