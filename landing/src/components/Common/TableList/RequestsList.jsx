import React from "react";
import CommonTableList from "./TableList";

function RequestsList({
  heading,
  tableData,
  tableHead,
  addButtonName,
  addButtonLink,
  status,
  statusProgress,
  View,
  currentPage,
  totalPages,
  onPageChange,
  paginationLoading,
  filterData,
  filter,
  sidemodal,
  action,
  actionData,
  addButtonOnClick,
  loading,
  renderMobileCard
}) {
  return (
    <div>
      <CommonTableList
        addButtonLink={addButtonLink}
        addButtonName={addButtonName}
        addButtonOnClick={addButtonOnClick}
        status={status}
        statusProgress={statusProgress}
        heading={heading}
        tableData={tableData}
        tableHead={tableHead}
        View={View}
        pageCurrent={currentPage}
        pageTotal={totalPages}
        onPageChange={onPageChange}
        paginationLoading={paginationLoading}
        sidemodal={sidemodal}
        filter={filter}
        filterData={filterData}
        action={action}
        actionData={actionData}
        loading={loading}
        renderMobileCard={renderMobileCard}
      />
    </div>
  );
}

export default RequestsList;
