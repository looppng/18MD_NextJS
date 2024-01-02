import { compare } from "bcrypt";
import connectMongoDB from "../mongo/mongodb";
import UserModel, { IUser } from "../models/User";

interface UserLoginData {
  email: string;
  password: string;
}

export const loginUser = async ({
  email,
  password,
}: UserLoginData): Promise<IUser | null> => {
  await connectMongoDB();

  if (!email || !password) {
    throw new Error("Email or Password not entered");
  }

  const user: IUser | null = await UserModel.findOne({
    email,
  });

  if (!user) {
    throw new Error(`${email} doesnt exist in database`);
  }

  if (user.password) {
    const isValid = await compare(password, user.password);

    if (!isValid) {
      throw new Error();
    }
  } else {
    throw new Error("Something went wrong!");
  }

  return user;
};
