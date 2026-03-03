import 'dotenv/config';
import { getPayload } from 'payload';
import config from './src/payload.config.js';

async function run() {
    const payload = await getPayload({ config });
    const users = await payload.find({ collection: 'users', limit: 1 });
    const user = users.docs[0];

    await payload.update({
        collection: 'users',
        id: user.id,
        data: { password: 'Getter19$mx19$' },
    });

    console.log(`✅ Password cambiado para ${user.email}`);
    console.log('🔑 Nuevo password: Getter19$mx19$');
    process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
