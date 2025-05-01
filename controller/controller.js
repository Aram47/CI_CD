import { service } from '../service/service.js';

export async function controller(req, res) {
  try {
    return res.status(200).json({
      message: 'Controller is running',
      user: await service(req),
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error in controller',
      error: error.message,
    });
  }
}