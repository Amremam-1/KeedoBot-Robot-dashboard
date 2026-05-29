import { string } from "zod";
import { api } from "../index";

export const getUsers = async () => {
  const res = await api.get("/robots/admin/keedo-users");

  return res.data;
};

export const getRobots = async () => {
  const res = await api.get("/robots/admin/all");

  return res.data;
};

export const changeStatus = async (robot_serial_number) => {
  const res = await api.post("/robots/admin/toggle-status", {
    robot_serial_number,
  });

  return res.data;
};
