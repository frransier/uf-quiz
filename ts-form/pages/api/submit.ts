import type { NextApiRequest, NextApiResponse } from 'next'
import validate from '../../lib/validate';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = JSON.parse(req.body)
    const { firstName, lastName, phoneNumber, newsletter } = body
    const areNamesValid = Object.values({ firstName, lastName }).every((x) => validate("name", x) === null)
    const isPhoneValid = validate("phone", phoneNumber) === null

    if (areNamesValid && isPhoneValid) {
      // to do: post to db
      res.status(200).json({ valid: true })
    }
    else if (!areNamesValid || !isPhoneValid) {
      res.status(200).json({ valid: false, profile: { firstName, lastName, phoneNumber } })
    }
  }
  catch (e: any) {
    res.status(500).json({ message: "Unknown server error. Contact support", log: e.message })
  }
}