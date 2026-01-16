import { Router } from 'express';
import * as userController from '../controllers/userController';
import { authenticate, uploadImages, validateBody } from '../middleware';
import { updateProfileSchema, changePasswordSchema, setPinSchema, verifyPinSchema, changePinSchema, removePinSchema } from '../validation/authSchemas';

const router = Router();
router.use(authenticate);

router.get('/profile', userController.getProfile);
router.put('/profile', validateBody(updateProfileSchema), userController.updateProfile);
router.post('/avatar', uploadImages.single('avatar'), userController.uploadAvatar);
router.delete('/avatar', userController.deleteAvatar);
router.put('/change-password', validateBody(changePasswordSchema), userController.changePassword);
router.delete('/account', userController.deleteAccount);

router.post('/pin', validateBody(setPinSchema), userController.setPin);
router.post('/pin/verify', validateBody(verifyPinSchema), userController.verifyPin);
router.put('/pin', validateBody(changePinSchema), userController.changePin);
router.delete('/pin', validateBody(removePinSchema), userController.removePin);

export default router;
