import React from "react"

import useDebugMetadata from '../hooks/use-debug-metadata'
import Files from '../components/Files/Files'

export default props => {
  const metadata = useDebugMetadata();
  return <Files metadata={metadata}{...props}/>
}
