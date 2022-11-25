import { Router } from "express";
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from "../repositories/appointmentsRepositories";
const appointmentsRepository = new AppointmentsRepository();

const appointmentsRouter = Router();

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(parsedDate);

  if (findAppointmentInSameDate) {
    return res.status(400).json({
      message: 'Appointment already exists'
    })
  }

  const appointment = appointmentsRepository.create(provider, parsedDate)

  return res.json(appointment);

})

appointmentsRouter.get('/', (req, res) => {

  const appointments = appointmentsRepository.all();
  res.json(appointments);
})


export default appointmentsRouter;
