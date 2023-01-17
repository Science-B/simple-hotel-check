import httpService from "./http-service";

const hotelService = {
  get: async () => {
    const { data } = await httpService.get();
    return data;
  },
};

export default hotelService;
