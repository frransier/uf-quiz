import type { NextApiRequest, NextApiResponse } from 'next'
import validate from '../../lib/validate';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const state = JSON.parse(req.body)
    const isValid = state.every((x: any) => {
      const value = {...x}
      delete value.error
      delete value.validation
      return validate(x.validation, Object.values(value)[0]) === null
    })
    
    
    if (isValid) {
      // to do: post to db
      res.status(200).json({ ok: true })
    }
    else {
      res.status(400).json({ status: res.statusCode  })
    }
  }
  catch (e: any) {
    res.status(500).json({ status: res.statusCode })
  }
}