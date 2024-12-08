#!/usr/bin/env bash

echo "Setting up dcism.org files..."

# remove old copied files except for build files
find . -maxdepth 1 ! -name 'docs' ! -name 'LICENSE' ! -name 'node_modules' ! -name 'package.json' ! -name 'package-lock.json' ! -name 'dcism.sh' ! -name '.' ! -name '.*' -exec rm -rf {} +
# update files
git remote set-url origin https://github.com/usc-cisco/scientia.git
git reset --hard && git pull origin main

# remove subpath BASE_URL since we need to host in / inside dcism.org
grep -q '/scientia' docs/.vitepress/config.mts && sed -i "s|const BASE_URL = '/scientia';|const BASE_URL = '';|" docs/.vitepress/config.mts

# build the static assets and move it to scientia.dcism.org/
npm i && npm run docs:build
mv docs/.vitepress/dist/* ./

echo "Successfully built static assets and moved to root directory!"
