import { Router } from 'express';
import * as noteController from '../controllers/noteController';
import { authenticate, validateBody, validateParams } from '../middleware';
import { createNoteSchema, updateNoteSchema, mongoIdParamSchema, copyTargetSchema } from '../validation/resourceSchemas';

const router = Router();
router.use(authenticate);

router.post('/', validateBody(createNoteSchema), noteController.createNote);
router.get('/', noteController.getNotes);
router.get('/:id', validateParams(mongoIdParamSchema), noteController.getNoteById);
router.put('/:id', validateParams(mongoIdParamSchema), validateBody(updateNoteSchema), noteController.updateNote);
router.put('/:id/favorite', validateParams(mongoIdParamSchema), noteController.toggleFavorite);
router.post('/:id/duplicate', validateParams(mongoIdParamSchema), noteController.duplicateNote);
router.post('/:id/copy', validateParams(mongoIdParamSchema), validateBody(copyTargetSchema), noteController.copyNote);
router.delete('/:id', validateParams(mongoIdParamSchema), noteController.deleteNote);

export default router;
