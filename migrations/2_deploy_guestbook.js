/* eslint-disable no-undef */
const Guestbook = artifacts.require('Guestbook')
module.exports = function (deployer) {
  deployer.deploy(Guestbook)
}
