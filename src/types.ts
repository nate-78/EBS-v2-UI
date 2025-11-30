export interface Person {
  firstName: string;
  lastName: string;
}

export interface AcaError {
  errorMessage: string;
  errorCode: string;
  excelRow: number;
  submissionRow: number;
  lastName: string;
  firstName: string;
  coveredInd: Person;
}

export interface Submission {
  submittedOn: string;
  lastUpdatedOn: string;
  receiptId: string;
  numberOfRecords: number;
  submissionType: string;
  status: string;
  errors: AcaError[];
}

export interface Client {
  name: string;
  submissions: Submission[];
  isComplete: boolean;
  taxYear: number;
  originalSubmissionDate: string;
  originalRecordsNum: number;
  overallStatus: string;
}
