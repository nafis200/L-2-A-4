import { TQueryParam, Car, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
          url: "/cars",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<Car[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["cars"],
    }),
    getSingleCars: builder.query({
      query: (args) => {
        return {
          url: `/cars/${args}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<Car[]>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ["cars"],
    }),

    getAllOrders: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/orders/Allorder",
          method: "GET",
          params: params,
        };
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["cars"],
    }),

    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
    orderRevenue: builder.query({
      query: () => ({
        url: "/orders/revenue",
        method: "GET",
      }),
    }),

    orderCar: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
        };
      },
      invalidatesTags: ["cars"],
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useGetSingleCarsQuery,
  useGetAllOrdersQuery,
  useVerifyOrderQuery,
  useOrderRevenueQuery,
  useOrderCarMutation,
} = carManagementApi;
