import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import homeSlice from './slice/homeSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        home: homeSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
