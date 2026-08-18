import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../types/Post';

export interface SelectedPost {
  post: Post | null;
}

const initialState: SelectedPost = {
  post: null,
};

export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<Post | null>) => {
      return {
        ...state,
        post: action.payload,
      };
    },

    setNull: state => {
      return {
        ...state,
        post: null,
      };
    },
  },
});

export const { setPost, setNull } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
