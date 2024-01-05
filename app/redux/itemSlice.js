import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  console.log("fetching posts");
  const response = await axios.get(process.env.NEXT_PUBLIC_QUAD_THEORY_API);
  return response.data.Items;
});
const itemSlice = createSlice({
  name: "itemSlice",
  initialState: {
    posts: [],
    loading: false,
    error: false,
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = [...state.posts, action.payload];
      console.log("adding posts", state.posts);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      // console.log("posts", state.posts);
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { addPosts } = itemSlice.actions;
export default itemSlice.reducer;
