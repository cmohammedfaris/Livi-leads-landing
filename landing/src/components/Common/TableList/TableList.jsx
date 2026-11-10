"use client";

import {
  Card,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import {
  ChevronDown,
  ChevronLeftIcon,
  ChevronRightIcon,
  Search,
  ArrowUpDown,
  MoreHorizontal,
  Plus,
  Eye,
} from "lucide-react";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "../ProgressBar/ProgressBar";
import * as ActionIcons from "@heroicons/react/24/outline";
import SelectInput from "../SelectInput/SelectInput";
import { getStatusClass } from "@components/validation/StatusValidations";

function CommonTableList({
  heading,
  tableHead,
  tableData,
  addButtonLink,
  addButtonName,
  filter,
  filterData,
  status,
  statusProgress,
  View,
  pageCurrent,
  pageTotal,
  onPageChange,
  paginationLoading,
  sidemodal,
  action,
  actionData,
  addButtonOnClick,
  extraHeaderActions,
  loading,
  renderMobileCard
}) {
  const router = useRouter();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(pageCurrent || 1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [visibleColumns, setVisibleColumns] = useState(tableHead);
  const [showColMenu, setShowColMenu] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1241);

  useEffect(() => {
    setVisibleColumns(tableHead);
  }, [tableHead]);

  const toggleColumn = (col) => {
    setVisibleColumns(prev => {
      if (prev.includes(col)) return prev.filter(c => c !== col);
      return tableHead.filter(c => prev.includes(c) || c === col);
    });
  };

  // Filter and sort data
  useEffect(() => {
    let result = [...tableData];
    if (searchQuery) {
      result = result.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    }

    if (selectedStatus !== "All Status") {
      result = result.filter(
        (item) =>
          (item.status && item.status === selectedStatus) ||
          (item.Status && item.Status === selectedStatus) ||
          (item.verification && item.verification === selectedStatus) ||
          (item.is_active !== undefined &&
            (selectedStatus === "Active" ? item.is_active : !item.is_active)),
      );
    }

    if (sortField) {
      result.sort((a, b) => {
        let aVal = a[sortField];
        let bVal = b[sortField];
        aVal = aVal !== undefined ? String(aVal).toLowerCase() : "";
        bVal = bVal !== undefined ? String(bVal).toLowerCase() : "";
        if (sortDirection === "asc") return aVal.localeCompare(bVal);
        return bVal.localeCompare(aVal);
      });
    }

    setFilteredData(result);
  }, [tableData, searchQuery, selectedStatus, sortField, sortDirection]);

  useEffect(() => {
    if (pageCurrent !== undefined) {
      setCurrentPage(pageCurrent);
    }
  }, [pageCurrent]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const totalPages = pageTotal || Math.ceil(filteredData.length / itemsPerPage) || 1;
  const adjustedPage = pageTotal ? currentPage : (Math.min(currentPage, totalPages) || 1);
  const startIndex = (adjustedPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
  const currentData = pageTotal ? filteredData : filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1020);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSort = (field) => {
    const normalizedField = field.toLowerCase().replace(/ /g, "_");
    const newDirection =
      sortField === normalizedField && sortDirection === "asc" ? "desc" : "asc";
    setSortField(normalizedField);
    setSortDirection(newDirection);
  };

  return (
    <div
      className="w-full"
    >
      <div className={isMobile ? "w-full" : "bg-white dark:bg-darksecondary rounded-[16px] md:rounded-[20px] p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-800"}>
        {/* Header Section */}
        <div className="mb-3 md:mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {!isMobile && (
            <h3 className="text-lg font-bold text-[#212844] dark:text-white">
              {heading}
            </h3>
          )}

          <div className={`flex items-start md:items-center gap-3 w-full lg:w-auto ${isMobile ? "justify-between flex-row" : "flex-col md:flex-row"}`}>
            
            {/* Desktop Search */}
            {!isMobile && (
              <div className="flex h-10 w-full md:w-72 items-center rounded-xl bg-gray-50 dark:bg-gray-800 outline outline-1 outline-gray-200 dark:outline-gray-700 overflow-hidden shadow-sm transition-all focus-within:outline-[#5B04C5] focus-within:shadow-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-full w-full bg-transparent px-4 py-2 text-sm text-[#212844] dark:text-white outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="h-full w-10 flex items-center justify-center bg-[#5B04C5] text-white">
                  <Search size={16} />
                </button>
              </div>
            )}

            {/* Filters & Actions */}
            <div className={`flex items-center w-full md:w-auto ${isMobile ? "justify-between flex-row" : "gap-3 flex-wrap"}`}>
              {/* Left Side (On mobile: Columns icon only) */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <button
                    onClick={() => setShowColMenu(!showColMenu)}
                    className={`flex items-center justify-center gap-2 transition-colors text-sm ${isMobile ? "text-[#8487A8] bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-2 shadow-sm" : "h-10 px-4 bg-white border border-gray-200 text-[#212844] dark:bg-gray-800 dark:border-gray-700 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm w-full sm:w-auto"}`}
                  >
                    {isMobile ? <Icons.Columns size={16} /> : <><Icons.Columns size={16} /> <span className="hidden sm:inline">Columns</span></>}
                  </button>
                  {showColMenu && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setShowColMenu(false)}></div>
                      <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 top-full z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 w-[220px] p-3 flex flex-col gap-2">
                        <h3 className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Visible Columns</h3>
                        {tableHead.map((col) => (
                          <label key={col} className="flex items-center gap-3 text-sm text-[#212844] dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-1.5 rounded-lg transition-colors">
                            <input
                              type="checkbox"
                              checked={visibleColumns.includes(col)}
                              onChange={() => toggleColumn(col)}
                              className="w-4 h-4 rounded border-gray-300 text-[#5B04C5] focus:ring-[#5B04C5] cursor-pointer"
                            />
                            <span className="font-medium">{col}</span>
                          </label>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {!isMobile && filter && (
                  <div className="relative">
                    <SelectInput
                      name="FilterBy"
                      height="h-10"
                      width="w-full sm:w-36"
                      rounded="rounded-xl"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      options={(filterData || ["All Status"]).map((opt) =>
                        typeof opt === "string" ? { value: opt, label: opt } : opt,
                      )}
                    />
                  </div>
                )}
              </div>

              {/* Right Side (On mobile: Filter + Add button) */}
              <div className="flex items-center gap-2">
                {isMobile && filter && (
                  <Menu placement="bottom-end">
                    <MenuHandler>
                      <button className="flex items-center justify-center p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-gray-500 hover:text-[#5B04C5] active:scale-95 transition-transform">
                        <Icons.Filter size={16} />
                      </button>
                    </MenuHandler>
                    <MenuList className="z-[9999] min-w-[150px] p-1 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
                      {(filterData || ["All Status"]).map((opt) => {
                        const val = typeof opt === "string" ? opt : opt.value;
                        const label = typeof opt === "string" ? opt : opt.label;
                        return (
                          <MenuItem
                            key={val}
                            onClick={() => setSelectedStatus(val)}
                            className={`text-sm py-2 px-3 rounded-lg cursor-pointer transition-colors ${selectedStatus === val ? 'bg-[#EFEFFD] text-[#5B04C5] font-bold' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                          >
                            {label}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                )}

                {extraHeaderActions && extraHeaderActions}

                {addButtonName && (
                  <button
                    onClick={() =>
                      addButtonOnClick
                        ? addButtonOnClick()
                        : router.push(addButtonLink)
                    }
                    className={`flex items-center justify-center gap-1.5 font-semibold whitespace-nowrap transition-all ${isMobile ? "bg-[#EFEFFD] text-[#5B04C5] rounded-lg p-2 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm" : "h-10 px-5 bg-[#5B04C5] text-white rounded-xl shadow-lg shadow-[#5B04C5]/20 text-sm"}`}
                  >
                    {isMobile ? (
                      <Plus size={16} strokeWidth={3} />
                    ) : (
                      <>
                        <Plus size={16} strokeWidth={3} /> {addButtonName}
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Table/Mobile View */}
        {!isMobile ? (
          <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800 min-h-[240px]">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#F8F7FF] dark:bg-gray-800/50">
                  {visibleColumns.map((head, index) => {
                    const isActions = head.toLowerCase().trim() === "actions";
                    const isFirst = index === 0;
                    const isLast = index === visibleColumns.length - 1;
                    return (
                    <th
                      key={head}
                      className={`py-3.5 font-bold text-[12px] text-gray-500 dark:text-gray-400 uppercase tracking-wider ${!isActions ? "cursor-pointer" : ""} ${isFirst ? "pl-6 pr-3.5" : isLast ? "pl-3.5 pr-6" : "px-3.5"}`}
                      onClick={() => !isActions && handleSort(head)}
                    >
                      <div className={`flex items-center gap-2 ${isActions ? "justify-end" : ""}`}>
                        {head} {!isActions && <ArrowUpDown size={12} className="opacity-50" />}
                      </div>
                    </th>
                  )})}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {loading || paginationLoading ? (
                  [...Array(itemsPerPage || 5)].map((_, i) => (
                    <tr key={i} className="animate-pulse hover:bg-transparent">
                      {visibleColumns.map((col, colIndex) => {
                        const isFirst = colIndex === 0;
                        const isLast = colIndex === visibleColumns.length - 1;
                        const paddingClass = `py-4 ${isFirst ? "pl-6 pr-3.5" : isLast ? "pl-3.5 pr-6" : "px-3.5"}`;
                        return (
                          <td key={col} className={paddingClass}>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full max-w-[80%]"></div>
                          </td>
                        );
                      })}
                    </tr>
                  ))
                ) : currentData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={visibleColumns.length}
                      className="p-10 text-center"
                    >
                      <div className="flex flex-col items-center justify-center py-8">
                        <div className="w-16 h-16 mb-4 rounded-full bg-gray-50 dark:bg-gray-800/80 flex items-center justify-center shadow-inner">
                          <Icons.Inbox className="w-8 h-8 text-[#8487A8] dark:text-gray-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[15px] font-bold text-[#212844] dark:text-white mb-1.5">No Results Found</h3>
                        <p className="text-[13px] text-[#8487A8] dark:text-gray-400 max-w-sm">
                          We couldn't find any data matching your criteria. Try adjusting your filters or search terms.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentData.map((data, index) => {
                    const actions = action && actionData ? (typeof actionData === "function" ? actionData(data) : actionData) : [];
                    const viewAction = actions.find((a) => a.label.toLowerCase().includes("view"));

                    return (
                      <tr
                        key={index}
                        onClick={() => viewAction && !viewAction.disabled && (viewAction.onClick ? viewAction.onClick(data) : router.push(viewAction.path))}
                        className={`hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors ${viewAction ? "cursor-pointer" : ""}`}
                      >
                      {visibleColumns.map((column, colIndex) => {
                        const isFirst = colIndex === 0;
                        const isLast = colIndex === visibleColumns.length - 1;
                        const paddingClass = `py-3.5 ${isFirst ? "pl-6 pr-3.5" : isLast ? "pl-3.5 pr-6" : "px-3.5"}`;

                        const formattedColumn = column
                          .toLowerCase()
                          .trim()
                          .replace(/[\(\[\{].*?[\)\]\}]/g, "")
                          .replace(/ /g, "_");
                        const columnValue = data[formattedColumn];
                          console.log(columnValue, "values");
                          
                        if (
                          formattedColumn === "status" ||
                          formattedColumn === "task_status" ||
                          formattedColumn === "verification"
                        ) {
                          return (
                            <td key={column} className={paddingClass}>
                              <span
                                className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border inline-flex items-center justify-center min-w-[90px] ${getStatusClass(columnValue)}`}
                              >
                                {columnValue}
                              </span>
                            </td>
                          );
                        }

                        if (
                          statusProgress &&
                          formattedColumn === "document_status"
                        ) {
                          const [current, total] =
                            typeof columnValue === "string"
                              ? columnValue.split("/").map((n) => parseInt(n))
                              : [0, 0];
                          return (
                            <td key={column} className={paddingClass}>
                              <div className="w-10">
                                <ProgressBar
                                  currentcount={current || 0}
                                  totalcount={total || 1}
                                />
                              </div>
                            </td>
                          );
                        }

                        if (action && formattedColumn === "actions") {
                          const actions =
                            typeof actionData === "function"
                              ? actionData(data)
                              : actionData;
                          const viewAction = actions.find((a) =>
                            a.label.toLowerCase().includes("view"),
                          );
                          const otherActions = actions.filter(
                            (a) => !a.label.toLowerCase().includes("view"),
                          );

                          return (
                            <td key={column} className={paddingClass}>
                              <div className="flex items-center justify-end gap-2">
                                {viewAction && (
                                  <button
                                    onClick={() =>
                                      viewAction.onClick
                                        ? viewAction.onClick(data)
                                        : router.push(viewAction.path)
                                    }
                                    className="h-8 w-8 flex items-center justify-center bg-[#F8F7FF] text-[#5B04C5] rounded-lg hover:bg-[#5B04C5] hover:text-white transition-all shadow-sm"
                                    title="View Details"
                                  >
                                    <Eye size={16} />
                                  </button>
                                )}

                                {otherActions.length > 0 &&
                                  (otherActions.length <= 1 ? (
                                    otherActions.map((a) => {
                                      const Icon =
                                        ActionIcons[a.iconName] ||
                                        Icons[a.iconName] ||
                                        Icons[a.iconName + "Icon"] ||
                                        Eye;
                                      return (
                                        <button
                                          key={a.id}
                                          disabled={a.disabled}
                                          onClick={() =>
                                            a.onClick
                                              ? a.onClick(data)
                                              : router.push(a.path)
                                          }
                                          className={`h-8 w-8 flex items-center justify-center rounded-lg transition-all shadow-sm ${a.disabled ? "opacity-40 cursor-not-allowed bg-gray-50 text-gray-400" : (a.label.toLowerCase().includes("delete") || a.label.toLowerCase().includes("reject") ? "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white" : "bg-gray-50 text-gray-500 hover:bg-[#5B04C5] hover:text-white")}`}
                                        >
                                          {Icon && <Icon className="w-4 h-4" />}
                                        </button>
                                      );
                                    })
                                  ) : (
                                    <Menu placement={currentData.length - index <= 2 && currentData.length > 2 ? "top-end" : "bottom-end"}>
                                      <MenuHandler>
                                        <button className="h-8 w-8 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 rounded-lg text-[#8487A8] hover:bg-gray-50 transition-all">
                                          <MoreHorizontal size={16} />
                                        </button>
                                      </MenuHandler>
                                      <MenuList className="z-[9999] dark:bg-darksecondary p-2 shadow-xl rounded-xl border-none">
                                        {otherActions.map((a) => {
                                          const Icon =
                                            ActionIcons[a.iconName] ||
                                            Icons[a.iconName];
                                          return (
                                            <MenuItem
                                              key={a.id}
                                              disabled={a.disabled}
                                              className={`flex items-center gap-3 px-4 py-2 text-sm font-semibold rounded-lg ${a.disabled ? "opacity-50 cursor-not-allowed text-gray-400 hover:bg-transparent" : (a.label.toLowerCase().includes("delete") ? "text-red-500 hover:bg-red-50" : "hover:bg-gray-50 dark:hover:bg-white/5")}`}
                                              onClick={() =>
                                                !a.disabled && (a.onClick ? a.onClick(data) : router.push(a.path))
                                              }
                                            >
                                              {Icon && (
                                                <Icon className="w-4 h-4" />
                                              )}{" "}
                                              {a.label}
                                            </MenuItem>
                                          );
                                        })}
                                      </MenuList>
                                    </Menu>
                                  ))}
                              </div>
                            </td>
                          );
                        }

                        return (
                          <td key={column} className={paddingClass}>
                            <div className="flex flex-col">
                              <span className="font-bold text-[#212844] dark:text-white text-[13px]">
                                {columnValue || "—"}
                              </span>
                              {data[formattedColumn + "_sub"] && (
                                <span className="text-[11px] text-[#8487A8] dark:text-gray-400 mt-0.5">
                                  {data[formattedColumn + "_sub"]}
                                </span>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              )}
              </tbody>
            </table>
          </div>
        ) : loading || paginationLoading ? (
          <div className="space-y-4">
            {[...Array(itemsPerPage || 5)].map((_, i) => (
              <div key={i} className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm animate-pulse">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {visibleColumns.slice(0, 4).map((col) => (
                    <div key={col} className="flex flex-col gap-1.5">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : currentData.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#F8F7FF] dark:bg-gray-700/50 flex items-center justify-center shadow-inner">
              <Icons.Inbox className="w-8 h-8 text-[#5B04C5] dark:text-gray-400 opacity-80" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold text-[#212844] dark:text-white mb-1.5">No Results Found</h3>
            <p className="text-xs text-[#8487A8] dark:text-gray-400 leading-relaxed max-w-[200px]">
              We couldn't find any data to display here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {currentData.map((data, index) => {
              // Determine primary name and subtitle
              const primaryName = data.title || data.name || data.company_name || data.username || data.requester_name || data.employee_name || data.card_name || data.document_name || "Entry";
              const subtitle = data.service_product_name || data.designation || data.department || data.email_address || data.role || null;
              
              const getRawText = (element) => {
                if (typeof element === "string") return element;
                if (!element) return "";
                if (React.isValidElement(element)) {
                  return getRawText(element.props.children);
                }
                if (Array.isArray(element)) {
                  return element.map(getRawText).join("");
                }
                return String(element);
              };
              const rawName = getRawText(primaryName);
              const initial = rawName && rawName.trim().length > 0 
                ? rawName.trim().charAt(0).toUpperCase() 
                : "E";

              // Get the action list
              const actions = action && actionData ? (typeof actionData === "function" ? actionData(data) : actionData) : [];
              const viewAction = actions.find((a) => a.label.toLowerCase().includes("view"));
              const otherActions = actions.filter((a) => !a.label.toLowerCase().includes("view"));

              // Get all displayable fields (exclude internal fields and actions)
              const displayFields = visibleColumns.filter((col) => {
                const f = col.toLowerCase().trim();
                return f !== "actions" && f !== "si no" && f !== "si_no";
              });

              // Support custom mobile card rendering
              if (renderMobileCard) {
                return renderMobileCard({ data, index, actions, navigate });
              }

              return (
                <div
                  key={index}
                  onClick={() => viewAction && !viewAction.disabled && (viewAction.onClick ? viewAction.onClick(data) : router.push(viewAction.path))}
                  className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
                >
                  {/* Top Section: Avatar + Name + Menu */}
                  <div className="flex items-center gap-3 p-4 pb-3">
                    {/* Avatar */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5B04C5]/20 to-[#5B04C5]/5 flex items-center justify-center flex-shrink-0 border border-[#5B04C5]/10">
                      {data.profile_picture || data.logo ? (
                        <img src={data.profile_picture || data.logo} alt="" className="w-full h-full object-cover rounded-xl" />
                      ) : (
                        <span className="text-base font-bold text-[#5B04C5]">{initial}</span>
                      )}
                    </div>

                    {/* Name + Subtitle */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-[#212844] dark:text-white truncate">{primaryName}</h4>
                      {subtitle && (
                        <p className="text-xs text-[#8487A8] dark:text-gray-400 mt-0.5 truncate flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5B04C5]/40 flex-shrink-0"></span>
                          {subtitle}
                        </p>
                      )}
                    </div>

                    {/* Three-dot Menu */}
                    {otherActions.length > 0 && (
                      <div onClick={(e) => e.stopPropagation()}>
                        <Menu placement={currentData.length - index <= 2 && currentData.length > 2 ? "top-end" : "bottom-end"}>
                          <MenuHandler>
                            <button className="w-8 h-8 flex items-center justify-center text-[#8487A8] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all">
                              <MoreHorizontal size={18} />
                            </button>
                          </MenuHandler>
                          <MenuList className="z-[9999] dark:bg-darksecondary p-2 shadow-xl rounded-xl border-none min-w-[160px]">
                            {viewAction && (
                              <MenuItem
                                className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
                                onClick={() => !viewAction.disabled && (viewAction.onClick ? viewAction.onClick(data) : router.push(viewAction.path))}
                              >
                                <Eye className="w-4 h-4" /> View
                              </MenuItem>
                            )}
                            {otherActions.map((a) => {
                              const Icon = ActionIcons[a.iconName] || Icons[a.iconName] || Icons[a.iconName + "Icon"];
                              return (
                                <MenuItem
                                  key={a.id}
                                  disabled={a.disabled}
                                  className={`flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg ${a.disabled ? "opacity-50 cursor-not-allowed text-gray-400 hover:bg-transparent" : (a.label.toLowerCase().includes("delete") ? "text-red-500 hover:bg-red-50" : "hover:bg-gray-50 dark:hover:bg-white/5")}`}
                                  onClick={() => !a.disabled && (a.onClick ? a.onClick(data) : router.push(a.path))}
                                >
                                  {Icon && <Icon className="w-4 h-4" />} {a.label}
                                </MenuItem>
                              );
                            })}
                          </MenuList>
                        </Menu>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="mx-4 border-t border-gray-100 dark:border-gray-700/50"></div>

                  {/* Data Fields */}
                  <div className="px-4 py-3 flex flex-col gap-2.5">
                    {displayFields.map((col) => {
                      const field = col.toLowerCase().trim().replace(/[\(\[\{].*?[\)\]\}]/g, "").replace(/ /g, "_");
                      const value = data[field];

                      // Handle status field
                      if (field === "status" || field === "task_status" || field === "verification") {
                        return (
                          <div key={col} className="flex items-center justify-between">
                            <span className="text-xs font-medium text-[#8487A8] dark:text-gray-400">{col}</span>
                            <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getStatusClass(value)}`}>
                              {value || "—"}
                            </span>
                          </div>
                        );
                      }

                      // Handle document_status with progress circle
                      if (statusProgress && field === "document_status") {
                        const [current, total] = typeof value === "string"
                          ? value.split("/").map((n) => parseInt(n))
                          : [0, 0];
                        return (
                          <div key={col} className="flex items-center justify-between">
                            <span className="text-xs font-medium text-[#8487A8] dark:text-gray-400">{col}</span>
                            <div className="w-10">
                              <ProgressBar currentcount={current || 0} totalcount={total || 1} />
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={col} className="flex items-center justify-between">
                          <span className="text-xs font-medium text-[#8487A8] dark:text-gray-400">{col}</span>
                          <span className="text-xs font-bold text-[#212844] dark:text-gray-200 text-right max-w-[60%] truncate">
                            {value || "—"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {currentData.length > 0 && (
        <div className="mt-2 md:mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#8487A8]">
          <div className="flex items-center gap-3">
            <span>Show</span>
            <Menu>
              <MenuHandler>
                <button className="h-8 px-2.5 bg-white border rounded-lg flex items-center gap-2 font-bold text-[#212844]">
                  {itemsPerPage} <ChevronDown size={12} />
                </button>
              </MenuHandler>
              <MenuList className="p-1 min-w-[70px]">
                {[5, 10, 20, 50].map((num) => (
                  <MenuItem
                    key={num}
                    onClick={() => {
                      setItemsPerPage(num);
                      handlePageChange(1);
                    }}
                  >
                    {num}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <span>Records</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              className="h-9 w-9 flex items-center justify-center border rounded-xl disabled:opacity-30"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`h-9 w-9 rounded-xl font-bold text-xs ${currentPage === i + 1 ? "bg-[#5B04C5] text-white shadow-lg shadow-[#5B04C5]/20" : "bg-white border text-[#212844] hover:bg-gray-50"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              className="h-9 w-9 flex items-center justify-center border rounded-xl disabled:opacity-30"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default CommonTableList;
