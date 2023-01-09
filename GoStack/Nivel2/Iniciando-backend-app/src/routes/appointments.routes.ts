import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from 'date-fns';

import AppointmentsRepository from "../repositories/appointmentsRepositories";
import CreateAppointmentService from "../services/CreateAppointmentService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
// Uma rota deve apenas ser responsavel por receber os dados, chamar outro arquivo para tratar, e devolver uma resposta

const appointmentsRouter = Router();
appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (req, res) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();
  res.json(appointments);
})

appointmentsRouter.post('/', async (req, res) => {
  try {
    const { provider_id, date } = req.body;
    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({ provider_id, date: parseDate });

    return res.json(appointment);
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
})

export default appointmentsRouter;
