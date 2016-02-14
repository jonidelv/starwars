#!/bin/sh

# Install global dependencies
sudo npm install -g bower
sudo npm install -g gulp

# Install local dependencies
npm install
bower install
