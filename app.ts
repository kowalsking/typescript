interface IRequest {
  sum: number;
  from: 2;
  to: number;
}

enum Status {
  SUCCESS = 'success',
  FAILED = 'failed'
}

interface ISuccessData extends IRequest {
  databaseId: number;
}

interface IFailedData {
  errorMessage: string;
  errorCode: number;
}

type IResponseData = IFailedData | ISuccessData
interface IResponse {
  status: Status;
  data: IResponseData
}