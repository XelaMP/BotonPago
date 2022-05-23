export interface User{
    _id?: number;
    sessiontoken: string;
    channel?: string;
    merchantid?: string;
    purchasenumber?: number;
    amount?: string;
    expirationminutes?: string;
    timeouturl?: string;
    merchantlogo: string;
    formbuttoncolor: string;
    action: string;
  }
  