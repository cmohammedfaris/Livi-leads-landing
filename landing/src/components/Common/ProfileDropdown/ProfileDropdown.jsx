"use client";

import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { User, FolderClosed, Key, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { resetUser } from "../../../redux/slices/userSlice";
import { resetToken } from "../../../redux/slices/authSlice";
import { motion, AnimatePresence } from "framer-motion";
import ConfirmActionModal from "../Modal/ConfirmActionModal";

const ProfileDropdown = ({ profilePath = "/user/profile", settingsPath = "/user/settings" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoutClick = () => {
    setIsOpen(false);
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    dispatch(resetUser());
    dispatch(resetToken());
    router.push("/login");
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  // Generate a placeholder avatar or use existing
  const avatarUrl = "https://ui-avatars.com/api/?name=" + (userInfo?.username || "User") + "&background=random";
  const userName = userInfo?.username || "User Name";
  const isRestrictedStaff = userInfo?.is_staff && !userInfo?.is_superuser;

  return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-[#531DAB] text-white font-bold text-sm shadow-sm border border-gray-200 dark:border-gray-700">
            {userName.charAt(0).toUpperCase()}
          </div>
        </button>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-3 w-56 bg-white dark:bg-[#1A1B27] border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden z-50 shadow-lg origin-top-right"
            >
              <div className="py-2">
                {!isRestrictedStaff && (
                  <>
                    <button
                      onClick={() => handleNavigation(profilePath)}
                      className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-3"
                    >
                      <User className="w-4 h-4 text-primary" />
                      <span className="font-medium">My Account</span>
                    </button>
                    
                    <button
                      onClick={() => handleNavigation("/user/portfolio")} // Adjust route as needed
                      className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <FolderClosed className="w-4 h-4 text-primary" />
                        <span className="font-medium">Portfolio</span>
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center relative">
                          <svg className="w-full h-full absolute top-0 left-0 -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-primary"
                              strokeDasharray="70, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                            />
                          </svg>
                          <span className="text-[8px] font-bold">70%</span>
                      </div>
                    </button>
  
                    <button
                      onClick={() => handleNavigation(settingsPath)}
                      className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-3"
                    >
                      <Key className="w-4 h-4 text-primary" />
                      <span className="font-medium">Change Password</span>
                    </button>
                  </>
                )}
  
                <button
                  onClick={handleLogoutClick}
                  className={`w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors flex items-center gap-3 ${!isRestrictedStaff ? "border-t border-gray-100 dark:border-gray-800 mt-1 pt-3" : ""}`}
                >
                  <LogOut className="w-4 h-4 text-primary" />
                  <span className="font-medium">Log out</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      <ConfirmActionModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleConfirmLogout}
        title="Ready to leave?"
        message="Are you sure you want to log out of your account? You will need to sign in again to access your dashboard."
        confirmText="Log out"
        cancelText="Cancel"
        type="logout"
      />
    </div>
  );
};

export default ProfileDropdown;
