import { Router } from 'express';
import * as folderController from '../controllers/folderController';
import { authenticate, validateBody, validateParams } from '../middleware';
import { createFolderSchema, updateFolderSchema, mongoIdParamSchema, copyTargetSchema } from '../validation/resourceSchemas';

const router = Router();
router.use(authenticate);

router.post('/', validateBody(createFolderSchema), folderController.createFolder);
router.get('/', folderController.getRootFolders);
router.get('/:id', validateParams(mongoIdParamSchema), folderController.getFolderById);
router.get('/:id/contents', validateParams(mongoIdParamSchema), folderController.getFolderContents);
router.put('/:id', validateParams(mongoIdParamSchema), validateBody(updateFolderSchema), folderController.updateFolder);
router.put('/:id/favorite', validateParams(mongoIdParamSchema), folderController.toggleFavorite);
router.post('/:id/duplicate', validateParams(mongoIdParamSchema), folderController.duplicateFolder);
router.post('/:id/copy', validateParams(mongoIdParamSchema), validateBody(copyTargetSchema), folderController.copyFolder);
router.delete('/:id', validateParams(mongoIdParamSchema), folderController.deleteFolder);

export default router;
