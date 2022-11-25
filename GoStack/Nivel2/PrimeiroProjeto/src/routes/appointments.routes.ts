import { Router } from "express";
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from "../repositories/appointmentsRepositories";
import CreateAppointmentService from "../services/CreateAppointmentService";

const appointmentsRepository = new AppointmentsRepository();

// Uma rota deve apenas ser responsavel por receber os dados, chamar outro arquivo para tratar, e devolver uma resposta

const appointmentsRouter = Router();

appointmentsRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(appointmentsRepository);
    const appointment = createAppointment.execute({ provider, date: parseDate });

    return res.json(appointment);
  } catch (e) {
    return res.status(400).json({ error: e.message })
  }
})

appointmentsRouter.get('/', (req, res) => {

  const appointments = appointmentsRepository.all();
  res.json(appointments);
})


export default appointmentsRouter;
