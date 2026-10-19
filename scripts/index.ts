import { writeChangeLog } from './utils/github';

(async () => {
    await writeChangeLog();
    console.info('Change Log Updated');
})();