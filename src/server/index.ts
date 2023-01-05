import ky from "ky-universal";

export const api = ky.extend({
  prefixUrl: "/api",
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
  crt: "1672813210",
  deviceId:
    "Bk58mCtybJ1Jhp5a1S/I36yGlSNi2aYGZ43LULUHfvYjRG9MyiCxonMropgbR8U980BLn5FmCFledXiyt/zUSvA%3D%3D",
  newapp: "1",
  night: "0",
  sign: "962f4ab7cdcf409f2cc99a6d925f07f6",
  stamp: "0",
  time_zone: "Asia/Shanghai",
};


export * from './list'

