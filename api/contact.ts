import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Campos obrigatórios faltando' });
  }

  // Aqui você pode salvar a mensagem, enviar email, etc.
  console.log('Mensagem recebida:', { name, email, message });

  return res.status(200).json({ message: 'Mensagem recebida com sucesso' });
}
