import path from 'path';
import { validate } from './validation';

const exceptionUrls: string[] = [
  'https://DOGU_HOST:3001',
  'https://api.dogutech.io/v1/projects/${projectId}/applications',
  'https://api.dogutech.io/v1/projects/${projectId}/routines/${routineId}/pipelines',
  'https://api.dogutech.io/v1/organizations/${organizationId}/applications',
  'https://github.com/dogu-team/${props.repo_name}.git',
];
const checkedUrls: { [url: string]: boolean } = {};
const rootPath = path.join(__dirname, '../');
const targetPaths = [`${rootPath}/docs`, `${rootPath}/src`, `${rootPath}/i18n`];

(async () => {
  await validate(targetPaths, {
    exceptionUrls,
    checkedUrls,
  });
})();
