import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils/functions";

export default {
	Mutation: {
		confirmSecret: async (_, args, { request }) => {
			console.log(request);
			const { email, secret } = args;
			const user = await prisma.user({ email });
			if (user.loginSecret === secret) {
				return generateToken(user.id);
			} else {
				throw Error("Wrong email/secret combination");
			}
		}
	}
};