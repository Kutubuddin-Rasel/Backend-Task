import { Router } from 'express';
import * as userController from '../controllers/userController';
import { authenticate, uploadImages, validateBody } from '../middleware';
import { updateProfileSchema, changePasswordSchema } from '../validation/authSchemas';

const router = Router();
router.use(authenticate);

router.get('/profile', userController.getProfile);
router.put('/profile', validateBody(updateProfileSchema), userController.updateProfile);
router.post('/avatar', uploadImages.single('avatar'), userController.uploadAvatar);
router.delete('/avatar', userController.deleteAvatar);
router.put('/change-password', validateBody(changePasswordSchema), userController.changePassword);
router.delete('/account', userController.deleteAccount);

export default router;
