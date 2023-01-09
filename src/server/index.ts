import ky from "ky-universal";


export interface Response<T = unknown> {
  data?: T
  code: number
  message: string
  success: boolean
}

export const api = ky.extend({
  prefixUrl: "/api/3/8.0.32",
  timeout: 600000,
  hooks: {
    beforeRequest: [(req) => {}],
    beforeError: [
      (error) => {
        console.log("error", error);
        return error;
      },
    ],
    afterResponse: [],
  },
});

export const staticQuerys = {
  bddid: "7KR23BILT3NEAJZSXKABEN3A3WPCZ2HTAVWDBHDWVM6E3GVQAAOQ01",
  client: "34C1DCA0-3B56-555C-B2EF-D94614CB31C9",
  clientId: "135015318",
  crt: "1672969937",
  deviceId:
    "Bp/nbo4kxe9YGRU9jlyJpwFXNUPadcULJIKfONF8GLv1Evcj6Juzsn47heeBnXFgIWUvSjLP1G2YemyD5ei8xjg==",
  newapp: "1",
  night: "0",
  sign: "4b6acbe7170f693977f1c9e62167b6e2",
  time_zone: "Asia/Shanghai",
};





export * from './list'
export * from './detail'

