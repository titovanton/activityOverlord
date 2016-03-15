#!/usr/bin/env bash

# hostname
hostname activityOverlord
echo "127.0.0.1 activityOverlord" >> /etc/hosts
echo "activityOverlord" > /etc/hostname

# .bashrc
echo "cd /vagrant/activityOverlord" >> /home/vagrant/.bashrc

apt-get update
apt-get upgrade -y

# # install sass
# gem install sass

# # MongoDB
# apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
# echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" |\
#   tee /etc/apt/sources.list.d/mongodb-org-3.2.list
# apt-get update
# # apt-get upgrade -y
# apt-get install -y mongodb-org

# node
apt-get autoremove -y node
apt-get install -y python-software-properties python g++ make
curl -sL https://deb.nodesource.com/setup_4.x | bash -
apt-get install -y nodejs

# sails and dependencies
npm install -g sails
npm install -g nodemon
npm install -g bcrypt

# # sails-mongo
# npm install -g sails-mongo

echo "Voila!"
