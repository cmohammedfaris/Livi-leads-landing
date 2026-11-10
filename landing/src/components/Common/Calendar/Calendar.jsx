"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
} from "lucide-react";

// Separate Calendar Component
export function CalendarDialog({ isOpen, onClose, onDateSelect }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("09");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [period, setPeriod] = useState("AM");
  const [showYearSelector, setShowYearSelector] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      setCurrentMonth(new Date(now.getFullYear(), now.getMonth(), 1));
      setSelectedDate(now.getDate());
      setPeriod(now.getHours() >= 12 ? "PM" : "AM");
      const h = now.getHours() % 12 || 12;
      setSelectedHour(h.toString().padStart(2, "0"));
      setSelectedMinute(now.getMinutes().toString().padStart(2, "0"));
    }
  }, [isOpen]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return { daysInMonth: lastDay.getDate(), startingDayOfWeek: firstDay.getDay() };
  };

  const changeMonth = (direction) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  const handleSet = () => {
    if (!selectedDate) return;
    const h = parseInt(selectedHour);
    const m = parseInt(selectedMinute);
    const finalHour = period === "PM" && h !== 12 ? h + 12 : period === "AM" && h === 12 ? 0 : h;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate, finalHour, m);
    onDateSelect(date);
    onClose();
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) days.push(<div key={`empty-${i}`} className="h-[32px]"></div>);
  for (let d = 1; d <= daysInMonth; d++) {
    const isSelected = d === selectedDate;
    days.push(
      <button
        key={d}
        type="button"
        onClick={() => setSelectedDate(d)}
        className={`h-[32px] w-[32px] flex items-center justify-center text-[12px] font-medium rounded-full transition-all ${
          isSelected ? "bg-[#5B04C5] text-white shadow-md" : "text-[#212844] hover:bg-gray-100"
        }`}
      >
        {d}
      </button>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] backdrop-blur-[2px]">
      <div
        ref={dialogRef}
        className="bg-white rounded-[12px] shadow-[0px_8px_32px_rgba(33,40,68,0.12)] w-[320px] overflow-hidden animate-in fade-in zoom-in duration-200"
      >
        {/* Header */}
        <div className="h-[56px] px-[20px] flex items-center justify-between bg-white border-b border-[#DEDFEE]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[16px] font-bold text-[#212844]">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#212844] cursor-pointer">
              <path d="M5 12.5L10 7.5L15 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex gap-[4px]">
            <button type="button" onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft size={18} className="text-[#212844]" />
            </button>
            <button type="button" onClick={() => changeMonth(1)} className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight size={18} className="text-[#212844]" />
            </button>
          </div>
        </div>

        <div className="p-[20px]">
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-y-[4px] mb-[16px]">
            {weekdays.map(w => (
              <div key={w} className="text-center text-[10px] font-bold text-[#9397BB] tracking-wider py-1">
                {w}
              </div>
            ))}
            {days}
          </div>

          <div className="h-[1px] bg-[#DEDFEE] my-[16px]"></div>

          {/* Time Picker Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <input
                  type="text"
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(e.target.value.slice(0, 2))}
                  className="w-[36px] h-[36px] bg-[#F2F1F9] rounded-[8px] text-center text-[14px] font-bold text-[#212844] outline-none"
                />
                <span className="text-[14px] font-bold text-[#212844]">:</span>
                <input
                  type="text"
                  value={selectedMinute}
                  onChange={(e) => setSelectedMinute(e.target.value.slice(0, 2))}
                  className="w-[36px] h-[36px] bg-[#F2F1F9] rounded-[8px] text-center text-[14px] font-bold text-[#212844] outline-none"
                />
              </div>
            </div>

            {/* AM/PM Slider */}
            <div className="bg-[#F2F1F9] p-[3px] rounded-[10px] flex relative h-[36px] w-[84px] inner-shadow-sm">
              <div
                className={`absolute top-[3px] bottom-[3px] w-[39px] bg-white rounded-[7px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200 ${
                  period === "AM" ? "left-[3px]" : "left-[42px]"
                }`}
              />
              <button
                type="button"
                onClick={() => setPeriod("AM")}
                className={`relative flex-1 text-[12px] font-bold z-10 transition-colors ${period === "AM" ? "text-[#212844]" : "text-[#9397BB]"}`}
              >
                AM
              </button>
              <button
                type="button"
                onClick={() => setPeriod("PM")}
                className={`relative flex-1 text-[12px] font-bold z-10 transition-colors ${period === "PM" ? "text-[#212844]" : "text-[#9397BB]"}`}
              >
                PM
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#DEDFEE] p-[16px] flex justify-end gap-[12px]">
          <button
            type="button"
            onClick={onClose}
            className="text-[14px] font-bold text-[#9397BB] hover:text-[#212844] transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSet}
            className="px-[20px] h-[32px] bg-[#5B04C5] text-white text-[14px] font-bold rounded-[8px] hover:bg-[#534de0] transition-all shadow-sm flex items-center justify-center"
          >
            Set
          </button>
        </div>
      </div>
    </div>
  );
}

// Example usage component
function CalendarComponent({ setSelectedDate }) {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const handleDateSelect = (dateTime) => {
    setSelectedDate(dateTime.toLocaleString());
  };

  return (
    <div className="">
      <CalendarDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onDateSelect={handleDateSelect}
      />
    </div>
  );
}

export default CalendarComponent;
