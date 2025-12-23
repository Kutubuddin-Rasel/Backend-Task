import { Router } from 'express';
import { globalSearch } from '../controllers/mixedController';
import { authenticate, validateQuery } from '../middleware';
import { searchQuerySchema } from '../validation/resourceSchemas';

const router = Router();
router.use(authenticate);

router.get('/', validateQuery(searchQuerySchema), globalSearch);

export default router;
