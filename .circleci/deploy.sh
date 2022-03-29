#!/usr/bin/env sh

# 构建
yarn docs:build
# 进入生成的构建文件夹
cd dist

git init
git add -A
git commit -m 'docs: site deploy'

echo "before docs deploy"

git push -f git@github.com:SoldierAb/k-view-next.git gh-pages

