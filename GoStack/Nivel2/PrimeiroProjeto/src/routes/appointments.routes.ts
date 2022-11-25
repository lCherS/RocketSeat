import { Router } from "express";
import { startOfHour, parseISO, isEqual } from 'date-fns';

import Appointment from "../models/appointment";


const appointmentsRouter = Router();

const appointments: Appointment[] = new Array();

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment => isEqual(appointment.date,
    parsedDate));

  if (findAppointmentInSameDate) {
    return res.status(400).json({
      message: 'Appointment already exists'
    })
  }

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);
  return res.json(appointment);

})


export default appointmentsRouter;