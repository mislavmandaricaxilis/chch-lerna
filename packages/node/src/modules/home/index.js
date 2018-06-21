import { Router } from 'express';

import * as home from './controllers/home.controller';

const router = Router();

router.route('/')
  .get(home.getIndex)
  .post(home.postIndex);

export default router;
