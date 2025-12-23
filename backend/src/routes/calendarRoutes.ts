import { Router } from 'express';
import { getItemsByDate, getMonthOverview } from '../controllers/mixedController';
import { authenticate, validateQuery } from '../middleware';
import { calendarDateSchema, calendarMonthSchema } from '../validation/resourceSchemas';

const router = Router();
router.use(authenticate);

router.get('/', validateQuery(calendarDateSchema), getItemsByDate);
router.get('/month', validateQuery(calendarMonthSchema), getMonthOverview);

export default router;
