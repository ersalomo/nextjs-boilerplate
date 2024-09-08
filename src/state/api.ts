import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

type Pokemon = {
    name: string;
}

const baseUrl = process.env["NEXT_PUBLIC_BASE_URL_API"];

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
        }),
        // other defined endpoints...
    }),
});


export const {
    useGetPokemonByNameQuery,
    // other defined endpoints...
} = api;


