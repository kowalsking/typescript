type Success = any;
type DataS = any;

function isSuccess(res: any): res is Success {
  return res.status === PaymentStatus.Success;
}