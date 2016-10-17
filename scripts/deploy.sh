#!/usr/bin/env bash
mkdir dist;
cd dist;
echo "starwarsapp.space" > CNAME;
cd ..;
cp web/build/ dist/;
git commit -am "Save local changes";
git checkout -B gh-pages;
git add -f dist;
git commit -am "Rebuild website";
git filter-branch -f --prune-empty --subdirectory-filter dist;
git push -f origin gh-pages
git checkout -;
