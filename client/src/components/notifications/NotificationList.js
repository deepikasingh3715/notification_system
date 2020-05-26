// import React from 'react';

// const NotificationList = () => (
//     <div>
//         <h5>Form creating event------</h5>
//     </div>
// )

// export default NotificationList;







// import React from 'react';
// import 'rc-pagination/assets/index.css';
// import moment from 'moment';

// class GetNotification extends React.Component {

//     getMemberNoteStatusText = (status) => {

//         let text = '';
//         if (status === 1) {
//             text = 'Processed';
//         } else if (status === 0) {
//             text = 'In Process';
//         } else if (status === 2 || status == null) {
//             text = 'Failed';
//         }
//         return text;
//     }

//     render() {
//         let componentData;
//         let recordElementArray = [];
//         if (this.props.records) {
//             let successRecord;
//             this
//                 .props
//                 .records
//                 .records
//                 .map((record, index) => {
//                     successRecord = <tr key={index}>
//                         <td title={'Processed on - ' + moment(record.createdAt).format('MMMM DD, YYYY')}>{record.Name}</td>
//                         <td>{record.MemberId}</td>
//                         <td>{record.MOSOInvoiceId === null || record.MOSOInvoiceId === ''
//                                 ? 'N/A'
//                                 : record.MOSOInvoiceId}</td>
//                         <td>{record.Amount}</td>
//                         <td>{record.ItemCode}</td>
//                         <td>{record.Location}</td>
//                         <td>{this.getMemberNoteStatusText(record.Status)}</td>

//                     </tr>;

//                     return recordElementArray.push(successRecord);
//                 });
//         }

//         let pagination;

//         if (this.props.records) {
//             pagination = <nav aria-label="Page navigation example">
//                 <Pagination defaultPageSize={commonConstants.CREDIT_RECORDS_LIMIT_PER_PAGE} pageSize={commonConstants.CREDIT_RECORDS_LIMIT_PER_PAGE} current={this.props.currentPaginateNumber + 1} defaultCurrent={1} //change it to constant
//                     onChange={this.props.handlePagination} total={this.props.records.recordsCount} showTitle={false} hideOnSinglePage={true}/>
//             </nav>;

//         }

//         let recordsTable = (
//             <React.Fragment>
//                 <div className="table-responsive">
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>File Name</th>
//                                 <th>Member ID</th>
//                                 <th>Invoice ID</th>
//                                 <th>Amount</th>
//                                 <th>Item Code</th>
//                                 <th>Location</th>
//                                 <th>Member Note Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {recordElementArray}
//                         </tbody>
//                     </table>
//                 </div>
//                 {this.props.records && pagination}
//             </React.Fragment>
//         );

//         let emptyRecordsMessage = <h3>{commonConstants.NO_RECORDS_MESSAGE}</h3>;

//         let emptySearchRecordsMessage = <h3>{commonConstants.NO_RECORDS_SEARCH_CRITERIA_MESSAGE}</h3>;

//         if (recordElementArray.length > 0) {
//             componentData = recordsTable;
//         } else if (this.props.isSearchCriteria && this.props.memberId.length >= 0) {
//             componentData = emptySearchRecordsMessage;
//         } else {
//             componentData = emptyRecordsMessage;
//         }
//         return (
//             <React.Fragment>

//                 {!this.props.isLoading && componentData}

//             </React.Fragment>

//         );
//     }
// }

// export default GetNotification;