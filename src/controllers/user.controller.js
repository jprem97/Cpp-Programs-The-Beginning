import { asyncHandler as ah } from "../utils/asyncHandler.js";

export const registerUser = ah(async (req, res) => {
    return res.status(200).json({ message: "ok" });
});

