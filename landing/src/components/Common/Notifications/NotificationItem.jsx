import PropTypes from "prop-types";
import { FileText, Upload, CheckCircle, XCircle, Bell } from "lucide-react";

const NotificationItem = ({ notification, onClick }) => {
  const getIcon = (type) => {
    switch (type) {
      case "DOCUMENT_REQUEST":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "FILE_UPLOAD":
        return <Upload className="w-5 h-5 text-purple-500" />;
      case "FILE_APPROVED":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "FILE_REJECTED":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const timeAgo = (date) => {
    try {
      const d = new Date(date);
      const now = new Date();
      const diffInSeconds = Math.floor((now - d) / 1000);

      if (diffInSeconds < 60) return "just now";
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
      if (diffInSeconds < 86400)
        return `${Math.floor(diffInSeconds / 3600)}h ago`;
      return `${Math.floor(diffInSeconds / 86400)}d ago`;
    } catch (e) {
      return "recently";
    }
  };

  return (
    <div
      onClick={() => onClick(notification)}
      className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-all hover:bg-gray-50/50 relative ${
        !notification.is_read ? "bg-blue-50/40" : ""
      }`}
    >
      <div
        className={`mt-0.5 p-2 rounded-full ${
          !notification.is_read ? "bg-white shadow-sm" : "bg-gray-100/50"
        }`}
      >
        {getIcon(notification.notification_type)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p
            className={`text-sm text-gray-900 truncate ${
              !notification.is_read ? "font-bold" : "font-medium"
            }`}
          >
            {notification.title}
          </p>
        </div>
        <p className="text-xs text-gray-600 mt-0.5 line-clamp-1">
          {notification.message}
        </p>
      </div>
      
      <div className="flex flex-col items-end gap-2 ml-auto">
        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap">
          {timeAgo(notification.created_at)}
        </span>
        {!notification.is_read && (
          <div className="w-2 h-2 rounded-full bg-primary" />
        )}
      </div>
    </div>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    notification_type: PropTypes.string,
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    created_at: PropTypes.string,
    is_read: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NotificationItem;

