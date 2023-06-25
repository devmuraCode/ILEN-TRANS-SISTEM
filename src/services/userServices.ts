import { UserAdd } from "./../types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types/user";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const response = await axios.get("http://localhost:3031/users");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
});

export const postUser = createAsyncThunk(
  "user/postUser",
  async (newUser: UserAdd) => {
    try {
      const response = await axios.post("http://localhost:3031/users", newUser);
      return response.data;
    } catch (error) {
      throw new Error("Failed to post user");
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (updatedUser: User) => {
    try {
      const response = await axios.put(
        `http://localhost:3031/users/${updatedUser.id}`,
        updatedUser
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId: number) => {
    try {
      await axios.delete(`http://localhost:3031/users/${userId}`);
      return userId;
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
);
