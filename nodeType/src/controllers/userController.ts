import { Request, Response } from 'express';
import User from '../models/User';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken';
import sendErrorResponse from '../utils/sendErrorResponse';

const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        sendErrorResponse(res, 400, 'El usuario ya existe');
        return;
    }

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    if (savedUser) {
        res.status(201).json({
            name: savedUser.name,
            token: generateToken(savedUser.name, savedUser.email),
        });
    } else {
        sendErrorResponse(res, 400, 'Error en el servidor');
        return;
    }
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.status(200).json({
            name: user.name,
            token: generateToken(user.name, user.email),
        });
    } else {
        sendErrorResponse(res, 401, 'Password o User incorrecto');
        return;
    }
});

const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const authUserSeq = res.locals.user.userSeq;

    const userSeq = Number(req.params.userSeq);

    const user = await User.findOne({ userSeq: userSeq });

    if (!user) {
        sendErrorResponse(res, 404, `${userSeq} Sin autorización para acceder a este recurso.`);
        return;
    }

/*     if (user.userSeq !== authUserSeq) {
        sendErrorResponse(res, 401, 'Unauthorized');
        return;
    } */

    user.name = req.body.name;

    await user.updateOne({ name: req.body.name });
    const updatedUser = await User.findOne({ userSeq: userSeq });
    res.status(200).json({ name: updatedUser!.name });
});



const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const authUserSeq = res.locals.user.userSeq;

    const userSeq = Number(req.params.userSeq);

    const user = await User.findOne({ userSeq: userSeq });

    if (!user) {
        sendErrorResponse(res, 404, `${userSeq} Sin autorización para acceder a este recurso.`);
        return;
    }

/*     if (user.userSeq !== authUserSeq) {
        sendErrorResponse(res, 401, 'Unauthorized');
        return;
    } */

    await User.deleteOne({ userSeq: authUserSeq });
    res.status(200).json({ message: 'Usuario Eliminado' });
});

export { registerUser, loginUser, updateUser, deleteUser };