import { api } from "../../api";
import {
  type LoginRequestData,
  type LoginResponseData,
} from "@/shared/types/api/auth"

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseData, LoginRequestData>({
      query: (body) => ({
        url: "/api/v1/auth/sing-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
     
    })}
  )});
    export const { useLoginMutation } =
  authApi;