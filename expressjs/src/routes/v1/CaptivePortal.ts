//
// Display the captive portal when connected to the devices hotspot
//

import Logger from '@/common/logger'
import express, { Request } from 'express'
import process from 'process'

// Get the ExpressJS main router process
const router = express.Router()

// Captive portals on devices work by trying an online path to check to see if it receives
// a response. By intercepting the request to that path, we can make a captive portal appear.
// This list constitutes the routes we are aware of.

const getPortalUrl = (req: Request) => {
  const host = req.get('Host')
  const { protocol } = req
  const port = process.env.PORTAL_PORT
  const url = process.env.PORTAL_URL
  let finalUrl = '/#/captiveportal'
  if (port || url) {
    console.log(host, protocol, port)
    if (host && protocol && port) {
      finalUrl = `${protocol}://${host}:${port}`
    } else {
      finalUrl = url || 'localhost'
    }
  }
  console.log('Captive-portal url:', finalUrl)
  return finalUrl
}

// Redirect to captive-portal
router.get('/', (req, res) => {
  const portalUrl: string = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})

// Android
router.get('/connectivitycheck.gstatic.com', (req, res) => {
  const portalUrl: string = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('/gen_204', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('/generate_204', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('/mobile/status.php', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('connectivitycheck.android.com', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('clients3.google.com', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})

// iOS/OSX
router.get('/success.html', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('/hotspotdetect.html', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('/hotspot-detect.html', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})

// Microsoft
router.get('/ncsi.txt', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('msftconnecttest.com', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})
router.get('msftncsi.com', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})

// Kindle
router.get('/wifiredirect.html', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})

// FireFox
router.get('detectportal.firefox.com/canonical.html', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})

// Misc
router.get('/blank.html', (req, res) => {
  const portalUrl = getPortalUrl(req) || '/#/captiveportal'
  Logger.info('Redirecting to captive portal.')
  res.redirect(302, portalUrl)
})

export default router
