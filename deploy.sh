#!/usr/bin/env sh

# abort on errors
set -e &&

# build
npm run build &&

# deploy to firebase
firebase login &&
firebase deploy
