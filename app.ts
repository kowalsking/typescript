enum PaymentStatus {
  Holded,
  Processed,
  Reversed
}

class Payment {
  id: number;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt!: Date;


  constructor(id: number) {
    this.id = id;
    this.createdAt = new Date();
    this.status = PaymentStatus.Holded;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }
}

const payment = new Payment(1);
const time = payment.getPaymentLifeTime();