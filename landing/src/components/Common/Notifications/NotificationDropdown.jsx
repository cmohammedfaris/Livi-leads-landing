"use client";

import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bell, CheckCheck, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NotificationItem from "./NotificationItem";
import {
  markAsRead,
  markAllAsRead,
} from "../../../redux/slices/notificationsSlice";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "../SplashScreen/SplashScreen";


const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { notifications, unreadCount, loading } = useSelector(
    (state) => state.notifications,
  );
  const { userInfo } = useSelector((state) => state.user);

  // Helper to determine route prefix based on role
  const getPrefix = () => {
    if (userInfo?.is_company) return "/business";
    if (userInfo?.is_employee) return "/employee";
    return "/user";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNotificationClick = (notification) => {
    if (!notification.is_read) {
      dispatch(markAsRead(notification.id));
    }
    setIsOpen(false);
    // Logic for navigation based on type and target_id
    if (notification.target_id) {
      const prefix = getPrefix();

      switch (notification.notification_type) {
        case "DOCUMENT_REQUEST":
          // Document requests for users usually go to /user/document-requests or details
          router.push(`${prefix}/document-requests/${notification.target_id}`);
          break;
        case "FILE_UPLOAD":
        case "FILE_APPROVED":
        case "FILE_REJECTED":
          // Multi-tenant file view path
          router.push(
            `${prefix}/company-profile/documents/view/${notification.target_id}`,
          );
          break;
        case "TASK_ASSIGNED":
        case "TASK_UPDATED":
          // Task view path for both business and employee
          router.push(`${prefix}/tasks/view/${notification.target_id}`);
          break;
        default:
          router.push(`${prefix}/notifications`);
          break;
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-primary/10"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-3 w-80 md:w-96 bg-white/20 dark:bg-white/10 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl origin-top-right whitespace-normal"
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <h3 className="text-sm font-bold text-black">Notifications</h3>
              <div className="flex gap-4">
                {unreadCount > 0 && (
                  <button
                    onClick={() => dispatch(markAllAsRead())}
                    className="text-xs text-black` hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    <CheckCheck className="w-3 h-3" />
                    Mark all as read
                  </button>
                )}
              </div>
            </div>

            <div className="max-h-[75vh] sm:max-h-[55vh] overflow-y-auto custom-scrollbar">
              {loading && notifications.length === 0 ? (
                <div className="p-10 text-center">
                  <SplashScreen />
                  <p className="text-gray-900 text-sm font-medium">
                    Loading notifications...
                  </p>
                </div>
              ) : notifications.length === 0 ? (
                <div className="p-10 text-center">
                  <Bell className="w-12 h-12 text-gray-900 mx-auto mb-4 opacity-40" />
                  <p className="text-gray-900 text-sm font-medium">
                    No notifications yet
                  </p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onClick={handleNotificationClick}
                  />
                ))
              )}
            </div>

            <Link href={`${getPrefix()}/notifications`}
              onClick={() => setIsOpen(false)}
              className="w-full p-5 text-center text-sm font-bold text-[#212844] dark:text-gray-200 hover:text-primary dark:hover:text-primary bg-white/5 hover:bg-primary/10 transition-all border-t border-black/10 dark:border-white/10 flex items-center justify-center gap-2"
            >
              See all notifications
              <ExternalLink className="w-3 h-3" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationDropdown;
