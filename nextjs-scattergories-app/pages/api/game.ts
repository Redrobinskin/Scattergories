import { NextApiRequest, NextApiResponse } from 'next';
import { generateQuestions, generateLetter } from '../../utils/questions';
import { generateAIPlayer } from '../../utils/aiPlayer';

export default async function game(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const letter = generateLetter();
    const questions = generateQuestions(letter);
    const aiPlayer = generateAIPlayer();

    res.status(200).json({
      letter,
      questions,
      players: [
        {
          name: req.body.name,
          score: 0,
          isAI: false,
        },
        aiPlayer,
      ],
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}