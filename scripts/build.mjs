import config from '../cloudflare.config.ts';
import {cleanBuildOutputDir,writeAssets,writeRootConfig,writeWorkerConfig,readBuildOutput} from '@cloudflare/build-output-utils';
const root = process.cwd();
await cleanBuildOutputDir(root);
await writeAssets({root, sourceDirectory: 'site'});
await writeWorkerConfig({root, config: config.worker});
await writeRootConfig(root, config.settings, { isPreview: false });
const output = await readBuildOutput(root);
console.log(`Built ${output.workers.default.config.name}: static assets only.`);
