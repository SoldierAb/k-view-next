#!/usr/bin/env sh

# 进入生成的构建文件夹
cd dist

git init
git config user.email "ab140140@163.com"
git config user.name "SoldierAb"
git add -A
git commit -m 'docs: site deploy'

echo "before docs deploy"

git push -f git@github.com:SoldierAb/k-view-next.git gh-pages

