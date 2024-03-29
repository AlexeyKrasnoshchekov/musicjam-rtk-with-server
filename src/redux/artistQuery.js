import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const artistApi = createApi({
    reducerPath: 'artistApi',
    // baseQuery: fetchBaseQuery({baseUrl:`http://localhost:8000`}),
    baseQuery: fetchBaseQuery({baseUrl:`https://musicjam-server.vercel.app`}),
    endpoints: (build) => ({
        getArtist: build.query({
            query: (artistId) => `artist/${artistId}`
        })
    })
});

export const {useGetArtistQuery} = artistApi;
