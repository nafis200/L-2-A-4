import  { TQueryParam, Car, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";



const carManagementApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllCars: builder.query({
            query: (args) => {
              console.log(args);
              const params = new URLSearchParams();
      
              if (args) {
                args.forEach((item: TQueryParam) => {
                  params.append(item.name, item.value as string);
                });
              }
      
              return {
                url: '/cars',
                method: 'GET',
                params: params,
              };
            },
            transformResponse: (response: TResponseRedux<Car[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
            providesTags: ['cars'],
          }),
    })
})

export const {
    useGetAllCarsQuery
} = carManagementApi