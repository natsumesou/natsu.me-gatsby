import { Box } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Software = () => {
  const [t] = useTranslation();

  return (
    <Box>
    <h3>{t('test')}</h3>
    <div>aaaaaaaasfdadsfadsf</div>
    <p>asdfjadlsfjaksd<br></br>fjalksdf</p>
    </Box>
  )
}
