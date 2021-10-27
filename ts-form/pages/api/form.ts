import type { NextApiRequest, NextApiResponse } from 'next'
import validate from '../../lib/validate';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body)
  const { profile, newsletter } = body
  const nameValidation = Object.values(profile).every((x) => validate("name", x) === null)
  const phoneValidation = validate("phone", profile.phoneNumber) === null

  if (nameValidation && phoneValidation) {
    // to do: post to db
    res.status(200).json({ valid: true })
  }
  else if (!nameValidation || !phoneValidation) {
    res.status(200).json({ valid: false, profile: { firstName: profile.firstName || "", lastName: profile.lastName || "", phoneNumber: profile.phoneNumber || "" } })
  }
  else res.status(500).json({ error: "Unknown server error" })



}