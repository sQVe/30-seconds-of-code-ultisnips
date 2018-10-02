#!/usr/bin/env bash

git submodule foreach git pull origin master
npm run build
git commit --verbose --all --message "Update submodules and build"

