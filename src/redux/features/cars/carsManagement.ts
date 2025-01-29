import  { TQueryParam, Car, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";



const carManagementApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllCars: builder.query({
            query: (args) => {
              console.log(args);
              const params = new URLSearchParams();
      
              if (args) {
                console.log(args,"args")
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
        getSingleCars: builder.query({
            query: (args) => {    
              return {
                url: `/cars/${args}`,
                method: 'GET',
              };
            },
            transformResponse: (response: TResponseRedux<Car[]>) => {
              return {
                data: response.data,
              };
            },
            providesTags: ['cars'],
        }),
        orderCar:builder.mutation({
          query:(data)=>({
            url:'/orders',
            method:'POST',
            body:data
          }),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          transformResponse: (response: TResponseRedux<any>) => {
            return {
              data: response.data,
            };
          },
        })
    })
})

export const {
    useGetAllCarsQuery,
    useGetSingleCarsQuery,
    useOrderCarMutation
} = carManagementApi