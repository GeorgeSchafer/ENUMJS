#!/bin/bash



git commit . -m "Releasing changes"
git push

git checkout Main
git commit -m "Releasing changes"
git merge Dev

git checkout Release
git commit -m "Releasing changes"
git merge Main

git checkout Dev