import express, { Response, Request } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.post('/signup', (req: Request, res: Response) => {
  try {
    const { email, username, password, address } = req.body;
    const missingInputs: string[] = [];

    if (!email) missingInputs.push("email");
    if (!username) missingInputs.push("username");
    if (!password) missingInputs.push("password");
    if (!address) missingInputs.push("address");

    if (missingInputs.length > 0) {
      res.status(400).json({ message: `Missing required fields: ${missingInputs.join(", ")}`, error: `Missing required fields: ${missingInputs.join(", ")}` })
      return
    }

    res.status(200).json({ message: 'Signup Successful' });
    return
  } catch (error) {
    res.status(500).json({ message: "There was an issue with the sign up. Please try again.", error })
    return
  }
});


export default app;