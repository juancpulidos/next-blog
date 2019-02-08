import React from 'react'
import PropTypes from 'prop-types'

function getGaScript (siteId) {
  return `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${siteId}');
`
}

function Tracking(props) {
  return (
    <div>
      <script dangerouslySetInnerHTML={{ __html: getGaScript(props.siteId) }} />
    </div>
  )
}

Tracking.propTypes = {
  siteId: PropTypes.string.isRequired,
}

export default Tracking