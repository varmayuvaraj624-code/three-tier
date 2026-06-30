import * as dotenv from "dotenv";

dotenv.config();

export const getConfig = (key: string) => {
  if (!key) {
    throw new Error("Config key can't be empty.");
  }

  return process.env[key];
};
