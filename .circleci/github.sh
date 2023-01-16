#!/usr/bin/env sh

# 构建
yarn docs:build
# 进入生成的构建文件夹
cd dist
git init

git config user.email "ab140140@163.com"
git config user.name "SoldierAb"
git checkout -b gh-pages
git add .
git commit -m 'docs: site deploy'

echo "before docs deploy"

git push --force git@github.com:SoldierAb/k-view-next.git gh-pages

