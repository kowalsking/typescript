interface IPayment {
  sum: number;
  from: 2;
  to: number;
}

interface IPaymentRequest extends IPayment {}

enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed'
}

interface ISuccessData extends IPayment {
  databaseId: number;
}

interface IFailedData {
  errorMessage: string;
  errorCode: number;
}

type IResponseData = IFailedData | ISuccessData
interface IResponse {
  status: PaymentStatus;
  data: IResponseData
}