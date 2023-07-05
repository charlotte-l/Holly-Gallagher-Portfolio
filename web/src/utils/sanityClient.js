require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})
const {createClient} = require('@sanity/client');
const { sanity } = require('../../client-config')

module.exports = createClient({...sanity, useCdn: !process.env.SANITY_READ_TOKEN, token: process.env.SANITY_READ_TOKEN});
